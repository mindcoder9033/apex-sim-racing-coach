const APEX_CONTENT = {
  "modules": [
    {
      "id": 1,
      "title": "Foundations of Sim Racing",
      "subtitle": "Confidence → Consistency → Speed (30-Day Beginner Driver Development)",
      "duration": "30 Days (12 Sessions)",
      "unlocked": true,
      "sessions": [
        {
          "id": 1,
          "title": "Session 1 — Steering Fundamentals",
          "phase": "Phase 1 — Build Confidence",
          "duration": "45 Minutes",
          "primarySkill": "Steering Fundamentals",
          "car": "2021 Honda Civic Type R (FWD)",
          "track": "Hakone Club Circuit",
          "targetLapTime": "1:15.000",
          "difficulty": 1,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Full Racing Line",
            "tcs": "On (Default)",
            "stm": "On (Default)",
            "abs": "On (Default)",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Steering is Communication",
            "content": "Every advanced driving technique begins with steering. Braking, throttle application, racing line, weight transfer, and cornering all depend on your ability to place the car accurately.\n\n### The Golden Rule of Steering\n> **Turn the wheel only as much as necessary—and no more.**\n\n### Steering is Communication\nThe steering wheel is not simply used to change direction—it is your primary method of communicating with the front tires. Every steering movement asks the tires to generate grip. The smoother your request, the easier it is for the tires to respond.\n\n### Correct Hand Position\nAlways begin with your hands positioned at **9 and 3 o'clock**.\n- **Benefits**: Maximum steering precision, better force feedback communication, reduced arm fatigue, improved control.\n- **Avoid**: Crossing arms, driving with one hand, or gripping the wheel too tightly. Relax your hands and let the wheel communicate.",
            "keyTakeaways": [
              "Fast drivers make fewer, smaller, and smoother steering corrections",
              "Maintain hands at 9 and 3 o'clock with a relaxed grip to read FFB",
              "Turn progressively into corners, hold a steady angle, and unwind smoothly on exit"
            ],
            "diagramId": "steering-fundamentals-diagram"
          },
          "practice": {
            "focus": "10-minute smooth steering drill focusing on one clean input per corner",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Smooth Steering Exercise",
                "desc": "Drive at a comfortable pace. For every corner: 1. Look toward exit. 2. Turn smoothly. 3. Hold steady angle. 4. Gradually unwind.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Practical Driving Test — 5 Clean Laps",
            "focus": "Completing 5 consecutive clean laps without leaving the circuit",
            "laps": 5,
            "instructions": [
              "Stay on the circuit and avoid collisions.",
              "Keep both hands at 9 and 3 o'clock.",
              "Make deliberate steering inputs and minimize unnecessary corrections.",
              "If you leave the track, restart the count."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Clean Benchmark Lap",
                "focus": "Complete 5 consecutive clean laps with zero off-track penalties"
              }
            ]
          },
          "challenge": {
            "title": "The 'One Steering Input' Challenge",
            "type": "technique",
            "description": "For every medium-speed corner, complete the turn using one steering movement in, one steady steering angle held, and one smooth steering release.",
            "criteria": "Zero sawing at the wheel or rapid left-right corrections during 3 consecutive laps."
          },
          "assessment": {
            "title": "Session 1 Technique & Mastery Assessment",
            "criteria": "5 consecutive clean laps with smooth single-input cornering and relaxed grip.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Did you keep your hands at 9 and 3 o'clock throughout the session?",
                "modelAnswer": "Maintaining 9 and 3 o'clock ensured maximum control and allowed full force feedback perception."
              },
              {
                "question": "Did you make one smooth steering input for most corners?",
                "modelAnswer": "Single smooth turn-ins prevented overloading the front tires and maintained chassis balance."
              },
              {
                "question": "Did you reduce unnecessary steering corrections compared with your first lap?",
                "modelAnswer": "Fewer corrections showed improved vision and anticipation through corner arcs."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Speed Trace Telemetry Review",
            "prompts": [
              {
                "key": "speedDropPoint",
                "label": "Speed Drop Location",
                "question": "Where did your speed drop the most during the lap?",
                "expectedAnswer": "Identifying excessive speed drops highlights corners with over-steering or premature deceleration."
              },
              {
                "key": "steeringCorrectionLoss",
                "label": "Steering Correction Impact",
                "question": "Did you lose speed because of unnecessary steering corrections?",
                "expectedAnswer": "Sawing at the wheel scrubs off speed due to increased tire friction and drag."
              },
              {
                "key": "smoothestCornerTrace",
                "label": "Smoothest Corner Speed Curve",
                "question": "Which corner felt the smoothest, and how is that reflected in your speed trace?",
                "expectedAnswer": "A smooth 'U-shaped' speed trace indicates steady cornering speed without mid-corner scrub."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 5,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Today's objective was confidence—not speed. Relax your grip and trust the process.",
            "questions": [
              "Did you remain calm after making mistakes during practice?",
              "Were you trying to drive smoothly instead of chasing lap times?",
              "Did you enjoy learning steering fundamentals rather than rushing pace?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "What did I learn about steering communication today?",
              "Which corner felt the most comfortable and why?",
              "What single improvement will I focus on during Session 2?"
            ]
          }
        },
        {
          "id": 2,
          "title": "Session 2 — Vision & Looking Ahead",
          "phase": "Phase 1 — Build Confidence",
          "duration": "45 Minutes",
          "primarySkill": "Vision & Looking Ahead",
          "previouslyLearnedSkill": "Steering Fundamentals",
          "car": "2021 Honda Civic Type R (FWD)",
          "track": "Hakone Club Circuit",
          "targetLapTime": "1:15.000",
          "difficulty": 1,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Full Racing Line",
            "tcs": "On (Default)",
            "stm": "On (Default)",
            "abs": "On (Default)",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Vision Leads the Car",
            "content": "Your hands naturally follow your eyes. Where you look determines where the car goes.\n\nOne of the biggest differences between beginners and experienced drivers is **not** steering ability—it's vision.\n\nBeginners focus on the road directly in front of the car, reacting late to every curve. Experienced drivers focus on where they want the car to be **several seconds later**, driving with their eyes first.\n\n### The Three-Second Rule\nAs a beginner, keep your eyes approximately **3 seconds ahead** of the car. Looking farther ahead provides:\n- Earlier, calmer steering decisions.\n- Smoother corner entry and exit.\n- Better placement along the racing line.\n- Reduced panic corrections.\n\n### The 4-Stage Visual Sequence\nDuring every corner, shift your eyes in order:\n1. **Approach:** Look toward the braking point.\n2. **Turn-In:** Shift vision toward the apex.\n3. **Mid-Corner:** Begin looking toward the corner exit.\n4. **Corner Exit:** Look down the next straight or toward the next corner.",
            "keyTakeaways": [
              "Your hands follow your eyes—look where you want the car to go, not where it is",
              "Maintain visual focus ~3 seconds ahead down the track to eliminate panic corrections",
              "Follow the visual sequence: Braking Point → Apex → Exit → Next Corner"
            ],
            "diagramId": "vision-looking-ahead-diagram"
          },
          "practice": {
            "focus": "10-minute Vision Lead Exercise training your eyes to stay ahead of the car",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Vision Lead Exercise",
                "desc": "Drive for 10 minutes focusing entirely on eye movement. On straights, look to braking markers. On entry, move eyes to apex before turning wheel. Mid-corner, look to exit before reaching apex.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Practical Driving Test — 5 Consecutive Clean Laps",
            "focus": "Executing the visual sequence Braking Point → Apex → Exit on every corner",
            "laps": 5,
            "instructions": [
              "Complete 5 consecutive clean laps without leaving the circuit.",
              "Consciously move your eyes to the next focal point before turning the wheel.",
              "Focus on reducing unnecessary steering corrections.",
              "If you catch yourself staring right in front of the hood, gently reset your focus."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Visual Lead Benchmark",
                "focus": "Maintain 3-second visual lead through 5 clean consecutive laps"
              }
            ]
          },
          "challenge": {
            "title": "The 'Eyes First' Challenge",
            "type": "technique",
            "description": "For one complete lap, ask yourself before every steering input: 'Where am I looking?' Move your eyes before you move your hands.",
            "criteria": "Smooth, early corner preparation with zero panic steering inputs across a full lap."
          },
          "assessment": {
            "title": "Session 2 Vision & Technique Assessment",
            "criteria": "5 consecutive clean laps with active eye movement leading all steering inputs.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Did you consistently look ahead rather than directly in front of the car?",
                "modelAnswer": "Looking ahead allowed the brain time to calculate smoother steering arcs effortlessly."
              },
              {
                "question": "Did you move your eyes toward the corner exit before reaching the apex?",
                "modelAnswer": "Shifting vision early to exit unlocked smoother unwind and earlier throttle application."
              },
              {
                "question": "Did your steering become smoother compared to Session 1?",
                "modelAnswer": "Fewer corrections confirmed that eyes were properly leading hands through corner arcs."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Speed Trace & Steering Input Review",
            "prompts": [
              {
                "key": "fewestCorrectionsLap",
                "label": "Steering Smoothness",
                "question": "Which lap showed the fewest steering corrections?",
                "expectedAnswer": "Laps where vision led steering showed clean, single-arc inputs with minimal micro-corrections."
              },
              {
                "key": "visionSteeringCorrelation",
                "label": "Vision & Steering Correlation",
                "question": "Did smoother vision result in smoother steering inputs?",
                "expectedAnswer": "Yes, looking ahead eliminates sudden reactive steering jerks."
              },
              {
                "key": "cornerExitSpeed",
                "label": "Exit Speed Maintenance",
                "question": "Did looking farther ahead help maintain speed through corner exits?",
                "expectedAnswer": "Early vision toward exit allows earlier unwinding and smoother acceleration."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Changing visual habits takes repetition. Stay relaxed and trust your eyes to lead.",
            "questions": [
              "Did I stay relaxed while learning a new visual habit?",
              "Did I focus on observation instead of speed?",
              "Am I becoming more aware of where my eyes are looking?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "What changed when I looked farther ahead?",
              "Which corners became easier after improving my vision?",
              "What visual habit do I want to improve before Session 3?"
            ]
          },
          "performanceCriteria": {
            "bronze": {
              "title": "🥉 Bronze — Safe Driver",
              "bullets": [
                "Complete the session.",
                "Finish 5 clean laps.",
                "Demonstrate awareness of braking points, apexes, and exits.",
                "Intentionally look farther ahead than in Session 1."
              ]
            },
            "silver": {
              "title": "🥈 Silver — Consistent Driver",
              "bullets": [
                "Complete 5 consecutive clean laps.",
                "Consistently shift your vision from braking point to apex to exit.",
                "Reduce unnecessary steering corrections.",
                "Maintain a calm, deliberate driving rhythm."
              ]
            },
            "gold": {
              "title": "🥇 Gold — Confident Driver",
              "bullets": [
                "Naturally look ahead without conscious reminders.",
                "Use vision to guide smooth steering and stable cornering.",
                "Explain how improved vision affected your steering and confidence.",
                "Demonstrate repeatable, consistent visual discipline throughout the session."
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "id": "ref-apex",
      "title": "Apex",
      "category": "Basic Fundamentals",
      "icon": "crosshair",
      "summary": "The point during a corner where the car comes closest to the inside edge of the road.",
      "content": "### Definition\nThe point during a corner where the car comes closest to the inside edge of the road.\n\n### Explanation\nThe apex is the pivot point of every corner. It's where your car is closest to the inside curb or edge of the track. Finding and hitting the right apex is essential for carrying speed through the corner and onto the following straight.\n\n**Types of Apex:**\n- **Early Apex**: Before midpoint (Usually a mistake, leads to running wide on exit)\n- **Mid Apex**: At midpoint (Most common geometric line)\n- **Late Apex**: After midpoint (Best for maximizing exit speed onto straights)\n\n### Example\nIn Turn 2 at Laguna Seca, the apex is at the inside curb where the track narrows. Your car's right tires should just kiss this point.\n\n### Application\n- Always aim for the apex, never miss it intentionally.\n- Your eyes should find the apex before you turn in.\n- If you miss the apex, you're losing time."
    },
    {
      "id": "ref-turn-in",
      "title": "Turn-In",
      "category": "Basic Fundamentals",
      "icon": "crosshair",
      "summary": "The point where you first turn the steering wheel to begin cornering.",
      "content": "### Definition\nThe point where you first turn the steering wheel to begin cornering.\n\n### Explanation\nTurn-in is the moment of commitment. Once you turn the wheel, you've committed to a path through the corner. The turn-in point determines everything that follows: your apex, your exit, your speed.\n\n**The Turn-In Process:**\n1. Brake in a straight line\n2. Locate your turn-in point\n3. Turn the wheel smoothly and decisively\n4. Begin trail-braking (if applicable)\n5. Aim for the apex\n\n### Application\n- Turn-in should be smooth, not sudden.\n- A later turn-in = safer, more exit speed.\n- An earlier turn-in = faster entry, compromised exit."
    },
    {
      "id": "ref-track-out",
      "title": "Track-Out",
      "category": "Basic Fundamentals",
      "icon": "crosshair",
      "summary": "The point at the exit of a corner where the car touches the outside edge of the road.",
      "content": "### Definition\nThe point at the exit of a corner where the car touches the outside edge of the road.\n\n### Explanation\nTrack-out is where your corner ends and the straight begins. You should be using all the road on exit, with your outside tires touching the edge of the track or curb.\n\n**Why Track-Out Matters:**\n- Using all the road = largest radius ($r$).\n- Largest radius = highest exit speed.\n- Higher exit speed = faster time down the straightaway.\n\n### Application\n- You should always use all the road on exit.\n- If you're not at the edge, you're leaving speed on the table.\n- Track-out dictates your straightaway speed."
    },
    {
      "id": "ref-slip-angle",
      "title": "Slip Angle",
      "category": "Basic Fundamentals",
      "icon": "crosshair",
      "summary": "The difference between the direction a tire is pointed and the direction it is traveling.",
      "content": "### Definition\nThe difference between the direction a tire is pointed and the direction it's traveling.\n\n### Explanation\nWhen a car corners, the tires don't follow the exact direction of the wheel rim. The tire elastic tread twists and slips at a slight angle, creating slip angle. This isn't a loss of grip—it is essential for generating lateral cornering force.\n\n**Key Rule:**\nPeak grip occurs at a specific optimal slip angle (typically 4° to 8° depending on compound). Below or above this peak, grip drops off.\n\n### Application\n- Small slip angle is normal and necessary for cornering.\n- Excessive slip angle causes sliding and tire graining.\n- The fastest drivers operate right at peak slip angle."
    },
    {
      "id": "ref-yaw",
      "title": "Yaw",
      "category": "Basic Fundamentals",
      "icon": "crosshair",
      "summary": "The angle between the car’s centerline and its direction of travel.",
      "content": "### Definition\nThe angle between the car's centerline and its direction of travel.\n\n### Explanation\nWhen a car corners, it rotates around its vertical axis. Yaw is the angle of rotation relative to the direction of motion. Yaw is what makes the car look slightly angled into a corner.\n\n**Yaw vs. Slip Angle:**\n- **Yaw**: The car's overall body angle relative to its travel path.\n- **Slip Angle**: The tire tread's angle relative to its travel path.\n\n### Application\n- Controlled initial yaw helps rotate the car into tight corners.\n- Excessive yaw = sliding = lost time and overheating rear tires."
    },
    {
      "id": "ref-understeer",
      "title": "Understeer",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "A handling condition where front tires lose grip before rears, causing the car to push wide.",
      "content": "### Definition\nA handling condition where the front tires lose grip before the rear tires, causing the car to \"push\" wide through a corner.\n\n### Symptoms\n- The car feels like it won't turn despite turning the steering wheel.\n- Steering wheel feel becomes light and numb.\n- Adding more steering wheel angle makes the car push even wider.\n\n### Causes & Remedies\n- **Cause**: Excess entry speed or aggressive acceleration unloading front axle.\n- **Fix**: Squeeze off throttle slightly to transfer load forward to front tires. Do NOT turn steering wheel further."
    },
    {
      "id": "ref-oversteer",
      "title": "Oversteer",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "A handling condition where rear tires lose grip before fronts, causing the tail to slide out.",
      "content": "### Definition\nA handling condition where the rear tires lose grip before the front tires, causing the car's tail to slide toward the outside of the corner.\n\n### Symptoms\n- The rear end breaks loose and slides wide.\n- The car rotates faster than steering input commands.\n\n### Causes & Remedies\n- **Cause**: Abrupt throttle lift, over-acceleration, or sudden weight transfer.\n- **Fix**: Smoothly counter-steer (steer into the slide) and modulate throttle smoothly. Avoid slamming brakes or snapping off throttle."
    },
    {
      "id": "ref-neutral",
      "title": "Neutral Handling",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "A state where front and rear tires reach their grip limit simultaneously.",
      "content": "### Definition\nA handling condition where the front and rear tires reach their grip limit at the exact same time.\n\n### Explanation\nNeutral handling is the gold standard for racecars. Both ends of the vehicle work equally, maximizing lateral G forces without excessive understeer push or oversteer sliding."
    },
    {
      "id": "ref-weight-transfer",
      "title": "Weight Transfer",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "The shifting of vehicle load between tires during acceleration, braking, or cornering.",
      "content": "### Definition\nThe shifting of the car's weight (vertical load) from one set of tires to another during acceleration, braking, or cornering.\n\n### Scenarios\n- **Braking**: Weight transfers forward → Increases front tire grip, reduces rear tire grip.\n- **Accelerating**: Weight transfers rearward → Increases rear tire grip, reduces front tire grip.\n- **Cornering**: Weight transfers laterally to outside tires → Increases outside grip."
    },
    {
      "id": "ref-tto",
      "title": "Trailing Throttle Oversteer (TTO)",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "Oversteer induced by abruptly lifting off the accelerator while cornering near the limit.",
      "content": "### Definition\nOversteer caused by lifting off the throttle (trailing the throttle) while cornering near the limit.\n\n### Mechanics\nLifting throttle → Engine braking + longitudinal decelerating weight transfer forward → Unloads rear tires → Rear tires lose lateral grip → Rear slides out.\n\n### Application\n- Can be deliberately used by skilled drivers to rotate the car into hairpins.\n- Smooth throttle release prevents unwanted TTO snaps."
    },
    {
      "id": "ref-rotation",
      "title": "Rotation",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "The process of changing the car’s heading angle from straight-line entry into the corner arc.",
      "content": "### Definition\nThe process of the car turning its yaw angle from zero (straight) to the angle needed for cornering.\n\n### Explanation\nEfficient rotation allows the car to point toward corner exit early, allowing earlier throttle application."
    },
    {
      "id": "ref-pitch",
      "title": "Pitch",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "Forward-backward chassis movement (nose dipping under braking, rising under acceleration).",
      "content": "### Definition\nThe car's forward-backward rotation around its transverse axis, characterized by the nose dipping (braking) or rising (acceleration)."
    },
    {
      "id": "ref-roll",
      "title": "Roll",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "Sideways body movement where the chassis leans to the outside of a corner.",
      "content": "### Definition\nThe car's lateral rotation around its longitudinal axis, characterized by the body leaning toward the outside of a corner during turn-in."
    },
    {
      "id": "ref-rebound",
      "title": "Rebound",
      "category": "Car Control & Balance",
      "icon": "sliders",
      "summary": "The extension phase of a shock absorber after being compressed.",
      "content": "### Definition\nThe extension phase of a shock absorber—when the suspension spring expands back after being compressed by bumps or load transfers."
    },
    {
      "id": "ref-threshold-braking",
      "title": "Threshold Braking",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "Braking at maximum pressure right at the edge of lockup without locking tires.",
      "content": "### Definition\nBraking at the maximum limit before wheel lockup, using 100% of the tire's braking potential.\n\n### Explanation\nThreshold braking requires squeezing the brake pedal rapidly up to ~95-98% grip capacity (where tire slip ratio is around 15%), stopping the car in the minimum possible distance."
    },
    {
      "id": "ref-trail-braking",
      "title": "Trail-Braking",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "Tapering off brake pressure after turn-in, carrying light braking towards the apex.",
      "content": "### Definition\nContinuing to apply brake pressure after the turn-in point, carrying brakes into the corner.\n\n### Benefits\n- Keeps weight on the front tires during entry, boosting turn-in grip.\n- Allows later initial braking points.\n- Rotates the car naturally toward the apex."
    },
    {
      "id": "ref-brake-turning",
      "title": "Brake-Turning",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "Combining braking and steering input simultaneously within tire grip limits.",
      "content": "### Definition\nCombining braking and steering input, using both simultaneously."
    },
    {
      "id": "ref-brake-bias",
      "title": "Brake Bias",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "The percentage of braking force split between front and rear axles.",
      "content": "### Definition\nThe proportion of braking force allocated to the front versus rear tires (e.g. 60/40 front-to-rear).\n\n- **Too much front bias**: Front tires lock up first → Understeer / loss of steering control.\n- **Too much rear bias**: Rear tires lock up first → Sudden unstable tail spin."
    },
    {
      "id": "ref-brake-point",
      "title": "Brake Point",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "The visual marker on or beside the track where maximum braking is initiated.",
      "content": "### Definition\nThe specific reference point on or beside the track (meter boards, curbs, trees) where you begin braking."
    },
    {
      "id": "ref-lockup",
      "title": "Lockup",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "When a tire stops rotating under braking due to excessive pedal pressure.",
      "content": "### Definition\nWhen a tire stops rotating under braking because of excessive brake pressure.\n\n### Consequences\n- Grip drops by ~30%.\n- Creates flat spots on the tire tread causing severe vibration.\n- Complete loss of steering authority if front tires lock."
    },
    {
      "id": "ref-modulation",
      "title": "Modulation",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "Fine adjustments of pedal pressure to keep tires at peak traction limits.",
      "content": "### Definition\nAdjusting the pressure on the brake or throttle pedal to keep the tires near their limit."
    },
    {
      "id": "ref-friction-circle",
      "title": "The Friction Circle",
      "category": "Braking & Corner Entry",
      "icon": "disc-3",
      "summary": "Conceptual model showing total traction available for combined longitudinal and lateral forces.",
      "content": "### Definition\nA conceptual model showing the maximum grip available from the tires in any direction (braking, accelerating, cornering).\n\n### Rule of Total Traction\nTires have a finite budget of total grip. If 100% of grip is used for braking, 0% remains for steering. To turn while braking, you must reduce brake pressure proportionally."
    },
    {
      "id": "ref-racing-line-geo",
      "title": "The Racing Line",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "The fastest path around a corner following the Outside-Inside-Outside arc.",
      "content": "### Definition\nThe fastest path around the racetrack, typically following the Outside-Inside-Outside arc.\n\n### Why It Works\nWidening the arc maximizes the turning radius ($r$), which maximizes the achievable corner speed ($v = \\sqrt{a_c \\cdot r}$)."
    },
    {
      "id": "ref-early-apex",
      "title": "Early Apex",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "Apexing before the geometric midpoint, resulting in tight exit arc and compromised speed.",
      "content": "### Definition\nAn apex that occurs too soon in the corner, before the geometric midpoint.\n\n### Flaw\nTurning in early clips the inside curb too soon, forcing you to run wide on exit or lift off throttle."
    },
    {
      "id": "ref-late-apex",
      "title": "Late Apex",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "Apexing past the midpoint to straighten the exit path for maximum acceleration.",
      "content": "### Definition\nAn apex that occurs after the geometric midpoint of the corner.\n\n### Advantage\nStraightens the corner exit, allowing full throttle application earlier. Crucial before long straights."
    },
    {
      "id": "ref-reference-point",
      "title": "Reference Point",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "Visual objects around the track used for precise braking, turn-in, and apex placement.",
      "content": "### Definition\nA visual marker on or beside the track that helps you place the car accurately lap after lap."
    },
    {
      "id": "ref-constant-radius",
      "title": "Constant Radius Corner",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A corner maintaining a uniform curvature radius throughout.",
      "content": "### Definition\nA corner with a consistent radius from entry to exit."
    },
    {
      "id": "ref-decreasing-radius",
      "title": "Decreasing Radius Corner",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A corner that tightens as you progress from entry to exit.",
      "content": "### Definition\nA corner where the radius decreases (gets tighter) from entry to exit. Requires a late apex and conservative entry speed."
    },
    {
      "id": "ref-increasing-radius",
      "title": "Increasing Radius Corner",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A corner that opens up towards the exit.",
      "content": "### Definition\nA corner where the radius increases (gets wider) from entry to exit, allowing earlier throttle squeeze."
    },
    {
      "id": "ref-hairpin",
      "title": "Hairpin",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A very tight 120° to 180° corner requiring deep heavy braking and late apex execution.",
      "content": "### Definition\nA tight corner with a large direction change, typically 120-180 degrees."
    },
    {
      "id": "ref-esses",
      "title": "Esses",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A series of alternating left-right high-speed flowing corners.",
      "content": "### Definition\nA series of alternating corners, typically high-speed, requiring smooth rhythm and compromise lines."
    },
    {
      "id": "ref-compromise-corner",
      "title": "Compromise Corner",
      "category": "The Racing Line",
      "icon": "spline",
      "summary": "A corner driven sub-optimally to maximize entry speed for a subsequent key corner.",
      "content": "### Definition\nA corner that must be compromised (driven slower or off-line) to set up the positioning for the following corner."
    },
    {
      "id": "ref-drafting",
      "title": "Drafting (Slipstreaming)",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Following closely behind another vehicle to reduce aerodynamic drag and gain top speed.",
      "content": "### Definition\nFollowing closely behind another car to reduce aerodynamic drag and increase top speed on straights."
    },
    {
      "id": "ref-drafting-by",
      "title": "Drafting By (Slingshot)",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Using accumulated draft momentum to pull out and pass a lead car.",
      "content": "### Definition\nUsing the speed advantage from drafting to pull alongside and pass the leading vehicle."
    },
    {
      "id": "ref-out-braking",
      "title": "Out-Braking",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Braking later and deeper into corner entry than a competitor to take position.",
      "content": "### Definition\nBraking later than a competitor to pass them on corner entry."
    },
    {
      "id": "ref-defensive-driving",
      "title": "Defensive Driving",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Positioning your car to protect the inside line and prevent overtaking.",
      "content": "### Definition\nDriving to protect your position from the car behind by claiming inside entry lines early."
    },
    {
      "id": "ref-blocking",
      "title": "Blocking",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Illegal or unsportsmanlike reactive movement in response to a trailing car’s move.",
      "content": "### Definition\nReacting to the car behind to prevent them from passing. Defending is choosing your line early; blocking is moving in reaction."
    },
    {
      "id": "ref-point-by",
      "title": "Point-By",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Signal given during track days indicating which side a trailing car should pass on.",
      "content": "### Definition\nA hand or indicator signal letting a faster trailing car know you are yielding line preference."
    },
    {
      "id": "ref-traffic",
      "title": "Traffic Management",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Navigating around slower lapped cars or groups while minimizing lap time degradation.",
      "content": "### Definition\nOther cars on the track that affect your racing line, braking markers, and pace."
    },
    {
      "id": "ref-accordion-effect",
      "title": "Accordion Effect",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "The compression and expansion of car fields when lead vehicles brake or accelerate.",
      "content": "### Definition\nThe tendency of a pack of cars to compress during braking zones and expand during acceleration."
    },
    {
      "id": "ref-clean-air",
      "title": "Clean Air",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Unobstructed laminar airflow creating maximum aerodynamic downforce.",
      "content": "### Definition\nUnobstructed airflow over the car's aerodynamic surfaces, generating maximum downforce compared to turbulent 'dirty air'."
    },
    {
      "id": "ref-pit-strategy",
      "title": "Pit Strategy",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Planning tire compounds, fuel loads, and pit windows for race endurance.",
      "content": "### Definition\nThe overall race tactical plan for pit stop timing, fuel load calculations, and tire compound selection."
    },
    {
      "id": "ref-starts",
      "title": "Race Starts",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Standing or rolling launches at the beginning of a race.",
      "content": "### Definition\nThe start of a race from a stationary grid (standing start) or behind a pace car (rolling start)."
    },
    {
      "id": "ref-passing",
      "title": "Passing Techniques",
      "category": "Racecraft",
      "icon": "flag",
      "summary": "Overriding competitive cars cleanly via out-braking, draft slingshots, or undercut exits.",
      "content": "### Definition\nOvertaking another vehicle to gain track position."
    },
    {
      "id": "ref-ffb",
      "title": "Force Feedback (FFB)",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Tactile torque forces transmitted through the steering wheel base representing physics.",
      "content": "### Definition\nThe mechanical resistance and torque signals generated by the wheel base motor to simulate tire grip, aligning torque, self-centering, and road surface bumps."
    },
    {
      "id": "ref-ffb-scale",
      "title": "Force Feedback Scale / Overall Gain",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Master output power setting of force feedback motor.",
      "content": "### Definition\nThe overall strength setting of the force feedback signal output."
    },
    {
      "id": "ref-deadzone",
      "title": "Deadzone",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "The initial range of wheel or pedal movement where no input signal is registered.",
      "content": "### Definition\nThe range of physical movement where no in-game input is triggered. Should ideally be 0% for Direct Drive wheels and load cell pedals."
    },
    {
      "id": "ref-lock-to-lock",
      "title": "Lock-to-Lock Steering Degrees",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Maximum degrees of steering wheel rotation from left limit to right limit.",
      "content": "### Definition\nTotal wheel rotation angle (e.g., 540° for GT cars, 360° for Formula, 900° for street cars)."
    },
    {
      "id": "ref-damper",
      "title": "FFB Damper",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Smoothing filter applied to force feedback to suppress violent wheel oscillations.",
      "content": "### Definition\nA resistance force added to wheel base rotation to smooth out erratic oscillations and provide weight."
    },
    {
      "id": "ref-gain",
      "title": "Gain",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Multiplier applied to physics forces in FFB pipeline.",
      "content": "### Definition\nA multiplier scaling force feedback intensity."
    },
    {
      "id": "ref-clip",
      "title": "Clipping",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "When physics forces demand more motor torque than the wheel base can output, flattening detail.",
      "content": "### Definition\nWhen force feedback signals exceed 100% of motor capacity, causing forces to cap flat and losing subtle tire feedback detail."
    },
    {
      "id": "ref-camber",
      "title": "Camber Angle",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Vertical tilt angle of the wheels as viewed from the front of the vehicle.",
      "content": "### Definition\nThe angle of the wheels relative to vertical. Negative camber (top of tire leaning inward) maximizes tire contact patch during heavy cornering roll."
    },
    {
      "id": "ref-toe",
      "title": "Toe Alignment",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Angle of wheels relative to car centerline when viewed from above.",
      "content": "### Definition\n- **Toe-In**: Fronts of tires point inward → Increases straight-line stability.\n- **Toe-Out**: Fronts of tires point outward → Sharpens initial turn-in response."
    },
    {
      "id": "ref-ride-height",
      "title": "Ride Height",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Distance between track surface and chassis bottom.",
      "content": "### Definition\nDistance from the ground to chassis bottom. Lowering ride height lowers center of gravity and enhances ground effect downforce."
    },
    {
      "id": "ref-spring-rate",
      "title": "Spring Rate",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Stiffness of suspension springs.",
      "content": "### Definition\nThe stiffness of suspension springs (measured in N/mm). Stiffer springs reduce pitch and roll."
    },
    {
      "id": "ref-anti-roll-bar",
      "title": "Anti-Roll Bar (Sway Bar)",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Suspension bar linking left and right sides to control cornering body roll.",
      "content": "### Definition\nA torsion spring connecting left and right wheels to resist chassis roll.\n- **Stiffer Front ARB**: Increases understeer.\n- **Stiffer Rear ARB**: Increases oversteer."
    },
    {
      "id": "ref-dampers",
      "title": "Dampers (Shock Absorbers)",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Hydraulic/gas devices controlling suspension spring compression (bump) and extension (rebound).",
      "content": "### Definition\nHydraulic units controlling speed of suspension movement (Bump = compression, Rebound = extension)."
    },
    {
      "id": "ref-downforce",
      "title": "Downforce",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Vertical aerodynamic pressure pushing tires into the track to increase grip.",
      "content": "### Definition\nAerodynamic force pushing the car downward onto the track surface, increasing grip without adding physical mass."
    },
    {
      "id": "ref-drag",
      "title": "Aerodynamic Drag",
      "category": "Hardware & Setup",
      "icon": "settings",
      "summary": "Air resistance opposing forward vehicle movement.",
      "content": "### Definition\nAir resistance acting against forward motion, reducing top straightaway speed."
    },
    {
      "id": "ref-coefficient-friction",
      "title": "Coefficient of Friction (CF)",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Ratio of tire grip force relative to vertical load.",
      "content": "### Definition\nThe ratio of lateral/longitudinal grip force generated by a tire relative to vertical load ($CF = \\text{Grip} / \\text{Load}$)."
    },
    {
      "id": "ref-slicks",
      "title": "Slick Tires",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Smooth treadless racing tires maximizing contact area in dry conditions.",
      "content": "### Definition\nTreadless rubber compound tires designed exclusively for dry track surfaces to provide maximum contact patch."
    },
    {
      "id": "ref-rain-tires",
      "title": "Rain / Wet Tires",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Treaded tires designed to channel water away and prevent hydroplaning.",
      "content": "### Definition\nGrooved tires engineered to evacuate surface standing water."
    },
    {
      "id": "ref-contact-patch",
      "title": "Contact Patch",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "The exact area of tire rubber touching the asphalt surface.",
      "content": "### Definition\nThe footprint area where rubber meets the road."
    },
    {
      "id": "ref-heat-cycles",
      "title": "Heat Cycles",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Processes of tire heating and cooling which gradually harden tire compounds.",
      "content": "### Definition\nEach thermal cycle of heating to operational temp and cooling down. Repeated heat cycles degrade tire grip over time."
    },
    {
      "id": "ref-graining",
      "title": "Tire Graining",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Formation of rubber rolls on tire surface caused by sliding overstressed cold rubber.",
      "content": "### Definition\nRubber tearing and forming small rolls on the tire surface due to excessive lateral sliding before reaching proper temperature."
    },
    {
      "id": "ref-blistering",
      "title": "Tire Blistering",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Overheating of inner tire carcass creating surface rubber bubbles and delamination.",
      "content": "### Definition\nInternal tire carcass overheating, causing gas bubbles to erupt through the outer tread."
    },
    {
      "id": "ref-flat-spot",
      "title": "Flat Spotting",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Localized tire tread abrasion caused by locking brakes while sliding.",
      "content": "### Definition\nA ground-down flat area on the tire tread resulting from severe brake lockups."
    },
    {
      "id": "ref-tire-pressure",
      "title": "Tire Pressure Optimization",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Inflation pressure determining contact patch shape and thermal buildup.",
      "content": "### Definition\nPneumatic pressure inside tires. Correct hot pressures ensure an even contact patch across the entire tread width."
    },
    {
      "id": "ref-tire-temperature",
      "title": "Tire Operating Temperature",
      "category": "Tires & Traction",
      "icon": "circle-dot",
      "summary": "Thermal window required for optimal rubber grip compound performance.",
      "content": "### Definition\nThe thermal operating window (typically 80°C - 105°C) where racing rubber achieves maximum sticky friction."
    },
    {
      "id": "ref-cg",
      "title": "Center of Gravity (CG)",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "The theoretical point around which total vehicle mass is balanced.",
      "content": "### Definition\nThe center point of mass. Lowering CG reduces dynamic weight transfer during acceleration, braking, and cornering."
    },
    {
      "id": "ref-weight-distribution",
      "title": "Weight Distribution",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Static percentage of total weight residing on front vs rear axles.",
      "content": "### Definition\nThe static weight split (e.g. 50/50, 40/60) between front and rear axles."
    },
    {
      "id": "ref-load-transfer",
      "title": "Dynamic Load Transfer",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Shift of vertical wheel forces governed by G-forces, CG height, and track width.",
      "content": "### Definition\n$$ \\Delta W = \\frac{m \\cdot a \\cdot h}{h_{track}} $$\nLoad transfer equation calculation where $h$ is CG height and $a$ is lateral or longitudinal acceleration."
    },
    {
      "id": "ref-aero-downforce",
      "title": "Downforce Equation (Aero)",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Speed-squared aerodynamic force generation.",
      "content": "### Definition\n$$ L = \\frac{1}{2} \\rho v^2 C_L A $$\nAerodynamic downforce increases with the square of velocity ($v^2$). Doubling speed quadruples downforce."
    },
    {
      "id": "ref-ground-effect",
      "title": "Ground Effect Aerodynamics",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Underbody low-pressure suction created via Venturi tunnels under the floor.",
      "content": "### Definition\nAerodynamic downforce generated by shaping the floor undersurface into Venturi tunnels, pulling the chassis down."
    },
    {
      "id": "ref-diffuser",
      "title": "Rear Diffuser",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Expanding underbody exit channel accelerating floor airflow to create suction.",
      "content": "### Definition\nAn expanding underbody ramp at the rear of the car that expands air, creating low pressure suction beneath the floor."
    },
    {
      "id": "ref-stall",
      "title": "Aerodynamic Stall",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Airflow separation from wing elements resulting in sudden downforce loss.",
      "content": "### Definition\nBoundary layer separation over an aerodynamic wing element when angle of attack is excessive, destroying downforce."
    },
    {
      "id": "ref-aero-oversteer",
      "title": "Aero Oversteer",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "High-speed oversteer caused by rear wing aerodynamic stall or front aerodynamic dominance.",
      "content": "### Definition\nHigh-speed rear traction loss caused by aerodynamic balance shifting toward the front at speed."
    },
    {
      "id": "ref-aero-understeer",
      "title": "Aero Understeer",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "High-speed front push caused by dirty air wake or excessive rear wing downforce.",
      "content": "### Definition\nHigh-speed front grip loss caused by reduced front wing airflow."
    },
    {
      "id": "ref-aero-spring-rate",
      "title": "Spring Rate (Aero Interaction)",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Spring stiffness required to support high-speed aerodynamic downforce loads.",
      "content": "### Definition\nManaging high-speed aero compression using third elements or stiff main springs to maintain stable ride height under downforce."
    },
    {
      "id": "ref-aero-ride-height",
      "title": "Ride Height (Aero Sensitivity)",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Managing floor proximity to asphalt to optimize underbody suction maps.",
      "content": "### Definition\nMaintaining optimal pitch and heave stance to keep underbody diffusers operating at peak suction."
    },
    {
      "id": "ref-aero-yaw",
      "title": "Yaw Aerodynamics",
      "category": "Advanced Concepts",
      "icon": "cpu",
      "summary": "Sensitivity of aerodynamic downforce to vehicle yaw angle in corners.",
      "content": "### Definition\nChanges in wing downforce and aerodynamic balance when air hits the car at an angle during corner sliding."
    }
  ],
  "guides": {
    "mozaR3": {
      "title": "Moza R3 Bundle for Xbox: Beginner User Guide",
      "subtitle": "A Sim Racing Coach's Guide to Getting Started, Direct Drive Setup & Physics",
      "quote": "\"The first step in your plan is to realize that you only have to go as fast as you want to go. Just because you are on a racetrack does not mean you should throw common sense out the window.\" — Going Faster!",
      "boxContents": [
        {
          "component": "R3 Direct Drive Wheelbase",
          "description": "3.9 Nm peak torque, aviation-grade aluminum construction"
        },
        {
          "component": "ESX Steering Wheel",
          "description": "Officially licensed for Xbox, 22 programmable buttons, ISF PU grips"
        },
        {
          "component": "SR-P Lite Pedals",
          "description": "Two-pedal set with Hall sensors, fully adjustable pedal spacing"
        },
        {
          "component": "Table Clamp",
          "description": "Sturdy desk mount supporting desks up to 50mm thick"
        },
        {
          "component": "Power Supply",
          "description": "72W rated power adapter"
        },
        {
          "component": "USB Cable",
          "description": "For connecting wheelbase to Xbox Series X|S, Xbox One, or PC"
        },
        {
          "component": "Tools & Hardware",
          "description": "Assembly bolts and adjustment hex keys"
        },
        {
          "component": "User Manual",
          "description": "Complete reference guide"
        }
      ],
      "physicalSetup": {
        "mountingOptions": [
          {
            "title": "Option A: Desk Mount (Beginners)",
            "desc": "Attach included table clamp using 4 mounting holes under R3 base. Secure firmly to desk (supports up to 50mm thick desk). Handles full 3.9 Nm torque cleanly."
          },
          {
            "title": "Option B: Sim Rig Mount",
            "desc": "Use 4-hole bottom mounting pattern. Fits most standard sim racing cockpits, wheel stands, and rigs."
          }
        ],
        "positioning": [
          {
            "title": "Seating & Wheel Angle",
            "desc": "Sit so your arms are bent ~90° at 9 and 3 o'clock. Relax shoulders. Angle wheel slightly upward like a real car. Eyes level with screen center."
          },
          {
            "title": "Pedal Setup",
            "desc": "Heels rest comfortably on floor. Adjust pedal spacing left/right by moving mounting bolts. Support pedals at back on hard floor/carpet to prevent sliding."
          },
          {
            "title": "Quick Release Attachment",
            "desc": "Align 6 steel balls on wheel QR with 6 grooves on base shaft. Push until it clicks into place. Squeeze black QR ring with MOZA logo towards wheel to release."
          }
        ]
      },
      "xboxConnection": {
        "steps": [
          {
            "step": 1,
            "title": "Pedals to Base",
            "desc": "Connect SR-P Lite pedal set to PEDAL port on rear of R3 base using provided RJ45 cable."
          },
          {
            "step": 2,
            "title": "Power Connection",
            "desc": "Plug power cord into power adapter, then insert power jack into R3 base."
          },
          {
            "step": 3,
            "title": "Wall Outlet",
            "desc": "Plug power adapter into wall outlet."
          },
          {
            "step": 4,
            "title": "USB Connection",
            "desc": "Connect USB-B end to R3 base USB-B port and USB-A end to Xbox USB port."
          },
          {
            "step": 5,
            "title": "Power On Base",
            "desc": "Press power button on rear of R3 base to turn it on."
          },
          {
            "step": 6,
            "title": "Power On Xbox",
            "desc": "Turn on your Xbox console and launch Forza Motorsport."
          }
        ],
        "indicators": [
          {
            "pattern": "RPM light flows side-to-center",
            "status": "success",
            "label": "✅ Successful Xbox Connection"
          },
          {
            "pattern": "RPM light is flashing",
            "status": "warning",
            "label": "⚠️ In PC Mode — Switch to Xbox Mode (Hold S1+S2 for 3s)"
          }
        ]
      },
      "modeSwitching": {
        "shortcut": "Hold [S1 + S2] for 3 seconds on the ESX steering wheel",
        "desc": "Toggles between Xbox Mode and PC Mode. RPM light pattern changes to confirm mode. Use if wheel is not recognized or FFB telemetry drops.",
        "mobileApp": "Download MOZA Racing mobile app (iOS/Android) -> connect via Bluetooth -> calibrate pedals, tune steering angles, adjust FFB curves, and update firmware wirelessly."
      },
      "steeringAngles": [
        {
          "game": "Forza Motorsport (2023)",
          "recommended": "540° - 900°",
          "notes": "Match in-game angle (720° recommended)"
        },
        {
          "game": "Forza Horizon 5",
          "recommended": "540° - 720°",
          "notes": "Responsive road car steering"
        },
        {
          "game": "F1 Series",
          "recommended": "360° - 540°",
          "notes": "Quick formula rack rotation"
        },
        {
          "game": "Assetto Corsa / ACC",
          "recommended": "540° - 900°",
          "notes": "Matches real GT3/sports car rack"
        }
      ],
      "ffbSliders": [
        {
          "name": "Maximum Torque Limit",
          "value": "80% - 100%",
          "description": "Controls overall FFB strength from the 3.9 Nm motor."
        },
        {
          "name": "Force Feedback Reversal",
          "value": "Off",
          "description": "Prevents inverted steering forces."
        },
        {
          "name": "Hands-Off Protection",
          "value": "On",
          "description": "Prevents violent oscillation when releasing the wheel on straights."
        },
        {
          "name": "Maximum Steering Angle",
          "value": "720°",
          "description": "Matches physical rotation to virtual steering rack."
        },
        {
          "name": "Steering Axis Deadzone",
          "value": "0% Inside / 100% Outside",
          "description": "Eliminates center slop for immediate 1:1 steering rack response."
        },
        {
          "name": "Steering Axis Sensitivity",
          "value": "50%",
          "description": "Linear response across the entire turning range."
        },
        {
          "name": "Mechanical Trail Scale",
          "value": "100% - 140%",
          "description": "Communicates suspension geometry caster and rear grip load."
        },
        {
          "name": "Pneumatic Trail Scale",
          "value": "90% - 100%",
          "description": "Communicates front tire slip angle; drops force when front tires lose grip."
        },
        {
          "name": "Road Feel Scale",
          "value": "35% - 40%",
          "description": "Reduces excessive high-frequency curb chatter on a 3.9 Nm base."
        },
        {
          "name": "Wheel Damping Scale",
          "value": "15% - 30%",
          "description": "Adds subtle fluid resistance to prevent hands-off oscillation."
        }
      ],
      "presets": [
        {
          "id": "smooth",
          "name": "Beginner Smooth Control",
          "badge": "Recommended for Beginners",
          "desc": "Smooth force delivery designed to build muscle memory without arm fatigue or sudden snapping forces.",
          "sliders": [
            {
              "label": "FFB Scale",
              "val": "85%"
            },
            {
              "label": "Mechanical Trail",
              "val": "105%"
            },
            {
              "label": "Road Feel",
              "val": "30%"
            },
            {
              "label": "Base Damping",
              "val": "20%"
            },
            {
              "label": "Maximum Angle",
              "val": "720°"
            }
          ]
        },
        {
          "id": "raw",
          "name": "Pro Direct Raw Feedback",
          "badge": "Maximum Detail",
          "desc": "Unfiltered 3.9 Nm dynamic force range with razor-sharp tire slip communication and minimal damping.",
          "sliders": [
            {
              "label": "FFB Scale",
              "val": "100%"
            },
            {
              "label": "Mechanical Trail",
              "val": "120%"
            },
            {
              "label": "Road Feel",
              "val": "45%"
            },
            {
              "label": "Base Damping",
              "val": "10%"
            },
            {
              "label": "Maximum Angle",
              "val": "540° / 720°"
            }
          ]
        }
      ],
      "ffbSensations": [
        {
          "sensation": "Heavy wheel in corners",
          "meaning": "The car has high grip",
          "action": "Trust the car, maintain line"
        },
        {
          "sensation": "Wheel goes light",
          "meaning": "Front tires losing grip (understeer)",
          "action": "Reduce steering input & speed smoothly"
        },
        {
          "sensation": "Wheel pulls to one side",
          "meaning": "Uneven grip or track camber shift",
          "action": "Correct steering smoothly"
        },
        {
          "sensation": "Rumble / vibration",
          "meaning": "Road surface, curbs, rumble strips",
          "action": "Keep wheel steady, hold reference line"
        }
      ],
      "pedalCalibration": {
        "overview": "SR-P Lite pedals use ultra-sensitive Hall sensors (no physical contact, lifetime durability).",
        "methods": [
          {
            "name": "Method 1 (PC Mode)",
            "desc": "Connect to PC, enter PC mode in MOZA Pit House, calibrate min/max travel, switch back to Xbox."
          },
          {
            "name": "Method 2 (Mobile App)",
            "desc": "Open MOZA Racing App on smartphone, pair via Bluetooth, run pedal calibration directly in Xbox mode."
          }
        ],
        "upgradeKit": "SR-P Lite Performance Kit ($45 CAD): Adds spring and elastomer for realistic progressive brake resistance. Highly recommended for cars without ABS."
      },
      "gameCompatibility": {
        "xbox": [
          "Forza Motorsport (2023) ✅",
          "Forza Horizon 5 ✅",
          "F1 Series ✅",
          "Assetto Corsa ✅",
          "Assetto Corsa Competizione ✅",
          "DiRT Rally 2.0 ✅",
          "Project CARS ✅",
          "GRID (2019) ✅"
        ],
        "pc": [
          "iRacing",
          "Assetto Corsa / ACC",
          "rFactor 2",
          "Automobilista 2",
          "RaceRoom"
        ],
        "fm2023Settings": "In FM2023: Settings -> Controls -> Wheel -> Set Steering Deadzone Inside = 0, Steering Sensitivity = 50%, Angle = 720°."
      },
      "learningProgression": [
        {
          "stage": 1,
          "title": "Hardware Familiarization",
          "focus": "Wheel, pedal spacing, and posture",
          "goal": "Setup feels natural"
        },
        {
          "stage": 2,
          "title": "Track Familiarization",
          "focus": "Learn layout at 50% pace",
          "goal": "3 clean laps completed"
        },
        {
          "stage": 3,
          "title": "The Line",
          "focus": "Hit Outside-Inside-Outside apexes",
          "goal": "80% of apexes hit accurately"
        },
        {
          "stage": 4,
          "title": "Braking",
          "focus": "Consistent brake markers & trail braking",
          "goal": "Same braking point every lap"
        },
        {
          "stage": 5,
          "title": "Exit Speed",
          "focus": "Smooth throttle squeeze out of turns",
          "goal": "Zero wheelspin on exit"
        },
        {
          "stage": 6,
          "title": "Full Laps",
          "focus": "Putting all skills together smoothly",
          "goal": "Repeatable lap times within 0.5s"
        }
      ],
      "troubleshooting": [
        {
          "issue": "Wheel not recognized on Xbox",
          "fix": "Check USB cable, restart Xbox console. Ensure Quick Resume is not freezing USB."
        },
        {
          "issue": "RPM light flashing",
          "fix": "Switch from PC mode to Xbox mode by holding [S1 + S2] for 3 seconds."
        },
        {
          "issue": "No force feedback",
          "fix": "Verify mode (Xbox mode), check in-game FFB settings, restart game from main menu."
        },
        {
          "issue": "Pedals not registering full travel",
          "fix": "Recalibrate via MOZA Mobile App or PC Pit House."
        },
        {
          "issue": "Wheel oscillates on straights",
          "fix": "Enable Hands-Off Protection and increase Wheel Damping Scale to 20-30%."
        }
      ],
      "maintenanceWarranty": {
        "warranty": [
          {
            "component": "Wheelbase Body",
            "period": "24 Months"
          },
          {
            "component": "Steering Wheel Body",
            "period": "12 Months"
          },
          {
            "component": "Pedals Set",
            "period": "12 Months"
          },
          {
            "component": "Power Supply Adapter",
            "period": "12 Months"
          },
          {
            "component": "Data Cables",
            "period": "6 Months"
          }
        ],
        "upgrades": [
          {
            "upgrade": "SR-P Lite Clutch Pedal",
            "price": "$55 CAD",
            "desc": "Add 3rd pedal for manual clutch driving"
          },
          {
            "upgrade": "Performance Kit",
            "price": "$45 CAD",
            "desc": "Spring + elastomer progressive brake feel upgrade"
          },
          {
            "upgrade": "MOZA QR Wheels",
            "price": "Varies",
            "desc": "Swap steering rims using Moza quick release"
          }
        ]
      },
      "glossary": [
        {
          "term": "Direct Drive (DD)",
          "definition": "Motor architecture where steering wheel mounts directly to motor shaft. Zero belts/gears = zero latency and crisp force feedback detail."
        },
        {
          "term": "Peak Torque (3.9 Nm)",
          "definition": "Maximum rotational force output of the Moza R3 motor. High-fidelity detail ideal for desk or rig mounting."
        },
        {
          "term": "FFB Clipping",
          "definition": "Occurs when physics force demand exceeds motor torque limit. Force hits 100% flat ceiling, drowning out tire detail."
        },
        {
          "term": "Mechanical Trail",
          "definition": "Self-centering steering force caused by suspension caster angle. Communicates rear grip loading."
        },
        {
          "term": "Pneumatic Trail",
          "definition": "Force generated by tire rubber contact patch slip angle. Drops smoothly when front tires lose grip."
        },
        {
          "term": "Hall Sensor Technology",
          "definition": "Magnetic position sensing without physical contact wear. Prevents pedal potentiometer wear and spiking."
        }
      ]
    },
    "forza2023": {
      "title": "Forza Motorsport (2023): Beginner User Guide",
      "subtitle": "A Sim Racing Coach's Guide to Getting Started based on Skip Barber's Going Faster!",
      "quote": "\"The first step in your plan is to realize that you only have to go as fast as you want to go. Just because you are on a racetrack does not mean you should throw common sense out the window.\" — Going Faster!",
      "gameModes": [
        {
          "mode": "Builders Cup",
          "purpose": "Career mode with structured practice & race events",
          "recommended": "Learning the game & leveling cars"
        },
        {
          "mode": "Free Play",
          "purpose": "Custom races & solo practice sessions with any car/track",
          "recommended": "Dedicated practice & setup tuning"
        },
        {
          "mode": "Rivals",
          "purpose": "Hot-lapping against driver ghost data",
          "recommended": "Improving lap times & analyzing lines"
        },
        {
          "mode": "Featured Multiplayer",
          "purpose": "Ranked online racing against real opponents",
          "recommended": "Once confident in racecraft & track limits"
        }
      ],
      "practiceSessionInfo": {
        "title": "Why Practice Sessions Matter",
        "benefits": [
          "Learn track layout & visual reference points without pressure",
          "Find consistent brake points and turn-in markers",
          "Build muscle memory and steady rhythm",
          "Earn Car XP (CXP) to level up car upgrades"
        ]
      },
      "essentialSettings": [
        {
          "setting": "Drivatar Difficulty",
          "recommendation": "3 - 4 / 10",
          "why": "Allows learning racecraft without frustrating AI aggression"
        },
        {
          "setting": "Damage",
          "recommendation": "Cosmetic or Fuel & Tire",
          "why": "Learn realistic tire wear without game-ending repairs"
        },
        {
          "setting": "Fuel & Tire Wear",
          "recommendation": "On",
          "why": "Build habits of managing tire grip and fuel load from day one"
        },
        {
          "setting": "Track Limits",
          "recommendation": "On (Gameplay & HUD)",
          "why": "Visual boundary lines show legal track limits for clean lap times"
        },
        {
          "setting": "Proximity Arrows",
          "recommendation": "On",
          "why": "Displays grey/yellow indicators when opponents are nearby"
        }
      ],
      "drivingAssists": [
        {
          "assist": "Suggested Line",
          "beginner": "Full or Braking Only",
          "whenToChange": "Turn off when track layout is memorized"
        },
        {
          "assist": "Braking (ABS)",
          "beginner": "ABS On",
          "whenToChange": "Keep on until threshold braking is mastered"
        },
        {
          "assist": "Steering",
          "beginner": "Normal or Partially Assisted",
          "whenToChange": "Switch to Simulation when comfortable with wheel control"
        },
        {
          "assist": "Throttle",
          "beginner": "Unassisted",
          "whenToChange": "Learn throttle modulation from day one"
        },
        {
          "assist": "Traction Control (TCS)",
          "beginner": "Sport or On",
          "whenToChange": "Reduce as throttle squeeze control improves"
        },
        {
          "assist": "Stability Control (STM)",
          "beginner": "On",
          "whenToChange": "Turn off when car balance understeer/oversteer is understood"
        },
        {
          "assist": "Shifting",
          "beginner": "Automatic",
          "whenToChange": "Switch to Manual when track focus becomes automatic"
        }
      ],
      "assistMilestones": [
        {
          "milestone": "5 clean laps completed",
          "remove": "Suggested Line -> Braking Only"
        },
        {
          "milestone": "Know track layout & brake markers",
          "remove": "Suggested Line -> Off"
        },
        {
          "milestone": "Consistent braking without lockups",
          "remove": "ABS -> Off"
        },
        {
          "milestone": "Smooth gear changes",
          "remove": "Automatic -> Manual"
        },
        {
          "milestone": "Controlled throttle out of corners",
          "remove": "Traction Control -> Off"
        }
      ],
      "ffbSettings": {
        "steeringMode": [
          {
            "mode": "Normal",
            "desc": "Smooths out yaw inertia; more stable for beginners."
          },
          {
            "mode": "Simulation",
            "desc": "No smoothing filter; direct 1:1 steering rack precision."
          }
        ],
        "sliderValues": [
          {
            "setting": "Vibration Scale",
            "recommended": "50 - 60",
            "why": "Controls curb and road vibration intensity"
          },
          {
            "setting": "Force Feedback Scale",
            "recommended": "60 - 100",
            "why": "Controls overall FFB force output (60-80 for DD wheels)"
          },
          {
            "setting": "Steering Self Alignment",
            "recommended": "100",
            "why": "Wheel returns to center naturally based on tire physics"
          },
          {
            "setting": "Mechanical Trail Scale",
            "recommended": "100 - 140",
            "why": "Communicates suspension caster load & rear grip"
          },
          {
            "setting": "Pneumatic Trail Scale",
            "recommended": "100",
            "why": "Communicates tire slip angle; drops force at grip limit"
          },
          {
            "setting": "Road Feel Scale",
            "recommended": "130 - 140",
            "why": "Transmits track surface texture and bumps"
          },
          {
            "setting": "Load Sensitivity",
            "recommended": "100",
            "why": "Communicates weight transfer under braking and cornering"
          },
          {
            "setting": "Wheel Damping Scale",
            "recommended": "30 - 50",
            "why": "Smooths high-speed oscillation on straights"
          }
        ],
        "deadzones": [
          {
            "input": "Steering Deadzone Inside",
            "value": "0",
            "why": "Immediate steering response at dead center"
          },
          {
            "input": "Steering Deadzone Outside",
            "value": "100",
            "why": "Full physical steering range utilized"
          },
          {
            "input": "Acceleration Deadzone Inside",
            "value": "0",
            "why": "Immediate throttle engagement"
          },
          {
            "input": "Acceleration Deadzone Outside",
            "value": "95 - 100",
            "why": "Full throttle pedal travel"
          },
          {
            "input": "Deceleration Deadzone Inside",
            "value": "0",
            "why": "Immediate brake pedal response"
          },
          {
            "input": "Deceleration Deadzone Outside",
            "value": "95 - 100",
            "why": "Full brake pedal travel"
          }
        ]
      },
      "carSetupBasics": {
        "path": "Cars -> Upgrade & Tune -> Tuning",
        "simpleAdjustments": [
          {
            "adjustment": "Fuel Load",
            "effect": "Less fuel = lighter car = faster acceleration & cornering",
            "recommendation": "Minimum fuel + 1 lap reserve"
          },
          {
            "adjustment": "Tire Compound",
            "effect": "Soft = max grip/fast wear; Medium = balanced race tire",
            "recommendation": "Soft for qualifying, Medium for race"
          },
          {
            "adjustment": "Final Drive Ratio",
            "effect": "Lower ratio = higher acceleration; Higher ratio = top speed",
            "recommendation": "Tune to hit rev limiter at end of longest straight"
          }
        ]
      },
      "practiceRoutine": {
        "steps": [
          "1. The Line (Where to drive)",
          "2. Corner Exit (Carrying speed)",
          "3. Braking & Entering (Slowing down efficiently)"
        ],
        "sessionStructure": [
          {
            "phase": "Warm-up",
            "duration": "3 - 5 Laps",
            "focus": "Learn track layout & identify reference markers"
          },
          {
            "phase": "Line Practice",
            "duration": "5 - 10 Laps",
            "focus": "Hit every apex cleanly using full track width"
          },
          {
            "phase": "Exit Practice",
            "duration": "5 - 10 Laps",
            "focus": "Smooth throttle squeeze to maximize straightaway exit speed"
          },
          {
            "phase": "Braking Practice",
            "duration": "5 - 10 Laps",
            "focus": "Consistent brake markers & trail braking"
          },
          {
            "phase": "Full Laps",
            "duration": "5 - 10 Laps",
            "focus": "Combine all skills into repeatable lap times"
          }
        ],
        "rivalsMode": "Select track -> Pick ghost 0.5s faster -> Follow ghost line & braking points -> Beat ghost time.",
        "segmentSystem": "FM2023 breaks tracks into sectors with target scores. Focus on mastering one segment at a time!"
      },
      "apexApproach": {
        "fundamentals": [
          {
            "skill": "The Line",
            "practice": "Outside-Inside-Outside path. Hit every apex."
          },
          {
            "skill": "Corner Exit",
            "practice": "Smooth throttle squeeze. Listen for tire squeal or wheelspin."
          },
          {
            "skill": "Braking & Entering",
            "practice": "Consistent brake markers. Trail braking into apex."
          }
        ],
        "referencePoints": [
          "Distance boards (150m, 100m, 50m)",
          "Track curb start/finish lines",
          "Paint stripes on asphalt",
          "Bridge signs & grandstands"
        ],
        "cornerPoints": [
          "1. Brake point",
          "2. Turn-in point",
          "3. Apex clip",
          "4. Track-out exit point"
        ]
      },
      "beginnerMistakes": [
        {
          "mistake": "Driving too fast too soon",
          "cause": "Over-driving before knowing the track",
          "solution": "Start at 70% pace, build speed gradually"
        },
        {
          "mistake": "Ignoring practice sessions",
          "cause": "Rushing directly into races",
          "solution": "Use practice to earn CXP & learn brake markers"
        },
        {
          "mistake": "Stabbing pedals abruptly",
          "cause": "Street driving habits",
          "solution": "Squeeze pedals over 2-3 seconds smoothly"
        },
        {
          "mistake": "Braking too late",
          "cause": "Chasing late braking early",
          "solution": "Brake early & consistently; move brake point later slowly"
        },
        {
          "mistake": "Looking right in front of bumper",
          "cause": "Wrong visual focal point",
          "solution": "Look ahead to apex before turn-in; look to exit before apex"
        }
      ],
      "troubleshooting": {
        "understeer": [
          {
            "symptom": "Car pushes wide of corner",
            "likelyCause": "Too much entry speed",
            "solution": "Brake earlier before turn-in"
          },
          {
            "symptom": "Car refuses to turn into apex",
            "likelyCause": "On power too early",
            "solution": "Reduce throttle to transfer weight forward"
          },
          {
            "symptom": "Front tires feel light on wheel",
            "likelyCause": "Front tire grip exceeded",
            "solution": "Unwind steering angle slightly to restore grip"
          }
        ],
        "oversteer": [
          {
            "symptom": "Rear slides outward on exit",
            "likelyCause": "Too much throttle stabbed",
            "solution": "Squeeze throttle smoothly"
          },
          {
            "symptom": "Rear slides on entry lift-off",
            "likelyCause": "Abrupt throttle lift",
            "solution": "Lift throttle gradually"
          },
          {
            "symptom": "Car spins coming out of turn",
            "likelyCause": "Power oversteer",
            "solution": "Countersteer gently and reduce throttle"
          }
        ]
      },
      "progressionPlan": [
        {
          "week": "Week 1: Foundation",
          "sessions": [
            "S1: Setup game & 5 laps at 50% speed",
            "S2: Learn Laguna Seca reference points",
            "S3: Practice hitting apexes consistently"
          ]
        },
        {
          "week": "Week 2: Building Skills",
          "sessions": [
            "S1: Practice braking point consistency",
            "S2: Practice smooth corner exits",
            "S3: Combine braking + exit speed"
          ]
        },
        {
          "week": "Week 3: Integration",
          "sessions": [
            "S1: Full laps with 1-skill focus",
            "S2: Rivals mode ghost matching",
            "S3: Full race simulation stint"
          ]
        },
        {
          "week": "Week 4: Refining Pace",
          "sessions": [
            "S1: Identify weak corners & isolate practice",
            "S2: Reduce assists (Line -> Braking only)",
            "S3: Full race applying everything"
          ]
        }
      ],
      "tracks": [
        {
          "name": "Track Categories & Surfaces",
          "desc": "Permanent circuits (e.g., Silverstone, Laguna Seca) offer rubbered-in high grip lines. Street circuits feature lower grip and unforgiving concrete barriers. Ovals require high-speed draft management."
        },
        {
          "name": "Corner Anatomy (Entry, Apex, Exit)",
          "desc": "Turn-in Point: Where you initial turn the wheel while trail braking. Geometric Apex: Midpoint of inside kerb. Late Apex: Turning later to straighten corner exit for maximum straightaway acceleration."
        },
        {
          "name": "Forza Race Regulations (FRR) & Track Limits",
          "desc": "Track limits are defined by white lines or outer kerb boundaries. Putting 4 wheels beyond track limits incurs time penalties (0.3s to 3.0s+) and dirties lap times in Rivals mode."
        },
        {
          "name": "Dynamic Track Evolution & Weather",
          "desc": "Track rubbering increases grip on the racing line over race stints. Rain creates slick offline puddles and drastically shifts braking zones 20-30 meters earlier."
        }
      ],
      "carClasses": [
        {
          "class": "E to B Class (100 - 600 PI)",
          "type": "Production & Sport Cars",
          "desc": "Low downforce, momentum driving. Focus on smooth weight transfer, maintaining corner exit speed, and trail braking."
        },
        {
          "class": "A to S Class (601 - 800 PI)",
          "type": "Supercars & Track Toys",
          "desc": "High horsepower to weight ratio. Throttle control out of slow corners becomes critical to prevent wheelspin."
        },
        {
          "class": "R to P & X Class (801 - 999 PI)",
          "type": "Race Cars & Prototypes / Formula",
          "desc": "High aerodynamic downforce. Higher cornering speeds require confidence in aero grip and fast reaction times."
        }
      ],
      "drivetrains": [
        {
          "type": "FWD (Front-Wheel Drive)",
          "characteristics": "Front wheels steer and propel the vehicle.",
          "handling": "Inherently stable; tends to understeer under heavy power. Brake early, turn in, and roll on power smoothly after apex."
        },
        {
          "type": "RWD (Rear-Wheel Drive)",
          "characteristics": "Front wheels steer, rear wheels propel.",
          "handling": "Maximum agility and accelerating traction. Susceptible to oversteer on exit if throttle is stomped aggressively."
        },
        {
          "type": "AWD (All-Wheel Drive)",
          "characteristics": "Power distributed to all four wheels.",
          "handling": "Massive exit traction out of slow corners. Requires trail braking to overcome initial turn-in power understeer."
        }
      ],
      "glossary": [
        {
          "category": "Racing Line & Cornering",
          "term": "Apex (Geometric vs Late)",
          "definition": "The closest point to the inside of a corner. Geometric apex maintains constant radius; Late apex turns later to maximize straightaway exit speed."
        },
        {
          "category": "Pedal & Vehicle Control",
          "term": "Trail Braking",
          "definition": "Gradually tapering off brake pressure as you steer into a corner, transferring weight to front tires for sharper turn-in grip."
        },
        {
          "category": "Vehicle Handling Dynamics",
          "term": "Understeer (\"Push\")",
          "definition": "Front tires lose grip before rear tires, causing the car to plow wide of the intended corner arc despite turning the wheel."
        },
        {
          "category": "Vehicle Handling Dynamics",
          "term": "Oversteer (\"Loose\")",
          "definition": "Rear tires lose traction first, causing the rear end of the car to swing outward into a slide."
        },
        {
          "category": "Tire & Physics Science",
          "term": "Slip Angle",
          "definition": "The angle between the direction a tire is pointed and its actual path over the track. Maximum tire grip occurs at a subtle 4°-7° slip angle."
        },
        {
          "category": "Vehicle Handling Dynamics",
          "term": "Weight Transfer",
          "definition": "Shift of vehicle mass forward under braking (loading front tires), rearward under acceleration (loading rear tires), or laterally in turns."
        },
        {
          "category": "Telemetry & Electronics",
          "term": "Telemetry Data Out (UDP)",
          "definition": "A feature in Forza Motorsport settings that broadcasts live telemetry data (wheel speed, RPM, FFB slip, G-forces) over local network."
        },
        {
          "category": "Racing Rules & Strategy",
          "term": "Drafting / Slipstreaming",
          "definition": "Following closely behind a leading car to reduce aerodynamic drag, gaining top speed for an overtaking attempt down straights."
        },
        {
          "category": "Pedal & Vehicle Control",
          "term": "Cadence / Threshold Braking",
          "definition": "Modulating brake pedal pressure right at the verge of tire lockup (or ABS threshold) for shortest stopping distance."
        }
      ]
    },
    "telemetry": {
      "summary": {
        "title": "Telemetry: The Data-Driven Path to Faster Laps",
        "subtitle": "Understanding, Learning, and Interpreting Telemetry Data",
        "authorRef": "Based on Going Faster! Mastering the Art of Race Driving by Skip Barber Racing School",
        "quote": "Data collection systems replace theory with hard fact.",
        "duration": "Self-paced (2-3 weeks)",
        "skillLevel": "Complete Beginner",
        "tools": "Forza Motorsport 2023, Moza R3, Telemetry App"
      },
      "setup": {
        "title": "Enabling UDP Race Telemetry in Forza Motorsport 2023",
        "steps": [
          "Launch Forza Motorsport 2023",
          "Navigate to Settings -> Gameplay & HUD",
          "Scroll down to the \"UDP Race Telemetry\" section",
          "Configure the telemetry parameters below"
        ],
        "settings": [
          {
            "setting": "Data Out",
            "value": "ON",
            "purpose": "Enables UDP telemetry transmission"
          },
          {
            "setting": "Data Out IP Address",
            "value": "127.0.0.1 (or PC IP for Xbox)",
            "purpose": "Sends to localhost or target PC"
          },
          {
            "setting": "Data Out IP Port",
            "value": "9999 or 5300",
            "purpose": "Target port for listener app"
          },
          {
            "setting": "Data Out Packet Format",
            "value": "CAR DASH",
            "purpose": "Full telemetry data packet (331 bytes @ 60 Hz)"
          }
        ],
        "platformNotes": {
          "pc": "Use 127.0.0.1 if running the telemetry app on the same PC as Forza.",
          "xbox": "Set IP Address to the IPv4 address of your PC/laptop running the telemetry app on the same network."
        },
        "tools": [
          {
            "name": "Forza-data-tools",
            "platform": "Windows / Terminal",
            "desc": "Recommended for beginners. Offers terminal live telemetry, CSV logging, and web dashboard."
          },
          {
            "name": "RS Dash ASR",
            "platform": "iOS / Android / Windows",
            "desc": "Live racing dashboards, track maps, and telemetry graphs."
          },
          {
            "name": "Simracing Telemetry",
            "platform": "Windows (Go)",
            "desc": "Records and displays real-time telemetry curves."
          }
        ],
        "commands": {
          "quickStart": "./fdt -j -c log.csv",
          "terminalLog": "./fdt -q -c telemetry_log.csv",
          "docker": "docker run --rm -p 9999:9999/udp -p 8080:8080 forza-data-tools -j -q"
        }
      },
      "channels": [
        {
          "id": "throttle",
          "name": "Throttle Trace",
          "range": "0% to 100%",
          "quote": "A gradual increase in throttle will tend to create understeer. An abrupt application will create oversteer.",
          "goodTitle": "The Squeeze (Progressive Build)",
          "goodDesc": "Smooth 0-100% curve over 0.5-1.0s through apex to exit.",
          "badTitle": "The Stab (Abrupt Spike)",
          "badDesc": "Vertical line jump 0 to 100%, breaking rear tire traction.",
          "checkpoints": [
            "Is my throttle smooth and progressive without spikes?",
            "Am I at 100% full throttle by track-out?",
            "Do I have unexpected throttle dips mid-corner?"
          ]
        },
        {
          "id": "brake",
          "name": "Brake Trace",
          "range": "0% to 100%",
          "quote": "Threshold braking is matching appropriate brake pedal pressure to the maximum grip of the tire.",
          "goodTitle": "Threshold & Trail-Braking",
          "goodDesc": "Hard initial squeeze to 80-90% followed by progressive release tapering off into apex.",
          "badTitle": "The Stab & Lockup",
          "badDesc": "Sudden pedal slam locking front wheels or pumping brake pressure.",
          "checkpoints": [
            "Is brake application progressive without locking up?",
            "Am I trail-braking smoothly into turn-in?",
            "Does brake pressure reach zero right near the apex?"
          ]
        },
        {
          "id": "steering",
          "name": "Steering Trace",
          "range": "-720° to +720°",
          "quote": "The primary symptom of early apexing is the need to increase steering effort past the apex.",
          "goodTitle": "Unwinding on Exit",
          "goodDesc": "Steady turn-in angle holding smoothly, then unwinding back toward center on exit.",
          "badTitle": "Early Apex Correction",
          "badDesc": "Steering angle increases past apex because turn-in was too early.",
          "checkpoints": [
            "Am I unwinding steering as I apply exit throttle?",
            "Do I need to add extra wheel turn past the apex?",
            "Is steering motion smooth without sawing?"
          ]
        },
        {
          "id": "speed",
          "name": "Speed Trace",
          "range": "MPH / KPH",
          "quote": "The speed you carry out of the corner determines maximum speed on the following straightaway.",
          "goodTitle": "High Corner Exit Momentum",
          "goodDesc": "Speed curve smoothly bottoms out at apex (minimum speed) and launches high on exit.",
          "badTitle": "Overslowed Corner Entry",
          "badDesc": "Speed dips excessively low in entry zone, destroying straightaway top speed.",
          "checkpoints": [
            "Where on the track is my speed trace lower than a reference lap?",
            "What is my minimum cornering speed at apex?",
            "Is my exit speed maximizing straightaway velocity?"
          ]
        },
        {
          "id": "lateralG",
          "name": "Lateral G Trace",
          "range": "G-Forces (Cornering Grip)",
          "quote": "At the limit of a car cornering ability, speed is directly related to the radius of the arc it is on.",
          "goodTitle": "Consistent Cornering G Load",
          "goodDesc": "Flat, high G load plateau through mid-corner showing tires at grip limit.",
          "badTitle": "Inconsistent G Drops",
          "badDesc": "G-force drops abruptly mid-corner indicating loss of tire grip.",
          "checkpoints": [
            "Is my lateral G load steady throughout the cornering arc?",
            "Am I hitting peak G forces for the tire compound?",
            "Do I see sudden G-drops caused by sliding?"
          ]
        }
      ],
      "patterns": [
        {
          "id": "early-apex",
          "title": "Pattern 1: Early Apex",
          "quote": "If you feel the need to increase steering effort past the apex, you turned in too soon.",
          "signature": {
            "steering": "Steering angle increases past apex (more lock needed)",
            "throttle": "Lift or hesitation on corner exit",
            "speed": "Drops on exit; lost momentum on straight"
          },
          "fix": "Turn in later. Move turn-in visual reference marker back by 5-10 meters.",
          "drill": "Move turn-in marker 5m later until steering trace smoothly unwinds on exit."
        },
        {
          "id": "late-apex",
          "title": "Pattern 2: Late Apex",
          "quote": "If there is road left at corner exit, your turn-in and apex were too late.",
          "signature": {
            "steering": "Unwinds early, empty road left on track-out",
            "throttle": "Applied early, but overall corner speed is lower",
            "speed": "Lower entry speed than vehicle capability"
          },
          "fix": "Turn in earlier. Move turn-in point forward by 5-10 meters.",
          "drill": "Move turn-in marker 5m earlier until car naturally uses full track-out edge."
        },
        {
          "id": "abrupt-throttle",
          "title": "Pattern 3: Abrupt Throttle",
          "quote": "A gradual increase in throttle creates understeer. Abrupt throttle creates oversteer.",
          "signature": {
            "throttle": "Vertical line jump 0% to 100%",
            "slip": "Tire slip ratio spikes above 1.0 (wheelspin)",
            "speed": "Loss of forward acceleration; oversteer corrections"
          },
          "fix": "Squeeze throttle smoothly over 0.5 - 1.0 second roll-on.",
          "drill": "Practice 1-second throttle roll-on on corner exit while monitoring slip ratio."
        },
        {
          "id": "abrupt-brake",
          "title": "Pattern 4: Abrupt Brake",
          "quote": "Slamming on brakes is like driving a nail with a hammer. Squeeze for grip.",
          "signature": {
            "brake": "Vertical spike 0% to 100%",
            "slip": "Tire lockup (wheel rotation stops)",
            "steering": "Complete loss of turning authority"
          },
          "fix": "Squeeze brake pedal over 0.2 - 0.3 seconds to load front tires.",
          "drill": "Progressive brake squeeze in straight braking zones without lockup."
        },
        {
          "id": "too-much-trail",
          "title": "Pattern 5: Too Much Trail-Braking",
          "quote": "A car will decelerate and turn just like it accelerates and turns.",
          "signature": {
            "brake": "Brake pressure continues deep past apex",
            "steering": "Wheel turned heavily while brake is applied",
            "speed": "Overslowed at apex; front understeer or rear snap"
          },
          "fix": "Release brake pedal earlier. Aim for zero brake pressure right before apex.",
          "drill": "Release trail brake smoothly so pressure reaches 0% as you clip apex."
        },
        {
          "id": "too-little-trail",
          "title": "Pattern 6: Too Little Trail-Braking",
          "quote": "Carrying brake into turn-in loads front tires for maximum turn-in grip.",
          "signature": {
            "brake": "Zero brake pressure immediately after turn-in",
            "steering": "Wheel turned with unloaded front suspension",
            "speed": "Entry speed too slow; car pushes wide (understeer)"
          },
          "fix": "Carry light trail brake (10-20%) into turn-in.",
          "drill": "Maintain trailing brake pressure past turn-in point to keep front loaded."
        }
      ],
      "practices": [
        {
          "id": "three-lap",
          "title": "The Three-Lap Telemetry Comparison",
          "desc": "Drive 5 laps, log to CSV, and compare your best lap vs worst lap in telemetry to isolate exact time-loss points.",
          "metrics": [
            "Brake Point Distance",
            "Minimum Cornering Speed",
            "Throttle Squeeze Smoothness",
            "Apex Steering Angle"
          ]
        },
        {
          "id": "reference-lap",
          "title": "Rivals Reference Lap Overlay",
          "desc": "Overlay a faster driver Rivals telemetry trace over yours. Spot brake point differences and exit speed gaps.",
          "keyQuestions": [
            "Where does reference driver brake later?",
            "Where does reference driver get on throttle earlier?",
            "What is the minimum speed delta at key apexes?"
          ]
        },
        {
          "id": "corner-diagnosis",
          "title": "One-Corner Focus Diagnosis",
          "desc": "Drive 10 laps focusing 100% on one problem corner. Log telemetry for all 10 laps to analyze best vs worst technique.",
          "cycle": "Measure -> Practice -> Measure -> Improve -> Repeat"
        }
      ],
      "mozaFfb": {
        "title": "Syncing Moza R3 Force Feedback with Telemetry",
        "sensations": [
          {
            "feel": "Heavy Wheel Resistance",
            "meaning": "High tire grip loaded up",
            "telemetryCheck": "High lateral G, steady speed trace"
          },
          {
            "feel": "Light Wheel Feeling",
            "meaning": "Front tire grip loss (understeer)",
            "telemetryCheck": "Lateral G drop, steering angle spike"
          },
          {
            "feel": "Vibration / Pulsing",
            "meaning": "Rumble strips, surface bumps, lockup",
            "telemetryCheck": "Suspension travel, wheel slip spikes"
          }
        ],
        "rpmLeds": [
          {
            "color": "Green",
            "meaning": "Optimal power band RPM",
            "action": "Maintain throttle build"
          },
          {
            "color": "Yellow",
            "meaning": "Approaching redline",
            "action": "Prepare to upshift"
          },
          {
            "color": "Red",
            "meaning": "Redline limit",
            "action": "Shift immediately"
          }
        ]
      },
      "glossary": [
        {
          "term": "Telemetry",
          "definition": "Collection and automated transmission of vehicle data during driving stints."
        },
        {
          "term": "Trace",
          "definition": "Graphical representation of a single telemetry data channel over distance or time."
        },
        {
          "term": "Tire Slip Ratio",
          "definition": "Ratio difference between wheel rotational speed and actual vehicle speed (optimal acceleration at 5-10% slip)."
        },
        {
          "term": "Threshold Braking",
          "definition": "Braking at maximum pedal pressure right before tire lockup occur."
        },
        {
          "term": "Trail-Braking",
          "definition": "Gradually easing brake pressure while turning into the apex."
        },
        {
          "term": "Lateral G",
          "definition": "Cornering force in sideways direction measured in Gs."
        }
      ]
    }
  }
};

if (typeof window !== 'undefined') {
  window.APEX_CONTENT = APEX_CONTENT;
}
