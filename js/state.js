/**
 * ApexStore - Client-Only Data Persistence & State Management
 * Manages localStorage key: 'apex_progress', 'apex_settings', 'apex_journal'
 */

class ApexStore {
  constructor() {
    this.STORAGE_KEY = 'apex_progress';
    this.SETTINGS_KEY = 'apex_settings';
    this.JOURNAL_KEY = 'apex_journal';
    this.listeners = [];
    
    this.data = this.loadProgress();
    this.settings = this.loadSettings();
    this.journal = this.loadJournal();
    
    this.initAchievements();
  }

  // Load progress data from localStorage
  loadProgress() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('ApexStore: Failed to read from localStorage', e);
    }
    return this.getDefaultProgress();
  }

  // Default state initialization
  getDefaultProgress() {
    return {
      currentModule: 1,
      currentSession: 1,
      completedSessions: [], // Array of session keys e.g. ['1-1', '1-2']
      completedModules: [],  // Array of module IDs e.g. [1]
      sessions: {},          // Detailed session records keyed by '1-1'
      achievements: ['first_visit'], // Unlocked achievement IDs
      currentStreak: 0,
      longestStreak: 0,
      lastSessionDate: null,
      equipmentSetup: null,  // { forza: boolean, wheel: 'moza_r3'|'other'|'controller' }
      version: '1.0.0'
    };
  }

  saveProgress() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
      this.notifyListeners();
    } catch (e) {
      console.error('ApexStore: Failed to save progress data', e);
    }
  }

  loadSettings() {
    try {
      const raw = localStorage.getItem(this.SETTINGS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { driverName: 'DRIVER APEX-01', theme: 'dark', defaultCar: 'Mazda MX-5', defaultTrack: 'Laguna Seca', sidebarCollapsed: false, ...parsed };
      }
    } catch (e) {}
    return {
      driverName: 'DRIVER APEX-01',
      theme: 'dark',
      defaultCar: 'Mazda MX-5',
      defaultTrack: 'Laguna Seca',
      sidebarCollapsed: false
    };
  }

  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    try {
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(this.settings));
      this.notifyListeners();
    } catch (e) {}
  }

  setDriverName(name) {
    const trimmed = (name || '').trim() || 'DRIVER APEX-01';
    this.saveSettings({ driverName: trimmed });
  }

  getNextRecommendedSession() {
    if (typeof APEX_CONTENT === 'undefined' || !APEX_CONTENT.modules) {
      return { moduleId: this.data.currentModule || 1, sessionId: this.data.currentSession || 1, title: 'Session 1', car: 'Mazda MX-5', track: 'Laguna Seca' };
    }

    // Check Module 0 orientation sessions first
    const mod0 = APEX_CONTENT.modules.find(m => m.id === 0);
    if (mod0 && mod0.sessions) {
      for (const s of mod0.sessions) {
        if (!this.isSessionCompleted(0, s.id)) {
          return { moduleId: 0, sessionId: s.id, title: s.title, car: s.car, track: s.track };
        }
      }
    }

    // Check active module sessions
    const currentModId = this.data.currentModule || 1;
    const activeMod = APEX_CONTENT.modules.find(m => m.id === currentModId) || APEX_CONTENT.modules[1];
    if (activeMod && activeMod.sessions) {
      for (const s of activeMod.sessions) {
        if (!this.isSessionCompleted(currentModId, s.id)) {
          return { moduleId: currentModId, sessionId: s.id, title: s.title, car: s.car, track: s.track };
        }
      }
    }

    // Fallback if all sessions in active module completed
    const fallbackSessionId = this.data.currentSession || 1;
    const fallbackSession = activeMod?.sessions?.find(s => s.id === fallbackSessionId);
    return {
      moduleId: currentModId,
      sessionId: fallbackSessionId,
      title: fallbackSession ? fallbackSession.title : `Session ${fallbackSessionId}`,
      car: fallbackSession ? fallbackSession.car : 'Mazda MX-5',
      track: fallbackSession ? fallbackSession.track : 'Laguna Seca'
    };
  }

  loadJournal() {
    try {
      const raw = localStorage.getItem(this.JOURNAL_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { entries: [] };
  }

  saveJournal() {
    try {
      localStorage.setItem(this.JOURNAL_KEY, JSON.stringify(this.journal));
    } catch (e) {}
  }

  // Record Equipment Setup
  setEquipmentSetup(setup) {
    this.data.equipmentSetup = setup;
    this.saveProgress();
  }

  // Get Session Record
  getSession(moduleId, sessionId) {
    const key = `${moduleId}-${sessionId}`;
    return this.data.sessions[key] || null;
  }

  isSessionCompleted(moduleId, sessionId) {
    const key = `${moduleId}-${sessionId}`;
    return this.data.completedSessions.includes(key);
  }

  // Check if a module is unlocked
  isModuleUnlocked(moduleId) {
    if (moduleId === 0 || moduleId === 1) return true;
    const prevModuleId = moduleId - 1;
    const prevModConfig = (typeof APEX_CONTENT !== 'undefined' && APEX_CONTENT.modules)
      ? APEX_CONTENT.modules.find(m => m.id === prevModuleId)
      : null;
    
    if (prevModConfig && prevModConfig.sessions && prevModConfig.sessions.length > 0) {
      return prevModConfig.sessions.every(s => 
        this.data.completedSessions.includes(`${prevModuleId}-${s.id}`)
      );
    }
    return this.data.completedModules.includes(prevModuleId);
  }

  // Check if a session is unlocked
  isSessionUnlocked(moduleId, sessionId) {
    if (!this.isModuleUnlocked(moduleId)) return false;
    if (sessionId === 1) {
      return this.isModuleUnlocked(moduleId);
    }
    
    const prevKey = `${moduleId}-${sessionId - 1}`;
    return this.data.completedSessions.includes(prevKey);
  }

  // Generate friendly unlock requirement explanation
  getUnlockRequirementText(moduleId, sessionId) {
    if (!this.isModuleUnlocked(moduleId)) {
      const prevModId = moduleId - 1;
      const prevMod = (typeof APEX_CONTENT !== 'undefined' && APEX_CONTENT.modules)
        ? APEX_CONTENT.modules.find(m => m.id === prevModId)
        : null;
      const prevTitle = prevMod ? prevMod.title : `Module ${prevModId}`;
      const prevTotal = (prevMod && prevMod.sessions && prevMod.sessions.length > 0) ? prevMod.sessions.length : 12;
      return `Module ${moduleId} is locked! You must complete all ${prevTotal} sessions in Module ${prevModId} ("${prevTitle}") to unlock this module.`;
    }
    if (sessionId === 1) {
      return `Unlocked`;
    }
    const prevSessionId = sessionId - 1;
    const modConfig = (typeof APEX_CONTENT !== 'undefined' && APEX_CONTENT.modules)
      ? APEX_CONTENT.modules.find(m => m.id === moduleId)
      : null;
    const prevSession = modConfig && modConfig.sessions ? modConfig.sessions.find(s => s.id === prevSessionId) : null;
    const challengeTitle = (prevSession && prevSession.challenge) ? prevSession.challenge.title : `Session ${moduleId}-${prevSessionId} Challenge`;
    return `Session ${moduleId}-${sessionId} is locked! Complete Session ${moduleId}-${prevSessionId} Challenge ("${challengeTitle}") to unlock.`;
  }

  // Complete a session & update state
  completeSession(moduleId, sessionId, sessionData) {
    const key = `${moduleId}-${sessionId}`;
    
    if (!this.data.completedSessions.includes(key)) {
      this.data.completedSessions.push(key);
    }

    const now = new Date().toISOString();
    this.data.sessions[key] = {
      ...this.data.sessions[key],
      ...sessionData,
      completed: true,
      dateCompleted: now
    };

    // Update current active session pointer
    const modConfig = (typeof APEX_CONTENT !== 'undefined' && APEX_CONTENT.modules)
      ? APEX_CONTENT.modules.find(m => m.id === moduleId)
      : null;
    const maxSessions = (modConfig && modConfig.sessions && modConfig.sessions.length > 0) ? modConfig.sessions.length : 12;

    if (sessionId < maxSessions) {
      this.data.currentSession = sessionId + 1;
    } else {
      if (!this.data.completedModules.includes(moduleId)) {
        this.data.completedModules.push(moduleId);
      }
      if (moduleId < 4) {
        this.data.currentModule = moduleId + 1;
        this.data.currentSession = 1;
      }
    }

    // Save reflection to journal
    if (sessionData.reflection || sessionData.notes) {
      this.addJournalEntry({
        id: `journal-${Date.now()}`,
        sessionId: key,
        moduleId,
        sessionNumber: sessionId,
        date: now,
        confidence: sessionData.ratings ? sessionData.ratings.confidence : 3,
        notes: sessionData.notes || '',
        reflection: sessionData.reflection || '',
        bestLap: sessionData.lapTime || null
      });
    }

    // Update Streak Calculation
    this.updateStreak();

    // Check & Unlock Achievements
    this.checkAchievements(key, sessionData);

    this.saveProgress();
  }

  // Update streak counter
  updateStreak() {
    const now = new Date();
    if (!this.data.lastSessionDate) {
      this.data.currentStreak = 1;
      this.data.longestStreak = 1;
    } else {
      const lastDate = new Date(this.data.lastSessionDate);
      const diffTime = Math.abs(now - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 7) {
        // Continuous activity within a week
        if (diffDays > 1) {
          this.data.currentStreak += 1;
        }
      } else {
        this.data.currentStreak = 1; // reset streak
      }
      
      if (this.data.currentStreak > this.data.longestStreak) {
        this.data.longestStreak = this.data.currentStreak;
      }
    }
    this.data.lastSessionDate = now.toISOString();
  }

  // Add Reflection Journal Entry
  addJournalEntry(entry) {
    // Avoid duplicate entries for same session
    const existingIdx = this.journal.entries.findIndex(e => e.sessionId === entry.sessionId);
    if (existingIdx >= 0) {
      this.journal.entries[existingIdx] = entry;
    } else {
      this.journal.entries.unshift(entry);
    }
    this.saveJournal();
  }

  // Calculations for Scorecard (Three-Pillar System)
  calculateModuleScore(moduleId = 1) {
    const moduleSessions = this.data.completedSessions.filter(k => k.startsWith(`${moduleId}-`));
    if (moduleSessions.length === 0) return { overall: 0, lapScore: 0, techniqueScore: 0, consistencyScore: 0 };

    let totalRatings = 0;
    let ratingCount = 0;
    let totalLapDiff = 0;
    let lapCount = 0;
    let totalSpins = 0;

    moduleSessions.forEach(key => {
      const sess = this.data.sessions[key];
      if (sess && sess.ratings) {
        const r = sess.ratings;
        const avgRating = ((r.brakeConsistency || 3) + (r.apexAccuracy || 3) + (r.throttleControl || 3) + (r.overallControl || 3) + (r.confidence || 3)) / 5;
        totalRatings += avgRating;
        ratingCount++;
      }
      if (sess && sess.lapTime && sess.targetLapTime) {
        const diff = Math.max(0, sess.targetLapTime - sess.lapTime);
        totalLapDiff += diff;
        lapCount++;
      }
      if (sess && sess.spinCount !== undefined) {
        totalSpins += sess.spinCount;
      }
    });

    const techniqueScore = ratingCount > 0 ? Math.round((totalRatings / ratingCount) * 20) : 60; // 0-100
    const lapScore = lapCount > 0 ? Math.min(100, Math.round(70 + (totalLapDiff / lapCount) * 5)) : 70;
    const consistencyScore = Math.max(40, 100 - (totalSpins * 5));

    const overall = Math.round((lapScore * 0.3) + (techniqueScore * 0.4) + (consistencyScore * 0.3));

    return { overall, lapScore, techniqueScore, consistencyScore };
  }

  // Calculate Average Ratings Across All Completed Sessions
  getAverageRatings() {
    const keys = this.data.completedSessions;
    if (keys.length === 0) return { brakeConsistency: 3, apexAccuracy: 3, throttleControl: 3, overallControl: 3, confidence: 3 };

    let totals = { brakeConsistency: 0, apexAccuracy: 0, throttleControl: 0, overallControl: 0, confidence: 0 };
    let count = 0;

    keys.forEach(k => {
      const sess = this.data.sessions[k];
      if (sess && sess.ratings) {
        totals.brakeConsistency += sess.ratings.brakeConsistency || 3;
        totals.apexAccuracy += sess.ratings.apexAccuracy || 3;
        totals.throttleControl += sess.ratings.throttleControl || 3;
        totals.overallControl += sess.ratings.overallControl || 3;
        totals.confidence += sess.ratings.confidence || 3;
        count++;
      }
    });

    if (count === 0) return { brakeConsistency: 3, apexAccuracy: 3, throttleControl: 3, overallControl: 3, confidence: 3 };

    return {
      brakeConsistency: Number((totals.brakeConsistency / count).toFixed(1)),
      apexAccuracy: Number((totals.apexAccuracy / count).toFixed(1)),
      throttleControl: Number((totals.throttleControl / count).toFixed(1)),
      overallControl: Number((totals.overallControl / count).toFixed(1)),
      confidence: Number((totals.confidence / count).toFixed(1))
    };
  }

  // Achievement Engine
  initAchievements() {
    if (!this.data.achievements.includes('first_visit')) {
      this.data.achievements.push('first_visit');
      this.saveProgress();
    }
  }

  checkAchievements(lastSessionKey, sessionData) {
    const newlyUnlocked = [];

    // First Session Completed
    if (this.data.completedSessions.length >= 1 && !this.data.achievements.includes('first_session')) {
      this.data.achievements.push('first_session');
      newlyUnlocked.push({ id: 'first_session', title: 'First Steps', desc: 'Completed your first racing coaching session.' });
    }

    // Line Master (3 sessions in Module 1)
    if (this.data.completedSessions.filter(k => k.startsWith('1-')).length >= 3 && !this.data.achievements.includes('line_master')) {
      this.data.achievements.push('line_master');
      newlyUnlocked.push({ id: 'line_master', title: 'Line Master', desc: 'Understood the fundamentals of corner radius.' });
    }

    // Module 1 Completion
    if (this.data.completedSessions.filter(k => k.startsWith('1-')).length >= 12 && !this.data.achievements.includes('the_completer')) {
      this.data.achievements.push('the_completer');
      newlyUnlocked.push({ id: 'the_completer', title: 'The Completer', desc: 'Successfully finished Module 1: The Line!' });
    }

    // Streak Achievement
    if (this.data.currentStreak >= 3 && !this.data.achievements.includes('streak_master')) {
      this.data.achievements.push('streak_master');
      newlyUnlocked.push({ id: 'streak_master', title: 'Consistent Racer', desc: 'Maintained a 3-week practice streak.' });
    }

    return newlyUnlocked;
  }

  // Export Progress JSON
  exportData() {
    const payload = {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      progress: this.data,
      settings: this.settings,
      journal: this.journal
    };
    return JSON.stringify(payload, null, 2);
  }

  // Import Progress JSON
  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && parsed.progress && parsed.version) {
        this.data = parsed.progress;
        if (parsed.settings) this.settings = parsed.settings;
        if (parsed.journal) this.journal = parsed.journal;
        
        this.saveProgress();
        this.saveSettings(this.settings);
        this.saveJournal();
        return { success: true, message: 'Progress successfully imported!' };
      }
    } catch (e) {
      console.error('Import failed:', e);
    }
    return { success: false, message: 'Invalid backup file format.' };
  }

  // Reset Progress
  resetData() {
    this.data = this.getDefaultProgress();
    this.journal = { entries: [] };
    this.saveProgress();
    this.saveJournal();
  }

  onChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.data));
  }
}

// Global Store Instance
window.apexStore = new ApexStore();
