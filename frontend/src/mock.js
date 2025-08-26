// Mock data for portfolio website

export const profileData = {
  name: "Veda Manaswini Vustepalle",
  title: "AI & ML Trainee | Full-Stack Developer in Progress",
  tagline: "Building tech that matters—merging code and care to empower people and create solutions with real-world impact.",
  location: "Hyderabad, Telangana, India",
  email: "manaswini1857@gmail.com",
  linkedin: "www.linkedin.com/in/veda-manaswini-vustepalle",
  profileImage: "https://res.cloudinary.com/dftb21yb0/image/upload/v1756188728/profile_pic_mziivm.jpg",
  
  about: {
    summary: "I'm a student at NIAT with a passion for technology-driven solutions. Currently pursuing dual degrees - BSC in Computer Science Engineering from BITS Pilani and MS from Woolf University. I'm actively exploring Python to strengthen my foundation skills and eager to expand my knowledge in AI and web development, with a goal of building robust, efficient applications.",
    mission: "I believe in creating technology that makes a meaningful difference in people's lives, combining technical excellence with genuine care for solving real-world problems.",
    currentFocus: [
      "Strengthening Python programming foundations",
      "Exploring AI and Machine Learning concepts", 
      "Building full-stack development skills",
      "Contributing to meaningful tech solutions"
    ]
  },

  skills: [
    {
      category: "Programming & Development",
      items: [
        { name: "Python", level: 80, description: "Strong foundation in Python programming" },
        { name: "HTML", level: 85, description: "Solid HTML fundamentals" },
        { name: "HTML5", level: 85, description: "Modern HTML5 features and semantics" },
        { name: "Git", level: 75, description: "Version control and collaboration" },
        { name: "Web Development Basics", level: 80, description: "Core web development principles" }
      ]
    },
    {
      category: "Design & Styling",
      items: [
        { name: "User Interface Design", level: 85, description: "Creating intuitive and user-friendly interfaces" },
        { name: "CSS (Bootstrap)", level: 80, description: "Responsive design with Bootstrap framework" },
        { name: "CSS (Tailwind)", level: 75, description: "Utility-first CSS framework" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Collaborative Problem Solving", level: 90, description: "Working effectively in teams to solve complex problems" },
        { name: "Communication", level: 85, description: "Clear technical and interpersonal communication" },
        { name: "Learning Agility", level: 95, description: "Quick adaptation to new technologies and concepts" }
      ]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Hackathon Champion",
      description: "Led team to fifth place in hackathon with 95% efficiency increase.",
      icon: "Trophy",
      color: "bg-yellow-100 text-yellow-600",
      category: "Competition"
    },
    {
      id: 2,
      title: "UI Design Specialist",
      description: "Improved UI design efficiency by 30% during workshop participation.",
      icon: "Palette",
      color: "bg-purple-100 text-purple-600",
      category: "Design"
    },
    {
      id: 3,
      title: "AI Workshop Graduate",
      description: "Completed AI workshop with 98% competency score, enhancing machine learning skills.",
      icon: "Brain",
      color: "bg-blue-100 text-blue-600",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Website Development Pro",
      description: "Developed static website in record time of two hours, streamlining build process.",
      icon: "Code",
      color: "bg-green-100 text-green-600",
      category: "Development"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Day with Delight - UI/UX Design",
      description: "A comprehensive mobile app UI/UX design created in Figma, focusing on user experience and modern design principles. Features intuitive navigation, engaging visuals, and user-centered design approach.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      status: "Completed",
      category: "Design",
      image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxVSSUyMGRlc2lnbnxlbnwwfHx8fDE3NTYxODc5NDJ8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://www.figma.com/design/NvXQMnsyLO0TgVu0oqMlOr/Day-with-Delight-_APP?node-id=602-10&p=f",
      highlights: [
        "Modern mobile app interface design",
        "User-centered design approach",
        "Interactive Figma prototype"
      ]
    },
    {
      id: 2,
      title: "Music Tracker - Static Website",
      description: "A beautifully crafted static website for music tracking and discovery. Built with clean HTML and CSS, featuring responsive design and smooth user interactions.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      status: "Completed",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYxODc5MzV8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://tunecoders.niat.tech/",
      highlights: [
        "Clean and modern design",
        "Fully responsive layout",
        "Optimized for performance"
      ]
    },
    {
      id: 3,
      title: "Food Munch - Digital Food App",
      description: "A comprehensive food delivery application similar to Swiggy, built with HTML, CSS, and JavaScript. Features restaurant listings, menu browsing, and interactive ordering system.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      status: "Completed",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYxODc5MzV8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://restaurant111.niat.tech/",
      highlights: [
        "Interactive food ordering system",
        "Restaurant and menu management",
        "JavaScript-powered functionality"
      ]
    },
    {
      id: 4,
      title: "Digital Wallet - VM Cash",
      description: "A modern digital wallet application built with React JS, featuring secure transactions, balance management, and intuitive user interface for seamless financial operations.",
      technologies: ["React JS", "JavaScript", "Component Architecture", "State Management"],
      status: "Completed",
      category: "React Applications",
      image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYxODc5NDJ8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://vmcash.niat.tech/",
      highlights: [
        "Secure digital wallet interface",
        "React-based architecture",
        "Modern financial UI/UX"
      ]
    },
    {
      id: 5,
      title: "App Store - VVM App Store",
      description: "A comprehensive app marketplace built with React JS, featuring app browsing, categories, search functionality, and modern e-commerce interface design.",
      technologies: ["React JS", "JavaScript", "Component Design", "Routing"],
      status: "Completed",
      category: "React Applications",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxVSSUyMGRlc2lnbnxlbnwwfHx8fDE3NTYxODc5NDJ8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://vvmappstore.niat.tech/",
      highlights: [
        "App marketplace interface",
        "Search and filter functionality",
        "React component architecture"
      ]
    },
    {
      id: 6,
      title: "Digital Defense - Cybersecurity Platform",
      description: "An innovative cybersecurity platform built using AI tools and vibe-coding techniques. Features modern security dashboard and threat monitoring capabilities.",
      technologies: ["AI Tools", "Vibe Coding", "Modern Web Tech", "Security"],
      status: "Completed",
      category: "AI/No-Code",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYxODc5MzV8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://p-2084.lovable.app/",
      highlights: [
        "AI-powered development approach",
        "Cybersecurity focus",
        "Modern security dashboard"
      ]
    },
    {
      id: 7,
      title: "Agripath - Farmer-Friendly Platform",
      description: "A comprehensive agricultural platform built using AI tools and JavaScript, designed to help farmers with modern farming techniques, weather updates, and crop management.",
      technologies: ["AI Tools", "JavaScript", "Vibe Coding", "Agricultural Tech"],
      status: "Completed",
      category: "AI/No-Code",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYxODc5NDJ8MA&ixlib=rb-4.1.0&q=85",
      liveUrl: "https://app--agri-verse-7abd8b24.base44.app/",
      highlights: [
        "Farmer-centric design",
        "AI-assisted development",
        "Agricultural technology focus"
      ]
    },
    {
      id: 8,
      title: "Restaurant Name Recommender",
      description: "An intelligent restaurant recommendation system using API calls and machine learning. Features GitHub workflows for CI/CD and Streamlit deployment for easy access.",
      technologies: ["Python", "API Integration", "GitHub Workflows", "Streamlit", "Machine Learning"],
      status: "Completed",
      category: "Full-Stack/AI",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
      liveUrl: "https://restaurant-recommender-lxeta29ix9crsfeibzoxio.streamlit.app/",
      highlights: [
        "AI-powered recommendations",
        "API integration and workflows",
        "Production deployment"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Professor, Computer Science Department",
      organization: "NIAT",
      content: "Veda demonstrates exceptional curiosity and dedication in her approach to learning. Her ability to grasp complex AI concepts and apply them practically is remarkable for a first-year student.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior Student & Peer Mentor",
      organization: "BITS Pilani",
      content: "Working with Veda on group projects has been inspiring. She brings fresh perspectives to problem-solving and her collaborative approach makes her an excellent team member.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6bb90c4?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "Study Group Leader",
      organization: "Python Programming Community",
      content: "Veda's commitment to learning Python and her eagerness to help fellow learners shows her potential as both a developer and leader in the tech community.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ],

  certifications: [
    {
      name: "SQL Using AI Completion",
      issuer: "Technology Learning Platform",
      year: "2024",
      description: "Advanced SQL techniques with AI integration"
    },
    {
      name: "Build for Telangana Hackathon",
      issuer: "Government of Telangana",
      year: "2024",
      description: "Participated in state-level hackathon for innovative solutions"
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "BITS Pilani, Hyderabad Campus",
      period: "August 2024 - October 2027",
      status: "Currently Pursuing"
    },
    {
      degree: "Master of Science (Data Science & ML Specialization)",
      institution: "Woolf University via NIAT",
      period: "December 2024 - December 2028",
      status: "Recently Started"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Abhida Junior College",
      period: "July 2022 - July 2024",
      status: "Completed"
    }
  ]
};

export const navItems = [
  { name: "Home", href: "#home", icon: "Home" },
  { name: "About", href: "#about", icon: "User" },
  { name: "Skills", href: "#skills", icon: "Code" },
  { name: "Projects", href: "#projects", icon: "Folder" },
  { name: "Testimonials", href: "#testimonials", icon: "MessageSquare" },
  { name: "Contact", href: "#contact", icon: "Mail" }
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/veda-manaswini-vustepalle", icon: "Linkedin" },
  { name: "Email", url: "mailto:manutejukids@gmail.com", icon: "Mail" },
  { name: "GitHub", url: "#", icon: "Github" } // Placeholder for future
];