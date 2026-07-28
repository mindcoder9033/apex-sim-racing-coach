/**
 * Content Schema & Database for Apex Sim Racing Coach
 * Static Module, Session, Drills, Practical Instructions, Challenges, & References
 */

const APEX_CONTENT = {
  modules: [
    {
      id: 0,
      title: 'The Foundation',
      subtitle: 'Your First Steps into Sim Racing',
      description: 'Understand your equipment, interpret force feedback, master smooth pedal control, and build muscle memory for feel before speed.',
      duration: '4 Sessions (7 Days)',
      sessions: [
        {
          id: 1,
          title: 'Setting Up Your World',
          focus: 'Hardware setup, Forza settings, first feel',
          car: 'Mazda MX-5 2016',
          track: 'Grand Oak Raceway (Grand Oak Club)',
          targetLapTime: null,
          difficulty: 1,
          suggestedAlternatives: [
            { car: 'Toyota Sprinter Trueno GT Apex 1985', track: 'Eaglerock Club', note: 'Classic RWD Lightweight' },
            { car: 'Volkswagen Golf GTI 1983', track: 'Lime Rock Full', note: 'Vintage FWD Baseline' }
          ],
          theory: {
            title: 'Welcome to Sim Racing & Hardware Setup',
            content: `You're about to enter a world that combines the thrill of racing with the precision of simulation. But before you can drive fast, you need to understand your tools.

### The Three Components of Sim Racing
1. **THE DRIVER (YOU)**: Your brain processes information, your muscles execute movements, and your senses gather telemetry data.
2. **THE HARDWARE (MOZA R3)**: Wheel provides force feedback & steering input; Pedals provide throttle, brake, and clutch control.
3. **THE SOFTWARE (FORZA MOTORSPORT 2023)**: Physics engine simulating car behavior, graphics, and audio cues.

### Critical Settings for the Moza R3
- **Steering Axis Deadzone**: 0 (No deadzone = immediate response)
- **Steering Axis Sensitivity**: 50% (Linear response)
- **Force Feedback Scale**: 100% (Full feedback from the car)
- **Self Alignment & Mechanical Trail**: 100% (Feel tire self-aligning torque naturally)

### Today's Focus
Set up your equipment correctly, configure in-game controls, and experience your first moments behind the virtual wheel driving slow laps under 65 km/h on the wide, forgiving Grand Oak Club circuit.`,
            keyTakeaways: [
              'Comfortable seating position (arms at 90°) prevents fatigue and driving errors',
              'Zero deadzone and linear sensitivity provide direct physical feedback from physics engine',
              'Your initial goal is feeling the car and track, not chasing lap times'
            ],
            diagramId: 'hardware-driver-software'
          },
          practice: {
            focus: 'Hardware setup & first feel',
            drills: [
              {
                id: 'easy',
                level: '🟢 Easy',
                title: 'Physical Setup & Seating',
                desc: 'Mount Moza R3 wheel base & pedals securely. Adjust seating so arms are bent at 90° and feet reach pedals comfortably.',
                reps: 1,
                time: '10 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'In-Game Control Calibration',
                desc: 'Configure Forza Motorsport controls: Set Steering Deadzone to 0, FFB Scale to 100%, and test pedal input bars.',
                reps: 1,
                time: '10 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'First Slow Laps (Under 65 km/h)',
                desc: 'Drive 3 slow laps at Grand Oak Club in 3rd gear. Focus purely on wheel resistance into Turn 1 and pedal response.',
                reps: 3,
                time: '25 min'
              }
            ]
          },
          practical: {
            title: 'First Drive - Equipment & Road Sensation',
            focus: 'Feel the car and track for the first time',
            laps: 3,
            instructions: [
              'Start a Free Play race at Grand Oak Club in the Mazda MX-5 2016.',
              'Drive slowly—no faster than 65 km/h (3rd gear max).',
              'Focus on how the wheel resists your turning (force feedback) and how pedals respond.',
              'Do not worry about lap times or staying on the line perfectly.'
            ]
          },
          challenge: {
            title: 'Equipment & Control Verification',
            type: 'technique',
            description: 'Complete 3 slow, controlled laps at Grand Oak Club without off-track incidents while verifying wheel FFB and pedal responsiveness.',
            criteria: '3 clean slow laps completed.'
          }
        },
        {
          id: 2,
          title: 'Understanding Force Feedback',
          focus: 'Interpreting wheel feedback & grip limits',
          car: 'Subaru BRZ 2013',
          track: 'Lime Rock Park (Lime Rock Full)',
          targetLapTime: null,
          difficulty: 1,
          suggestedAlternatives: [
            { car: 'Mazda MX-5 Miata 1990', track: 'Laguna Seca Short', note: 'Pure Analog FFB' },
            { car: 'BMW M3 1991', track: 'Grand Oak National', note: 'Classic German Sports Sedan' }
          ],
          theory: {
            title: 'The Language of the Wheel',
            content: `Your Moza R3 communicates with you through force feedback. Learning to "read" what the wheel is telling you is the most important skill in sim racing.

### What the Wheel Tells You
- **Heavy wheel**: High grip! The car is loaded up in a corner and gripping the track.
- **Light wheel**: Low grip or loss of traction! Front tires are sliding (understeer).
- **Wheel pushing back**: Self-aligning torque returning the wheel to center as you exit turns.
- **Rumble / Vibration**: Track surface, curbs, or rumble strips.

### Understeer vs. Oversteer Sensations
When cornering through high-load turns like Big Bend at Lime Rock Park, if the wheel suddenly goes light, front tire grip has failed (understeer). Reduce steering angle immediately to restore traction.`,
            keyTakeaways: [
              'Heavy wheel feeling equals grip; light wheel feeling equals loss of front tire grip',
              'Self-aligning torque naturally straightens the wheel when traction is maintained',
              'When the wheel goes light, reduce steering input to regain front traction'
            ],
            diagramId: 'ffb-grip-diagram'
          },
          practice: {
            focus: 'Reading wheel heavy vs light sensations',
            drills: [
              {
                id: 'easy',
                level: '🟢 Easy',
                title: 'Center-Feel & Self Alignment',
                desc: 'Drive 50 km/h on Sam Posey Straight. Turn wheel 5° left/right and release to feel self-aligning torque return wheel to center.',
                reps: 5,
                time: '5 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Constant Radius Corner Weight',
                desc: 'Drive Big Bend (Turns 1-2) at 65 km/h vs 75 km/h. Feel the wheel load up heavy, then go slightly light as front tires begin to slip.',
                reps: 5,
                time: '10 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Understeer Lightness Detection',
                desc: 'Enter Big Bend at 80 km/h without extra braking; observe the exact moment wheel resistance drops light due to understeer.',
                reps: 5,
                time: '5 min'
              }
            ]
          },
          practical: {
            title: 'Force Feedback Reading Stint',
            focus: 'Identify heavy vs light steering transitions',
            laps: 5,
            instructions: [
              'Drive 5 laps at Lime Rock Park in the Subaru BRZ 2013 focusing on steering wheel weight.',
              'Pay attention to Big Bend and the Uphill when cornering loads build up.',
              'Note the exact speed where steering force lightens.'
            ]
          },
          challenge: {
            title: 'Grip Limit Awareness Challenge',
            type: 'technique',
            description: 'Identify the cornering speed limit in Big Bend where wheel weight transitions from heavy to light without spinning.',
            criteria: 'Successfully spot understeer threshold.'
          }
        },
        {
          id: 3,
          title: 'Pedal Control & Muscle Memory',
          focus: 'Smooth brake and throttle application',
          car: 'Honda Civic Type R 2018',
          track: 'Grand Oak Raceway (Grand Oak National)',
          targetLapTime: null,
          difficulty: 1,
          suggestedAlternatives: [
            { car: 'Toyota GR Supra 2020', track: 'Hakone Club', note: 'Modern Turbo RWD' },
            { car: 'Ford Mustang GT 2018', track: 'Silverstone National', note: 'High-Torque V8 Muscle' }
          ],
          theory: {
            title: 'Your Feet Are Your Engine and Brakes',
            content: `In a racecar, your feet control power delivery and deceleration. Smooth, progressive pedal control is mandatory for car stability.

### The "Squeeze" Concept
Never stab or slam pedals! Imagine pressing a ripe tomato—apply pressure progressively.
- **Abrupt Throttle**: Spikes engine torque, causes front wheelspin and power understeer in FWD cars or snap oversteer in RWD cars.
- **Smooth Throttle**: Transfers weight smoothly, maximizing exit traction out of the Grand Oak Hairpin.
- **Abrupt Brake**: Locks up wheels, unbalances chassis violently.
- **Smooth Brake**: Loads front tires progressively for maximum stopping grip into heavy braking zones.

### Muscle Memory Training
Developing precise muscle memory allows your feet to hold 30%, 50%, or 80% pedal pressure without looking at telemetry meters.`,
            keyTakeaways: [
              'Smooth progressive inputs build grip; abrupt stabs unsettle the chassis',
              'Squeeze throttle over 2-3 seconds when exiting corners to prevent wheelspin',
              'Progressive braking loads front tires without causing lockups'
            ],
            diagramId: 'pedal-squeeze-diagram'
          },
          practice: {
            focus: 'Squeezing vs stabbing pedals',
            drills: [
              {
                id: 'easy',
                level: '🟢 Easy',
                title: 'Throttle Squeeze Drill',
                desc: 'From a standstill on the Grand Oak main straight, compare stabbing throttle vs smoothly squeezing to 100% over 3 seconds in 2nd gear.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Brake Squeeze Drill',
                desc: 'Drive 100 km/h on the back straight. Practice progressively squeezing brake to 100% into the Hairpin over 2 seconds without lockup.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Pedal Rhythm & 50% Hold',
                desc: 'Alternate 50% throttle hold (2s) and 50% brake hold (2s) down the back straight to calibrate muscle memory.',
                reps: 10,
                time: '6 min'
              }
            ]
          },
          practical: {
            title: 'Smooth Pedal Modulation Stint',
            focus: 'Eliminating abrupt pedal spikes',
            laps: 5,
            instructions: [
              'Drive 5 laps at Grand Oak National in the Honda Civic Type R 2018 using smooth, progressive pedal squeezes.',
              'Listen for tire squeal or engine rev spikes caused by abrupt inputs on corner exits.',
              'Focus on smooth transition from brake release to throttle squeeze through the Hairpin.'
            ]
          },
          challenge: {
            title: 'Smooth Input Challenge',
            type: 'technique',
            description: 'Complete 4 consecutive laps at Grand Oak National with zero wheel lockups or sudden throttle wheelspins.',
            criteria: '4 clean laps with smooth pedal modulation.'
          }
        },
        {
          id: 4,
          title: 'Feeling the Car',
          focus: 'Weight transfer, grip, and balance',
          car: 'Mazda MX-5 2016',
          track: 'Laguna Seca Raceway (Laguna Seca)',
          targetLapTime: null,
          difficulty: 2,
          suggestedAlternatives: [
            { car: 'Subaru BRZ 2013', track: 'VIR North', note: 'Elevation Flow Circuit' },
            { car: 'Porsche 718 Cayman GTS 2018', track: 'Mugello Club', note: 'Mid-Engine Balance Test' }
          ],
          theory: {
            title: 'The Physics of Car Control & Weight Transfer',
            content: `A racecar responds dynamically to physics. When you accelerate, brake, or turn, weight shifts between the four tires.

### Weight Transfer Principles
- **Braking**: Weight transfers **forward** → Front tires gain grip, nose dips, steering gets heavier into Turn 2.
- **Accelerating**: Weight transfers **rearward** → Rear tires gain traction, nose rises on main straight exit.
- **Turning**: Weight transfers to **outside tires** → Outside tires carry cornering load through the Corkscrew downhill drop.

### The Friction Circle (Grip Limit)
Tires have a maximum grip budget. If you use 100% of grip for braking into Turn 2, you have 0% left for steering. As you release the brake, you unlock grip for turning!`,
            keyTakeaways: [
              'Braking loads front tires for turning grip; accelerating loads rear tires for exit traction',
              'Smooth weight transfer keeps the car balanced near the limit',
              'Managing tire grip budget is the key to cornering speed'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Weight transfer & friction circle awareness',
            drills: [
              {
                id: 'easy',
                level: '🟢 Easy',
                title: 'Braking Weight Shift Sensation',
                desc: 'Brake into Turn 2 at 80 km/h to feel the car nose dip and front steering heavy up as weight moves forward.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Acceleration Squat Sensation',
                desc: 'Accelerate out of Turn 11 onto the main straight to feel rear suspension squat and front end lighten.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Friction Circle & Elevation Drop Drill',
                desc: 'Drive through the Corkscrew downhill drop at 45, 55, 65 km/h to experience weight loading outside tires to the grip limit.',
                reps: 5,
                time: '11 min'
              }
            ]
          },
          practical: {
            title: 'Chassis Balance & Foundation Stint',
            focus: 'Connecting steering, pedal, and weight transfer feel',
            laps: 6,
            instructions: [
              'Drive 6 laps at Laguna Seca integrating all Module 0 skills.',
              'Feel weight transfer under heavy braking into Turn 2 before turn-in.',
              'Manage weight balance through the elevation drop at the Corkscrew.',
              'Squeeze throttle smoothly on exit as steering unwinds out of Turn 11.',
              'Congratulate yourself—you are ready for Module 1!'
            ]
          },
          challenge: {
            title: 'Module 0 Graduation Stint',
            type: 'technique',
            description: 'Complete 5 continuous clean laps at Laguna Seca demonstrating weight transfer balance and smooth inputs.',
            criteria: 'Module 0 Completed & Ready for Module 1!'
          }
        }
      ]
    },
    {
      id: 1,
      title: "Skip Barber: A Plan of Attack",
      subtitle: "30-Day Raw Car Control & Physics Foundation",
      description: "A 30-day beginner journey based on Skip Barber Chapter 1: A Plan of Attack. Master raw car control, weight transfer, and racing lines in Forza Motorsport 2023 with your Moza R3 wheel while systematically turning off driving assists.",
      duration: "12 Sessions (30 Days)",
      sessions: [
            {
                  id: 1,
                  title: "Setting Up Your Cockpit & FFB Baseline",
                  focus: "Hardware setup, linear wheel FFB, zero deadzone, first feel",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: null,
                  difficulty: 1,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'On',
                        tcs: 'On',
                        steering: 'Normal',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "The Driver, The Machine, & Force Feedback",
                        content: "Welcome to the Skip Barber Plan of Attack! Chapter 1 begins with a simple truth: **You cannot control a racecar until you can listen to it.**\n\n### The Moza R3 Force Feedback Loop\nYour Moza R3 direct drive wheel communicates physical forces calculated by Forza Motorsport 2023's physics engine directly into your hands.\n- **Arm Position**: Seat yourself with arms bent at 90° so you can apply 180° steering locks without shifting shoulder posture.\n- **Linear Axis**: 0% Steering Deadzone ensures immediate physics feedback with no center lag.\n- **Physical Feel**: Force feedback scale at 100% allows tire self-aligning torque to naturally pull the wheel back to center.\n\n### Today's Goal\nSet up your physical seating and Moza R3 FFB baseline, drive 5 slow baseline laps, and feel how force builds up as you turn into corners under 65 km/h.",
                        keyTakeaways: [
                              "Maintain 90° elbow bend for maximum steering control and zero physical fatigue",
                              "Zero deadzone delivers instant physics feedback from the front tire contact patches",
                              "Speed is built on feel—focus on listening to wheel resistance before chasing lap times"
                        ],
                        diagramId: "hardware-driver-software"
                  },
                  practice: {
                        focus: "Physical seating & FFB resistance checks",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Ergonomic & Steering Grip Check",
                                    desc: "Adjust seat distance so arms are at 90° when gripping 9 and 3 o-clock. Verify wheel rotation is 900° linear.",
                                    reps: 1,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Forza FFB & Axis Calibration",
                                    desc: "In Forza 2023 settings, set Steering Axis Deadzone Inside to 0, FFB Scale to 100%, and test pedal travel bars.",
                                    reps: 1,
                                    time: "5 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Controlled Low-Speed Feel (65 km/h)",
                                    desc: "Drive 3 slow laps at Laguna Seca in 3rd gear (max 65 km/h). Observe wheel self-centering force through Turn 2 and 6.",
                                    reps: 3,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Cockpit Orientation & FFB Inspection",
                        focus: "Verifying hardware feel under low speed",
                        laps: 4,
                        instructions: [
                              "Launch a Free Play session at Laguna Seca in the Mazda MX-5 Cup.",
                              "Drive 4 clean laps below 70 km/h.",
                              "Focus on how steering resistance increases as you turn into Turn 2 and Turn 5.",
                              "Keep your grip firm but relaxed—do not white-knuckle the wheel."
                        ]
                  },
                  challenge: {
                        title: "Hardware Baseline Verification",
                        type: 'technique',
                        description: "Complete 4 continuous clean laps below 70 km/h while confirming zero FFB clipping or pedal binding.",
                        criteria: "4 clean laps completed with stable FFB baseline."
                  },
                  assessment: {
                        title: "Cockpit & FFB Setup Assessment",
                        criteria: "Seating posture 90°, FFB scale set, 4 clean slow laps without off-track incidents.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Steering Resistance Telemetry Check",
                        prompts: [
                              {
                                    key: "ffbFeel",
                                    label: "Force Feedback Intensity",
                                    question: "Did you clearly feel the steering wheel get heavier as cornering force built up?"
                              },
                              {
                                    key: "pedalTravel",
                                    label: "Pedal Ergonomics",
                                    question: "Were you able to modulate brake and throttle smoothly without shifting your heel?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "Initial Session: Keep expectations calm. Focus on comfort and feeling the Moza R3 force feedback."
                  },
                  sessionReflection: {
                        questions: [
                              "How comfortable felt your seating position and arm angle during the stint?",
                              "What physical sensations did you notice from the Moza R3 wheel when turning into corners?",
                              "What is one setting or posture habit you want to maintain for Session 2?"
                        ]
                  }
            },
            {
                  id: 2,
                  title: "Reading Tire Grip & Wheel Resistance",
                  focus: "Interpreting heavy vs. light wheel feedback & understeer warning",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: null,
                  difficulty: 1,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'On',
                        tcs: 'On',
                        steering: 'Normal',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "The Language of the Steering Wheel",
                        content: "Skip Barber stresses that your tires are constantly talking to you. The primary channel for this communication is steering resistance.\n\n### Heavy Wheel vs. Light Wheel\n- **Heavy Resistance**: High front tire grip! The tires are loaded and turning the car.\n- **Light Resistance**: Loss of front grip (Understeer)! When front tires slide, self-aligning torque drops to near zero, making the wheel feel light and limp.\n- **Self-Aligning Torque**: The natural force pushing back against your hands to return the wheel straight when grip is restored.\n\n### Overcoming Understeer\nWhen the wheel suddenly feels light in a corner, turning the wheel further will **not** turn the car! You must reduce steering angle slightly to allow front tires to regain traction.",
                        keyTakeaways: [
                              "A heavy wheel indicates high front grip; a light wheel warns of front tire understeer",
                              "If steering goes light, unwind the wheel slightly to restore tire contact patch grip",
                              "Listen to tire squeal—high-pitched scrubbing means you are exceeding grip limits"
                        ],
                        diagramId: "ffb-grip-diagram"
                  },
                  practice: {
                        focus: "Identifying understeer lightness in Turn 2 & 6",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Self-Alignment Center Feel",
                                    desc: "At 50 km/h on main straight, turn wheel 10° left and release to observe natural return to center.",
                                    reps: 5,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Cornering Weight Build-Up",
                                    desc: "Drive Turn 6 at 60 km/h vs 70 km/h. Feel steering load up heavy, then feel the subtle torque drop as speed rises.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Understeer Lightness Detection",
                                    desc: "Enter Turn 2 slightly fast at 75 km/h; pinpoint the exact instant wheel resistance lightens.",
                                    reps: 5,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Grip Boundary Detection Stint",
                        focus: "Sensing heavy to light steering transitions",
                        laps: 5,
                        instructions: [
                              "Drive 5 laps at Laguna Seca focusing entirely on steering wheel weight in Turn 2, 5, and 6.",
                              "Notice how steering force peaks at turn-in apex, then lightens if speed is too high.",
                              "When you feel lightness, ease off the gas and unwind the steering wheel slightly."
                        ]
                  },
                  challenge: {
                        title: "Understeer Detection Challenge",
                        type: 'technique',
                        description: "Spot and correct front tire understeer in Turn 2 without spinning or running off-track.",
                        criteria: "Successfully detect and correct understeer across 5 laps."
                  },
                  assessment: {
                        title: "Tire Grip & FFB Assessment",
                        criteria: "Demonstrated understeer awareness by unwinding wheel when force feedback went light.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Grip Limit Telemetry Analysis",
                        prompts: [
                              {
                                    key: "understeerSpot",
                                    label: "Understeer Point Detection",
                                    question: "In which corner did you feel the steering wheel go lightest?"
                              },
                              {
                                    key: "steeringCorrection",
                                    label: "Unwind Correction",
                                    question: "Did unwinding the wheel help front tires regain steering grip?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 1,
                        defaultConfidence: 3,
                        resetPrompt: "If understeer occurs, do not panic or force the wheel. Breathe out and unwind steering smoothly."
                  },
                  sessionReflection: {
                        questions: [
                              "What difference did you feel between heavy cornering resistance and light understeer?",
                              "Which corner on Laguna Seca communicated grip limits most clearly through your Moza R3?",
                              "What will you focus on during pedal modulation in Session 3?"
                        ]
                  }
            },
            {
                  id: 3,
                  title: "Pedal Modulation & STM OFF Transition",
                  focus: "Progressive pedal squeeze & disabling Stability Control (STM)",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: null,
                  difficulty: 1,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'On',
                        steering: 'Normal',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "Pedal Squeeze & Disabling Stability Control (STM)",
                        content: "Today marks your first step in turning off electronic aids! We are disabling **Stability Control (STM)**. \n\n### Why Turn Off STM?\nSTM automatically applies individual brakes when it thinks the car is rotating. This masks poor driver inputs and prevents you from learning natural chassis weight transfer.\n\n### The \"Squeeze\" Principle\nSkip Barber teaches that pedals must be treated like precision instruments:\n- **Abrupt Throttle/Brake Stabs**: Violently shift weight, break tire traction, and trigger instability.\n- **Progressive Pedal Squeeze**: Squeezing throttle over 2-3 seconds smoothly shifts weight to rear tires, maximizing exit grip.\n- **Progressive Brake Application**: Loads front tires progressively for maximum stopping force.",
                        keyTakeaways: [
                              "With STM OFF, your pedal inputs directly dictate chassis balance and rotation",
                              "Squeeze pedals smoothly as if squeezing a ripe orange—never slam or stab",
                              "Smooth brake release keeps the front end planted while initiating corner entry"
                        ],
                        diagramId: "pedal-squeeze-diagram"
                  },
                  practice: {
                        focus: "Pedal squeeze drills with STM OFF",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Throttle Squeeze from Stop",
                                    desc: "From standstill in 2nd gear, compare stabbing throttle vs smoothly squeezing to 100% over 3 seconds.",
                                    reps: 5,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Brake Squeeze & Modulation",
                                    desc: "On main straight at 85 km/h, squeeze brake progressively to 80% without stabbing.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "STM-Off Smooth Lap Sweep",
                                    desc: "Drive 3 clean laps focusing on smooth pedal squeezes with Stability Management OFF.",
                                    reps: 3,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "First STM-Off Driving Stint",
                        focus: "Maintaining chassis stability through pedal control",
                        laps: 5,
                        instructions: [
                              "Verify Stability Control (STM) is set to OFF in Forza Motorsport assist settings.",
                              "Drive 5 laps at Laguna Seca using smooth pedal modulation.",
                              "Pay attention to Turn 3 and Turn 11 exit—squeeze throttle progressively as steering unwinds."
                        ]
                  },
                  challenge: {
                        title: "STM-Free Control Challenge",
                        type: 'technique',
                        description: "Complete 4 consecutive laps with STM OFF without triggering chassis instability or off-track excursions.",
                        criteria: "4 clean laps with STM OFF."
                  },
                  assessment: {
                        title: "STM Removal Assessment",
                        criteria: "Successfully completed 4 clean laps with Stability Control OFF using smooth pedal squeezes.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Pedal Squeeze Telemetry Check",
                        prompts: [
                              {
                                    key: "throttleSqueeze",
                                    label: "Throttle Application Ramp",
                                    question: "Did throttle application feel smooth over 2-3 seconds on exit?"
                              },
                              {
                                    key: "stmOffStability",
                                    label: "Chassis Behavior",
                                    question: "Did the car remain stable through corners without STM intervention?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 1,
                        defaultConfidence: 3,
                        resetPrompt: "First assist removed! Remind yourself: smooth inputs equal a calm, predictable car."
                  },
                  sessionReflection: {
                        questions: [
                              "Did you notice any difference in car freedom with STM turned OFF?",
                              "Were your pedal squeezes smooth or did you catch yourself stabbing throttle/brakes?",
                              "How confident do you feel preparing for TCS Removal in Week 2?"
                        ]
                  }
            },
            {
                  id: 4,
                  title: "Weight Transfer & TCS OFF Transition",
                  focus: "Longitudinal weight shift & disabling Traction Control (TCS)",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: null,
                  difficulty: 2,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "Pitch, Roll, & Disabling Traction Control (TCS)",
                        content: "Welcome to Week 2! Today we take a major leap: **Traction Control (TCS) is OFF** and **Simulation Steering is ON**.\n\n### Longitudinal Weight Transfer\nWhen a racecar moves, weight moves with it:\n- **Braking**: Weight transfers **FORWARD** → Front tires gain grip, nose dips, steering resists heavily.\n- **Acceleration**: Weight transfers **REARWARD** → Rear tires gain traction, nose lifts, front steering lightens.\n\n### Why Disabling TCS Teaches Real Throttle Rotation\nWithout TCS, stabbing the throttle while steering will spin the rear tires! You must wait until the car rotates towards corner exit before squeezing full throttle.",
                        keyTakeaways: [
                              "Forward weight shift under braking provides front tire grip for corner entry",
                              "With TCS OFF, full throttle can only be applied as steering wheel unwinds towards exit",
                              "Simulation steering provides raw, un-filtered direct drive wheel feedback"
                        ],
                        diagramId: "weight-transfer-friction-circle"
                  },
                  practice: {
                        focus: "Weight transfer feel with TCS OFF & Sim Steering",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Nose-Dip Braking Feel",
                                    desc: "From 90 km/h, brake firmly to feel front weight transfer and nose compression before Turn 2.",
                                    reps: 4,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Unwinding Throttle Squeeze",
                                    desc: "At Turn 11 exit, practice squeezing throttle in sync with unwinding the Moza R3 wheel.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "TCS-Free Corner Exit Sweep",
                                    desc: "Drive 4 clean laps managing rear wheelspin purely through foot control.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "TCS-Free Weight Transfer Stint",
                        focus: "Managing rear wheel traction with pedal feel",
                        laps: 5,
                        instructions: [
                              "Verify Traction Control (TCS) is OFF and Steering is set to Simulation.",
                              "Drive 5 clean laps at Laguna Seca.",
                              "Focus on letting weight settle onto front tires under braking before turning in.",
                              "Squeeze throttle gradually on corner exit as you unwind the wheel."
                        ]
                  },
                  challenge: {
                        title: "TCS-Free Clean Lap Challenge",
                        type: 'technique',
                        description: "Complete 4 clean laps with TCS OFF without spinning rear tires or losing rear traction on exit.",
                        criteria: "4 clean laps with zero rear wheelspin spikes."
                  },
                  assessment: {
                        title: "TCS & Sim Steering Removal Assessment",
                        criteria: "Controlled rear wheel traction without TCS intervention across 4 clean laps.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Rear Traction & Weight Shift Telemetry",
                        prompts: [
                              {
                                    key: "rearSpin",
                                    label: "Rear Traction Management",
                                    question: "Did you experience rear wheelspin on exit, and how quickly did you modulate throttle?"
                              },
                              {
                                    key: "weightShift",
                                    label: "Braking Weight Loading",
                                    question: "Could you feel front tires loading under braking before turn-in?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 2,
                        defaultConfidence: 3,
                        resetPrompt: "TCS OFF requires patience on corner exit. If the rear steps out, ease throttle slightly—do not slam brakes."
                  },
                  sessionReflection: {
                        questions: [
                              "How did the car feel coming out of slow corners without Traction Control?",
                              "Did Simulation Steering feel more direct through your Moza R3 wheel?",
                              "What did you learn about waiting for the steering wheel to unwind before full throttle?"
                        ]
                  }
            },
            {
                  id: 5,
                  title: "The Traction Circle & Grip Budgeting",
                  focus: "Managing combined lateral & longitudinal tire grip",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: 110,
                  difficulty: 2,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "The Skip Barber Traction Circle",
                        content: "Skip Barber's cornerstone concept is **The Traction Circle (Grip Budget)**.\n\n### The 100% Grip Budget Rule\nA tire has a maximum force limit (100% grip budget):\n- If you use 100% of tire grip for **Braking**, you have **0% left for Turning**.\n- If you try to turn while holding 100% brake, the tires skid!\n- As you release brake pressure from 100% → 70% → 30%, you \"unlock\" 30% → 70% of grip budget for cornering steering angle.\n\n### Trading Longitudinal for Lateral Grip\nSmooth driving is the art of smoothly trading braking force for cornering force, and cornering force for exit acceleration force!",
                        keyTakeaways: [
                              "Tires have a finite 100% grip budget shared between turning and braking/acceleration",
                              "Release brake pressure progressively as you increase steering wheel lock",
                              "Never ask a tire for 100% braking AND 100% turning simultaneously"
                        ],
                        diagramId: "weight-transfer-friction-circle"
                  },
                  practice: {
                        focus: "Grip budget trading in Turn 2 & Turn 5",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Straight-Line Braking Budget",
                                    desc: "Brake 100% in a straight line, then release to 0% before starting turn-in.",
                                    reps: 4,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Brake Release & Turn Blend",
                                    desc: "Brake 100% straight, then smoothly trail brake off to 20% as you turn wheel 20° into Turn 2.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Apex Grip Transition Stint",
                                    desc: "Drive 4 laps focusing on smooth trade-off between steering lock and pedal pressure.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Traction Circle Blending Stint",
                        focus: "Smoothly trading pedal pressure for steering angle",
                        laps: 6,
                        instructions: [
                              "Drive 6 laps at Laguna Seca keeping the Traction Circle concept in mind.",
                              "In Turn 2, 5, and 6, ensure maximum braking is done BEFORE initial turn-in.",
                              "Ease off brakes smoothly as you turn into the apex."
                        ]
                  },
                  challenge: {
                        title: "Traction Budget Mastery",
                        type: 'technique',
                        description: "Complete 5 continuous clean laps without triggering front tire scrub or rear slide from grip over-budgeting.",
                        criteria: "5 clean laps with smooth grip budget trading."
                  },
                  assessment: {
                        title: "Traction Circle Assessment",
                        criteria: "Demonstrated smooth transition from braking to cornering without exceeding tire grip budget.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Grip Budget Telemetry Analysis",
                        prompts: [
                              {
                                    key: "brakeReleaseBlend",
                                    label: "Brake & Turn Blending",
                                    question: "Were you releasing the brake pedal smoothly as steering angle increased?"
                              },
                              {
                                    key: "tireScrubSound",
                                    label: "Tire Audio Cue",
                                    question: "Did tire squeal decrease as you managed the grip budget better?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "Think of grip like a bank account—spend it on braking OR turning, but never overdraft both!"
                  },
                  sessionReflection: {
                        questions: [
                              "How did understanding the 100% grip budget change how you enter corners?",
                              "Which corner allowed you to blend brake release and turn-in most smoothly?",
                              "What is your target for Trail Braking in Session 6?"
                        ]
                  }
            },
            {
                  id: 6,
                  title: "Trail Braking Entry Rotation",
                  focus: "Trailing brake pressure into apex to help car turn",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: 108,
                  difficulty: 2,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Full',
                        abs: 'On'
                  },
                  theory: {
                        title: "The Art of Trail Braking",
                        content: "Skip Barber describes Trail Braking as the technique that separates good drivers from great drivers.\n\n### What is Trail Braking?\nRather than finishing 100% of braking in a straight line, Trail Braking is the technique of **trailing off** the last 15-20% of brake pressure past turn-in up to the apex.\n\n### Why Trail Braking Works\n1. **Keeps Weight on Front Tires**: Trailing light brake pressure keeps weight shifted forward onto front tires, pinning them to the track for sharp turn-in.\n2. **Rotates Chassis Naturally**: Light front weight allows the rear end to pivot gently around the corner center.",
                        keyTakeaways: [
                              "Trail braking trails 10-20% brake pressure past turn-in point towards corner apex",
                              "Front tires remain loaded, helping the car rotate into tight turns like Turn 2 and Turn 11",
                              "Release trail brake smoothly as you reach the apex—never snap foot off the pedal"
                        ],
                        diagramId: "pedal-squeeze-diagram"
                  },
                  practice: {
                        focus: "Trailing brake pressure past turn-in at Turn 2 & 11",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Straight vs Trail Brake Comparison",
                                    desc: "Drive Turn 2 releasing brake 100% before turn-in vs trailing 15% brake past turn-in.",
                                    reps: 4,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "15% Trail Brake Decay Drill",
                                    desc: "Practice decaying brake pressure from 80% → 15% → 0% over 4 seconds into Turn 5.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Full Lap Trail Rotation Stint",
                                    desc: "Drive 4 laps applying trail braking at Turns 2, 5, 8 (Corkscrew), and 11.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Trail Braking Integration Stint",
                        focus: "Car rotation on corner entry via trail braking",
                        laps: 6,
                        instructions: [
                              "Drive 6 laps at Laguna Seca using trail braking in slow to medium corners.",
                              "Feel how light trail brake pressure helps the front end bite and turn toward the apex.",
                              "Ensure brake is 0% right as you reach the apex before squeezing throttle."
                        ]
                  },
                  challenge: {
                        title: "Apex Rotation Challenge",
                        type: 'technique',
                        description: "Successfully execute trail braking in Turn 2 and Turn 11 across 4 consecutive clean laps.",
                        criteria: "Smooth trail brake rotation achieved."
                  },
                  assessment: {
                        title: "Trail Braking Assessment",
                        criteria: "Demonstrated trail brake decay past turn-in with smooth chassis rotation.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Brake Release Telemetry Curve",
                        prompts: [
                              {
                                    key: "trailDecay",
                                    label: "Brake Trail Slope",
                                    question: "Did your brake pressure taper off smoothly into corner turn-in?"
                              },
                              {
                                    key: "rotationSense",
                                    label: "Chassis Rotation Feel",
                                    question: "Did trail braking help the Mazda MX-5 turn into the apex with less steering input?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "Trail braking is about finesse, not hard braking. Keep foot pressure light on entry."
                  },
                  sessionReflection: {
                        questions: [
                              "How did trail braking change the car rotation entering Turn 2 and Turn 11?",
                              "Were you able to achieve 0% brake pressure precisely at corner apex?",
                              "How prepared do you feel to turn OFF the Driving Line in Week 3?"
                        ]
                  }
            },
            {
                  id: 7,
                  title: "Cornering Phasing & Line OFF Transition",
                  focus: "Turn-in, Apex, Exit phasing & disabling Driving Line assist",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: 106,
                  difficulty: 3,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'On'
                  },
                  theory: {
                        title: "Corner Geometry & Disabling The Driving Line",
                        content: "Welcome to Week 3! Today we turn OFF the **In-Game Driving Line**. \n\n### Why Remove the Driving Line?\nDriving lines cause \"line hypnosis\"—drivers stare at colored pavement 5 meters in front of their bumper instead of looking down the track at real reference points!\n\n### The Three Phases of Every Corner\n1. **Entry (Turn-in Point)**: Located on the far **outside** edge of track. Mark it with curbing, brake boards, or track seams.\n2. **Apex (Clip Point)**: The inside point where the car touches the inner curb.\n3. **Exit (Track-out Point)**: The outside edge of track where car unwinds to full throttle.",
                        keyTakeaways: [
                              "With Driving Line OFF, pick physical track markers (curbs, boards, patches) for reference",
                              "Outside-Inside-Outside arc maximizes corner radius for maximum cornering speed",
                              "Prioritize exit trajectory over entry speed to maximize straightaway pace"
                        ],
                        diagramId: "corner-path-comparison"
                  },
                  practice: {
                        focus: "Finding physical track markers with Line OFF",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Spotting Turn 2 Reference Points",
                                    desc: "Drive slow through Turn 2 without line. Spot the 300ft brake board, apex painted curb, and exit curb.",
                                    reps: 3,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Visual Marker Spotting Walkthrough",
                                    desc: "Drive at 75% pace. Call out \"Turn-in\", \"Apex\", and \"Exit\" aloud as you pass physical markers.",
                                    reps: 4,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Full Line-Off Lap Sweep",
                                    desc: "Drive 4 clean laps relying 100% on physical visual markers with Driving Line OFF.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "First Line-Free Track Stint",
                        focus: "Navigating Laguna Seca using real reference markers",
                        laps: 6,
                        instructions: [
                              "Verify Driving Line is set to OFF in Forza assist settings.",
                              "Drive 6 laps focusing on picking physical markers for Turn 2, 5, 6, and 11.",
                              "Keep eyes looking ahead to the next reference point before arriving."
                        ]
                  },
                  challenge: {
                        title: "Line-Free Track Navigation",
                        type: 'technique',
                        description: "Complete 5 continuous clean laps with Driving Line OFF without missing apexes or off-track excursions.",
                        criteria: "5 clean line-free laps completed."
                  },
                  assessment: {
                        title: "Driving Line Removal Assessment",
                        criteria: "Successfully navigated Laguna Seca using physical track reference points with Line OFF.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Reference Point Precision Check",
                        prompts: [
                              {
                                    key: "visualMarkers",
                                    label: "Marker Identification",
                                    question: "Did you spot physical brake boards and apex curbs clearly without the green line?"
                              },
                              {
                                    key: "apexConsistency",
                                    label: "Apex Hitting Accuracy",
                                    question: "Were you clipping the inside apex curbs consistently?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 4,
                        defaultFrustration: 2,
                        defaultConfidence: 3,
                        resetPrompt: "Line OFF can feel open at first. Trust your eyes and look down track to where you want the car to go."
                  },
                  sessionReflection: {
                        questions: [
                              "How did driving feel without the visual distraction of the in-game line?",
                              "Which physical reference points did you use for Turn 2 and Turn 5?",
                              "What will you practice with visual scanning in Session 8?"
                        ]
                  }
            },
            {
                  id: 8,
                  title: "The Visual Horizon & Eyes-Up Driving",
                  focus: "Looking 2-3 seconds ahead & avoiding target fixation",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: 105,
                  difficulty: 3,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'On'
                  },
                  theory: {
                        title: "Eyes Up: The Visual Horizon Rule",
                        content: "Skip Barber states: **Your hands automatically follow your eyes.**\n\n### Target Fixation Warning\nIf you stare at the wall or tire barrier you want to avoid, your hands will steer you right into it! Always look at the open track space where you WANT the car to go.\n\n### The 2-3 Second Rule\n- **Beginner Vision**: Looking 5 meters ahead at car hood or pavement.\n- **Pro Vision**: Looking 2-3 seconds down track (50-100 meters ahead).\n- When approaching turn-in, your eyes should ALREADY be locked onto the apex. When reaching the apex, your eyes should ALREADY be looking at the track-out exit point!",
                        keyTakeaways: [
                              "Your hands naturally guide the car toward wherever your eyes are focused",
                              "Scan ahead in sequence: Brake Board → Turn-in → Apex → Exit Point",
                              "Looking far ahead slows down your perception of speed and calms driving reactions"
                        ],
                        diagramId: "corner-path-comparison"
                  },
                  practice: {
                        focus: "Visual scanning sequence through Corkscrew & Turn 9",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Corkscrew Tree Visual Alignment",
                                    desc: "At Corkscrew crest, look far ahead at the oak tree top before dropping down hill.",
                                    reps: 3,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Sequential Vision Callout",
                                    desc: "Through Turn 5 and 6, call out \"Looking Apex!\" then \"Looking Exit!\" 2 seconds before reaching each point.",
                                    reps: 4,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "High-Horizon Lap Stint",
                                    desc: "Drive 4 laps keeping eyes strictly 2-3 seconds ahead down track.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Eyes-Up Visual Horizon Stint",
                        focus: "Scanning ahead down track before car arrives",
                        laps: 6,
                        instructions: [
                              "Drive 6 laps at Laguna Seca focusing 100% on visual horizon control.",
                              "Never let your eyes lock onto the pavement directly in front of your hood.",
                              "Observe how looking far ahead makes high speed feel slower and more manageable."
                        ]
                  },
                  challenge: {
                        title: "Visual Horizon Discipline",
                        type: 'technique',
                        description: "Complete 5 continuous clean laps maintaining eyes-up visual horizon across all corners.",
                        criteria: "5 clean laps with smooth vision transitions."
                  },
                  assessment: {
                        title: "Visual Horizon Assessment",
                        criteria: "Maintained forward vision 2-3 seconds ahead without target fixation.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Vision & Smoothness Telemetry",
                        prompts: [
                              {
                                    key: "speedPerception",
                                    label: "Speed Perception",
                                    question: "Did looking far ahead make the track feel slower and calmer?"
                              },
                              {
                                    key: "apexTargeting",
                                    label: "Apex Targeting",
                                    question: "Did looking at apex early help you hit clipping points accurately?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 5,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "If you feel rushed or anxious, lift your vision higher down the track. Looking ahead buys you time!"
                  },
                  sessionReflection: {
                        questions: [
                              "How did raising your visual horizon affect your steering input smoothness?",
                              "Were you able to look at the Corkscrew exit point before dropping over the crest?",
                              "What will you focus on during String Theory steering in Session 9?"
                        ]
                  }
            },
            {
                  id: 9,
                  title: "String Theory & Smooth Steering Unwinding",
                  focus: "Connecting steering wheel angle to throttle application",
                  car: 'Mazda MX-5 Cup',
                  track: 'Laguna Seca',
                  targetLapTime: 104,
                  difficulty: 3,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'On'
                  },
                  theory: {
                        title: "Skip Barber String Theory",
                        content: "Skip Barber uses a famous mental image called **String Theory**.\n\n### The Imaginary String\nImagine an invisible string tied between the **bottom of your Moza R3 steering wheel** and your **right throttle foot**.\n\n- When the steering wheel is turned 90° into a corner, the string is tight → **You CANNOT press the throttle!**\n- As you unwind the steering wheel back toward center, the string slackens → **You can now squeeze throttle proportionately!**\n- Full Throttle (100%) is ONLY allowed when the steering wheel is completely unwound straight (0° lock).",
                        keyTakeaways: [
                              "Throttle application must be inversely proportional to steering wheel angle",
                              "Unwind steering wheel smoothly as you apply exit throttle",
                              "Applying 100% throttle with heavy steering lock causes instant rear wheelspin"
                        ],
                        diagramId: "pedal-squeeze-diagram"
                  },
                  practice: {
                        focus: "Unwinding steering as throttle squeezes",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "String Theory Mental Warmup",
                                    desc: "In pit lane, turn wheel 45° and observe how throttle foot must stay light. Unwind wheel to feel full throttle release.",
                                    reps: 3,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Turn 11 Exit String Modulation",
                                    desc: "At Turn 11 exit, practice unwinding Moza R3 wheel from 60° → 0° while squeezing throttle from 20% → 100%.",
                                    reps: 5,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "String Theory Full Lap Sweep",
                                    desc: "Drive 4 clean laps strictly obeying the string connection on all corner exits.",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "String Theory Synchronization Stint",
                        focus: "Synchronizing wheel unwinding with throttle squeeze",
                        laps: 6,
                        instructions: [
                              "Drive 6 laps at Laguna Seca using String Theory on every corner exit.",
                              "Focus on Turn 3, Turn 4, Turn 6, and Turn 11 exits.",
                              "Never force full throttle until the wheel is unwinding smoothly."
                        ]
                  },
                  challenge: {
                        title: "String Synchronization Challenge",
                        type: 'technique',
                        description: "Complete 5 continuous clean laps demonstrating perfect inverse steering-to-throttle synchronization.",
                        criteria: "5 clean laps with zero snap wheelspin."
                  },
                  assessment: {
                        title: "String Theory Assessment",
                        criteria: "Proportionately unwound steering lock while applying exit throttle across 5 laps.",
                        passingScore: 80
                  },
                  telemetryReflection: {
                        title: "Steering & Throttle Correlation",
                        prompts: [
                              {
                                    key: "stringSync",
                                    label: "Unwind & Throttle Sync",
                                    question: "Did you unwind the steering wheel in smooth synchronization with throttle pressure?"
                              },
                              {
                                    key: "exitTraction",
                                    label: "Exit Car Stability",
                                    question: "Was corner exit traction clean without snap oversteer?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 5,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "String Theory creates harmony between hands and feet. Smooth unwinding equals fast exit speed."
                  },
                  sessionReflection: {
                        questions: [
                              "How did String Theory help you avoid rear wheelspin on exit?",
                              "Which corner exit felt most satisfying when unwinding the wheel smoothly?",
                              "How confident do you feel entering Week 4 for ABS Removal?"
                        ]
                  }
            },
            {
                  id: 10,
                  title: "Threshold Braking & ABS OFF Transition",
                  focus: "Peak brake modulation & disabling Anti-Lock Brakes (ABS)",
                  car: 'Mazda MX-5 Cup',
                  track: 'Lime Rock Park',
                  targetLapTime: 62,
                  difficulty: 4,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'Off'
                  },
                  theory: {
                        title: "Threshold Braking & Disabling ABS",
                        content: "Welcome to Week 4! Today we unlock **Pure Raw Car Control**: **ABS is OFF**. We move to Lime Rock Park for fast, flowing feedback.\n\n### What is Threshold Braking?\nThreshold braking is squeezing brake pressure up to **85-90% peak limit**—just 1% below the point where front tires lock up and skid!\n\n### What Happens When Tires Lock Up?\n- If you squeeze 100% brake without ABS, front tires lock up solid and turn into sliding rubber blocks.\n- **Locked Front Tires Cannot Steer!** If tires lock, you must immediately release brake pressure by 10-15% to get tires rotating again.",
                        keyTakeaways: [
                              "With ABS OFF, squeezing 100% brake pressure locks front tires solid",
                              "Threshold braking squeezes to 85-90% peak pressure without locking front wheels",
                              "If front tire lockup occurs, ease off brake pressure immediately to restore steering control"
                        ],
                        diagramId: "pedal-squeeze-diagram"
                  },
                  practice: {
                        focus: "Finding 85% brake threshold without lockup at Lime Rock T1",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Threshold Brake Squeeze (85%)",
                                    desc: "On main straight at 120 km/h, squeeze brake to 85% without locking front tires.",
                                    reps: 4,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Lockup Release Recovery",
                                    desc: "Intentionally lock front tires at low speed, then release brake 15% to feel tires regain rotation.",
                                    reps: 4,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Lime Rock T1 Threshold Stint",
                                    desc: "Drive 4 clean laps practicing threshold braking into Lime Rock Big Bend (Turn 1).",
                                    reps: 4,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "First ABS-Free Driving Stint",
                        focus: "Squeezing to threshold limit without locking front wheels",
                        laps: 6,
                        instructions: [
                              "Verify Anti-Lock Brakes (ABS) is set to OFF in Forza assist settings.",
                              "Drive 6 laps at Lime Rock Park in the Mazda MX-5 Cup.",
                              "Squeeze brake firmly to 85% in straight line before Turn 1 (Big Bend).",
                              "Listen for tire flat-spotting screeching—release pressure if lockup starts."
                        ]
                  },
                  challenge: {
                        title: "ABS-Free Threshold Challenge",
                        type: 'technique',
                        description: "Complete 5 continuous clean laps at Lime Rock Park with ABS OFF without front tire lockup.",
                        criteria: "5 clean laps with zero tire lockups."
                  },
                  assessment: {
                        title: "ABS Removal Assessment",
                        criteria: "Demonstrated threshold braking to 85-90% pressure without locking wheels with ABS OFF.",
                        passingScore: 85
                  },
                  telemetryReflection: {
                        title: "Threshold Braking Telemetry Check",
                        prompts: [
                              {
                                    key: "peakBrakePressure",
                                    label: "Peak Brake Pressure %",
                                    question: "Did you hit ~85% peak brake pressure without crossing into 100% tire lockup?"
                              },
                              {
                                    key: "lockupRecovery",
                                    label: "Lockup Recovery Speed",
                                    question: "If lockup occurred, did you ease brake pressure quickly to regain steering?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 5,
                        defaultFrustration: 2,
                        defaultConfidence: 3,
                        resetPrompt: "ABS OFF requires delicate foot pressure. If you lock up, do not panic—simply reduce brake pressure by 10%."
                  },
                  sessionReflection: {
                        questions: [
                              "How did threshold braking feel through your brake pedal without ABS?",
                              "Were you able to spot the limit where front tires begin to lock up?",
                              "What will you focus on during oversteer/understeer correction in Session 11?"
                        ]
                  }
            },
            {
                  id: 11,
                  title: "Correcting Understeer & Snap Oversteer",
                  focus: "Managing car slip limits & dynamic weight redistribution",
                  car: 'Mazda MX-5 Cup',
                  track: 'Lime Rock Park',
                  targetLapTime: 60.5,
                  difficulty: 4,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'Off'
                  },
                  theory: {
                        title: "Limit Handling: Understeer vs. Oversteer",
                        content: "Skip Barber emphasizes that ALL racecars slide at the limit. A master driver stays calm and redistributes weight to catch slides!\n\n### Correcting Understeer (Front Slide)\n- **Cause**: Entering corner too fast or over-steering.\n- **Correction**: **LIFT throttle slightly** to shift weight forward to front tires, and **unwind wheel slightly**.\n\n### Correcting Oversteer (Rear Slide)\n- **Cause**: Sudden throttle stab or abrupt lift off brake while turning.\n- **Correction**: Smoothly counter-steer into the direction of slide while easing throttle slightly. Never slam on brakes!",
                        keyTakeaways: [
                              "Understeer requires lifting throttle and unwinding wheel slightly to restore front grip",
                              "Oversteer requires counter-steering smoothly into slide without slamming brakes",
                              "Smooth weight transfer is the ultimate cure for vehicle instability"
                        ],
                        diagramId: "ffb-grip-diagram"
                  },
                  practice: {
                        focus: "Catching slides at Lime Rock Uphill & West Bend",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "Understeer Recovery Drill",
                                    desc: "Induce mild understeer in Turn 1, lift throttle and unwind wheel 10° to restore grip.",
                                    reps: 4,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Oversteer Catch Drill",
                                    desc: "Induce minor rear slide out of Uphill corner, counter-steer smoothly to catch chassis alignment.",
                                    reps: 4,
                                    time: "8 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Limit Control Sweep Stint",
                                    desc: "Drive 5 clean laps near the limit, correcting minor slides calmly.",
                                    reps: 5,
                                    time: "10 min"
                              }
                        ]
                  },
                  practical: {
                        title: "Limit Slip Management Stint",
                        focus: "Staying calm and correcting car slides at limit",
                        laps: 7,
                        instructions: [
                              "Drive 7 laps at Lime Rock Park pushing closer to the car limit.",
                              "Practice lifting slightly on throttle to tuck front end in during understeer.",
                              "Catch minor rear slides on exit with smooth counter-steering."
                        ]
                  },
                  challenge: {
                        title: "Zero Spin Limit Challenge",
                        type: 'technique',
                        description: "Complete 6 continuous clean laps pushing pace without a single 360° spin or off-track incident.",
                        criteria: "6 clean laps with calm slide corrections."
                  },
                  assessment: {
                        title: "Limit Handling Assessment",
                        criteria: "Demonstrated calm understeer and oversteer corrections without spinning.",
                        passingScore: 85
                  },
                  telemetryReflection: {
                        title: "Limit Slip Telemetry Analysis",
                        prompts: [
                              {
                                    key: "countersteerFinesse",
                                    label: "Counter-Steer Reaction",
                                    question: "Did counter-steering feel natural through the Moza R3 wheel?"
                              },
                              {
                                    key: "throttleLifting",
                                    label: "Throttle Lift Finesse",
                                    question: "Did lifting throttle help tuck the front nose in during understeer?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 5,
                        defaultFrustration: 1,
                        defaultConfidence: 4,
                        resetPrompt: "Sliding is normal physics! Stay relaxed in your shoulders and guide the car smoothly."
                  },
                  sessionReflection: {
                        questions: [
                              "How calm did you feel when the rear end stepped out slightly?",
                              "What technique helped most when correcting front understeer?",
                              "How ready do you feel for the Final Benchmark Assessment in Session 12?"
                        ]
                  }
            },
            {
                  id: 12,
                  title: "The Skip Barber Benchmark Assessment",
                  focus: "30-Day Master Stint: 5 continuous clean laps with ALL ASSISTS OFF",
                  car: 'Mazda MX-5 Cup',
                  track: 'Lime Rock Park',
                  targetLapTime: 59.5,
                  difficulty: 5,
                  assistsConfig: {
                        transmission: 'Automatic (No Clutch)',
                        stm: 'Off',
                        tcs: 'Off',
                        steering: 'Simulation',
                        drivingLine: 'Off',
                        abs: 'Off'
                  },
                  theory: {
                        title: "30-Day Graduation: Raw Car Control Mastered",
                        content: "Congratulations on reaching Session 12 of Skip Barber Chapter 1: A Plan of Attack!\n\nOver 30 days and 12 structured 45-minute sessions, you have transformed from a complete beginner into a driver who understands raw car control physics.\n\n### What You Have Accomplished\n- **Hardware & FFB**: Configured Moza R3 wheel for 100% linear physics feedback.\n- **Pedal Control**: Mastered progressive pedal squeezes and threshold braking without ABS.\n- **Weight Transfer**: Mastered longitudinal pitch, trail braking entry rotation, and Traction Circle grip budget.\n- **Assist Stripping**: Successfully turned OFF **STM**, **TCS**, **Driving Line**, and **ABS**!\n\nToday is your Final Graduation Benchmark: **5 continuous clean, fast laps with ALL ASSISTS OFF!**",
                        keyTakeaways: [
                              "Raw car control is built on smooth weight transfer, vision, and pedal finesse",
                              "You are driving with zero electronic safety nets—100% pure driver skill",
                              "You have completed Skip Barber Chapter 1: A Plan of Attack!"
                        ],
                        diagramId: "corner-path-comparison"
                  },
                  practice: {
                        focus: "Final Stint Warmup & Pace Calibration",
                        drills: [
                              {
                                    id: "easy",
                                    level: "🟢 Easy",
                                    title: "3-Lap Tire Warmup",
                                    desc: "Drive 3 clean laps bringing tires and brakes up to operating temperature.",
                                    reps: 3,
                                    time: "5 min"
                              },
                              {
                                    id: "medium",
                                    level: "🟡 Medium",
                                    title: "Threshold & Trail Calibration",
                                    desc: "Verify threshold braking into T1 and trail braking into West Bend.",
                                    reps: 3,
                                    time: "6 min"
                              },
                              {
                                    id: "hard",
                                    level: "🔴 Hard",
                                    title: "Benchmark Pace Trial",
                                    desc: "Turn 2 laps near target pace (under 60.0s) with all assists OFF.",
                                    reps: 2,
                                    time: "6 min"
                              }
                        ]
                  },
                  practical: {
                        title: "The Skip Barber Graduation Stint",
                        focus: "5 continuous clean, fast laps with ALL ASSISTS OFF",
                        laps: 8,
                        instructions: [
                              "Verify ALL ASSISTS (STM, TCS, Line, ABS) are set to OFF with Sim Steering ON.",
                              "Drive 8 continuous laps at Lime Rock Park in the Mazda MX-5 Cup.",
                              "Execute threshold braking, trail braking, String Theory unwinding, and eyes-up vision.",
                              "Aim for 5 continuous clean laps within 0.5s variance!"
                        ]
                  },
                  challenge: {
                        title: "Skip Barber Chapter 1 Graduation",
                        type: 'mechanical',
                        description: "Complete 5 continuous clean laps with ALL ASSISTS OFF, achieving target lap pace under 60.0s.",
                        criteria: "Graduation Benchmark Achieved! Module 1 Completed."
                  },
                  assessment: {
                        title: "30-Day Skip Barber Graduation Assessment",
                        criteria: "5 continuous clean laps with ALL ASSISTS OFF (STM, TCS, Line, ABS) meeting benchmark pace.",
                        passingScore: 90
                  },
                  telemetryReflection: {
                        title: "Final 30-Day Telemetry Review",
                        prompts: [
                              {
                                    key: "paceConsistency",
                                    label: "5-Lap Pace Consistency",
                                    question: "What was your lap time variance over your 5 clean benchmark laps?"
                              },
                              {
                                    key: "pureControlFeel",
                                    label: "Raw Control Confidence",
                                    question: "How confident do you feel driving with 100% assists OFF compared to Day 1?"
                              }
                        ]
                  },
                  psychologicalCheckIn: {
                        defaultFocus: 5,
                        defaultFrustration: 1,
                        defaultConfidence: 5,
                        resetPrompt: "You have earned full confidence! Take a deep breath and celebrate mastering raw car control."
                  },
                  sessionReflection: {
                        questions: [
                              "What was your single biggest transformation over this 30-day Skip Barber module?",
                              "Which assist removal (STM, TCS, Line, ABS) taught you the most about car physics?",
                              "What is your next goal in Apex Sim Racing Coach?"
                        ]
                  }
            }
      ]
},
    {
      id: 2,
      title: 'The 3 Basics: Line, Exit Speed & Braking',
      subtitle: 'Skip Barber Chapter 2: Raw Car Control Masterclass',
      description: 'Master the racing line, corner exit speed, threshold braking, and weight transfer in the Mazda MX-5 Cup at Lime Rock Park with progressive assist removal.',
      duration: '12 Sessions (30 Days)',
      sessions: [
        {
          id: 1,
          title: 'Line Fundamentals & Arc Maximization',
          focus: 'Corner radius math (15GR = m.p.h.²) & turning OFF Driving Line',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 62.5,
          difficulty: 1,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'On',
            stm: 'On',
            abs: 'On',
            steering: 'Normal'
          },
          theory: {
            title: 'Line Fundamentals & Corner Radius Math',
            content: `Welcome to Module 2! Today we begin **Skip Barber Chapter 2: The Three Basics**. Our first goal is mastering the **Racing Line** and turning off the **Driving Line Assist**.

### The Physics of Corner Radius
The fundamental aim of driving a corner is to travel on an arc with the largest possible radius. The physics equation governing cornering speed is:
**15 × G × R = m.p.h.²**
*(where G is available tire cornering force, and R is corner radius in feet)*

### Why "The Line" Is 89% Faster
In a standard 90-degree corner (like Sebring T7 or Lime Rock T1):
- **Inside Curb Path**: Radius = 103 ft → Max speed = **39.3 m.p.h.**
- **Outside Edge Path**: Radius = 130 ft → Max speed = **44.1 m.p.h.**
- **The Racing Line (Outside → Inside → Outside)**: Radius = 195 ft → Max speed = **54.0 m.p.h.**

Driving the proper line increases your corner arc radius by **89%**, giving you a **37% speed advantage** for only 4.8% extra distance traveled!

### Today's Action: Driving Line OFF
Turn off Forza's Driving Line assist. Instead of following glowing green arrows on the track surface, look ahead for physical track reference points: Turn-in marker, Apex curb, and Track-out edge.`,
            keyTakeaways: [
              'Maximizing corner arc radius increases maximum achievable cornering speed',
              'The racing line turns tight corners into sweeping arcs using the full width of the track',
              'Without the driving line guide, your eyes must look ahead to find natural track reference markers'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Corner radius feel & driving line removal',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Turn 1 Arc Feel', desc: 'Drive Turn 1 at 70 km/h using inside path vs full outside-inside-outside arc to feel radius difference.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Visual Reference Spotting', desc: 'Identify turn-in point, apex curb, and track-out point for all 7 corners of Lime Rock Park.', reps: 3, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Line Arc Sweep (No Line Guide)', desc: 'Drive 4 clean laps using maximum road width with Driving Line OFF.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'Driving Line-Free Stint',
            focus: 'Using full road width without visual line guide',
            laps: 5,
            instructions: [
              'Verify Driving Line assist is set to OFF in Forza Motorsport settings.',
              'Drive 5 focused laps at Lime Rock Park in the Mazda MX-5 Cup.',
              'Position your tires right at the outside track edge on entry, clip the inside apex curb, and track out fully to the outside edge.'
            ]
          },
          challenge: {
            title: 'Apex Curb Precision Challenge',
            type: 'technique',
            description: 'Complete 5 consecutive laps clipping within 1 foot of the apex curbs on Turn 1, Turn 3, and Turn 7 without the driving line guide.',
            criteria: '5 clean laps with precise apex clipping logged.'
          },
          assessment: {
            title: 'Driving Line Removal Assessment',
            criteria: 'Demonstrated precise corner radius maximization and visual reference identification without driving line assist.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Visual Replay Line Inspection',
            prompts: [
              { key: 'trackWidthUsage', label: 'Track Width Usage', question: 'In replay camera view, were your outside tires within 1 foot of the track edge at turn-in and track-out?' },
              { key: 'lineConsistency', label: 'Line Repeatability', question: 'Did your corner entry arc look identical on every lap without the visual line guide?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 1,
            defaultConfidence: 3,
            resetPrompt: 'Driving without the green line guide feels unfamiliar at first. Trust your eyes looking far ahead down the track.'
          },
          sessionReflection: {
            questions: [
              'How did driving the outside-inside-outside line change the stability and speed of the car through Turn 1?',
              'Which corner at Lime Rock was hardest to visually judge without the driving line guide?',
              'What physical landmark did you use as your turn-in reference for Turn 7 (Downhill)?'
            ]
          }
        },
        {
          id: 2,
          title: 'The Apex Spectrum: Early vs Late Apex',
          focus: 'Understanding line errors & late apex safety',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 62.0,
          difficulty: 1,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'On',
            stm: 'On',
            abs: 'On',
            steering: 'Normal'
          },
          theory: {
            title: 'Early vs. Late Apexing & Common Line Errors',
            content: `Today we examine the single most common mistake made by both novice and experienced racers: **Turning In Too Early**.

### The Anatomy of an Early Apex
When you turn into a corner too early:
1. You enter on a very large, comfortable radius.
2. But late in the corner, your car is forced onto a **tighter arc** (e.g. radius shrinks from 300 ft down to 75 ft!).
3. To stay on the track, you must either turn the wheel violently past the tire grip limit OR lift off throttle and lose massive exit speed.

### Primary Symptom of Early Apexing
If you feel the need to **increase your steering angle past the apex**, you turned in too early!

### The Late Apex Solution
Turning in slightly later than the geometric center creates a **late apex**. This leaves extra road at corner exit, allowing you to unwind steering early and squeeze full throttle sooner onto following straights.

Skip Barber advice: *"When learning a new track, intentionally turn in later than you think you should. Erring on the side of a late apex is always safer and faster."*`,
            keyTakeaways: [
              'Turning in too early forces a tight radius at corner exit, leading to running off track or losing speed',
              'If you have to turn the wheel harder AFTER the apex, you apexed too early',
              'A late apex is safer, opens up the corner exit, and lets you get on throttle sooner'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Early vs late apex entry comparison',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Early Apex Pinch Feel', desc: 'Intentionally turn in early at Turn 3 (Left-hander) to feel how the exit radius pinches your trajectory.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Late Apex Exit Squeeze', desc: 'Turn in 3 meters later at Turn 3, clipping late apex and unwinding wheel smoothly onto short straight.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Late Apex Precision Sweep', desc: 'Execute late apex lines across all 7 corners of Lime Rock Park.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'Late Apex Stint',
            focus: 'Eliminating early turn-in errors',
            laps: 5,
            instructions: [
              'Drive 5 laps at Lime Rock Park focusing on late turn-in points.',
              'Pay special attention to Turn 3 (Left-hander) and Turn 7 (Downhill)—delay turn-in by 2-3 meters to open up corner exit.'
            ]
          },
          challenge: {
            title: 'Late Apex Consistency Challenge',
            type: 'technique',
            description: 'Complete 4 consecutive laps with late apex placement on Turn 3 and Turn 7, exiting with zero post-apex steering increases.',
            criteria: '4 clean late-apex laps logged.'
          },
          assessment: {
            title: 'Apex Placement Assessment',
            criteria: 'Demonstrated ability to delay turn-in and achieve late apexing on key corners.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Apex Placement Audit',
            prompts: [
              { key: 'apexPoint', label: 'Apex Touchpoint', question: 'Did your inside tire touch the apex curb at the midpoint or late-point of the corner?' },
              { key: 'exitSteeringUnwind', label: 'Steering Unwind', question: 'Were you able to unwind steering smoothly as you passed the apex without adding extra lock?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 1,
            defaultConfidence: 3,
            resetPrompt: 'Waiting that extra fraction of a second before turn-in requires patience. Remind yourself: late turn-in equals fast exit!'
          },
          sessionReflection: {
            questions: [
              'What physical difference did you feel in car stability when switching from early turn-in to late turn-in?',
              'Did you notice higher exit speeds leading onto the main straight after late-apexing Turn 7?',
              'How will you adjust your turn-in visual markers for Session 3?'
            ]
          }
        },
        {
          id: 3,
          title: 'Visual Reference Point Mastery',
          focus: 'Building consistent turn-in, apex & track-out reference markers',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 61.5,
          difficulty: 2,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'On',
            stm: 'On',
            abs: 'On',
            steering: 'Normal'
          },
          theory: {
            title: 'Building Permanent Track Reference Points',
            content: `Skip Barber quote: *"I absolutely use reference points around the track to keep on the line. If they're there, by God, I'll find them. It gives you consistency."* — Robbie Buhl

### Why Reference Points Are Mandatory
Without fixed visual reference points, your brain is guessing turn-in and braking spots on every lap. Guessing leads to erratic entry speeds, missed apexes, and inconsistent lap times.

### Three Essential References Per Corner
1. **TURN-IN MARKER**: A concrete patch, grass seam, brake board, or curbing start where you initiate steering turn.
2. **APEX MARKER**: The exact point on the inside curb where your tires come closest to the edge.
3. **TRACK-OUT MARKER**: The painted line or curb edge where your car reaches the outside boundary under full acceleration.

### Eyes-Up Vision Rule
Your eyes must always look **one step ahead** of where your car currently is:
- While on the straight → Look for Turn-In Marker
- At Turn-In → Shift eyes to Apex Marker
- At Apex → Shift eyes to Track-Out Marker & distant straightaway`,
            keyTakeaways: [
              'Fixed visual landmarks eliminate guessing and create sub-second lap consistency',
              'Every corner requires three distinct reference points: Turn-In, Apex, and Track-Out',
              'Keep your eyes scanning ahead to your next reference point before the car arrives there'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Reference point identification & vision scanning',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Turn-In Call-Out', desc: 'Drive 2 slow laps calling out your turn-in reference points aloud as you pass them.', reps: 2, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Eyes-Up Vision Scanning', desc: 'Practice shifting eyes to apex before turning wheel in Turns 1, 3, 5, and 7.', reps: 4, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: '3-Lap Consistency Benchmark', desc: 'Drive 3 continuous laps aiming for minimum lap time variance using fixed markers.', reps: 3, time: '10 min' }
            ]
          },
          practical: {
            title: 'Reference Point Commitment Stint',
            focus: 'Repeatable visual execution',
            laps: 6,
            instructions: [
              'Drive 6 laps at Lime Rock Park hitting your chosen visual markers on every single lap.',
              'Log your lap times and aim for sub-0.5s variance between laps.'
            ]
          },
          challenge: {
            title: 'Lap Time Consistency Challenge',
            type: 'laptime',
            description: 'Complete 3 consecutive laps with lap time variance under 0.4 seconds using fixed visual reference points.',
            criteria: 'Lap time variance < 0.4s achieved.'
          },
          assessment: {
            title: 'Visual Reference Assessment',
            criteria: 'Achieved consistent lap times by executing fixed turn-in, apex, and track-out reference markers.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Consistency Review',
            prompts: [
              { key: 'turnInMarkerConsistency', label: 'Turn-In Consistency', question: 'Did your car initiate turn-in at the exact same physical spot on all 3 benchmark laps?' },
              { key: 'apexPrecision', label: 'Apex Touch Point', question: 'Did the car hit the apex curb within 3 inches on consecutive laps?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: 'Consistency comes from clarity. If you miss a marker, pick a clearer visual landmark on the next lap.'
          },
          sessionReflection: {
            questions: [
              'What specific reference points did you use for Turn 1 (Big Bend) and Turn 5 (West Bend)?',
              'Did shifting your vision ahead to the apex early help smooth out your steering inputs?',
              'How confident do you feel in your racing line as we prepare to turn OFF Traction Control in Week 2?'
            ]
          }
        },
        {
          id: 4,
          title: 'Corner Exit Speed & Disabling TCS / STM',
          focus: 'Friction circle, longitudinal weight transfer & turning OFF TCS & STM',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 61.0,
          difficulty: 2,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'On',
            steering: 'Simulation'
          },
          theory: {
            title: 'Corner Exit Speed & Disabling Traction Control (TCS & STM)',
            content: `Welcome to Week 2! Today we take a major step toward raw car control: **Traction Control (TCS) and Stability Management (STM) are OFF**, and **Steering is set to Simulation**.

### Why Exit Speed Is King
Once you master the line, carrying exit speed onto straightaways is the primary way to lower lap times. Carrying just 1 m.p.h. extra speed out of Turn 7 gains you car lengths down the entire main straight!

### Throttle & Weight Transfer Dynamics
When you accelerate, weight shifts **REARWARD**:
- Squeezing throttle transfers weight to the rear tires, increasing rear grip.
- **Abrupt throttle stabs**: Unloads front tires violently, causing front understeer push OR breaking rear traction into a spin!
- **Smooth progressive throttle**: Squeezing pedal over 2 seconds matches steering unwind, delivering maximum rear drive without wheelspin.

### TCS OFF Golden Rule
*A gradual increase in throttle will tend to create understeer. An abrupt application of throttle will tend to create oversteer.*`,
            keyTakeaways: [
              'With TCS and STM OFF, rear wheel traction is 100% dependent on your pedal squeeze',
              'Squeeze throttle progressively as steering unwinds—never slam the pedal while steering wheel is turned',
              'Simulation steering delivers raw, direct force feedback from the tires'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Throttle squeeze & rear traction control',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Standing Start Throttle Squeeze', desc: 'From 2nd gear standstill, compare slamming throttle vs squeezing over 2 seconds to feel rear tire spin.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Steering Unwind & Throttle Sync', desc: 'Practice squeezing throttle in sync with unwinding steering at Turn 7 exit.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'TCS-Free Clean Lap Sweep', desc: 'Drive 4 clean laps managing rear traction without TCS intervention.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'TCS-Free Weight Transfer Stint',
            focus: 'Pedal modulation with Traction Control OFF',
            laps: 5,
            instructions: [
              'Verify Traction Control (TCS) and Stability Control (STM) are set to OFF in Forza settings.',
              'Drive 5 clean laps at Lime Rock Park in the Mazda MX-5 Cup.',
              'Focus on squeezing throttle smoothly as you unwind the wheel out of Turn 3, Turn 5, and Turn 7.'
            ]
          },
          challenge: {
            title: 'TCS-Free Control Challenge',
            type: 'technique',
            description: 'Complete 4 consecutive clean laps with TCS and STM OFF without triggering rear wheelspin or spinning out.',
            criteria: '4 clean TCS-free laps completed.'
          },
          assessment: {
            title: 'TCS/STM Removal Assessment',
            criteria: 'Successfully controlled rear wheel traction and chassis stability with TCS and STM disabled.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Traction Audit',
            prompts: [
              { key: 'wheelspinCheck', label: 'Rear Tire Spin', question: 'Did you hear tire squeal or see rear fishtailing on corner exit?' },
              { key: 'throttleSqueezeRamp', label: 'Pedal Application Rate', question: 'Was throttle applied linearly over 2 seconds as steering unwound?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: 'With TCS OFF, your foot is the traction control computer. If the rear steps out, breathe out and ease off throttle slightly.'
          },
          sessionReflection: {
            questions: [
              'How did the car feel more alive or responsive with Traction Control and Stability Control OFF?',
              'Did you experience any rear wheelspin or understeer push when accelerating out of Turn 3?',
              'What throttle pedal technique will you practice in Session 5 to handle oversteer?'
            ]
          }
        },
        {
          id: 5,
          title: 'Oversteer & Trailing Throttle Balance',
          focus: 'Lift-off oversteer mechanics & throttle corrections',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 60.5,
          difficulty: 3,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'On',
            steering: 'Simulation'
          },
          theory: {
            title: 'Oversteer, Understeer, & Trailing Throttle Oversteer (TTO)',
            content: `Today we master chassis balance and oversteer recovery.

### Defining Cornering Balance
- **UNDERSTEER**: Front tires reach grip limit first → Car slides nose-first away from turn-in.
- **OVERSTEER**: Rear tires reach grip limit first → Rear end slides wider than front tires.

### Trailing Throttle Oversteer (TTO)
When you are cornering near the limit and suddenly **release (lift off) the throttle**:
1. Engine deceleration shifts weight off the rear tires onto the front.
2. The rear tires lose traction, causing the rear end to swing outward.

### The 3-Step Oversteer Recovery Sequence
From Skip Barber:
1. **CORRECTION**: Turn the steering wheel toward the direction the rear end is sliding (opposite lock).
2. **PAUSE**: Momentarily hold the correction steering angle while rear slide decelerates and halts.
3. **RECOVERY**: Rapidly unwind the wheel back to straight *before* momentum snaps the car back in the opposite direction!

*Key Rule: Use maintenance throttle (light touch) to restore rear tire traction during the slide.*`,
            keyTakeaways: [
              'Lifting off throttle mid-corner shifts weight forward, inducing trailing throttle oversteer',
              'Oversteer recovery requires: Correction (opposite lock) → Pause → Recovery (unwind)',
              'Maintain light throttle to keep rear tires loaded during slide recovery'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Trailing throttle rotation & slide correction',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Intentional Throttle Lift Rotation', desc: 'At Turn 3 entry, breathe off throttle to feel rear end rotate subtly into the corner.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Correction-Pause-Recovery Feel', desc: 'Induce a mild tail slide and practice opposite lock + pause + unwind sequence.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Oversteer Control Stint', desc: 'Drive 4 clean laps actively managing chassis rotation through throttle balance.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'Chassis Balance & Slide Recovery Stint',
            focus: 'Controlling oversteer and trailing throttle balance',
            laps: 6,
            instructions: [
              'Drive 6 laps at Lime Rock Park.',
              'Use subtle throttle lifts to help rotate the car into Turn 1 and Turn 5.',
              'If the rear steps out, apply quick opposite lock steering, pause, and unwind smoothly.'
            ]
          },
          challenge: {
            title: 'Slide Recovery Challenge',
            type: 'technique',
            description: 'Catch and recover from 3 minor rear tire slides using opposite lock and maintenance throttle without spinning or leaving the track.',
            criteria: '3 clean slide recoveries completed.'
          },
          assessment: {
            title: 'Oversteer Recovery Assessment',
            criteria: 'Demonstrated proper Correction-Pause-Recovery steering sequence and throttle balance during rear rotation.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Oversteer Audit',
            prompts: [
              { key: 'oppositeLockAngle', label: 'Counter-Steer Angle', question: 'Did your steering wheel turn into the slide smoothly without over-correcting?' },
              { key: 'snapOversteerAvoidance', label: 'Recovery Timing', question: 'Did you unwind steering fast enough at the pause to prevent a secondary snap slide?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: 'Oversteer is not a failure—it is feedback from the chassis. Stay relaxed in your shoulders and react calmly.'
          },
          sessionReflection: {
            questions: [
              'Were you able to feel the moment the rear tires lost traction during throttle lift?',
              'Did you successfully execute the Pause phase before unwinding your steering correction?',
              'How will you apply throttle balance to carry higher exit speed in Session 6?'
            ]
          }
        },
        {
          id: 6,
          title: 'Maximizing Straightaway Speed (Exit Priority)',
          focus: 'Exit speed compounding & the Slow-In / Fast-Out philosophy',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 60.0,
          difficulty: 3,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'On',
            steering: 'Simulation'
          },
          theory: {
            title: 'Exit Speed Compounding & Slow-In / Fast-Out',
            content: `Today we conclude Week 2 by linking corner exit speed directly to straightaway performance.

### The Compounding Effect of Exit Speed
If Driver A exits Turn 7 onto the Sam Pose Straight at **52 m.p.h.** and Driver B exits at **50 m.p.h.**:
- Driver A maintains that 2 m.p.h. advantage down the entire 0.5-mile straightaway.
- Driver A arrives at Turn 1 **several car lengths ahead**, even if both cars have identical engine power!

### The "Slow-In, Fast-Out" Paradigm
- **Over-charging corner entry**: Overshooting brake point forces you to fight for control at the apex, delaying throttle application. You enter fast, but exit SLOW.
- **Slow-In, Fast-Out**: Sacrificing 1 m.p.h. at entry lets you get the car rotated early, pick up full throttle at the apex, and carry maximum speed down the following straight.

### The Golden Rule of Exit Speed
*The earlier you can get to 100% throttle at or near the apex, the faster your lap time will be.*`,
            keyTakeaways: [
              'Exit speed compounds over the entire length of the following straightaway',
              'Slow-in, fast-out entry strategy yields faster lap times than over-charging corner entry',
              'Unwind steering aggressively to get the car straight and achieve 100% throttle as early as possible'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Exit speed prioritization & straightaway launch',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Slow-In / Fast-Out Entry', desc: 'Brake 5 meters earlier into Turn 7 to focus entirely on getting 100% throttle at the apex.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Downhill Exit Launch', desc: 'Maximize exit speed out of Turn 7 (Downhill) onto main straight across 5 attempts.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Main Straight Top Speed Sweep', desc: 'Drive 4 clean laps targeting maximum top speed at the Turn 1 brake board.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'Exit Speed Optimization Stint',
            focus: 'Maximizing top speed on Sam Pose Straight',
            laps: 6,
            instructions: [
              'Drive 6 laps at Lime Rock Park.',
              'Focus on Turn 7 (Downhill exit): Get the car turned early, unwind steering, and squeeze 100% throttle before the apex curb.'
            ]
          },
          challenge: {
            title: 'Straightaway Top Speed Challenge',
            type: 'mechanical',
            description: 'Achieve a top speed of 155+ km/h at the Turn 1 braking marker while setting lap time under 1:00.0 with TCS OFF.',
            criteria: 'Top speed 155+ km/h and lap time under 1:00.0 achieved.'
          },
          assessment: {
            title: 'Exit Speed Mastery Assessment',
            criteria: 'Demonstrated early 100% throttle application and maximum straightaway speed compounding.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Speed Trace Review',
            prompts: [
              { key: 'fullThrottlePoint', label: '100% Throttle Location', question: 'Did 100% throttle application occur at or right before the apex curb of Turn 7?' },
              { key: 'topSpeedDelta', label: 'Straightaway Speed', question: 'What was your highest recorded top speed before Turn 1 braking?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: 'Patience on entry pays massive dividends down the straight. Squeeze the exit!'
          },
          sessionReflection: {
            questions: [
              'Did braking slightly earlier into Turn 7 allow you to pick up full throttle earlier on exit?',
              'What was your top speed at Turn 1 when executing a clean slow-in/fast-out line?',
              'Are you ready for Week 3 where we turn OFF Anti-Lock Brakes (ABS)?'
            ]
          }
        },
        {
          id: 7,
          title: 'Braking Fundamentals & Disabling ABS',
          focus: 'Threshold braking mechanics & turning OFF ABS',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 59.8,
          difficulty: 3,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'Braking Fundamentals & Disabling ABS',
            content: `Welcome to Week 3! Today we disable **Anti-Lock Brakes (ABS)**.

### The Physics of Threshold Braking
Maximum stopping force occurs when the tires are revolving approximately **15% slower** than the actual car speed (the optimal slip ratio).
- **Below 15% slip**: Not using full available tire friction.
- **Above 15% slip**: Tire locks up! Static friction becomes sliding kinetic friction, **reducing stopping power by 30%** and causing flat spots.

### Hydraulic Pressure vs Grip
Pressing the brake pedal forces brake pads against brake rotors.
- Squeezing to **80-85% pedal pressure** matches maximum tire grip for threshold stopping.
- Stabbing to **100% pedal pressure** instantly locks the wheels without ABS!

### Moza R3 Pedal Technique
Without ABS, treat your brake pedal like a pressure scale. Squeeze hard and fast to initial threshold (~80%), then hold steady in straight-line decel.`,
            keyTakeaways: [
              'With ABS OFF, pressing the brake pedal to 100% will lock the front/rear tires',
              'Threshold braking occurs at ~15% wheel slip (roughly 80-85% pedal pressure)',
              'Locking tires reduces stopping force by 30% and destroys steering authority'
            ],
            diagramId: 'ffb-grip-diagram'
          },
          practice: {
            focus: 'Threshold brake pedal feel with ABS OFF',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Find Lockup Pressure', desc: 'On main straight at 120 km/h, squeeze brake progressively until tires chirp/lock. Note pedal distance.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: '80% Threshold Squeeze', desc: 'Practice squeezing rapidly to 80% pressure without exceeding threshold or locking.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'ABS-Free Turn 1 Braking', desc: 'Brake from top speed into Turn 1 using clean threshold pressure without ABS.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'ABS-Free Threshold Stint',
            focus: 'Threshold braking without tire lockups',
            laps: 6,
            instructions: [
              'Verify Anti-Lock Brakes (ABS) are set to OFF in Forza settings.',
              'Drive 6 laps at Lime Rock Park.',
              'Focus on Turn 1 and Turn 5 braking zones: Squeeze brake rapidly to 80% threshold without slamming to 100%.'
            ]
          },
          challenge: {
            title: 'Clean Threshold Challenge',
            type: 'technique',
            description: 'Complete 5 consecutive major braking entries into Turn 1 without locking a tire or flat-spotting.',
            criteria: '5 clean non-locking threshold braking entries logged.'
          },
          assessment: {
            title: 'ABS Removal Assessment',
            criteria: 'Demonstrated precise threshold brake pedal pressure control without ABS intervention.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Lockup Inspection',
            prompts: [
              { key: 'tireSmokeCheck', label: 'Tire Lockup Check', question: 'Did you observe tire smoke or lockup chatter in replay view into Turn 1?' },
              { key: 'stoppingDistance', label: 'Deceleration Rate', question: 'Was your stopping distance short and controlled without locking up?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: 'Locking up without ABS is normal when learning. If you lock, ease off pedal pressure immediately.'
          },
          sessionReflection: {
            questions: [
              'Where is the physical threshold on your Moza R3 brake pedal before lockup occurs?',
              'What sound or FFB cue told you the tires were right at the threshold limit?',
              'How will you adjust lockup recovery in Session 8?'
            ]
          }
        },
        {
          id: 8,
          title: 'Brake Lockup Recovery & Modulation',
          focus: 'Feathering pedal to restore tire rotation & steering authority',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 59.5,
          difficulty: 4,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'Lockup Recovery & Brake Modulation',
            content: `Today we focus on what to do when a tire locks up: **Brake Modulation**.

### What Happens During a Lockup
When brake resistance exceeds maximum tire grip, the wheel stops rotating.
- Steering wheel input becomes completely useless (locked front tires cannot steer).
- Stopping distance increases drastically.

### The Most Common Beginner Mistake
When a novice locks up, their instinct is to **press the brake pedal harder**! This locks the tires further.

### The Modulation Rule
To restore tire rotation and steering control:
1. **RELEASE**: Instantly ease brake pressure off by 15-20% (feathering the pedal).
2. **RE-ROTATE**: The locked tire begins rolling again, restoring 100% full traction.
3. **RE-APPLY**: Gently squeeze back to the 80% threshold level.

*Do not take your foot completely off the brake—just breathe off the pressure enough to let the tire roll!*`,
            keyTakeaways: [
              'Pressing harder during a lockup makes the slide worse; you must release pedal pressure slightly',
              'Feathering brake pressure off by 15-20% restarts tire rotation instantly',
              'Once rotation is restored, re-apply pedal pressure back at the 80% threshold'
            ],
            diagramId: 'ffb-grip-diagram'
          },
          practice: {
            focus: 'Lockup detection & pedal relief modulation',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Intentional Lockup & Release', desc: 'Induce a front lockup intentionally on straightaway, then release pedal 20% to feel tire re-spin.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Feather Modulation Drill', desc: 'Practice rapid 15% pressure release upon hearing tire lock squeal.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Lockup-Free Turn 1 & Turn 5 Sweep', desc: 'Drive 4 clean laps modulating brakes cleanly across all braking zones.', reps: 4, time: '10 min' }
            ]
          },
          practical: {
            title: 'Brake Modulation & Lockup Relief Stint',
            focus: 'Rapid lockup recovery during heavy deceleration',
            laps: 6,
            instructions: [
              'Drive 6 laps at Lime Rock Park with ABS OFF.',
              'If front wheels lock into Turn 1 or Turn 5, instantly feather brake pedal pressure to re-start tire rotation before turning into the corner.'
            ]
          },
          challenge: {
            title: 'Lockup Recovery Challenge',
            type: 'technique',
            description: 'Execute 5 clean corner entries where any tire lockup is modulated and resolved within 0.5 seconds without missing the apex.',
            criteria: '5 clean modulated entries logged.'
          },
          assessment: {
            title: 'Lockup Modulation Assessment',
            criteria: 'Demonstrated immediate pedal pressure modulation to re-start locked tires and maintain steering control.',
            passingScore: 80
          },
          telemetryReflection: {
            title: 'Replay Modulation Audit',
            prompts: [
              { key: 'lockupDuration', label: 'Lockup Duration', question: 'Were tire lockups resolved instantly via pedal release, or did tires slide continuously?' },
              { key: 'turnInControl', label: 'Steering at Entry', question: 'Did the car turn into the apex cleanly after releasing lockup pressure?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 4,
            resetPrompt: 'Relieving brake pressure takes discipline. Stay sensitive in your left/right foot.'
          },
          sessionReflection: {
            questions: [
              'Did feathering the brake pedal 15-20% restore steering authority when front tires locked?',
              'Were you able to re-apply threshold pressure smoothly after restoring tire rotation?',
              'How will you combine brake release with steering turn-in for Session 9 (Trail-Braking)?'
            ]
          }
        },
        {
          id: 9,
          title: 'Trail-Braking & Weight Transfer Entry',
          focus: 'Blending brake release with turn-in to load front tires',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 59.2,
          difficulty: 4,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'Trail-Braking & Weight Transfer Entry',
            content: `Today we conclude Week 3 with the ultimate braking technique: **Trail-Braking**.

### What Is Trail-Braking?
Trail-braking is carrying light, diminishing brake pressure past the turn-in point and all the way to the apex.

### Why Trail-Braking Is Essential
1. **Front Weight Loading**: Braking transfers 250+ lbs of weight to the front tires. Keeping light brake pressure applied as you turn keeps front tires loaded, giving immense front steering grip!
2. **Chassis Rotation**: Light trailing brake torque helps rotate the car toward the apex naturally, reducing steering wheel fight.
3. **Later Braking**: Allows you to brake later because part of your deceleration happens during corner entry arc.

### The Friction Circle Balance
As steering angle increases from 0° → 30° → 60°, brake pedal pressure MUST diminish proportionally from 80% → 40% → 10% → 0% right at the apex curb.`,
            keyTakeaways: [
              'Trail-braking carries light, diminishing brake pressure past turn-in to the apex',
              'Keeps weight on front tires for superior turn-in grip and natural car rotation',
              'Brake pressure must bleed down linearly as steering wheel angle increases'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Trailing brake bleed & steering angle sync',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Straight-Line vs Trail-Brake Comparison', desc: 'Compare fully releasing brakes before turn-in vs trailing 15% brake into Turn 1.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Linear Pressure Bleed', desc: 'Practice trailing brake pressure from 80% down to 0% right at Turn 1 apex curb.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Trail-Braking Sweep', desc: 'Execute trail-braking across Turn 1 (Big Bend), Turn 5 (West Bend), and Turn 6.', reps: 5, time: '10 min' }
            ]
          },
          practical: {
            title: 'Trail-Braking Master Stint',
            focus: 'Carrying diminishing brakes to the apex',
            laps: 7,
            instructions: [
              'Drive 7 laps at Lime Rock Park with ABS OFF.',
              'Practice smooth trail-braking into Turn 1 and Turn 5: Bleed brake pressure down linearly as you increase steering lock toward the apex curb.'
            ]
          },
          challenge: {
            title: 'Trail-Braking Rotation Challenge',
            type: 'technique',
            description: 'Execute smooth trail-braking into Turn 1 and Turn 5 across 5 consecutive laps without locking tires or understeering wide.',
            criteria: '5 clean trail-braked laps logged.'
          },
          assessment: {
            title: 'Trail-Braking Assessment',
            criteria: 'Demonstrated linear brake pressure release synchronized with steering turn-in to achieve apex rotation.',
            passingScore: 85
          },
          telemetryReflection: {
            title: 'Replay Trail-Brake Inspection',
            prompts: [
              { key: 'trailBrakeDepth', label: 'Brake Release Point', question: 'Did brake tail-off reach zero exactly as your inside tire clipped the apex curb?' },
              { key: 'chassisRotation', label: 'Turn-In Responsiveness', question: 'Did the front end turn crisply into the corner without pushing wide?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: 'Trail-braking is an art of finesse. Feel the weight on the front tires through your Moza R3 wheel.'
          },
          sessionReflection: {
            questions: [
              'How did trail-braking change front tire turn-in grip compared to straight-line braking alone?',
              'Did you feel the car rotate more easily toward the apex with light brake pressure applied?',
              'Are you ready for Week 4 where ALL ASSISTS ARE REMOVED for 100% Raw Control?'
            ]
          }
        },
        {
          id: 10,
          title: 'The Four Blocks of Cornering (100% Raw Control)',
          focus: 'Integrating Block 1 (Transition), Block 2 (Decel), Block 3 (Brake-Turn), Block 4 (Exit)',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 59.0,
          difficulty: 4,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'The Four Blocks of Cornering & 100% Raw Control',
            content: `Welcome to Week 4! **ALL ASSISTS ARE OFF** (No Driving Line, No TCS, No STM, No ABS, Simulation Steering ON).

Today we integrate Skip Barber's **Four Blocks of Cornering**:

\`\`\`
[BLOCK 1: Throttle-to-Brake Transition]
   ↓ Rapid lift off throttle → immediate squeeze to threshold (zero coasting)
[BLOCK 2: Straight-Line Deceleration]
   ↓ Hold 80-85% threshold pressure in straight line to shed maximum speed
[BLOCK 3: Brake-Turn & Trail-Brake]
   ↓ Bleed brake pressure down linearly as steering turns in toward apex
[BLOCK 4: Brake-to-Throttle Transition]
   ↓ Complete brake release at apex → squeeze 100% throttle as steering unwinds
\`\`\`

Every single corner on every racetrack is built from these 4 blocks. Operating with zero assists lets you feel all 4 blocks in pure physical harmony!`,
            keyTakeaways: [
              'You are now driving with 100% zero electronic aids—pure raw car control',
              'The 4 Blocks connect straightaway speed, threshold braking, trail-braking, and exit launch into one fluid cycle',
              'Smooth transitions between the 4 blocks eliminate chassis destabilization'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Connecting the 4 blocks of corner entry and exit',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Four Blocks Mental Call-Out', desc: 'Drive 2 laps calling out "Block 1, Block 2, Block 3, Block 4" at Turn 1.', reps: 2, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Block 3 to Block 4 Overlap', desc: 'Focus on seamless transition from trailing brake release to initial throttle squeeze at apex.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Raw Control 4-Block Stint', desc: 'Drive 5 clean laps executing all 4 blocks flawlessly with 100% assists OFF.', reps: 5, time: '10 min' }
            ]
          },
          practical: {
            title: '100% Raw Control 4-Block Stint',
            focus: 'Flawless execution of the 4 cornering blocks',
            laps: 7,
            instructions: [
              'Verify ALL ASSISTS (Line, TCS, STM, ABS) are set to OFF with Sim Steering ON.',
              'Drive 7 continuous clean laps at Lime Rock Park in the Mazda MX-5 Cup.',
              'Execute Block 1 through Block 4 on every corner without lockups or spins.'
            ]
          },
          challenge: {
            title: 'Raw Control Clean Stint Challenge',
            type: 'technique',
            description: 'Complete 5 continuous clean laps with 100% ASSISTS OFF with zero off-track penalties, lockups, or spins.',
            criteria: '5 continuous clean raw-control laps logged.'
          },
          assessment: {
            title: '4-Block Raw Control Assessment',
            criteria: 'Demonstrated seamless integration of all 4 cornering blocks with 100% assists disabled.',
            passingScore: 85
          },
          telemetryReflection: {
            title: 'Replay 4-Block Audit',
            prompts: [
              { key: 'coastingCheck', label: 'Coasting Detection', question: 'Was there any gap between releasing throttle and hitting brakes in Block 1?' },
              { key: 'apexTransition', label: 'Brake-Throttle Swap', question: 'Did throttle application start immediately as brake pressure reached zero at the apex?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: 'You are driving raw! Enjoy the pure physical connection between your hands, feet, and the car.'
          },
          sessionReflection: {
            questions: [
              'Which of the 4 blocks felt most natural to execute today?',
              'Did you notice how smooth pedal transitions prevent chassis unsettle with zero assists?',
              'What lap time did you achieve during your 5 clean laps?'
            ]
          }
        },
        {
          id: 11,
          title: 'Pace Building & Consistency Audit',
          focus: 'Operating at 95% limit with zero assist safety net',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 58.8,
          difficulty: 5,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'Pace Building & Operating at 95% Limit',
            content: `Today we focus on building pace and consistency without over-driving.

### The 95% Rule
When drivers try to push at 100% or 105% of their limit, they lock brakes, slide rear tires, miss apexes, and slow down!
- **95% Pace**: Driving with 5% margin for safety allows your brain to stay calm, hit visual reference points accurately, and maintain sub-second lap time consistency.
- **Smoothness Equals Speed**: A smooth 95% lap with perfect apexes and early throttle exit is consistently faster than an aggressive, ragged 100% attempt.

### Pre-Graduation Pace Target
Today's goal is building a repeatable stint under **59.0s lap pace** at Lime Rock Park with 100% assists OFF.`,
            keyTakeaways: [
              'Driving at 95% of your limit maintains mental clarity and prevents costly driving errors',
              'Sub-second consistency across a 5-lap stint proves true raw car control mastery',
              'Focus on smooth inputs and exact visual reference markers rather than forcing lap times'
            ],
            diagramId: 'pedal-squeeze-diagram'
          },
          practice: {
            focus: 'Building pace & stint consistency',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '3-Lap Rhythm Build', desc: 'Drive 3 laps establishing a calm, relaxed driving rhythm at 90% pace.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Apex Speed Tuning', desc: 'Fine-tune minimum corner speed through Turn 1 and Turn 6 across 4 laps.', reps: 4, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: '6-Lap Benchmark Stint', desc: 'Drive 6 continuous laps pushing for sub-59.0s pace with minimum variance.', reps: 6, time: '12 min' }
            ]
          },
          practical: {
            title: 'Pace & Consistency Audit Stint',
            focus: 'Repeatable raw control lap pace',
            laps: 8,
            instructions: [
              'Drive 8 continuous laps at Lime Rock Park with 100% ASSISTS OFF.',
              'Target consistent lap times under 59.0s with lap variance under 0.3 seconds.'
            ]
          },
          challenge: {
            title: 'Sub-0.3s Variance Challenge',
            type: 'laptime',
            description: 'Complete 5 consecutive clean laps with lap time variance under 0.3 seconds and target lap time under 58.8s.',
            criteria: '5-lap stint with variance < 0.3s achieved.'
          },
          assessment: {
            title: 'Pace & Consistency Assessment',
            criteria: 'Demonstrated sub-0.3s lap time variance and clean raw car control at 95% limit.',
            passingScore: 90
          },
          telemetryReflection: {
            title: 'Replay Stint Audit',
            prompts: [
              { key: 'lapTimeVariance', label: 'Lap Variance', question: 'What was your fastest lap and slowest lap during your 5-lap benchmark stint?' },
              { key: 'errorFreeStint', label: 'Clean Execution', question: 'Were all 5 laps completed without a single lockup, slide, or off-track excursion?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: 'You have built real driving skill. Trust your muscle memory and stay relaxed.'
          },
          sessionReflection: {
            questions: [
              'Did driving at 95% feel smoother and faster than trying to force 100% pace?',
              'What was your lap time variance across your 5 benchmark laps?',
              'Are you ready for Session 12 Graduation?'
            ]
          }
        },
        {
          id: 12,
          title: 'Module 2 Graduation: Raw Car Control Master',
          focus: 'Final 10-lap graduation stint with ALL ASSISTS OFF',
          car: 'Mazda MX-5 Cup',
          track: 'Lime Rock Park (Full Circuit)',
          targetLapTime: 58.5,
          difficulty: 5,
          assistsConfig: {
            transmission: 'Automatic (No Clutch)',
            drivingLine: 'Off',
            tcs: 'Off',
            stm: 'Off',
            abs: 'Off',
            steering: 'Simulation'
          },
          theory: {
            title: 'Module 2 Graduation: Raw Car Control Master',
            content: `Congratulations on reaching Session 12 of Module 2! Over the last 30 days and 12 sessions, you have transformed from a complete beginner into a raw car control driver.

### Summary of What You Mastered (Skip Barber Chapter 2):
1. **THE RACING LINE**: Corner radius math ($15GR = m.p.h.^2$), maximizing arc width, eliminating early apex errors, and hitting fixed visual reference markers without a driving line assist.
2. **CORNER EXIT SPEED**: Disabling TCS & STM, managing longitudinal weight transfer, trailing throttle balance, oversteer recovery (Correction-Pause-Recovery), and early 100% throttle launch onto straights.
3. **BRAKING & WEIGHT TRANSFER**: Disabling ABS, threshold braking at 15% slip ratio, lockup relief modulation, trail-braking to the apex, and integrating the Four Blocks of Cornering.

Today is your **Final 10-Lap Graduation Stint**. Drive 10 continuous clean laps at Lime Rock Park in the Mazda MX-5 Cup with 100% ASSISTS OFF!`,
            keyTakeaways: [
              'You have mastered raw car control with zero electronic aids (Line, TCS, STM, ABS OFF)',
              'You understand the physics of racing line arcs, exit speed compounding, and threshold/trail braking',
              'You are fully certified and ready for Module 3: Advanced Car Control & Racecraft!'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Graduation stint warmup & pace verification',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '2-Lap Tire Warmup', desc: 'Drive 2 slow laps bringing tires up to temperature and verifying pedal feel.', reps: 2, time: '4 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Benchmark Pace Trial', desc: 'Drive 3 laps verifying target pace under 58.5s with zero assists.', reps: 3, time: '6 min' },
              { id: 'hard', level: '🔴 Hard', title: '10-Lap Graduation Stint', desc: 'Complete 10 continuous clean laps for Module 2 graduation.', reps: 10, time: '18 min' }
            ]
          },
          practical: {
            title: 'The Module 2 Graduation Stint',
            focus: '10 continuous clean laps with 100% ASSISTS OFF',
            laps: 10,
            instructions: [
              'Verify ALL ASSISTS (Driving Line, TCS, STM, ABS) are set to OFF with Sim Steering ON.',
              'Drive 10 continuous clean laps at Lime Rock Park in the Mazda MX-5 Cup.',
              'Execute threshold braking, trail-braking, apex clipping, smooth throttle squeeze, and eyes-up vision.',
              'Aim for 10 continuous clean laps with target pace under 58.5s!'
            ]
          },
          challenge: {
            title: 'Module 2 Graduation Benchmark',
            type: 'mechanical',
            description: 'Complete 10 continuous clean laps with 100% ASSISTS OFF in the Mazda MX-5 Cup at Lime Rock Park, setting a personal best lap under 58.5s.',
            criteria: 'Module 2 Graduation Benchmark Achieved! Module 2 Completed.'
          },
          assessment: {
            title: 'Module 2 Graduation Assessment',
            criteria: 'Completed 10 continuous clean laps with ALL ASSISTS OFF, demonstrating total mastery of Skip Barber Chapter 2 raw car control principles.',
            passingScore: 90
          },
          telemetryReflection: {
            title: 'Module 2 Final Telemetry & Replay Audit',
            prompts: [
              { key: 'graduationPaceVariance', label: '10-Lap Stint Variance', question: 'What was your average lap time and total variance across your 10 graduation laps?' },
              { key: 'rawControlConfidence', label: 'Raw Control Mastery', question: 'How confident do you feel controlling the car with 100% assists OFF compared to Day 1?' }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: 'Congratulations! Take a deep breath and celebrate mastering raw car control.'
          },
          sessionReflection: {
            questions: [
              'What was your single biggest breakthrough during Module 2?',
              'Which assist removal (Line, TCS/STM, ABS) taught you the most about real car physics?',
              'What is your next goal in Apex Sim Racing Coach?'
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Skip Barber: The Real-World Line",
      subtitle: "30-Day Raw Car Control & Racing Line Mastery",
      description: "Master Skip Barber Chapter 3: The Real-World Line in Forza Motorsport 2023. Transition off driving assists (STM, TCS, Line, ABS) in the Mazda MX-5 Cup at Lime Rock Park across 12 telemetry-backed sessions.",
      duration: "12 Sessions (30 Days)",
      sessions: [
        {
          id: 1,
          title: "Real-World Line vs. Geometric Line",
          focus: "Geometric vs real-world racing line & sight picture",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 61.5,
          difficulty: 1,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Braking Only",
            tcs: "Sport",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Real-World Line vs. Geometric Line & The Sight Picture",
            content: `Welcome to Module 3! Based on Skip Barber Chapter 3: The Real-World Line, we shift from basic geometry to real-world racing physics.

### The Real-World Line Principle
The basic geometric line maximizes corner radius assuming constant speed. But real racecars accelerate, brake, and change speed dynamically! The real-world line delays turn-in and shifts the apex later to maximize exit velocity onto straights.

### Developing Your "Sight Picture"
Instead of staring at your front bumper, cultivate a mental visual overlay ("sight picture") connecting turn-in, apex, and track-out before turning the wheel.

### Today's Goal
Explore Turn 1 & 2 (Big Bend) at Lime Rock Park. Focus on delaying turn-in past the outer curb marker and visual anchoring.`,
            keyTakeaways: [
              "Real-world racing lines prioritize exit acceleration over entry geometry",
              "Developing a visual sight picture allows proactive line planning 200 feet ahead",
              "Turning off STM allows the Mazda MX-5 rear end to rotate naturally under turn-in"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Big Bend line geometry & sight picture drills",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Big Bend Radius Exploration", desc: "Drive T1 at 70 km/h testing early vs late turn-in arcs.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Sight Picture Visual Anchoring", desc: "Spot T1 apex curb across the corner before initiating steering input.", reps: 3, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Delayed Turn-in Precision", desc: "Drive 4 laps delaying T1 turn-in by 5 meters to open up exit arc.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Big Bend Sight Picture Stint",
            focus: "Late apex arc & visual target scanning",
            laps: 5,
            instructions: [
              "Drive 5 clean laps at Lime Rock Park.",
              "Focus on Turn 1 & 2 (Big Bend): Delay turn-in past the outer curb, lock eyes onto the inner apex curb, and unwind steering to track-out."
            ]
          },
          challenge: {
            title: "Big Bend Apex Precision Challenge",
            type: "technique",
            description: "Complete 3 consecutive clean laps clipping the Big Bend inner apex curb within 2 feet without touching outer grass.",
            criteria: "3 clean precision laps completed."
          },
          assessment: {
            title: "Sight Picture & Apex Precision Assessment",
            criteria: "Demonstrated delayed turn-in, visual sight picture targeting, and clean apex execution at Big Bend.",
            passingScore: 80
          },
          telemetryReflection: {
            title: "Friction Circle G-Force Audit",
            prompts: [
              { key: "lateralGSmoothness", label: "Friction Circle Shape", question: "Did your friction circle trace show a smooth rounded outer boundary entering Big Bend?" },
              { key: "turnInApexVisual", label: "Apex Targeting", question: "Were you looking at the apex curb before turning the Moza R3 wheel?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: "Keep your eyes far down the track. Looking ahead calms your hands and removes corner panic."
          },
          sessionReflection: {
            questions: [
              "Did my eyes look far enough down the track into Big Bend, or was I staring close to the hood?",
              "How did delaying turn-in change the car's exit trajectory onto the short chute?",
              "What visual reference point will I anchor to for Session 2?"
            ]
          }
        },
        {
          id: 2,
          title: "Diagnosing Early Apexing & Exit Pinch",
          focus: "Early apex diagnosis, recognizing early turn-in 90ft before point A",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 61.0,
          difficulty: 2,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Braking Only",
            tcs: "Sport",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Early Apex Diagnosis & The Exit Pinch",
            content: `Skip Barber Chapter 3 highlights the single most common mistake in racing: **The Early Apex**.

### The Early Apex Trap
Turning in just 3 car lengths early creates a broad arc initially, making you feel fast at entry. But at the apex, the car is pointed off the road! You are forced to tighten steering ("pinch") or run off the track.

### The Champion Driver's Secret
*"The champion recognizes the mistake earlier—just 5 car lengths earlier—allowing them to stay on track."* — Skip Barber (pg 38)

### The Early Apex Cure
If you realize you turned in early: Immediately breathe off throttle, hold light brake pressure, and slow the car *before* the apex to rotate the chassis.`,
            keyTakeaways: [
              "Early turn-in guarantees an early apex and forced exit pinching",
              "Recognizing early apex symptoms 90 feet before the corner allows proactive correction",
              "If turning early, slow the car down and rotate before reaching the apex curb"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Early apex detection & recovery in Turn 3/4",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Intentional Early Turn-In Sensation", desc: "Turn in 2 car lengths early into Turn 3 to feel exit pinching.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Early Detection & Lift Rotation", desc: "Recognize early arc 50ft before apex and breathe off throttle to rotate chassis.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Pinch-Free Esse Stint", desc: "Drive 4 laps through Turn 3 & 4 with zero counter-steer or exit grass touches.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Esse Combo Early Apex Audit",
            focus: "Eliminating early turn-in through Turn 3 & 4",
            laps: 5,
            instructions: [
              "Drive 5 laps at Lime Rock Park focusing on Turn 3 & 4 (The Esse).",
              "Delay turn-in until the car is aligned to clip the late apex without tightening steering at exit."
            ]
          },
          challenge: {
            title: "Zero-Pinch Esse Challenge",
            type: "technique",
            description: "Complete 4 consecutive laps through the Esse combo unwinding steering smoothly at exit without scrubbing off speed.",
            criteria: "4 clean laps with zero exit pinching."
          },
          assessment: {
            title: "Early Apex Diagnosis Assessment",
            criteria: "Recognized early turn-in errors before apex and unwound steering cleanly at track-out.",
            passingScore: 80
          },
          telemetryReflection: {
            title: "Steering Trace & Exit Pinch Review",
            prompts: [
              { key: "steeringUnwindTrace", label: "Exit Steering Trace", question: "Did your steering angle unwind continuously at exit, or did it spike past the apex?" },
              { key: "exitSpeedRetained", label: "Exit Velocity", question: "Did early apex corrections preserve corner exit speed onto the back chute?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: "Mistakes happen early in the corner. Catching them early gives you time to fix them smoothly."
          },
          sessionReflection: {
            questions: [
              "Did I feel the early turn-in mistake *before* reaching the apex, or only at track-out?",
              "What physical cue told me that my turn-in point was correct?",
              "How will I adjust my vision for Session 3?"
            ]
          }
        },
        {
          id: 3,
          title: "Reference Points vs. Intuitive Sight Picture",
          focus: "Building fixed visual cues & intuition without line guide",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 60.5,
          difficulty: 2,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Braking Only",
            tcs: "Sport",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Reference Points vs. Visual Intuition",
            content: `In Skip Barber Chapter 3, IndyCar driver Brian Till explains: *"I start with fixed reference points... as the weekend goes on, the visual picture becomes implanted in my mind."*

### Building Your Visual Framework
- **Braking Reference**: A brake board, curb start, or shadow.
- **Turn-in Reference**: Paint line end or grass patch.
- **Apex Reference**: Inner curbing clip point.
- **Track-Out Reference**: Outer rumble strip end.

### Shifting to Intuitive Flow
As repetitions build, explicit reference points merge into a fluid visual sight picture. Today we solidify reference points at Turn 5 (No-Name Corner) and prepare to turn OFF TCS in Week 2.`,
            keyTakeaways: [
              "Reference points provide objective markers for consistent braking and turn-in",
              "Over time, hard markers evolve into a fluid visual sight picture",
              "Scanning sequential reference points keeps driving proactive rather than reactive"
            ],
            diagramId: "hardware-driver-software"
          },
          practice: {
            focus: "Reference point identification & horizon scanning",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Reference Marker Mapping", desc: "Map explicit brake, turn-in, apex, and exit markers for all 7 Lime Rock turns.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Visual Scanning Sequence", desc: "Practice calling out 'Brake - Turn - Apex - Exit' 2 seconds before reaching each marker.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Mental Line-Off Stint", desc: "Drive 4 laps ignoring the braking line overlay, relying purely on visual anchors.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Reference Point Integration Stint",
            focus: "Building sub-second lap consistency via visual reference markers",
            laps: 6,
            instructions: [
              "Drive 6 clean laps at Lime Rock Park.",
              "Focus on hitting exact physical reference markers for Turn 1, Turn 5 (No-Name), and Turn 7 (Downhill)."
            ]
          },
          challenge: {
            title: "Sub-0.5s Target Consistency Challenge",
            type: "laptime",
            description: "Complete 4 consecutive laps staying within 0.5 seconds of your target lap time.",
            criteria: "4-lap consistency band < 0.5s achieved."
          },
          assessment: {
            title: "Week 1 Line Fundamentals Benchmark",
            criteria: "Completed 5-lap benchmark stint demonstrating consistent reference point targeting and clean apex execution.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Friction Circle & Reference Point Audit",
            prompts: [
              { key: "gCircleCombined", label: "Combined G-Force Circle", question: "Does your friction circle show smooth combined braking/turning transitions?" },
              { key: "brakeMarkerVariance", label: "Braking Consistency", question: "Were your initial braking points consistent across all 6 laps?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: "Week 1 complete! You have established a solid visual foundation. Ready for TCS-off in Week 2."
          },
          sessionReflection: {
            questions: [
              "Was I driving reactively corner-by-corner, or proactively planning 200 feet ahead?",
              "Which corner felt most natural using physical reference markers?",
              "Am I ready to turn off Traction Control for Week 2?"
            ]
          }
        },
        {
          id: 4,
          title: "Constant Radius Corners & Unwinding the Wheel (TCS OFF)",
          focus: "Constant radius geometry, unwinding wheel, TCS OFF throttle control",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 60.0,
          difficulty: 3,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Constant Radius Corners & TCS-Off Throttle Control",
            content: `Welcome to Week 2! We turn **Traction Control (TCS) OFF** and **Driving Line OFF**.

### Constant Radius Geometry
In a constant radius corner (like Lime Rock Turn 1 & 2 Big Bend arc), the apex is near the midpoint or 7/8 of the way around (pg 40).

### Unwinding the Wheel to Accelerate
With TCS OFF, applying 100% throttle while the Moza R3 wheel is turned will break rear tire traction and spin the Mazda MX-5! You MUST unwind the steering wheel straight *as* you open the throttle.

### String Theory
Imagine a string tied between your big toe and steering wheel: As you unwind the wheel to straight, your toe can press throttle down!`,
            keyTakeaways: [
              "With TCS OFF, throttle application must sync perfectly with unwinding the steering wheel",
              "In constant radius corners, the apex lies near the midpoint or 7/8 point of the arc",
              "Unwinding the wheel opens up tire grip budget for 100% exit acceleration"
            ],
            diagramId: "pedal-squeeze-diagram"
          },
          practice: {
            focus: "TCS-off rear breakaway feel & wheel unwinding",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Rear Traction Breakaway Exploration", desc: "In Big Bend, gently squeeze throttle mid-corner to feel rear tire slip without TCS.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "String Theory Throttle Unwind", desc: "Practice unwinding wheel to straight while rolling throttle 0-100% over 2 seconds.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "TCS-Off Big Bend Stint", desc: "Drive 4 clean laps through Big Bend with zero rear slides or wheelspin.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Big Bend Constant Radius TCS-Off Stint",
            focus: "Linear throttle squeeze & steering unwind",
            laps: 6,
            instructions: [
              "Drive 6 laps at Lime Rock Park with TCS OFF.",
              "Focus on Big Bend: Hold steady mid-corner maintenance throttle, clip apex, and unwind steering to straight before blasting full throttle."
            ]
          },
          challenge: {
            title: "TCS-Off Zero-Spin Challenge",
            type: "technique",
            description: "Complete 4 consecutive laps with TCS OFF with zero rear spins or heavy counter-steer slides.",
            criteria: "4 clean TCS-off laps completed."
          },
          assessment: {
            title: "TCS-Off & Unwinding Assessment",
            criteria: "Demonstrated smooth throttle-steering synchronization without TCS assistance.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Throttle & Steering Synchronization Audit",
            prompts: [
              { key: "throttlePickupTrace", label: "Throttle Squeeze Curve", question: "Is your throttle pickup curve smooth and linear without mid-corner pumping?" },
              { key: "wheelUnwindSync", label: "Steering Unwind Alignment", question: "Did steering angle reach zero as throttle reached 100%?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: "Respect the throttle pedal. Squeeze smoothly like pressing a ripe tomato."
          },
          sessionReflection: {
            questions: [
              "Did I hesitate on throttle due to fear of spinning, or did I sync throttle to wheel unwinding?",
              "At what exact point in Big Bend was it safe to apply 100% throttle?",
              "How did the car feel with both TCS and Driving Line turned OFF?"
            ]
          }
        },
        {
          id: 5,
          title: "Hairpins & The Double-Apex Dilemma",
          focus: "Hairpin apex choices, single late apex vs double apex, exit speed priority",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 59.8,
          difficulty: 3,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Hairpins & The Double-Apex Dilemma",
            content: `Skip Barber Chapter 3 (pg 41-43) explores hairpin geometry. Hairpins create strategic dilemmas:

### Single Late Apex vs. Double Apex
1. **Single Late-Apex**: Deep entry, slow mid-corner rotation, single late apex clip. Straightens the exit arc completely for maximum launch speed.
2. **Double-Apex ("Parking the Car")**: Entry apex -> rotate in middle -> exit apex. High entry speed, but mid-corner speed is compromised.

### The Golden Rule of Hairpins
Entry speed in hairpins is cheap; exit speed onto straightaways is priceless! When a hairpin leads onto a long straight, ALWAYS sacrifice entry speed for a late single-apex exit launch.`,
            keyTakeaways: [
              "Hairpin entry speed should be sacrificed to maximize straightaway exit speed",
              "Single late-apex lines allow getting the car rotated early and driving straight out",
              "Double-apex lines suit wide carousels, but single late-apex wins on tight hairpins leading to straights"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Hairpin line comparison & exit launch",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Single vs Double Apex Line Trial", desc: "Compare single late-apex vs double-apex lines through Big Bend Hook.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Deep Entry & Rotation Drill", desc: "Brake straight, turn late, get direction change done early, and launch out.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Hairpin Exit Speed Sweep", desc: "Drive 4 laps aiming for maximum top speed at Turn 3 braking marker.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Hairpin Exit Launch Stint",
            focus: "Late single-apex execution for maximum exit velocity",
            laps: 6,
            instructions: [
              "Drive 6 laps at Lime Rock Park.",
              "Treat Big Bend as a late single-apex hairpin: Overslow entry slightly, rotate car fully at apex, and get 100% throttle down early."
            ]
          },
          challenge: {
            title: "Maximum Exit Velocity Challenge",
            type: "laptime",
            description: "Set top speed benchmark at Turn 3 entry across 3 consecutive laps.",
            criteria: "Consistent top speed launch achieved."
          },
          assessment: {
            title: "Hairpin Geometry & Exit Priority Assessment",
            criteria: "Executed single late-apex line in hairpin section and maximized exit acceleration.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Speed Trace & Slip Angle Telemetry",
            prompts: [
              { key: "minimumApexSpeed", label: "Apex Speed Location", question: "Did your minimum speed point occur early enough to launch down the straight?" },
              { key: "rearTireSlip", label: "Rear Slip Angle", question: "Did rear tire slip stay within optimal 5-8% acceleration zone on exit?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: "Slow in, fast out. Sacrificing entry speed is the hardest mental hurdle, but yields the fastest lap times."
          },
          sessionReflection: {
            questions: [
              "Was I over-driving corner entry out of impatience, ruining my exit speed?",
              "Which line gave higher exit speed: Single Late Apex or Double Apex?",
              "How will I apply hairpin exit priority in Session 6?"
            ]
          }
        },
        {
          id: 6,
          title: "Decreasing & Increasing Radius Corners",
          focus: "Adapting apex points to decreasing and increasing radius geometry",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 59.5,
          difficulty: 3,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "On",
            steering: "Normal"
          },
          theory: {
            title: "Decreasing & Increasing Radius Corners",
            content: `Not all corners are uniform arcs. Skip Barber Chapter 3 (pg 40-41) breaks down variable radius corners:

### Decreasing Radius Corners (e.g. Turn 5 No-Name Entry)
- Radius tightens as you go through the corner.
- **Apex Rule**: MUST apex much later than halfway point!
- Turning in early causes severe understeer or off-track spin as radius tightens.

### Increasing Radius Corners (e.g. Turn 6 West Bend Exit)
- Radius opens up as you exit.
- **Apex Rule**: Apex earlier than halfway point!
- You can get on throttle earlier because the expanding radius naturally gives you extra road width at exit.`,
            keyTakeaways: [
              "Decreasing radius corners require a late apex and trailing brake pressure deep into the turn",
              "Increasing radius corners allow an earlier turn-in and earlier throttle application",
              "Matching turn-in point to radius change prevents mid-corner panic adjustments"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Variable radius adaptation at Turn 5 and Turn 6",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Decreasing Radius Trail Sensation", desc: "Hold light trail-brake into Turn 5 as radius tightens.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Increasing Radius Early Throttle", desc: "Turn 6 West Bend: Roll on throttle early as radius expands.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Linked Variable Radius Stint", desc: "Drive 4 laps stringing Turn 5 and Turn 6 together with smooth flow.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Variable Radius Integration Stint",
            focus: "Apex positioning for decreasing (T5) and increasing (T6) radius turns",
            laps: 6,
            instructions: [
              "Drive 6 clean laps at Lime Rock Park.",
              "Apply late apex for decreasing radius Turn 5 and earlier throttle roll-on for increasing radius Turn 6."
            ]
          },
          challenge: {
            title: "Seamless Radius Flow Challenge",
            type: "technique",
            description: "Complete 4 consecutive laps through T5 and T6 with zero mid-corner steering corrections or wheelspin.",
            criteria: "4 clean variable-radius laps completed."
          },
          assessment: {
            title: "Week 2 Geometry & TCS-Off Benchmark",
            criteria: "Demonstrated proper apex placement across constant, decreasing, and increasing radius corners with TCS OFF.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Steering & G-Force Dashboard Review",
            prompts: [
              { key: "t5TrailBrakeTrace", label: "T5 Brake Trace", question: "Did brake pressure taper off smoothly deep into decreasing radius Turn 5?" },
              { key: "t6LateralG", label: "T6 Lateral G", question: "Did lateral G hold steady through increasing radius Turn 6 as throttle opened?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: "Week 2 complete! TCS OFF is now second nature. Get ready for raw braking (ABS OFF) in Week 3."
          },
          sessionReflection: {
            questions: [
              "Did I adjust my turn-in point based on the corner radius type?",
              "How confident do I feel driving with TCS and Driving Line completely OFF?",
              "What is my target focus for Week 3?"
            ]
          }
        },
        {
          id: 7,
          title: "Weight Transfer & Threshold Braking (ABS OFF)",
          focus: "Disabling ABS, threshold braking at 80-85% pressure, avoiding front lockup",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 59.2,
          difficulty: 4,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Weight Transfer & Threshold Braking (No ABS)",
            content: `Welcome to Week 3! We turn **Anti-lock Braking System (ABS) OFF** and set steering to **Simulation**.

### The Mechanics of Braking Weight Transfer
Braking shifts vehicle load **forward** onto front tires. Loaded front tires have MORE grip for stopping. But if pedal force exceeds tire download, front tires lock up and slide!

### Threshold Braking Technique
- Without ABS on your Moza R3 pedals, slamming 100% brake pedal WILL lock front wheels instantly.
- **Step 1**: Squeeze brake initial pressure hard to 80-85% in straight line.
- **Step 2**: As speed drops and downforce decreases, progressively **bleed off** brake pressure down to 50%, 20%, 0%.

### Feeling Lockup on Moza R3
When front tires lock, steering wheel force feedback suddenly goes light and limp. Immediately ease off brake pressure 10% to restore tire rotation!`,
            keyTakeaways: [
              "Threshold braking requires hard initial squeeze (80-85%) followed by progressive pressure bleed-off",
              "Lockup occurs when pedal pressure exceeds available tire downforce as speed drops",
              "Feel front tire lockup through Moza R3 FFB lightness and ease off brake immediately to recover"
            ],
            diagramId: "weight-transfer-friction-circle"
          },
          practice: {
            focus: "Straight-line threshold braking & lockup feel",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Lockup Boundary Exploration", desc: "On main straight at 100 km/h, stomp brake to feel front wheel lockup and FFB lightness.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "85%-to-Zero Pressure Bleed-Off", desc: "Squeeze 85% initial brake in T1 braking zone, bleeding off smoothly as speed drops.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "ABS-Off T1 Braking Stint", desc: "Drive 4 laps executing threshold braking into Turn 1 without a single lockup.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Threshold Braking ABS-Off Stint",
            focus: "Progressive brake modulation without ABS intervention",
            laps: 6,
            instructions: [
              "Drive 6 laps at Lime Rock Park with ABS OFF.",
              "Focus on Turn 1 main braking zone: Squeeze 80-85% initial brake in straight line, bleed off smoothly into turn-in point."
            ]
          },
          challenge: {
            title: "Zero-Lockup Braking Challenge",
            type: "technique",
            description: "Complete 4 consecutive heavy braking zones into Turn 1 with zero tire lockup flatlines.",
            criteria: "4 clean ABS-off braking zones completed."
          },
          assessment: {
            title: "Threshold Braking & Lockup Relief Assessment",
            criteria: "Executed 80-85% threshold squeeze and progressive bleed-off without lockup.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Brake Trace & Wheel Speed Telemetry",
            prompts: [
              { key: "brakeBleedTrace", label: "Brake Pressure Curve", question: "Did your brake trace show a hard initial peak followed by a smooth downward slope?" },
              { key: "wheelLockupEvents", label: "Wheel Speed Telemetry", question: "Did front wheel speed match ground speed without lockup drops?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 4,
            defaultFrustration: 2,
            defaultConfidence: 3,
            resetPrompt: "If wheels lock, don't panic. Gently lift brake pressure 10% to let tires roll again."
          },
          sessionReflection: {
            questions: [
              "Did I feel the exact pedal pressure threshold before front tire lockup?",
              "Was my brake release smooth as speed decreased down the braking zone?",
              "How will I combine threshold braking with trail-braking in Session 8?"
            ]
          }
        },
        {
          id: 8,
          title: "Elevation & Camber — The Lime Rock Uphill",
          focus: "Elevation compression grip vs hill-crest unweighting at Turn 5 (The Uphill)",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 59.0,
          difficulty: 4,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Elevation & Camber — The Lime Rock Uphill",
            content: `Skip Barber Chapter 3 (pg 49-50) details the physics of elevation and banking:

### The Compression & Unweighting Cycle
- **Compression at Base**: Running uphill creates massive G-force download on tires, boosting cornering grip!
- **Unweighting at Crest**: At the top crest of the hill, gravity load drops to near ZERO. The car becomes unweighted ("light").

### The Golden Rule of The Uphill (Turn 5)
*Finish all steering direction change during compression at the bottom of the hill!*
Have the Moza R3 wheel completely DEAD-STRAIGHT before crossing the crest. Turning or braking over an unweighted crest causes instant spin-out!`,
            keyTakeaways: [
              "Compression at the base of hills provides massive bonus cornering grip",
              "Hill crests unweight the car, reducing tire traction to near zero",
              "Complete all turning in compression zone so steering is straight before crossing the crest"
            ],
            diagramId: "weight-transfer-friction-circle"
          },
          practice: {
            focus: "Uphill compression turn-in & crest straightening",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Compression Grip Sensation", desc: "Feel heavy G-load at base of Turn 5 Uphill vs lightness at top crest.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Crest Straightening Drill", desc: "Turn early in compression, unwind wheel fully before front tires cross crest.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Full-Pace Uphill Sweep", desc: "Drive 4 laps over The Uphill at full race pace with zero crest tail slide.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Lime Rock Uphill Elevation Stint",
            focus: "Managing compression grip and unweighted crest transition",
            laps: 6,
            instructions: [
              "Drive 6 clean laps at Lime Rock Park.",
              "Focus on Turn 5 (The Uphill): Turn aggressively in the compression zone at the bottom, unwind wheel straight before crossing crest."
            ]
          },
          challenge: {
            title: "Flawless Crest Transition Challenge",
            type: "technique",
            description: "Complete 4 consecutive passes over The Uphill with zero rear instability at hill crest.",
            criteria: "4 clean elevation transitions completed."
          },
          assessment: {
            title: "Elevation & Chassis Unweighting Assessment",
            criteria: "Demonstrated proper compression turn-in and dead-straight wheel alignment over hill crest.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Suspension Travel & G-Force Audit",
            prompts: [
              { key: "suspensionCompression", label: "Suspension Load Trace", question: "Did suspension compress at base of hill and extend fully over crest?" },
              { key: "steeringAngleAtCrest", label: "Crest Steering Lock", question: "Was steering angle zero (straight) at the exact moment of crest unweighting?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 4,
            resetPrompt: "Trust the compression grip at the bottom, respect the lightness at the top."
          },
          sessionReflection: {
            questions: [
              "Did I complete my direction change during compression at the base of the hill?",
              "Was my steering wheel completely straight before crossing the unweighted crest?",
              "What did the chassis feel like as the car unweighted over the top?"
            ]
          }
        },
        {
          id: 9,
          title: "Road Banking & Off-Camber Surface Dynamics",
          focus: "Positive camber grip vs off-camber slip, trail braking to apex",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 58.8,
          difficulty: 4,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Road Banking & Off-Camber Dynamics",
            content: `Skip Barber Chapter 3 (pg 46-48) explains road camber:

### Positive Camber (Banking)
- A 5-degree banked corner (like Lime Rock Turn 7 Downhill entry) pushes down on tires, increasing total download.
- Gives **over 10% extra cornering grip** for free!

### Off-Camber Hazards
- Off-camber slopes away from the corner, reducing tire downforce.
- Car tends to slide wide uncontrollably if entry speed is too high.

### Trail-Braking to the Camber Hook
Trail-brake lightly past turn-in to keep front tires loaded until the car hooks into the banked section of Turn 7!`,
            keyTakeaways: [
              "Banked corners add downforce and increase cornering grip limit by over 10%",
              "Off-camber corners reduce grip and require conservative entry speed",
              "Hooking the inner banked curb allows carrying higher minimum corner speed"
            ],
            diagramId: "weight-transfer-friction-circle"
          },
          practice: {
            focus: "Camber hook utilization in Turn 6 & 7",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Camber Grip Sensation", desc: "Feel extra grip in banked Turn 7 vs flat Turn 3.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Trail-Brake Camber Hook", desc: "Trail-brake into Turn 7 to hook inner cambered curb.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Downhill Exit Launcher", desc: "Drive 4 laps maximizing exit speed off Turn 7 onto front straight.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Downhill Camber Launcher Stint",
            focus: "Trail-braking into positive camber and launching onto main straight",
            laps: 6,
            instructions: [
              "Drive 6 laps at Lime Rock Park with ALL ASSISTS OFF.",
              "Trail-brake into Turn 7, hook inner banked curb, unwind wheel, and launch down front straight."
            ]
          },
          challenge: {
            title: "Sector 3 Personal Best Challenge",
            type: "laptime",
            description: "Set personal best sector time through Turn 6 & 7 across 3 consecutive laps.",
            criteria: "Sector 3 personal best achieved."
          },
          assessment: {
            title: "Week 3 Weight Transfer & Camber Benchmark",
            criteria: "Demonstrated threshold braking, trail-braking, and camber exploitation with ABS & TCS OFF.",
            passingScore: 85
          },
          telemetryReflection: {
            title: "Friction Circle & Lateral G Audit",
            prompts: [
              { key: "peakLateralGInBank", label: "Banked Lateral G", question: "Did peak lateral G increase in banked Turn 7 compared to flat corners?" },
              { key: "trailBrakeToApex", label: "Trail-Brake Duration", question: "Did trail-braking pressure taper off to zero right at the apex clip?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: "Week 3 complete! You are controlling raw physics without electronic safety nets. Week 4 is full mastery."
          },
          sessionReflection: {
            questions: [
              "Could I feel the exact moment road camber assisted front turn-in grip?",
              "Rate my trail-braking modulation confidence without ABS (1-10).",
              "Am I ready for corner grading strategy in Week 4?"
            ]
          }
        },
        {
          id: 10,
          title: "Corner Grading — Type I, Type II & Type III Corners",
          focus: "Strategic corner priority grading: Type I (Exit), Type II (Entry), Type III (Compromise)",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 58.5,
          difficulty: 4,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Corner Grading — Type I, Type II & Type III Corners",
            content: `Welcome to Week 4! We synthesize physics into racetrack strategy. Skip Barber Chapter 3 (pg 54-55) introduces Alan Johnson's **Corner Grading System**:

### The Three Types of Corners
1. **TYPE I (Highest Priority)**: Leads onto a long straight. *Must maximize exit speed at all costs!* (e.g. Lime Rock Turn 7 Downhill & Turn 4 Esse exit).
2. **TYPE II**: At the end of a long straight. *Heavy braking zone; aggressive entry speed.* (e.g. Turn 1 Big Bend entry).
3. **TYPE III (Compromise Corner)**: Precedes another corner. *Must be sacrificed to position car for a Type I corner!* (e.g. Turn 3 Esse entry).

### Strategic Mindset
Never treat all corners as equally important. Prioritize Type I corners to gain massive time down straightaways!`,
            keyTakeaways: [
              "Type I corners lead onto straights and hold highest priority for overall lap time",
              "Type II corners occur at the end of straights and reward late threshold braking",
              "Type III corners must be sacrificed to set up wide exit arcs for downstream Type I turns"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Lime Rock corner priority classification & exit focus",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Track Corner Classification Walkthrough", desc: "Classify all 7 Lime Rock turns into Type I, II, or III.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "Type I Exit Launcher Focus", desc: "Focus 100% of driving effort on Turn 7 exit velocity down main straight.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "Top Speed Optimization Sweep", desc: "Drive 4 laps targeting maximum top speed at start/finish line.", reps: 4, time: "10 min" }
            ]
          },
          practical: {
            title: "Type I Corner Exit Prioritization Stint",
            focus: "Maximizing straightaway top speed via Type I corner exit launching",
            laps: 6,
            instructions: [
              "Drive 6 clean laps at Lime Rock Park with ALL ASSISTS OFF.",
              "Treat Turn 7 and Turn 4 as sacred Type I exit launchers."
            ]
          },
          challenge: {
            title: "Main Straight Top Speed Challenge",
            type: "laptime",
            description: "Achieve personal best top speed at main straight finish line across 3 consecutive laps.",
            criteria: "Top speed benchmark achieved."
          },
          assessment: {
            title: "Corner Grading & Priority Assessment",
            criteria: "Demonstrated strategic priority driving, sacrificing entry where needed to maximize Type I straightaway speeds.",
            passingScore: 90
          },
          telemetryReflection: {
            title: "Multi-Lap Telemetry Delta Review",
            prompts: [
              { key: "type1ExitSpeedDelta", label: "Type I Exit Velocity", question: "Did a 2 mph higher exit speed out of Turn 7 yield 5+ car lengths gain by end of straight?" },
              { key: "brakePointType2", label: "Type II Brake Point", question: "Was threshold braking sharp and consistent in Type II Turn 1 entry?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: "Think like a strategist. Prioritize the exit of corners leading to straights."
          },
          sessionReflection: {
            questions: [
              "Did I over-drive Type III corners, ruining my exit speed through downstream Type I turns?",
              "What top speed did I achieve at the finish line?",
              "How will I execute compromise corners in Session 11?"
            ]
          }
        },
        {
          id: 11,
          title: "Compromise Corners & The Esse Sequence",
          focus: "Compromise line execution in connected corners (Turn 3 & 4)",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 58.2,
          difficulty: 5,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Compromise Corners & The Incomplete Surrender",
            content: `Skip Barber Chapter 3 (pg 51-53) examines connected corners:

### The Compromise Esse Principle
In connected corners (Lime Rock Turn 3 & 4 Esse combo):
- Taking the geometric line through Turn 3 puts the car on the far LEFT side of the track at T3 exit.
- This ruins Turn 4, forcing a tight, slow arc onto the back chute!

### The Incomplete Surrender
- Drive a tighter, slower arc through Turn 3 (Compromise).
- Position the car on the RIGHT side of the track at T3 exit.
- This opens up a wide, sweeping, maximum-radius arc for Turn 4 (Type I Launcher)!

*"Slow down in the first corner to go faster down the entire straightaway."* — Dorsey Schroeder (pg 52)`,
            keyTakeaways: [
              "Connected corners require sacrificing entry speed in turn 1 to position for turn 2",
              "The Incomplete Surrender sacrifices just enough speed in T3 to maximize T4 radius",
              "Driving a tighter arc in T3 places the car on the correct side of the track for T4 launch"
            ],
            diagramId: "corner-path-comparison"
          },
          practice: {
            focus: "Turn 3 & 4 compromise positioning & execution",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "Geometric vs Compromise T3 Line Trial", desc: "Compare geometric T3 exit position vs compromise right-hand positioning.", reps: 3, time: "5 min" },
              { id: "medium", level: "🟡 Medium", title: "T3-T4 Compromise Sequence", desc: "Tighten T3 arc, hold car right, and sweep wide into T4 with early throttle.", reps: 4, time: "8 min" },
              { id: "hard", level: "🔴 Hard", title: "5-Lap Stint Variance Trial", desc: "Drive 5 continuous laps targeting sub-0.3s lap time variance.", reps: 5, time: "12 min" }
            ]
          },
          practical: {
            title: "Esse Compromise Masterclass Stint",
            focus: "Executing the T3-T4 compromise sequence with 100% ASSISTS OFF",
            laps: 8,
            instructions: [
              "Drive 8 continuous laps at Lime Rock Park with ALL ASSISTS OFF.",
              "Sacrifice T3 entry speed to position car right for maximum T4 exit launcher speed."
            ]
          },
          challenge: {
            title: "Sub-0.3s Stint Variance Challenge",
            type: "laptime",
            description: "Complete 5 consecutive clean laps with lap time variance under 0.3 seconds and pace under 58.2s.",
            criteria: "5-lap stint variance < 0.3s achieved."
          },
          assessment: {
            title: "Compromise Corner Execution Assessment",
            criteria: "Demonstrated proper compromise positioning in T3 to maximize T4 exit velocity.",
            passingScore: 90
          },
          telemetryReflection: {
            title: "Speed Trace & Position Audit",
            prompts: [
              { key: "t3SpeedDrop", label: "T3 Compromise Speed", question: "Did speed drop in T3 lead to higher accelerating velocity through T4 exit?" },
              { key: "t4ThrottlePoint", label: "T4 Throttle Pickup", question: "Were you able to apply 100% throttle earlier in T4 due to compromise positioning?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: "Slowing down to go faster is the hallmark of a master driver. Trust the exit speed!"
          },
          sessionReflection: {
            questions: [
              "Did I feel comfortable 'slowing down to go faster' in Turn 3 to gain time in Turn 4?",
              "What was my lap time variance across my 5 benchmark laps?",
              "Am I ready for Module 3 Graduation in Session 12?"
            ]
          }
        },
        {
          id: 12,
          title: "Module 3 Graduation: Real-World Line Masterclass",
          focus: "Final 10-lap graduation benchmark with 100% ASSISTS OFF",
          car: "Mazda MX-5 Cup",
          track: "Lime Rock Park (Full Circuit)",
          targetLapTime: 58.0,
          difficulty: 5,
          assistsConfig: {
            transmission: "Automatic (No Clutch)",
            drivingLine: "Off",
            tcs: "Off",
            stm: "Off",
            abs: "Off",
            steering: "Simulation"
          },
          theory: {
            title: "Module 3 Graduation: Real-World Line Masterclass",
            content: `Congratulations on reaching Session 12 of Module 3! Over 30 days and 12 sessions, you have mastered Skip Barber Chapter 3: The Real-World Line.

### Summary of What You Mastered:
1. **LINE GEOMETRY & SIGHT PICTURE**: Differentiating geometric vs real-world lines, avoiding early apex pinching, building intuitive visual horizon scanning, and navigating without driving lines.
2. **CORNER TYPES & THROTTLE CONTROL**: Disabling TCS, constant radius 7/8 apexes, hairpin single late-apex exit launches, decreasing radius trail-braking, and increasing radius early throttle.
3. **WEIGHT TRANSFER & DYNAMICS**: Disabling ABS, threshold braking at 85% slip, elevation compression vs unweighted crests (The Uphill), and positive camber hook exploitation.
4. **RACETRACK STRATEGY**: Corner grading (Type I, II, III priority) and connected compromise turn execution.

Today is your **Final 10-Lap Graduation Stint**. Drive 10 continuous clean laps at Lime Rock Park in the Mazda MX-5 Cup with 100% ASSISTS OFF!`,
            keyTakeaways: [
              "You have mastered Skip Barber Chapter 3 real-world line physics with zero electronic aids",
              "You possess authentic raw car control, visual horizon discipline, and corner grading strategy",
              "You are fully certified in Module 3: The Real-World Line Masterclass! 🏆"
            ],
            diagramId: "weight-transfer-friction-circle"
          },
          practice: {
            focus: "Graduation stint warmup & system check",
            drills: [
              { id: "easy", level: "🟢 Easy", title: "2-Lap Tire & Brake Warmup", desc: "Drive 2 clean laps bringing tires up to operating temperature.", reps: 2, time: "4 min" },
              { id: "medium", level: "🟡 Medium", title: "Pace Calibration Trial", desc: "Drive 3 laps verifying sub-58.0s target pace with zero assists.", reps: 3, time: "6 min" },
              { id: "hard", level: "🔴 Hard", title: "10-Lap Graduation Stint", desc: "Complete 10 continuous clean laps for Module 3 graduation.", reps: 10, time: "18 min" }
            ]
          },
          practical: {
            title: "The Module 3 Graduation Stint",
            focus: "10 continuous clean laps with 100% ASSISTS OFF",
            laps: 10,
            instructions: [
              "Verify ALL ASSISTS (Driving Line, TCS, STM, ABS) are set to OFF with Sim Steering ON.",
              "Drive 10 continuous clean laps at Lime Rock Park in the Mazda MX-5 Cup.",
              "Execute threshold braking, trail-braking, apex clipping, compromise lines, and eyes-up vision. Target pace under 58.0s!"
            ]
          },
          challenge: {
            title: "Module 3 Graduation Benchmark",
            type: "mechanical",
            description: "Complete 10 continuous clean laps with 100% ASSISTS OFF in the Mazda MX-5 Cup at Lime Rock Park, setting a personal best lap under 58.0s.",
            criteria: "Module 3 Graduation Benchmark Achieved! Module 3 Completed."
          },
          assessment: {
            title: "Module 3 Graduation Assessment",
            criteria: "Completed 10 continuous clean laps with ALL ASSISTS OFF, demonstrating total mastery of Skip Barber Chapter 3 Real-World Line principles.",
            passingScore: 90
          },
          telemetryReflection: {
            title: "Module 3 Telemetry & Replay Audit",
            prompts: [
              { key: "graduationStintVariance", label: "10-Lap Stint Variance", question: "What was your average lap time and total variance across your 10 graduation laps?" },
              { key: "realWorldLineMastery", label: "Raw Line Mastery", question: "How confident do you feel applying real-world racing line concepts compared to Day 1?" }
            ]
          },
          psychologicalCheckIn: {
            defaultFocus: 5,
            defaultFrustration: 1,
            defaultConfidence: 5,
            resetPrompt: "Congratulations! Take a deep breath and celebrate mastering raw car control and the real-world line."
          },
          sessionReflection: {
            questions: [
              "What was your single biggest breakthrough during Module 3?",
              "Which concept from Skip Barber Chapter 3 transformed your driving technique the most?",
              "How does it feel to drive with 100% assists OFF on your Moza R3 wheel?"
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: 'Racecraft & Advanced Racing',
      subtitle: 'Overtaking, Defending & Race Strategy',
      description: 'Learn defensive positioning, alternative racing lines under traffic, passing techniques, and race strategy.',
      duration: '12 Sessions (30 Days)',
      sessions: []
    }
  ],

  // Racing Fundamentals Reference Library Articles (Complete Motorsport Glossary from Doc/library.md)
  references: [
    // 1. Basic Fundamentals
    {
      id: 'ref-apex',
      title: 'Apex',
      category: 'Basic Fundamentals',
      icon: 'crosshair',
      summary: 'The point during a corner where the car comes closest to the inside edge of the road.',
      content: `### Definition
The point during a corner where the car comes closest to the inside edge of the road.

### Explanation
The apex is the pivot point of every corner. It's where your car is closest to the inside curb or edge of the track. Finding and hitting the right apex is essential for carrying speed through the corner and onto the following straight.

**Types of Apex:**
- **Early Apex**: Before midpoint (Usually a mistake, leads to running wide on exit)
- **Mid Apex**: At midpoint (Most common geometric line)
- **Late Apex**: After midpoint (Best for maximizing exit speed onto straights)

### Example
In Turn 2 at Laguna Seca, the apex is at the inside curb where the track narrows. Your car's right tires should just kiss this point.

### Application
- Always aim for the apex, never miss it intentionally.
- Your eyes should find the apex before you turn in.
- If you miss the apex, you're losing time.`
    },
    {
      id: 'ref-turn-in',
      title: 'Turn-In',
      category: 'Basic Fundamentals',
      icon: 'crosshair',
      summary: 'The point where you first turn the steering wheel to begin cornering.',
      content: `### Definition
The point where you first turn the steering wheel to begin cornering.

### Explanation
Turn-in is the moment of commitment. Once you turn the wheel, you've committed to a path through the corner. The turn-in point determines everything that follows: your apex, your exit, your speed.

**The Turn-In Process:**
1. Brake in a straight line
2. Locate your turn-in point
3. Turn the wheel smoothly and decisively
4. Begin trail-braking (if applicable)
5. Aim for the apex

### Application
- Turn-in should be smooth, not sudden.
- A later turn-in = safer, more exit speed.
- An earlier turn-in = faster entry, compromised exit.`
    },
    {
      id: 'ref-track-out',
      title: 'Track-Out',
      category: 'Basic Fundamentals',
      icon: 'crosshair',
      summary: 'The point at the exit of a corner where the car touches the outside edge of the road.',
      content: `### Definition
The point at the exit of a corner where the car touches the outside edge of the road.

### Explanation
Track-out is where your corner ends and the straight begins. You should be using all the road on exit, with your outside tires touching the edge of the track or curb.

**Why Track-Out Matters:**
- Using all the road = largest radius ($r$).
- Largest radius = highest exit speed.
- Higher exit speed = faster time down the straightaway.

### Application
- You should always use all the road on exit.
- If you're not at the edge, you're leaving speed on the table.
- Track-out dictates your straightaway speed.`
    },
    {
      id: 'ref-slip-angle',
      title: 'Slip Angle',
      category: 'Basic Fundamentals',
      icon: 'crosshair',
      summary: 'The difference between the direction a tire is pointed and the direction it is traveling.',
      content: `### Definition
The difference between the direction a tire is pointed and the direction it's traveling.

### Explanation
When a car corners, the tires don't follow the exact direction of the wheel rim. The tire elastic tread twists and slips at a slight angle, creating slip angle. This isn't a loss of grip—it is essential for generating lateral cornering force.

**Key Rule:**
Peak grip occurs at a specific optimal slip angle (typically 4° to 8° depending on compound). Below or above this peak, grip drops off.

### Application
- Small slip angle is normal and necessary for cornering.
- Excessive slip angle causes sliding and tire graining.
- The fastest drivers operate right at peak slip angle.`
    },
    {
      id: 'ref-yaw',
      title: 'Yaw',
      category: 'Basic Fundamentals',
      icon: 'crosshair',
      summary: 'The angle between the car’s centerline and its direction of travel.',
      content: `### Definition
The angle between the car's centerline and its direction of travel.

### Explanation
When a car corners, it rotates around its vertical axis. Yaw is the angle of rotation relative to the direction of motion. Yaw is what makes the car look slightly angled into a corner.

**Yaw vs. Slip Angle:**
- **Yaw**: The car's overall body angle relative to its travel path.
- **Slip Angle**: The tire tread's angle relative to its travel path.

### Application
- Controlled initial yaw helps rotate the car into tight corners.
- Excessive yaw = sliding = lost time and overheating rear tires.`
    },

    // 2. Car Control & Balance
    {
      id: 'ref-understeer',
      title: 'Understeer',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'A handling condition where front tires lose grip before rears, causing the car to push wide.',
      content: `### Definition
A handling condition where the front tires lose grip before the rear tires, causing the car to "push" wide through a corner.

### Symptoms
- The car feels like it won't turn despite turning the steering wheel.
- Steering wheel feel becomes light and numb.
- Adding more steering wheel angle makes the car push even wider.

### Causes & Remedies
- **Cause**: Excess entry speed or aggressive acceleration unloading front axle.
- **Fix**: Squeeze off throttle slightly to transfer load forward to front tires. Do NOT turn steering wheel further.`
    },
    {
      id: 'ref-oversteer',
      title: 'Oversteer',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'A handling condition where rear tires lose grip before fronts, causing the tail to slide out.',
      content: `### Definition
A handling condition where the rear tires lose grip before the front tires, causing the car's tail to slide toward the outside of the corner.

### Symptoms
- The rear end breaks loose and slides wide.
- The car rotates faster than steering input commands.

### Causes & Remedies
- **Cause**: Abrupt throttle lift, over-acceleration, or sudden weight transfer.
- **Fix**: Smoothly counter-steer (steer into the slide) and modulate throttle smoothly. Avoid slamming brakes or snapping off throttle.`
    },
    {
      id: 'ref-neutral',
      title: 'Neutral Handling',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'A state where front and rear tires reach their grip limit simultaneously.',
      content: `### Definition
A handling condition where the front and rear tires reach their grip limit at the exact same time.

### Explanation
Neutral handling is the gold standard for racecars. Both ends of the vehicle work equally, maximizing lateral G forces without excessive understeer push or oversteer sliding.`
    },
    {
      id: 'ref-weight-transfer',
      title: 'Weight Transfer',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'The shifting of vehicle load between tires during acceleration, braking, or cornering.',
      content: `### Definition
The shifting of the car's weight (vertical load) from one set of tires to another during acceleration, braking, or cornering.

### Scenarios
- **Braking**: Weight transfers forward → Increases front tire grip, reduces rear tire grip.
- **Accelerating**: Weight transfers rearward → Increases rear tire grip, reduces front tire grip.
- **Cornering**: Weight transfers laterally to outside tires → Increases outside grip.`
    },
    {
      id: 'ref-tto',
      title: 'Trailing Throttle Oversteer (TTO)',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'Oversteer induced by abruptly lifting off the accelerator while cornering near the limit.',
      content: `### Definition
Oversteer caused by lifting off the throttle (trailing the throttle) while cornering near the limit.

### Mechanics
Lifting throttle → Engine braking + longitudinal decelerating weight transfer forward → Unloads rear tires → Rear tires lose lateral grip → Rear slides out.

### Application
- Can be deliberately used by skilled drivers to rotate the car into hairpins.
- Smooth throttle release prevents unwanted TTO snaps.`
    },
    {
      id: 'ref-rotation',
      title: 'Rotation',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'The process of changing the car’s heading angle from straight-line entry into the corner arc.',
      content: `### Definition
The process of the car turning its yaw angle from zero (straight) to the angle needed for cornering.

### Explanation
Efficient rotation allows the car to point toward corner exit early, allowing earlier throttle application.`
    },
    {
      id: 'ref-pitch',
      title: 'Pitch',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'Forward-backward chassis movement (nose dipping under braking, rising under acceleration).',
      content: `### Definition
The car's forward-backward rotation around its transverse axis, characterized by the nose dipping (braking) or rising (acceleration).`
    },
    {
      id: 'ref-roll',
      title: 'Roll',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'Sideways body movement where the chassis leans to the outside of a corner.',
      content: `### Definition
The car's lateral rotation around its longitudinal axis, characterized by the body leaning toward the outside of a corner during turn-in.`
    },
    {
      id: 'ref-rebound',
      title: 'Rebound',
      category: 'Car Control & Balance',
      icon: 'sliders',
      summary: 'The extension phase of a shock absorber after being compressed.',
      content: `### Definition
The extension phase of a shock absorber—when the suspension spring expands back after being compressed by bumps or load transfers.`
    },

    // 3. Braking & Corner Entry
    {
      id: 'ref-threshold-braking',
      title: 'Threshold Braking',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'Braking at maximum pressure right at the edge of lockup without locking tires.',
      content: `### Definition
Braking at the maximum limit before wheel lockup, using 100% of the tire's braking potential.

### Explanation
Threshold braking requires squeezing the brake pedal rapidly up to ~95-98% grip capacity (where tire slip ratio is around 15%), stopping the car in the minimum possible distance.`
    },
    {
      id: 'ref-trail-braking',
      title: 'Trail-Braking',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'Tapering off brake pressure after turn-in, carrying light braking towards the apex.',
      content: `### Definition
Continuing to apply brake pressure after the turn-in point, carrying brakes into the corner.

### Benefits
- Keeps weight on the front tires during entry, boosting turn-in grip.
- Allows later initial braking points.
- Rotates the car naturally toward the apex.`
    },
    {
      id: 'ref-brake-turning',
      title: 'Brake-Turning',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'Combining braking and steering input simultaneously within tire grip limits.',
      content: `### Definition
Combining braking and steering input, using both simultaneously.`
    },
    {
      id: 'ref-brake-bias',
      title: 'Brake Bias',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'The percentage of braking force split between front and rear axles.',
      content: `### Definition
The proportion of braking force allocated to the front versus rear tires (e.g. 60/40 front-to-rear).

- **Too much front bias**: Front tires lock up first → Understeer / loss of steering control.
- **Too much rear bias**: Rear tires lock up first → Sudden unstable tail spin.`
    },
    {
      id: 'ref-brake-point',
      title: 'Brake Point',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'The visual marker on or beside the track where maximum braking is initiated.',
      content: `### Definition
The specific reference point on or beside the track (meter boards, curbs, trees) where you begin braking.`
    },
    {
      id: 'ref-lockup',
      title: 'Lockup',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'When a tire stops rotating under braking due to excessive pedal pressure.',
      content: `### Definition
When a tire stops rotating under braking because of excessive brake pressure.

### Consequences
- Grip drops by ~30%.
- Creates flat spots on the tire tread causing severe vibration.
- Complete loss of steering authority if front tires lock.`
    },
    {
      id: 'ref-modulation',
      title: 'Modulation',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'Fine adjustments of pedal pressure to keep tires at peak traction limits.',
      content: `### Definition
Adjusting the pressure on the brake or throttle pedal to keep the tires near their limit.`
    },
    {
      id: 'ref-friction-circle',
      title: 'The Friction Circle',
      category: 'Braking & Corner Entry',
      icon: 'disc-3',
      summary: 'Conceptual model showing total traction available for combined longitudinal and lateral forces.',
      content: `### Definition
A conceptual model showing the maximum grip available from the tires in any direction (braking, accelerating, cornering).

### Rule of Total Traction
Tires have a finite budget of total grip. If 100% of grip is used for braking, 0% remains for steering. To turn while braking, you must reduce brake pressure proportionally.`
    },

    // 4. The Racing Line
    {
      id: 'ref-racing-line-geo',
      title: 'The Racing Line',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'The fastest path around a corner following the Outside-Inside-Outside arc.',
      content: `### Definition
The fastest path around the racetrack, typically following the Outside-Inside-Outside arc.

### Why It Works
Widening the arc maximizes the turning radius ($r$), which maximizes the achievable corner speed ($v = \\sqrt{a_c \\cdot r}$).`
    },
    {
      id: 'ref-early-apex',
      title: 'Early Apex',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'Apexing before the geometric midpoint, resulting in tight exit arc and compromised speed.',
      content: `### Definition
An apex that occurs too soon in the corner, before the geometric midpoint.

### Flaw
Turning in early clips the inside curb too soon, forcing you to run wide on exit or lift off throttle.`
    },
    {
      id: 'ref-late-apex',
      title: 'Late Apex',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'Apexing past the midpoint to straighten the exit path for maximum acceleration.',
      content: `### Definition
An apex that occurs after the geometric midpoint of the corner.

### Advantage
Straightens the corner exit, allowing full throttle application earlier. Crucial before long straights.`
    },
    {
      id: 'ref-reference-point',
      title: 'Reference Point',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'Visual objects around the track used for precise braking, turn-in, and apex placement.',
      content: `### Definition
A visual marker on or beside the track that helps you place the car accurately lap after lap.`
    },
    {
      id: 'ref-constant-radius',
      title: 'Constant Radius Corner',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A corner maintaining a uniform curvature radius throughout.',
      content: `### Definition
A corner with a consistent radius from entry to exit.`
    },
    {
      id: 'ref-decreasing-radius',
      title: 'Decreasing Radius Corner',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A corner that tightens as you progress from entry to exit.',
      content: `### Definition
A corner where the radius decreases (gets tighter) from entry to exit. Requires a late apex and conservative entry speed.`
    },
    {
      id: 'ref-increasing-radius',
      title: 'Increasing Radius Corner',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A corner that opens up towards the exit.',
      content: `### Definition
A corner where the radius increases (gets wider) from entry to exit, allowing earlier throttle squeeze.`
    },
    {
      id: 'ref-hairpin',
      title: 'Hairpin',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A very tight 120° to 180° corner requiring deep heavy braking and late apex execution.',
      content: `### Definition
A tight corner with a large direction change, typically 120-180 degrees.`
    },
    {
      id: 'ref-esses',
      title: 'Esses',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A series of alternating left-right high-speed flowing corners.',
      content: `### Definition
A series of alternating corners, typically high-speed, requiring smooth rhythm and compromise lines.`
    },
    {
      id: 'ref-compromise-corner',
      title: 'Compromise Corner',
      category: 'The Racing Line',
      icon: 'spline',
      summary: 'A corner driven sub-optimally to maximize entry speed for a subsequent key corner.',
      content: `### Definition
A corner that must be compromised (driven slower or off-line) to set up the positioning for the following corner.`
    },

    // 5. Racecraft
    {
      id: 'ref-drafting',
      title: 'Drafting (Slipstreaming)',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Following closely behind another vehicle to reduce aerodynamic drag and gain top speed.',
      content: `### Definition
Following closely behind another car to reduce aerodynamic drag and increase top speed on straights.`
    },
    {
      id: 'ref-drafting-by',
      title: 'Drafting By (Slingshot)',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Using accumulated draft momentum to pull out and pass a lead car.',
      content: `### Definition
Using the speed advantage from drafting to pull alongside and pass the leading vehicle.`
    },
    {
      id: 'ref-out-braking',
      title: 'Out-Braking',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Braking later and deeper into corner entry than a competitor to take position.',
      content: `### Definition
Braking later than a competitor to pass them on corner entry.`
    },
    {
      id: 'ref-defensive-driving',
      title: 'Defensive Driving',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Positioning your car to protect the inside line and prevent overtaking.',
      content: `### Definition
Driving to protect your position from the car behind by claiming inside entry lines early.`
    },
    {
      id: 'ref-blocking',
      title: 'Blocking',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Illegal or unsportsmanlike reactive movement in response to a trailing car’s move.',
      content: `### Definition
Reacting to the car behind to prevent them from passing. Defending is choosing your line early; blocking is moving in reaction.`
    },
    {
      id: 'ref-point-by',
      title: 'Point-By',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Signal given during track days indicating which side a trailing car should pass on.',
      content: `### Definition
A hand or indicator signal letting a faster trailing car know you are yielding line preference.`
    },
    {
      id: 'ref-traffic',
      title: 'Traffic Management',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Navigating around slower lapped cars or groups while minimizing lap time degradation.',
      content: `### Definition
Other cars on the track that affect your racing line, braking markers, and pace.`
    },
    {
      id: 'ref-accordion-effect',
      title: 'Accordion Effect',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'The compression and expansion of car fields when lead vehicles brake or accelerate.',
      content: `### Definition
The tendency of a pack of cars to compress during braking zones and expand during acceleration.`
    },
    {
      id: 'ref-clean-air',
      title: 'Clean Air',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Unobstructed laminar airflow creating maximum aerodynamic downforce.',
      content: `### Definition
Unobstructed airflow over the car's aerodynamic surfaces, generating maximum downforce compared to turbulent 'dirty air'.`
    },
    {
      id: 'ref-pit-strategy',
      title: 'Pit Strategy',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Planning tire compounds, fuel loads, and pit windows for race endurance.',
      content: `### Definition
The overall race tactical plan for pit stop timing, fuel load calculations, and tire compound selection.`
    },
    {
      id: 'ref-starts',
      title: 'Race Starts',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Standing or rolling launches at the beginning of a race.',
      content: `### Definition
The start of a race from a stationary grid (standing start) or behind a pace car (rolling start).`
    },
    {
      id: 'ref-passing',
      title: 'Passing Techniques',
      category: 'Racecraft',
      icon: 'flag',
      summary: 'Overriding competitive cars cleanly via out-braking, draft slingshots, or undercut exits.',
      content: `### Definition
Overtaking another vehicle to gain track position.`
    },

    // 6. Hardware & Setup
    {
      id: 'ref-ffb',
      title: 'Force Feedback (FFB)',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Tactile torque forces transmitted through the steering wheel base representing physics.',
      content: `### Definition
The mechanical resistance and torque signals generated by the wheel base motor to simulate tire grip, aligning torque, self-centering, and road surface bumps.`
    },
    {
      id: 'ref-ffb-scale',
      title: 'Force Feedback Scale / Overall Gain',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Master output power setting of force feedback motor.',
      content: `### Definition
The overall strength setting of the force feedback signal output.`
    },
    {
      id: 'ref-deadzone',
      title: 'Deadzone',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'The initial range of wheel or pedal movement where no input signal is registered.',
      content: `### Definition
The range of physical movement where no in-game input is triggered. Should ideally be 0% for Direct Drive wheels and load cell pedals.`
    },
    {
      id: 'ref-lock-to-lock',
      title: 'Lock-to-Lock Steering Degrees',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Maximum degrees of steering wheel rotation from left limit to right limit.',
      content: `### Definition
Total wheel rotation angle (e.g., 540° for GT cars, 360° for Formula, 900° for street cars).`
    },
    {
      id: 'ref-damper',
      title: 'FFB Damper',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Smoothing filter applied to force feedback to suppress violent wheel oscillations.',
      content: `### Definition
A resistance force added to wheel base rotation to smooth out erratic oscillations and provide weight.`
    },
    {
      id: 'ref-gain',
      title: 'Gain',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Multiplier applied to physics forces in FFB pipeline.',
      content: `### Definition
A multiplier scaling force feedback intensity.`
    },
    {
      id: 'ref-clip',
      title: 'Clipping',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'When physics forces demand more motor torque than the wheel base can output, flattening detail.',
      content: `### Definition
When force feedback signals exceed 100% of motor capacity, causing forces to cap flat and losing subtle tire feedback detail.`
    },
    {
      id: 'ref-camber',
      title: 'Camber Angle',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Vertical tilt angle of the wheels as viewed from the front of the vehicle.',
      content: `### Definition
The angle of the wheels relative to vertical. Negative camber (top of tire leaning inward) maximizes tire contact patch during heavy cornering roll.`
    },
    {
      id: 'ref-toe',
      title: 'Toe Alignment',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Angle of wheels relative to car centerline when viewed from above.',
      content: `### Definition
- **Toe-In**: Fronts of tires point inward → Increases straight-line stability.
- **Toe-Out**: Fronts of tires point outward → Sharpens initial turn-in response.`
    },
    {
      id: 'ref-ride-height',
      title: 'Ride Height',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Distance between track surface and chassis bottom.',
      content: `### Definition
Distance from the ground to chassis bottom. Lowering ride height lowers center of gravity and enhances ground effect downforce.`
    },
    {
      id: 'ref-spring-rate',
      title: 'Spring Rate',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Stiffness of suspension springs.',
      content: `### Definition
The stiffness of suspension springs (measured in N/mm). Stiffer springs reduce pitch and roll.`
    },
    {
      id: 'ref-anti-roll-bar',
      title: 'Anti-Roll Bar (Sway Bar)',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Suspension bar linking left and right sides to control cornering body roll.',
      content: `### Definition
A torsion spring connecting left and right wheels to resist chassis roll.
- **Stiffer Front ARB**: Increases understeer.
- **Stiffer Rear ARB**: Increases oversteer.`
    },
    {
      id: 'ref-dampers',
      title: 'Dampers (Shock Absorbers)',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Hydraulic/gas devices controlling suspension spring compression (bump) and extension (rebound).',
      content: `### Definition
Hydraulic units controlling speed of suspension movement (Bump = compression, Rebound = extension).`
    },
    {
      id: 'ref-downforce',
      title: 'Downforce',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Vertical aerodynamic pressure pushing tires into the track to increase grip.',
      content: `### Definition
Aerodynamic force pushing the car downward onto the track surface, increasing grip without adding physical mass.`
    },
    {
      id: 'ref-drag',
      title: 'Aerodynamic Drag',
      category: 'Hardware & Setup',
      icon: 'settings',
      summary: 'Air resistance opposing forward vehicle movement.',
      content: `### Definition
Air resistance acting against forward motion, reducing top straightaway speed.`
    },

    // 7. Tires & Traction
    {
      id: 'ref-coefficient-friction',
      title: 'Coefficient of Friction (CF)',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Ratio of tire grip force relative to vertical load.',
      content: `### Definition
The ratio of lateral/longitudinal grip force generated by a tire relative to vertical load ($CF = \\text{Grip} / \\text{Load}$).`
    },
    {
      id: 'ref-slicks',
      title: 'Slick Tires',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Smooth treadless racing tires maximizing contact area in dry conditions.',
      content: `### Definition
Treadless rubber compound tires designed exclusively for dry track surfaces to provide maximum contact patch.`
    },
    {
      id: 'ref-rain-tires',
      title: 'Rain / Wet Tires',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Treaded tires designed to channel water away and prevent hydroplaning.',
      content: `### Definition
Grooved tires engineered to evacuate surface standing water.`
    },
    {
      id: 'ref-contact-patch',
      title: 'Contact Patch',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'The exact area of tire rubber touching the asphalt surface.',
      content: `### Definition
The footprint area where rubber meets the road.`
    },
    {
      id: 'ref-heat-cycles',
      title: 'Heat Cycles',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Processes of tire heating and cooling which gradually harden tire compounds.',
      content: `### Definition
Each thermal cycle of heating to operational temp and cooling down. Repeated heat cycles degrade tire grip over time.`
    },
    {
      id: 'ref-graining',
      title: 'Tire Graining',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Formation of rubber rolls on tire surface caused by sliding overstressed cold rubber.',
      content: `### Definition
Rubber tearing and forming small rolls on the tire surface due to excessive lateral sliding before reaching proper temperature.`
    },
    {
      id: 'ref-blistering',
      title: 'Tire Blistering',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Overheating of inner tire carcass creating surface rubber bubbles and delamination.',
      content: `### Definition
Internal tire carcass overheating, causing gas bubbles to erupt through the outer tread.`
    },
    {
      id: 'ref-flat-spot',
      title: 'Flat Spotting',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Localized tire tread abrasion caused by locking brakes while sliding.',
      content: `### Definition
A ground-down flat area on the tire tread resulting from severe brake lockups.`
    },
    {
      id: 'ref-tire-pressure',
      title: 'Tire Pressure Optimization',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Inflation pressure determining contact patch shape and thermal buildup.',
      content: `### Definition
Pneumatic pressure inside tires. Correct hot pressures ensure an even contact patch across the entire tread width.`
    },
    {
      id: 'ref-tire-temperature',
      title: 'Tire Operating Temperature',
      category: 'Tires & Traction',
      icon: 'circle-dot',
      summary: 'Thermal window required for optimal rubber grip compound performance.',
      content: `### Definition
The thermal operating window (typically 80°C - 105°C) where racing rubber achieves maximum sticky friction.`
    },

    // 8. Advanced Concepts
    {
      id: 'ref-cg',
      title: 'Center of Gravity (CG)',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'The theoretical point around which total vehicle mass is balanced.',
      content: `### Definition
The center point of mass. Lowering CG reduces dynamic weight transfer during acceleration, braking, and cornering.`
    },
    {
      id: 'ref-weight-distribution',
      title: 'Weight Distribution',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Static percentage of total weight residing on front vs rear axles.',
      content: `### Definition
The static weight split (e.g. 50/50, 40/60) between front and rear axles.`
    },
    {
      id: 'ref-load-transfer',
      title: 'Dynamic Load Transfer',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Shift of vertical wheel forces governed by G-forces, CG height, and track width.',
      content: `### Definition
$$ \\Delta W = \\frac{m \\cdot a \\cdot h}{h_{track}} $$
Load transfer equation calculation where $h$ is CG height and $a$ is lateral or longitudinal acceleration.`
    },
    {
      id: 'ref-aero-downforce',
      title: 'Downforce Equation (Aero)',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Speed-squared aerodynamic force generation.',
      content: `### Definition
$$ L = \\frac{1}{2} \\rho v^2 C_L A $$
Aerodynamic downforce increases with the square of velocity ($v^2$). Doubling speed quadruples downforce.`
    },
    {
      id: 'ref-ground-effect',
      title: 'Ground Effect Aerodynamics',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Underbody low-pressure suction created via Venturi tunnels under the floor.',
      content: `### Definition
Aerodynamic downforce generated by shaping the floor undersurface into Venturi tunnels, pulling the chassis down.`
    },
    {
      id: 'ref-diffuser',
      title: 'Rear Diffuser',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Expanding underbody exit channel accelerating floor airflow to create suction.',
      content: `### Definition
An expanding underbody ramp at the rear of the car that expands air, creating low pressure suction beneath the floor.`
    },
    {
      id: 'ref-stall',
      title: 'Aerodynamic Stall',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Airflow separation from wing elements resulting in sudden downforce loss.',
      content: `### Definition
Boundary layer separation over an aerodynamic wing element when angle of attack is excessive, destroying downforce.`
    },
    {
      id: 'ref-aero-oversteer',
      title: 'Aero Oversteer',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'High-speed oversteer caused by rear wing aerodynamic stall or front aerodynamic dominance.',
      content: `### Definition
High-speed rear traction loss caused by aerodynamic balance shifting toward the front at speed.`
    },
    {
      id: 'ref-aero-understeer',
      title: 'Aero Understeer',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'High-speed front push caused by dirty air wake or excessive rear wing downforce.',
      content: `### Definition
High-speed front grip loss caused by reduced front wing airflow.`
    },
    {
      id: 'ref-aero-spring-rate',
      title: 'Spring Rate (Aero Interaction)',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Spring stiffness required to support high-speed aerodynamic downforce loads.',
      content: `### Definition
Managing high-speed aero compression using third elements or stiff main springs to maintain stable ride height under downforce.`
    },
    {
      id: 'ref-aero-ride-height',
      title: 'Ride Height (Aero Sensitivity)',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Managing floor proximity to asphalt to optimize underbody suction maps.',
      content: `### Definition
Maintaining optimal pitch and heave stance to keep underbody diffusers operating at peak suction.`
    },
    {
      id: 'ref-aero-yaw',
      title: 'Yaw Aerodynamics',
      category: 'Advanced Concepts',
      icon: 'cpu',
      summary: 'Sensitivity of aerodynamic downforce to vehicle yaw angle in corners.',
      content: `### Definition
Changes in wing downforce and aerodynamic balance when air hits the car at an angle during corner sliding.`
    }
  ],
  guides: {
    mozaR3: {
      title: 'Moza R3 Bundle for Xbox: Beginner User Guide',
      subtitle: "A Sim Racing Coach's Guide to Getting Started, Direct Drive Setup & Physics",
      quote: '"The first step in your plan is to realize that you only have to go as fast as you want to go. Just because you are on a racetrack does not mean you should throw common sense out the window." — Going Faster!',
      boxContents: [
        { component: 'R3 Direct Drive Wheelbase', description: '3.9 Nm peak torque, aviation-grade aluminum construction' },
        { component: 'ESX Steering Wheel', description: 'Officially licensed for Xbox, 22 programmable buttons, ISF PU grips' },
        { component: 'SR-P Lite Pedals', description: 'Two-pedal set with Hall sensors, fully adjustable pedal spacing' },
        { component: 'Table Clamp', description: 'Sturdy desk mount supporting desks up to 50mm thick' },
        { component: 'Power Supply', description: '72W rated power adapter' },
        { component: 'USB Cable', description: 'For connecting wheelbase to Xbox Series X|S, Xbox One, or PC' },
        { component: 'Tools & Hardware', description: 'Assembly bolts and adjustment hex keys' },
        { component: 'User Manual', description: 'Complete reference guide' }
      ],
      physicalSetup: {
        mountingOptions: [
          { title: 'Option A: Desk Mount (Beginners)', desc: 'Attach included table clamp using 4 mounting holes under R3 base. Secure firmly to desk (supports up to 50mm thick desk). Handles full 3.9 Nm torque cleanly.' },
          { title: 'Option B: Sim Rig Mount', desc: 'Use 4-hole bottom mounting pattern. Fits most standard sim racing cockpits, wheel stands, and rigs.' }
        ],
        positioning: [
          { title: 'Seating & Wheel Angle', desc: 'Sit so your arms are bent ~90° at 9 and 3 o\'clock. Relax shoulders. Angle wheel slightly upward like a real car. Eyes level with screen center.' },
          { title: 'Pedal Setup', desc: 'Heels rest comfortably on floor. Adjust pedal spacing left/right by moving mounting bolts. Support pedals at back on hard floor/carpet to prevent sliding.' },
          { title: 'Quick Release Attachment', desc: 'Align 6 steel balls on wheel QR with 6 grooves on base shaft. Push until it clicks into place. Squeeze black QR ring with MOZA logo towards wheel to release.' }
        ]
      },
      xboxConnection: {
        steps: [
          { step: 1, title: 'Pedals to Base', desc: 'Connect SR-P Lite pedal set to PEDAL port on rear of R3 base using provided RJ45 cable.' },
          { step: 2, title: 'Power Connection', desc: 'Plug power cord into power adapter, then insert power jack into R3 base.' },
          { step: 3, title: 'Wall Outlet', desc: 'Plug power adapter into wall outlet.' },
          { step: 4, title: 'USB Connection', desc: 'Connect USB-B end to R3 base USB-B port and USB-A end to Xbox USB port.' },
          { step: 5, title: 'Power On Base', desc: 'Press power button on rear of R3 base to turn it on.' },
          { step: 6, title: 'Power On Xbox', desc: 'Turn on your Xbox console and launch Forza Motorsport.' }
        ],
        indicators: [
          { pattern: 'RPM light flows side-to-center', status: 'success', label: '✅ Successful Xbox Connection' },
          { pattern: 'RPM light is flashing', status: 'warning', label: '⚠️ In PC Mode — Switch to Xbox Mode (Hold S1+S2 for 3s)' }
        ]
      },
      modeSwitching: {
        shortcut: 'Hold [S1 + S2] for 3 seconds on the ESX steering wheel',
        desc: 'Toggles between Xbox Mode and PC Mode. RPM light pattern changes to confirm mode. Use if wheel is not recognized or FFB telemetry drops.',
        mobileApp: 'Download MOZA Racing mobile app (iOS/Android) -> connect via Bluetooth -> calibrate pedals, tune steering angles, adjust FFB curves, and update firmware wirelessly.'
      },
      steeringAngles: [
        { game: 'Forza Motorsport (2023)', recommended: '540° - 900°', notes: 'Match in-game angle (720° recommended)' },
        { game: 'Forza Horizon 5', recommended: '540° - 720°', notes: 'Responsive road car steering' },
        { game: 'F1 Series', recommended: '360° - 540°', notes: 'Quick formula rack rotation' },
        { game: 'Assetto Corsa / ACC', recommended: '540° - 900°', notes: 'Matches real GT3/sports car rack' }
      ],
      ffbSliders: [
        { name: 'Maximum Torque Limit', value: '80% - 100%', description: 'Controls overall FFB strength from the 3.9 Nm motor.' },
        { name: 'Force Feedback Reversal', value: 'Off', description: 'Prevents inverted steering forces.' },
        { name: 'Hands-Off Protection', value: 'On', description: 'Prevents violent oscillation when releasing the wheel on straights.' },
        { name: 'Maximum Steering Angle', value: '720°', description: 'Matches physical rotation to virtual steering rack.' },
        { name: 'Steering Axis Deadzone', value: '0% Inside / 100% Outside', description: 'Eliminates center slop for immediate 1:1 steering rack response.' },
        { name: 'Steering Axis Sensitivity', value: '50%', description: 'Linear response across the entire turning range.' },
        { name: 'Mechanical Trail Scale', value: '100% - 140%', description: 'Communicates suspension geometry caster and rear grip load.' },
        { name: 'Pneumatic Trail Scale', value: '90% - 100%', description: 'Communicates front tire slip angle; drops force when front tires lose grip.' },
        { name: 'Road Feel Scale', value: '35% - 40%', description: 'Reduces excessive high-frequency curb chatter on a 3.9 Nm base.' },
        { name: 'Wheel Damping Scale', value: '15% - 30%', description: 'Adds subtle fluid resistance to prevent hands-off oscillation.' }
      ],
      presets: [
        {
          id: 'smooth',
          name: 'Beginner Smooth Control',
          badge: 'Recommended for Beginners',
          desc: 'Smooth force delivery designed to build muscle memory without arm fatigue or sudden snapping forces.',
          sliders: [
            { label: 'FFB Scale', val: '85%' },
            { label: 'Mechanical Trail', val: '105%' },
            { label: 'Road Feel', val: '30%' },
            { label: 'Base Damping', val: '20%' },
            { label: 'Maximum Angle', val: '720°' }
          ]
        },
        {
          id: 'raw',
          name: 'Pro Direct Raw Feedback',
          badge: 'Maximum Detail',
          desc: 'Unfiltered 3.9 Nm dynamic force range with razor-sharp tire slip communication and minimal damping.',
          sliders: [
            { label: 'FFB Scale', val: '100%' },
            { label: 'Mechanical Trail', val: '120%' },
            { label: 'Road Feel', val: '45%' },
            { label: 'Base Damping', val: '10%' },
            { label: 'Maximum Angle', val: '540° / 720°' }
          ]
        }
      ],
      ffbSensations: [
        { sensation: 'Heavy wheel in corners', meaning: 'The car has high grip', action: 'Trust the car, maintain line' },
        { sensation: 'Wheel goes light', meaning: 'Front tires losing grip (understeer)', action: 'Reduce steering input & speed smoothly' },
        { sensation: 'Wheel pulls to one side', meaning: 'Uneven grip or track camber shift', action: 'Correct steering smoothly' },
        { sensation: 'Rumble / vibration', meaning: 'Road surface, curbs, rumble strips', action: 'Keep wheel steady, hold reference line' }
      ],
      pedalCalibration: {
        overview: 'SR-P Lite pedals use ultra-sensitive Hall sensors (no physical contact, lifetime durability).',
        methods: [
          { name: 'Method 1 (PC Mode)', desc: 'Connect to PC, enter PC mode in MOZA Pit House, calibrate min/max travel, switch back to Xbox.' },
          { name: 'Method 2 (Mobile App)', desc: 'Open MOZA Racing App on smartphone, pair via Bluetooth, run pedal calibration directly in Xbox mode.' }
        ],
        upgradeKit: 'SR-P Lite Performance Kit ($45 CAD): Adds spring and elastomer for realistic progressive brake resistance. Highly recommended for cars without ABS.'
      },
      gameCompatibility: {
        xbox: ['Forza Motorsport (2023) ✅', 'Forza Horizon 5 ✅', 'F1 Series ✅', 'Assetto Corsa ✅', 'Assetto Corsa Competizione ✅', 'DiRT Rally 2.0 ✅', 'Project CARS ✅', 'GRID (2019) ✅'],
        pc: ['iRacing', 'Assetto Corsa / ACC', 'rFactor 2', 'Automobilista 2', 'RaceRoom'],
        fm2023Settings: 'In FM2023: Settings -> Controls -> Wheel -> Set Steering Deadzone Inside = 0, Steering Sensitivity = 50%, Angle = 720°.'
      },
      learningProgression: [
        { stage: 1, title: 'Hardware Familiarization', focus: 'Wheel, pedal spacing, and posture', goal: 'Setup feels natural' },
        { stage: 2, title: 'Track Familiarization', focus: 'Learn layout at 50% pace', goal: '3 clean laps completed' },
        { stage: 3, title: 'The Line', focus: 'Hit Outside-Inside-Outside apexes', goal: '80% of apexes hit accurately' },
        { stage: 4, title: 'Braking', focus: 'Consistent brake markers & trail braking', goal: 'Same braking point every lap' },
        { stage: 5, title: 'Exit Speed', focus: 'Smooth throttle squeeze out of turns', goal: 'Zero wheelspin on exit' },
        { stage: 6, title: 'Full Laps', focus: 'Putting all skills together smoothly', goal: 'Repeatable lap times within 0.5s' }
      ],
      troubleshooting: [
        { issue: 'Wheel not recognized on Xbox', fix: 'Check USB cable, restart Xbox console. Ensure Quick Resume is not freezing USB.' },
        { issue: 'RPM light flashing', fix: 'Switch from PC mode to Xbox mode by holding [S1 + S2] for 3 seconds.' },
        { issue: 'No force feedback', fix: 'Verify mode (Xbox mode), check in-game FFB settings, restart game from main menu.' },
        { issue: 'Pedals not registering full travel', fix: 'Recalibrate via MOZA Mobile App or PC Pit House.' },
        { issue: 'Wheel oscillates on straights', fix: 'Enable Hands-Off Protection and increase Wheel Damping Scale to 20-30%.' }
      ],
      maintenanceWarranty: {
        warranty: [
          { component: 'Wheelbase Body', period: '24 Months' },
          { component: 'Steering Wheel Body', period: '12 Months' },
          { component: 'Pedals Set', period: '12 Months' },
          { component: 'Power Supply Adapter', period: '12 Months' },
          { component: 'Data Cables', period: '6 Months' }
        ],
        upgrades: [
          { upgrade: 'SR-P Lite Clutch Pedal', price: '$55 CAD', desc: 'Add 3rd pedal for manual clutch driving' },
          { upgrade: 'Performance Kit', price: '$45 CAD', desc: 'Spring + elastomer progressive brake feel upgrade' },
          { upgrade: 'MOZA QR Wheels', price: 'Varies', desc: 'Swap steering rims using Moza quick release' }
        ]
      },
      glossary: [
        { term: 'Direct Drive (DD)', definition: 'Motor architecture where steering wheel mounts directly to motor shaft. Zero belts/gears = zero latency and crisp force feedback detail.' },
        { term: 'Peak Torque (3.9 Nm)', definition: 'Maximum rotational force output of the Moza R3 motor. High-fidelity detail ideal for desk or rig mounting.' },
        { term: 'FFB Clipping', definition: 'Occurs when physics force demand exceeds motor torque limit. Force hits 100% flat ceiling, drowning out tire detail.' },
        { term: 'Mechanical Trail', definition: 'Self-centering steering force caused by suspension caster angle. Communicates rear grip loading.' },
        { term: 'Pneumatic Trail', definition: 'Force generated by tire rubber contact patch slip angle. Drops smoothly when front tires lose grip.' },
        { term: 'Hall Sensor Technology', definition: 'Magnetic position sensing without physical contact wear. Prevents pedal potentiometer wear and spiking.' }
      ]
    },
    forza2023: {
      title: 'Forza Motorsport (2023): Beginner User Guide',
      subtitle: "A Sim Racing Coach's Guide to Getting Started based on Skip Barber's Going Faster!",
      quote: '"The first step in your plan is to realize that you only have to go as fast as you want to go. Just because you are on a racetrack does not mean you should throw common sense out the window." — Going Faster!',
      gameModes: [
        { mode: 'Builders Cup', purpose: 'Career mode with structured practice & race events', recommended: 'Learning the game & leveling cars' },
        { mode: 'Free Play', purpose: 'Custom races & solo practice sessions with any car/track', recommended: 'Dedicated practice & setup tuning' },
        { mode: 'Rivals', purpose: 'Hot-lapping against driver ghost data', recommended: 'Improving lap times & analyzing lines' },
        { mode: 'Featured Multiplayer', purpose: 'Ranked online racing against real opponents', recommended: 'Once confident in racecraft & track limits' }
      ],
      practiceSessionInfo: {
        title: 'Why Practice Sessions Matter',
        benefits: [
          'Learn track layout & visual reference points without pressure',
          'Find consistent brake points and turn-in markers',
          'Build muscle memory and steady rhythm',
          'Earn Car XP (CXP) to level up car upgrades'
        ]
      },
      essentialSettings: [
        { setting: 'Drivatar Difficulty', recommendation: '3 - 4 / 10', why: 'Allows learning racecraft without frustrating AI aggression' },
        { setting: 'Damage', recommendation: 'Cosmetic or Fuel & Tire', why: 'Learn realistic tire wear without game-ending repairs' },
        { setting: 'Fuel & Tire Wear', recommendation: 'On', why: 'Build habits of managing tire grip and fuel load from day one' },
        { setting: 'Track Limits', recommendation: 'On (Gameplay & HUD)', why: 'Visual boundary lines show legal track limits for clean lap times' },
        { setting: 'Proximity Arrows', recommendation: 'On', why: 'Displays grey/yellow indicators when opponents are nearby' }
      ],
      drivingAssists: [
        { assist: 'Suggested Line', beginner: 'Full or Braking Only', whenToChange: 'Turn off when track layout is memorized' },
        { assist: 'Braking (ABS)', beginner: 'ABS On', whenToChange: 'Keep on until threshold braking is mastered' },
        { assist: 'Steering', beginner: 'Normal or Partially Assisted', whenToChange: 'Switch to Simulation when comfortable with wheel control' },
        { assist: 'Throttle', beginner: 'Unassisted', whenToChange: 'Learn throttle modulation from day one' },
        { assist: 'Traction Control (TCS)', beginner: 'Sport or On', whenToChange: 'Reduce as throttle squeeze control improves' },
        { assist: 'Stability Control (STM)', beginner: 'On', whenToChange: 'Turn off when car balance understeer/oversteer is understood' },
        { assist: 'Shifting', beginner: 'Automatic', whenToChange: 'Switch to Manual when track focus becomes automatic' }
      ],
      assistMilestones: [
        { milestone: '5 clean laps completed', remove: 'Suggested Line -> Braking Only' },
        { milestone: 'Know track layout & brake markers', remove: 'Suggested Line -> Off' },
        { milestone: 'Consistent braking without lockups', remove: 'ABS -> Off' },
        { milestone: 'Smooth gear changes', remove: 'Automatic -> Manual' },
        { milestone: 'Controlled throttle out of corners', remove: 'Traction Control -> Off' }
      ],
      ffbSettings: {
        steeringMode: [
          { mode: 'Normal', desc: 'Smooths out yaw inertia; more stable for beginners.' },
          { mode: 'Simulation', desc: 'No smoothing filter; direct 1:1 steering rack precision.' }
        ],
        sliderValues: [
          { setting: 'Vibration Scale', recommended: '50 - 60', why: 'Controls curb and road vibration intensity' },
          { setting: 'Force Feedback Scale', recommended: '60 - 100', why: 'Controls overall FFB force output (60-80 for DD wheels)' },
          { setting: 'Steering Self Alignment', recommended: '100', why: 'Wheel returns to center naturally based on tire physics' },
          { setting: 'Mechanical Trail Scale', recommended: '100 - 140', why: 'Communicates suspension caster load & rear grip' },
          { setting: 'Pneumatic Trail Scale', recommended: '100', why: 'Communicates tire slip angle; drops force at grip limit' },
          { setting: 'Road Feel Scale', recommended: '130 - 140', why: 'Transmits track surface texture and bumps' },
          { setting: 'Load Sensitivity', recommended: '100', why: 'Communicates weight transfer under braking and cornering' },
          { setting: 'Wheel Damping Scale', recommended: '30 - 50', why: 'Smooths high-speed oscillation on straights' }
        ],
        deadzones: [
          { input: 'Steering Deadzone Inside', value: '0', why: 'Immediate steering response at dead center' },
          { input: 'Steering Deadzone Outside', value: '100', why: 'Full physical steering range utilized' },
          { input: 'Acceleration Deadzone Inside', value: '0', why: 'Immediate throttle engagement' },
          { input: 'Acceleration Deadzone Outside', value: '95 - 100', why: 'Full throttle pedal travel' },
          { input: 'Deceleration Deadzone Inside', value: '0', why: 'Immediate brake pedal response' },
          { input: 'Deceleration Deadzone Outside', value: '95 - 100', why: 'Full brake pedal travel' }
        ]
      },
      carSetupBasics: {
        path: 'Cars -> Upgrade & Tune -> Tuning',
        simpleAdjustments: [
          { adjustment: 'Fuel Load', effect: 'Less fuel = lighter car = faster acceleration & cornering', recommendation: 'Minimum fuel + 1 lap reserve' },
          { adjustment: 'Tire Compound', effect: 'Soft = max grip/fast wear; Medium = balanced race tire', recommendation: 'Soft for qualifying, Medium for race' },
          { adjustment: 'Final Drive Ratio', effect: 'Lower ratio = higher acceleration; Higher ratio = top speed', recommendation: 'Tune to hit rev limiter at end of longest straight' }
        ]
      },
      practiceRoutine: {
        steps: ['1. The Line (Where to drive)', '2. Corner Exit (Carrying speed)', '3. Braking & Entering (Slowing down efficiently)'],
        sessionStructure: [
          { phase: 'Warm-up', duration: '3 - 5 Laps', focus: 'Learn track layout & identify reference markers' },
          { phase: 'Line Practice', duration: '5 - 10 Laps', focus: 'Hit every apex cleanly using full track width' },
          { phase: 'Exit Practice', duration: '5 - 10 Laps', focus: 'Smooth throttle squeeze to maximize straightaway exit speed' },
          { phase: 'Braking Practice', duration: '5 - 10 Laps', focus: 'Consistent brake markers & trail braking' },
          { phase: 'Full Laps', duration: '5 - 10 Laps', focus: 'Combine all skills into repeatable lap times' }
        ],
        rivalsMode: 'Select track -> Pick ghost 0.5s faster -> Follow ghost line & braking points -> Beat ghost time.',
        segmentSystem: 'FM2023 breaks tracks into sectors with target scores. Focus on mastering one segment at a time!'
      },
      apexApproach: {
        fundamentals: [
          { skill: 'The Line', practice: 'Outside-Inside-Outside path. Hit every apex.' },
          { skill: 'Corner Exit', practice: 'Smooth throttle squeeze. Listen for tire squeal or wheelspin.' },
          { skill: 'Braking & Entering', practice: 'Consistent brake markers. Trail braking into apex.' }
        ],
        referencePoints: ['Distance boards (150m, 100m, 50m)', 'Track curb start/finish lines', 'Paint stripes on asphalt', 'Bridge signs & grandstands'],
        cornerPoints: ['1. Brake point', '2. Turn-in point', '3. Apex clip', '4. Track-out exit point']
      },
      beginnerMistakes: [
        { mistake: 'Driving too fast too soon', cause: 'Over-driving before knowing the track', solution: 'Start at 70% pace, build speed gradually' },
        { mistake: 'Ignoring practice sessions', cause: 'Rushing directly into races', solution: 'Use practice to earn CXP & learn brake markers' },
        { mistake: 'Stabbing pedals abruptly', cause: 'Street driving habits', solution: 'Squeeze pedals over 2-3 seconds smoothly' },
        { mistake: 'Braking too late', cause: 'Chasing late braking early', solution: 'Brake early & consistently; move brake point later slowly' },
        { mistake: 'Looking right in front of bumper', cause: 'Wrong visual focal point', solution: 'Look ahead to apex before turn-in; look to exit before apex' }
      ],
      troubleshooting: {
        understeer: [
          { symptom: 'Car pushes wide of corner', likelyCause: 'Too much entry speed', solution: 'Brake earlier before turn-in' },
          { symptom: 'Car refuses to turn into apex', likelyCause: 'On power too early', solution: 'Reduce throttle to transfer weight forward' },
          { symptom: 'Front tires feel light on wheel', likelyCause: 'Front tire grip exceeded', solution: 'Unwind steering angle slightly to restore grip' }
        ],
        oversteer: [
          { symptom: 'Rear slides outward on exit', likelyCause: 'Too much throttle stabbed', solution: 'Squeeze throttle smoothly' },
          { symptom: 'Rear slides on entry lift-off', likelyCause: 'Abrupt throttle lift', solution: 'Lift throttle gradually' },
          { symptom: 'Car spins coming out of turn', likelyCause: 'Power oversteer', solution: 'Countersteer gently and reduce throttle' }
        ]
      },
      progressionPlan: [
        { week: 'Week 1: Foundation', sessions: ['S1: Setup game & 5 laps at 50% speed', 'S2: Learn Laguna Seca reference points', 'S3: Practice hitting apexes consistently'] },
        { week: 'Week 2: Building Skills', sessions: ['S1: Practice braking point consistency', 'S2: Practice smooth corner exits', 'S3: Combine braking + exit speed'] },
        { week: 'Week 3: Integration', sessions: ['S1: Full laps with 1-skill focus', 'S2: Rivals mode ghost matching', 'S3: Full race simulation stint'] },
        { week: 'Week 4: Refining Pace', sessions: ['S1: Identify weak corners & isolate practice', 'S2: Reduce assists (Line -> Braking only)', 'S3: Full race applying everything'] }
      ],
      tracks: [
        { name: 'Track Categories & Surfaces', desc: 'Permanent circuits (e.g., Silverstone, Laguna Seca) offer rubbered-in high grip lines. Street circuits feature lower grip and unforgiving concrete barriers. Ovals require high-speed draft management.' },
        { name: 'Corner Anatomy (Entry, Apex, Exit)', desc: 'Turn-in Point: Where you initial turn the wheel while trail braking. Geometric Apex: Midpoint of inside kerb. Late Apex: Turning later to straighten corner exit for maximum straightaway acceleration.' },
        { name: 'Forza Race Regulations (FRR) & Track Limits', desc: 'Track limits are defined by white lines or outer kerb boundaries. Putting 4 wheels beyond track limits incurs time penalties (0.3s to 3.0s+) and dirties lap times in Rivals mode.' },
        { name: 'Dynamic Track Evolution & Weather', desc: 'Track rubbering increases grip on the racing line over race stints. Rain creates slick offline puddles and drastically shifts braking zones 20-30 meters earlier.' }
      ],
      carClasses: [
        { class: 'E to B Class (100 - 600 PI)', type: 'Production & Sport Cars', desc: 'Low downforce, momentum driving. Focus on smooth weight transfer, maintaining corner exit speed, and trail braking.' },
        { class: 'A to S Class (601 - 800 PI)', type: 'Supercars & Track Toys', desc: 'High horsepower to weight ratio. Throttle control out of slow corners becomes critical to prevent wheelspin.' },
        { class: 'R to P & X Class (801 - 999 PI)', type: 'Race Cars & Prototypes / Formula', desc: 'High aerodynamic downforce. Higher cornering speeds require confidence in aero grip and fast reaction times.' }
      ],
      drivetrains: [
        { type: 'FWD (Front-Wheel Drive)', characteristics: 'Front wheels steer and propel the vehicle.', handling: 'Inherently stable; tends to understeer under heavy power. Brake early, turn in, and roll on power smoothly after apex.' },
        { type: 'RWD (Rear-Wheel Drive)', characteristics: 'Front wheels steer, rear wheels propel.', handling: 'Maximum agility and accelerating traction. Susceptible to oversteer on exit if throttle is stomped aggressively.' },
        { type: 'AWD (All-Wheel Drive)', characteristics: 'Power distributed to all four wheels.', handling: 'Massive exit traction out of slow corners. Requires trail braking to overcome initial turn-in power understeer.' }
      ],
      glossary: [
        { category: 'Racing Line & Cornering', term: 'Apex (Geometric vs Late)', definition: 'The closest point to the inside of a corner. Geometric apex maintains constant radius; Late apex turns later to maximize straightaway exit speed.' },
        { category: 'Pedal & Vehicle Control', term: 'Trail Braking', definition: 'Gradually tapering off brake pressure as you steer into a corner, transferring weight to front tires for sharper turn-in grip.' },
        { category: 'Vehicle Handling Dynamics', term: 'Understeer ("Push")', definition: 'Front tires lose grip before rear tires, causing the car to plow wide of the intended corner arc despite turning the wheel.' },
        { category: 'Vehicle Handling Dynamics', term: 'Oversteer ("Loose")', definition: 'Rear tires lose traction first, causing the rear end of the car to swing outward into a slide.' },
        { category: 'Tire & Physics Science', term: 'Slip Angle', definition: 'The angle between the direction a tire is pointed and its actual path over the track. Maximum tire grip occurs at a subtle 4°-7° slip angle.' },
        { category: 'Vehicle Handling Dynamics', term: 'Weight Transfer', definition: 'Shift of vehicle mass forward under braking (loading front tires), rearward under acceleration (loading rear tires), or laterally in turns.' },
        { category: 'Telemetry & Electronics', term: 'Telemetry Data Out (UDP)', definition: 'A feature in Forza Motorsport settings that broadcasts live telemetry data (wheel speed, RPM, FFB slip, G-forces) over local network.' },
        { category: 'Racing Rules & Strategy', term: 'Drafting / Slipstreaming', definition: 'Following closely behind a leading car to reduce aerodynamic drag, gaining top speed for an overtaking attempt down straights.' },
        { category: 'Pedal & Vehicle Control', term: 'Cadence / Threshold Braking', definition: 'Modulating brake pedal pressure right at the verge of tire lockup (or ABS threshold) for shortest stopping distance.' }
      ]
    },

    // 3. Telemetry Guide Data (From Doc/telemetry.md)
    telemetry: {
      summary: {
        title: 'Telemetry: The Data-Driven Path to Faster Laps',
        subtitle: 'Understanding, Learning, and Interpreting Telemetry Data',
        authorRef: 'Based on Going Faster! Mastering the Art of Race Driving by Skip Barber Racing School',
        quote: 'Data collection systems replace theory with hard fact.',
        duration: 'Self-paced (2-3 weeks)',
        skillLevel: 'Complete Beginner',
        tools: 'Forza Motorsport 2023, Moza R3, Telemetry App'
      },
      setup: {
        title: 'Enabling UDP Race Telemetry in Forza Motorsport 2023',
        steps: [
          'Launch Forza Motorsport 2023',
          'Navigate to Settings -> Gameplay & HUD',
          'Scroll down to the "UDP Race Telemetry" section',
          'Configure the telemetry parameters below'
        ],
        settings: [
          { setting: 'Data Out', value: 'ON', purpose: 'Enables UDP telemetry transmission' },
          { setting: 'Data Out IP Address', value: '127.0.0.1 (or PC IP for Xbox)', purpose: 'Sends to localhost or target PC' },
          { setting: 'Data Out IP Port', value: '9999 or 5300', purpose: 'Target port for listener app' },
          { setting: 'Data Out Packet Format', value: 'CAR DASH', purpose: 'Full telemetry data packet (331 bytes @ 60 Hz)' }
        ],
        platformNotes: {
          pc: 'Use 127.0.0.1 if running the telemetry app on the same PC as Forza.',
          xbox: 'Set IP Address to the IPv4 address of your PC/laptop running the telemetry app on the same network.'
        },
        tools: [
          { name: 'Forza-data-tools', platform: 'Windows / Terminal', desc: 'Recommended for beginners. Offers terminal live telemetry, CSV logging, and web dashboard.' },
          { name: 'RS Dash ASR', platform: 'iOS / Android / Windows', desc: 'Live racing dashboards, track maps, and telemetry graphs.' },
          { name: 'Simracing Telemetry', platform: 'Windows (Go)', desc: 'Records and displays real-time telemetry curves.' }
        ],
        commands: {
          quickStart: './fdt -j -c log.csv',
          terminalLog: './fdt -q -c telemetry_log.csv',
          docker: 'docker run --rm -p 9999:9999/udp -p 8080:8080 forza-data-tools -j -q'
        }
      },
      channels: [
        {
          id: 'throttle',
          name: 'Throttle Trace',
          range: '0% to 100%',
          quote: 'A gradual increase in throttle will tend to create understeer. An abrupt application will create oversteer.',
          goodTitle: 'The Squeeze (Progressive Build)',
          goodDesc: 'Smooth 0-100% curve over 0.5-1.0s through apex to exit.',
          badTitle: 'The Stab (Abrupt Spike)',
          badDesc: 'Vertical line jump 0 to 100%, breaking rear tire traction.',
          checkpoints: [
            'Is my throttle smooth and progressive without spikes?',
            'Am I at 100% full throttle by track-out?',
            'Do I have unexpected throttle dips mid-corner?'
          ]
        },
        {
          id: 'brake',
          name: 'Brake Trace',
          range: '0% to 100%',
          quote: 'Threshold braking is matching appropriate brake pedal pressure to the maximum grip of the tire.',
          goodTitle: 'Threshold & Trail-Braking',
          goodDesc: 'Hard initial squeeze to 80-90% followed by progressive release tapering off into apex.',
          badTitle: 'The Stab & Lockup',
          badDesc: 'Sudden pedal slam locking front wheels or pumping brake pressure.',
          checkpoints: [
            'Is brake application progressive without locking up?',
            'Am I trail-braking smoothly into turn-in?',
            'Does brake pressure reach zero right near the apex?'
          ]
        },
        {
          id: 'steering',
          name: 'Steering Trace',
          range: '-720° to +720°',
          quote: 'The primary symptom of early apexing is the need to increase steering effort past the apex.',
          goodTitle: 'Unwinding on Exit',
          goodDesc: 'Steady turn-in angle holding smoothly, then unwinding back toward center on exit.',
          badTitle: 'Early Apex Correction',
          badDesc: 'Steering angle increases past apex because turn-in was too early.',
          checkpoints: [
            'Am I unwinding steering as I apply exit throttle?',
            'Do I need to add extra wheel turn past the apex?',
            'Is steering motion smooth without sawing?'
          ]
        },
        {
          id: 'speed',
          name: 'Speed Trace',
          range: 'MPH / KPH',
          quote: 'The speed you carry out of the corner determines maximum speed on the following straightaway.',
          goodTitle: 'High Corner Exit Momentum',
          goodDesc: 'Speed curve smoothly bottoms out at apex (minimum speed) and launches high on exit.',
          badTitle: 'Overslowed Corner Entry',
          badDesc: 'Speed dips excessively low in entry zone, destroying straightaway top speed.',
          checkpoints: [
            'Where on the track is my speed trace lower than a reference lap?',
            'What is my minimum cornering speed at apex?',
            'Is my exit speed maximizing straightaway velocity?'
          ]
        },
        {
          id: 'lateralG',
          name: 'Lateral G Trace',
          range: 'G-Forces (Cornering Grip)',
          quote: 'At the limit of a car cornering ability, speed is directly related to the radius of the arc it is on.',
          goodTitle: 'Consistent Cornering G Load',
          goodDesc: 'Flat, high G load plateau through mid-corner showing tires at grip limit.',
          badTitle: 'Inconsistent G Drops',
          badDesc: 'G-force drops abruptly mid-corner indicating loss of tire grip.',
          checkpoints: [
            'Is my lateral G load steady throughout the cornering arc?',
            'Am I hitting peak G forces for the tire compound?',
            'Do I see sudden G-drops caused by sliding?'
          ]
        }
      ],
      patterns: [
        {
          id: 'early-apex',
          title: 'Pattern 1: Early Apex',
          quote: 'If you feel the need to increase steering effort past the apex, you turned in too soon.',
          signature: {
            steering: 'Steering angle increases past apex (more lock needed)',
            throttle: 'Lift or hesitation on corner exit',
            speed: 'Drops on exit; lost momentum on straight'
          },
          fix: 'Turn in later. Move turn-in visual reference marker back by 5-10 meters.',
          drill: 'Move turn-in marker 5m later until steering trace smoothly unwinds on exit.'
        },
        {
          id: 'late-apex',
          title: 'Pattern 2: Late Apex',
          quote: 'If there is road left at corner exit, your turn-in and apex were too late.',
          signature: {
            steering: 'Unwinds early, empty road left on track-out',
            throttle: 'Applied early, but overall corner speed is lower',
            speed: 'Lower entry speed than vehicle capability'
          },
          fix: 'Turn in earlier. Move turn-in point forward by 5-10 meters.',
          drill: 'Move turn-in marker 5m earlier until car naturally uses full track-out edge.'
        },
        {
          id: 'abrupt-throttle',
          title: 'Pattern 3: Abrupt Throttle',
          quote: 'A gradual increase in throttle creates understeer. Abrupt throttle creates oversteer.',
          signature: {
            throttle: 'Vertical line jump 0% to 100%',
            slip: 'Tire slip ratio spikes above 1.0 (wheelspin)',
            speed: 'Loss of forward acceleration; oversteer corrections'
          },
          fix: 'Squeeze throttle smoothly over 0.5 - 1.0 second roll-on.',
          drill: 'Practice 1-second throttle roll-on on corner exit while monitoring slip ratio.'
        },
        {
          id: 'abrupt-brake',
          title: 'Pattern 4: Abrupt Brake',
          quote: 'Slamming on brakes is like driving a nail with a hammer. Squeeze for grip.',
          signature: {
            brake: 'Vertical spike 0% to 100%',
            slip: 'Tire lockup (wheel rotation stops)',
            steering: 'Complete loss of turning authority'
          },
          fix: 'Squeeze brake pedal over 0.2 - 0.3 seconds to load front tires.',
          drill: 'Progressive brake squeeze in straight braking zones without lockup.'
        },
        {
          id: 'too-much-trail',
          title: 'Pattern 5: Too Much Trail-Braking',
          quote: 'A car will decelerate and turn just like it accelerates and turns.',
          signature: {
            brake: 'Brake pressure continues deep past apex',
            steering: 'Wheel turned heavily while brake is applied',
            speed: 'Overslowed at apex; front understeer or rear snap'
          },
          fix: 'Release brake pedal earlier. Aim for zero brake pressure right before apex.',
          drill: 'Release trail brake smoothly so pressure reaches 0% as you clip apex.'
        },
        {
          id: 'too-little-trail',
          title: 'Pattern 6: Too Little Trail-Braking',
          quote: 'Carrying brake into turn-in loads front tires for maximum turn-in grip.',
          signature: {
            brake: 'Zero brake pressure immediately after turn-in',
            steering: 'Wheel turned with unloaded front suspension',
            speed: 'Entry speed too slow; car pushes wide (understeer)'
          },
          fix: 'Carry light trail brake (10-20%) into turn-in.',
          drill: 'Maintain trailing brake pressure past turn-in point to keep front loaded.'
        }
      ],
      practices: [
        {
          id: 'three-lap',
          title: 'The Three-Lap Telemetry Comparison',
          desc: 'Drive 5 laps, log to CSV, and compare your best lap vs worst lap in telemetry to isolate exact time-loss points.',
          metrics: ['Brake Point Distance', 'Minimum Cornering Speed', 'Throttle Squeeze Smoothness', 'Apex Steering Angle']
        },
        {
          id: 'reference-lap',
          title: 'Rivals Reference Lap Overlay',
          desc: 'Overlay a faster driver Rivals telemetry trace over yours. Spot brake point differences and exit speed gaps.',
          keyQuestions: [
            'Where does reference driver brake later?',
            'Where does reference driver get on throttle earlier?',
            'What is the minimum speed delta at key apexes?'
          ]
        },
        {
          id: 'corner-diagnosis',
          title: 'One-Corner Focus Diagnosis',
          desc: 'Drive 10 laps focusing 100% on one problem corner. Log telemetry for all 10 laps to analyze best vs worst technique.',
          cycle: 'Measure -> Practice -> Measure -> Improve -> Repeat'
        }
      ],
      mozaFfb: {
        title: 'Syncing Moza R3 Force Feedback with Telemetry',
        sensations: [
          { feel: 'Heavy Wheel Resistance', meaning: 'High tire grip loaded up', telemetryCheck: 'High lateral G, steady speed trace' },
          { feel: 'Light Wheel Feeling', meaning: 'Front tire grip loss (understeer)', telemetryCheck: 'Lateral G drop, steering angle spike' },
          { feel: 'Vibration / Pulsing', meaning: 'Rumble strips, surface bumps, lockup', telemetryCheck: 'Suspension travel, wheel slip spikes' }
        ],
        rpmLeds: [
          { color: 'Green', meaning: 'Optimal power band RPM', action: 'Maintain throttle build' },
          { color: 'Yellow', meaning: 'Approaching redline', action: 'Prepare to upshift' },
          { color: 'Red', meaning: 'Redline limit', action: 'Shift immediately' }
        ]
      },
      glossary: [
        { term: 'Telemetry', definition: 'Collection and automated transmission of vehicle data during driving stints.' },
        { term: 'Trace', definition: 'Graphical representation of a single telemetry data channel over distance or time.' },
        { term: 'Tire Slip Ratio', definition: 'Ratio difference between wheel rotational speed and actual vehicle speed (optimal acceleration at 5-10% slip).' },
        { term: 'Threshold Braking', definition: 'Braking at maximum pedal pressure right before tire lockup occur.' },
        { term: 'Trail-Braking', definition: 'Gradually easing brake pressure while turning into the apex.' },
        { term: 'Lateral G', definition: 'Cornering force in sideways direction measured in Gs.' }
      ]
    }
  }
};

window.APEX_CONTENT = APEX_CONTENT;


