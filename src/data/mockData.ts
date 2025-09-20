import { PersonalInfo, Experience, Project, Publication, Achievement } from '@/models/types';

export const personalInfo: PersonalInfo = {
  name: 'Proyash Paban Sarma Borah',
  title: 'Senior Machine Learning Engineer, AI Researcher, Dev Ops and Security Engineer',
  tagline: 'Building the future through code, research, and innovation',
  bio: 'I\'m a dynamic and innovative Machine Learning and IOT Engineer with a passion for transforming complex challenges into sleek, impactful solutions.',
  location: 'Guwahati, Assam, India',
  email: 'proyashpsb@gmail.com',
  linkedin: 'https://linkedin.com/in/proyashpabansarmaborah',
  github: 'https://github.com/spritan',
  medium: 'https://medium.com/@Spritan'
};

export const experiences: Experience[] = [
  {
    id: '5',
    company: 'Roomie',
    role: 'Co-founder',
    duration: 'May 2025 - Present',
    startDate: '2025-05',
    location: 'Guwahati, Assam, India',
    description: [
      'Co-founded Roomie, a property management platform serving Guwahati market',
      'Built product from scratch and gained over 30k users in 3 months',
      'Successfully manages over 300+ properties across Guwahati',
      'Led product development, user acquisition, and business strategy',
      'Established partnerships with property owners and tenants in the region'
    ],
    technologies: ['Product Management', 'Business Strategy', 'User Acquisition', 'Property Tech', 'Startup']
  },
  {
    id: '1',
    company: 'Ninur Tech Private Limited',
    role: 'Machine Learning Engineer',
    duration: 'Oct 2024 - Present',
    startDate: '2024-10',
    location: 'Guwahati, Assam, India',
    description: [
      'Trained & optimized 15+ vision models (ViT, EfficientNet) for 100+ NE Indian plant species',
      'Built TTS pipelines (VITS, FastPitch, XTTS...) in 5+ Indian languages + real-time streaming',
      'Designed IoT pipelines with BLE & Serial — made low-cost sensors Flutter-ready',
      'Created a voice-first AI agent (Gemini LLM) for search, theme, analytics, etc.',
      'Automated training workflows with internal labeling & annotation tools'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Flutter', 'ONNX', 'TorchScript', 'TFLite']
  },
  {
    id: '9',
    company: 'Community Climate Lab (CCL)',
    role: 'Member',
    duration: 'Feb 2022 - Present',
    startDate: '2022-02',
    location: 'Guwahati, Assam, India',
    description: [
      'Executed Flood Inundation analysis for Guwahati using Google Earth Engine (GEE), QGIS, and Python',
      'Scripted GEE tools for 10+ time series tasks including NDVI, NDBI, and NDWI',
      'Delivered actionable insights showcasing practical skills in climate data analysis',
      'Collaborated on environmental monitoring and climate change research projects'
    ],
    technologies: ['Python', 'Google Earth Engine', 'QGIS', 'JavaScript', 'Remote Sensing']
  },
  {
    id: '2',
    company: 'Frint.in',
    role: 'Independent Consultant',
    duration: 'Aug 2024 - Feb 2025',
    startDate: '2024-08',
    endDate: '2025-02',
    location: 'Guwahati, Assam, India',
    description: [
      'Advised product strategy & led AI/ML team to build a smart video interview system',
      'Oversaw hiring, system architecture, and tech alignment with Frint\'s core vision',
      'Designed and deployed a Collaborative Filtering based recommendation system',
      'Crafted a LLM-based Job description generator for automated content creation'
    ],
    technologies: ['Python', 'Machine Learning', 'LLM', 'Recommendation Systems', 'Product Strategy']
  },
  {
    id: '4',
    company: 'SpArts Technologies',
    role: 'Software Development Engineer',
    duration: 'Feb 2024 - Aug 2024',
    startDate: '2024-02',
    endDate: '2024-08',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Developed AI evaluation pipelines on GCP for auto video assignment checking using pose comparison and LLM integration',
      'Developed AI Fitness and workout routine on React based PWA student app using MediaPipe.js',
      'Designed custom pose embeddings for satisfactory pose similarity',
      'Built Sparts B2B portal\'s landing page with ReactJS server components for better SEO'
    ],
    technologies: ['React', 'MediaPipe', 'GCP', 'Python', 'LLM', 'Pose Detection', 'PWA']
  },
  {
    id: '6',
    company: 'Sumato Global Tech',
    role: 'Webdev, IoT Intern',
    duration: 'Aug 2023 - Oct 2023',
    startDate: '2023-08',
    endDate: '2023-10',
    location: 'Panbazar, Guwahati, India',
    description: [
      'Crafted scripts for Raspberry Pi system, achieving 40% speedup in bootup time',
      'Built Flask web service for a Kiosk system dashboard'
    ],
    technologies: ['Python', 'Flask', 'Raspberry Pi', 'IoT', 'Web Development', 'System Optimization']
  },
  {
    id: '7',
    company: 'My3DMeta (3daily.ai)',
    role: 'ML Computer Vision Intern',
    duration: 'July 2023 - Aug 2023',
    startDate: '2023-07',
    endDate: '2023-08',
    location: 'Beltola, Guwahati, India',
    description: [
      'Optimized computer vision-based deep learning models (ViT, ViT-adapter, MLP mixer) with PyTorch Lightning',
      'Achieved 98% accuracy in recreating frontal human faces from side view images',
      'Developed advanced facial reconstruction algorithms for 3D modeling applications'
    ],
    technologies: ['Python', 'PyTorch', 'PyTorch Lightning', 'Computer Vision', 'Deep Learning', 'ViT', 'MLP Mixer', '3D Modeling']
  },
  {
    id: '8',
    company: 'Azim Premji University',
    role: 'Research Consultant',
    duration: 'Aug 2022 - Jul 2023',
    startDate: '2022-08',
    endDate: '2023-07',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Established NodeMUC-based pollution monitoring network, optimized Django APIs for 15% faster data preprocessing',
      'Created a ReactJS dashboard for environmental monitoring systems',
      'Developed Python and bash scripts for processing CMIP5 and CMIP6 gridded climatology data',
      'Authored PYQGIS script for QGIS automation, saving 5 hours weekly in data analysis'
    ],
    technologies: ['Python', 'Django', 'React', 'QGIS', 'IoT', 'Climate Data', 'Docker']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lyra by Imthe.ai - Virtual Try-On Platform',
    description: 'A revolutionary platform where users can find the perfect outfit and try it on virtually. Features an AI chat that suggests clothes and gives advice based on user queries and details, with live data scraping from Myntra and newMeAsia. 🚀 300+ unique users in 1 month',
    technologies: ['FastAPI', 'Selenium', 'Stable Diffusion 1.5', 'SD 1.5 Inpainting', 'LORA Fine-tuning', 'IPAdapter', 'ReactJS', 'WebSockets', 'Supabase', 'PostHog', 'LangChain', 'HuggingFace', 'Azure', 'Docker'],
    repositoryUrl: 'https://lyra.imthe.ai',
    featured: true
  },
  {
    id: '2',
    title: 'X-Ray Object Detection for Computer-Aided Diagnostics',
    description: 'B.Tech Final Year Thesis Project implementing transfer learning on advanced object detection models (YOLO, Faster-RCNN) for X-ray diagnostics. Validating on diverse datasets like VinDr-CXR to address bias and introducing regional bias for improved local deployment.',
    technologies: ['Python', 'YOLO', 'Faster-RCNN', 'Transfer Learning', 'Computer Vision', 'Medical AI', 'PyTorch', 'TensorFlow'],
    repositoryUrl: 'https://linktr.ee/AsChestXray',
    featured: true
  },
  {
    id: '3',
    title: 'HESTIA: Helping Everyone through Innovative Assistance',
    description: 'A community-based application to help over 1.77 million homeless people. Features efficient data processing for user-submitted markers with 80% accuracy, RAG pipeline for homelessness awareness chatbot, and face-embedding based clustering for geo-tracking.',
    technologies: ['GCP', 'ReactJS', 'FastAPI', 'Firebase', 'Docker', 'Gemini Pro', 'LangChain', 'Python 3', 'Flutter'],
    repositoryUrl: 'https://github.com/spritan/HESTIA',
    featured: true
  },
  {
    id: '4',
    title: 'Red Flags: Climate Awareness Platform',
    description: 'HackZurich 22 submission introducing innovative data visualization to highlight climate red flags and enhance awareness of environmental risks. Processes CMIP5 data for Switzerland using Python and CDO, converting to Geo-TIFF and loading to Mapbox AWS S3.',
    technologies: ['Mapbox', 'ReactJS', 'React Router 6', 'Python', 'CDO', 'AWS S3', 'Data Visualization'],
    repositoryUrl: 'https://github.com/arindam-bhowal/Red-Flags',
    featured: true
  },
  {
    id: '5',
    title: 'YOLOv8_Explainer',
    description: 'A package with state-of-the-art methods for Explainable AI for computer vision using YOLOv8. Used for diagnosing model predictions in production or during model development, serving as a benchmark for research of new explainability methods. ⭐ 45 stars on GitHub • 14k+ downloads on PyPI',
    technologies: ['Python', 'YOLOv8', 'Explainable AI', 'Computer Vision', 'PyTorch', 'XAI'],
    repositoryUrl: 'https://github.com/Spritan/YOLOv8_Explainer',
    featured: true
  },
  {
    id: '6',
    title: 'Smart Finance Tracker',
    description: 'A modern, AI-powered expense tracking application built with Streamlit that helps manage personal finances through natural language input and intelligent categorization. ⭐ 16 stars on GitHub',
    technologies: ['Python', 'Streamlit', 'AI', 'Natural Language Processing', 'Finance', 'Machine Learning'],
    repositoryUrl: 'https://github.com/Spritan/expense_tracker',
    featured: true
  },
  {
    id: '7',
    title: 'Parkinson\'s Disease Protein Sequence Classifier',
    description: 'A machine learning pipeline for classifying protein sequences associated with Parkinson\'s disease using various sequence features and multiple classification models. Achieves 80.3% accuracy using LSTM architecture with comprehensive sequence feature analysis. ⭐ 7 stars on GitHub',
    technologies: ['Python', 'Machine Learning', 'LSTM', 'Deep Learning', 'Bioinformatics', 'Protein Classification', 'TensorFlow'],
    repositoryUrl: 'https://github.com/Spritan/ParkinsonDisease_ProteinClassifier',
    featured: true
  },
  {
    id: '8',
    title: 'AQIPython',
    description: 'A Python module that calculates the Air Quality Index (AQI) for various air pollutants based on different standards. Takes pollutant concentration values in PPM, mg/m³, and µg/m³ and provides corresponding AQI values. ⭐ 10 stars on GitHub • 11k+ downloads on PyPI',
    technologies: ['Python', 'Air Quality', 'Environmental Monitoring', 'Data Analysis', 'PyPI Package'],
    repositoryUrl: 'https://github.com/Spritan/AQIPython',
    featured: true
  },
  {
    id: '9',
    title: 'Xohoj: Study Made Easy',
    description: 'Won 2nd Prize in HackVita organized by Google DSC - Jorhat Engineering College and E Cell - JEC. Helps users take notes from online resources including videos on platforms like Udemy or YouTube, and articles through an easy interface with web-based dashboard and browser extension.',
    technologies: ['React', 'Browser Extension', 'Web Development', 'Note-taking', 'Education Technology'],
    repositoryUrl: 'https://github.com/Spritan/XOHOJ_HackVita2023',
    featured: true
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Enhancing Medical Imaging Diagnostics: A Comprehensive Study on Explainable AI Using YOLO and Post Hoc Methods',
    authors: ['Proyash Paban Sarma Borah'],
    venue: 'Journal of Physics: Conference Series (IOP Science)',
    year: 2024,
    type: 'journal',
    url: 'https://iopscience.iop.org/article/10.1088/1742-6596/2919/1/012045',
    doi: '10.1088/1742-6596/2919/1/012045',
    abstract: 'A comprehensive study on implementing explainable AI methods for medical imaging diagnostics using YOLO object detection and post hoc explanation techniques to improve diagnostic accuracy and interpretability.'
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Graduated - Buildspace S5',
    organization: 'Buildspace Remote',
    year: 2024,
    category: 'milestone',
    description: 'Successfully graduated from Buildspace S5 program, completing intensive nights and weekends training in cutting-edge technology and entrepreneurship.'
  },
  {
    id: '2',
    title: 'Winner - Ideathon',
    organization: 'University of Science & Technology Meghalaya',
    year: 2024,
    category: 'competition',
    description: 'Secured first place in Ideathon competition at University of Science & Technology Meghalaya, showcasing innovative problem-solving and creative thinking.'
  },
  {
    id: '3',
    title: '2nd Runners-Up - HackVita 2024',
    organization: 'Jorhat Engineering College (JEC)',
    year: 2024,
    category: 'competition',
    description: 'Achieved 2nd runners-up position in HackVita 2024 hackathon at Jorhat Engineering College, demonstrating technical excellence and innovation.'
  },
  {
    id: '4',
    title: 'Winner - Codestallation CodeWar 2024',
    organization: 'Assam Engineering College (AEC)',
    year: 2024,
    category: 'competition',
    description: 'Secured first place in Codestallation CodeWar 2024 at Assam Engineering College, showcasing exceptional programming and problem-solving skills.'
  },
  {
    id: '5',
    title: 'Runners Up - Beyond The Lab 2024',
    organization: 'Assam Engineering College (AEC)',
    year: 2024,
    category: 'competition',
    description: 'Achieved runners-up position in Beyond The Lab 2024 competition at Assam Engineering College, demonstrating practical engineering skills.'
  },
  {
    id: '6',
    title: 'Winner - Hackathon (HackGCU) 2024',
    organization: 'Girijananda Choudhury University (GCU)',
    year: 2024,
    category: 'competition',
    description: 'Secured first place in HackGCU 2024 hackathon at Girijananda Choudhury University, showcasing innovative solutions and technical prowess.'
  },
  {
    id: '7',
    title: 'Runners-up - HackVita 2023',
    organization: 'Jorhat Engineering College (JEC)',
    year: 2023,
    category: 'competition',
    description: 'Achieved runners-up position in HackVita 2023 hackathon at Jorhat Engineering College, demonstrating consistent technical excellence.'
  },
  {
    id: '8',
    title: 'Winner - Poster Presentation',
    organization: 'IEEE Student Branch, Assam Engineering College (AEC)',
    year: 2023,
    category: 'award',
    description: 'Secured first place in IEEE Student Branch poster presentation competition at Assam Engineering College, showcasing research and communication skills.'
  },
  {
    id: '9',
    title: 'Runners-Up - Techfest IITB International Robowar (8Kg)',
    organization: 'IIT Bombay',
    year: 2022,
    category: 'competition',
    description: 'Achieved runners-up position in International Robowar competition at IIT Bombay Techfest, demonstrating advanced robotics engineering skills.'
  },
  {
    id: '10',
    title: 'Winner - Robowar',
    organization: 'Assam Don Bosco University',
    year: 2022,
    category: 'competition',
    description: 'Secured first place in Robowar competition at Assam Don Bosco University, showcasing expertise in combat robotics design and engineering.'
  },
  {
    id: '11',
    title: 'Winner - RoboSoccer',
    organization: 'NIT Silchar',
    year: 2022,
    category: 'competition',
    description: 'Achieved first place in RoboSoccer competition at NIT Silchar, demonstrating advanced robotics programming and control systems.'
  },
  {
    id: '12',
    title: 'Winner - Robowar',
    organization: 'NIT Silchar',
    year: 2022,
    category: 'competition',
    description: 'Secured first place in Robowar competition at NIT Silchar, showcasing exceptional combat robotics engineering and strategy.'
  },
  {
    id: '13',
    title: 'Winner - Un-Flood Hackathon',
    organization: 'Assam Startup and Ministry of Electronics and Telecommunication',
    year: 2022,
    category: 'competition',
    description: 'Secured first place in Un-Flood Hackathon organized by Assam Startup and Ministry of Electronics and Telecommunication for innovative flood management solutions.'
  },
  {
    id: '14',
    title: 'Winner - Technophilla RoboSoccer',
    organization: 'Royal Global University (RGU)',
    year: 2022,
    category: 'competition',
    description: 'Achieved first place in Technophilla RoboSoccer competition at Royal Global University, demonstrating advanced robotics control and strategy.'
  },
  {
    id: '15',
    title: 'Winner - Technophilla RoboSumo',
    organization: 'Royal Global University (RGU)',
    year: 2022,
    category: 'competition',
    description: 'Secured first place in Technophilla RoboSumo competition at Royal Global University, showcasing sumo wrestling robotics expertise.'
  },
  {
    id: '16',
    title: 'Winner - App Venture 2022',
    organization: 'Girijananda Chowdhury Institute of Management and Technology',
    year: 2022,
    category: 'competition',
    description: 'Achieved first place in App Venture 2022 at Girijananda Chowdhury Institute of Management and Technology, demonstrating mobile app development skills.'
  },
  {
    id: '17',
    title: 'Runners-Up - Rhapsody 2.0 Techtrix (RoboWar)',
    organization: 'Golaghat Engineering College',
    year: 2022,
    category: 'competition',
    description: 'Achieved runners-up position in Rhapsody 2.0 Techtrix RoboWar competition at Golaghat Engineering College, showcasing combat robotics engineering.'
  },
  {
    id: '18',
    title: 'Winner - Escalade 2021',
    organization: 'IIT Guwahati',
    year: 2021,
    category: 'competition',
    description: 'Secured first place in Escalade 2021 robotics competition at IIT Guwahati, demonstrating early excellence in robotics and engineering.'
  },
  {
    id: '19',
    title: 'B.Tech in Electronics and Telecommunications Engineering',
    organization: 'Assam Engineering College (A.E.C)',
    year: 2024,
    category: 'milestone',
    description: 'Successfully completed Bachelor of Technology in Electronics and Telecommunications Engineering from Assam Engineering College (2020-2024).'
  },
  {
    id: '20',
    title: 'Ex-GDSC Lead 2022',
    organization: 'Google Developer Student Clubs',
    year: 2022,
    category: 'recognition',
    description: 'Former Google Developer Student Clubs Lead, fostering developer community and organizing technical events and workshops.'
  }
];