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
        src: '/media/hero-roles/img2.jpeg',
        alt: 'Jeewantha Sadaruwan representing innovation work',
      },
    },
    {
      label: 'AI Enthusiast',
      image: {
        src: '/media/hero-roles/img3.jpeg',
        alt: 'Jeewantha Sadaruwan representing artificial intelligence interests',
      },
    },
    {
      label: 'Roboticist',
      image: {
        src: '/media/hero-roles/img6.jpeg',
        alt: 'Jeewantha Sadaruwan representing robotics work',
      },
    },
    {
      label: 'Autonomous Systems Developer',
      image: {
        src: '/media/hero-roles/img5.jpg',
        alt: 'Jeewantha Sadaruwan representing autonomous systems development',
      },
    },
    {
      label: 'Researcher',
      image: {
        src: '/media/hero-roles/img4.jpeg',
        alt: 'Jeewantha Sadaruwan representing research work',
      },
    },
    {
      label: 'Agentic AI Developer',
      image: {
        src: '/media/hero-roles/img1.jpeg',
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
      'I enjoy building intelligent systems that combine perception, reasoning, navigation, and autonomous action in real-world and simulated environments, with a strong interest in practical robotic applications, research-driven engineering, and systems that can interact meaningfully with their surroundings.',
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
  email: 'jeewansadaruwan987@gmail.com',
  emailHref: 'mailto:jeewansadaruwan987@gmail.com',
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
      href: 'mailto:jeewansadaruwan987@gmail.com',
    },
  ],
  skills: [
    {
      title: 'AI & Machine Learning Frameworks',
      items: ['OpenCV', 'PyTorch', 'scikit-learn', 'TensorFlow', 'Ultralytics YOLO'],
    },
    {
      title: 'Generative & Agentic AI',
      items: ['Hugging Face', 'LangChain', 'LangGraph', 'ChromaDB', 'PostgreSQL', 'Strands Agents'],
    },
    {
      title: 'Robotic Development & Simulators',
      items: ['ROS 2', 'Gazebo', 'Webots', 'Habitat-Sim', 'Isaac Sim', 'MuJoCo'],
    },
    {
      title: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'MATLAB'],
    },
    {
      title: 'Electronics & PCB Design Tools',
      items: ['Altium Designer', 'LTspice', 'NI Multisim'],
    },
    {
      title: 'Embedded Platforms',
      items: ['STM32', 'ESP32', 'Raspberry Pi', 'NVIDIA Jetson'],
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
      slug: 'wso2-robotics-ai-intern',
      role: 'Robotics & AI Intern',
      organization: 'WSO2 Lanka (Pvt) Ltd',
      location: 'Sri Lanka',
      startDate: '2025-11-24',
      endDate: '2026-05-11',
      dateLabel: '24 November 2025 – 11 May 2026',
      projectTitle: 'Unitree Go2 Robotics, Autonomous Navigation & Intelligent Agent Integration',
      summary:
        'Worked across autonomous navigation, embodied-agent development, robotic manipulation, intelligent-agent systems, and cloud-based robotics simulation.',
      description:
        'A six-month engineering journey across physical robotics, autonomous navigation, intelligent agents, perception, observability, and cloud-based simulation.',
      projectIntroduction: [
        'The internship progressed from understanding the Unitree Go2 platform and ROS-based development workflow to building and testing connected robotics and artificial-intelligence systems.',
        'The work covered indoor mapping and autonomous navigation, robotic manipulation, tool-using agents, voice and perception integration, agent observability, and cloud-based robot simulation. It demonstrated that an intelligent robotic system depends on the integration of hardware, sensing, localization, planning, control, perception, software services, agent reasoning, monitoring, and safety.',
      ],
      achievements: [
        'Built and refined a SLAM-based mapping, localization, and autonomous navigation workflow for the Unitree Go2.',
        'Connected voice interaction, movement, navigation, camera perception, and basic human recognition to an embodied robotic agent.',
        'Configured Isaac Sim and Isaac Lab environments for Unitree Go2 simulation, walking-policy testing, and teleoperation.',
      ],
      responsibilitiesIntro:
        'My internship work is centered on practical robot integration, indoor autonomy testing, and clear documentation of implementation behaviour.',
      responsibilities: [
        'Integrating autonomy components for indoor mapping, localization, and navigation.',
        'Configuring the Unitree Go2 EDU platform for goal-based indoor navigation.',
        'Testing localization and navigation behaviour in practical indoor environments.',
        'Evaluating repeatable goal execution across multiple floors.',
        'Supporting the integration of RobotecAI RAI above the existing navigation stack.',
        'Documenting implementation decisions, test behaviour, and ongoing technical work.',
      ],
      technicalOverview: [
        'The autonomy pipeline is built around ROS 2 and connects the Unitree Go2 EDU platform with mapping, localization, and navigation components.',
        'The robot first creates or loads an indoor map, estimates its position within that map, and then executes navigation goals while responding to the environment.',
        'The ongoing RobotecAI RAI integration adds a higher-level orchestration layer intended to coordinate agent decisions and robotic behaviour.',
      ],
      technicalImplementation: [
        'Built around the Unitree Go2 EDU platform with ROS 2-based robotics integration.',
        'Integrated a SLAM-based autonomy pipeline for indoor mapping and navigation workflows.',
        'Connected navigation behavior with higher-level orchestration work while keeping RobotecAI RAI integration clearly ongoing.',
      ],
      architectureSteps: [
        'Unitree Go2 EDU Hardware',
        'ROS 2 Integration',
        'SLAM and Localization',
        'Navigation and Goal Execution',
        'RobotecAI RAI Orchestration — Ongoing',
      ],
      contributions: [
        {
          title: 'SLAM-Based Mapping',
          description:
            'Integrated the mapping workflow required to create and use indoor environment maps with the Unitree Go2 EDU platform.',
        },
        {
          title: 'Localization and Navigation',
          description:
            'Configured and tested localization, navigation, and repeatable goal execution in indoor environments.',
        },
        {
          title: 'Practical Validation',
          description:
            'Validated robot behaviour across multiple indoor floors and observed localization stability during repeated navigation tests.',
        },
        {
          title: 'Multi-Agent Integration',
          description:
            'Working on integrating RobotecAI RAI for agent-based orchestration and higher-level behaviour execution.',
          ongoing: true,
        },
      ],
      challenges: [
        'Adapting a mobile-robot navigation workflow to a quadruped platform.',
        'Maintaining reliable localization in changing indoor environments.',
        'Testing behaviour across different floors and physical layouts.',
        'Connecting low-level navigation capabilities with higher-level agent orchestration.',
        'Understanding the relationship between robot hardware, autonomy software, and intelligent decision systems.',
      ],
      validationIntro:
        'The autonomy pipeline was tested through practical indoor mapping and navigation scenarios. Validation focused on localization behaviour, repeatable goal execution, and operation across multiple indoor floors.',
      validationOutcomes: [
        'Developed a practical SLAM, localization, and navigation workflow for the Unitree Go2',
        'Gained hands-on experience with robotic-arm manipulation and inverse kinematics',
        'Built a complete tool-using agent application',
        'Connected intelligent-agent capabilities with physical robot actions',
        'Gained experience with agent traces, evaluation, and safety controls',
        'Configured cloud-based simulation for quadruped locomotion and teleoperation',
      ],
      ongoingWork: [
        'The current phase focuses on integrating RobotecAI RAI with the robotics stack to support agent-based orchestration and higher-level behaviour execution.',
        'This work explores how intelligent agents can coordinate navigation tasks while remaining connected to the underlying robot state and autonomy pipeline.',
      ],
      summaryTechnologies: [
        'Unitree Go2',
        'ROS 2',
        'SLAM',
        'Agentic AI',
        'Embodied AI',
        'Isaac Sim',
      ],
      technologies: [
        'Unitree Go2',
        'D1-T Robotic Arm',
        'ROS 2',
        'SLAM Toolbox',
        'Python',
        'Agentic AI',
        'Computer Vision',
        'Google Cloud',
        'Docker',
        'CUDA',
        'Isaac Sim',
        'Isaac Lab',
      ],
      galleryIntro:
        'Selected images from robot integration, mapping, navigation testing, and ongoing multi-agent development.',
      images: [
        {
          src: '/media/experience/wso2/cover.webp',
          alt: 'Unitree Go2 robotics internship cover media',
          caption: 'Selected public media from the Unitree Go2 robotics internship work.',
        },
        {
          src: '/media/experience/wso2/navigation/slam-comparison.webp',
          alt: 'Enhanced map, initial map, navigation, and path-planning outputs for Unitree Go2 indoor autonomy',
          caption: 'Enhanced map, initial map, navigation output, and path-planning output from the indoor autonomy workflow.',
        },
        {
          src: '/media/experience/wso2/navigation-test.webp',
          alt: 'Navigation path planning test for the Unitree Go2 robot',
          caption: 'Navigation and path-planning test media from the indoor autonomy workflow.',
        },
        {
          src: '/media/experience/wso2/architecture/embodied-agent-architecture.webp',
          alt: 'Embodied agent workflow architecture connected to Unitree Go2 tools and perception',
          caption: 'Embodied-agent workflow connecting voice, tools, robot motion, navigation, and perception.',
        },
        {
          src: '/media/experience/wso2/isaac-sim-go2.webp',
          alt: 'Unitree Go2 robot loaded in Isaac Sim cloud simulation',
          caption: 'Unitree Go2 simulation setup inside Isaac Sim.',
        },
        {
          src: '/media/experience/wso2/robot/robotic-arm.webp',
          alt: 'D1-T robotic arm control and manipulation work',
          caption: 'D1-T robotic-arm setup for calibration, movement testing, and manipulation work.',
        },
      ],
      detailIntroduction:
        'A six-month engineering journey across physical robotics, autonomous navigation, intelligent agents, perception, observability, and cloud-based simulation.',
      storySections: [
        {
          id: 'autonomous-navigation',
          eyebrow: '01 — Autonomous Navigation',
          heading: 'From indoor mapping to autonomous navigation',
          paragraphs: [
            'One of my primary responsibilities was developing a SLAM-based indoor navigation workflow for the Unitree Go2 quadruped robot. I configured the ROS workspace and SLAM components required to build maps, estimate the robot’s position, and support goal-based navigation.',
            'The initial mapping experiments confirmed that the workflow was feasible, but they also revealed distorted areas, unclear environment boundaries, and occasional localization instability. I refined the configuration through repeated experiments, parameter adjustments, and comparisons between mapping outputs.',
            'After producing a more usable map, I configured and tested autonomous navigation. The robot was required to localize itself, generate a path, and move toward selected goals within the mapped environment.',
            'This work showed the practical relationship between map quality, localization, path planning, and motion execution. An inaccurate map or localization estimate directly affected the generated path and the robot’s behaviour.',
          ],
          highlights: [
            'Configured SLAM-based indoor mapping on the Unitree Go2',
            'Refined mapping parameters to improve map consistency',
            'Tested localization across multiple indoor environments',
            'Inspected generated navigation paths',
            'Validated repeatable goal execution in tested scenarios',
            'Prepared the navigation capability for later agent integration',
          ],
          mediaIds: ['initial-map', 'enhanced-map', 'navigation-output', 'path-planning-output', 'slam-demo-video'],
        },
        {
          id: 'embodied-ai',
          eyebrow: '02 — Embodied AI',
          heading: 'Connecting an intelligent agent with a physical robot',
          paragraphs: [
            'The next stage connected an intelligent agent with the Unitree Go2 so that the robot could receive user instructions, select tools, perceive its environment, and perform physical actions.',
            'I integrated voice-based interaction and exposed robot functions as agent tools. These tools supported movement, stopping, turning, navigation, image capture, and perception-related operations.',
            'The earlier SLAM and navigation workflow was reused for location-based commands. The agent interpreted a requested destination and invoked the appropriate robot-navigation function.',
            'I also connected the robot camera to the agent workflow and developed a basic human-recognition capability using predefined reference images.',
            'The complete pipeline depended on several connected components. Audio latency, tool selection, robot response time, navigation stability, camera quality, and recognition performance all influenced the final interaction.',
          ],
          highlights: [
            'Integrated voice interaction with the robotic agent',
            'Exposed movement and navigation capabilities as tools',
            'Connected location requests with autonomous navigation',
            'Integrated camera-based perception',
            'Implemented basic human recognition',
            'Analysed agent traces and tool-call behaviour',
            'Explored evaluation, AI Gateway configurations, and guardrails',
          ],
          mediaIds: ['embodied-agent-architecture'],
          links: [
            {
              label: 'View Embodied Agent Repository',
              href: 'https://github.com/Unitree-Go2-Physical-AI-Integration/Go2-Visitor-Assistant.git',
            },
          ],
        },
        {
          id: 'cloud-robotics',
          eyebrow: '03 — Cloud Robotics',
          heading: 'Testing the Unitree Go2 in Isaac Sim',
          paragraphs: [
            'In the final stage, I configured a GPU-supported Google Cloud environment for robotics simulation using Isaac Sim and Isaac Lab.',
            'The setup required troubleshooting CUDA, Docker, simulation packages, and environment dependencies. After validating rendering and robot loading, I integrated Unitree Go2-related repositories into the simulation workflow.',
            'I tested an existing pre-trained walking policy rather than training a reinforcement-learning policy from the beginning. The experiments focused on robot stability, locomotion behaviour, and response to control commands.',
            'I also explored keyboard teleoperation for forward motion, backward motion, turning, and stopping. This provided practical experience with simulation-based robot control and demonstrated how simulation can support testing before applying changes to physical hardware.',
          ],
          highlights: [
            'Configured a GPU-supported cloud simulation environment',
            'Set up Isaac Sim and Isaac Lab',
            'Loaded and tested the Unitree Go2 model',
            'Tested an existing pre-trained walking policy',
            'Observed locomotion stability and behaviour',
            'Implemented keyboard teleoperation',
          ],
          mediaIds: [],
        },
      ],
      supportingWork: [
        {
          title: 'D1-T Robotic Arm',
          description:
            'I configured and calibrated the D1-T robotic arm, tested predefined movements, implemented a basic pick-and-place workflow, and explored inverse kinematics for reachable three-dimensional target positions.',
          points: [
            'Arm configuration and calibration',
            'Pick-and-place workflow',
            'Inverse-kinematics experiments',
            'Physical and simulation-based testing',
            'Workspace and safety considerations',
          ],
          mediaIds: ['robotic-arm', 'arm-demo-video'],
          links: [
            {
              label: 'View Robotic Arm Repository',
              href: 'https://github.com/JeewanthaSadaruwan/unitree-D1-550-Robot-ARM.git',
            },
          ],
        },
        {
          title: 'Agent-Based Ride-Booking System',
          description:
            'I designed and implemented an agent-based ride-booking application containing a user interface, agent workflow, backend services, database, APIs, and map-related tools.',
          points: [
            'High-level and detailed system architecture',
            'Tool-based request processing',
            'Frontend and backend integration',
            'Database and API communication',
            'Map-tool integration',
            'End-to-end testing',
            'Prompt and decision-flow refinement',
          ],
          links: [
            {
              label: 'View Ride-Booking Agent Repository',
              href: 'https://github.com/JeewanthaSadaruwan/Ride-Booking-Agent-.git',
            },
          ],
        },
      ],
      outcomesIntro:
        'Across the internship, the work progressed from platform familiarization to connected robotics and agentic-AI systems.',
      learningParagraphs: [
        'The strongest lesson was that modern robotics is an integration discipline. Mapping, localization, planning, movement, perception, agent reasoning, cloud infrastructure, observability, and safety must work together as one complete system.',
        'The internship strengthened my ability to debug unfamiliar systems, learn independently, document implementation decisions, communicate technical progress, and approach open-ended engineering problems systematically.',
      ],
      learningTags: [
        'Robotics Integration',
        'SLAM & Navigation',
        'Robotic Manipulation',
        'Agentic AI',
        'Embodied AI',
        'Agent Observability',
        'Cloud Simulation',
        'Technical Communication',
      ],
      resources: [
        {
          label: 'Embodied Agent Repository',
          href: 'https://github.com/Unitree-Go2-Physical-AI-Integration/Go2-Visitor-Assistant.git',
        },
        {
          label: 'D1-T Robotic Arm Repository',
          href: 'https://github.com/JeewanthaSadaruwan/unitree-D1-550-Robot-ARM.git',
        },
        {
          label: 'Ride-Booking Agent Repository',
          href: 'https://github.com/JeewanthaSadaruwan/Ride-Booking-Agent-.git',
        },
        {
          label: 'SLAM Demonstration',
          href: 'https://drive.google.com/file/d/1EEVsXk2TEE8i5LiguUBYnf9VosTrAj9s/view?usp=sharing',
        },
        {
          label: 'Robotic Arm Demonstration',
          href: 'https://drive.google.com/file/d/16fRzYCPWkogHTC1uZi42zMRHRKKKSSDg/view?usp=sharing',
        },
      ],
      confidentialityNote:
        'This page presents only public and non-confidential work. Internal systems, private repositories, credentials, dashboards, proprietary information, and unpublished company details are intentionally excluded.',
      media: [
        {
          id: 'wso2-hero-img-1',
          type: 'image',
          src: '/media/experience/wso2/gallery/img1.webp',
          alt: 'Selected WSO2 internship hero image',
          caption: 'Selected WSO2 internship media.',
          width: 1400,
          height: 1867,
        },
        {
          id: 'wso2-hero-img-2',
          type: 'image',
          src: '/media/experience/wso2/gallery/img2.webp',
          alt: 'Selected WSO2 internship hero image',
          caption: 'Selected WSO2 internship media.',
          width: 1400,
          height: 1050,
        },
        {
          id: 'wso2-hero-img-3',
          type: 'image',
          src: '/media/experience/wso2/gallery/img3.webp',
          alt: 'Selected WSO2 internship hero image',
          caption: 'Selected WSO2 internship media.',
          width: 1400,
          height: 1050,
        },
        {
          id: 'cover',
          type: 'image',
          src: '/media/experience/wso2/cover.webp',
          alt: 'Unitree Go2 robotics internship cover media',
          caption: 'Selected public media from the Unitree Go2 robotics internship work.',
        },
        {
          id: 'slam-comparison',
          type: 'image',
          src: '/media/experience/wso2/navigation/slam-comparison.webp',
          alt: 'Enhanced map, initial map, navigation, and path-planning outputs for Unitree Go2 indoor autonomy',
          caption: 'Enhanced map, initial map, navigation output, and path-planning output from the indoor autonomy workflow.',
        },
        {
          id: 'initial-map',
          type: 'image',
          src: '/media/experience/wso2/navigation/map2.webp',
          alt: 'Initial SLAM map output for Unitree Go2 indoor mapping',
          caption: 'Initial SLAM map output before refinement.',
          width: 706,
          height: 492,
        },
        {
          id: 'enhanced-map',
          type: 'image',
          src: '/media/experience/wso2/navigation/map.webp',
          alt: 'Enhanced SLAM map output for Unitree Go2 indoor mapping',
          caption: 'Enhanced SLAM map output after refinement.',
          width: 488,
          height: 438,
        },
        {
          id: 'navigation-output',
          type: 'image',
          src: '/media/experience/wso2/navigation/nav.webp',
          alt: 'Navigation output for Unitree Go2 indoor autonomy',
          caption: 'Navigation output from the indoor autonomy workflow.',
          width: 720,
          height: 484,
        },
        {
          id: 'path-planning-output',
          type: 'image',
          src: '/media/experience/wso2/navigation/path.webp',
          alt: 'Path-planning output for Unitree Go2 indoor autonomy',
          caption: 'Path-planning output from the indoor autonomy workflow.',
          width: 720,
          height: 420,
        },
        {
          id: 'navigation-test',
          type: 'image',
          src: '/media/experience/wso2/navigation-test.webp',
          alt: 'Navigation path planning test for the Unitree Go2 robot',
          caption: 'Navigation and path-planning test media from the indoor autonomy workflow.',
        },
        {
          id: 'embodied-agent-architecture',
          type: 'image',
          src: '/media/experience/wso2/architecture/embodied-agent-architecture.webp',
          alt: 'Embodied agent workflow architecture connected to Unitree Go2 tools and perception',
          caption: 'Embodied-agent workflow connecting voice, tools, robot motion, navigation, and perception.',
          width: 1600,
          height: 920,
        },
        {
          id: 'isaac-sim-go2',
          type: 'image',
          src: '/media/experience/wso2/isaac-sim-go2.webp',
          alt: 'Unitree Go2 robot loaded in Isaac Sim cloud simulation',
          caption: 'Unitree Go2 simulation setup inside Isaac Sim.',
        },
        {
          id: 'robotic-arm',
          type: 'image',
          src: '/media/experience/wso2/robot/robotic-arm.webp',
          alt: 'D1-T robotic arm control and manipulation work',
          caption: 'D1-T robotic-arm setup for calibration, movement testing, and manipulation work.',
          width: 960,
          height: 1280,
        },
        {
          id: 'slam-demo-video',
          type: 'video',
          title: 'Unitree Go2 SLAM & Navigation Demonstration',
          caption:
            'Demonstration of indoor mapping, localization, path planning, and goal-based autonomous navigation using the Unitree Go2.',
          embedUrl: 'https://drive.google.com/file/d/1EEVsXk2TEE8i5LiguUBYnf9VosTrAj9s/preview',
          externalUrl: 'https://drive.google.com/file/d/1EEVsXk2TEE8i5LiguUBYnf9VosTrAj9s/view?usp=sharing',
          poster: '/media/experience/wso2/slam-video-poster.webp',
        },
        {
          id: 'arm-demo-video',
          type: 'video',
          title: 'D1-T Robotic Arm Pick-and-Place Demonstration',
          caption:
            'Demonstration of robotic-arm control, pick-and-place execution, and inverse-kinematics testing.',
          embedUrl: 'https://drive.google.com/file/d/16fRzYCPWkogHTC1uZi42zMRHRKKKSSDg/preview',
          externalUrl: 'https://drive.google.com/file/d/16fRzYCPWkogHTC1uZi42zMRHRKKKSSDg/view?usp=sharing',
          poster: '/media/experience/wso2/arm-video-poster.webp',
        },
      ],
      organizationLink: 'https://wso2.com/',
      example: false,
    },
  ],
  education: [
    {
      id: 'university-of-moratuwa',
      institution: 'University of Moratuwa',
      qualification: 'B.Sc. in Electronic & Telecommunication Engineering',
      date: 'February 2023 – Present',
      status: 'Third-year Undergraduate',
      description:
        'Undergraduate studies in electronic and telecommunication engineering, with a cumulative GPA of 3.75/4.00. My academic focus connects robotics, AI, embedded systems, signal processing, and control-oriented engineering.',
      tags: [
        'Robotics',
        'Artificial Intelligence',
        'Embedded Systems',
        'Signal Processing',
        'Electronics',
        'Control Systems',
      ],
      side: 'right',
    },
    {
      id: 'esoft-metro-campus',
      institution: 'ESOFT Metro Campus',
      qualification:
        'Diploma in Information Technology and Diploma in English',
      date: 'February 2022 – February 2023',
      credential: 'Pearson Assured',
      description:
        'Completed Pearson Assured diploma programmes in Information Technology and English, building a foundation in computing, digital tools, communication, and professional technical writing.',
      tags: [
        'Information Technology',
        'English',
        'Computing Fundamentals',
        'Communication Skills',
      ],
      side: 'left',
    },
    {
      id: 'bandaranayake-college',
      institution: 'Bandaranayake College, Gampaha',
      qualification:
        'G.C.E. Advanced Level — Physical Science Stream',
      date: 'January 2013 – June 2022',
      description:
        'Achieved three A grades in Combined Mathematics, Physics, and Chemistry, with a Z-score of 2.4875, an all-island rank of 166, and 11th place in the Gampaha District. This foundation shaped my interest in engineering, analytical problem solving, and applied science.',
      tags: [
        'Combined Mathematics',
        'Physics',
        'Chemistry',
      ],
      side: 'right',
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
      image: {
        src: '/achievements/ieee-arduino-challenge-2024.webp',
        alt: 'IEEE Challenge Sphere Arduino Challenge achievement',
      },
    },
    {
      title: 'First Runner-Up — IEEE AI Challenge',
      type: 'Competition',
      date: 'Oct 2025',
      description:
        'Developed an AI-enabled Smart Transit Companion for trains, providing real-time guidance and commuter assistance.',
      image: {
        src: '/achievements/ieee-ai-challenge.webp',
        alt: 'IEEE AI Challenge achievement',
      },
    },
    {
      title: 'First Runner-Up — IEEE Silicon Pulse Competition',
      type: 'Competition',
      date: 'Feb 2025',
      description:
        'Built a triangular-wave function generator using analog components within a 24-hour competition.',
      image: {
        src: '/achievements/ieee-silicon-pulse.webp',
        alt: 'IEEE Silicon Pulse Competition achievement',
      },
    },
    {
      title: 'Finalist — IESL Robogames 2024',
      type: 'Competition',
      date: 'Apr 2025',
      description:
        'Implemented a Webots maze-solving algorithm, built a custom robot, and controlled a Kobuki robot during the final challenge.',
      image: {
        src: '/achievements/iesl-robogames-2024.webp',
        alt: 'IESL Robogames finalist achievement',
      },
    },
    {
      title: 'Top 10 — ElectroCombat Battle Robot Competition 2024',
      type: 'Competition',
      date: 'Jul 2024',
      description:
        'Built a battle robot with a vertical spinning weapon and efficient control system, finishing in the top 10 among more than 60 teams.',
      image: {
        src: '/achievements/electrocombat-2024.webp',
        alt: 'ElectroCombat Battle Robot Competition achievement',
      },
    },
  ],
  leadership: [],
  projects: [
    {
      title: 'Autonomous Mobile Robot Controller for Warehouses',
      slug: 'warehouse-amr',
      category: 'Robotics & Autonomous Systems',
      dateLabel: '2025',
      status: 'Completed',
      cardDescription:
        'An autonomous warehouse robot combining microcontroller-based low-level control, Jetson-based high-level autonomy, LiDAR sensing, SLAM, and ROS 2 navigation.',
      heroSummary:
        'Developing an autonomous mobile robot for warehouse environments using a microcontroller for real-time low-level control and a Jetson Nano B01 for mapping, planning, and high-level autonomous behaviour.',
      technologies: [
        'ROS 2 Humble',
        'Gazebo',
        'Jetson Nano B01',
        'Microcontroller',
        'SLAM Toolbox',
        'Robot Navigation',
        'Lakibeam 1S LiDAR',
        'Bosch BNO055 IMU',
        'NEMA 24 Stepper Motors',
        'C++',
        'Python',
      ],
      featured: true,
      accent: 'teal',
      coverImage: {
        src: '/projects/warehouse-amr/cover.png',
        alt: 'Autonomous mobile robot navigating a structured indoor warehouse',
        caption: 'AMR concept showcasing LiDAR-based perception, mapping, and autonomous warehouse navigation.',
      },
      sections: [
        {
          id: 'overview',
          eyebrow: 'Project overview',
          heading: 'Overview',
          paragraphs: [
            'This project focuses on developing an autonomous mobile robot for warehouse automation. The system separates time-sensitive hardware control from high-level autonomy by using a microcontroller for low-level control and an NVIDIA Jetson Nano B01 for perception, mapping, planning, and navigation.',
            'The robot uses closed-loop stepper-motor control, LiDAR, and inertial sensing to support accurate movement and environment awareness. The software stack combines custom robotics development with ROS 2 Humble, SLAM Toolbox, a navigation stack, and Gazebo-based simulation.',
          ],
        },
        {
          id: 'approach',
          eyebrow: 'System architecture',
          heading: 'System Approach',
          paragraphs: [
            'The architecture separates hardware feedback and real-time control from the higher-level autonomy stack. This makes the robot easier to test, debug, and extend while the project remains ongoing.',
          ],
          mediaIds: ['system-architecture'],
        },
        {
          id: 'contribution',
          eyebrow: 'Engineering contribution',
          heading: 'My Contribution',
          paragraphs: [],
          bullets: [
            'Designed and developed the robot-control architecture',
            'Integrated low-level and high-level control layers',
            'Worked on a custom SLAM algorithm for the robot',
            'Implemented ROS 2 Humble integration',
            'Configured SLAM Toolbox and the navigation stack',
            'Developed warehouse simulation environments in Gazebo',
            'Integrated NEMA 24 stepper motors with closed-loop drivers',
            'Integrated the Lakibeam 1S LiDAR',
            'Integrated the Bosch BNO055 IMU',
            'Tested communication between hardware and autonomy components',
          ],
        },
      ],
      media: [
        {
          id: 'cover',
          type: 'image',
          src: '/projects/warehouse-amr/cover.png',
          alt: 'Autonomous mobile robot navigating a structured indoor warehouse',
          caption: 'AMR concept showcasing LiDAR-based perception, mapping, and autonomous warehouse navigation.',
          width: 1672,
          height: 941,
          gallery: false,
        },
        {
          id: 'system-architecture',
          type: 'image',
          src: '/projects/warehouse-amr/AMR_Hardware_Block_Diagram.jpg',
          alt: 'Block diagram of the autonomous warehouse robot architecture',
          caption: 'System block diagram connecting sensors, low-level control, Jetson autonomy, SLAM, and ROS 2 navigation.',
          width: 1138,
          height: 1372,
          gallery: false,
        },
        {
          id: 'amr-gallery-1',
          type: 'image',
          src: '/projects/warehouse-amr/img1.JPG',
          alt: 'Autonomous mobile robot project photograph 1',
          caption: 'Warehouse AMR development and integration.',
          width: 3120,
          height: 4160,
          gallery: true,
          hero: true,
        },
        {
          id: 'amr-gallery-2',
          type: 'image',
          src: '/projects/warehouse-amr/img2.JPG',
          alt: 'Autonomous mobile robot project photograph 2',
          caption: 'Warehouse AMR development and integration.',
          width: 4160,
          height: 3120,
          gallery: true,
          hero: true,
        },
        {
          id: 'amr-gallery-3',
          type: 'image',
          src: '/projects/warehouse-amr/img3.jpg',
          alt: 'Autonomous mobile robot project photograph 3',
          caption: 'Warehouse AMR development and integration.',
          width: 4032,
          height: 3024,
          gallery: true,
          hero: true,
        },
        {
          id: 'amr-gallery-4',
          type: 'image',
          src: '/projects/warehouse-amr/img4.JPG',
          alt: 'Autonomous mobile robot project photograph 4',
          caption: 'Warehouse AMR development and integration.',
          width: 3120,
          height: 4160,
          gallery: true,
          hero: true,
        },
        {
          id: 'amr-gallery-5',
          type: 'image',
          src: '/projects/warehouse-amr/img5.jpg',
          alt: 'Autonomous mobile robot project photograph 5',
          caption: 'Warehouse AMR development and integration.',
          width: 2222,
          height: 1687,
          gallery: true,
          hero: true,
        },
        {
          id: 'amr-gallery-6',
          type: 'image',
          src: '/projects/warehouse-amr/img6.JPG',
          alt: 'Autonomous mobile robot project photograph 6',
          caption: 'Warehouse AMR development and integration.',
          width: 3024,
          height: 4032,
          gallery: true,
          hero: true,
        },
      ],
      links: [],
      seoTitle: 'Autonomous Warehouse Robot | Jeewantha Sadaruwan',
      seoDescription:
        'Autonomous mobile robot project using ROS 2, Jetson Nano B01, LiDAR, SLAM, Gazebo, and microcontroller-based low-level control.',
    },
    {
      title: 'Ride Booking Agent',
      slug: 'ride-booking-agent',
      category: 'Agentic AI & Full-Stack Development',
      dateLabel: '2025',
      status: 'Completed',
      cardDescription:
        'An AI-powered ride-booking platform that processes natural-language requests and uses tools for geocoding, routing, pricing, vehicle search, booking, and calendar synchronization.',
      heroSummary:
        'A full-stack agentic application for booking rides in Sri Lanka through natural-language conversation using GPT-4o and the Strands Agents SDK.',
      technologies: [
        'OpenAI GPT-4o',
        'Strands Agents SDK',
        'React',
        'TypeScript',
        'FastAPI',
        'PostgreSQL',
        'JWT',
        'OpenStreetMap Nominatim',
        'OSRM',
        'Google Calendar API',
        'Python',
      ],
      featured: true,
      accent: 'violet',
      coverImage: {
        src: '/projects/ride-booking-agent/cover.webp',
        alt: 'Ride Booking Agent application interface',
        caption: 'Main ride-booking interface for natural-language requests.',
      },
      sections: [
        {
          id: 'overview',
          heading: 'Overview',
          paragraphs: [
            'The Ride Booking Agent allows users to request and manage rides using natural-language conversation. The agent identifies missing booking information, invokes the required tools, calculates routes and pricing, and coordinates the booking workflow.',
            'The project combines an intelligent-agent layer with a React and TypeScript frontend, FastAPI backend, PostgreSQL database, JWT-based authentication, and multiple external APIs.',
          ],
        },
        {
          id: 'approach',
          heading: 'System Approach',
          paragraphs: [
            'The system converts conversation into a controlled tool-using workflow. The agent gathers missing details, calls the appropriate tools, stores booking state, and synchronizes confirmed rides with calendar workflows.',
          ],
          flow: [
            'User Conversation',
            'GPT-4o and Strands Agent',
            'Tool Selection',
            'Geocoding and Route Calculation',
            'Vehicle Search and Dynamic Pricing',
            'Booking Confirmation',
            'PostgreSQL and Calendar Synchronization',
          ],
          mediaIds: ['architecture', 'route-result', 'booking-flow'],
        },
        {
          id: 'contribution',
          heading: 'My Contribution',
          paragraphs: [],
          bullets: [
            'Designed the high-level and detailed system architecture',
            'Developed the agent workflow using the Strands Agents SDK',
            'Integrated GPT-4o for natural-language interaction',
            'Built the frontend using React and TypeScript',
            'Built backend APIs using FastAPI',
            'Designed persistent PostgreSQL storage',
            'Added JWT-based authentication',
            'Implemented ride and booking management',
            'Integrated geocoding with OpenStreetMap Nominatim',
            'Integrated route calculation with OSRM',
            'Developed tools for vehicle search and dynamic pricing',
            'Added booking confirmation workflows',
            'Integrated Google Calendar synchronization',
            'Performed end-to-end testing and prompt refinement',
          ],
        },
      ],
      media: [
        {
          id: 'cover',
          type: 'image',
          src: '/projects/ride-booking-agent/cover.webp',
          alt: 'Ride Booking Agent main user interface',
          caption: 'Main user interface for ride-booking conversations.',
        },
        {
          id: 'architecture',
          type: 'image',
          src: '/projects/ride-booking-agent/architecture.webp',
          alt: 'Ride Booking Agent system architecture',
          caption: 'System architecture for the agentic ride-booking workflow.',
        },
        {
          id: 'route-result',
          type: 'image',
          src: '/projects/ride-booking-agent/route-result.webp',
          alt: 'Route result generated by the ride booking system',
          caption: 'Map and route calculation result.',
        },
        {
          id: 'booking-flow',
          type: 'image',
          src: '/projects/ride-booking-agent/booking-flow.webp',
          alt: 'Booking flow or agent tool execution screen',
          caption: 'Booking workflow and tool execution view.',
        },
      ],
      links: [
        {
          label: 'View Repository',
          href: 'https://github.com/JeewanthaSadaruwan/Ride-Booking-Agent-.git',
          type: 'repository',
        },
      ],
      seoTitle: 'Agentic AI Ride Booking System | Jeewantha Sadaruwan',
      seoDescription:
        'Agentic AI ride-booking system using GPT-4o, Strands Agents SDK, React, FastAPI, PostgreSQL, geocoding, routing, pricing, and booking tools.',
    },
    {
      title: 'Fitness Tracker with Machine Learning',
      slug: 'fitness-tracker-ml',
      category: 'Machine Learning & Sensor Analytics',
      dateLabel: 'August 2025 – Present',
      status: 'Ongoing',
      cardDescription:
        'A machine-learning pipeline that analyses wearable accelerometer and gyroscope data to recognise barbell exercises and estimate repetition counts.',
      heroSummary:
        'Analysing MetaMotion wearable-sensor data and developing machine-learning models for exercise classification and repetition counting.',
      technologies: [
        'Python',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'scikit-learn',
        'PCA',
        'MetaMotion Sensors',
        'Jupyter Notebook',
      ],
      featured: false,
      accent: 'blue',
      coverImage: {
        src: '/projects/fitness-tracker-ml/cover.webp',
        alt: 'MetaMotion wearable sensor setup for fitness tracking',
        caption: 'Wearable sensor setup used for collecting workout motion data.',
      },
      sections: [
        {
          id: 'overview',
          heading: 'Overview',
          paragraphs: [
            'This project uses accelerometer and gyroscope data collected from MetaMotion wearable devices during gym workouts. The objective is to recognise exercise types and estimate repetition counts from time-series sensor data.',
            'The workflow covers exploratory analysis, visualization, outlier detection, feature engineering, dimensionality reduction, model training, comparison, and evaluation.',
          ],
        },
        {
          id: 'approach',
          heading: 'Technical Workflow',
          paragraphs: [
            'The processing pipeline moves from raw sensor data into cleaned signals, engineered features, model training, and repetition-count exploration using the available project outputs.',
          ],
          flow: [
            'Raw Accelerometer and Gyroscope Data',
            'Cleaning and Outlier Detection',
            'Signal Processing and Feature Engineering',
            'PCA and Dimensionality Reduction',
            'Classifier Training',
            'Exercise Recognition',
            'Repetition Counting',
          ],
          mediaIds: ['sensor-signals', 'feature-analysis', 'model-results'],
        },
        {
          id: 'contribution',
          heading: 'My Contribution',
          paragraphs: [],
          bullets: [
            'Loaded and explored MetaMotion sensor data',
            'Visualized accelerometer and gyroscope signals',
            'Identified and handled outliers',
            'Developed time-domain and signal-derived features',
            'Applied dimensionality reduction using PCA',
            'Built Naive Bayes models',
            'Built Support Vector Machine models',
            'Built Random Forest models',
            'Built a Neural Network model',
            'Compared classifier behaviour',
            'Developed exercise-recognition workflows',
            'Explored repetition-count estimation',
          ],
        },
      ],
      media: [
        {
          id: 'cover',
          type: 'image',
          src: '/projects/fitness-tracker-ml/cover.webp',
          alt: 'MetaMotion wearable sensor setup for fitness tracking',
          caption: 'MetaMotion wearable device or collection setup.',
        },
        {
          id: 'sensor-signals',
          type: 'image',
          src: '/projects/fitness-tracker-ml/sensor-signals.webp',
          alt: 'Accelerometer and gyroscope signal visualization',
          caption: 'Sensor signal visualization for workout motion data.',
        },
        {
          id: 'feature-analysis',
          type: 'image',
          src: '/projects/fitness-tracker-ml/feature-analysis.webp',
          alt: 'Feature engineering or PCA visualization',
          caption: 'Feature analysis and dimensionality-reduction view.',
        },
        {
          id: 'model-results',
          type: 'image',
          src: '/projects/fitness-tracker-ml/model-results.webp',
          alt: 'Model evaluation chart from real exported results',
          caption: 'Model evaluation chart, shown only if a real result image is supplied.',
        },
      ],
      links: [],
      seoTitle: 'Machine Learning Fitness Tracker | Jeewantha Sadaruwan',
      seoDescription:
        'Machine-learning fitness tracker using wearable accelerometer and gyroscope data for exercise recognition and repetition-count exploration.',
    },
    {
      title: 'FingerReader — Smart Assistive Device',
      slug: 'fingerreader-assistive-device',
      category: 'Embedded AI & Assistive Technology',
      dateLabel: 'April 2025',
      status: 'Prototype',
      cardDescription:
        'An ESP32-based assistive wearable that reads printed text and supports speech feedback, haptic guidance, fall detection, and offline TinyML-based recognition.',
      heroSummary:
        'A wearable embedded system designed to help visually impaired users read printed content and receive real-time speech and haptic feedback.',
      technologies: [
        'ESP32',
        'TinyML',
        'Embedded C/C++',
        'Computer Vision',
        'OCR',
        'Haptic Feedback',
        'Audio Output',
        'Inertial Sensing',
      ],
      featured: false,
      accent: 'amber',
      coverImage: {
        src: '/projects/fingerreader/cover.webp',
        alt: 'FingerReader assistive wearable prototype',
        caption: 'FingerReader assistive wearable prototype.',
      },
      sections: [
        {
          id: 'overview',
          heading: 'Overview',
          paragraphs: [
            'FingerReader is an ESP32-based assistive wearable designed for users with visual impairments. The device captures printed information, processes it, and provides spoken feedback while using haptic guidance to assist interaction.',
            'The prototype also explores fall detection and offline TinyML-based OCR or object-recognition capabilities, reducing dependence on a continuous external connection.',
          ],
        },
        {
          id: 'approach',
          heading: 'System Approach',
          paragraphs: [
            'The prototype connects visual input, embedded processing, recognition, speech output, haptic guidance, and alert behaviour into a compact assistive-device workflow.',
          ],
          flow: [
            'Camera or Visual Input',
            'ESP32 Processing',
            'TinyML Recognition',
            'Text or Object Interpretation',
            'Speech Output and Haptic Guidance',
            'Fall-Detection Alert',
          ],
          mediaIds: ['hardware', 'architecture', 'demonstration'],
        },
        {
          id: 'contribution',
          heading: 'My Contribution',
          paragraphs: [],
          bullets: [
            'Developed the ESP32-based wearable prototype',
            'Integrated visual-input processing',
            'Implemented speech-output workflows',
            'Added haptic guidance',
            'Explored TinyML-based offline OCR or object recognition',
            'Integrated fall-detection functionality',
            'Tested the interaction between sensing, processing, and feedback',
            'Considered low-power and portable embedded operation',
          ],
        },
      ],
      media: [
        {
          id: 'cover',
          type: 'image',
          src: '/projects/fingerreader/cover.webp',
          alt: 'FingerReader assistive wearable prototype',
          caption: 'Complete FingerReader wearable prototype.',
        },
        {
          id: 'hardware',
          type: 'image',
          src: '/projects/fingerreader/hardware.webp',
          alt: 'FingerReader electronics or internal design',
          caption: 'Electronics or internal device design.',
        },
        {
          id: 'architecture',
          type: 'image',
          src: '/projects/fingerreader/architecture.webp',
          alt: 'FingerReader system architecture',
          caption: 'Assistive-device system architecture.',
        },
        {
          id: 'demonstration',
          type: 'image',
          src: '/projects/fingerreader/demonstration.webp',
          alt: 'FingerReader device demonstration',
          caption: 'Prototype demonstration media.',
        },
      ],
      links: [],
      seoTitle: 'FingerReader Assistive Wearable | Jeewantha Sadaruwan',
      seoDescription:
        'FingerReader assistive wearable prototype using ESP32, TinyML, speech feedback, haptic guidance, fall detection, and cautious offline recognition exploration.',
    },
    {
      title: 'Vision-Based Navigation of a Kobuki Robot',
      slug: 'kobuki-vision-navigation',
      category: 'Computer Vision & Mobile Robotics',
      dateLabel: 'June 2024',
      status: 'Completed',
      cardDescription:
        'An autonomous Kobuki robot using Raspberry Pi and OpenCV for real-time obstacle detection and camera-based navigation.',
      heroSummary:
        'A compact mobile-robotics project combining Raspberry Pi, OpenCV, and camera input for real-time environment awareness and obstacle-aware navigation.',
      technologies: [
        'Kobuki',
        'Raspberry Pi',
        'OpenCV',
        'Python',
        'Computer Vision',
        'Image Processing',
        'Camera-Based Navigation',
      ],
      featured: false,
      accent: 'green',
      coverImage: {
        src: '/projects/kobuki-navigation/cover.webp',
        alt: 'Kobuki robot setup for vision-based navigation',
        caption: 'Kobuki robot setup for camera-based navigation.',
      },
      sections: [
        {
          id: 'overview',
          heading: 'Overview',
          paragraphs: [
            'This project explored camera-based navigation on a Kobuki mobile robot. A Raspberry Pi processed the camera stream using OpenCV to detect environment features and identify obstacles in real time.',
            'The resulting perception information was used to support autonomous movement and obstacle-aware navigation.',
          ],
        },
        {
          id: 'approach',
          heading: 'System Approach',
          paragraphs: [
            'The system links camera input, Raspberry Pi processing, OpenCV image-processing logic, and movement commands into a compact mobile-robot navigation workflow.',
          ],
          mediaIds: ['vision-output', 'navigation-test'],
        },
        {
          id: 'contribution',
          heading: 'My Contribution',
          paragraphs: [],
          bullets: [
            'Configured the Kobuki mobile-robot platform',
            'Integrated Raspberry Pi-based processing',
            'Connected and processed the camera feed',
            'Implemented real-time image-processing logic using OpenCV',
            'Developed obstacle-detection behaviour',
            'Connected vision output with robot movement commands',
            'Tested navigation behaviour in practical environments',
          ],
        },
      ],
      media: [
        {
          id: 'cover',
          type: 'image',
          src: '/projects/kobuki-navigation/cover.webp',
          alt: 'Kobuki robot setup for vision-based navigation',
          caption: 'Kobuki robot setup for camera-based navigation.',
        },
        {
          id: 'vision-output',
          type: 'image',
          src: '/projects/kobuki-navigation/vision-output.webp',
          alt: 'Camera-processing output for Kobuki navigation',
          caption: 'Camera-processing output used for obstacle awareness.',
        },
        {
          id: 'navigation-test',
          type: 'image',
          src: '/projects/kobuki-navigation/navigation-test.webp',
          alt: 'Kobuki navigation demonstration or test setup',
          caption: 'Navigation test media for the Kobuki robot.',
        },
      ],
      links: [
        {
          label: 'View Repository',
          href: 'https://github.com/JeewanthaSadaruwan/Vision-Based-Navigation-of-a-Kobuki-Robot',
          type: 'repository',
        },
      ],
      seoTitle: 'Vision-Based Kobuki Navigation | Jeewantha Sadaruwan',
      seoDescription:
        'Vision-based Kobuki robot navigation project using Raspberry Pi, OpenCV, Python, camera input, and obstacle-aware mobile-robot behaviour.',
    },
  ],
  contact: {
    email: 'jeewansadaruwan987@gmail.com',
    emailHref: 'mailto:jeewansadaruwan987@gmail.com',
    phone: '+94 78 125 5494',
    phoneHref: 'tel:+94781255494',
    location: 'Sri Lanka',
    availability:
      'Open to freelance opportunities, part-time roles, and collaborations in Embodied AI, agentic AI, robotics, and intelligent systems.',
    formEndpoint: 'https://formsubmit.co/ajax/jeewansadaruwan987@gmail.com',
  },
}
