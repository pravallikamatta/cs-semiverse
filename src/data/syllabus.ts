export interface Subject {
  code: string;
  title: string;
  credits: number;
  category: string;
  syllabus?: string[];
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Year {
  id: number;
  name: string;
  semesters: Semester[];
}

export const syllabusData: Year[] = [
  {
    id: 1,
    name: "1st Year",
    semesters: [
      {
        id: "1-1",
        name: "I Semester",
        subjects: [
          { code: "CS1101", title: "Engineering Mathematics–I", credits: 3, category: "BS", syllabus: ["Matrices", "Differential Calculus", "Integral Calculus", "Differential Equations", "Laplace Transforms"] },
          { code: "CS1102", title: "English", credits: 3, category: "HSS", syllabus: ["Grammar and Composition", "Reading Comprehension", "Writing Skills", "Presentation Skills", "Professional Communication"] },
          { code: "CS1103", title: "Computer Programming Using C", credits: 3, category: "ES", syllabus: ["Introduction to Programming", "Control Structures", "Functions", "Arrays and Strings", "Pointers", "Structures and Unions", "File Handling"] },
          { code: "CS1104", title: "IT Essentials", credits: 3, category: "ES", syllabus: ["Computer Fundamentals", "Operating Systems Basics", "Internet and Web Technologies", "MS Office Tools", "Computer Networks Basics"] },
          { code: "CS1105", title: "Communication Skills Lab", credits: 1.5, category: "HSS", syllabus: ["Verbal Communication", "Non-verbal Communication", "Group Discussions", "Presentations", "Interview Skills"] },
          { code: "CS1106", title: "Engineering Workshop Lab", credits: 1.5, category: "ES", syllabus: ["Basic Workshop Practice", "Carpentry", "Fitting", "Welding", "Sheet Metal Work"] },
          { code: "CS1107", title: "Computer Programming Lab", credits: 1.5, category: "ES", syllabus: ["C Programming Basics", "Control Flow Programs", "Functions and Recursion", "Array Operations", "File Handling Programs"] },
        ]
      },
      {
        id: "1-2",
        name: "II Semester",
        subjects: [
          { code: "CS1201", title: "Engineering Mathematics–II", credits: 3, category: "BS", syllabus: ["Vector Calculus", "Partial Differential Equations", "Complex Variables", "Fourier Series", "Statistical Methods"] },
          { code: "CS1202", title: "Engineering Physics", credits: 3, category: "BS", syllabus: ["Quantum Mechanics", "Wave Optics", "Lasers and Fiber Optics", "Semiconductors", "Superconductivity"] },
          { code: "CS1203", title: "Elements of Electronics Engineering", credits: 3, category: "ES", syllabus: ["Semiconductor Devices", "BJT and FET", "Amplifiers", "Operational Amplifiers", "Digital Electronics Basics"] },
          { code: "CS1204", title: "Data Structures Using C", credits: 3, category: "ES", syllabus: ["Stacks and Queues", "Linked Lists", "Trees", "Graphs", "Sorting Algorithms", "Searching Techniques", "Hashing"] },
          { code: "CS1205", title: "Digital Logic Design", credits: 3, category: "ES", syllabus: ["Number Systems", "Boolean Algebra", "Logic Gates", "Combinational Circuits", "Sequential Circuits", "Memory Elements"] },
          { code: "CS1206", title: "Linux Administration Lab", credits: 1.5, category: "ES", syllabus: ["Linux Installation", "Basic Commands", "File System", "Shell Scripting", "User Management", "Network Configuration"] },
          { code: "CS1207", title: "Engineering Physics Lab", credits: 1.5, category: "BS", syllabus: ["Optical Experiments", "Laser Experiments", "Semiconductor Experiments", "Hall Effect", "LED Characteristics"] },
          { code: "CS1208", title: "Data Structures Lab", credits: 1.5, category: "ES", syllabus: ["Stack Operations", "Queue Operations", "Linked List Programs", "Tree Traversals", "Graph Algorithms", "Sorting Programs"] },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "2nd Year",
    semesters: [
      {
        id: "2-1",
        name: "I Semester",
        subjects: [
          { code: "CS2101", title: "Discrete Mathematical Structures", credits: 3, category: "BS", syllabus: ["Set Theory", "Relations and Functions", "Mathematical Logic", "Graph Theory", "Trees", "Combinatorics", "Recurrence Relations"] },
          { code: "CS2102", title: "Computer Organization", credits: 3, category: "PC", syllabus: ["Basic Computer Organization", "Instruction Set Architecture", "Arithmetic Logic Unit", "Memory Organization", "I/O Organization", "Pipelining"] },
          { code: "CS2103", title: "Database Management Systems", credits: 3, category: "PC", syllabus: ["ER Model", "Relational Model", "SQL", "Normalization", "Transaction Management", "Concurrency Control", "Query Optimization"] },
          { code: "CS2104", title: "Object Oriented Programming Through Java", credits: 3, category: "PC", syllabus: ["Java Basics", "Classes and Objects", "Inheritance", "Polymorphism", "Interfaces", "Exception Handling", "Multithreading", "Collections"] },
          { code: "CS2105", title: "Design & Analysis of Algorithms", credits: 3, category: "PC", syllabus: ["Algorithm Analysis", "Divide and Conquer", "Greedy Method", "Dynamic Programming", "Backtracking", "Branch and Bound", "NP-Completeness"] },
          { code: "CS2106", title: "DBMS Lab", credits: 1.5, category: "PC", syllabus: ["SQL Queries", "PL/SQL Programming", "Stored Procedures", "Triggers", "Database Design Projects"] },
          { code: "CS2107", title: "Java Programming Lab", credits: 1.5, category: "PC", syllabus: ["OOP Concepts", "Inheritance Programs", "Exception Handling", "Threading", "GUI Programming", "JDBC"] },
          { code: "CS2108", title: "Data Analytics Lab", credits: 1.5, category: "PC", syllabus: ["Python for Data Analysis", "Data Visualization", "Statistical Analysis", "Pandas and NumPy", "Data Cleaning"] },
        ]
      },
      {
        id: "2-2",
        name: "II Semester",
        subjects: [
          { code: "CS2201", title: "Probability & Statistics", credits: 3, category: "BS", syllabus: ["Probability Theory", "Random Variables", "Probability Distributions", "Sampling Theory", "Hypothesis Testing", "Regression Analysis"] },
          { code: "CS2202", title: "Computer Graphics", credits: 3, category: "PC", syllabus: ["Graphics Primitives", "2D Transformations", "3D Transformations", "Projections", "Clipping", "Visible Surface Detection", "Illumination Models"] },
          { code: "CS2203", title: "Operating Systems", credits: 3, category: "PC", syllabus: ["Process Management", "CPU Scheduling", "Deadlocks", "Memory Management", "Virtual Memory", "File Systems", "I/O Systems", "Security"] },
          { code: "CS2204", title: "Software Engineering", credits: 3, category: "PC", syllabus: ["SDLC Models", "Requirements Engineering", "Software Design", "Coding Standards", "Testing", "Maintenance", "Project Management"] },
          { code: "CS2205", title: "Microprocessors and Interfacing", credits: 3, category: "PC", syllabus: ["8086 Architecture", "Instruction Set", "Assembly Programming", "Memory Interfacing", "I/O Interfacing", "Interrupts", "DMA"] },
          { code: "CS2206", title: "Computer Graphics Lab", credits: 1.5, category: "PC", syllabus: ["Line Drawing Algorithms", "Circle Drawing", "Polygon Filling", "2D Transformations", "3D Transformations", "Clipping Algorithms"] },
          { code: "CS2207", title: "Operating Systems Lab", credits: 1.5, category: "PC", syllabus: ["Process Scheduling", "Deadlock Avoidance", "Memory Allocation", "Page Replacement", "File Operations"] },
          { code: "CS2208", title: "Microprocessors Lab", credits: 1.5, category: "PC", syllabus: ["Assembly Programs", "Arithmetic Operations", "String Operations", "Interfacing Programs", "Interrupt Programming"] },
        ]
      }
    ]
  },
  {
    id: 3,
    name: "3rd Year",
    semesters: [
      {
        id: "3-1",
        name: "I Semester",
        subjects: [
          { code: "CS3101", title: "Data Communications & Computer Networks", credits: 3, category: "PC", syllabus: ["Network Fundamentals", "OSI Model", "TCP/IP", "Data Link Layer", "Network Layer", "Transport Layer", "Application Layer", "Network Security"] },
          { code: "CS3102", title: "Artificial Intelligence", credits: 3, category: "PC", syllabus: ["AI Fundamentals", "Search Algorithms", "Knowledge Representation", "Logic", "Planning", "Uncertainty", "Learning", "Natural Language Processing"] },
          { code: "CS3103", title: "Compiler Design", credits: 3, category: "PC", syllabus: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Intermediate Code Generation", "Code Optimization", "Code Generation", "Symbol Table Management"] },
          { code: "CS3104", title: "Professional Elective - I", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS3105", title: "Open Elective - I", credits: 3, category: "OE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS3106", title: "Computer Networks Lab", credits: 1.5, category: "PC", syllabus: ["Network Commands", "Socket Programming", "Protocol Simulation", "Network Configuration", "Wireshark Analysis"] },
          { code: "CS3107", title: "Python Programming Lab", credits: 1.5, category: "PC", syllabus: ["Python Basics", "Data Structures", "File Handling", "OOP in Python", "Database Programming", "Web Scraping"] },
          { code: "CS3108", title: "Mini Project", credits: 1.5, category: "PC", syllabus: ["Project Planning", "Implementation", "Testing", "Documentation", "Presentation"] },
        ]
      },
      {
        id: "3-2",
        name: "II Semester",
        subjects: [
          { code: "CS3201", title: "Web Technologies", credits: 3, category: "PC", syllabus: ["HTML5 & CSS3", "JavaScript", "DOM Manipulation", "AJAX", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "React Basics"] },
          { code: "CS3202", title: "Machine Learning", credits: 3, category: "PC", syllabus: ["ML Fundamentals", "Supervised Learning", "Unsupervised Learning", "Linear Regression", "Classification", "Clustering", "Neural Networks", "Deep Learning Basics"] },
          { code: "CS3203", title: "Cryptography & Network Security", credits: 3, category: "PC", syllabus: ["Cryptography Basics", "Symmetric Encryption", "Asymmetric Encryption", "Hash Functions", "Digital Signatures", "Network Security Protocols", "Firewalls", "Intrusion Detection"] },
          { code: "CS3204", title: "Professional Elective - II", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS3205", title: "Open Elective - II", credits: 3, category: "OE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS3206", title: "Web Technologies Lab", credits: 1.5, category: "PC", syllabus: ["HTML/CSS Projects", "JavaScript Programs", "Frontend Development", "Backend with Node.js", "Full Stack Project"] },
          { code: "CS3207", title: "Machine Learning Lab", credits: 1.5, category: "PC", syllabus: ["Python for ML", "Scikit-learn", "Classification Models", "Regression Models", "Clustering", "Neural Networks"] },
          { code: "CS3208", title: "Seminar", credits: 1.5, category: "PC", syllabus: ["Research Methodology", "Technical Presentation", "Documentation", "Communication Skills"] },
        ]
      }
    ]
  },
  {
    id: 4,
    name: "4th Year",
    semesters: [
      {
        id: "4-1",
        name: "I Semester",
        subjects: [
          { code: "CS4101", title: "Professional Elective - III", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4102", title: "Professional Elective - IV", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4103", title: "Open Elective - III", credits: 3, category: "OE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4104", title: "Blockchain Technology", credits: 3, category: "PC", syllabus: ["Blockchain Fundamentals", "Cryptographic Techniques", "Bitcoin", "Ethereum", "Smart Contracts", "Consensus Algorithms", "DApps", "Blockchain Security"] },
          { code: "CS4105", title: "Industrial Oriented Mini Project", credits: 3, category: "PC", syllabus: ["Industry Problem Identification", "Solution Design", "Implementation", "Testing", "Deployment"] },
          { code: "CS4106", title: "Comprehensive Viva", credits: 1.5, category: "PC", syllabus: ["Core Subjects Review", "Technical Communication", "Problem Solving", "Presentation Skills"] },
        ]
      },
      {
        id: "4-2",
        name: "II Semester",
        subjects: [
          { code: "CS4201", title: "Professional Elective - V", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4202", title: "Professional Elective - VI", credits: 3, category: "PE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4203", title: "Open Elective - IV", credits: 3, category: "OE", syllabus: ["Topic varies based on elective chosen"] },
          { code: "CS4204", title: "Major Project", credits: 9, category: "PC", syllabus: ["Problem Definition", "Literature Survey", "System Design", "Implementation", "Testing & Validation", "Documentation", "Final Presentation"] },
        ]
      }
    ]
  }
];
