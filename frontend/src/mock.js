// Mock data for portfolio website

export const profileData = {
  name: "Veda Manaswini Vustepalle",
  title: "AI & ML Trainee | Full-Stack Developer in Progress",
  tagline: "Building tech that matters—merging code and care to empower people and create solutions with real-world impact.",
  location: "Hyderabad, Telangana, India",
  email: "manutejukids@gmail.com",
  linkedin: "www.linkedin.com/in/veda-manaswini-vustepalle",
  profileImage: "https://images.unsplash.com/photo-1581065178026-390bc4e78dad",
  
  about: {
    summary: "I'm a first-year student at NIAT with a passion for technology-driven solutions. Currently pursuing dual degrees - BSC in Computer Science Engineering from BITS Pilani and MS from Woolf University. I'm actively exploring Python to strengthen my foundation skills and eager to expand my knowledge in AI and web development, with a goal of building robust, efficient applications.",
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
        { name: "Python", level: 75, description: "Actively learning and strengthening foundation" },
        { name: "SQL", level: 80, description: "Database querying and management" },
        { name: "Full-Stack Development", level: 60, description: "Currently in progress" },
        { name: "HTML/CSS", level: 70, description: "Web development fundamentals" }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Artificial Intelligence", level: 65, description: "Core concepts and applications" },
        { name: "Machine Learning", level: 60, description: "Learning algorithms and implementations" },
        { name: "Data Science", level: 55, description: "Data analysis and visualization" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Teamwork", level: 90, description: "Collaborative problem-solving" },
        { name: "Problem Solving", level: 85, description: "Analytical thinking approach" },
        { name: "Communication", level: 80, description: "Clear technical communication" },
        { name: "Learning Agility", level: 95, description: "Quick adaptation to new technologies" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Student Assistant",
      description: "A smart chatbot designed to help students with academic queries using natural language processing. Built with Python and integrated with educational databases.",
      technologies: ["Python", "NLP", "Machine Learning", "Flask"],
      status: "In Development",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      highlights: [
        "Natural language query processing",
        "Educational content recommendation",
        "Multi-language support planning"
      ]
    },
    {
      id: 2,
      title: "Campus Resource Tracker",
      description: "A full-stack web application to help students track and share campus resources, study materials, and academic opportunities.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "Planning Phase",
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      highlights: [
        "Resource sharing platform",
        "Real-time notifications",
        "User authentication system"
      ]
    },
    {
      id: 3,
      title: "SQL Practice Platform",
      description: "An interactive platform for students to practice SQL queries with real-world datasets and automated feedback system.",
      technologies: ["Python", "SQL", "Django", "PostgreSQL"],
      status: "Concept",
      category: "Educational Tool",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      highlights: [
        "Interactive SQL editor",
        "Automated query validation",
        "Progress tracking dashboard"
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