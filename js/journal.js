/**
 * Reflection Journal Controller
 * Searchable, filterable list of session reflection notes and guided questions
 */

class JournalController {
  render() {
    const container = document.getElementById('journal');
    if (!container) return;

    const journalData = window.apexStore.journal.entries;

    container.innerHTML = `
      <div class="page-container">
        <div class="page-header flex justify-between items-center">
          <div class="page-header-title">
            <h1>Reflection Journal</h1>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-outline flex items-center gap-1" id="btnExportJournalText"><i data-lucide="download" class="icon-sm"></i> Export Journal</button>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="card mb-6">
          <div class="form-group mb-0">
            <input type="text" class="form-control" id="txtJournalSearch" placeholder="Search reflection notes, corner names, or key learnings...">
          </div>
        </div>

        <!-- Journal Entries List -->
        <div id="journalEntriesList">
          ${this.renderEntries(journalData)}
        </div>
      </div>
    `;

    window.renderLucideIcons();

    // Search filter listener
    document.getElementById('txtJournalSearch')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = journalData.filter(item => 
        (item.notes && item.notes.toLowerCase().includes(q)) ||
        (item.reflection && item.reflection.toLowerCase().includes(q)) ||
        (item.sessionId && item.sessionId.toLowerCase().includes(q))
      );
      document.getElementById('journalEntriesList').innerHTML = this.renderEntries(filtered);
      window.renderLucideIcons();
    });

    document.getElementById('btnExportJournalText')?.addEventListener('click', () => {
      const text = journalData.map(e => `[${new Date(e.date).toLocaleDateString()}] Session ${e.sessionId}\nConfidence: ${e.confidence}/5\nNotes: ${e.notes}\nReflection: ${e.reflection}\n-------------------`).join('\n\n');
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'apex_reflection_journal.txt';
      a.click();
    });
  }

  renderEntries(entries) {
    if (!entries || entries.length === 0) {
      return `
        <div class="card text-center py-6">
          <p class="text-muted">No journal reflections recorded yet. Complete a session assessment to write your first entry!</p>
        </div>
      `;
    }

    return entries.map(entry => `
      <div class="card mb-4">
        <div class="card-header">
          <div>
            <h3>Module ${entry.moduleId} › Session ${entry.sessionNumber} Reflection</h3>
            <span class="text-muted" style="font-size:0.8rem;">${new Date(entry.date).toLocaleDateString()}</span>
          </div>
          <div class="text-warning" style="font-size:1.1rem; font-weight:600;">
            ${entry.confidence} / 5 ★
          </div>
        </div>

        ${entry.notes ? `
          <div class="mb-3">
            <h4 style="font-size:0.85rem; color:var(--color-text-muted); text-transform:uppercase;">Challenge & Reference Notes</h4>
            <p class="mt-1" style="font-size:0.95rem;">"${entry.notes}"</p>
          </div>
        ` : ''}

        ${entry.reflection ? `
          <div>
            <h4 style="font-size:0.85rem; color:var(--color-primary); text-transform:uppercase;">Guided Reflection</h4>
            <p class="mt-1" style="font-size:0.95rem; background:var(--color-surface-light); padding:0.75rem 1rem; border-radius:8px;">"${entry.reflection}"</p>
          </div>
        ` : ''}
      </div>
    `).join('');
  }
}

window.journalController = new JournalController();
