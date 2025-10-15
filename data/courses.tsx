import type { Course, QuizQuestion } from "@/types"

export const courses: Course[] = [
  {
    id: "mathematics",
    category: "school",
    title: "Mathematics Fundamentals",
    description: "Master essential math concepts from algebra to calculus",
    difficulty: "beginner",
    estimatedTime: "4 weeks",
    icon: "🔢",
    lessons: [
      {
        id: "algebra-intro",
        title: "Introduction to Algebra",
        content: `
          <h2>What is Algebra?</h2>
          <p>Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations.</p>
          
          <h3>Key Concepts:</h3>
          <ul>
            <li><strong>Variables:</strong> Letters like x, y, z that represent unknown values</li>
            <li><strong>Constants:</strong> Fixed numbers like 5, -3, π</li>
            <li><strong>Expressions:</strong> Combinations of variables and constants (e.g., 3x + 2)</li>
            <li><strong>Equations:</strong> Mathematical statements showing equality (e.g., 2x + 3 = 7)</li>
          </ul>

          <h3>Basic Operations:</h3>
          <p>In algebra, we perform the same operations as arithmetic:</p>
          <ul>
            <li>Addition: x + 5</li>
            <li>Subtraction: x - 3</li>
            <li>Multiplication: 4x or 4 × x</li>
            <li>Division: x/2 or x ÷ 2</li>
          </ul>

          <h3>Example Problem:</h3>
          <p>Solve for x: 2x + 6 = 14</p>
          <p><strong>Solution:</strong></p>
          <ol>
            <li>Subtract 6 from both sides: 2x = 8</li>
            <li>Divide both sides by 2: x = 4</li>
          </ol>
        `,
        type: "theory",
        duration: 15,
      },
      {
        id: "linear-equations",
        title: "Solving Linear Equations",
        content: `
          <h2>Linear Equations</h2>
          <p>A linear equation is an equation where the highest power of the variable is 1.</p>
          
          <h3>Standard Form:</h3>
          <p>ax + b = c, where a, b, and c are constants</p>
          
          <h3>Steps to Solve:</h3>
          <ol>
            <li>Simplify both sides if needed</li>
            <li>Move all terms with variables to one side</li>
            <li>Move all constants to the other side</li>
            <li>Divide by the coefficient of the variable</li>
          </ol>

          <h3>Practice Problems:</h3>
          <div class="bg-muted p-4 rounded-lg">
            <p><strong>Problem 1:</strong> 3x - 7 = 14</p>
            <p><strong>Problem 2:</strong> 5x + 2 = 3x + 10</p>
            <p><strong>Problem 3:</strong> 2(x + 3) = 16</p>
          </div>
        `,
        type: "practice",
        duration: 20,
      },
    ],
  },
  {
    id: "javascript",
    category: "programming",
    title: "JavaScript Fundamentals",
    description: "Learn the building blocks of modern web development",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "🟨",
    lessons: [
      {
        id: "js-variables",
        title: "Variables and Data Types",
        content: `
          <h2>JavaScript Variables</h2>
          <p>Variables are containers for storing data values. In JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
          
          <h3>Variable Declaration:</h3>
          <ul>
            <li><code>let</code> - for variables that can change</li>
            <li><code>const</code> - for constants that won't change</li>
            <li><code>var</code> - older way (avoid in modern code)</li>
          </ul>

          <h3>Data Types:</h3>
          <ul>
            <li><strong>String:</strong> Text data ("Hello World")</li>
            <li><strong>Number:</strong> Numeric data (42, 3.14)</li>
            <li><strong>Boolean:</strong> True or false values</li>
            <li><strong>Array:</strong> List of values [1, 2, 3]</li>
            <li><strong>Object:</strong> Key-value pairs {name: "John"}</li>
          </ul>
        `,
        codeExample: `// Variable declarations
let name = "Alice";
const age = 25;
let isStudent = true;

// Arrays
let colors = ["red", "green", "blue"];

// Objects
let person = {
  name: "Bob",
  age: 30,
  city: "New York"
};

console.log(name);
console.log(person.name);`,
        type: "practice",
        duration: 25,
      },
      {
        id: "js-functions",
        title: "Functions",
        content: `
          <h2>JavaScript Functions</h2>
          <p>Functions are reusable blocks of code that perform specific tasks.</p>
          
          <h3>Function Declaration:</h3>
          <pre><code>function functionName(parameters) {
  // code to execute
  return result;
}</code></pre>

          <h3>Arrow Functions (ES6):</h3>
          <pre><code>const functionName = (parameters) => {
  // code to execute
  return result;
}</code></pre>

          <h3>Function Types:</h3>
          <ul>
            <li><strong>Regular Functions:</strong> Can be called before declaration</li>
            <li><strong>Arrow Functions:</strong> More concise syntax</li>
            <li><strong>Anonymous Functions:</strong> Functions without names</li>
          </ul>
        `,
        codeExample: `// Regular function
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Short arrow function
const multiply = (a, b) => a * b;

// Using functions
console.log(greet("World"));
console.log(add(5, 3));
console.log(multiply(4, 7));`,
        type: "practice",
        duration: 30,
      },
    ],
  },
  {
    id: "react-js",
    category: "programming",
    title: "React Fundamentals",
    description: "Build interactive user interfaces with React",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "React",
    lessons: [
      {
        id: "react-components",
        title: "Components and JSX",
        content: `
          <h2>React Components</h2>
          <p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.</p>
          
          <h3>Functional Components:</h3>
          <p>Modern React uses functional components with hooks.</p>
          
          <h3>JSX:</h3>
          <p>JSX is a syntax extension that allows you to write HTML-like code in JavaScript.</p>
          
          <h3>Key Rules:</h3>
          <ul>
            <li>Component names must start with a capital letter</li>
            <li>Return a single parent element (or Fragment)</li>
            <li>Use className instead of class</li>
            <li>Close all tags</li>
          </ul>
        `,
        codeExample: `import React from 'react';

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
};

// Using Components
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Greeting name="Bob" age={25} />
    </div>
  );
}

export default App;`,
        type: "practice",
        duration: 35,
      },
    ],
  },
  {
    id: "python",
    category: "programming",
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts",
    difficulty: "beginner",
    estimatedTime: "8 weeks",
    icon: "🐍",
    lessons: [
      {
        id: "python-intro",
        title: "Introduction to Python",
        content: "<h2>Python Basics</h2><p>Python is a versatile programming language.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "web-development",
    category: "programming",
    title: "Web Development Fundamentals",
    description: "Build modern websites with HTML, CSS, and JavaScript",
    difficulty: "beginner",
    estimatedTime: "10 weeks",
    icon: "Web Dev",
    lessons: [
      {
        id: "html-intro",
        title: "HTML Basics",
        content: "<h2>HTML</h2><p>Learn the structure of web pages.</p>",
        type: "theory",
        duration: 25,
      },
    ],
  },
  {
    id: "html",
    category: "programming",
    title: "HTML & CSS",
    description: "Master the fundamentals of web markup and styling",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "HTML",
    lessons: [
      {
        id: "html-basics",
        title: "HTML Elements",
        content: "<h2>HTML</h2><p>Building blocks of web pages.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "css",
    category: "programming",
    title: "CSS Styling",
    description: "Master cascading style sheets for beautiful web design",
    difficulty: "beginner",
    estimatedTime: "5 weeks",
    icon: "🎨",
    lessons: [
      {
        id: "css-intro",
        title: "CSS Basics",
        content: "<h2>CSS</h2><p>Style your web pages.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "next-js",
    category: "programming",
    title: "Next.js Framework",
    description: "Build full-stack React applications with Next.js",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "Next.js",
    lessons: [
      {
        id: "next-intro",
        title: "Next.js Basics",
        content: "<h2>Next.js</h2><p>React framework for production.</p>",
        type: "theory",
        duration: 25,
      },
    ],
  },
  {
    id: "node-js",
    category: "programming",
    title: "Node.js Backend",
    description: "Build server-side applications with Node.js",
    difficulty: "intermediate",
    estimatedTime: "7 weeks",
    icon: "Node.js",
    lessons: [
      {
        id: "node-intro",
        title: "Node.js Fundamentals",
        content: "<h2>Node.js</h2><p>Server-side JavaScript.</p>",
        type: "theory",
        duration: 30,
      },
    ],
  },
  {
    id: "sql-mysql-postgresql",
    category: "programming",
    title: "SQL Databases",
    description: "Master SQL and relational databases",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "🗃️",
    lessons: [
      {
        id: "sql-intro",
        title: "SQL Basics",
        content: "<h2>SQL</h2><p>Query databases.</p>",
        type: "theory",
        duration: 25,
      },
    ],
  },
  {
    id: "mongodb",
    category: "programming",
    title: "MongoDB",
    description: "Learn NoSQL database design with MongoDB",
    difficulty: "intermediate",
    estimatedTime: "5 weeks",
    icon: "🍃",
    lessons: [
      {
        id: "mongo-intro",
        title: "MongoDB Basics",
        content: "<h2>MongoDB</h2><p>NoSQL database.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  // Schooling Courses
  {
    id: "english-language-literature",
    category: "school",
    title: "English Language & Literature",
    description: "Develop language and literary skills",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "📚",
    lessons: [
      {
        id: "english-intro",
        title: "English Basics",
        content: "<h2>English</h2><p>Language fundamentals.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "basic-science",
    category: "school",
    title: "Basic Science",
    description: "Explore fundamental scientific principles",
    difficulty: "beginner",
    estimatedTime: "5 weeks",
    icon: "🔬",
    lessons: [
      {
        id: "science-intro",
        title: "Science Basics",
        content: "<h2>Science</h2><p>Fundamental principles.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "social-studies",
    category: "school",
    title: "Social Studies",
    description: "Understand society and culture",
    difficulty: "beginner",
    estimatedTime: "5 weeks",
    icon: "🌍",
    lessons: [
      {
        id: "social-intro",
        title: "Social Studies Basics",
        content: "<h2>Social Studies</h2><p>Society and culture.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "history",
    category: "school",
    title: "History",
    description: "Explore historical events and civilizations",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "📜",
    lessons: [
      {
        id: "history-intro",
        title: "History Basics",
        content: "<h2>History</h2><p>Historical events.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "geography",
    category: "school",
    title: "Geography",
    description: "Learn about the world and its landscapes",
    difficulty: "beginner",
    estimatedTime: "5 weeks",
    icon: "🗺️",
    lessons: [
      {
        id: "geography-intro",
        title: "Geography Basics",
        content: "<h2>Geography</h2><p>World landscapes.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "civic-education",
    category: "school",
    title: "Civic Education",
    description: "Understand citizenship and government",
    difficulty: "beginner",
    estimatedTime: "4 weeks",
    icon: "🏛️",
    lessons: [
      {
        id: "civic-intro",
        title: "Civic Basics",
        content: "<h2>Civic Education</h2><p>Citizenship.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "economics",
    category: "school",
    title: "Economics",
    description: "Learn economic principles and systems",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "💰",
    lessons: [
      {
        id: "economics-intro",
        title: "Economics Basics",
        content: "<h2>Economics</h2><p>Economic principles.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "business-studies",
    category: "school",
    title: "Business Studies",
    description: "Explore business management and entrepreneurship",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "💼",
    lessons: [
      {
        id: "business-intro",
        title: "Business Basics",
        content: "<h2>Business Studies</h2><p>Business management.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "biology",
    category: "school",
    title: "Biology",
    description: "Study life and living organisms",
    difficulty: "intermediate",
    estimatedTime: "7 weeks",
    icon: "🧬",
    lessons: [
      {
        id: "biology-intro",
        title: "Biology Basics",
        content: "<h2>Biology</h2><p>Life sciences.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "chemistry",
    category: "school",
    title: "Chemistry",
    description: "Understand chemical reactions and compounds",
    difficulty: "intermediate",
    estimatedTime: "7 weeks",
    icon: "⚗️",
    lessons: [
      {
        id: "chemistry-intro",
        title: "Chemistry Basics",
        content: "<h2>Chemistry</h2><p>Chemical reactions.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "physics",
    category: "school",
    title: "Physics",
    description: "Explore physical laws and principles",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "⚛️",
    lessons: [
      {
        id: "physics-intro",
        title: "Physics Basics",
        content: "<h2>Physics</h2><p>Physical laws.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "government-political-science",
    category: "school",
    title: "Government & Political Science",
    description: "Learn about political systems and governance",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "🏛️",
    lessons: [
      {
        id: "gov-intro",
        title: "Government Basics",
        content: "<h2>Government</h2><p>Political systems.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "fine-arts-creative-arts",
    category: "school",
    title: "Fine Arts & Creative Arts",
    description: "Express creativity through various art forms",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "CSS",
    lessons: [
      {
        id: "arts-intro",
        title: "Arts Basics",
        content: "<h2>Fine Arts</h2><p>Creative expression.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "physical-health-education",
    category: "school",
    title: "Physical & Health Education",
    description: "Promote physical fitness and health awareness",
    difficulty: "beginner",
    estimatedTime: "4 weeks",
    icon: "🏃",
    lessons: [
      {
        id: "health-intro",
        title: "Health Basics",
        content: "<h2>Physical Education</h2><p>Fitness and health.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  // Programming & Tech Courses
  {
    id: "tailwind-css",
    category: "programming",
    title: "Tailwind CSS",
    description: "Master utility-first CSS framework",
    difficulty: "beginner",
    estimatedTime: "4 weeks",
    icon: "🎨",
    lessons: [
      {
        id: "tailwind-intro",
        title: "Tailwind Basics",
        content: "<h2>Tailwind CSS</h2><p>Utility-first styling.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "express-js",
    category: "programming",
    title: "Express.js",
    description: "Build web applications with Express framework",
    difficulty: "intermediate",
    estimatedTime: "5 weeks",
    icon: "🚀",
    lessons: [
      {
        id: "express-intro",
        title: "Express Basics",
        content: "<h2>Express.js</h2><p>Web framework.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "mobile-development",
    category: "programming",
    title: "Mobile Development",
    description: "Create mobile applications",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "📱",
    lessons: [
      {
        id: "mobile-intro",
        title: "Mobile Dev Basics",
        content: "<h2>Mobile Development</h2><p>Mobile apps.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "react-native",
    category: "programming",
    title: "React Native",
    description: "Build native mobile apps with React",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "📱",
    lessons: [
      {
        id: "react-native-intro",
        title: "React Native Basics",
        content: "<h2>React Native</h2><p>Native mobile apps.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "flutter",
    category: "programming",
    title: "Flutter",
    description: "Develop cross-platform mobile apps",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "🦋",
    lessons: [
      {
        id: "flutter-intro",
        title: "Flutter Basics",
        content: "<h2>Flutter</h2><p>Cross-platform apps.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "backend-databases",
    category: "programming",
    title: "Backend & Databases",
    description: "Master server-side development and data management",
    difficulty: "intermediate",
    estimatedTime: "10 weeks",
    icon: "🗄️",
    lessons: [
      {
        id: "backend-intro",
        title: "Backend Basics",
        content: "<h2>Backend</h2><p>Server-side development.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "django",
    category: "programming",
    title: "Django",
    description: "Build web applications with Django framework",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "🎸",
    lessons: [
      {
        id: "django-intro",
        title: "Django Basics",
        content: "<h2>Django</h2><p>Python web framework.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "java",
    category: "programming",
    title: "Java Programming",
    description: "Learn object-oriented programming with Java",
    difficulty: "intermediate",
    estimatedTime: "10 weeks",
    icon: "☕",
    lessons: [
      {
        id: "java-intro",
        title: "Java Basics",
        content: "<h2>Java</h2><p>Object-oriented programming.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "php",
    category: "programming",
    title: "PHP Programming",
    description: "Develop dynamic web applications with PHP",
    difficulty: "intermediate",
    estimatedTime: "8 weeks",
    icon: "🐘",
    lessons: [
      {
        id: "php-intro",
        title: "PHP Basics",
        content: "<h2>PHP</h2><p>Web development.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "git-github",
    category: "programming",
    title: "Git & GitHub",
    description: "Master version control and collaboration",
    difficulty: "beginner",
    estimatedTime: "3 weeks",
    icon: "🔄",
    lessons: [
      {
        id: "git-intro",
        title: "Git Basics",
        content: "<h2>Git</h2><p>Version control.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "ui-ux-design-basics",
    category: "programming",
    title: "UI/UX Design Basics",
    description: "Learn user interface and experience design",
    difficulty: "beginner",
    estimatedTime: "6 weeks",
    icon: "🎯",
    lessons: [
      {
        id: "ui-ux-intro",
        title: "UI/UX Basics",
        content: "<h2>UI/UX Design</h2><p>User experience.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "api-development-integration",
    category: "programming",
    title: "API Development & Integration",
    description: "Build and integrate APIs",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "🔗",
    lessons: [
      {
        id: "api-intro",
        title: "API Basics",
        content: "<h2>APIs</h2><p>Application interfaces.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "cloud-basics-aws-firebase",
    category: "programming",
    title: "Cloud Basics (AWS, Firebase)",
    description: "Learn cloud computing fundamentals",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "☁️",
    lessons: [
      {
        id: "cloud-intro",
        title: "Cloud Basics",
        content: "<h2>Cloud Computing</h2><p>AWS and Firebase.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "cybersecurity-fundamentals",
    category: "programming",
    title: "Cybersecurity Fundamentals",
    description: "Understand digital security principles",
    difficulty: "intermediate",
    estimatedTime: "6 weeks",
    icon: "🔒",
    lessons: [
      {
        id: "cyber-intro",
        title: "Cybersecurity Basics",
        content: "<h2>Cybersecurity</h2><p>Digital security.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
  {
    id: "data-structures-algorithms",
    category: "programming",
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts",
    difficulty: "advanced",
    estimatedTime: "12 weeks",
    icon: "🧠",
    lessons: [
      {
        id: "ds-intro",
        title: "Data Structures Basics",
        content: "<h2>Data Structures</h2><p>Fundamental concepts.</p>",
        type: "theory",
        duration: 20,
      },
    ],
  },
]

export const quizQuestions: QuizQuestion[] = [
  // Math Questions
  {
    id: "math-1",
    question: "What is the value of x in the equation: 2x + 6 = 14?",
    options: ["x = 2", "x = 4", "x = 6", "x = 8"],
    answerIndex: 1,
    explanation: "Subtract 6 from both sides: 2x = 8, then divide by 2: x = 4",
    topicTags: ["algebra", "linear-equations"],
    difficulty: "easy",
  },
  {
    id: "math-2",
    question: "Which of the following is a linear equation?",
    options: ["x² + 2x = 5", "3x + 7 = 12", "x³ - 4 = 0", "√x = 9"],
    answerIndex: 1,
    explanation: "A linear equation has the highest power of the variable as 1",
    topicTags: ["algebra", "linear-equations"],
    difficulty: "medium",
  },
  {
    id: "math-3",
    question: "What is the slope of the line y = 3x + 2?",
    options: ["2", "3", "5", "3x"],
    answerIndex: 1,
    explanation: "In the form y = mx + b, m is the slope. Here m = 3",
    topicTags: ["algebra", "linear-equations"],
    difficulty: "easy",
  },

  // JavaScript Questions
  {
    id: "js-1",
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "final"],
    answerIndex: 2,
    explanation: "const is used to declare constants that cannot be reassigned",
    topicTags: ["javascript", "variables"],
    difficulty: "easy",
  },
  {
    id: "js-2",
    question: 'What will console.log(typeof "Hello") output?',
    options: ["text", "string", "String", "undefined"],
    answerIndex: 1,
    explanation: 'The typeof operator returns "string" for string values',
    topicTags: ["javascript", "data-types"],
    difficulty: "easy",
  },
  {
    id: "js-3",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answerIndex: 0,
    explanation: "push() adds elements to the end of an array",
    topicTags: ["javascript", "arrays"],
    difficulty: "easy",
  },
  {
    id: "js-4",
    question: "What is the correct way to write an arrow function?",
    options: [
      "function => (x) { return x * 2; }",
      "(x) => { return x * 2; }",
      "x -> { return x * 2; }",
      "(x) -> return x * 2;",
    ],
    answerIndex: 1,
    explanation: "Arrow functions use the => syntax: (parameters) => { code }",
    topicTags: ["javascript", "functions"],
    difficulty: "medium",
  },

  // React Questions
  {
    id: "react-1",
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "Java XML"],
    answerIndex: 0,
    explanation: "JSX stands for JavaScript XML, allowing HTML-like syntax in JavaScript",
    topicTags: ["react", "jsx"],
    difficulty: "easy",
  },
  {
    id: "react-2",
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answerIndex: 1,
    explanation: "useState is the primary hook for managing state in functional components",
    topicTags: ["react", "hooks"],
    difficulty: "easy",
  },
  {
    id: "react-3",
    question: "What must React component names start with?",
    options: ["A lowercase letter", "An uppercase letter", "An underscore", "A number"],
    answerIndex: 1,
    explanation: "React component names must start with an uppercase letter",
    topicTags: ["react", "components"],
    difficulty: "easy",
  },
]
