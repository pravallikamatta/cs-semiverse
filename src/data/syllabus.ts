export interface Subject {
  code: string;
  title: string;
  credits: number;
  category: string;
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
          { code: "CS1101", title: "Engineering Mathematics–I", credits: 3, category: "BS" },
          { code: "CS1102", title: "English", credits: 3, category: "HSS" },
          { code: "CS1103", title: "Computer Programming Using C", credits: 3, category: "ES" },
          { code: "CS1104", title: "IT Essentials", credits: 3, category: "ES" },
          { code: "CS1105", title: "Communication Skills Lab", credits: 1.5, category: "HSS" },
          { code: "CS1106", title: "Engineering Workshop Lab", credits: 1.5, category: "ES" },
          { code: "CS1107", title: "Computer Programming Lab", credits: 1.5, category: "ES" },
        ]
      },
      {
        id: "1-2",
        name: "II Semester",
        subjects: [
          { code: "CS1201", title: "Engineering Mathematics–II", credits: 3, category: "BS" },
          { code: "CS1202", title: "Engineering Physics", credits: 3, category: "BS" },
          { code: "CS1203", title: "Elements of Electronics Engineering", credits: 3, category: "ES" },
          { code: "CS1204", title: "Data Structures Using C", credits: 3, category: "ES" },
          { code: "CS1205", title: "Digital Logic Design", credits: 3, category: "ES" },
          { code: "CS1206", title: "Linux Administration Lab", credits: 1.5, category: "ES" },
          { code: "CS1207", title: "Engineering Physics Lab", credits: 1.5, category: "BS" },
          { code: "CS1208", title: "Data Structures Lab", credits: 1.5, category: "ES" },
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
          { code: "CS2101", title: "Discrete Mathematical Structures", credits: 3, category: "BS" },
          { code: "CS2102", title: "Computer Organization", credits: 3, category: "PC" },
          { code: "CS2103", title: "Database Management Systems", credits: 3, category: "PC" },
          { code: "CS2104", title: "Object Oriented Programming Through Java", credits: 3, category: "PC" },
          { code: "CS2105", title: "Design & Analysis of Algorithms", credits: 3, category: "PC" },
          { code: "CS2106", title: "DBMS Lab", credits: 1.5, category: "PC" },
          { code: "CS2107", title: "Java Programming Lab", credits: 1.5, category: "PC" },
          { code: "CS2108", title: "Data Analytics Lab", credits: 1.5, category: "PC" },
        ]
      },
      {
        id: "2-2",
        name: "II Semester",
        subjects: [
          { code: "CS2201", title: "Probability & Statistics", credits: 3, category: "BS" },
          { code: "CS2202", title: "Computer Graphics", credits: 3, category: "PC" },
          { code: "CS2203", title: "Operating Systems", credits: 3, category: "PC" },
          { code: "CS2204", title: "Software Engineering", credits: 3, category: "PC" },
          { code: "CS2205", title: "Microprocessors and Interfacing", credits: 3, category: "PC" },
          { code: "CS2206", title: "Computer Graphics Lab", credits: 1.5, category: "PC" },
          { code: "CS2207", title: "Operating Systems Lab", credits: 1.5, category: "PC" },
          { code: "CS2208", title: "Microprocessors Lab", credits: 1.5, category: "PC" },
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
          { code: "CS3101", title: "Data Communications & Computer Networks", credits: 3, category: "PC" },
          { code: "CS3102", title: "Artificial Intelligence", credits: 3, category: "PC" },
          { code: "CS3103", title: "Compiler Design", credits: 3, category: "PC" },
          { code: "CS3104", title: "Professional Elective - I", credits: 3, category: "PE" },
          { code: "CS3105", title: "Open Elective - I", credits: 3, category: "OE" },
          { code: "CS3106", title: "Computer Networks Lab", credits: 1.5, category: "PC" },
          { code: "CS3107", title: "Python Programming Lab", credits: 1.5, category: "PC" },
          { code: "CS3108", title: "Mini Project", credits: 1.5, category: "PC" },
        ]
      },
      {
        id: "3-2",
        name: "II Semester",
        subjects: [
          { code: "CS3201", title: "Web Technologies", credits: 3, category: "PC" },
          { code: "CS3202", title: "Machine Learning", credits: 3, category: "PC" },
          { code: "CS3203", title: "Cryptography & Network Security", credits: 3, category: "PC" },
          { code: "CS3204", title: "Professional Elective - II", credits: 3, category: "PE" },
          { code: "CS3205", title: "Open Elective - II", credits: 3, category: "OE" },
          { code: "CS3206", title: "Web Technologies Lab", credits: 1.5, category: "PC" },
          { code: "CS3207", title: "Machine Learning Lab", credits: 1.5, category: "PC" },
          { code: "CS3208", title: "Seminar", credits: 1.5, category: "PC" },
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
          { code: "CS4101", title: "Professional Elective - III", credits: 3, category: "PE" },
          { code: "CS4102", title: "Professional Elective - IV", credits: 3, category: "PE" },
          { code: "CS4103", title: "Open Elective - III", credits: 3, category: "OE" },
          { code: "CS4104", title: "Blockchain Technology", credits: 3, category: "PC" },
          { code: "CS4105", title: "Industrial Oriented Mini Project", credits: 3, category: "PC" },
          { code: "CS4106", title: "Comprehensive Viva", credits: 1.5, category: "PC" },
        ]
      },
      {
        id: "4-2",
        name: "II Semester",
        subjects: [
          { code: "CS4201", title: "Professional Elective - V", credits: 3, category: "PE" },
          { code: "CS4202", title: "Professional Elective - VI", credits: 3, category: "PE" },
          { code: "CS4203", title: "Open Elective - IV", credits: 3, category: "OE" },
          { code: "CS4204", title: "Major Project", credits: 9, category: "PC" },
        ]
      }
    ]
  }
];
