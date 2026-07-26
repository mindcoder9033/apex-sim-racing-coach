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
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: null,
          difficulty: 1,
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
Set up your equipment correctly, configure in-game controls, and experience your first moments behind the virtual wheel driving slow laps under 40 mph.`,
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
                title: 'First Slow Laps (Under 40 mph)',
                desc: 'Drive 3 slow laps at Laguna Seca in 3rd gear. Focus purely on wheel resistance and pedal response.',
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
              'Start a Free Play race at Laguna Seca in the Mazda MX-5.',
              'Drive slowly—no faster than 40 mph (3rd gear max).',
              'Focus on how the wheel resists your turning (force feedback) and how pedals respond.',
              'Do not worry about lap times or staying on the line perfectly.'
            ]
          },
          challenge: {
            title: 'Equipment & Control Verification',
            type: 'technique',
            description: 'Complete 3 slow, controlled laps without off-track incidents while verifying wheel FFB and pedal responsiveness.',
            criteria: '3 clean slow laps completed.'
          }
        },
        {
          id: 2,
          title: 'Understanding Force Feedback',
          focus: 'Interpreting wheel feedback & grip limits',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: null,
          difficulty: 1,
          theory: {
            title: 'The Language of the Wheel',
            content: `Your Moza R3 communicates with you through force feedback. Learning to "read" what the wheel is telling you is the most important skill in sim racing.

### What the Wheel Tells You
- **Heavy wheel**: High grip! The car is loaded up in a corner and gripping the track.
- **Light wheel**: Low grip or loss of traction! Front tires are sliding (understeer).
- **Wheel pushing back**: Self-aligning torque returning the wheel to center as you exit turns.
- **Rumble / Vibration**: Track surface, curbs, or rumble strips.

### Understeer vs. Oversteer Sensations
When cornering and the wheel suddenly goes light, front tire grip has failed (understeer). Reduce steering angle immediately to restore traction.`,
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
                desc: 'Drive 30 mph on straight. Turn wheel 5° left/right and release to feel self-aligning torque return wheel to center.',
                reps: 5,
                time: '5 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Constant Radius Corner Weight',
                desc: 'Drive Turn 6 at 40 mph vs 45 mph. Feel the wheel load up heavy, then go slightly light as speed increases.',
                reps: 5,
                time: '10 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Understeer Lightness Detection',
                desc: 'Enter Turn 2 at 45 mph without braking; observe the exact moment wheel resistance drops light.',
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
              'Drive 5 laps at Laguna Seca focusing on steering wheel weight.',
              'Pay attention to Turn 2 and Turn 6 when cornering loads build up.',
              'Note the exact speed where the steering force lightens.'
            ]
          },
          challenge: {
            title: 'Grip Limit Awareness Challenge',
            type: 'technique',
            description: 'Identify the cornering speed limit in Turn 6 where wheel weight transitions from heavy to light without spinning.',
            criteria: 'Successfully spot understeer threshold.'
          }
        },
        {
          id: 3,
          title: 'Pedal Control & Muscle Memory',
          focus: 'Smooth brake and throttle application',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: null,
          difficulty: 1,
          theory: {
            title: 'Your Feet Are Your Engine and Brakes',
            content: `In a racecar, your feet control power delivery and deceleration. Smooth, progressive pedal control is mandatory for car stability.

### The "Squeeze" Concept
Never stab or slam pedals! Imagine pressing a ripe tomato—apply pressure progressively.
- **Abrupt Throttle**: Spikes engine torque, causes wheelspin and instant snap oversteer.
- **Smooth Throttle**: Transfers weight smoothly to rear tires, maximizing traction.
- **Abrupt Brake**: Locks up wheels, unbalances chassis violently.
- **Smooth Brake**: Loads front tires progressively for maximum stopping grip.

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
                desc: 'From a standstill in 2nd gear, compare stabbing throttle vs smoothly squeezing to 100% over 3 seconds.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Brake Squeeze Drill',
                desc: 'Drive 50 mph on main straight. Practice progressively squeezing brake to 100% over 2 seconds without lockup.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Pedal Rhythm & 50% Hold',
                desc: 'Alternate 50% throttle hold (2s) and 50% brake hold (2s) to calibrate muscle memory.',
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
              'Drive 5 laps at Laguna Seca using smooth, progressive pedal squeezes.',
              'Listen for tire squeal or engine rev spikes caused by abrupt inputs.',
              'Focus on smooth transition from brake release to throttle squeeze.'
            ]
          },
          challenge: {
            title: 'Smooth Input Challenge',
            type: 'technique',
            description: 'Complete 4 consecutive laps with zero wheel lockups or sudden throttle wheelspins.',
            criteria: '4 clean laps with smooth pedal modulation.'
          }
        },
        {
          id: 4,
          title: 'Feeling the Car',
          focus: 'Weight transfer, grip, and balance',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: null,
          difficulty: 2,
          theory: {
            title: 'The Physics of Car Control & Weight Transfer',
            content: `A racecar responds dynamically to physics. When you accelerate, brake, or turn, weight shifts between the four tires.

### Weight Transfer Principles
- **Braking**: Weight transfers **forward** → Front tires gain grip, nose dips, steering gets heavier.
- **Accelerating**: Weight transfers **rearward** → Rear tires gain traction, nose rises.
- **Turning**: Weight transfers to **outside tires** → Outside tires carry cornering load.

### The Friction Circle (Grip Limit)
Tires have a maximum grip budget. If you use 100% of grip for braking, you have 0% left for steering. As you release the brake, you unlock grip for turning!`,
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
                desc: 'Brake at 50 mph to feel the car nose dip and front steering heavy up as weight moves forward.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Acceleration Squat Sensation',
                desc: 'Accelerate from stop to feel rear suspension squat and front end lighten.',
                reps: 5,
                time: '7 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Friction Circle Boundary Drill',
                desc: 'Drive steady circle at 20, 25, 30, 35 mph to experience weight loading outside tires to grip limit.',
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
              'Feel weight transfer under braking before turn-in.',
              'Squeeze throttle smoothly on exit as steering unwinds.',
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
      title: 'The Line',
      subtitle: 'Finding the Fastest Path',
      description: 'Master the fundamental geometry of racing lines: Outside-Inside-Outside, corner radius, turn-in, apex, and track-out points.',
      duration: '12 Sessions (30 Days)',
      sessions: [
        {
          id: 1,
          title: 'What is The Line?',
          focus: 'Understanding corner radius and line geometry',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 110.0, // 1:50.0
          difficulty: 1,
          theory: {
            title: 'The Single Most Important Skill in Race Driving',
            content: `When driving through any corner, you have an infinite number of path choices. The inside line? The outside line? Somewhere in between?

The physics of racing dictate one golden rule: **Cornering speed is directly proportional to corner radius.** The larger the arc radius of your path through a turn, the less lateral G-force strain is placed on your tires, allowing you to carry significantly higher speed.

### The Ideal Racing Line (Outside - Inside - Outside)
To achieve the maximum possible radius through a turn, the ideal path follows three key reference points:
1. **Entry (Turn-in)**: Position your car on the far **outside** edge of the track before entering the corner.
2. **Apex (Clip Point)**: Arc inward to clip the absolute **inside** edge of the track at the geometric midpoint of the corner.
3. **Exit (Track-out)**: Allow the car to drift back to the far **outside** edge of the track upon exit as you apply throttle.

### Why Exit Speed Matters Most
A mistake on corner entry hurts your speed for a split second. A mistake on corner exit reduces your speed along the *entire* straightaway that follows. Always prioritize a smooth, wide exit line!`,
            keyTakeaways: [
              'Speed is directly related to corner radius (larger radius = faster speed)',
              'Outside-Inside-Outside path maximizes radius and minimizes tire strain',
              'Corner exit speed dictates speed down the entire following straightaway'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Finding reference markers at Turn 2',
            drills: [
              {
                id: 'easy',
                level: '🟢 Easy',
                title: 'Find the Turn-In Point',
                desc: 'Drive slowly (in 2nd gear) through Turn 2 at Laguna Seca. Identify the physical marker on the outside curb where you begin turning the wheel.',
                reps: 3,
                time: '5 min'
              },
              {
                id: 'medium',
                level: '🟡 Medium',
                title: 'Find Turn-In + Apex',
                desc: 'Drive at moderate speed through Turn 2. Identify both the turn-in point on the outside and the exact paint stripe where your inside wheel clips the apex.',
                reps: 5,
                time: '8 min'
              },
              {
                id: 'hard',
                level: '🔴 Hard',
                title: 'Full 3-Point Reference Sweep',
                desc: 'Drive through Turn 2 at 75% pace. Verbally call out "Turn-in", "Apex", and "Track-out" as your car passes each marker.',
                reps: 8,
                time: '10 min'
              }
            ]
          },
          practical: {
            title: 'Focused Laps - Precision Over Speed',
            focus: 'Hit reference markers consistently',
            laps: 5,
            instructions: [
              'Load Laguna Seca in Forza Motorsport 2023 with the Mazda MX-5.',
              'Drive at 70% speed. Forget about lap times entirely.',
              'Focus 100% of your visual attention on spotting your turn-in and apex markers 2 seconds BEFORE reaching them.',
              'Note if you are clipping the apex too early or drifting wide on exit.'
            ]
          },
          challenge: {
            title: 'Mental Track Map Construction',
            type: 'technique',
            description: 'Do 1 focused lap. Identify 3 distinct reference points (Turn-in, Apex, Track-out) for Turn 2, Turn 6, and Turn 9.',
            criteria: 'List your chosen reference points in the session reflection notes.'
          }
        },
        {
          id: 2,
          title: 'Outside-Inside-Outside Mastery',
          focus: 'Car placement and road utilization',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 108.0,
          difficulty: 1,
          theory: {
            title: 'Maximizing Track Width',
            content: `Many beginner drivers leave 2 to 3 feet of pavement unused on corner entry and exit. If you don't use every inch of available asphalt, you are effectively driving a tighter, slower corner!

Using the full width of the track lowers the steering angle required to negotiate turns. Less steering angle means less tire scrub, higher corner speed, and better car stability.`,
            keyTakeaways: [
              'Unused track space equals a tighter, slower corner',
              'Less steering angle allows higher tire grip and faster acceleration',
              'Position your outside tires right along the track boundary line on entry'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Utilizing curb to curb',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Outside Curb Alignment', desc: 'Practice placing your outer tires right against the painted curb on entry.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Apex Curb Clipping', desc: 'Clip the apex rumble strip without upsetting the chassis.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Full Track Width Sweep', desc: 'Connect entry curb, apex curb, and exit curb in one continuous arc.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Full Road Utilization',
            focus: 'Zero unused asphalt',
            laps: 6,
            instructions: [
              'Drive 6 laps focusing on edge-to-edge car positioning.',
              'Check your rearview mirrors on exit to verify your car is right at the outside boundary.'
            ]
          },
          challenge: {
            title: 'Zero Margin Challenge',
            type: 'technique',
            description: 'Complete 3 consecutive laps with zero off-track penalties while placing your tires within 6 inches of track edges.',
            criteria: 'Achieve 3 clean laps.'
          }
        },
        {
          id: 3,
          title: 'Early vs. Late Apex',
          focus: 'Understanding turn shape and exit trajectory',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 106.5,
          difficulty: 2,
          theory: {
            title: 'Geometric vs. Late Apex',
            content: `Not all apexes are located at the exact center of a corner.

- **Geometric (Mid) Apex**: The center point of a symmetrical corner arc.
- **Early Apex**: Hitting the inside curb too early in the corner. This forces you to turn harder on exit, running out of track and delaying throttle application. **Early apexing is the #1 cause of spins for beginners!**
- **Late Apex**: Delaying your turn-in slightly to clip the inside curb further around the corner. This straightens your exit path, allowing earlier and full throttle application onto long straights.`,
            keyTakeaways: [
              'Early apexing forces tight turning on exit and leads to spins',
              'Late apexing straightens corner exit for earlier throttle application',
              'Prioritize a late apex before any long straightaway'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Late Apex Execution at Turn 3 & 4',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Identify Mid vs Late Apex', desc: 'Compare entry points for geometric vs late apex at Turn 3.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Late Apex Turn-in', desc: 'Delay your turn-in by 10 feet and observe how much straighter your exit path becomes.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Early Throttle Onset', desc: 'Apply 100% throttle at the late apex point.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Straightening the Exit',
            focus: 'Late apexing Turns 3, 4 & 11',
            laps: 6,
            instructions: [
              'Focus on delaying your turn-in slightly at Turn 4 and Turn 11.',
              'Feel how much earlier you can get back to full throttle.'
            ]
          },
          challenge: {
            title: 'Early Throttle Challenge',
            type: 'technique',
            description: 'Apply full throttle before or exactly at the apex in 4 out of 5 corners during a full lap.',
            criteria: 'Record your best lap time and note exit stability.'
          }
        },
        // Sessions 4 to 12
        {
          id: 4,
          title: 'The Corkscrew & Elevation Lines',
          focus: 'Managing vertical compression and blind apexes',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 105.0,
          difficulty: 3,
          theory: {
            title: 'Blind Corners & Elevation Changes',
            content: `Laguna Seca's famous Corkscrew drops 5.5 stories through a blind left-right chicane. When you cannot see the apex, you must rely on distant visual references (trees, brake markers, crest alignment).`,
            keyTakeaways: ['Use tree tops and track edge markers for blind corners', 'Brake in a straight line before downhill compressions'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Corkscrew Reference Alignment',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Crest Alignment', desc: 'Align your hood with the oak tree beyond the crest.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Straight-line Braking', desc: 'Finish braking before the crest unload.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Chicane Drop Transition', desc: 'Transition weight smoothly left to right down the drop.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Mastering the Drop', focus: 'Corkscrew accuracy', laps: 6, instructions: ['Drive 6 laps focusing on Corkscrew entry precision.'] },
          challenge: { title: 'Blind Apex Trust', type: 'technique', description: 'Hit the Corkscrew apex 5 laps in a row without running wide.', criteria: '0 off-track penalties in Corkscrew.' }
        },
        {
          id: 5,
          title: 'Introduction to Road Atlanta',
          focus: 'High-speed rhythm and flow',
          car: 'Subaru BRZ',
          track: 'Road Atlanta',
          targetLapTime: 102.0, // 1:42.0
          difficulty: 2,
          theory: {
            title: 'Rhythm and High Speed Transitions',
            content: `Road Atlanta introduces high-speed blind crests and sweeping turns. Maintaining momentum through Turn 1 and the Essess requires trusting your line choice.`,
            keyTakeaways: ['High speed requires smooth, progressive steering inputs', 'Connect corners in a continuous flowing rhythm'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'The Essess Flow (Turns 3-5)',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Essess Entry Line', desc: 'Find the entry curb for Turn 3 at Road Atlanta.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Weight Transfer Balance', desc: 'Lift gently off throttle to shift weight to front tires for turn-in.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Flat-out Rhythm', desc: 'Nail the line through the Essess with minimum braking.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Rhythm Building', focus: 'Smooth momentum', laps: 6, instructions: ['Drive 6 laps getting comfortable with Road Atlanta layout.'] },
          challenge: { title: 'Clean Rhythm Lap', type: 'mechanical', description: 'Complete a lap of Road Atlanta within 2 seconds of target (1:44.0).', criteria: 'Target lap time met.' }
        },
        {
          id: 6,
          title: 'Managing High-Speed Sweepers',
          focus: 'Lateral g-force stability and throttle modulation',
          car: 'Subaru BRZ',
          track: 'Road Atlanta',
          targetLapTime: 101.0,
          difficulty: 3,
          theory: {
            title: 'Turn 1 & Turn 12 Sweepers',
            content: `High speed sweepers demand delicate throttle control. Sharp steering turns scrub speed; wide, sweeping arcs maintain momentum.`,
            keyTakeaways: ['Smooth steering inputs prevent snap oversteer', 'Hold constant throttle through high-speed arcs'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Turn 1 Uphill Sweep',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Sweeper Line Choice', desc: 'Practice wide arc through Turn 1.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Constant Throttle Balance', desc: 'Hold 60% throttle through Turn 1 apex.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Turn 12 Exit Acceleration', desc: 'Unwind steering wheel while coming onto front straight.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Sweeper Precision', focus: 'Turn 1 & 12 stability', laps: 6, instructions: ['Drive 6 laps focusing on smooth steering unwinding on exit.'] },
          challenge: { title: 'Zero Scrub Challenge', type: 'technique', description: 'Maintain maximum cornering speed through Turn 12 without tire squeal.', criteria: 'Smooth line exit.' }
        },
        {
          id: 7,
          title: 'Combining Chicanes & Heavy Braking',
          focus: 'Turn 10A/10B complex at Road Atlanta',
          car: 'Subaru BRZ',
          track: 'Road Atlanta',
          targetLapTime: 99.5,
          difficulty: 3,
          theory: {
            title: 'Downhill Heavy Braking & Curb Hopping',
            content: `Coming off the long back straight into Turn 10A requires maximum threshold braking down a steep hill into a tight chicane.`,
            keyTakeaways: ['Brake early enough to set up a clean chicane entry', 'Use apex curbs in 10A to rotate the car for 10B'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Turn 10 Chicane Braking Marker',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '300ft Brake Board Spotting', desc: 'Brake firmly at 300ft board.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Chicane Curb Clip', desc: 'Clip left curb of 10A then right curb of 10B.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: '10B Launch Speed', desc: 'Get full throttle early out of 10B under bridge.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Chicane Precision', focus: '10A & 10B line execution', laps: 7, instructions: ['Drive 7 laps refining 10A/10B entry and exit speed.'] },
          challenge: { title: 'Bridge Launch', type: 'mechanical', description: 'Log a sector time of under 32 seconds on back straight + chicane.', criteria: 'Target sector met.' }
        },
        {
          id: 8,
          title: 'Road Atlanta Mastery',
          focus: 'Putting the full lap together with consistency',
          car: 'Subaru BRZ',
          track: 'Road Atlanta',
          targetLapTime: 98.0,
          difficulty: 4,
          theory: {
            title: 'Consistency Beats One-Lap Wonder',
            content: `A single fast lap built on risk is useless in a race. A driver who can turn 5 laps within 0.3 seconds of each other will beat a faster, inconsistent driver every single time.`,
            keyTakeaways: ['Consistency creates a foundation for real pace', 'Drive at 90% risk tolerance to eliminate errors'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: '5-Lap Consistency Stint',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Target Lap Pacing', desc: 'Turn 3 laps within 1.0s of each other.', reps: 3, time: '6 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Narrow Variance Stint', desc: 'Turn 5 laps within 0.5s of each other.', reps: 5, time: '10 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Pace Mastery', desc: 'Turn 5 laps within 0.3s of each other near target (1:38.0).', reps: 5, time: '12 min' }
            ]
          },
          practical: { title: 'Consistency Test', focus: '5 clean, repeatable laps', laps: 8, instructions: ['Drive 8 continuous laps focusing on identical line execution.'] },
          challenge: { title: 'Pace Repeatability', type: 'mechanical', description: 'Achieve a lap time variance under 0.5s over 3 consecutive clean laps.', criteria: 'Consistency score checked.' }
        },
        {
          id: 9,
          title: 'Return to Laguna Seca: Porsche Cayman',
          focus: 'Handling mid-engine vehicle dynamics on the racing line',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 95.0, // 1:35.0
          difficulty: 3,
          theory: {
            title: 'Mid-Engine Line Adjustments',
            content: `Stepping up from the MX-5/BRZ to the Porsche Cayman GT4 adds horsepower and mid-engine rotation. You must be more precise with turn-in and apex throttle application!`,
            keyTakeaways: ['Mid-engine cars rotate faster upon turn-in', 'Smooth throttle application is mandatory on corner exit'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Cayman Turn-in Precision',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Mid-Engine Turn-in Feel', desc: 'Feel quick front-end turn-in response at Turn 2.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Throttle Weight Transfer', desc: 'Apply gentle throttle to settle rear end.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Cayman Apex Speed', desc: 'Carry 5mph higher apex speed in Turn 5.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Mid-Engine Adaptation', focus: 'Smooth Cayman control', laps: 7, instructions: ['Drive 7 laps adapting your line inputs to the Cayman GT4.'] },
          challenge: { title: 'Zero Spin Challenge', type: 'technique', description: 'Complete 5 laps in the Cayman GT4 with zero spins or major oversteer slides.', criteria: '0 spins recorded.' }
        },
        {
          id: 10,
          title: 'Corner Combination Sequences',
          focus: 'Sacrificing entry of corner A to maximize exit of corner B',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 93.5,
          difficulty: 4,
          theory: {
            title: 'Connected Corners (Turn 8 & 9, Turn 10 & 11)',
            content: `When two corners are close together, you cannot drive both on their individual ideal line. You MUST sacrifice the exit of the first corner to position your car for the proper entry of the second corner!`,
            keyTakeaways: ['The corner preceding a long straight takes priority', 'Sacrifice speed in corner A to gain maximum speed in corner B'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Turns 8 to 9 Sacrifice Line',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Identify Priority Corner', desc: 'Recognize why Turn 11 exit is more important than Turn 10 entry.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Sacrifice Entry Position', desc: 'Stay wide out of Turn 10 to open up Turn 11 entry.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Sequence Speed Optimization', desc: 'Maximize speed out of Turn 11 onto front straight.', reps: 8, time: '10 min' }
            ]
          },
          practical: { title: 'Sequence Optimization', focus: 'Turns 10-11 sequence', laps: 7, instructions: ['Drive 7 laps focusing on corner priority optimization.'] },
          challenge: { title: 'Straightaway Speed', type: 'mechanical', description: 'Achieve a top speed of 122+ mph on front straight by nailing Turn 11 exit.', criteria: 'Target top speed met.' }
        },
        {
          id: 11,
          title: 'Advanced Apex Micro-Adjustments',
          focus: 'Fine-tuning line adjustments for changing tire grip',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 92.5,
          difficulty: 4,
          theory: {
            title: 'Adapting Line to Tire Wear & Conditions',
            content: `As tires heat up or wear down, grip changes. Master drivers adjust their turn-in point by 6 to 12 inches to compensate and maintain lap times.`,
            keyTakeaways: ['Micro-adjust turn-in point when understeer occurs', 'Stay flexible with reference points as conditions evolve'],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Line Micro-Adjustments',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '6-Inch Apex Adjustment', desc: 'Move apex 6 inches inside or outside on demand.', reps: 4, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Understeer Line Correction', desc: 'Adjust line when front tires slide.', reps: 6, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Adapting to Tire Wear Stint', desc: 'Maintain pace over a 6-lap stint as tires wear.', reps: 6, time: '10 min' }
            ]
          },
          practical: { title: 'Adaptive Line Test', focus: 'Tire wear adjustment', laps: 8, instructions: ['Drive 8 continuous laps monitoring grip and micro-adjusting line.'] },
          challenge: { title: 'Sub-1:33.0 Lap Time', type: 'mechanical', description: 'Set a lap time under 1:33.0 in the Porsche Cayman GT4 at Laguna Seca.', criteria: 'Target lap time beaten.' }
        },
        {
          id: 12,
          title: 'Module 1 Final Graduation Stint',
          focus: '30-Day Evaluation: Consistency, line accuracy, and confidence',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 91.5, // 1:31.5
          difficulty: 5,
          theory: {
            title: 'Module 1 Graduation: The Line Master',
            content: `Congratulations on reaching Session 12! You have spent 30 days building a rock-solid foundation in racing line geometry, reference points, corner apexes, and track width utilization.

Today is your final graduation stint: 10 full laps combining everything you have learned!`,
            keyTakeaways: [
              'Trust your visual reference points',
              'Smooth line execution creates effortless speed',
              'You are ready for Module 2: Braking & Entering!'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Full Stint Warmup',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '3-Lap Warmup', desc: 'Warm up tires and review reference points.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Pace Setting', desc: 'Turn 3 laps near graduation target (1:31.5).', reps: 3, time: '6 min' },
              { id: 'hard', level: '🔴 Hard', title: '10-Lap Graduation Stint', desc: 'Complete 10 continuous clean laps for graduation evaluation.', reps: 10, time: '18 min' }
            ]
          },
          practical: { title: 'Graduation Stint', focus: '10 continuous clean laps', laps: 10, instructions: ['Drive 10 continuous clean laps. Give it your focused best!'] },
          challenge: { title: 'Module 1 Graduation', type: 'mechanical', description: 'Complete 10 clean laps with an average score of 4+ in confidence.', criteria: 'Module 1 Completed!' }
        }
      ]
    },
    {
      id: 2,
      title: 'Braking & Entering',
      subtitle: 'Mastering Deceleration & Trail-Braking',
      description: 'Learn threshold braking, trail-braking, weight transfer control, and carrying maximum entry speed into corners without locking up.',
      duration: '12 Sessions (30 Days)',
      sessions: [
        {
          id: 1,
          title: 'Throttle-to-Brake Transition',
          focus: 'Smooth pedal transition',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 102.0,
          difficulty: 1,
          theory: {
            title: 'The Art of Pedal Transition',
            content: `The transition from throttle to brake is the first step in every corner entry. How you make this transition affects the car's balance and your ability to brake at the limit.

### Two Approaches
- **Quick Transition**: Fast lift → immediate brake (High speed corners, straight-line braking)
- **Smooth Transition**: Gradual lift → progressive brake (Brake-turning, low grip, wet conditions)

### Common Mistakes
- **Coasting**: Off throttle, off brake. Lost time, unsettled chassis!
- **Slamming**: Hitting brakes like a hammer, causing unstable weight transfer.
- **Snap Lift**: Abrupt throttle lift causing trailing throttle oversteer (TTO).`,
            keyTakeaways: [
              'Quick transition = less coasting = faster lap time',
              'Smooth transition = better car balance on corner entry',
              'Zero coasting: You should always be either on throttle or on brake'
            ],
            diagramId: 'pedal-squeeze-diagram'
          },
          practice: {
            focus: 'Pedal transition drills',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'The Lift-Off', desc: 'Approach Turn 2 at 50 mph. Lift off throttle and observe deceleration without braking.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'The Quick Transition', desc: 'Approach Turn 2 at 60 mph. Move from full throttle to brake in under 0.3 seconds.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'The Smooth Transition', desc: 'Practice gradual lift and progressive brake application into Turn 6 to settle the chassis.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Skill-First Focus: Pedal Transition',
            focus: 'Eliminating coasting in braking zones',
            laps: 5,
            instructions: [
              'Load Mazda MX-5 @ Laguna Seca for 5 focused laps.',
              'Turn 2: Practice quick transition (lift → immediate brake).',
              'Turn 6: Practice smooth transition (gradual lift → progressive brake).',
              'Turn 11: Practice your preferred transition for maximum exit speed.',
              'Ensure zero coasting moments across all braking zones.'
            ]
          },
          challenge: {
            title: 'Zero Coasting Challenge',
            type: 'technique',
            description: 'Complete a focused lap of Laguna Seca with zero coasting between throttle and brake in all braking zones.',
            criteria: '0 coasting moments recorded.'
          }
        },
        {
          id: 2,
          title: 'Threshold Braking',
          focus: 'Finding the braking limit',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 101.0,
          difficulty: 2,
          theory: {
            title: 'The Limit of Braking',
            content: `Threshold braking is using 100% of your braking capability without locking the tires. It's where the fastest lap times are found.

### Peak Grip vs Slip Ratio
Peak braking force occurs when the tire is revolving ~15% slower than free-rolling. Exceeding this threshold locks the tire, dropping braking grip by 30% and flat-spotting tires.

### Key Principles
- **Squeeze**: Squeeze pedal rapidly, don't slam it.
- **Feel**: Learn the pedal resistance and tire hum right before lock.
- **Release**: Instantly ease pressure if a tire locks up.`,
            keyTakeaways: [
              'Threshold braking delivers maximum possible deceleration',
              'Locking tires reduces grip by ~30% and increases stopping distance',
              'Threshold braking requires pedal sensitivity, not brute force'
            ],
            diagramId: 'ffb-grip-diagram'
          },
          practice: {
            focus: 'Threshold feel & lockup prevention',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Find the Lock Point', desc: 'Brake progressively harder on main straight until a tire locks. Release immediately.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Threshold Feel', desc: 'Hold brake pressure right at the threshold point just before lockup for 3 seconds.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Threshold Braking at Speed', desc: 'Approach Turn 2 at race speed and hold threshold pressure through full straight-line zone.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Squeeze & Feel',
            focus: 'Finding the deceleration limit',
            laps: 6,
            instructions: [
              'Drive 6 laps at Laguna Seca in the Mazda MX-5.',
              'Push to the threshold limit in Turns 2, 5, 6, and 11.',
              'If a tire locks, release pedal slightly and re-apply at threshold.'
            ]
          },
          challenge: {
            title: 'Clean Threshold Challenge',
            type: 'technique',
            description: 'Execute threshold braking across 5 major braking zones without locking a tire.',
            criteria: '5 clean threshold braking zones completed.'
          }
        },
        {
          id: 3,
          title: 'Brake-Turning Fundamentals',
          focus: 'Combining braking and turning',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 100.0,
          difficulty: 2,
          theory: {
            title: 'The Lost Art of Brake-Turning',
            content: `Many drivers believe braking must be done strictly in a straight line. The fastest drivers brake AND turn at the same time.

### The Friction Circle Balance
When you use 100% of tire grip for braking, you have 0% left for turning. If you reduce brake pressure to 80%, you unlock 20% cornering grip to turn into the corner!

### Benefits
- Brake later into corner entry
- Carry higher speed past turn-in
- Help rotate the car toward the apex`,
            keyTakeaways: [
              'Brake-turning combines braking and steering for later braking',
              'As steering angle increases, brake pressure MUST decrease proportionally',
              'Smooth progressive pressure bleed allows optimal car rotation'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Brake + Steering overlap',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Straight-Line Braking Only', desc: 'Brake strictly in straight line into Turn 2 and fully release before turning wheel.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Brake-Turning Intro', desc: 'Maintain 20% brake pressure as you turn wheel into Turn 2, observing car rotation.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Consistent Brake-Turning', desc: 'Brake-turn into every corner at Laguna Seca with progressive pressure reduction.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Combining Brake and Steering',
            focus: 'Rotation on corner entry',
            laps: 6,
            instructions: [
              'Drive 6 laps practicing brake-turning into Turns 2, 3, 4, 6, and 11.',
              'Ensure brake pressure bleeds down smoothly as steering angle increases.'
            ]
          },
          challenge: {
            title: 'Turn 6 Rotation Challenge',
            type: 'technique',
            description: 'Brake-turn into sweeping Turn 6 with smooth rotation and clean exit trajectory.',
            criteria: 'Smooth rotation and clean exit logged.'
          }
        },
        {
          id: 4,
          title: 'Trail-Braking Introduction',
          focus: 'Carrying brakes into corners',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 99.0,
          difficulty: 3,
          theory: {
            title: 'The Trail-Braking Technique',
            content: `Trail-braking is the extension of brake-turning. You carry light, diminishing brake pressure deep into the corner, past turn-in, and all the way to the apex.

### Why Trail-Braking Works
- **Weight Transfer**: Keeps weight on front tires, increasing front grip for sharper turn-in.
- **Car Rotation**: Light rear brake torque helps turn the car without steering wheel fight.
- **Entry Speed**: Allows you to carry higher entry speed deep into cornering arc.`,
            keyTakeaways: [
              'Trail-braking carries brakes past turn-in all the way to the apex',
              'Keeps front axle loaded for superior corner rotation',
              'Essential for decreasing radius corners and passing maneuvers'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Trail-braking depth control',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Short Trail-Brake', desc: 'Carry light brake pressure 10 feet past turn-in into Turn 2.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Medium Trail-Brake', desc: 'Carry diminishing brake pressure 1/3 of the distance to apex in Turn 2.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Deep Trail-Brake', desc: 'Carry light trail-brake 2/3 of the distance to apex in Turn 11.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Carrying Brakes to Apex',
            focus: 'Trail-braking Turns 2, 6, and 11',
            laps: 6,
            instructions: [
              'Drive 6 laps practicing trail-braking at Laguna Seca.',
              'Focus on a smooth, linear pressure bleed ending right at the apex.'
            ]
          },
          challenge: {
            title: 'Turn 11 Entry Speed Challenge',
            type: 'mechanical',
            description: 'Trail-brake deep into Turn 11 to carry 3+ mph higher entry speed while hitting target lap time under 1:39.0.',
            criteria: 'Target entry speed and lap time under 1:39.0 met.'
          }
        },
        {
          id: 5,
          title: 'Trail-Braking Application',
          focus: 'Using trail-braking effectively',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 98.5,
          difficulty: 3,
          theory: {
            title: 'Mastering the Trail-Brake',
            content: `Trail-braking isn't just about carrying brakes—it's about controlling rotation and car balance across different corner shapes.

### Avoiding Mistakes
- **Too much brake**: Overloads front tires, causing severe understeer.
- **Too little brake**: Leaves front unloaded, causing car to push wide.
- **Abrupt release**: Causes sudden weight shift back to rear, resulting in snap oversteer!`,
            keyTakeaways: [
              'Progressive brake release is essential for chassis stability',
              'Match trail-braking depth to corner geometry (hairpin vs sweeping turn)',
              'Sensitivity on pedal release separates amateur drivers from masters'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Trail-brake balance & precision',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Consistent Trail-Brake', desc: 'Trail-brake to the exact same release point every lap in Turn 2.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Trail-Brake Balance', desc: 'Adjust pedal release speed in Turn 6 to eliminate understeer or oversteer.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'All-Corner Trail-Braking', desc: 'Execute tailored trail-braking across every corner on the track.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Corner Entry Precision',
            focus: 'Chassis balance and linear bleed',
            laps: 7,
            instructions: [
              'Drive 7 laps fine-tuning trail-braking release.',
              'Ensure smooth chassis balance without twitching or understeer push.'
            ]
          },
          challenge: {
            title: 'Perfect Balance Challenge',
            type: 'technique',
            description: 'Execute balanced trail-braking across 5 major corners with smooth rotation and zero steering corrections.',
            criteria: '5 balanced corner entries logged.'
          }
        },
        {
          id: 6,
          title: 'The Friction Circle',
          focus: 'Understanding grip limits',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 98.0,
          difficulty: 3,
          theory: {
            title: 'The Circle of Grip',
            content: `The friction circle represents the total maximum traction available from your tires in any combined direction (braking, cornering, acceleration).

### Vector Combination
- **100% Braking / 0% Cornering**: Straight-line threshold braking.
- **80% Braking / 20% Cornering**: Initial turn-in transition.
- **60% Braking / 40% Cornering**: Mid-trail-braking phase.
- **0% Braking / 100% Cornering**: Pure lateral mid-corner apex.`,
            keyTakeaways: [
              'Tire traction is a finite pool shared between longitudinal and lateral forces',
              'Operating along the perimeter of the friction circle maximizes speed',
              'Smooth vector transitions prevent sudden loss of control'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Friction circle vector management',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '100% Straight-Line Braking', desc: 'Brake at 100% threshold in straight line, fully releasing before turning.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Brake-Turning (80/20 Vector)', desc: 'Transition from 80% brake to 20% steering smoothly at Turn 2.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Trail-Braking (60/40 Vector)', desc: 'Operate right on 60% brake / 40% steering friction circle boundary.', reps: 8, time: '10 min' }
            ]
          },
          practice: {
            focus: 'Friction circle vector management',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: '100% Straight-Line Braking', desc: 'Brake at 100% threshold in straight line, fully releasing before turning.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Brake-Turning (80/20 Vector)', desc: 'Transition from 80% brake to 20% steering smoothly at Turn 2.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Trail-Braking (60/40 Vector)', desc: 'Operate right on 60% brake / 40% steering friction circle boundary.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Operating on the Limit Circle',
            focus: 'Smooth friction vector transitions',
            laps: 6,
            instructions: [
              'Drive 6 laps visualizing the friction circle boundary.',
              'Smoothly trade longitudinal braking force for lateral cornering force.'
            ]
          },
          challenge: {
            title: 'Circle Boundary Challenge',
            type: 'technique',
            description: 'Complete a full lap keeping tire grip right at the friction circle boundary without exceeding total traction.',
            criteria: 'Full lap completed within friction limits.'
          }
        },
        {
          id: 7,
          title: 'Practice + New Track',
          focus: 'Applying skills to Road Atlanta',
          car: 'Mazda MX-5',
          track: 'Road Atlanta',
          targetLapTime: 100.0,
          difficulty: 3,
          theory: {
            title: 'Braking on a New Track',
            content: `You have mastered braking at Laguna Seca. Now apply those core skills to Road Atlanta's high-speed, elevation-heavy layout.

### Key Differences at Road Atlanta
- **Turn 1**: High speed entry with heavy compression.
- **Turn 6**: Downhill trail-braking entry where rear unloads.
- **Turn 10a/10b**: Severe downhill threshold braking into tight chicane.`,
            keyTakeaways: [
              'Core braking principles apply universally across all tracks',
              'Elevation drops unweight tires; elevation compressions increase grip',
              'Establish visual brake boards (100m, 50m) before pushing for lap times'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Road Atlanta braking zone mapping',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Identify Braking Zones', desc: 'Drive 3 slow laps at Road Atlanta, identifying all 6 braking zones.', reps: 3, time: '6 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Find Brake Board References', desc: 'Establish 100m/50m reference markers for Turn 1, 6, and 10a.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Braking Technique Application', desc: 'Apply threshold braking in Turn 1 and deep trail-braking in Turn 6.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Road Atlanta Braking Exploration',
            focus: 'Braking reference points at Road Atlanta',
            laps: 7,
            instructions: [
              'Drive 7 laps learning Road Atlanta braking zones.',
              'Establish reliable visual brake reference points for every corner.'
            ]
          },
          challenge: {
            title: 'Clean Atlanta Lap Challenge',
            type: 'mechanical',
            description: 'Complete a clean lap of Road Atlanta using proper threshold and trail-braking with target time under 1:40.0.',
            criteria: 'Target lap time 1:40.0 met.'
          }
        },
        {
          id: 8,
          title: 'Road Atlanta Braking',
          focus: 'Braking on a new track',
          car: 'Mazda MX-5',
          track: 'Road Atlanta',
          targetLapTime: 99.0,
          difficulty: 3,
          theory: {
            title: 'Mastering Road Atlanta\'s Braking',
            content: `Road Atlanta features some of the most technical braking zones in sim racing. Mastering them requires tailored techniques.

### Corner Breakdown
- **Turn 1**: Threshold braking down straightaway into sweeping right.
- **Turn 3**: Light trail-braking to tuck front end into the hill.
- **Turn 6**: Heavy trail-braking past downhill crest to rotate chassis.
- **Turn 12**: Downhill threshold braking into final straightaway launch.`,
            keyTakeaways: [
              'Brake before crests when chassis unweights to prevent wheel lockup',
              'Trail-braking in Turn 6 is critical for getting car rotated early',
              'Turn 12 late apex and smooth brake release determine front-straight top speed'
            ],
            diagramId: 'corner-path-comparison'
          },
          practice: {
            focus: 'Challenging braking zones at Road Atlanta',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Turn 1 Threshold Braking', desc: 'Brake at 100m board with 95% threshold pressure.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Turn 6 Downhill Trail-Brake', desc: 'Trail-brake downhill into Turn 6 without locking inner front tire.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Full Atlanta Attack', desc: 'Connect all braking zones at race pace in the Mazda MX-5.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Atlanta Braking Attack',
            focus: 'Turn 1, 6, 10a, and 12 execution',
            laps: 7,
            instructions: [
              'Drive 7 focused laps at Road Atlanta.',
              'Master the downhill weight transfer in Turn 6 and Turn 10a.'
            ]
          },
          challenge: {
            title: 'Turn 12 Straightaway Launch',
            type: 'mechanical',
            description: 'Brake 10m later at Turn 12 while maintaining exit trajectory to achieve target lap time under 1:39.0.',
            criteria: 'Target lap time 1:39.0 met.'
          }
        },
        {
          id: 9,
          title: 'Brake Point Consistency',
          focus: 'Braking at the same point every lap',
          car: 'Subaru BRZ',
          track: 'Road Atlanta',
          targetLapTime: 98.0,
          difficulty: 4,
          theory: {
            title: 'The Power of Consistency',
            content: `Braking at the exact same point every lap is the foundation of race pace and consistency. Varied brake points create erratic entry speeds and mistakes.

### The Rule of Reference Markers
- Pick fixed, unmoving visual landmarks (brake boards, start of curb, overhead banner).
- Never use shadows, moving cars, or tire marks as primary references!
- Commit to braking the instant your eyes reach your visual marker.`,
            keyTakeaways: [
              'Identical brake points yield predictable corner entry speeds',
              'Use fixed visual landmarks like 100m boards and curb origins',
              'Consistency creates a stable platform for improving lap times'
            ],
            diagramId: 'pedal-squeeze-diagram'
          },
          practice: {
            focus: 'Brake point precision & repeatability',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Single Marker Commitment', desc: 'Brake at exact 100m board in Turn 1 for 5 consecutive laps.', reps: 5, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Multi-Corner Marker Precision', desc: 'Hit exact brake markers for Turn 1, 6, and 12 without variance.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Sub-1 Meter Variance Stint', desc: 'Drive 8 laps maintaining less than 1 meter variance in all braking points.', reps: 8, time: '12 min' }
            ]
          },
          practical: {
            title: 'Brake Point Precision Stint',
            focus: 'Repeatable braking application',
            laps: 8,
            instructions: [
              'Drive 8 continuous laps in the Subaru BRZ at Road Atlanta.',
              'Focus on zero brake point variance across all 8 laps.'
            ]
          },
          challenge: {
            title: 'Zero Variance Challenge',
            type: 'mechanical',
            description: 'Complete 5 consecutive laps with less than 1 meter variation in brake initial application points.',
            criteria: 'Consistency metrics verified.'
          }
        },
        {
          id: 10,
          title: 'Self-Diagnosis',
          focus: 'Critical self-evaluation',
          car: 'Subaru BRZ',
          track: 'Laguna Seca',
          targetLapTime: 97.5,
          difficulty: 4,
          theory: {
            title: 'Diagnosing Braking Problems',
            content: `Top drivers can instantly diagnose why a corner entry felt bad and correct it on the very next lap.

### Diagnostic Matrix
- **Front Tire Lockup**: Excess initial brake pressure or braking while turning too hard.
- **Entry Understeer**: Insufficient trail-braking or entering corner too fast.
- **Entry Oversteer**: Abrupt pedal lift-off or over-aggressive trail-braking.
- **Long Stopping Distance**: Failing to reach true threshold pressure.`,
            keyTakeaways: [
              'Diagnose the root physical cause, not just the symptom',
              'Understeer = inadequate front weight transfer or excessive entry speed',
              'Oversteer = abrupt brake release or sudden weight shift'
            ],
            diagramId: 'pedal-squeeze-diagram'
          },
          practice: {
            focus: 'Self-assessment and issue correction',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Lap Telemetry Review', desc: 'Drive 1 lap, self-assess braking errors in Turn 2 and 6.', reps: 1, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Diagnose & Fix', desc: 'Identify 1 braking issue on lap 1, correct it on lap 2.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Full Corner Self-Audit', desc: 'Audit all 11 corners of Laguna Seca during an 8-lap stint.', reps: 8, time: '12 min' }
            ]
          },
          practical: {
            title: 'Driver Self-Correction',
            focus: 'Identifying and fixing braking flaws',
            laps: 7,
            instructions: [
              'Drive 7 laps self-diagnosing telemetry feel after every corner.',
              'Adjust pressure build, hold, and release based on car feedback.'
            ]
          },
          challenge: {
            title: 'Braking Audit Challenge',
            type: 'technique',
            description: 'Identify and correct a braking flaw during a 5-lap stint, improving lap time by 0.5+ seconds.',
            criteria: 'Target lap time 1:37.5 met.'
          }
        },
        {
          id: 11,
          title: 'Putting It Together',
          focus: 'All skills combined, faster car',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 97.0,
          difficulty: 4,
          theory: {
            title: 'The Complete Braking Picture',
            content: `Step up to the high-performance Porsche Cayman GT4! Mid-engine layout and high-downforce brakes demand smooth, decisive pedal modulation.

### The Complete Corner Entry Chain
1. Spot visual brake reference
2. Rapid transition from throttle to brake (no coasting)
3. Hold threshold deceleration in straight line
4. Bleed brake pressure as steering turns in
5. Trail-brake to apex for mid-engine rotation
6. Smooth release to zero brake at apex and pick up throttle`,
            keyTakeaways: [
              'The Cayman GT4 has immense stopping power but requires smooth pedal release',
              'Mid-engine weight bias amplifies rotation under trail-braking',
              'Combine all 5 braking skills into one fluid entry movement'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Cayman GT4 high-performance braking',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Cayman Braking Feel', desc: 'Feel GT4 stopping power and mid-engine rotation at Turn 2.', reps: 3, time: '5 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Complete Sequence Execution', desc: 'Execute full transition → threshold → trail-brake → throttle sequence.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: 'Cayman Speed Attack', desc: 'Push GT4 to braking limit across all corners at Laguna Seca.', reps: 8, time: '10 min' }
            ]
          },
          practical: {
            title: 'Mastering High-Performance Braking',
            focus: 'GT4 stopping power & rotation',
            laps: 8,
            instructions: [
              'Drive 8 focused laps in the Porsche Cayman GT4.',
              'Apply every braking skill seamlessly at higher speeds.'
            ]
          },
          challenge: {
            title: 'GT4 High Score Challenge',
            type: 'mechanical',
            description: 'Achieve an overall braking execution score of 8/10+ across 3 consecutive laps in the Cayman GT4.',
            criteria: 'Target lap time 1:37.0 met.'
          }
        },
        {
          id: 12,
          title: 'Module Mastery',
          focus: 'Module assessment and achievement',
          car: 'Porsche Cayman GT4',
          track: 'Laguna Seca',
          targetLapTime: 96.5,
          difficulty: 5,
          theory: {
            title: 'Module 2 Graduation: The Braking Master',
            content: `Congratulations on reaching Session 12 of Module 2! You have spent 30 days mastering pedal transitions, threshold braking, brake-turning, trail-braking, friction circle management, and driver self-diagnosis.

Today is your final 10-lap graduation stint!`,
            keyTakeaways: [
              'Brakes are a tool for car positioning and rotation, not just slowing down',
              'Trail-braking is the key to elite corner entry speed',
              'You are ready for Module 3: Corner Exit & Car Control!'
            ],
            diagramId: 'weight-transfer-friction-circle'
          },
          practice: {
            focus: 'Module 2 Final Assessment',
            drills: [
              { id: 'easy', level: '🟢 Easy', title: 'Warm-Up Lap', desc: '1 slow lap feeling brake pedal modulation and car balance.', reps: 1, time: '4 min' },
              { id: 'medium', level: '🟡 Medium', title: 'Assessment Stint', desc: '5 laps at race pace refining trail-braking depth.', reps: 5, time: '8 min' },
              { id: 'hard', level: '🔴 Hard', title: '10-Lap Graduation Stint', desc: 'Complete 10 continuous clean laps for Module 2 graduation.', reps: 10, time: '18 min' }
            ]
          },
          practical: {
            title: 'Module 2 Graduation Stint',
            focus: '10 continuous clean laps',
            laps: 10,
            instructions: [
              'Drive 10 continuous clean laps in the Porsche Cayman GT4.',
              'Demonstrate complete mastery of threshold and trail-braking.'
            ]
          },
          challenge: {
            title: 'Module 2 Graduation',
            type: 'mechanical',
            description: 'Set a lap time under 1:36.5 in the Porsche Cayman GT4 at Laguna Seca while maintaining 10 clean laps.',
            criteria: 'Module 2 Completed!'
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Corner Exit & Car Control',
      subtitle: 'Maximizing Acceleration & Oversteer Recovery',
      description: 'Master throttle application, slip angle, counter-steering, catching spins, and launching onto long straights.',
      duration: '12 Sessions (30 Days)',
      sessions: []
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
The stiffness of suspension springs (measured in lbs/in or N/mm). Stiffer springs reduce pitch and roll.`
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
    }
  }
};

window.APEX_CONTENT = APEX_CONTENT;


