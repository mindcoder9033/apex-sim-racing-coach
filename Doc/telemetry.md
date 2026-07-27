# Telemetry: The Data-Driven Path to Faster Laps

**A Complete Beginner's Guide to Understanding, Learning, and Interpreting Telemetry Data**

*Based on the principles of Going Faster! Mastering the Art of Race Driving by the Skip Barber Racing School*

---

## 1. Module Overview

### 1.1 Module Summary

| Attribute | Details |
|-----------|---------|
| **Module** | Telemetry Basics |
| **Title** | Understanding Your Data |
| **Duration** | Self-paced (recommended: 2-3 weeks) |
| **Core Focus** | Reading, interpreting, and applying telemetry data |
| **Required Tools** | Forza Motorsport 2023, Moza R3, Telemetry app |
| **Skill Level** | Complete Beginner |

### 1.2 What is Telemetry?

> *"Data collection systems replace theory with hard fact."* — Going Faster!

Telemetry is the collection and analysis of data from your vehicle while driving. In sim racing, telemetry captures everything you do with the controls and everything the car does in response.

Think of telemetry as a **truth-teller**. It doesn't care about your feelings, your excuses, or how fast you *thought* you were going. It shows you exactly what happened—every input, every corner, every mistake.

**What Telemetry Can Show You:**

| Without Telemetry | With Telemetry |
|-------------------|----------------|
| "I think I braked too late" | "I braked 15 meters later than my best lap" |
| "I feel like I'm smooth" | "My throttle trace shows I stabbed it at apex" |
| "I don't know where I'm losing time" | "I'm 0.3s slower in Turn 6, 0.2s in Turn 9" |

### 1.3 Why Telemetry Matters

> *"The difference between the world class driver and the average racer is that the champions recognize their mistakes sooner."* — Mario Andretti, quoted in Going Faster!

**Telemetry helps you recognize your mistakes sooner.**

| Reason | Why It Matters |
|--------|----------------|
| **Objectivity** | Data doesn't lie. It shows you what you actually did. |
| **Precision** | You can see differences of meters, tenths of seconds, and percentages. |
| **Comparison** | Compare your laps to see what works and what doesn't. |
| **Learning** | Identify your specific weaknesses and fix them. |
| **Progress** | Track your improvement over time. |

### 1.4 What You Will Learn

By the end of this module, you will:

- ✅ Set up telemetry with Forza Motorsport 2023
- ✅ Read and understand key telemetry channels
- ✅ Identify good vs bad driving patterns
- ✅ Use telemetry to diagnose your mistakes
- ✅ Compare your laps to find time
- ✅ Turn data into actionable practice
- ✅ Use telemetry to support your Moza R3 Force Feedback

---

## 2. Setting Up Telemetry

### 2.1 What You Need

| Requirement | Details |
|-------------|---------|
| **Game** | Forza Motorsport 2023 (PC or Xbox) |
| **Wheel** | Moza R3 (or any compatible wheel) |
| **Computer** | PC to run telemetry app (can be same as gaming PC) |
| **Network** | Local network connection |
| **Software** | Telemetry app (free options available) |

### 2.2 Enabling Data Out in Forza Motorsport 2023

Forza Motorsport 2023 includes a built-in telemetry output feature called "Data Out."

**Step-by-Step:**

1. Launch Forza Motorsport 2023
2. Navigate to **Settings** → **Gameplay & HUD**
3. Scroll to the **"UDP Race Telemetry"** section at the bottom
4. Configure the following parameters:

| Setting | Value | Purpose |
|---------|-------|---------|
| **Data Out** | ON | Enables UDP telemetry transmission |
| **Data Out IP Address** | 127.0.0.1 | Sends to localhost (your PC) |
| **Data Out IP Port** | 9999 or 5300 | Target port for the listener |
| **Data Out Packet Format** | CAR DASH | Full telemetry data (331 bytes) |

> *"After being configured in-game, telemetry output sends data packets for use by external apps. This one-way UDP traffic is sent... at a rate of 60 packets per second."*

**Important Notes:**

- Telemetry only sends when you're **driving**. The game won't transmit data in menus or replays.
- Forza Motorsport 2023 uses **331-byte packets**.
- The **"Dash" format** contains all the data you need.

### 2.3 Xbox vs PC

| Platform | Telemetry Support |
|----------|-------------------|
| **Xbox** | ✅ Supported. Set IP to your device's IP address |
| **PC** | ✅ Supported. Use 127.0.0.1 for local apps |

**For Xbox users:** You'll need to run the telemetry app on a separate PC or laptop connected to the same network.

### 2.4 Recommended Telemetry Apps

| Tool | Platform | Features |
|------|----------|----------|
| **Forza-data-tools** | Windows | Terminal output, CSV logging, web dashboard |
| **RS Dash ASR** | iOS, Android, Windows | Live dashboards, lap charts |
| **Simracing Telemetry** | Windows (Go) | Record and display telemetry |
| **Forza Telemetry** | Windows | CSV logging, live dashboard |

### 2.5 Getting Started with Forza-data-tools

**This is the recommended tool for beginners.**

**Option 1: Quick Start**

1. Download the latest release from GitHub
2. Run: `./fdt -j -c log.csv`
3. Open your browser to `http://localhost:8080` for the dashboard

**Option 2: Terminal Only**

```bash
./fdt -q -c telemetry_log.csv
```

This logs all telemetry to a CSV file for later analysis.

**Option 3: Docker**

```bash
docker run --rm -p 9999:9999/udp -p 8080:8080 forza-data-tools -j -q
```

### 2.6 Understanding the Data Stream

The telemetry stream includes (but is not limited to):

| Category | Data Points |
|----------|-------------|
| **Engine** | RPM, max RPM, idle RPM |
| **Speed** | Vehicle speed, X/Y/Z velocity components |
| **Acceleration** | G-forces in all directions (lateral, longitudinal, vertical) |
| **Controls** | Throttle %, Brake %, Steering angle |
| **Suspension** | Travel for each wheel |
| **Tires** | Slip ratio, slip angle, wheel speed, temperature |
| **Surface** | Rumble strip contact, puddle depth |
| **Orientation** | Yaw, pitch, roll |
| **Position** | Car position on track |

> *"In the car's local space: X = right, Y = up, Z = forward."*

---

## 3. The Language of Telemetry

### 3.1 The Three Core Channels

Before diving deep, understand the three most important channels:

```
┌─────────────────────────────────────────────────────────────────────┐
│  TELEMETRY CHANNELS                                                │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │  THROTTLE   │  │   BRAKE     │  │  STEERING   │               │
│  │             │  │             │  │             │               │
│  │  0% to 100% │  │  0% to 100% │  │  -720° to   │               │
│  │  (squeeze)  │  │  (squeeze)  │  │   +720°     │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │   SPEED     │  │     RPM     │  │     G       │               │
│  │             │  │             │  │             │               │
│  │   MPH/KPH   │  │  Engine     │  │   Forces    │               │
│  │             │  │  Revolutions│  │  (Grip)     │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 The Three Fundamental Questions

When analyzing telemetry, always ask:

1. **Where** on the track did this happen?
2. **What** did I do with the controls?
3. **Why** did the car respond that way?

### 3.3 The Going Faster! Framework

*Going Faster!* teaches that there are three fundamental problems in racing:

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    THE THREE CORNERSTONES                          │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │   THE LINE  │  │CORNER EXIT  │  │BRAKING &    │               │
│  │             │  │             │  │ENTERING     │               │
│  │  Where to   │  │  Carrying   │  │  Efficiently│               │
│  │  drive      │  │  speed      │  │  slowing    │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Telemetry helps you diagnose all three.**

| Cornerstone | What to Look For in Telemetry |
|-------------|-------------------------------|
| **The Line** | Steering trace, speed trace through corner, apex position |
| **Corner Exit** | Throttle trace, speed at track-out, RPM at exit |
| **Braking & Entering** | Brake pressure, brake point location, trail-braking duration |

---

## 4. Reading the Data

### 4.1 Throttle Trace

**What It Shows:**
How and when you apply the accelerator.

**The Going Faster! Principle:**
> *"A gradual increase in throttle will tend to create understeer. An abrupt application of throttle will tend to create oversteer."* — Going Faster!

**What Good Looks Like:**

```
Throttle %
  100% ──────────────────╭──╮
       │                ╱    ╲
   50% │              ╱       ╲
       │            ╱          ╲
    0% ────────────╯────────────╯───
         Entry     Apex      Exit

    "The Squeeze" — Progressive, smooth build
```

**What Bad Looks Like:**

```
Throttle %
  100% ────╱████████████████████████
       │  ╱
   50% │ ╱
       │╱
    0% ──────────────────────────────
         Entry     Apex      Exit

    "The Stab" — Abrupt, jerky application
```

**Questions to Ask:**

| Question | What to Check |
|----------|---------------|
| Is my throttle smooth and progressive? | Look for gradual slope, not a vertical line |
| Am I at 100% by track-out? | Check throttle position at exit |
| Do I have to lift mid-corner? | Look for dips in throttle trace |
| Am I creating wheelspin? | Check tire slip ratio |

**Moza R3 Connection:**
Your wheel's FFB will tell you when the rear tires are losing grip. The throttle trace will show you if you caused it with abrupt application.

---

### 4.2 Brake Trace

**What It Shows:**
How and when you apply the brakes.

**The Going Faster! Principle:**
> *"Threshold braking is matching the appropriate brake pedal pressure to the maximum grip of the tire."* — Going Faster!

**What Good Looks Like:**

```
Brake %
  100% ────╭─────────────────╮
       │  ╱                   ╲
   50% │ ╱                     ╲
       │╱                       ╲
    0% ──────────────────────────╯───
         Approach  Turn-In   Apex

    "Threshold Braking" — Hard, then progressive release
```

**What Bad Looks Like:**

```
Brake %
  100% ────╱╲──────────────────
       │  ╱  ╲
   50% │ ╱    ╲
       │╱      ╲
    0% ─────────╯───────────────────
         Approach  Turn-In   Apex

    "The Stab" — Abrupt, then too early release
```

**What Lockup Looks Like:**

```
Brake %
  100% ────╱╲╱╲╱╲─────────────
       │  ╱  ─  ─  ╲
   50% │ ╱              ╲
       │╱                ╲
    0% ───────────────────╯─────────
         Approach  Turn-In   Apex

    "Pumping" — Inconsistent pressure causing lockups
```

**Questions to Ask:**

| Question | What to Check |
|----------|---------------|
| Is my brake application smooth? | Look for gradual rise, not a spike |
| Am I threshold braking? | Check for high, steady pressure |
| Am I trail-braking? | Check pressure continuing past turn-in |
| Am I locking up? | Check for pressure drops (releasing to unlock) |

**Moza R3 Connection:**
Your wheel's FFB will go light when you lock the front tires. Your pedals' Hall sensors will show the pressure you applied.

---

### 4.3 Steering Trace

**What It Shows:**
How and when you turn the wheel.

**The Going Faster! Principle:**
> *"The primary symptom of early apexing is the need to increase the amount of steering effort past the apex."* — Going Faster!

**What Good Looks Like:**

```
Steering Angle
  Right ────╭─────────────────────
       │   ╱
   0%  │  ╱
       │ ╱
  Left ──╯────────────────────────
         Turn-In  Apex      Exit

    "Unwinding" — Steady turn-in, gradual unwind
```

**What Bad Looks Like:**

```
Steering Angle
  Right ────╭─────────────────────
       │   ╱                    ╭─
   0%  │  ╱                    ╱
       │ ╱                    ╱
  Left ──╯────────────────────╯───
         Turn-In  Apex      Exit

    "Early Apex" — More steering needed past apex
```

**What Late Apex Looks Like:**

```
Steering Angle
  Right ────╭─────────────────────
       │   ╱
   0%  │  ╱               ╭──────
       │ ╱               ╱
  Left ──╯───────────────╯───────
         Turn-In  Apex      Exit

    "Late Apex" — Turned later, unwound earlier
```

**Questions to Ask:**

| Question | What to Check |
|----------|---------------|
| Am I unwinding the wheel on exit? | Look for steering returning toward center |
| Do I need more steering past apex? | Check for increase after apex |
| Is my steering input smooth? | Look for gradual, not abrupt, changes |
| Am I using all the track? | Check steering angle and speed relation |

**Moza R3 Connection:**
The wheel will get heavier as you add more steering lock. The steering trace will show you if you're adding lock past apex (early apex).

---

### 4.4 Speed Trace

**What It Shows:**
Your speed through every part of the track.

**The Going Faster! Principle:**
> *"The speed you carry out of the corner determines maximum speed on the following straightaway."* — Going Faster!

**What to Look For:**

| Section | What Matters | Why |
|---------|--------------|-----|
| **Braking Zone** | Speed at turn-in | Too slow = lost time |
| **Mid-Corner** | Minimum speed | Too slow = lost time |
| **Exit** | Speed at track-out | Determines straight speed |

**The Speed Trace Comparison:**

```
Speed
High ───────────────────────────────╭──╮
      │                            ╱    ╲
      │                          ╱       ╲
      │                        ╱          ╲
      │                      ╱             ╲
Low  ─────────────────────────────────────────
      Braking   Corner    Apex      Exit

      Red = Slow Lap | Blue = Fast Lap
```

**What the Comparison Shows:**
- Where the red line dips lower = you lost time
- Where the blue line stays higher = you gained time
- The biggest differences = the most important improvements

**Questions to Ask:**

| Question | What to Check |
|----------|---------------|
| Where am I losing speed? | Look for dips compared to a fast lap |
| Am I carrying enough speed through corner? | Check minimum speed |
| Is my exit speed maximizing the straight? | Check speed at track-out |

---

### 4.5 Lateral G Trace

**What It Shows:**
The cornering force the car is generating.

**The Going Faster! Principle:**
> *"At the limit of a car's cornering ability, the speed it can attain is directly related to the radius of the arc it's on."* — Going Faster!

**What Good Looks Like:**

```
Lateral G
  High ────╭─────────────────────
       │  ╱
   0%  │ ╱
       │╱
  Low ──╯────────────────────────
         Turn-In  Apex      Exit

    "Consistent G" — Steady cornering force
```

**What Bad Looks Like:**

```
Lateral G
  High ────╭─────────────────────
       │  ╱                    ╭─
   0%  │ ╱                    ╱
       │╱                    ╱
  Low ──╯────────────────────╯───
         Turn-In  Apex      Exit

    "Inconsistent G" — Peaks and drops through corner
```

**Questions to Ask:**

| Question | What to Check |
|----------|---------------|
| Is my cornering force consistent? | Look for flat area in the trace |
| Am I using all available grip? | Check peak G values |
| Do I have a G drop mid-corner? | Indicates loss of grip |

---

## 5. The Six Key Patterns

### 5.1 Pattern 1: Early Apex

**The Going Faster! Diagnosis:**
> *"If you're driving through a corner and feel the need to increase the amount of steering effort past the apex, it is probably because you turned into the corner too soon."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Steering** | Increases past apex (more lock needed) |
| **Throttle** | Lift or hesitation on exit |
| **Speed** | Drops on exit (lost momentum) |
| **Line** | Touches inside curb too early |

**The Fix:**
Turn in later. Move your turn-in point back by 5-10 meters.

**Practice:**
1. Identify which corner you're early apexing
2. Move your visual reference point 5m later
3. Try the corner and check the steering trace
4. Repeat until steering is unwinding on exit

---

### 5.2 Pattern 2: Late Apex

**The Going Faster! Diagnosis:**
> *"If there is road left at the exit of the corner, you have chosen a turn-in and apex that were too late."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Steering** | Unwinds early, road left on exit |
| **Throttle** | Applied early, but speed is lower |
| **Speed** | Lower entry speed than possible |
| **Line** | Misses inside curb (not using all the track) |

**The Fix:**
Turn in earlier. Move your turn-in point forward by 5-10 meters.

**Practice:**
1. Identify which corner you're late apexing
2. Move your visual reference point 5m earlier
3. Try the corner and check if you use all the track
4. Repeat until you're at the track-out edge

---

### 5.3 Pattern 3: Abrupt Throttle

**The Going Faster! Principle:**
> *"A gradual increase in throttle will tend to create understeer. An abrupt application of throttle will tend to create oversteer."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Throttle** | Vertical line from 0% to 100% |
| **Tire Slip** | Spike above 1.0 (wheelspin) |
| **Speed** | Loss of acceleration (spinning) |
| **Steering** | Correction needed |

**The Fix:**
Squeeze the throttle. Apply over 0.5-1.0 seconds.

**Practice:**
1. Focus on one corner exit
2. Apply throttle over 1 full second
3. Check the throttle trace for smooth slope
4. Gradually reduce squeeze time while maintaining grip

---

### 5.4 Pattern 4: Abrupt Brake

**The Going Faster! Principle:**
> *"Slamming on the brakes is a common mistake. Some drivers hit the brake pedal as if driving a nail with a hammer."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Brake** | Vertical spike from 0% to 100% |
| **Tire Slip** | Lockup (tire stops rotating) |
| **Speed** | Inconsistent deceleration |
| **Steering** | Loss of turning ability |

**The Fix:**
Squeeze the brake. Apply over 0.2-0.3 seconds.

**Practice:**
1. Focus on one braking zone
2. Apply brake progressively
3. Check the brake trace for smooth rise
4. Aim for threshold braking (high, steady pressure)

---

### 5.5 Pattern 5: Too Much Trail-Braking

**The Going Faster! Principle:**
> *"The truth is that a car will decelerate and turn just like it's able to accelerate and turn."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Brake** | Pressure continues past apex |
| **Steering** | Wheel turned while brake is applied |
| **Speed** | Too slow at apex |
| **Balance** | Car understeers or oversteers |

**The Fix:**
Release the brake earlier. Aim for zero brake pressure at or before apex.

**Practice:**
1. Focus on the corner entry
2. Trail-brake but release before apex
3. Check brake trace for release point
4. Aim for zero brake pressure at apex

---

### 5.6 Pattern 6: Too Little Trail-Braking

**The Going Faster! Principle:**
> *"The truth is that a car will decelerate and turn just like it's able to accelerate and turn."* — Going Faster!

**Telemetry Signature:**

| Channel | What You See |
|---------|--------------|
| **Brake** | No pressure after turn-in |
| **Steering** | Wheel turned without brake |
| **Speed** | Too slow at entry (braked too early) |
| **Balance** | Car understeers on entry |

**The Fix:**
Carry more brake into the corner.

**Practice:**
1. Focus on the corner entry
2. Trail-brake deeper into the corner
3. Check brake trace for continued pressure
4. Aim for gradual release through corner

---

## 6. The Comparison Method

### 6.1 The Three-Lap Comparison

**Exercise:**

1. Drive 5 laps, focusing on one skill
2. Log all laps to CSV
3. Compare your best lap to your worst lap
4. Identify the differences

**What to Compare:**

| Metric | Best Lap | Worst Lap | Difference |
|--------|----------|-----------|------------|
| Brake Point (Turn 6) | _____ m | _____ m | _____ |
| Minimum Speed (Turn 6) | _____ mph | _____ mph | _____ |
| Throttle Smoothness | 8/10 | 5/10 | _____ |
| Steering Angle at Apex | _____° | _____° | _____ |

**How to Do It:**

1. Load your telemetry data
2. Find your best lap (fastest lap time)
3. Find your worst lap (slowest lap time)
4. Compare the traces for each corner
5. Identify where the biggest differences are

> *"A valuable technique to get into the habit of using is to check the tachometer (or speedometer) at the exit of every corner. In trying to decide the turn-in and apex to use, start with a late apex, then begin turning slightly earlier and look for an RPM improvement at the track-out."* — Going Faster!

---

### 6.2 The Reference Lap Comparison

**Exercise:**

1. Find a faster driver's lap (Rivals mode)
2. Log your lap and the reference lap
3. Overlay the traces
4. Identify where you're losing time

> *"By following a more skilled driver... you can begin to get an appreciation of what is possible."* — Going Faster!

**Questions to Ask:**

- Where does the reference driver brake later?
- Where does the reference driver get on throttle earlier?
- What's the speed difference at key points?

**How to Do It:**

1. Load your telemetry data and the reference data
2. Overlay both laps on the same graph
3. Look for:
   - Brake point differences
   - Minimum speed differences
   - Exit speed differences
4. Copy what the faster driver is doing

---

### 6.3 The Corner Diagnosis

**Exercise:**

1. Choose one corner you struggle with
2. Drive 10 laps, logging telemetry
3. For each lap, note:
   - Brake point (distance from corner)
   - Minimum speed
   - Apex speed
   - Exit speed
4. Find the fastest lap
5. Copy what you did differently

**What to Record:**

| Lap | Brake Point | Min Speed | Apex Speed | Exit Speed | Lap Time |
|-----|-------------|-----------|------------|------------|----------|
| 1 | _____ | _____ | _____ | _____ | _____ |
| 2 | _____ | _____ | _____ | _____ | _____ |
| ... | ... | ... | ... | ... | ... |
| 10 | _____ | _____ | _____ | _____ | _____ |

**Analysis:**
1. Which lap was fastest?
2. What was different about that lap?
3. What did you do differently on the slow laps?

---

## 7. Actionable Practices

### 7.1 The Consistency Check

**Exercise:**

1. Drive 10 laps at a consistent pace
2. Check your lap time variation
3. If variation >0.5s, look at telemetry
4. Identify where you're inconsistent

**What to Check:**

| Corner | Lap 1 | Lap 2 | Lap 3 | Variation |
|--------|-------|-------|-------|-----------|
| Brake Point | 100m | 95m | 100m | 5m |
| Apex Speed | 52mph | 50mph | 53mph | 3mph |
| Exit Speed | 58mph | 56mph | 59mph | 3mph |

> *"You can't be fast if you're not consistent."* — Bryan Herta, quoted in Going Faster!

---

### 7.2 The One-Corner Focus

**Exercise:**

1. Choose one corner
2. Drive 10 laps focusing ONLY on that corner
3. Log telemetry for all laps
4. Analyze the traces for that corner
5. Identify your best lap in that corner
6. Copy that technique for future laps

**What to Focus On:**

| Element | What to Check |
|---------|---------------|
| Brake Point | Is it consistent? |
| Trail-Brake | Are you carrying brake? |
| Apex | Are you hitting it? |
| Throttle | Is it smooth? |
| Exit Speed | Is it maximizing? |

---

### 7.3 The Progressive Improvement

**Exercise:**

1. Drive 5 laps at your current pace
2. Identify one area to improve
3. Drive 5 laps focusing on that area
4. Compare the two sets of laps
5. If improved, identify the next area
6. If not, identify why

**The Cycle:**
```
1. Measure → 2. Practice → 3. Measure → 4. Improve → Repeat
```

---

## 8. The Moza R3 Connection

### 8.1 What the R3 Can Tell You

Your Moza R3's force feedback is a form of real-time telemetry. It communicates:

| Sensation | What It Means | What to Check in Telemetry |
|-----------|---------------|---------------------------|
| **Heavy wheel** | The car has grip | High lateral G, smooth speed trace |
| **Light wheel** | The car is losing grip | Drop in lateral G, speed loss |
| **Vibration** | Road surface, curbs | Surface contact data |
| **Pulling** | Uneven grip, track camber | Steering angle, speed difference |

### 8.2 Syncing FFB with Telemetry

**Exercise:**

1. Drive a corner with heavy FFB (good grip)
2. Note the telemetry: speed, lateral G, steering angle
3. Drive the same corner with light FFB (lost grip)
4. Compare the telemetry
5. Learn the FFB "signature" of grip

**The Goal:**
> *"When the car is at the limit, the steering wheel will feel heavy and precise. When it goes light, you've lost the front tires."* — Going Faster!

**How to Do It:**

1. Identify a corner where you feel grip
2. Note the FFB sensation
3. Check telemetry for that corner:
   - Speed: _____
   - Lateral G: _____
   - Steering Angle: _____
4. Identify a corner where you lose grip
5. Note the FFB sensation (lighter)
6. Check telemetry for that corner:
   - Speed: _____
   - Lateral G: _____
   - Steering Angle: _____
7. Compare the two and learn the difference

### 8.3 RPM Telemetry on the Wheel

The Moza R3 has 10 high-brightness RGB LED beads for RPM telemetry. These display:

| Color | Meaning | What to Do |
|-------|---------|------------|
| **Green** | Optimal RPM range | Stay in this range |
| **Yellow** | Approaching redline | Prepare to shift |
| **Red** | Redline (shift now!) | Shift immediately |

**Use This to:**
- Shift at the right moment
- Avoid over-revving
- Maintain optimal power band

**Check Your RPM Trace:**
- Are you shifting at the right time?
- Are you over-revving?
- Are you in the optimal RPM range for acceleration?

---

## 9. Common Questions

### 9.1 "How do I know if I'm trail-braking correctly?"

**Check:** Look at your brake trace. If brake pressure continues past turn-in, you're trail-braking. The ideal is a smooth, progressive reduction to zero at or near the apex.

**Good Trail-Braking:**
```
Brake % ────╭─────────────────╮
          │  ╱                   ╲
          │ ╱                     ╲
          │╱                       ╲
    0% ──────────────────────────╯───
             Turn-In        Apex
```

**Bad Trail-Braking:**
- Too much: Brake pressure past apex (causing understeer)
- Too little: No brake past turn-in (losing entry speed)

### 9.2 "How much wheelspin is too much?"

**Check:** Tire slip ratio. When it exceeds 1.0, you've lost grip. The optimal is around 5-10% slip (0.05-0.10 ratio) for maximum acceleration.

**Wheelspin Levels:**
- 0%: No slip (low acceleration)
- 5-10%: Optimal (maximum acceleration)
- 15-20%: Some grip loss (slow)
- 30%+: Severe grip loss (slow, tire wear)

### 9.3 "Why am I faster in some corners and slower in others?"

**Check:** Compare your telemetry corner by corner. Focus on:

| Factor | What to Check |
|--------|---------------|
| **Brake point** | Too early = slow |
| **Minimum speed** | Too slow = slow |
| **Exit speed** | Determines the straight |
| **Throttle smoothness** | Abrupt = grip loss |

### 9.4 "How do I use telemetry to improve my line?"

**Check:** Overlay your steering trace with a faster driver's. Where do you turn in earlier or later? Where do you unwind the wheel?

**Comparison Method:**

1. Find a faster driver's lap (Rivals)
2. Load your lap and the reference lap
3. Overlay the steering traces
4. Look for differences:
   - Turn-in point
   - Apex position
   - Unwind point
5. Copy what the faster driver does

### 9.5 "What's the most important telemetry channel to look at?"

**Answer:** It depends on your skill level.

| Skill Level | Most Important Channel |
|-------------|----------------------|
| **Beginner** | Speed (where am I slow?) |
| **Intermediate** | Throttle/Brake (how smooth am I?) |
| **Advanced** | Lateral G (am I at the limit?) |

---

## 10. The Learning Progression

| Stage | Focus | Telemetry Tool | When to Advance |
|-------|-------|----------------|-----------------|
| **1. Awareness** | See what you're doing | Live dashboard | When you recognize your patterns |
| **2. Comparison** | Compare to faster drivers | Overlay traces | When you see the differences |
| **3. Diagnosis** | Identify problems | Corner analysis | When you can name the problem |
| **4. Practice** | Fix one thing at a time | Focused sessions | When the problem is fixed |
| **5. Validation** | Confirm improvement | Lap time comparison | When lap times improve |

> *"The process of finding the line is continuous. If you've never seen the racetrack before, never driven a racecar before, it's going to take a considerable amount of mental energy."* — Going Faster!

---

## 11. Quick Reference

### 11.1 Settings Summary

| Setting | Value |
|---------|-------|
| Data Out | ON |
| Data Out IP Address | 127.0.0.1 |
| Data Out IP Port | 9999 or 5300 |
| Data Out Packet Format | CAR DASH |

### 11.2 Key Metrics

| Metric | What It Shows | Good Looks Like |
|--------|---------------|-----------------|
| **Throttle** | Acceleration input | Smooth squeeze |
| **Brake** | Deceleration input | Progressive squeeze |
| **Steering** | Cornering input | Unwinding on exit |
| **Speed** | Vehicle velocity | Consistent, fast exits |
| **Lateral G** | Cornering force | Consistent, high |

### 11.3 Common Patterns

| Pattern | Telemetry Signature | Solution |
|---------|---------------------|----------|
| **Early Apex** | More steering past apex | Turn in later |
| **Late Apex** | Road left on exit | Turn in earlier |
| **Abrupt Throttle** | Vertical throttle line | Squeeze smoothly |
| **Abrupt Brake** | Vertical brake line | Squeeze smoothly |
| **Wheelspin** | High tire slip ratio | Less throttle, smoother |

### 11.4 The Three Questions

1. **Where** on the track did this happen?
2. **What** did I do with the controls?
3. **Why** did the car respond that way?

---

## 12. Final Thoughts

> *"It's a problem of minimizing time."* — Going Faster!

Telemetry is the tool that turns guesswork into knowledge. It shows you where you're fast, where you're slow, and most importantly—why.

**Remember:**

1. **Start simple.** Don't overwhelm yourself with all the data at once.
2. **Focus on one thing.** Pick one metric and one corner.
3. **Compare to a reference.** A faster lap is your best teacher.
4. **Be honest.** The data doesn't lie—use it to learn.
5. **Take action.** Data without action is just numbers.

> *"The value of racing theory lies in its application to real problems."* — Going Faster!

Now you have the tools. Go apply them.

---

## 13. Glossary of Terms

| Term | Definition |
|------|------------|
| **Telemetry** | The collection and analysis of data from your vehicle while driving |
| **Trace** | A graphical representation of a telemetry channel over time/distance |
| **Throttle Trace** | Graph showing throttle application over a lap |
| **Brake Trace** | Graph showing brake application over a lap |
| **Steering Trace** | Graph showing steering angle over a lap |
| **Speed Trace** | Graph showing vehicle speed over a lap |
| **Lateral G** | Cornering force measured in G's |
| **Tire Slip Ratio** | The difference between wheel speed and vehicle speed |
| **Threshold Braking** | Braking at the maximum limit before lockup |
| **Trail-Braking** | Continuing to brake after turn-in |

---

**Happy data-driven racing! 📊🏁**