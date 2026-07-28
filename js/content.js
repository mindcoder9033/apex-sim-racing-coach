const APEX_CONTENT = {
  "modules": [
    {
      "id": 0,
      "title": "Building the Connection: Wheel Feel & Muscle Memory",
      "subtitle": "Hardware setup, wheel feel, pedal modulation, and muscle memory foundation.",
      "description": "Develop an intuitive physical connection between driver inputs and car behavior, establishing fundamental muscle memory for steering, throttle, and brake control before introducing complex racing techniques.",
      "duration": "1 Week (4 Sessions)",
      "hardware": "Moza R3 Wheel Bundle for Xbox",
      "game": "Forza Motorsport 2023",
      "overarchingGoal": "To develop an intuitive physical connection between driver inputs and car behavior, establishing fundamental muscle memory for steering, throttle, and brake control before introducing complex racing techniques.",
      "outcomes": [
        "Feel the transition from grip to slip through the steering wheel",
        "Apply smooth, progressive inputs without thinking about them",
        "Identify understeer and oversteer through tactile feedback",
        "Maintain consistent lap times within ±2 seconds over 5 laps"
      ],
      "sessions": [
        {
          "id": 1,
          "title": "The Steering Connection",
          "focus": "Wheel grip, seating position, center position, understeer/oversteer tactile feel",
          "car": "2016 Mazda MX-5",
          "track": "Lime Rock Park - Full Alt",
          "targetLapTime": "1:23.500",
          "difficulty": 1,
          "setupConfig": {
            "forzaSettings": {
              "controller": [
                {
                  "setting": "Steering",
                  "value": "Simulation"
                },
                {
                  "setting": "Vibration Scale",
                  "value": "100"
                },
                {
                  "setting": "Force Feedback Scale",
                  "value": "100"
                },
                {
                  "setting": "Steering Self Alignment",
                  "value": "75"
                },
                {
                  "setting": "Mechanical Trail Scale",
                  "value": "100"
                },
                {
                  "setting": "Pneumatic Trail Scale",
                  "value": "100"
                },
                {
                  "setting": "Road Feel Scale",
                  "value": "85"
                },
                {
                  "setting": "Load Sensitivity",
                  "value": "75"
                },
                {
                  "setting": "Wheel Damper Scale",
                  "value": "80"
                },
                {
                  "setting": "Center Spring Scale",
                  "value": "50"
                },
                {
                  "setting": "Dynamic Damper Behavior",
                  "value": "100"
                },
                {
                  "setting": "Steering Sensitivity",
                  "value": "50 (Linear)"
                }
              ],
              "difficulty": [
                {
                  "setting": "Braking",
                  "value": "Assisted (ABS On)"
                },
                {
                  "setting": "Steering",
                  "value": "Assisted"
                },
                {
                  "setting": "Traction Control",
                  "value": "On"
                },
                {
                  "setting": "Stability Control",
                  "value": "On"
                },
                {
                  "setting": "Damage",
                  "value": "Cosmetic Only"
                },
                {
                  "setting": "Fuel/Tire Wear",
                  "value": "Off"
                },
                {
                  "setting": "Rewind",
                  "value": "On"
                }
              ],
              "hud": [
                {
                  "setting": "Speed/Revs",
                  "value": "On"
                },
                {
                  "setting": "Lap Time",
                  "value": "On"
                },
                {
                  "setting": "Minimap",
                  "value": "Off"
                },
                {
                  "setting": "Suggested Line",
                  "value": "Braking Only"
                }
              ]
            },
            "mozaR3Settings": {
              "base": [
                {
                  "setting": "Wheel Rotation",
                  "value": "900° (2.5 turns lock-to-lock)"
                },
                {
                  "setting": "Force Feedback Strength",
                  "value": "60%"
                },
                {
                  "setting": "Natural Inertia",
                  "value": "150%"
                },
                {
                  "setting": "Wheel Friction",
                  "value": "40%"
                },
                {
                  "setting": "Wheel Damper",
                  "value": "30%"
                },
                {
                  "setting": "Spring Strength",
                  "value": "20%"
                },
                {
                  "setting": "Damper Gain",
                  "value": "30%"
                },
                {
                  "setting": "Speed Sensitivity",
                  "value": "100%"
                },
                {
                  "setting": "Peak Force",
                  "value": "100%"
                },
                {
                  "setting": "Continuous Force",
                  "value": "80%"
                }
              ],
              "buttonMapping": [
                "Left Bumper: Look Left",
                "Right Bumper: Look Right",
                "A Button: Rewind (if enabled)",
                "B Button: Pause/Menu",
                "X Button: Cycle Camera",
                "Y Button: Toggle Telemetry"
              ],
              "pedal": [
                {
                  "pedal": "Brake",
                  "config": "80% at full press (progressive feel)"
                },
                {
                  "pedal": "Throttle",
                  "config": "Linear response (0-100%)"
                },
                {
                  "pedal": "Clutch",
                  "config": "Disabled"
                }
              ]
            }
          },
          "theory": {
            "title": "The Language of the Wheel & 9-and-3 Posture",
            "content": "Think of the steering wheel as your direct connection to the front tires. Every bump, slide, and grip change is translated through this interface.\n\n### Key Concept: Self-Aligning Torque\nWhen you turn the wheel and the car corners, the front tires naturally want to return to straight ahead. This creates resistance in the wheel that tells you how much grip the front tires have.\n\n### Three States of Steering Feel\n1. **Heavy Resistance** = Front tires have grip (good traction)\n2. **Light Resistance** = Front tires are losing grip (understeer approaching)\n3. **Feedback Flutter** = The car is at the limit (the \"buzz\" of peak grip)\n\n### The 9-and-3 Position\nAlways place your hands at **9 o'clock and 3 o'clock** on the wheel. This is your anchor position from which all steering inputs begin and return.\n- Equal leverage for both directions\n- Immediate reference for \"straight ahead\"\n- Allows smooth hand-over-hand on sharp corners\n- Reduces fatigue during extended sessions\n\n### Muscle Memory Principle\n\"Your hands will do what your eyes see.\" Look where you want to go, and your hands will naturally follow.",
            "keyTakeaways": [
              "Heavy wheel feeling equals front tire grip; light wheel feeling equals understeer/loss of traction",
              "Self-aligning torque naturally returns the wheel to center when traction is maintained",
              "Keep hands locked at 9-and-3 to build muscle memory for straight-ahead anchor position"
            ],
            "diagramId": "ffb-grip-diagram"
          },
          "practice": {
            "focus": "Straight line grip awareness & subtle micro-corrections",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Straight Line Grip Drill",
                "desc": "Enter main straight at 80 km/h. Hold 9-and-3 position, observe \"dead zone\" center feel, and make micro-corrections under 5 degrees.",
                "reps": 5,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Lime Rock Practical Steering Test",
            "focus": "Developing smooth steering inputs and feeling turn-in grip",
            "laps": 5,
            "instructions": [
              "Drive 5 laps around Lime Rock Park (Full Alt) in the 2016 Mazda MX-5.",
              "Turn 1: Focus on turn-in point and feel wheel heavy up as front tires load.",
              "Uphill Esses: Execute smooth continuous steering inputs; allow wheel to unwind naturally.",
              "Main Straight: Return immediately to 9-and-3 anchor position upon corner exit."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "1:25.000",
                "focus": "Find the line, no speed focus"
              },
              {
                "lap": 2,
                "target": "1:25.000",
                "focus": "Focus on steering smoothness"
              },
              {
                "lap": 3,
                "target": "1:24.000",
                "focus": "Add 5% more speed"
              },
              {
                "lap": 4,
                "target": "1:24.000",
                "focus": "Feel for grip through wheel"
              },
              {
                "lap": 5,
                "target": "1:23.500",
                "focus": "Push to comfort limit"
              }
            ]
          },
          "challenge": {
            "title": "Find the Limit Exercise",
            "type": "technique",
            "description": "Take the final corner at 70 km/h. Increase steering angle each lap by 2° until front end pushes and wheel goes light.",
            "criteria": "Identify understeer threshold and recognize light wheel sensation."
          },
          "assessment": {
            "title": "Steering Feel & Posture Evaluation",
            "criteria": "Maintain 9-and-3 grip, identify wheel lightness under push, achieve lap consistency within target window.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Describe the difference in steering wheel feel between when the car has grip and when the front tires are sliding. (Use 2-3 sentences)",
                "modelAnswer": "When the car has grip, the steering wheel feels heavy and you can feel resistance that builds as you turn more. When the front tires start to slide (understeer), the wheel suddenly becomes light and the car starts pushing wide, telling me I need to reduce steering angle or speed."
              },
              {
                "question": "Evaluate your current hand position on the wheel. Are you consistently returning to 9-and-3? What area needs improvement?",
                "modelAnswer": "I notice that on sharp corners I tend to let go of the wheel with my right hand to grab at 5 o'clock. On the next lap, I'll focus on keeping both hands at 9-and-3 throughout the corner, even if it means turning the wheel past my comfort zone."
              },
              {
                "question": "What is the single most important feeling you need to develop through the steering wheel?",
                "modelAnswer": "The ability to feel when the front tires are at their limit. When the steering goes light, I know I'm about to lose grip. This awareness lets me drive at the limit without going over it."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Steering Telemetry & Self-Aligning Torque Study",
            "prompts": [
              {
                "key": "steeringTrace",
                "label": "Steering Input Pattern",
                "question": "Look at the steering input graph after completing 5 laps. What do you notice about your steering input during long corners?",
                "expectedAnswer": "Smooth, progressive inputs that don't spike—the wheel trace should look like a gentle curve, not a series of steps."
              },
              {
                "key": "returnCenter",
                "label": "Return to Center Speed",
                "question": "How does the steering wheel's \"return to center\" speed compare to how quickly you turn in?",
                "expectedAnswer": "The wheel will naturally unwind faster than you turned in—this is the self-aligning torque at work. If you're fighting the wheel, you're probably over-driving the car."
              },
              {
                "key": "consistencyCheck",
                "label": "Turn-In Point Consistency",
                "question": "Are your steering inputs at the same point on the track each lap? What does this tell you?",
                "expectedAnswer": "If inputs are consistent, you're developing muscle memory. Inconsistent inputs suggest you're still thinking about the corners rather than feeling them."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Keep your grip relaxed and arms at 90°. Focus on feeling the wheel resistance over pushing for instant lap times.",
            "questions": [
              "Rate your current frustration level on a scale of 1-10. What aspect of the session caused the most stress?",
              "Identify one moment during the session where you felt \"in the zone\" and the car felt natural. What were you doing?",
              "State your intention for the next session. What is one specific thing you want to improve?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "Summary: What is the single most important thing you learned about steering feel in this session?",
              "Action: What will you do differently in the next session based on today's experience?",
              "Confidence: On a scale of 1-10, how confident do you feel about your ability to feel the car through the wheel?"
            ]
          }
        },
        {
          "id": 2,
          "title": "Throttle & Brake Feel",
          "focus": "Sensitivity in right foot, straight line braking, weight transfer & friction circle",
          "car": "2016 Mazda MX-5",
          "track": "Laguna Seca Raceway",
          "targetLapTime": "1:44.500",
          "difficulty": 1,
          "setupConfig": {
            "adjustments": [
              {
                "setting": "Traction Control",
                "value": "Off (Learn to modulate throttle)"
              },
              {
                "setting": "Stability Control",
                "value": "Off"
              },
              {
                "setting": "ABS",
                "value": "On (Keep for now)"
              },
              {
                "setting": "Brake Force (Moza R3)",
                "value": "85% (Slightly stiffer)"
              },
              {
                "setting": "Throttle Deadzone",
                "value": "2% (Removes pedal slack)"
              },
              {
                "setting": "Brake Deadzone",
                "value": "2%"
              }
            ]
          },
          "theory": {
            "title": "The Friction Circle & Progressive Pedal Control",
            "content": "All the grip a tire has is shared between four tasks: Accelerating, Braking, Cornering, or a combination.\n\n### The Golden Rule\nIf you use 100% of your grip to brake, you have 0% left to turn. If you use 100% to turn, you have 0% left to accelerate.\n\n### Progressive Inputs vs Stabbing\n- **Throttle**: Squeeze it like an orange—never stomp it down.\n- **Brake**: Squeeze it on smoothly—never stab it violently.\n- **Steering**: Smoothly rotate—never jerk.\n\n### Weight Transfer Principles\nWhen you apply the brake, weight moves **forward** (nose dips, front tires gain grip). When you apply throttle, weight moves **backward** (tail squats, rear tires gain grip). Driver controls grip distribution with the pedals!",
            "keyTakeaways": [
              "Tire grip is a shared budget—never ask 100% braking and 100% cornering at the same time",
              "Squeeze pedals progressively (\"like an orange\") rather than stabbing them",
              "Braking shifts weight forward for front grip; acceleration shifts weight rearward for rear traction"
            ],
            "diagramId": "weight-transfer-friction-circle"
          },
          "practice": {
            "focus": "Progressive pedal feel and throttle modulation without wheelspin",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Pedal Modulation & Squeeze Drill",
                "desc": "Drive 10 minutes practicing progressive 2-second brake squeezes on straights and egg-smooth throttle application through corner exits without triggering wheelspin.",
                "reps": 5,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Laguna Seca Pedal Modulation Stint",
            "focus": "Braking in a straight line and smooth progressive throttle application",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Laguna Seca in the 2016 Mazda MX-5 with Traction Control OFF.",
              "Turn 2 (Andretti Hairpin): Brake hard in a straight line, then squeeze throttle on exit.",
              "The Corkscrew (Turns 8-9): Brake straight before crest, let car settle, squeeze throttle down the hill.",
              "Turn 11: Execute progressive throttle application—no stabbing on exit!"
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "1:50.000",
                "focus": "Brake points only"
              },
              {
                "lap": 2,
                "target": "1:48.000",
                "focus": "Smooth throttle"
              },
              {
                "lap": 3,
                "target": "1:46.000",
                "focus": "Combining brake and throttle"
              },
              {
                "lap": 4,
                "target": "1:45.000",
                "focus": "Consistent inputs"
              },
              {
                "lap": 5,
                "target": "1:44.500",
                "focus": "Push to limit"
              }
            ]
          },
          "challenge": {
            "title": "The No Spin Challenge",
            "type": "technique",
            "description": "Complete 3 clean laps with Traction Control OFF without any wheelspin or snap oversteer excursions.",
            "criteria": "3 clean laps with smooth throttle trace (no spikes)."
          },
          "assessment": {
            "title": "Pedal Squeeze & Weight Transfer Assessment",
            "criteria": "Brake in a straight line, eliminate abrupt pedal spikes, maintain throttle modulation with TCS off.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Describe the proper technique for transitioning from braking to throttle. What should you feel?",
                "modelAnswer": "When you release the brake, the nose rises. When you apply throttle, the rear squats. The transition should be smooth—the car should be on the verge of rotating as you go from brake to throttle."
              },
              {
                "question": "Identify one corner where you consistently get it wrong and one where you get it right. What's the difference?",
                "modelAnswer": "In Turn 11 I used to stomp the gas and spin, whereas in Turn 4 I squeezed the pedal smoothly. The difference was waiting for the car to point straight before going to 100% throttle."
              },
              {
                "question": "What is the relationship between throttle application and steering wheel resistance?",
                "modelAnswer": "As you squeeze the throttle out of a corner, the rear tires take load and the steering wheel naturally starts to unwind. If you force the wheel turned while applying 100% throttle, you break rear traction."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Throttle & Brake Telemetry Study",
            "prompts": [
              {
                "key": "throttleGraph",
                "label": "Throttle Application Graph",
                "question": "Look at your throttle application graph. Where do you apply throttle most aggressively? Where are you smooth?",
                "expectedAnswer": "Aggressive application should only happen once steering is unwinding on straights. Smooth progressive ramps are essential in mid-corner exits."
              },
              {
                "key": "brakePressure",
                "label": "Brake Pressure vs Speed",
                "question": "Compare your brake pressure to corner entry speed. Is there a relationship between brake pressure and how much speed you carry?",
                "expectedAnswer": "Peak brake pressure should occur initial in a straight line, tapering off smoothly as you approach turn-in."
              },
              {
                "key": "spinAnalysis",
                "label": "Spin & Loss of Control Analysis",
                "question": "When you spin or lose control, what was the throttle position? What can you learn from this?",
                "expectedAnswer": "Spins usually occur from stabbing 100% throttle while still holding a high steering angle with TCS off."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 3,
            "resetPrompt": "TCS is off—expect minor tailslides as part of learning. Focus on smooth footwork over panic corrections.",
            "questions": [
              "Are you becoming more or less nervous about using the pedals? What's changed?",
              "What is the most frustrating part of this session?",
              "Name one thing you're proud of from this session."
            ]
          },
          "sessionReflection": {
            "questions": [
              "Summary: What did you learn about throttle and brake application?",
              "Action: What will you focus on in the next session?",
              "Confidence: Rate your pedal feel confidence (1-10)."
            ]
          }
        },
        {
          "id": 3,
          "title": "Connecting Steering & Pedals",
          "focus": "Combining steering & pedals, trail braking fundamentals, corner rhythm",
          "car": "2016 Mazda MX-5",
          "track": "Mid-Ohio Sports Car Course",
          "targetLapTime": "1:40.500",
          "difficulty": 2,
          "setupConfig": {
            "adjustments": [
              {
                "setting": "Traction Control",
                "value": "Off"
              },
              {
                "setting": "Stability Control",
                "value": "Off"
              },
              {
                "setting": "ABS",
                "value": "Off (Modulate brake pressure)"
              },
              {
                "setting": "Suggested Line",
                "value": "Off"
              },
              {
                "setting": "Brake Force (Moza R3)",
                "value": "90% (Slightly stiffer)"
              },
              {
                "setting": "In-Game Brake Pressure",
                "value": "90%"
              },
              {
                "setting": "Steering FFB",
                "value": "80% (Lighter for subtle feel)"
              }
            ]
          },
          "theory": {
            "title": "Trail Braking & The Integrated Circle of Grip",
            "content": "Trail braking is continuing to brake *after* you've started turning into a corner.\n\n### Why Trail Brake?\n- Braking keeps weight on the front tires into turn-in\n- Loaded front tires deliver maximum steering response\n- Helps the car rotate smoothly into technical apexes like Mid-Ohio Turn 1\n\n### The Danger\n- Too much brake pressure while turning = front tire lockup or understeer\n- Snapping off the brake = sudden weight transfer rearward and snap oversteer\n- Must bleed off brake pressure in direct proportion to turning the wheel!\n\n### The String Metaphor\nImagine a string connecting your steering wheel to your brake pedal. As you turn the wheel down into the corner, the string pulls your brake pedal up!",
            "keyTakeaways": [
              "Trail braking maintains front tire load into turn-in for sharper rotation",
              "Taper off brake pressure progressively as steering wheel angle increases",
              "Think of steering wheel and brake pedal as connected by a string"
            ],
            "diagramId": "pedal-squeeze-diagram"
          },
          "practice": {
            "focus": "Corner rhythm and coordinating hand/foot movements",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Corner Rhythm & Sync Drill",
                "desc": "At Mid-Ohio, execute the 4-part corner rhythm: straight braking, progressive trail-brake turn-in, apex balance, and smooth transition to exit throttle as steering unwinds.",
                "reps": 10,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Mid-Ohio Integrated Technique Stint",
            "focus": "Trail braking and smooth control synchronization",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Mid-Ohio in the 2016 Mazda MX-5 with ABS OFF.",
              "Turn 1 (Keyhole): Trail brake into corner entry, squeeze throttle early onto back straight.",
              "Turn 3 & 4: Focus on smooth entry, patience on throttle, late apex for aggressive exit.",
              "Turn 11: Carry speed with smooth, blended inputs."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "1:45.000",
                "focus": "Establish line"
              },
              {
                "lap": 2,
                "target": "1:43.000",
                "focus": "Smooth transitions"
              },
              {
                "lap": 3,
                "target": "1:42.000",
                "focus": "Add speed"
              },
              {
                "lap": 4,
                "target": "1:41.000",
                "focus": "Consistent"
              },
              {
                "lap": 5,
                "target": "1:40.500",
                "focus": "Push"
              }
            ]
          },
          "challenge": {
            "title": "The No ABS Challenge",
            "type": "technique",
            "description": "Complete 3 laps with ABS OFF without locking up front tires into heavy braking zones.",
            "criteria": "3 clean laps completed with zero flat-spotting or lockup spikes."
          },
          "assessment": {
            "title": "Trail Braking & Input Blending Assessment",
            "criteria": "Demonstrate progressive brake release into apex, zero ABS lockups, smooth transition to throttle.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Describe what you felt when trail braking correctly vs. incorrectly.",
                "modelAnswer": "When I trail braked correctly, the car rotated beautifully and I could feel the front tires gripping. When I got it wrong, the car pushed wide (understeer) or the rear came around (oversteer). The difference was smoothness and feel."
              },
              {
                "question": "What is the relationship between the steering wheel and the pedals? How do they work together?",
                "modelAnswer": "They act as a single system connected by weight transfer. As steering angle increases, brake or throttle intensity must decrease to stay within the tire friction circle."
              },
              {
                "question": "Why is smoothness more important than speed at this stage?",
                "modelAnswer": "Smoothness creates predictable weight transfer and consistent tire contact patches. Speed is a natural byproduct of a stable, well-balanced car."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Trail Braking & Blended Control Telemetry",
            "prompts": [
              {
                "key": "trailBrakeTrace",
                "label": "Brake vs Steering Overlap",
                "question": "Look at your brake pressure vs. steering input for a corner. Are you braking while turning? What does the shape of the graph tell you?",
                "expectedAnswer": "The brake trace should overlap smoothly with the initial rise of the steering trace, forming a continuous slope down to 0% at apex."
              },
              {
                "key": "transitionPoint",
                "label": "Brake-to-Throttle Transition",
                "question": "Where in the corner do you transition from brake to throttle? Is it smooth or abrupt?",
                "expectedAnswer": "The transition should occur right around apex with minimal coasting (dead time) and zero overlap of full brake and full throttle."
              },
              {
                "key": "lapComparison",
                "label": "Fastest vs Slowest Lap Lap-Trace",
                "question": "Compare your fastest lap to your slowest lap. What was different about the transitions?",
                "expectedAnswer": "Fastest laps feature smoother trail-braking decay and earlier progressive throttle pickup on exit."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "ABS is off—if you lock up, ease off brake pressure immediately. Stay calm and focus on pedal feel.",
            "questions": [
              "Are you more confident combining inputs than when you started?",
              "What area still needs the most work?",
              "What keeps you motivated to continue?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "Summary: What did you learn about integrating steering and pedals?",
              "Action: What will you focus on in the next session?",
              "Confidence: Rate your overall driving confidence (1-10)."
            ]
          }
        },
        {
          "id": 4,
          "title": "Muscle Memory Consolidation",
          "focus": "Consolidating all skills, flow state driving, 10 clean laps consistency",
          "car": "2016 Mazda MX-5",
          "track": "Lime Rock Park - Full Alt",
          "targetLapTime": "1:23.500",
          "difficulty": 2,
          "setupConfig": {
            "adjustments": [
              {
                "setting": "Traction Control",
                "value": "Off"
              },
              {
                "setting": "Stability Control",
                "value": "Off"
              },
              {
                "setting": "ABS",
                "value": "Off"
              },
              {
                "setting": "Suggested Line",
                "value": "Off"
              },
              {
                "setting": "HUD",
                "value": "Minimal (Speed only)"
              }
            ]
          },
          "theory": {
            "title": "The Flow State & The 80% Rule",
            "content": "In this final session of Module 0, your goal is to transition from conscious instruction to automatic muscle memory.\n\n### What Is The Flow State?\nFlow happens when you stop overthinking and start feeling. The car becomes a natural extension of your body.\n\n### How To Achieve Flow\n1. **Look Ahead**: Don't fixate on the pavement right in front of your bumper—look through the corner to the exit!\n2. **Breathe & Relax**: Relax your shoulders and loosen your grip on the wheel.\n3. **Trust The Car**: Trust that your body has learned the wheel feel and pedal squeeze over the last 3 sessions.\n\n### The 80% Rule\nDrive at **80% of your perceived limit**. This leaves a safety margin while allowing your brain to enter a calm, instinctive flow state.",
            "keyTakeaways": [
              "Automation means replacing conscious thought with tactile instinct and visual targeting",
              "Look far ahead to your exit point so your hands naturally unwind the wheel",
              "Drive at 80% effort to maintain consistency within ±2 seconds across 10 clean laps"
            ],
            "diagramId": "ffb-grip-diagram"
          },
          "practice": {
            "focus": "Vision targeting and non-conscious driving flow",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Visual Targeting & Flow Drill",
                "desc": "Drive 10 minutes looking strictly through corner entry to apex and exit reference points, letting your hands and feet guide the car instinctively without conscious overthinking.",
                "reps": 5,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Lime Rock Consolidation & Target Stint",
            "focus": "Achieving consistent lap times and muscle memory automation",
            "laps": 5,
            "instructions": [
              "Return to Lime Rock Park (Full Alt) in the 2016 Mazda MX-5 with all assists OFF.",
              "Execute 5 warm-up and rhythm laps building up to your 1:23.500 target benchmark.",
              "Perform Task 1: 3 laps without looking at lap times.",
              "Perform Task 2: 1 lap with minimap turned OFF.",
              "Perform Task 3: 2 laps focusing on deep breathing and relaxed shoulder posture."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "1:26.000",
                "focus": "Warm-up"
              },
              {
                "lap": 2,
                "target": "1:25.000",
                "focus": "Focus on feel"
              },
              {
                "lap": 3,
                "target": "1:24.500",
                "focus": "Smooth transitions"
              },
              {
                "lap": 4,
                "target": "1:24.000",
                "focus": "Comfort zone"
              },
              {
                "lap": 5,
                "target": "1:23.500",
                "focus": "Consistency target"
              }
            ]
          },
          "challenge": {
            "title": "10 Clean Laps Consistency Challenge",
            "type": "technique",
            "description": "Complete 10 consecutive clean laps at Lime Rock Park without any spins or off-track excursions, maintaining lap time spread within 2 seconds.",
            "criteria": "10 clean consecutive laps completed with lap variance < 2.0s."
          },
          "assessment": {
            "title": "Module 0 Graduation & Consistency Assessment",
            "criteria": "Demonstrate automated muscle memory, 10 clean laps within 2s spread, confidence >= 7/10.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Rate your overall driving from 1-10. Where did you improve most?",
                "modelAnswer": "I'd rate myself a 7. I improved most in smooth throttle application and feeling what the car is doing through the wheel."
              },
              {
                "question": "Name one technique from this module that has become automatic (muscle memory).",
                "modelAnswer": "Returning to 9-and-3 position naturally and feeling the wheel go light when understeer occurs."
              },
              {
                "question": "What is the single most important lesson you'll carry forward?",
                "modelAnswer": "Smoothness creates grip. Stabbing controls unsettles the car, while progressive inputs keep the tires in their friction circle window."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Module 0 Overall Telemetry Review",
            "prompts": [
              {
                "key": "steeringCompare",
                "label": "Steering Input Progression",
                "question": "Compare the steering input trace from Session 1 to Session 4. What's changed?",
                "expectedAnswer": "Session 4 trace shows far fewer micro-sawing corrections and smooth, continuous curves."
              },
              {
                "key": "lapSpread",
                "label": "Lap Time Consistency Window",
                "question": "How many lap times are within 2 seconds of each other? What does this tell you about consistency?",
                "expectedAnswer": "At least 8-10 laps within 2s indicates solid muscle memory and physical control."
              },
              {
                "key": "throttleProgression",
                "label": "Throttle Ramp Comparison",
                "question": "What does your throttle application look like now compared to Session 2?",
                "expectedAnswer": "Throttle traces are smooth progressive ramps out of corners rather than stair-steps or sudden 100% spikes."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 5,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "You have built the physical foundation! Trust your muscle memory and drive with relaxed confidence.",
            "questions": [
              "What was the most rewarding moment of this session?",
              "How has your anxiety level changed from Session 1 to Session 4?",
              "What's next? Do you feel ready to progress to Module 1?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "Summary: What did you accomplish in this module?",
              "Assessment: Are you ready to move to Module 1? Why/why not?",
              "Future: What would you do differently if you repeated this module?"
            ]
          }
        }
      ]
    },
    {
      "id": 1,
      "title": "Module 1: The Three Pillars of Racing",
      "subtitle": "The Racing Line, Corner Exit Speed, and Threshold Braking",
      "description": "Transition a complete beginner from reactive, chaotic driving to smooth, anticipatory, and methodical driving by mastering the three foundational pillars of racing: The Racing Line, Corner Exit Speed, and Threshold Braking, ultimately achieving consistent, controlled laps without relying on driving aids.",
      "duration": "12 Sessions (45 mins/session, ~3-4 sessions/week)",
      "hardware": "Moza R3 Wheel (Xbox)",
      "game": "Forza Motorsport 2023",
      "overarchingGoal": "Transition a complete beginner from reactive, chaotic driving to smooth, anticipatory, and methodical driving by mastering the three foundational pillars of racing: The Racing Line, Corner Exit Speed, and Threshold Braking, ultimately achieving consistent, controlled laps without relying on driving aids.",
      "outcomes": [
        "Master the geometry and physics of the racing line (outside-inside-outside, late apexes, compound corner setup)",
        "Maximize corner exit speed through progressive throttle application and unwinding the steering wheel",
        "Develop straight-line threshold braking and smooth trail braking to rotate the car into apexes",
        "Progressively eliminate driving assists (ABS, Driving Line) while maintaining consistent lap times"
      ],
      "setupConfig": {
        "mozaR3Settings": {
          "base": [
            {
              "setting": "FFB Strength",
              "value": "75% (Maximizes 3.9Nm torque without clipping)"
            },
            {
              "setting": "Damping",
              "value": "12% (Prevents wheel oscillation)"
            },
            {
              "setting": "Natural Friction",
              "value": "5%"
            },
            {
              "setting": "Inertia",
              "value": "5%"
            },
            {
              "setting": "FFB Detail",
              "value": "100%"
            },
            {
              "setting": "Road Effects",
              "value": "25% (Provides texture without overwhelming noise)"
            }
          ]
        },
        "forzaSettings": {
          "difficulty": [
            {
              "setting": "Steering",
              "value": "900° angle, Force Feedback 100%, Vibration Off"
            },
            {
              "setting": "Camera",
              "value": "Hood (best for seeing nose reference points & track edges)"
            },
            {
              "setting": "Difficulty Assists",
              "value": "Rewind Off, Traction Control Off, Stability Control Off"
            },
            {
              "setting": "ABS Schedule",
              "value": "ABS On (Sessions 1-10) → ABS Off (Sessions 11-12)"
            },
            {
              "setting": "Driving Line Schedule",
              "value": "Full Line (Sessions 1-3) → Racing Line Only (Sessions 4-8) → Off (Sessions 9-12)"
            }
          ]
        }
      },
      "sessions": [
        {
          "id": 1,
          "title": "The Foundation of 'The Line'",
          "focus": "Relationship between radius and speed; smooth steering inputs",
          "car": "2016 Mazda MX-5",
          "track": "Lime Rock Park - Full",
          "targetLapTime": "1:05.500",
          "difficulty": 1,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Full Line (with braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Corner Radius Physics & Smooth Inputs",
            "content": "Welcome to Module 1: The Three Pillars of Racing! Today we explore the first fundamental pillar: **The Racing Line**.\n\n### The Geometry of Speed\nThe biggest cornering radius (R3: outside-inside-outside) yields the highest possible cornering speed for any given tire grip level. By maximizing the radius of your arc through a turn, you minimize lateral G-forces required at speed.\n\n### Steering Input & Traction\nSudden, jerky steering inputs tear tire traction and break the balance of the chassis. Smooth, progressive hand feeding preserves maximum contact patch grip.",
            "keyTakeaways": [
              "Largest corner radius (outside-inside-outside) yields the highest cornering speed",
              "Smooth steering inputs preserve tire grip and keep chassis balance stable",
              "Look far through the corner to the exit curb to guide hand placement naturally"
            ],
            "diagramId": "racing-line-radius-diagram"
          },
          "practice": {
            "focus": "50% speed line practice & apex curb targeting",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "50% Speed Radius Drill",
                "desc": "Drive 10 minutes at 50% speed, focusing purely on hitting the apex curb and exiting at the outside edge of the track.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Lime Rock Consistency Test",
            "focus": "Hitting apex curbs and maintaining line consistency",
            "laps": 5,
            "instructions": [
              "Launch a Free Play session at Lime Rock Park Full in the 2016 Mazda MX-5.",
              "Complete 5 laps focusing on smooth outside-inside-outside line geometry.",
              "Ensure hands feed the wheel smoothly without abrupt corrections."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Consistency",
                "focus": "3 consecutive laps within 2.0s of each other"
              }
            ]
          },
          "challenge": {
            "title": "No-Line Visual Marker Run",
            "type": "technique",
            "description": "Complete a clean lap without relying on the driving line visual aid, using track edges and apex curbs as reference points.",
            "criteria": "1 clean lap completed relying purely on track edge reference points."
          },
          "assessment": {
            "title": "Session 1 Line & Technique Assessment",
            "criteria": "Smooth hand input, 3 consecutive laps within 2s variance, clean no-line visual run.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are your hands feeding the wheel smoothly without jerky corrections?",
                "modelAnswer": "Yes, feeding the wheel in a single progressive motion maintains tire traction and avoids unsettling the chassis."
              },
              {
                "question": "Are you looking far through the corner to the exit curb rather than right in front of the nose?",
                "modelAnswer": "Looking far ahead to the exit curb allows vision to guide steering placement smoothly."
              },
              {
                "question": "Is your foot transitioning smoothly from brake to throttle through the turn?",
                "modelAnswer": "A smooth transition keeps weight distribution balanced between front and rear axles."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 1 Telemetry Review",
            "prompts": [
              {
                "key": "steeringSmoothness",
                "label": "Steering Angle Smoothness",
                "question": "Is your steering angle trace smooth or jagged across long turns?",
                "expectedAnswer": "A smooth, continuous arc without sharp spikes indicates precise input control."
              },
              {
                "key": "speedApexPeak",
                "label": "Apex Speed Point",
                "question": "Does your speed trace reach its minimum at the apex or exit?",
                "expectedAnswer": "Minimum speed should occur at the apex before smoothly climbing on exit."
              },
              {
                "key": "throttleStraights",
                "label": "Straightaway Throttle",
                "question": "Are you reaching 100% throttle cleanly on all main straights?",
                "expectedAnswer": "100% flat throttle on straights maximizes top speed performance."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Drive with relaxed focus. Smoothness creates speed; do not rush the process.",
            "questions": [
              "Do you feel rushed, or are you anticipating the next turn?",
              "Are you frustrated by mistakes, or analyzing them calmly?",
              "Is your breathing steady throughout the lap?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "What did the 'outside-inside-outside' line feel like in the MX-5?",
              "Where did you feel most uncertain on track?",
              "What is your primary goal for Session 2?"
            ]
          }
        },
        {
          "id": 2,
          "title": "Corner Exit Speed & Throttle Application",
          "focus": "Mixing acceleration and cornering; unwinding wheel to maximize straight speed",
          "car": "2016 Mazda MX-5",
          "track": "Lime Rock Park - Full",
          "targetLapTime": "1:04.800",
          "difficulty": 1,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Full Line (with braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Exit Speed & Progressive Throttle Unwinding",
            "content": "Pillar 2 of Racing: **Corner Exit Speed**.\n\n### Exit Speed Dictates Straightaway Speed\nA higher speed exiting a corner carries down the entire subsequent straightaway. Gaining 2 km/h at the apex pays compounding dividends all the way to the next braking zone.\n\n### Unwinding the Wheel\nAs you apply throttle out of the apex, gradually unwind the steering wheel to open up tire traction for forward acceleration. Never mash 100% throttle while holding maximum steering angle.",
            "keyTakeaways": [
              "Exit speed dictates speed for the entire length of the straight",
              "Unwind the steering wheel progressively as throttle application increases",
              "Progressive throttle prevents rear wheelspin and snap understeer/oversteer"
            ],
            "diagramId": "throttle-unwind-diagram"
          },
          "practice": {
            "focus": "Exit throttle modulation out of Turns 1, 3, and 5",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Progressive Exit Throttle Drill",
                "desc": "Focus on Turns 1, 3, and 5. Apply 30% throttle at the apex, increasing to 100% strictly as the wheel straightens.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Lime Rock Exit Speed Test",
            "focus": "Maximizing top speed on main straight",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Lime Rock Park in the Mazda MX-5.",
              "Apply 30% throttle at the apex, ramping to 100% as steering unwinds.",
              "Check main straight top speed after each lap."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Top Speed Gain",
                "focus": "Achieve higher top speed on main straight than Session 1"
              }
            ]
          },
          "challenge": {
            "title": "Progressive Acceleration Challenge",
            "type": "technique",
            "description": "Complete a lap where the sole focus is smooth, progressive throttle application on every corner exit, ignoring overall lap time.",
            "criteria": "1 lap completed with smooth progressive throttle trace and zero wheelspin."
          },
          "assessment": {
            "title": "Session 2 Throttle Control Assessment",
            "criteria": "Clean wheel unwinding, progressive throttle ramps, higher main straight top speed.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are you unwinding the wheel smoothly as you add throttle?",
                "modelAnswer": "Yes, opening up the steering angle allows the tires to transfer lateral grip into longitudinal acceleration."
              },
              {
                "question": "Is the car stable on exit, or are you fighting understeer/snap oversteer?",
                "modelAnswer": "The car remains stable when throttle ramps up synchronously with wheel unwinding."
              },
              {
                "question": "Are your eyes focused on the exit curb before you reach the apex?",
                "modelAnswer": "Fixing eyes early on the exit curb helps anticipate proper throttle delivery."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 2 Telemetry Review",
            "prompts": [
              {
                "key": "throttleTrace",
                "label": "Throttle Ramp Quality",
                "question": "Does your throttle trace show a gradual ramp or an instant spike?",
                "expectedAnswer": "A smooth 30%-to-100% ramp indicates progressive foot modulation."
              },
              {
                "key": "apexSpeedIncrease",
                "label": "Post-Apex Acceleration",
                "question": "Does your speed increase immediately after hitting the apex?",
                "expectedAnswer": "Speed should continuously rise right from the apex to the end of the straight."
              },
              {
                "key": "midCornerLift",
                "label": "Mid-Corner Throttle Lifts",
                "question": "Are you lifting off throttle mid-corner?",
                "expectedAnswer": "Lifting mid-corner indicates turning in too early or applying throttle prematurely."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Be patient at corner entry to reap the rewards of maximum exit speed.",
            "questions": [
              "Are you resisting the urge to mash the throttle early?",
              "Do you feel in control of the car's weight transfer on exit?",
              "Are you patient through the entry phase of the corner?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did progressive throttle change the car's behavior on corner exit?",
              "Which corner exit improved the most today?",
              "What technique needs further refinement in Session 3?"
            ]
          }
        },
        {
          "id": 3,
          "title": "Threshold Braking Basics",
          "focus": "Braking in a straight line at 100% capacity using fixed visual reference points",
          "car": "2018 Honda Civic Type R",
          "track": "Virginia International Raceway (VIR) Full",
          "targetLapTime": "2:15.000",
          "difficulty": 1,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Full Line (with braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Straight-Line Threshold Braking",
            "content": "Pillar 3 of Racing: **Threshold Braking**.\n\n### What Is Threshold Braking?\nThreshold braking means applying maximum brake pressure to the absolute edge of tire lockup (or just before ABS pulse intervention) in a completely straight line before turning the wheel.\n\n### Reference Points\nNever guess when to brake. Choose fixed environmental markers (brake marker boards, curbing starts, trees, access roads) to repeat your braking point with 100% precision.",
            "keyTakeaways": [
              "Threshold braking sheds maximum speed in the shortest possible distance",
              "Brake 100% in a straight line before turning the wheel",
              "Anchor braking points to fixed environmental markers (boards, trees, curb edges)"
            ],
            "diagramId": "threshold-braking-diagram"
          },
          "practice": {
            "focus": "Straight-line heavy braking at Oak Tree and Oak Bend markers",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Fixed Marker Braking Drill",
                "desc": "Pick a fixed visual reference point before Oak Tree and Oak Bend. Brake hard in a straight line, release cleanly, then initiate turn-in.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "VIR Reference Marker Consistency Test",
            "focus": "Hitting identical braking markers across 5 laps",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at VIR Full in the Honda Civic Type R 2018.",
              "Brake hard in a straight line at your chosen reference markers.",
              "Maintain 100% straight steering during peak brake force."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Marker Precision",
                "focus": "Consistently hit the exact same braking marker for 5 consecutive laps"
              }
            ]
          },
          "challenge": {
            "title": "ABS Threshold Minimization Challenge",
            "type": "technique",
            "description": "Brake as late as possible while squeezing the pedal to minimize ABS pulsation.",
            "criteria": "5 laps completed with clean threshold deceleration and zero lockup."
          },
          "assessment": {
            "title": "Session 3 Threshold Braking Assessment",
            "criteria": "Straight steering during braking, 5 consecutive identical marker hits, clean pedal squeeze.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are you stomping or progressively squeezing the brake pedal?",
                "modelAnswer": "Squeezing rapidly loads the front tires smoothly, avoiding instant lockup or ABS trigger."
              },
              {
                "question": "Are your eyes locked on the reference point rather than looking at the speedometer?",
                "modelAnswer": "Keeping eyes on the visual marker ensures precise braking initiation."
              },
              {
                "question": "Is the car stable and straight under heavy braking?",
                "modelAnswer": "Braking in a 100% straight line maintains rear-end chassis stability."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 3 Telemetry Review",
            "prompts": [
              {
                "key": "brakeTraceShape",
                "label": "Brake Trace Profile",
                "question": "Is your brake trace a flat, hard peak or a slow gradual ramp?",
                "expectedAnswer": "Threshold braking shows a sharp, vertical rise to peak pressure followed by a flat hold."
              },
              {
                "key": "steeringDuringBrake",
                "label": "Steering Angle During Peak Brake",
                "question": "Is your steering angle zero when peak brake pressure is applied?",
                "expectedAnswer": "Steering angle must be zero during peak straight-line threshold braking."
              },
              {
                "key": "speedShed",
                "label": "Pre-Turn Speed Shed",
                "question": "How much speed do you shed before starting your turn-in?",
                "expectedAnswer": "All primary deceleration should be completed before initiating turn-in steering."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Trust your reference points. Late straight-line braking comes from calm precision.",
            "questions": [
              "Does late straight-line braking cause panic or calm focus?",
              "Are you trusting your reference points completely?",
              "Are you prepared for the turn before releasing the brake pedal?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did threshold braking feel compared to casual street braking?",
              "Which visual reference points worked best around VIR?",
              "What is your biggest fear regarding heavy braking?"
            ]
          }
        },
        {
          "id": 4,
          "title": "Introduction to Trail Braking (Brake & Turn)",
          "focus": "Blending braking and cornering forces to carry higher entry speed into turn-in",
          "car": "2018 Honda Civic Type R",
          "track": "Virginia International Raceway (VIR) Full",
          "targetLapTime": "2:13.500",
          "difficulty": 2,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Racing Line Only (no braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Trail Braking Physics & Weight Transfer",
            "content": "Moving beyond straight-line braking: **Trail Braking**.\n\n### The Traction Circle & Weight Transfer\nAs you turn the wheel into the corner, slowly taper off (trail) brake pressure from 100% down to 0%. This maintains weight on the front tires, pinning the front contact patch down for sharp turn-in grip and helping rotate the car toward the apex.\n\n### Driving Line Upgrade\nWe transition to **Racing Line Only** (braking zones hidden), forcing reliance on visual markers.",
            "keyTakeaways": [
              "Trail braking slowly bleeds off brake pressure as steering angle increases",
              "Keeping front tires weighted increases turn-in bite and rotates the rear end",
              "Zero brake pressure should remain right as you hit the apex curb"
            ],
            "diagramId": "trail-braking-traction-circle"
          },
          "practice": {
            "focus": "Oak Tree turn-in trail braking release",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Oak Tree Trail Release Drill",
                "desc": "Enter Oak Tree braking straight, then smoothly taper brake pressure to zero as you turn to the apex.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "VIR Trail Braking Sector Test",
            "focus": "Carrying higher entry speed with smooth brake taper",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at VIR Full in the Honda Civic Type R.",
              "Trail off the brake pedal as steering angle increases through Turns 1 and 4.",
              "Ensure total brake release by the apex point."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Sector Pace",
                "focus": "Gain 0.5s in Sector 1 compared to Session 3"
              }
            ]
          },
          "challenge": {
            "title": "Smooth Telemetry Taper Challenge",
            "type": "technique",
            "description": "Complete 3 laps where brake pressure visibly tapers smoothly to 0% during turn-in telemetry inspection.",
            "criteria": "3 clean laps with smooth tapering brake traces."
          },
          "assessment": {
            "title": "Session 4 Trail Braking Assessment",
            "criteria": "Progressive brake release during turn-in, higher apex minimum speed, 0.5s Sector 1 gain.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Is your left/right foot smoothly releasing brake pressure as steering increases?",
                "modelAnswer": "Yes, trailing off brake pressure as steering angle increases balances tire grip inside the friction circle."
              },
              {
                "question": "Does the car rotate cleanly into the corner or understeer wide?",
                "modelAnswer": "Front weight transfer from trail braking helps the car rotate crisp into the apex."
              },
              {
                "question": "Are you initiating turn-in at the exact correct reference marker?",
                "modelAnswer": "Initiating turn-in at the visual marker ensures smooth trail release down to the apex."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 4 Telemetry Review",
            "prompts": [
              {
                "key": "trailBrakeTaper",
                "label": "Brake Pressure Taper",
                "question": "Does your brake trace taper off smoothly as steering angle increases?",
                "expectedAnswer": "The brake trace should slope down smoothly like a slide as steering angle rises."
              },
              {
                "key": "minimumApexSpeed",
                "label": "Apex Minimum Speed",
                "question": "Is your minimum apex speed higher than in Session 3?",
                "expectedAnswer": "Trail braking carries more momentum, raising apex minimum speed."
              },
              {
                "key": "completeReleaseApex",
                "label": "Brake Release Point",
                "question": "Are you completely off the brake pedal by the time you reach the apex?",
                "expectedAnswer": "Brake pressure must reach exactly 0% at or just before the apex."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Embrace trailing off the brake. Feel the front tires grip and rotate the car.",
            "questions": [
              "Are you confident carrying more speed into the corner entry?",
              "Do you feel the car's weight shift forward to the front wheels?",
              "Are you avoiding the 'stab and turn' panic reflex?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did trail braking change the car's rotation into corners?",
              "Was it challenging to coordinate foot release with hand steering?",
              "What will you focus on refining in Session 5?"
            ]
          }
        },
        {
          "id": 5,
          "title": "The Apex and Geometric Line",
          "focus": "Differentiating early, geometric, and late apexes based on exit straight length",
          "car": "2013 Subaru BRZ",
          "track": "Laguna Seca",
          "targetLapTime": "1:39.500",
          "difficulty": 2,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Racing Line Only (no braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Geometric vs. Late Apex Strategy",
            "content": "Understanding corner types: **Geometric vs. Late Apex**.\n\n### Not All Apexes Are Equal\n- **Geometric Apex**: Mid-corner apex maximizing overall corner radius. Ideal for isolated, symmetrical turns.\n- **Late Apex**: Delaying turn-in to clip the curb later in the corner. Sacrifices entry speed to allow earlier, straighter throttle application onto long straights (e.g., exiting the Corkscrew downhill onto the straight).",
            "keyTakeaways": [
              "Use late apexes when a corner leads onto a long straightaway",
              "Geometric apexes maximize minimum corner speed in isolated turns",
              "Delaying turn-in creates a straighter exit path for earlier 100% throttle"
            ],
            "diagramId": "late-vs-geometric-apex-diagram"
          },
          "practice": {
            "focus": "Corkscrew (Turns 8-11) late apex exit execution",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Corkscrew Late Apex Drill",
                "desc": "Run the Corkscrew focusing on a late apex to maximize exit speed down the rainey straightaway.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Laguna Seca Apex Precision Test",
            "focus": "Hitting outside exit curbs cleanly on 3 consecutive laps",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Laguna Seca in the Subaru BRZ.",
              "Delay turn-in for Turn 2 and Turn 11 to achieve a late apex.",
              "Clip outside exit curbs perfectly without running wide onto dirt."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Exit Curb Target",
                "focus": "Hit outside track edge perfectly on Corkscrew exit for 3 consecutive laps"
              }
            ]
          },
          "challenge": {
            "title": "Late Apex Strategy Run",
            "type": "technique",
            "description": "Drive the full lap using late apexes for all turns leading onto straights, and geometric apexes for isolated turns.",
            "criteria": "Clean lap executed with correct apex selection per corner type."
          },
          "assessment": {
            "title": "Session 5 Apex Selection Assessment",
            "criteria": "Delayed turn-in execution, earlier exit acceleration, precise curb placement.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are you delaying turn-in for corners that lead onto straights?",
                "modelAnswer": "Delaying turn-in rotates the car earlier, allowing a straighter exit onto the straight."
              },
              {
                "question": "Are you patient, allowing the car to drift to the inside curb at the right moment?",
                "modelAnswer": "Patience during entry ensures the car meets the inside curb at the late apex."
              },
              {
                "question": "Is your steering input shorter in duration due to earlier rotation?",
                "modelAnswer": "Rotating quickly at a late apex lets you straighten the wheel sooner for acceleration."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 5 Telemetry Review",
            "prompts": [
              {
                "key": "steeringPeakApex",
                "label": "Steering Angle Peak",
                "question": "Where does your steering angle peak relative to the apex point?",
                "expectedAnswer": "On a late apex, steering angle peaks slightly before the apex curb."
              },
              {
                "key": "earlyThrottleLateApex",
                "label": "Throttle Initiation Point",
                "question": "Is your throttle application earlier on late-apex corners?",
                "expectedAnswer": "Late apexes enable earlier throttle application before reaching the exit curb."
              },
              {
                "key": "exitSpeedClimb",
                "label": "Exit Speed Rise Rate",
                "question": "Does your speed trace show a steeper, earlier climb on corner exit?",
                "expectedAnswer": "A steeper speed trace slope confirms superior corner exit acceleration."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Sacrifice entry speed willingly to conquer the straightaway ahead.",
            "questions": [
              "Does a late apex feel 'too tight' initially?",
              "Are you looking far ahead to the exit rather than just the apex?",
              "Are you willingly sacrificing entry speed to maximize exit speed?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did the late apex affect your exit speed on the main straights?",
              "Which corners at Laguna Seca demand a late apex?",
              "What felt counter-intuitive about delaying your turn-in point?"
            ]
          }
        },
        {
          "id": 6,
          "title": "Downshifting and Weight Transfer",
          "focus": "Mastering smooth downshifts with throttle blips to keep rear axle stability",
          "car": "2013 Subaru BRZ",
          "track": "Laguna Seca",
          "targetLapTime": "1:38.500",
          "difficulty": 2,
          "assistsConfig": {
            "transmission": "Manual (No Clutch or Auto-Blip)",
            "drivingLine": "Racing Line Only (no braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Engine Rev-Matching & Rear Axle Balance",
            "content": "Chassis stability during deceleration: **Downshifting & Rev-Matching**.\n\n### Why Blip the Throttle?\nDownshifting under heavy braking without matching engine revs causes engine braking to lock or drag the driven wheels, causing rear instability or snap oversteer.\n\n### The Throttle Blip\nA quick pulse (blip) on the throttle while downshifting matches engine RPM to transmission gear speed, keeping the rear tires perfectly balanced.",
            "keyTakeaways": [
              "Downshifting without blipping locks rear wheels and unsettles chassis balance",
              "Blipping the throttle matches engine RPM to wheel speed for smooth downshifts",
              "Complete all downshifts in a straight line before heavy corner turn-in"
            ],
            "diagramId": "downshift-revmatch-diagram"
          },
          "practice": {
            "focus": "Turn 2 heavy brake downshift from 4th to 2nd gear",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Turn 2 Downshift Blip Drill",
                "desc": "Approach Turn 2 at speed. Brake hard, blip throttle, downshift to 2nd, and turn in smoothly. Repeat for 10 laps.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Laguna Seca Smooth Downshift Test",
            "focus": "Executing clean downshifts without wheel lockup or instability",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Laguna Seca in the Subaru BRZ.",
              "Blip throttle during all downshifts into Turn 2, Turn 8 (Corkscrew), and Turn 11.",
              "Ensure zero rear wheel hop or stability disruption."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Shift Smoothness",
                "focus": "Complete 5 laps with zero rear-wheel chirp or ABS instability from shifts"
              }
            ]
          },
          "challenge": {
            "title": "Corkscrew Trail & Shift Challenge",
            "type": "technique",
            "description": "Execute a perfect rev-matched downshift while trail braking downhill into the Corkscrew.",
            "criteria": "Clean downshift executed without disturbing car balance in Corkscrew."
          },
          "assessment": {
            "title": "Session 6 Downshifting Assessment",
            "criteria": "Smooth RPM blips, zero rear wheel drag, stable corner entry posture.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Is your throttle blip matching engine RPM to gear speed cleanly?",
                "modelAnswer": "A crisp throttle blip matches transmission speeds, preventing rear tire compression lock."
              },
              {
                "question": "Is the car stable through downshifts, or does the rear step out?",
                "modelAnswer": "The chassis remains completely flat and balanced when revs are properly matched."
              },
              {
                "question": "Are you completing all downshifts before reaching maximum turn-in steering?",
                "modelAnswer": "Completing downshifts in a straight line keeps corner entry steering smooth."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 6 Telemetry Review",
            "prompts": [
              {
                "key": "rpmSpikeBlip",
                "label": "RPM Blip Pulse",
                "question": "Does your RPM show a clean brief pulse matching the downshift point?",
                "expectedAnswer": "A sharp, quick RPM pulse confirms an effective throttle blip during shifting."
              },
              {
                "key": "yawSpikeShift",
                "label": "Yaw Rate Stability",
                "question": "Is there a sudden drop in speed or yaw spike during the shift?",
                "expectedAnswer": "Yaw rate should remain smooth without erratic spikes during downshifts."
              },
              {
                "key": "shiftBeforeSteering",
                "label": "Shift Timing Relative to Steering",
                "question": "Are your downshifts finished prior to hitting peak steering angle?",
                "expectedAnswer": "Shifts must be completed before heavy cornering forces load the tires."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Rhythm is key. Brake, blip, shift, release, turn.",
            "questions": [
              "Are you rushing the downshift timing?",
              "Do you feel mechanical sympathy for the car's drivetrain?",
              "Are you anticipating the required gear before arriving at the corner?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did blipping the throttle improve the car's rear stability under braking?",
              "Was footwork coordination difficult during heavy braking zones?",
              "What is your success rate on smooth downshifts across the lap?"
            ]
          }
        },
        {
          "id": 7,
          "title": "Compound Corners & Transitions",
          "focus": "Sacrificing one corner's line to optimize the entry and exit of the subsequent straightaway",
          "car": "2018 Ford Mustang GT",
          "track": "Road America",
          "targetLapTime": "2:32.000",
          "difficulty": 2,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Racing Line Only (no braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Chicanes & Linked Corner Dynamics",
            "content": "Managing sequences: **Compound Corners & Transitions**.\n\n### The Golden Rule of Linked Corners\nIn a compound corner or chicane (e.g., Turns 5, 6, 7 at Road America), **the exit of the final turn is all that matters**. Sacrificing entry or apex line on Turn 5 positions the car for maximum straightaway speed out of Turn 7.",
            "keyTakeaways": [
              "Sacrifice the exit line of the first turn to open up the entry of the second",
              "Prioritize the corner that leads onto the longest straightaway",
              "Minimize mid-corner steering adjustments between linked transitions"
            ],
            "diagramId": "compound-corner-strategy-diagram"
          },
          "practice": {
            "focus": "Road America Turns 5, 6, and 7 sequence execution",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Turns 5-7 Sequence Positioning Drill",
                "desc": "Focus on Turns 5-7. Take a tight, early apex in Turn 5 to be perfectly positioned wide for Turn 7 exit speed.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Road America Compound Sector Test",
            "focus": "Maintaining high minimum speed through linked corners",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Road America in the Ford Mustang GT 2018.",
              "Focus on positioning the heavy Mustang early for the exit of Turn 7 and Turn 14.",
              "Smoothly transition steering from left to right without chassis snap."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Compound Sector Pace",
                "focus": "Maintain higher minimum speed through Turns 5-7 complex than prior attempts"
              }
            ]
          },
          "challenge": {
            "title": "Straight Exit Priority Challenge",
            "type": "technique",
            "description": "Complete a lap prioritizing strictly the exit speeds onto major straights, willingly compromising isolated turn entries.",
            "criteria": "1 clean lap executed with high exit speeds onto all major straights."
          },
          "assessment": {
            "title": "Session 7 Compound Corner Assessment",
            "criteria": "Asymmetrical line positioning, smooth weight transfer transitions, maximum final exit speed.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are you using minimal steering input during the weight transfer between linked turns?",
                "modelAnswer": "Smooth steering during direction changes keeps the heavy chassis balanced between left and right."
              },
              {
                "question": "Are you looking two corners ahead to plan car positioning?",
                "modelAnswer": "Vision directed two turns ahead ensures early setup for the final critical exit."
              },
              {
                "question": "Is your throttle application earlier on the final exit corner?",
                "modelAnswer": "Proper setup allows 100% throttle application right at the apex of the final turn."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 7 Telemetry Review",
            "prompts": [
              {
                "key": "asymmetricalLineTrace",
                "label": "Line Geometry Trace",
                "question": "Is your trajectory through the compound section asymmetrical as intended?",
                "expectedAnswer": "The line trace should show a tight first corner entry and wide open second corner exit."
              },
              {
                "key": "midTransitionCorrections",
                "label": "Mid-Transition Steering",
                "question": "Do you avoid mid-corner steering sawing between linked turns?",
                "expectedAnswer": "Steering trace should transition smoothly from left lock to right lock without flutter."
              },
              {
                "key": "earlyFinalExitThrottle",
                "label": "Final Exit Throttle Timing",
                "question": "Is your throttle application earlier on the final exit of the compound?",
                "expectedAnswer": "Throttle should reach 100% earlier out of the final corner onto the main straight."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Think ahead. Sacrifice the present turn to win the upcoming straight.",
            "questions": [
              "Does it feel wrong to 'ruin' the line of the first corner?",
              "Are you thinking ahead, or just reacting to the immediate turn ahead?",
              "Do you feel the rhythm of the compound sequence?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did sacrificing Turn 5 improve your exit speed out of Turn 7?",
              "Where did you struggle most with heavy car positioning?",
              "How will you apply compound positioning to other track layouts?"
            ]
          }
        },
        {
          "id": 8,
          "title": "Managing Understeer & Oversteer",
          "focus": "Recognizing and correcting front and rear grip loss without panicking",
          "car": "2018 Ford Mustang GT",
          "track": "Road America",
          "targetLapTime": "2:30.500",
          "difficulty": 2,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Racing Line Only (no braking zones)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Car Control Mechanics: Slip & Correction",
            "content": "Handling vehicle dynamics at the limit: **Understeer & Oversteer**.\n\n### Understeer (Front Slip)\nFront tires lose grip and push wide. **Correction**: Ease off throttle slightly, reduce steering angle to regain front contact patch grip.\n\n### Oversteer (Rear Slip)\nRear tires break loose and slide out. **Correction**: Steer into the slide (counter-steer) with smooth, modulated throttle. Never chop throttle abruptly, which causes violent snap oversteer!",
            "keyTakeaways": [
              "Understeer correction: reduce steering angle slightly and ease off throttle",
              "Oversteer correction: counter-steer smoothly while maintaining modulated throttle",
              "Abrupt throttle lifting causes weight unloading and dangerous snap oversteer"
            ],
            "diagramId": "understeer-oversteer-correction"
          },
          "practice": {
            "focus": "Controlled understeer recovery out of Turn 3",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Understeer & Oversteer Recovery Drill",
                "desc": "Induce mild understeer on Turn 3 exit by applying throttle too early; correct smoothly by unwinding wheel. Then practice subtle counter-steer slides.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Road America Limit Control Test",
            "focus": "Managing car slides cleanly with zero off-track excursions",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Road America in the Ford Mustang GT.",
              "Push car to slip limit through the Carousel and Kink.",
              "Apply gentle steering unwinding for understeer and smooth counter-steer for oversteer."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Clean Limit Control",
                "focus": "Complete 3 laps with zero off-track excursions while actively managing slides"
              }
            ]
          },
          "challenge": {
            "title": "Zero TCS Car Control Challenge",
            "type": "technique",
            "description": "Drive 5 continuous clean laps with Traction Control completely OFF, managing throttle modulation to avoid excessive wheelspin.",
            "criteria": "5 clean laps completed with zero spinouts and TCS OFF."
          },
          "assessment": {
            "title": "Session 8 Limit Management Assessment",
            "criteria": "Subtle slide corrections, zero panic lifts, clean counter-steer control.",
            "passingScore": 80,
            "questions": [
              {
                "question": "Are your steering and throttle corrections subtle rather than violent spikes?",
                "modelAnswer": "Small, calm corrections keep tire forces within manageable slip angles."
              },
              {
                "question": "Are you avoiding the lift-off throttle panic reflex during rear slides?",
                "modelAnswer": "Maintaining light, steady throttle prevents weight unloading and snap oversteer."
              },
              {
                "question": "Are your hands uncrossed and relaxed, ready to counter-steer cleanly?",
                "modelAnswer": "Keeping 9-and-3 posture allows fast, instinctive counter-steering."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 8 Telemetry Review",
            "prompts": [
              {
                "key": "correctionSpikes",
                "label": "Correction Input Spikes",
                "question": "Do your steering traces spike erratically during slide corrections?",
                "expectedAnswer": "Smooth corrections show small, controlled bumps rather than sharp spikes."
              },
              {
                "key": "understeerSpeedDrop",
                "label": "Speed Drop in Understeer",
                "question": "Does your speed drop dramatically when correcting understeer?",
                "expectedAnswer": "Easing off throttle gently preserves momentum better than slamming brakes."
              },
              {
                "key": "yawRateOscillation",
                "label": "Yaw Rate Stability",
                "question": "Is your vehicle yaw rate stable or oscillating back and forth?",
                "expectedAnswer": "A stable yaw trace indicates clean balance without fishtailing."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Do not panic when the car moves. Assess slip and correct with subtle inputs.",
            "questions": [
              "Do you panic when the car slides, or do you assess calmly?",
              "Are you respecting the car's traction limits or fighting them?",
              "Is your steering grip relaxed or white-knuckled?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "What did understeer feel like through the wheel in the Mustang?",
              "How did you correct oversteer when the rear stepped out?",
              "What is your confidence level in managing car control at the limit?"
            ]
          }
        },
        {
          "id": 9,
          "title": "Advanced Trail Braking & Rotation",
          "focus": "Using deep trail braking to rotate the rear end into tight apexes",
          "car": "2018 Porsche 718 Cayman GTS",
          "track": "Maple Valley",
          "targetLapTime": "1:33.500",
          "difficulty": 3,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Off (completely hidden)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Active Rear Rotation via Trail Braking",
            "content": "Advanced Car Positioning: **Trail Braking for Rotation**.\n\n### Dynamic Yaw Control\nIn mid-engine cars like the Porsche Cayman GTS, trailing light brake pressure (5-15%) deep toward the apex keeps weight on front tires while lightening the rear axle. This deliberately rotates the car's nose toward the exit target.\n\n### Milestone Assist Milestone\n**Driving Line is now completely OFF**. All guidance relies on track vision and reference markers!",
            "keyTakeaways": [
              "Trailing 5-15% brake pressure deep into turn-in rotates the nose into tight apexes",
              "Front weight transfer pins steering grip while lightening rear axle for crisp yaw",
              "Driving Line is 100% OFF—rely on track vision and reference markers"
            ],
            "diagramId": "trail-rotation-porsche"
          },
          "practice": {
            "focus": "Turn 3 deep trail rotation execution",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Deep Trail Rotation Drill",
                "desc": "Approach Turn 3 tight right-hander. Brake late, trail brake deeply, and feel the rear pivot around the front tires to point at exit.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Maple Valley Rotation & No-Line Test",
            "focus": "Achieving tight apex rotation without running wide on exit",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Maple Valley in the Porsche 718 Cayman GTS.",
              "Use light deep trail braking into Turn 3 and Turn 7 to rotate the car.",
              "Rely 100% on environmental track references (no driving line)."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Apex Rotation",
                "focus": "Achieve cleaner, tighter apexes without running wide on exit"
              }
            ]
          },
          "challenge": {
            "title": "Deep Trail Telemetry Challenge",
            "type": "technique",
            "description": "Complete a full lap where every slow corner utilizes deep trail braking for rotation, verified by smooth tapering brake telemetry.",
            "criteria": "1 lap completed with verified deep trail braking traces into all slow corners."
          },
          "assessment": {
            "title": "Session 9 Trail Rotation Assessment",
            "criteria": "Feather-light brake release, early nose rotation, clean no-line execution.",
            "passingScore": 85,
            "questions": [
              {
                "question": "Is your brake release feather-light and progressive down to the apex?",
                "modelAnswer": "Feather-light release maintains just enough front load for nose rotation."
              },
              {
                "question": "Do you feel the rear of the car pivot slightly to point down the straight?",
                "modelAnswer": "Lightening the rear under trail braking helps align the car with the exit early."
              },
              {
                "question": "Are you avoiding abrupt brake release that snaps chassis weight backward?",
                "modelAnswer": "Smooth release prevents front end pop-up and loss of turning grip."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 9 Telemetry Review",
            "prompts": [
              {
                "key": "brakeTracePastTurnIn",
                "label": "Brake Overlap with Steering",
                "question": "Does your brake trace extend past your initial steering input?",
                "expectedAnswer": "Yes, brake pressure overlap with initial turn-in confirms active trail braking."
              },
              {
                "key": "steeringAngleLowerApex",
                "label": "Apex Steering Angle Magnitude",
                "question": "Is your peak steering angle lower at the apex due to better rotation?",
                "expectedAnswer": "Using trail rotation reduces total steering lock needed at the apex."
              },
              {
                "key": "earlierThrottleRotation",
                "label": "Post-Rotation Throttle Timing",
                "question": "Is your throttle application earlier and smoother post-rotation?",
                "expectedAnswer": "Pointing the car earlier enables direct, progressive throttle application."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 4,
            "defaultFrustration": 1,
            "defaultConfidence": 4,
            "resetPrompt": "Feel the car pivot underneath you. You are placing the car, not just steering it.",
            "questions": [
              "Are you confident in front-end grip when trailing into corners?",
              "Do you feel like you are placing the car rather than just driving it?",
              "Are you anticipating rotation rather than being surprised by it?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did trail braking rotation improve your apex speed around Maple Valley?",
              "Was it easy to find the threshold of rear rotation without oversteering?",
              "What visual references are you relying on now that the driving line is OFF?"
            ]
          }
        },
        {
          "id": 10,
          "title": "Consistency and Mental Anticipation",
          "focus": "Building a mental track map to prioritize anticipation over reactive driving",
          "car": "2018 Porsche 718 Cayman GTS",
          "track": "Maple Valley",
          "targetLapTime": "1:32.000",
          "difficulty": 3,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Off (completely hidden)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "On",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Mental Mapping & Eyes-Ahead Anticipation",
            "content": "Mental Mastery: **Anticipation over Reaction**.\n\n### Fast Drivers Anticipate\nGreat drivers do not rely on lightning reflexes; they anticipate events seconds in advance. By scanning 2-3 seconds ahead down the track, inputs become smooth, calm, and fully automated.",
            "keyTakeaways": [
              "Scanning 2-3 seconds ahead downfield slows down the perception of speed",
              "Automate input execution by anticipating braking markers and turn-in targets early",
              "Consistency comes from executing a pre-planned strategy rather than reacting to errors"
            ],
            "diagramId": "eyes-ahead-anticipation-diagram"
          },
          "practice": {
            "focus": "Call-out driving vision drill 2-3 seconds ahead",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Eyes-Ahead Call-Out Drill",
                "desc": "Drive 5 laps focusing vision 2-3 seconds ahead of the car, calling out upcoming braking markers, apex curbs, and exit targets aloud.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Maple Valley 5-Lap Consistency Challenge",
            "focus": "Achieving lap time consistency within 1.5s window",
            "laps": 5,
            "instructions": [
              "Drive 5 laps at Maple Valley with driving line completely OFF.",
              "Maintain steady breathing and eyes-ahead vision.",
              "Aim for tight lap time consistency across all 5 laps."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Consistency Window",
                "focus": "Complete 5 consecutive laps within a 1.5-second variance window"
              }
            ]
          },
          "challenge": {
            "title": "Pure Memory Lap",
            "type": "technique",
            "description": "Drive a full lap with zero visual HUD line aids, relying solely on mental track memory and visual reference markers.",
            "criteria": "1 clean lap completed within target pace using pure track memory."
          },
          "assessment": {
            "title": "Session 10 Consistency Assessment",
            "criteria": "5 laps within 1.5s window, automated input execution, calm eyes-ahead vision.",
            "passingScore": 85,
            "questions": [
              {
                "question": "Are your steering and pedal inputs smooth and automated?",
                "modelAnswer": "Anticipation allows inputs to execute smoothly without conscious hesitation."
              },
              {
                "question": "Are you looking far ahead down the track rather than staring at the hood?",
                "modelAnswer": "Focusing vision downfield slows down the perception of speed."
              },
              {
                "question": "Are you executing a pre-planned strategy rather than reacting to mistakes?",
                "modelAnswer": "Pre-planning braking points and lines prevents reactive panic corrections."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 10 Telemetry Review",
            "prompts": [
              {
                "key": "lapClusterVariance",
                "label": "Lap Time Clustered Spread",
                "question": "How tightly clustered are your lap and sector time traces?",
                "expectedAnswer": "Traces overlapping within 1.5s confirm solid muscle memory execution."
              },
              {
                "key": "identicalBrakePoints",
                "label": "Braking Point Consistency",
                "question": "Are your braking points identical across all 5 laps?",
                "expectedAnswer": "Overlaying brake traces should show identical initiation points."
              },
              {
                "key": "steeringRepeatability",
                "label": "Steering Trace Repeatability",
                "question": "Is your steering trace consistent lap after lap?",
                "expectedAnswer": "Consistent steering curves demonstrate stable track positioning."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 5,
            "defaultFrustration": 1,
            "defaultConfidence": 5,
            "resetPrompt": "The track is moving in slow motion. Breathe calmly and let muscle memory drive.",
            "questions": [
              "Does the track feel like it is moving in 'slow motion'?",
              "Are you calm and focused, or tense in your shoulders?",
              "Do you feel a sense of rhythm and flow through the lap?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did far-ahead vision change the feel of speed?",
              "Where did you break consistency during the 5 laps, and why?",
              "Are you ready to remove ABS assists in Session 11?"
            ]
          }
        },
        {
          "id": 11,
          "title": "Removing the Training Wheels",
          "focus": "Driving without ABS and Traction Control; feeling raw tire thresholds",
          "car": "2016 Mazda MX-5",
          "track": "Suzuka Full",
          "targetLapTime": "2:34.000",
          "difficulty": 3,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Off (completely hidden)",
            "tcs": "Off",
            "stm": "Off",
            "abs": "Off (completely disabled)",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Assists Off: Pure Friction Circle Control",
            "content": "The ultimate test of pedal modulation: **ABS OFF & TCS OFF**.\n\n### Why Turn Off ABS?\nABS masks over-braking and pedal stomping. Without ABS, pressing past 100% tire threshold locks the front tires, causing flat spots and loss of steering control. You must modulate the pedal manually at the limit of grip!",
            "keyTakeaways": [
              "Driving without ABS and TCS requires manual foot modulation at tire traction limits",
              "Exceeding 85-90% brake threshold locks front tires and eliminates turning control",
              "Progressive throttle prevents power wheelspin on exit without electronic intervention"
            ],
            "diagramId": "raw-pedal-modulation-diagram"
          },
          "practice": {
            "focus": "Suzuka Turn 1 sweeping threshold braking without ABS",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "ABS-Off Threshold Modulation Drill",
                "desc": "Focus on Suzuka Turn 1. Brake without ABS, feeling for the lockup threshold, and apply throttle progressively on exit without wheelspin.",
                "reps": 1,
                "time": "10 min"
              }
            ]
          },
          "practical": {
            "title": "Suzuka Raw Physics Stint",
            "focus": "3 continuous clean laps with ABS and TC turned OFF",
            "laps": 5,
            "instructions": [
              "Verify ABS is set to OFF and Driving Line is OFF in settings.",
              "Drive 5 laps around Suzuka Full in the Mazda MX-5.",
              "Squeeze brake pedal to 80-90% threshold without locking front tires."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Raw Assist-Free Lap",
                "focus": "Complete 3 clean laps with ABS/TC Off without major spins or wheel lockups"
              }
            ]
          },
          "challenge": {
            "title": "Raw Assist-Free Pace Challenge",
            "type": "technique",
            "description": "Match or beat your Session 10 consistency benchmark pace, but with ALL ASSISTS (ABS, TCS, Line) completely OFF.",
            "criteria": "Clean lap set matching target pace with zero assists enabled."
          },
          "assessment": {
            "title": "Session 11 Assists-Off Assessment",
            "criteria": "Zero brake lockups, progressive pedal squeeze, clean counter-steer modulation.",
            "passingScore": 85,
            "questions": [
              {
                "question": "Are you squeezing and modulating the brake pedal rather than stomping?",
                "modelAnswer": "Progressive squeezing avoids exceeding tire threshold lockup."
              },
              {
                "question": "Are you gentle on throttle application out of Suzuka's Hairpin?",
                "modelAnswer": "Smooth throttle delivery prevents rear tire spin without TCS intervention."
              },
              {
                "question": "Are you catching minor slides with immediate, gentle counter-steer?",
                "modelAnswer": "Immediate counter-steer keeps the chassis aligned without assistance."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Session 11 Telemetry Review",
            "prompts": [
              {
                "key": "brakePressureSpikeLock",
                "label": "Brake Lockup Detection",
                "question": "Are there sudden spikes in brake pressure indicating wheel lockup?",
                "expectedAnswer": "Brake trace should cap right at threshold without flatline lock spikes."
              },
              {
                "key": "wheelspinRPMDelta",
                "label": "Throttle Wheelspin Check",
                "question": "Does your throttle trace show wheelspin (RPM spike without speed increase)?",
                "expectedAnswer": "Speed and RPM should rise in direct proportion without RPM flare."
              },
              {
                "key": "steeringCorrectionCount",
                "label": "Slide Correction Frequency",
                "question": "Is your steering smooth or are you constantly correcting slides?",
                "expectedAnswer": "Smooth curves confirm proper pedal modulation and tire grip management."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 5,
            "defaultFrustration": 1,
            "defaultConfidence": 5,
            "resetPrompt": "You are in complete control of the machine. Respect the tire friction circle.",
            "questions": [
              "Does driving without assists make you feel anxious or liberated?",
              "Are you respecting the car's physical limits more without assists?",
              "Are you focused on input smoothness over brute force speed?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "How did the car feel under braking with ABS completely OFF?",
              "What bad habits did electronic assists previously hide?",
              "How much has your physical car control improved since Session 1?"
            ]
          }
        },
        {
          "id": 12,
          "title": "Final Assessment & The 'Fast' Lap",
          "focus": "Synthesizing line geometry, exit speed, trail braking, and anticipation into a qualifying lap",
          "car": "2013 Subaru BRZ",
          "track": "Circuit de Spa-Francorchamps",
          "targetLapTime": "2:48.000",
          "difficulty": 3,
          "assistsConfig": {
            "transmission": "Automatic (No Clutch)",
            "drivingLine": "Off (completely hidden)",
            "tcs": "Off (completely disabled)",
            "stm": "Off (completely disabled)",
            "abs": "Off (completely disabled)",
            "steering": "Simulation (900°)"
          },
          "theory": {
            "title": "Synthesis of the Three Pillars",
            "content": "The culmination of Module 1: **The 'Fast' Lap Synthesis**.\n\n### The Anatomy of Speed\nSpeed is not bravery; skill is speed. Today you synthesize:\n1. **The Line**: Radius maximization & late apexes.\n2. **Exit Speed**: Progressive throttle & wheel unwinding.\n3. **Threshold & Trail Braking**: Straight-line deceleration & deep rotation.\n\nAll executed with **ALL ASSISTS OFF** around the legendary Spa-Francorchamps circuit.",
            "keyTakeaways": [
              "Synthesize line geometry, exit throttle unwinding, and threshold/trail braking into a single cohesive lap",
              "Execute the qualifying lap with ALL ASSISTS (ABS, TCS, Line) 100% OFF",
              "True speed comes from relaxed smoothness, perfect vision, and disciplined technique"
            ],
            "diagramId": "final-synthesis-mastery-diagram"
          },
          "practice": {
            "focus": "15-minute free practice focusing on weakest sector",
            "drills": [
              {
                "id": "easy",
                "level": "🟢 Easy",
                "title": "Spa Sector Refinement Practice",
                "desc": "Run 15 minutes of free practice at Spa, targeting your weakest sector identified in prior sessions.",
                "reps": 1,
                "time": "15 min"
              }
            ]
          },
          "practical": {
            "title": "Module 1 Final Graduation Qualifying Lap",
            "focus": "Setting your clean, smooth, assist-free benchmark lap",
            "laps": 5,
            "instructions": [
              "Verify all driving assists (ABS, TCS, Line) are completely OFF.",
              "Drive 5 laps at Spa-Francorchamps in the Subaru BRZ.",
              "Set a clean, smooth 'qualifying' lap representing your absolute best execution."
            ],
            "lapTargets": [
              {
                "lap": 1,
                "target": "Graduation Pace",
                "focus": "Set a clean qualifying lap under 2:48.000 with zero assists"
              }
            ]
          },
          "challenge": {
            "title": "Telemetry Master Benchmark",
            "type": "technique",
            "description": "Record your best lap telemetry trace and compare it to a reference ghost lap to identify one final area for future growth.",
            "criteria": "Clean qualifying lap logged with zero off-track incidents and full telemetry trace."
          },
          "assessment": {
            "title": "Module 1 Final Graduation Assessment",
            "criteria": "Clean assist-free lap under benchmark time, full synthesis of line, exit speed, and trail braking.",
            "passingScore": 90,
            "questions": [
              {
                "question": "Was your steering smooth, deliberate, and free of panic corrections?",
                "modelAnswer": "Smooth steering inputs kept tire loads balanced throughout Spa's sweeping curves."
              },
              {
                "question": "Did you use trail braking effectively into La Source and Rivage?",
                "modelAnswer": "Trail braking into tight hairpins rotated the nose crisp to apex targets."
              },
              {
                "question": "Was your throttle application progressive onto the Kemmel Straight?",
                "modelAnswer": "Unwinding the wheel while ramping throttle maximized Kemmel Straight top speed."
              }
            ]
          },
          "telemetryReflection": {
            "title": "Module 1 Final Telemetry Review",
            "prompts": [
              {
                "key": "smoothFlowTrace",
                "label": "Brake-Turn-Throttle Flow",
                "question": "Does your telemetry show a continuous flow between braking, turning, and acceleration?",
                "expectedAnswer": "Seamless transitions between pedals and steering demonstrate complete technique integration."
              },
              {
                "key": "minimumApexSpeedsSpa",
                "label": "Apex Minimum Speeds",
                "question": "Are your minimum corner speeds optimized across all sectors?",
                "expectedAnswer": "High apex minimum speeds confirm proper line radius utilization."
              },
              {
                "key": "kemmelExitSpeed",
                "label": "Kemmel Straight Exit Speed",
                "question": "Is your exit speed maximized onto the Kemmel Straight?",
                "expectedAnswer": "Top speed at the end of Kemmel verifies proper Eau Rouge / Radillion exit execution."
              }
            ]
          },
          "psychologicalCheckIn": {
            "defaultFocus": 5,
            "defaultFrustration": 1,
            "defaultConfidence": 5,
            "resetPrompt": "Congratulations! You have mastered the Three Pillars of Racing with raw car control.",
            "questions": [
              "Did you feel calm and in control during your fast qualifying lap?",
              "Were you anticipating the track rather than reacting to it?",
              "Do you feel proud of your progress from Day 1 to Day 30?"
            ]
          },
          "sessionReflection": {
            "questions": [
              "What is the single biggest lesson learned in this 12-session module?",
              "How has your understanding of 'fast driving' changed since Day 1?",
              "What is your primary focus goal moving forward?"
            ]
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
