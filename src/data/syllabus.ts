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
          { code: "CS1101", title: "Engineering Mathematics – I", credits: 3, category: "BS", syllabus: [
            "Partial Differentiation: Functions of two or more variables, Partial derivatives, Homogeneous functions, Euler's theorem, Total derivative, Change of variables, Jacobians, Mean Value Theorems",
            "Applications of Partial Differentiation: Tangent plane and Normal to a surface, Taylor's theorem for two variables, Errors and approximations, Maxima and Minima, Lagrange's method of undetermined multipliers, Differentiation under the integral sign – Leibnitz's rule",
            "Multiple Integrals: Double Integrals, Change of Order of Integration, Double Integrals in Polar Coordinates, Triple Integrals, Change of Variables",
            "Multiple Integrals – Applications: Area enclosed by plane curves, Volumes of solids, Area of a curved surface, Mass, Centre of gravity, Moment of inertia, Beta and Gamma Functions, Error Function",
            "Fourier Series: Euler's Formulae, Conditions for a Fourier Expansion, Functions with points of discontinuity, Change of Interval, Odd and Even Functions, Half-Range Series, Parseval's Formula, Practical Harmonic Analysis",
          ]},
          { code: "CS1102", title: "Green Chemistry", credits: 3, category: "BS", syllabus: [
            "Water Technology: Sources of water, Impurities, WHO limits, Hardness and its determination, Boiler troubles, Water softening methods (Lime-Soda, Zeolite, Ion Exchange), Municipal water treatment, Break point chlorination, Desalination, Reverse Osmosis, Electrodialysis",
            "Batteries: Primary batteries (Zinc-carbon, Duracell, Zinc/air, Lithium primary cells); Secondary batteries (Lead acid, VRLA, Ni-Cd, Ni-Zn, Ni-MH, Li-ion, ultrathin Li-polymer); Advanced batteries for electric vehicles, Sodium-beta and redox batteries",
            "Fuel Cells: Working principle, anodic/cathodic reactions, fabrication, applications and environmental aspects of PEM, alkaline, phosphoric acid, solid oxide, molten carbonate, and direct methanol fuel cells",
            "Corrosion: Origin and theory, Types (chemical, electrochemical, pitting, intergranular, waterline, stress), Galvanic series, Factors affecting corrosion, Controlling methods, Protective coatings, Electroplating and Electroless plating",
            "Green Chemistry and Technology: 12 principles of green chemistry, Toxicity, MSDS, Zero pollution technologies, Atom economy, Greener synthetic pathways, Green solvents, Green fuels and propellants, Biocatalysis",
          ]},
          { code: "CS1103", title: "English", credits: 3, category: "HSS", syllabus: [
            "Prose & Poetry: On the conduct of life (William Hazlitt), If (Rudyard Kipling), The Brook (Alfred Tennyson), How I Became a Public Speaker (G.B. Shaw), The Death Trap (Saki), On Saving Time (Seneca), Chindu Yellamma, Muhammad Yunus, Politics and the English Language (George Orwell), Dancer with a White Parasol (Ranjana Dave)",
            "Life Skills: Values and Ethics, Self-Improvement, Time Management, Innovation, Motivation",
            "Grammar: Prepositions, Articles, Noun-Pronoun Agreement, Subject-Verb Agreement, Misplaced Modifiers, Clichés and Redundancies",
            "Vocabulary: Word Formation, Root Words from other Languages, Prefixes and Suffixes, Synonyms, Antonyms, Common Abbreviations",
            "Writing: Clauses and Sentences, Punctuation, Principles of Good Writing, Essay Writing, Writing a Summary",
          ]},
          { code: "CS1104", title: "Computer Programming Using C", credits: 3, category: "ES", syllabus: [
            "Introduction to C: Tokens, Data Types, Format Specifiers, I/O Statements, Operators, Expressions, Type casting",
            "Control Statements: Conditional (if, switch), Looping (while, do-while, for), Break, Continue, Goto, Nested loops",
            "Arrays & Strings: One and Two-dimensional arrays, Character arrays, String declaration and initialization, String handling functions, Table of strings",
            "Functions: Definition, Return values, Function calls and declarations, Categories of functions, Nesting, Recursion, Passing arrays and strings, Scope, Visibility and Lifetime of variables",
            "Pointers: Declaring and initializing pointers, Pointer expressions, Pointers and arrays, Pointers and strings, Array of pointers, Pointers as function arguments, Functions returning pointers, Pointers to functions and structures",
            "Structures and Unions: Defining structures, Structure variables, Accessing members, Arrays of structures, Structures within structures, Structures and functions, Unions, Bit-fields",
            "File Handling: Opening, closing, I/O operations on files, Error handling, Random access to files, Command line arguments",
          ]},
          { code: "CS1105", title: "IT Essentials", credits: 3, category: "ES", syllabus: [
            "Introduction to the Personal Computer: Computer system components, Cases and Power Supplies, Internal Components, Ports and Cables, Input and Output Devices, System Resources",
            "Safe Lab Procedures and Tool Use: Safe working conditions, Tools and software for PC components, Proper tool use",
            "Computer Assembly: Motherboard installation, Internal and external drives, Adapter cards, Power cables, First boot, Preventive maintenance and troubleshooting",
            "Laptops and Portable Devices: Preventive maintenance techniques, Troubleshooting laptops and portable devices",
            "Fundamental Operating Systems: Purpose of an OS, Comparing operating systems, Installation, Preventive maintenance, Troubleshooting OS",
            "Fundamental Networks: Principles of networking, Types of networks, Networking concepts and technologies, Physical components, LAN topologies and architectures",
            "Fundamental Security: Importance of security, Security threats, Security procedures, Preventive maintenance and troubleshooting",
          ]},
        ]
      },
      {
        id: "1-2",
        name: "II Semester",
        subjects: [
          { code: "CS1201", title: "Engineering Mathematics – II", credits: 3, category: "BS", syllabus: [
            "Matrices: Rank, Eigen values and Eigen vectors, Cayley-Hamilton theorem, Quadratic forms and reduction to canonical form, Solution of linear systems by direct and indirect methods",
            "Ordinary Differential Equations of First Order: Formation of ODEs, Equations of first order and first degree, Linear and Bernoulli's equation, Exact differential equations, Orthogonal trajectories, LR & CR circuits, Newton's law of cooling, Law of natural growth and decay",
            "Differential Equations of Higher Order: Linear ODEs with constant coefficients, Complementary function and particular integral, Method of variation of parameters, Cauchy's and Legendre's linear equations, Simultaneous linear differential equations",
            "Laplace Transforms: Transforms of elementary functions, Properties, Transforms of derivatives and integrals, Multiplication by tⁿ and division by t, Inverse Laplace transform, Applications to ODEs, Second shifting theorem, Unit step, Unit impulse and Periodic functions",
          ]},
          { code: "CS1202", title: "Engineering Physics", credits: 3, category: "BS", syllabus: [
            "Thermodynamics: Heat and Work, First and Second laws, Reversible and Irreversible processes, Carnot cycle and Carnot's theorem, Entropy, Third law of thermodynamics",
            "Electromagnetism: Electric flux, Gauss's law, Magnetic force, Biot-Savart's law, Ampere's law, Hall effect, Faraday's law, Lenz's law, Displacement current, Maxwell's equations, Classification of magnetic materials",
            "Ultrasonics: Production by Piezoelectric and Magnetostriction methods, Acoustic grating, Applications",
            "Optics – Interference, Diffraction, Polarisation: Young's experiment, Coherence, Newton's rings, Michelson Interferometer, Fresnel and Fraunhofer diffraction, Polarisation by reflection/refraction, Nicol prism, Quarter and Half wave plates",
            "Lasers and Fibre Optics: Spontaneous and stimulated emission, Population inversion, Ruby/He-Ne/Semiconductor lasers, Optical fibres – Acceptance angle, Numerical aperture, Modes, Fibre optic communication",
            "Modern Physics: De Broglie matter waves, Heisenberg uncertainty principle, Schrödinger's wave equation, Particle in a box, Free electron theory, Kronig-Penney model, Energy bands in solids",
            "Nanophase Materials: Properties, Top-down and bottom-up approaches, Ball milling, CVD, Sol-gel methods, Applications",
          ]},
          { code: "CS1203", title: "Elements of Electronics Engineering", credits: 3, category: "ES", syllabus: [
            "Introduction to Electronics and Semiconductors: Energy band theory, Conduction in insulators/semiconductors/metals, Electron emission, Classification of semiconductors, Carrier concentration, Drift and diffusion currents",
            "Semi-Conductor Diode: PN junction theory, V-I characteristics, Diode current equation, Transition and diffusion capacitances, Breakdown, Zener diode and regulator, Tunnel diode, Schottky diode",
            "Rectifying Circuits: Half-wave, Full-wave and Bridge rectifiers, Efficiency, Ripple, Regulation, Capacitor filters",
            "Bipolar Junction Transistor: PNP and NPN operation, Circuit configurations, CE characteristics, h-parameters, Small signal equivalent circuit",
            "Transistor Biasing and Thermal Stabilization: Biasing methods – Fixed bias, Collector feedback bias, Self bias, Bias compensation",
            "Transistor Amplifiers: CE/CB/CC configurations, Multistage amplifier, Two-stage RC coupled amplifier, Frequency response and bandwidth",
            "Field Effect Transistors: JFET characteristics and parameters, Small signal equivalent circuit, Depletion and Enhancement MOSFETs",
          ]},
          { code: "CS1204", title: "Data Structures Using C", credits: 3, category: "ES", syllabus: [
            "Introduction to Data Structures: Review of C, Recursion and its simulation, Abstract Data Types, Arrays",
            "Stacks: Stack ADT, Primitive operations, Array implementation, Infix, Postfix and Prefix – evaluation and conversions",
            "Queues: Queue ADT, Sequential representation, Types of queues, Array implementation",
            "Linked List: Operations, Implementation of stacks, queues and priority queues using linked lists, Circular lists, Doubly linked lists",
            "Trees: Binary trees, Representations, Traversals, Threaded binary trees, Binary search trees – insertion, deletion and efficiency",
            "Searching: Sequential search, Binary search, Interpolation search",
            "Sorting: Bubble, Quick, Selection, Binary Tree, Heap, Insertion, Shell, Address calculation, Merge and Radix sorts",
            "Graphs: Representations, Transitive closure, Topological ordering, Traversals, Spanning forests, Minimal spanning trees",
          ]},
          { code: "CS1205", title: "Digital Logic Design", credits: 3, category: "ES", syllabus: [
            "Binary Systems: Digital systems, Binary numbers, Number base conversions, Octal and Hexadecimal, Complements, Signed binary numbers, Binary codes, Binary storage and registers",
            "Boolean Algebra and Logic Gates: Axiomatic definition, Basic theorems, Boolean functions, Canonical and Standard forms, Digital logic gates, Integrated circuits",
            "Gate-Level Minimization: K-Map method (up to five variables), Product of sums simplification, Don't-care conditions, NAND/NOR implementation, Exclusive-OR, HDL",
            "Combinational Logic: Analysis and design procedure, Binary adder/subtractor, Decimal adder, Binary multiplier, Magnitude comparator, Decoders, Encoders, Multiplexers",
            "Sequential Logic: Latches, Flip-flops, Analysis of clocked sequential circuits, State reduction and assignment, Design procedure",
            "Registers and Counters: Shift registers, Ripple counters, Synchronous counters, HDL for registers and counters",
            "Memory and Programmable Logic: RAM, Memory decoding, Error detection and correction, ROM, PLA, PAL, Sequential programmable devices",
          ]},
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
          { code: "CS2101", title: "Discrete Mathematical Structures", credits: 3, category: "ES", syllabus: [
            "Foundations – Logic and Proofs: Propositional Logic and Equivalences, Predicates and Quantifiers, Nested Quantifiers, Rules of Inference, Proof Methods, Sets, Functions, Sequences and Summations",
            "Algorithms, Integers and Matrices: Algorithm complexity, Integers and Division, Primes and GCD, Number Theory applications, Matrices",
            "Induction and Recursion: Mathematical and Strong Induction, Well-Ordering, Recursive Definitions and Algorithms, Program Correctness",
            "Counting: Pigeonhole Principle, Permutations and Combinations, Binomial Coefficients, Generalized Permutations and Combinations",
            "Advanced Counting Techniques: Recurrence Relations, Divide-and-Conquer Recurrences, Generating Functions, Inclusion-Exclusion",
            "Relations: Properties, n-ary relations, Representation, Closure, Equivalence relations, Partial orderings",
            "Graphs: Graph models and terminology, Representation and Isomorphism, Connectivity, Euler and Hamilton paths, Shortest paths, Planar graphs, Graph colouring",
            "Trees: Tree traversal, Spanning trees, Minimum spanning trees",
            "Boolean Algebra: Boolean functions, Logic gates, Minimization of circuits",
            "Modelling Computation: Languages and Grammars, Finite-State Machines (with and without output), Language recognition, Turing Machines",
          ]},
          { code: "CS2102", title: "Computer Organization and Architecture", credits: 3, category: "PC", syllabus: [
            "Register Transfer and Micro-operations: Register Transfer Language, Bus and Memory Transfers, Arithmetic, Logic and Shift Micro-operations, ALU",
            "Basic Computer Organization and Design: Instruction Codes, Registers, Computer Instructions, Timing and Control, Instruction Cycle, Memory-Reference Instructions, I/O and Interrupt, Design of Basic Computer and Accumulator Logic",
            "Micro-programmed Control: Control Memory, Address Sequencing, Micro-program Example, Design of Control Unit",
            "Central Processing Unit: General Register and Stack Organization, Instruction Formats, Addressing Modes, Data Transfer and Manipulation, Program Control, RISC, 8085 Architecture and Programming",
            "Pipeline and Vector Processing: Parallel Processing, Pipelining, Arithmetic/Instruction/RISC Pipelines, Vector Processing, Array Processors",
            "Input/Output Organization: Peripheral Devices, I/O Interface, Asynchronous Data Transfer, Modes of Transfer, Priority Interrupt, DMA, IOP, Serial Communication",
            "Memory Organization: Memory Hierarchy, Main, Auxiliary, Associative, Cache and Virtual Memory, Memory Management Hardware",
          ]},
          { code: "CS2103", title: "Probability, Statistics and Queuing Theory", credits: 3, category: "BS", syllabus: [
            "Probability: Definitions, Addition theorem, Conditional probability, Multiplication theorem, Bayes' theorem, Geometric probability",
            "Random Variables and their Properties: Discrete and Continuous random variables, Joint Probability Distributions, Transformation of variables, Mathematical Expectation, Probability Generating Functions",
            "Probability Distributions: Binomial, Poisson, Negative Binomial (Discrete); Uniform, Normal, Exponential (Continuous)",
            "Multivariate Analysis: Correlation and Rank Correlation, Regression Analysis, Multiple Regression, Attributes, Chi-Square test for Goodness of Fit and Independence",
            "Estimation: Sampling distributions, Standard error, Unbiasedness, Efficiency, Maximum Likelihood Estimator, Interval Estimation",
            "Testing of Hypothesis: Null hypothesis, Critical region, Level of significance, Power of the test",
            "Sample Tests: Small sample tests (means, variances, correlation, regression coefficient); Large sample tests based on normal distribution",
            "Queuing Theory: Queue description and characteristics, Steady state solutions of M/M/1, M/M/1:N, M/M/C and M/M/C:N models, Case studies",
          ]},
          { code: "CS2104", title: "Operating Systems", credits: 3, category: "PC", syllabus: [
            "Introduction to Operating Systems: Overview, Types of OS, OS structures and services, System calls, Virtual machines, OS design and implementation",
            "Process Management: Process concepts and operations, Cooperating processes, Threads, Inter-process communication, Process scheduling and algorithms, Multiple-processor and thread scheduling",
            "Process Synchronization: Critical section problem, Peterson's solution, Synchronization hardware, Semaphores, Classical problems, Critical regions, Monitors",
            "Deadlocks: System model, Characterization, Handling methods – Prevention, Avoidance, Detection and Recovery",
            "Memory Management: Logical vs Physical address, Swapping, Contiguous allocation, Paging, Page table structure, Segmentation, Virtual memory, Demand paging, Page replacement, Frame allocation, Thrashing, Memory-mapped files",
            "File Systems and Secondary Storage: File concept, Access methods, Directory structure, Protection, Allocation methods, Free space management, Device drivers, Disk structure, attachment, scheduling and swap-space management",
            "Case Study: Overview of LINUX and Windows operating systems",
          ]},
          { code: "CS2105", title: "Object Oriented Programming Through Java", credits: 3, category: "PC", syllabus: [
            "Introduction to Java: Data types, Variables, Operators, Control structures, Java methods, Overloading, Math class, Arrays",
            "Objects and Classes: Constructors, Finalizer, Visibility modifiers, Methods and objects, Inbuilt classes (String, Character, StringBuffer, File), the 'this' reference",
            "Inheritance and Polymorphism: Super and sub class, Overriding, Object class, Dynamic binding, Generic programming, Casting, instanceof operator, Abstract class, Interfaces, Packages, UTIL package",
            "Event and GUI Programming: Event handling, Mouse and key events, GUI basics, Panels, Frames, Layout managers (Flow, Border, Grid), GUI components, Menus, Dialog boxes, Applet life cycle, Introduction to Swing",
            "I/O Programming: Text and Binary I/O, Binary I/O classes, Object I/O, Random Access Files",
            "Multithreading in Java: Thread life cycle and methods, Runnable interface, Thread synchronization, Exception handling with try-catch-finally, Collections, JavaBeans, Network programming",
            "JDBC: JDBC product and drivers, Two- and Three-Tier client/server models, Basic steps of JDBC, SQL statements, ResultSet, DatabaseMetaData",
          ]},
        ]
      },
      {
        id: "2-2",
        name: "II Semester",
        subjects: [
          { code: "CS2201", title: "Microprocessors", credits: 3, category: "ES", syllabus: [
            "Introduction to Microprocessors and Microcomputers: Brief architecture and programming of 8085 Microprocessor",
            "8086 Microprocessor: Architecture, Instruction Set and Programming",
            "Interfacing Semiconductor Memories and I/O Devices: Classification, Internal organization, Interfacing SRAMs and EPROMs to 8086, I/O device addressing and programming methods",
            "Interfacing Peripherals to Intel 8086 – I: Parallel I/O Interface (8255), Serial I/O Interface (8251), Timer Interface (8253/8254)",
            "Interfacing Peripherals to Intel 8086 – II: Keyboard/Display Interface (8279), Interrupt Controller (8259)",
            "Interfacing Data Converters: D/A and A/D conversion methods, Interfacing DAC and ADC to 8086",
            "Introduction to Microcontrollers: Intel 8051 Architecture and Programming",
          ]},
          { code: "CS2202", title: "Design and Analysis of Algorithms", credits: 3, category: "PC", syllabus: [
            "Introduction: Algorithm specification, Pseudocode conventions, Recursive algorithms, Performance analysis – Space and Time complexity, Amortized complexity, Asymptotic notation, Performance measurement",
            "Divide and Conquer: General method, Defective chessboard, Binary search, Finding maximum and minimum, Merge sort, Quick sort, Randomized sorting algorithms",
            "The Greedy Method: General method, Knapsack problem, Job sequencing with deadlines, Minimum-cost spanning trees (Prim's, Kruskal's), Optimal merge patterns, Single source shortest paths",
            "Dynamic Programming: All-pairs shortest paths, Multistage graphs, Optimal binary search tree, String editing, 0/1 Knapsack, Reliability design",
            "Backtracking: General method, 8-Queens problem, Sum of subsets, Graph colouring, Hamiltonian cycles, Knapsack problem",
            "Branch and Bound: LC Search, 15-Puzzle, FIFO and LC Branch-and-Bound, 0/1 Knapsack, Traveling Salesperson Problem",
            "Limitations of Algorithm Power: Lower-bound arguments, Decision trees, P, NP and NP-complete problems, Approximation algorithms for NP-hard problems, Algorithms for nonlinear equations",
          ]},
          { code: "CS2203", title: "Database Management Systems", credits: 3, category: "PC", syllabus: [
            "Introduction: File system vs DBMS, Advantages of a DBMS, Describing and storing data, Relational model, Levels of abstraction, Data independence, Transaction management, Structure of a DBMS",
            "Database Design and the Relational Model: ER Diagrams, Entities, Attributes, Relationships, Conceptual design with ER model, Integrity constraints, Querying relational data, ER to Relational mapping, Views",
            "Relational Algebra and SQL: Relational algebra, Basic SQL queries, UNION/INTERSECT/EXCEPT, Nested queries, Aggregate operators, Null values, Complex integrity constraints, Triggers and active databases, Embedded and Dynamic SQL, JDBC",
            "Schema Refinement and Normal Forms: Functional Dependencies, Reasoning about FDs, Normal forms, Decomposition properties, Normalization",
            "Transaction Management: ACID properties, Transactions and schedules, Concurrent execution, Lock-based concurrency control",
            "Concurrency Control: 2PL, Serializability and Recoverability, Lock management, Lock conversions, Deadlocks, Specialized locking, Concurrency control without locking",
            "Crash Recovery: ARIES, The log, Write-Ahead Log protocol, Checkpointing, Recovery from system crash, Media recovery",
          ]},
          { code: "CS2204", title: "Formal Languages and Automata Theory", credits: 3, category: "PC", syllabus: [
            "Introduction to Grammars and Languages: Alphabet, Strings, Language, Grammar types, Machine types, Construction of grammar from language descriptions, Chomsky Hierarchy",
            "Finite State Machine: Definition, Representations, Classification and construction, NFA to DFA conversion, ε-transition elimination, Equivalence and optimization of FSMs, Moore and Mealy machines, Applications",
            "Regular Expressions and Languages: Regular Expressions, FA and RE, Algebraic laws, Properties of Regular Languages, Pumping Lemma, Closure and decision properties, Equivalence and minimization of automata",
            "Context Free Grammars and Languages: CFGs, Parse trees, Ambiguity, Simplification of CFG, Normal forms (CNF, GNF), Pumping lemma for CFLs, Closure properties",
            "Pushdown Automata: Definition, Languages of PDA, Equivalence of PDAs and CFGs, Deterministic PDAs",
            "Turing Machines: Definition, Variants of Turing Machines, Recursive and Recursively Enumerable languages",
            "Undecidability and Complexity: Decidable and Undecidable problems, Halting problem, P, NP, NP-complete and NP-hard problems",
          ]},
          { code: "CS2205", title: "Managerial Economics", credits: 3, category: "HSS", syllabus: [
            "Introduction to Managerial Economics: Nature and scope, Relationship with other disciplines, Role of a managerial economist",
            "Demand Analysis: Definition, Types of demand, Demand function, Law of demand, Exceptional demand curves",
            "Elasticity of Demand: Measurement, Types (Price, Income, Cross, Advertisement), Practical importance, Factors governing price elasticity",
            "Utility Analysis: Types of economic utilities, Cardinal and Ordinal utility, Total and Marginal utility, Law of Diminishing Marginal Utility",
            "Theory of Production and Cost Analysis: Production function, Cost classification – Fixed/Variable, Marginal, Controllable, Opportunity, Incremental/Sunk, Explicit/Implicit, Replacement, Historical, Escapable/Unavoidable; Economies and Diseconomies of Scale",
            "Market Structures: Perfect Competition, Monopoly, Duopoly, Oligopoly, Kinked demand curve, Monopolistic Competition",
            "Pricing Analysis: Cost plus, Target, Marginal cost, Going-rate, Average cost, Peak load, Joint product, Life cycle, Skimming, Penetration, Mark-up and Mark-down pricing",
            "Business Cycles: Definition, Characteristics, Phases, Causes, Consequences and Measures",
          ]},
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
