import type { PortfolioData } from '@/types/portfolio'

export const portfolio: PortfolioData = {
  name: 'Jeewantha Sadaruwan',
  initials: 'JS',
  mainRole: 'Electronic & Telecommunication Engineering Undergraduate',
  secondaryRoles: [
    'Innovator',
    'AI Enthusiast',
    'Roboticist',
    'Autonomous Systems Developer',
    'Researcher',
    'Agentic AI Developer',
  ],
  heroRoles: [
    {
      label: 'Innovator',
      image: {
        src: '/hero-roles/img2.jpeg',
        alt: 'Jeewantha Sadaruwan representing innovation work',
      },
    },
    {
      label: 'AI Enthusiast',
      image: {
        src: '/hero-roles/img3.jpeg',
        alt: 'Jeewantha Sadaruwan representing artificial intelligence interests',
      },
    },
    {
      label: 'Roboticist',
      image: {
        src: '/hero-roles/img6.jpeg',
        alt: 'Jeewantha Sadaruwan representing robotics work',
      },
    },
    {
      label: 'Autonomous Systems Developer',
      image: {
        src: '/hero-roles/img5.jpg',
        alt: 'Jeewantha Sadaruwan representing autonomous systems development',
      },
    },
    {
      label: 'Researcher',
      image: {
        src: '/hero-roles/img4.jpeg',
        alt: 'Jeewantha Sadaruwan representing research work',
      },
    },
    {
      label: 'Agentic AI Developer',
      image: {
        src: '/hero-roles/img1.jpeg',
        alt: 'Jeewantha Sadaruwan representing agentic AI development',
      },
    },
  ],
  headline: 'I build intelligent AI and robotic systems that can perceive, reason, and act.',
  introduction:
    'Focused on Robotics, Embodied AI, Agentic AI, computer vision, multi-agent systems and Autonomous Systems.',
  about: {
    heading: 'About Me',
    subtitle: 'Building intelligent systems that connect AI, robotics, and autonomous decision-making.',
    paragraphs: [
      'I am an Electronic and Telecommunication Engineering undergraduate at the University of Moratuwa, Sri Lanka, focused on Artificial Intelligence, robotics, Agentic AI, and Embodied AI.',
      'I enjoy building intelligent systems that combine perception, reasoning, navigation, and autonomous action in real-world and simulated environments.',
    ],
    expertise: [
      {
        title: 'Agentic AI',
        description: 'Tool-using agents, LLM workflows, planning, and autonomous decision-making.',
        icon: 'agentic-ai',
      },
      {
        title: 'Embodied AI',
        description: 'Intelligent systems that perceive, reason, navigate, and act.',
        icon: 'embodied-ai',
      },
      {
        title: 'Computer Vision',
        description: 'Visual perception, object understanding, scene interpretation, and robotic awareness.',
        icon: 'computer-vision',
      },
      {
        title: 'Robotics & Autonomy',
        description: 'ROS 2, SLAM, robot navigation, computer vision, and autonomous systems.',
        icon: 'robotics-autonomy',
      },
    ],
  },
  availability: 'Open to AI, robotics, research, and intelligent systems opportunities',
  location: 'Sri Lanka',
  email: 'sadaruwanijmj.22@uom.lk',
  emailHref: 'mailto:sadaruwanijmj.22@uom.lk',
  resumePath: '/resume/jeewantha-sadaruwan-resume.pdf',
  socials: [
    {
      platform: 'GitHub',
      label: 'GitHub',
      href: 'https://github.com/JeewanthaSadaruwan',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeewantha-sadaruwan-53922a261',
    },
    {
      platform: 'Email',
      label: 'Email',
      href: 'mailto:sadaruwanijmj.22@uom.lk',
    },
  ],
  skills: [
    {
      title: 'Robotics & Autonomy',
      items: [
        'ROS 2',
        'SLAM',
        'Navigation',
        'Gazebo',
        'Webots',
        'Autonomous mobile robots',
        'Multi-agent systems',
      ],
    },
    {
      title: 'Embedded Systems',
      items: [
        'STM32',
        'ESP32',
        'Raspberry Pi',
        'Jetson Nano',
        'Sensor integration',
        'Motor control',
        'Bare-metal programming',
      ],
    },
    {
      title: 'AI, ML & Vision',
      items: [
        'Machine learning',
        'Computer vision',
        'OpenCV',
        'PCA',
        'Classification',
        'TinyML',
        'Vision-Language Models',
      ],
    },
    {
      title: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'MATLAB'],
    },
    {
      title: 'Engineering Tools',
      items: [
        'Altium Designer',
        'SolidWorks',
        'Multisim',
        'LTspice',
        'Simulink',
        'Quartus Prime',
        'Git',
        'GitHub',
      ],
    },
    {
      title: 'Professional Skills',
      items: [
        'Leadership',
        'Project management',
        'Critical thinking',
        'Problem solving',
        'Team collaboration',
        'Technical communication',
      ],
    },
  ],
  technologies: [
    {
      title: 'Core engineering stack',
      items: ['ROS 2', 'Python', 'C++', 'STM32', 'ESP32', 'Gazebo', 'Webots'],
    },
    {
      title: 'Current focus',
      items: [
        'Robot autonomy',
        'SLAM',
        'Multi-agent orchestration',
        'Vision-Language Models',
        'Vision-Language-Action Models',
      ],
    },
  ],
  experience: [
    {
      role: 'Robotics & AI Intern',
      organization: 'WSO2 Lanka (Pvt) Ltd',
      location: 'Sri Lanka',
      startDate: 'Nov 2025',
      endDate: 'Present',
      description:
        'Working on autonomy and intelligent behavior for the Unitree Go2 EDU quadruped robot, with a focus on SLAM, indoor navigation, and multi-agent integration.',
      achievements: [
        'Integrated a SLAM-based autonomy pipeline for indoor mapping and navigation on the Unitree Go2 EDU platform.',
        'Validated localization and repeatable goal execution across multiple indoor floors.',
        'Integrating RobotecAI RAI for agent-based orchestration and higher-level behavior execution.',
      ],
      technologies: [
        'Unitree Go2 EDU',
        'ROS 2',
        'SLAM',
        'Navigation',
        'RobotecAI RAI',
        'Multi-agent systems',
      ],
      organizationLink: 'https://wso2.com/',
      example: false,
    },
  ],
  education: [
    {
      institution: 'University of Moratuwa',
      qualification:
        'B.Sc. in Electronic & Telecommunication Engineering — Third-year undergraduate',
      dates: 'Feb 2023 – Present',
      description:
        'Undergraduate studies in electronic and telecommunication engineering with a cumulative GPA of 3.75/4.00.',
      coursework: [
        'Robotics',
        'Embedded systems',
        'Control systems',
        'Signal processing',
        'Electronics',
        'Machine learning',
      ],
    },
    {
      institution: 'Bandaranayake College, Gampaha',
      qualification:
        'G.C.E. Advanced Level — Physical Science Stream',
      dates: 'Jan 2013 – Jun 2022',
      description:
        'Achieved three A grades in Combined Mathematics, Physics, and Chemistry, with a Z-score of 2.4875 and an all-island rank of 166.',
      coursework: ['Combined Mathematics', 'Physics', 'Chemistry'],
    },
    {
      institution: 'ESOFT Metro Campus',
      qualification:
        'Diploma in Information Technology and Diploma in English — Pearson Assured',
      dates: 'Completed',
      description:
        'Completed Pearson Assured diploma programs in Information Technology and English.',
      coursework: ['Information Technology', 'English'],
    },
  ],
  certifications: [
    {
      title: 'ROS 2 for Beginners — ROS Jazzy 2025',
      issuer: 'Udemy',
      date: 'Mar 2025',
      link: '',
    },
    {
      title: 'Embedded Systems Bare-Metal Programming Ground Up — STM32',
      issuer: 'Udemy',
      date: 'Feb 2025',
      link: '',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      date: 'Aug 2024',
      link: '',
    },
    {
      title: 'Diploma in Information Technology — Pearson Assured',
      issuer: 'ESOFT Metro Campus',
      date: 'Completed',
      link:
        'https://drive.google.com/drive/folders/1I3rKdFNMXIXQ2p9PLnBINH46TiAmjh-h?usp=sharing',
    },
    {
      title: 'Diploma in English — Pearson Assured',
      issuer: 'ESOFT Metro Campus',
      date: 'Completed',
      link:
        'https://drive.google.com/drive/folders/1mjh7tR9u43-t6cYGBNm8LxXMBWNTw-RE?usp=sharing',
    },
  ],
  achievements: [
    {
      title: 'First Runner-Up — IEEE Challenge Sphere Arduino Challenge 2024',
      type: 'Competition',
      date: 'Oct 2024',
      description:
        'Co-developed a smart organic-waste management system designed to reduce methane emissions from organic waste.',
    },
    {
      title: 'First Runner-Up — IEEE AI Challenge',
      type: 'Competition',
      date: 'Oct 2025',
      description:
        'Developed an AI-enabled Smart Transit Companion for trains, providing real-time guidance and commuter assistance.',
    },
    {
      title: 'First Runner-Up — IEEE Silicon Pulse Competition',
      type: 'Competition',
      date: 'Feb 2025',
      description:
        'Built a triangular-wave function generator using analog components within a 24-hour competition.',
    },
    {
      title: 'Finalist — IESL Robogames 2024',
      type: 'Competition',
      date: 'Apr 2025',
      description:
        'Implemented a Webots maze-solving algorithm, built a custom robot, and controlled a Kobuki robot during the final challenge.',
    },
    {
      title: 'Top 10 — ElectroCombat Battle Robot Competition 2024',
      type: 'Competition',
      date: 'Jul 2024',
      description:
        'Built a battle robot with a vertical spinning weapon and efficient control system, finishing in the top 10 among more than 60 teams.',
    },
    {
      title: 'Mahapola Higher Education Merit Scholarship',
      type: 'Scholarship',
      date: 'Awarded',
      description:
        'Awarded for outstanding G.C.E. Advanced Level performance and an all-island rank of 166.',
    },
  ],
  leadership: [
    {
      title: 'Co-Founder — JASPERN Innovations',
      type: 'Leadership',
      date: 'Mar 2023 – Present',
      description:
        'Co-building a Sri Lankan robotics initiative focused on developing recognition, practical engineering capability, and future automation solutions.',
    },
    {
      title: 'Chairman — Sri Lankan Robotics Challenge 2025/2026',
      type: 'Leadership',
      date: 'Jun 2025 – Present',
      description:
        'Leading one of Sri Lanka’s major national robotics competitions, including corporate engagement with sponsors and partners.',
    },
    {
      title: 'Event Coordinator — Sri Lankan Robotics Challenge 2024/2025',
      type: 'Leadership',
      date: 'Apr 2024',
      description:
        'Supported the planning and coordination of national-level robotics competition activities for school and university teams.',
    },
  ],
  projects: [
    {
      title: 'Autonomous Mobile Robot Controller for Warehouses',
      slug: 'autonomous-mobile-robot-warehouse-controller',
      shortSummary:
        'An autonomous warehouse robot combining microcontroller-level motion control, Jetson-based high-level computing, ROS 2 navigation, and SLAM.',
      problem:
        'Warehouse environments require mobile robots that can localize, navigate safely, and respond reliably while coordinating low-level hardware and high-level autonomy.',
      solution:
        'Built a two-level robotics architecture with a microcontroller for real-time control and a Jetson Nano B01 for mapping, planning, and navigation.',
      challenges: [
        'Integrating sensing, motor control, odometry, localization, and high-level navigation.',
        'Creating and validating warehouse simulation environments before physical deployment.',
      ],
      outcome:
        'Implemented the ROS 2 Humble SLAM Toolbox and navigation stack while continuing development of custom SLAM and warehouse simulations.',
      technologies: [
        'ROS 2 Humble',
        'SLAM Toolbox',
        'Navigation',
        'Gazebo',
        'Jetson Nano',
        'NEMA 24',
        'Lakibeam 1S LiDAR',
        'BNO055 IMU',
      ],
      category: 'Other',
      featured: true,
      thumbnail: {
        src: '/projects/amr/thumbnail.webp',
        alt: 'Autonomous mobile robot developed for warehouse automation',
      },
      gallery: [
        {
          src: '/projects/amr/gallery-01.webp',
          alt: 'Warehouse autonomous mobile robot hardware platform',
        },
      ],
      githubLink: 'https://github.com/AMR-Platform',
      liveDemoLink: '',
      status: 'In progress',
      year: '2025 – Present',
      goals: [
        'Develop reliable warehouse autonomy',
        'Combine real-time low-level control with high-level navigation',
        'Evaluate SLAM and navigation in simulation and real environments',
      ],
      contribution:
        'Contributed to system architecture, robotics integration, SLAM and navigation development, simulation, sensing, and motion-control planning.',
      technicalDecisions: [
        'Separated real-time low-level control from high-level perception and navigation.',
        'Used ROS 2 Humble with Gazebo, SLAM Toolbox, and the navigation stack for modular development.',
      ],
    },
    {
      title: 'Battle Robot Platform',
      slug: 'battle-robot-platform',
      shortSummary:
        'A modular metal battle robot platform with a vertical spinning weapon and a high-performance control system.',
      problem:
        'A competition robot must survive impacts while remaining controllable, maintainable, and powerful within strict design constraints.',
      solution:
        'Designed a sturdy modular platform with a metal chassis, vertical spinning weapon, and efficient control mechanism.',
      challenges: [
        'Balancing structural durability, weapon performance, and controllability.',
        'Building a maintainable platform suitable for rapid competition repairs.',
      ],
      outcome:
        'The platform finished in the top 10 among more than 60 teams at the ElectroCombat Battle Robot Competition 2024.',
      technologies: [
        'Embedded control',
        'Motor control',
        'Mechanical design',
        'Metal fabrication',
        'Electronics',
      ],
      category: 'Other',
      featured: true,
      thumbnail: {
        src: '/projects/battle-robot/thumbnail.webp',
        alt: 'Battle robot platform with a vertical spinning weapon',
      },
      gallery: [
        {
          src: '/projects/battle-robot/gallery-01.webp',
          alt: 'Competition battle robot mechanical platform',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/Battle-Robot-Platform',
      liveDemoLink: '',
      status: 'Ongoing',
      year: '2024 – Present',
      goals: [
        'Build a durable competition robot',
        'Develop an effective control system',
        'Maintain a modular and repairable design',
      ],
      contribution:
        'Contributed to mechanical construction, modular platform design, electronics, and control-system development.',
      technicalDecisions: [
        'Used a metal structure for impact resistance.',
        'Adopted a modular architecture to simplify maintenance and iterative upgrades.',
      ],
    },
    {
      title: 'MicroJAS Micromouse Robot Platform',
      slug: 'microjas-micromouse-robot',
      shortSummary:
        'A custom micromouse robot platform with an STM32 controller, encoder-equipped motors, infrared wall sensing, and a two-layer PCB.',
      problem:
        'Fast maze-solving robots require compact sensing, precise motor control, and reliable embedded hardware.',
      solution:
        'Designed a custom two-layer PCB integrating the STM32F405RGT6, infrared wall sensors, motor drivers, and encoder-equipped N20 motors.',
      challenges: [
        'Integrating sensing and motor-control hardware within a compact PCB layout.',
        'Achieving reliable wall detection and motion feedback for maze navigation.',
      ],
      outcome:
        'Produced a dedicated embedded platform for future high-speed micromouse control and maze-solving development.',
      technologies: [
        'STM32F405RGT6',
        'C/C++',
        'PCB design',
        'TB6612FNG',
        'IR sensing',
        'Encoder odometry',
      ],
      category: 'Other',
      featured: true,
      thumbnail: {
        src: '/projects/microjas/thumbnail.webp',
        alt: 'MicroJAS micromouse robot and custom PCB',
      },
      gallery: [
        {
          src: '/projects/microjas/gallery-01.webp',
          alt: 'Custom two-layer PCB for the MicroJAS micromouse robot',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/MicroJAS---Micromouse-Robot',
      liveDemoLink: '',
      status: 'Prototype',
      year: '2025',
      goals: [
        'Create compact custom hardware',
        'Support accurate wall sensing',
        'Enable precise closed-loop motion control',
      ],
      contribution:
        'Designed the custom PCB and integrated the microcontroller, sensor, motor-driver, and encoder interfaces.',
      technicalDecisions: [
        'Selected an STM32F405RGT6 for real-time embedded control.',
        'Used dedicated infrared emitters and phototransistors for wall detection.',
      ],
    },
    {
      title: 'Fitness Tracker with Machine Learning',
      slug: 'fitness-tracker-machine-learning',
      shortSummary:
        'A machine-learning pipeline for recognizing barbell exercises and estimating repetitions from wearable motion-sensor data.',
      problem:
        'Raw accelerometer and gyroscope signals are difficult to interpret directly for exercise classification and repetition counting.',
      solution:
        'Created a data-processing and model-evaluation workflow covering visualization, outlier detection, feature engineering, PCA, classification, and repetition estimation.',
      challenges: [
        'Cleaning noisy time-series sensor data.',
        'Selecting useful features and comparing models with different assumptions.',
      ],
      outcome:
        'Built and evaluated Naive Bayes, SVM, Random Forest, and Neural Network classifiers for exercise recognition.',
      technologies: [
        'Python',
        'Machine learning',
        'PCA',
        'Naive Bayes',
        'SVM',
        'Random Forest',
        'Neural Networks',
        'Sensor data',
      ],
      category: 'AI/ML',
      featured: true,
      thumbnail: {
        src: '/projects/fitness-tracker/thumbnail.webp',
        alt: 'Machine-learning fitness tracker data analysis preview',
      },
      gallery: [
        {
          src: '/projects/fitness-tracker/gallery-01.webp',
          alt: 'Exercise sensor data visualization and model analysis',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/Fitness-Tracker.git',
      liveDemoLink: '',
      status: 'In progress',
      year: '2025 – Present',
      goals: [
        'Recognize exercise types from wearable sensors',
        'Estimate repetition counts',
        'Compare multiple machine-learning models',
      ],
      contribution:
        'Performed data exploration, outlier handling, feature engineering, dimensionality reduction, model training, and evaluation.',
      technicalDecisions: [
        'Used PCA to investigate lower-dimensional feature representations.',
        'Compared multiple classical and neural approaches rather than relying on a single model.',
      ],
    },
    {
      title: 'Advanced Maze-Solving Robot Simulation',
      slug: 'advanced-maze-solving-webots',
      shortSummary:
        'An A*-based robot pathfinding system in Webots with dynamic obstacle avoidance and modular maze environments.',
      problem:
        'Autonomous robots must plan efficient paths while reacting to changing obstacles inside structured environments.',
      solution:
        'Implemented A* pathfinding in C++ and tested it across modular Webots maze environments with dynamic obstacle handling.',
      challenges: [
        'Maintaining efficient path planning as the environment changes.',
        'Connecting simulation state, robot motion, and obstacle updates.',
      ],
      outcome:
        'Created a reusable simulation workflow for evaluating maze-solving and navigation behavior.',
      technologies: ['Webots', 'C++', 'A* pathfinding', 'Robot simulation'],
      category: 'Other',
      featured: false,
      thumbnail: {
        src: '/projects/maze-solving/thumbnail.webp',
        alt: 'Webots maze-solving robot simulation',
      },
      gallery: [
        {
          src: '/projects/maze-solving/gallery-01.webp',
          alt: 'Robot navigating a modular maze environment in Webots',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/Webots---Maze-Solving-Robot-Simulation',
      liveDemoLink: '',
      status: 'Completed',
      year: '2024',
      goals: [
        'Implement efficient maze navigation',
        'Support dynamic obstacle avoidance',
        'Evaluate algorithms in simulation',
      ],
      contribution:
        'Designed the simulation setup and implemented the A*-based pathfinding and obstacle-avoidance logic.',
      technicalDecisions: [
        'Used A* for goal-directed path planning.',
        'Used modular maze environments to test behavior across multiple layouts.',
      ],
    },
    {
      title: 'Vision-Based Navigation of a Kobuki Robot',
      slug: 'vision-based-kobuki-navigation',
      shortSummary:
        'An autonomous Kobuki robot using Raspberry Pi and OpenCV for real-time visual obstacle detection and navigation.',
      problem:
        'A mobile robot needs to understand visual obstacles and make navigation decisions from live camera input.',
      solution:
        'Combined Raspberry Pi processing, OpenCV vision, and Kobuki mobile-base control for real-time navigation.',
      challenges: [
        'Processing camera input quickly enough for responsive motion.',
        'Translating visual detections into stable robot-control decisions.',
      ],
      outcome:
        'Developed a functional vision-based navigation approach for a Kobuki robot.',
      technologies: ['Kobuki', 'Raspberry Pi', 'OpenCV', 'Python', 'Computer vision'],
      category: 'AI/ML',
      featured: false,
      thumbnail: {
        src: '/projects/kobuki/thumbnail.webp',
        alt: 'Kobuki robot using a camera for autonomous navigation',
      },
      gallery: [
        {
          src: '/projects/kobuki/gallery-01.webp',
          alt: 'Vision-processing setup used for Kobuki robot navigation',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/Vision-Based-Navigation-of-a-Kobuki-Robot',
      liveDemoLink: '',
      status: 'Completed',
      year: '2024',
      goals: [
        'Detect obstacles using a camera',
        'Navigate autonomously',
        'Run vision processing on embedded hardware',
      ],
      contribution:
        'Developed the OpenCV-based perception and navigation workflow and integrated it with the Kobuki robot platform.',
      technicalDecisions: [
        'Used Raspberry Pi for compact onboard processing.',
        'Used OpenCV to build a practical real-time vision pipeline.',
      ],
    },
    {
      title: 'FingerReader Assistive Wearable',
      slug: 'fingerreader-assistive-wearable',
      shortSummary:
        'An ESP32-based wearable concept that reads printed text aloud and provides haptic guidance and fall detection.',
      problem:
        'People with visual impairments may need portable assistance for reading printed text and receiving immediate environmental feedback.',
      solution:
        'Designed an assistive wearable concept combining speech output, haptic guidance, fall detection, and TinyML-based offline recognition.',
      challenges: [
        'Running useful recognition features on constrained embedded hardware.',
        'Combining accessibility feedback modes in a compact wearable design.',
      ],
      outcome:
        'Created a project foundation for an offline assistive reading and guidance device.',
      technologies: ['ESP32', 'TinyML', 'OCR', 'Haptics', 'Speech output', 'Embedded systems'],
      category: 'AI/ML',
      featured: false,
      thumbnail: {
        src: '/projects/fingerreader/thumbnail.webp',
        alt: 'FingerReader assistive wearable concept',
      },
      gallery: [
        {
          src: '/projects/fingerreader/gallery-01.webp',
          alt: 'Assistive wearable prototype for reading printed text',
        },
      ],
      githubLink: '',
      liveDemoLink: '',
      status: 'Prototype',
      year: '2025',
      goals: [
        'Read printed text with audio feedback',
        'Provide haptic guidance',
        'Support offline assistive intelligence',
      ],
      contribution:
        'Worked on the embedded wearable concept, sensing, user feedback, and TinyML-based offline recognition approach.',
      technicalDecisions: [
        'Used ESP32 as the embedded control platform.',
        'Prioritized offline processing to reduce dependence on network connectivity.',
      ],
    },
    {
      title: 'Smart Multi-Outlet',
      slug: 'smart-multi-outlet',
      shortSummary:
        'An ESP32-based multi-outlet system with real-time energy monitoring, remote control, a custom PCB, and a 3D-printed enclosure.',
      problem:
        'Users need better visibility and remote control over the energy consumption of multiple electrical devices.',
      solution:
        'Built a scalable connected outlet platform combining power monitoring, app-based control, custom electronics, and a purpose-built enclosure.',
      challenges: [
        'Integrating safe power measurement and switching electronics.',
        'Designing a compact PCB and enclosure for a multi-outlet system.',
      ],
      outcome:
        'Produced a working smart-energy-management prototype with real-time monitoring and remote control.',
      technologies: ['ESP32', 'PCB design', 'Energy monitoring', 'Remote control', '3D printing'],
      category: 'Other',
      featured: false,
      thumbnail: {
        src: '/projects/smart-outlet/thumbnail.webp',
        alt: 'Smart multi-outlet energy-monitoring prototype',
      },
      gallery: [
        {
          src: '/projects/smart-outlet/gallery-01.webp',
          alt: 'Custom PCB and enclosure for the smart multi-outlet',
        },
      ],
      githubLink:
        'https://github.com/JeewanthaSadaruwan/Smart-Multi-Outlet-',
      liveDemoLink: '',
      status: 'Completed',
      year: '2024',
      goals: [
        'Monitor power usage in real time',
        'Provide remote outlet control',
        'Create a scalable custom hardware design',
      ],
      contribution:
        'Contributed to the ESP32 system, custom PCB, energy-monitoring integration, remote-control workflow, and enclosure design.',
      technicalDecisions: [
        'Used ESP32 for connectivity and control.',
        'Created a custom PCB and 3D-printed enclosure for a compact integrated prototype.',
      ],
    },
  ],
  contact: {
    email: 'sadaruwanijmj.22@uom.lk',
    emailHref: 'mailto:sadaruwanijmj.22@uom.lk',
    location: 'Sri Lanka',
    availability:
      'Open to robotics, autonomous systems, AI research, and collaborative engineering projects',
    formEndpoint: undefined,
  },
}
