import { motion } from "framer-motion";
import { useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookDemoDialog from "@/components/BookDemoDialog";
import dataAnalyticsImg from "./Images/DA.png";
import fullStackDevelopmentImg from "./Images/FS.png";
import excelAIImg from "./Images/AE.png"
import digitalMarketingImg from "./Images/DM.png"
import pythonImg from "./Images/Python.png"
import dataScienceImg from "./Images/DS.png"
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ChevronDown,
  ChevronUp,
  Download,
  Calendar,
  ExternalLink,
  Share2,
} from "lucide-react";

const courseDetails = {
  "data-analytics": {
    title: "Data Analytics",
    description: {
      whyChoose: [
        "Why Choose Data Analytics?",
        "✔ Understanding what data is and its significance.",
        "✔ How to collect, clean, and analyze data effectively.",
        "✔ Identifying patterns and trends in data.",
        "✔ Applying data analytics in real-world scenarios.",
      ],
      whatYouWillLearn: {
        "Advanced Excel": [
          "✔ Data cleaning techniques.",
          "✔ Pivot Tables and Data Visualization.",
          "✔ VLOOKUP, HLOOKUP, and other essential functions.",
          "✔ Macros and Automation for efficiency.",
          "✔ Power Query and Data Modeling.",
          "✔ Conditional formatting and advanced formulas.",
          "✔ Data validation and error handling.",
        ],
        "Python for Data Analysis": [
          "✔ Basics of Python and its applications in data analysis.",
          "✔ Working with Pandas for data manipulation.",
          "✔ Using NumPy for numerical computations.",
          "✔ Creating data visualizations with Matplotlib and Seaborn.",
          "✔ Data preprocessing and handling missing values.",
          "✔ Exploratory Data Analysis (EDA) techniques.",
          "✔ Handling large datasets efficiently.",
        ],
        "Power BI": [
          "✔ Introduction to Business Intelligence.",
          "✔ Connecting different data sources.",
          "✔ Creating interactive dashboards and reports.",
          "✔ Data transformation and DAX functions.",
          "✔ Real-time data analysis and sharing insights.",
          "✔ Power BI Service and Report Publishing.",
          "✔ Integration with Python and Excel.",
        ],
        SQL: [
          "✔ Understanding databases and SQL queries.",
          "✔ Writing SELECT, JOIN, GROUP BY, and other queries.",
          "✔ Performing data extraction and transformation.",
          "✔ Creating stored procedures and views.",
          "✔ Optimizing database performance.",
          "✔ Advanced SQL techniques for analytics.",
          "✔ Indexing and performance tuning.",
        ],
      },
      whoShouldEnroll: [
        "✅ Students & Freshers interested in a career in Data Analytics.",
        "✅ Professionals looking to upgrade their data skills.",
        "✅ Entrepreneurs and Business Owners aiming to leverage data for decision-making.",
      ],
      courseBenefits: [
        "📌 Hands-on Training with Real-world Projects.",
        "📌 Industry-Recognized Certification.",
        "📌 Expert Mentorship & Career Guidance.",
        "📌 Flexible Learning Options (Online & Offline).",
        "📌 Access to a community of data professionals.",
        "📌 Career Assistance & Resume Building.",
      ],
      contactUs: [
        "📞 Contact Us:",
        "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
        "📧 Email: skillskadda@gmail.com",
        "📲 Call/WhatsApp: 91-78987-97660",
        "🌐 Website: www.skillskadda.in",
      ],
      callToAction:
        "Join Skills Adda Today & Kickstart Your Data Analytics Career!",
    },
    duration: "6 Months",
    image: dataAnalyticsImg,
    highlights: [
      "Data Visualization",
      "AI-driven Analysis",
      "Big Data Processing",
    ],
    syllabus: "/syllabus/data-analytics.pdf",
  },

  "full-stack-development": {
    title: "Full Stack Development",
    description: {
      whyChoose: [
        "Why Choose Full Stack Development?",
        "✔ Master both Frontend and Backend Development.",
        "✔ High demand for Full-Stack Developers in the industry.",
        "✔ Build complete web applications from scratch.",
        "✔ Work with modern technologies and frameworks.",
      ],
      whatYouWillLearn: {
        "Frontend Development": [
          "✔ HTML5, CSS3 & JavaScript Fundamentals.",
          "✔ Responsive Design with Bootstrap & Tailwind CSS.",
          "✔ Modern JavaScript (ES6+) Features.",
          "✔ React.js for Building Interactive UIs.",
          "✔ State Management with Redux.",
          "✔ Performance Optimization & Debugging.",
        ],
        "Backend Development": [
          "✔ Introduction to Node.js & Express.js.",
          "✔ RESTful API Development.",
          "✔ User Authentication & Authorization (JWT, OAuth).",
          "✔ Working with Databases (SQL & NoSQL).",
          "✔ Server-Side Rendering with Next.js.",
          "✔ WebSocket & Real-time Data Handling.",
        ],
        "Database Management": [
          "✔ SQL Basics & Advanced Queries.",
          "✔ NoSQL with MongoDB.",
          "✔ ORM (Mongoose, Sequelize).",
          "✔ Database Design & Optimization.",
          "✔ Data Security & Backup Strategies.",
          "✔ Data Security & Backup Strategies.",
        ],
        "Version Control & Deployment":[
          "✔ Git & GitHub for Source Control.",
          "✔ CI/CD Pipelines for Automation.",
          "✔ Docker & Kubernetes Basics.",
          "✔ Cloud Deployment (AWS, Firebase, Heroku).",
          "✔ Monitoring & Scaling Web Applications."
        ],
        "Full-Stack Project Development":[
          "✔ Building a Full-Stack Application from Scratch.",
          "✔ Implementing Authentication & Authorization.",
          "✔ Integrating Frontend with Backend.",
          "✔ Testing & Debugging Applications.",
          "✔ Hosting & Deploying a Live Project.",
        ],
      },
      whoShouldEnroll: [
        "✅ Students & Beginners aspiring to become developers.",
        "✅ Frontend or Backend Developers looking to go Full-Stack.",
        "✅ Professionals wanting to upskill in modern web development.",
        "✅ Entrepreneurs looking to build their own web applications.",
      ],
      courseBenefits: [
        "📌 Hands-on Training with Real-world Projects.",
        "📌 Industry-Recognized Certification.",
        "📌 Expert Mentorship & Career Guidance.",
        "📌 Flexible Learning Options (Online & Offline).",
        "📌 Access to a community of data professionals.",
        "📌 Career Assistance & Resume Building.",
        "📌 Capstone Projects for Portfolio Development.",
      ],
      contactUs: [
        "📞 Contact Us:",
        "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
        "📧 Email: skillskadda@gmail.com",
        "📲 Call/WhatsApp: 91-78987-97660",
        "🌐 Website: www.skillskadda.in",
      ],
      callToAction:
        "Join Skills Adda Today & Become a Full-Stack Developer!",
    },
    duration: "6 Months",
    image: fullStackDevelopmentImg,
    highlights: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node JS",
      "React JS",
      "Express JS",
      "MongoDB",
      "MySQL",
    ],
    syllabus: "/syllabus/data-analytics.pdf",
  },

  "advanced-excel-with-ai": {
    title: "Advanced Excel With AI",
    description: {
      whyChoose: [
        "Why Choose Advanced Excel With AI?",
        "✔ Essential for data analysis and business intelligence.",
        "✔ Enhances productivity with automation and advanced functions.",
        "✔ Widely used in industries like finance, marketing, and operations.",
        "✔ Helps in efficient data handling and visualization.",
      ],
      whatYouWillLearn: {
        "Data Handling & Cleaning": [
          "✔ Importing and managing large datasets.",
          "✔ Removing duplicates and handling missing data.",
          "✔ Data validation and error handling.",
          "✔ Text functions for data manipulation.",
        ],
        "Advanced Formulas & Functions": [
          "✔ Logical Functions (IF, AND, OR, IFERROR).",
          "✔ Lookup Functions (LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP, INDEX-MATCH).",
          "✔ Statistical Functions (SUMIFS, COUNTIFS, AVERAGEIFS).",
          "✔ Date and Time Functions.",
          "✔ Array Formulas & Dynamic Arrays.",
        ],
        "Pivot Tables & Power Query": [
          "✔ Creating and customizing Pivot Tables.",
          "✔ Grouping and Filtering Data.",
          "✔ Power Query for data transformation.",
          "✔ Combining multiple datasets efficiently.",
          "✔ Automating data processing tasks.",
        ],
        "Automation with Macros & VBA":[
          "✔ Introduction to Macros and VBA.",
          "✔ Writing simple and complex macros.",
          "✔ Automating repetitive tasks.",
          "✔ Creating user-defined functions.",
          "✔ Debugging and optimizing VBA code."
        ],
        "Power BI Integration":[
          "✔ Exporting Excel data to Power BI.",
          "✔ Creating interactive reports and dashboards.",
          "✔ Using Power BI for advanced analytics.",
          "✔ Connecting live data sources.",
        ],
      },
      whoShouldEnroll: [
        "✅ Students & Freshers looking to enhance Excel skills.",
        "✅ Working professionals aiming for efficiency in data handling.",
        "✅ Entrepreneurs & Business Owners for data-driven decisions.",
        "✅ Analysts & Managers needing advanced reporting techniques.",
      ],
      courseBenefits: [
        "📌 Hands-on Training with Real-world Projects.",
        "📌 Industry-Recognized Certification.",
        "📌 Expert Mentorship & Career Guidance.",
        "📌 Flexible Learning Options (Online & Offline).",
        "📌 Access to a community of excel professionals.",
        "📌 Career Assistance & Resume Building.",
        "📌 Practical Assignments for better understanding.",
      ],
      contactUs: [
        "📞 Contact Us:",
        "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
        "📧 Email: skillskadda@gmail.com",
        "📲 Call/WhatsApp: 91-78987-97660",
        "🌐 Website: www.skillskadda.in",
      ],
      callToAction:
        "Join Skills Adda Today & Become an Excel Expert!",
    },
    duration: "2 Months",
    image: excelAIImg,
    highlights: [
      "Power Query & Power Pivot",
      "AI-Powered Excel Features",
      "Advanced Formulas & Functions",
      "Data Visualization & Dashboards",
    ],
    syllabus: "/syllabus/data-analytics.pdf",
  },

  "digital-marketing": {
      "title": "Digital Marketing",
      "description": {
        "whyChoose": [
          "Why Choose Digital Marketing?",
          "✔ High-demand skill in the modern business world.",
          "✔ Essential for business growth and brand awareness.",
          "✔ Lucrative career opportunities in multiple industries.",
          "✔ Measurable and cost-effective marketing strategies."
        ],
        "whatYouWillLearn": {
          "Fundamentals of Digital Marketing": [
            "✔ Understanding Digital Marketing Concepts.",
            "✔ Online Consumer Behavior & Market Research.",
            "✔ Digital Marketing Strategies & Trends.",
            "✔ Competitive Analysis & Branding."
          ],
          "Search Engine Optimization (SEO)": [
            "✔ Keyword Research & On-Page SEO.",
            "✔ Off-Page SEO & Link Building Strategies.",
            "✔ Technical SEO & Site Optimization.",
            "✔ SEO Tools & Performance Analytics."
          ],
          "Social Media Marketing (SMM)": [
            "✔ Facebook, Instagram, LinkedIn, Twitter Marketing.",
            "✔ Content Creation & Engagement Strategies.",
            "✔ Paid Advertising & Influencer Marketing.",
            "✔ Social Media Analytics & Performance Tracking."
          ],
          "Pay-Per-Click (PPC) & Google Ads": [
            "✔ Google Ads & Campaign Optimization.",
            "✔ Keyword Bidding & Quality Score Improvement.",
            "✔ Retargeting & Display Advertising.",
            "✔ Measuring & Optimizing Ad Performance."
          ],
          "Email & Content Marketing": [
            "✔ Email Marketing Strategies & Automation.",
            "✔ Content Creation & Copywriting Techniques.",
            "✔ Lead Generation & Nurturing Campaigns.",
            "✔ Personalization & Email Analytics."
          ],
          "Web Analytics & Performance Tracking": [
            "✔ Google Analytics & Data Interpretation.",
            "✔ Conversion Rate Optimization (CRO).",
            "✔ A/B Testing & Performance Enhancement.",
            "✔ Reporting & Decision-Making Strategies."
          ],
          "E-commerce & Affiliate Marketing": [
            "✔ E-commerce Marketing Strategies.",
            "✔ Affiliate Marketing & Monetization Techniques.",
            "✔ Dropshipping & Online Store Optimization.",
            "✔ Customer Retention & Growth Strategies."
          ]
        },
        "whoShouldEnroll": [
          "✅ Students & Freshers looking for a digital career.",
          "✅ Entrepreneurs & Business Owners aiming for online growth.",
          "✅ Marketing Professionals upgrading their skills.",
          "✅ Freelancers & Influencers expanding their reach."
        ],
        "courseBenefits": [
          "📌 Hands-on Training with Real-world Projects.",
          "📌 Industry-Recognized Certification.",
          "📌 Expert Mentorship & Career Guidance.",
          "📌 Flexible Learning Options (Online & Offline).",
          "📌 Access to Premium Marketing Tools.",
          "📌 Career Assistance & Resume Building.",
          "📌 Live Campaigns & Case Studies."
        ],
        "contactUs": [
          "📞 Contact Us:",
          "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
          "📧 Email: skillskadda@gmail.com",
          "📲 Call/WhatsApp: 91-78987-97660",
          "🌐 Website: www.skillskadda.in"
        ],
        "callToAction": "Join Skills Adda Today & Become a Digital Marketing Expert!"
      },
      "duration": "6 Months",
      "image": digitalMarketingImg,
      "highlights": [
        "SEO & Paid Advertising Mastery",
        "Social Media Growth Strategies",
        "Google Analytics & Performance Tracking",
        "E-commerce & Affiliate Marketing"
      ],
      "syllabus": "/syllabus/digital-marketing.pdf",
  },

  "python": {
    "title": "Python Programming",
    "description": {
      "whyChoose": [
        "Why Choose Python?",
        "✔ Versatile and beginner-friendly programming language.",
        "✔ Widely used in web development, data science, and automation.",
        "✔ High demand in industries like AI, ML, and cybersecurity.",
        "✔ Extensive libraries and community support."
      ],
      "whatYouWillLearn": {
        "Python Fundamentals": [
          "✔ Understanding Python syntax and structure.",
          "✔ Variables, Data Types, and Operators.",
          "✔ Conditional Statements and Loops.",
          "✔ Functions and Modules.",
          "✔ Exception Handling and Debugging."
        ],
        "Object-Oriented Programming (OOP)": [
          "✔ Classes and Objects.",
          "✔ Inheritance and Polymorphism.",
          "✔ Encapsulation and Abstraction.",
          "✔ Working with Magic Methods.",
          "✔ Real-world OOP Applications."
        ],
        "Data Handling with Python": [
          "✔ Working with Lists, Tuples, and Dictionaries.",
          "✔ File Handling (Reading/Writing Files).",
          "✔ JSON and XML Parsing.",
          "✔ Data Manipulation using Pandas.",
          "✔ NumPy for Numerical Computations."
        ],
        "Web Development with Python": [
          "✔ Introduction to Flask & Django.",
          "✔ Building RESTful APIs.",
          "✔ Working with Databases using SQLAlchemy.",
          "✔ Authentication & Security in Web Apps.",
          "✔ Deploying Python Web Applications."
        ],
        "Automation & Scripting": [
          "✔ Writing Python Scripts for Task Automation.",
          "✔ Working with OS and Sys Modules.",
          "✔ Web Scraping with BeautifulSoup & Selenium.",
          "✔ Automating Excel and CSV Tasks.",
          "✔ Building CLI Applications."
        ],
        "Data Science & Machine Learning": [
          "✔ Data Analysis with Pandas & NumPy.",
          "✔ Data Visualization with Matplotlib & Seaborn.",
          "✔ Introduction to Machine Learning with Scikit-learn.",
          "✔ Training & Evaluating ML Models.",
          "✔ AI & Deep Learning Basics with TensorFlow/Keras."
        ],
        "Advanced Python Topics": [
          "✔ Multithreading & Concurrency.",
          "✔ Working with APIs & HTTP Requests.",
          "✔ Unit Testing & Test Automation.",
          "✔ Performance Optimization & Debugging.",
          "✔ Introduction to Cybersecurity with Python."
        ]
      },
      "whoShouldEnroll": [
        "✅ Students & Beginners looking to start programming.",
        "✅ Developers & Engineers expanding their skill set.",
        "✅ Data Analysts & Scientists working with Python.",
        "✅ Business Professionals automating tasks with Python."
      ],
      "courseBenefits": [
        "📌 Hands-on Training with Real-world Projects.",
        "📌 Industry-Recognized Certification.",
        "📌 Expert Mentorship & Career Guidance.",
        "📌 Flexible Learning Options (Online & Offline).",
        "📌 Access to Python Community & Coding Challenges.",
        "📌 Career Assistance & Resume Building.",
        "📌 Capstone Projects for Portfolio Development."
      ],
      "contactUs": [
        "📞 Contact Us:",
        "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
        "📧 Email: skillskadda@gmail.com",
        "📲 Call/WhatsApp: 91-78987-97660",
        "🌐 Website: www.skillskadda.in"
      ],
      "callToAction": "Join Skills Adda Today & Become a Python Expert!"
    },
    "duration": "2 Months",
    "image": pythonImg,
    "highlights": [
      "Master Python Programming",
      "Data Science & AI Applications",
      "Web Development with Django & Flask",
      "Automation & Scripting Techniques"
    ],
    "syllabus": "/syllabus/python.pdf"
  },

  "data-science": {
    title: "Data Science",
    description: {
      whyChoose: [
        "Why Choose Data Science?",
        "✔ High-demand field with lucrative career opportunities.",
        "✔ Essential for AI, Machine Learning, and Big Data roles.",
        "✔ Helps businesses make data-driven decisions.",
        "✔ Involves solving real-world problems with data.",
        "✔ Rapidly growing industry with continuous advancements.",
      ],
      whatYouWillLearn: {
        "Introduction to Data Science": [
          "✔ Understanding data types and sources.",
          "✔ Data collection, cleaning, and preprocessing.",
          "✔ Exploratory Data Analysis (EDA).",
          "✔ Understanding the role of a Data Scientist.",
          "✔ Case studies on data-driven decision-making.",
        ],
        "Python for Data Science": [
          "✔ Python basics and advanced programming concepts.",
          "✔ Working with Pandas for data manipulation and analysis.",
          "✔ NumPy for numerical computations and matrix operations.",
          "✔ Matplotlib and Seaborn for creating insightful visualizations.",
          "✔ Writing efficient Python scripts for automation.",
          "✔ Handling large datasets with optimized performance.",
        ],
        "Statistics & Probability for Data Science": [
          "✔ Descriptive and inferential statistics for data analysis.",
          "✔ Hypothesis testing and confidence intervals.",
          "✔ Probability distributions and statistical significance.",
          "✔ Bayesian statistics and decision-making under uncertainty.",
          "✔ A/B Testing for business and product optimization.",
        ],
        "Machine Learning": [
          "✔ Supervised vs. Unsupervised Learning.",
          "✔ Regression (Linear, Logistic) for predictive modeling.",
          "✔ Classification techniques (Decision Trees, SVM, Random Forest).",
          "✔ Clustering methods (K-Means, DBSCAN, Hierarchical Clustering).",
          "✔ Feature Engineering & Model Evaluation techniques.",
          "✔ Hyperparameter tuning and cross-validation.",
          "✔ Model deployment and monitoring strategies.",
        ],
        "Deep Learning & AI": [
          "✔ Introduction to Neural Networks and their architecture.",
          "✔ TensorFlow & Keras basics for deep learning models.",
          "✔ Building Convolutional Neural Networks (CNNs) for image processing.",
          "✔ Recurrent Neural Networks (RNNs) and their applications.",
          "✔ Natural Language Processing (NLP) fundamentals.",
          "✔ Deploying AI models using cloud services.",
        ],
        "Big Data & Cloud Computing": [
          "✔ Introduction to Big Data concepts and tools.",
          "✔ Working with Hadoop, Spark, and distributed computing.",
          "✔ Cloud computing platforms (AWS, Azure, GCP).",
          "✔ Data storage solutions and pipeline automation.",
          "✔ Real-world applications of Big Data analytics.",
        ],
        "SQL & Databases": [
          "✔ Querying relational databases with SQL.",
          "✔ Data extraction, transformation & loading (ETL) techniques.",
          "✔ Writing complex queries for business intelligence.",
          "✔ Database indexing and performance optimization.",
          "✔ Working with NoSQL databases like MongoDB.",
        ],
        "Data Science Project Lifecycle": [
          "✔ Identifying business problems and formulating hypotheses.",
          "✔ Collecting, cleaning, and transforming raw data.",
          "✔ Building and evaluating predictive models.",
          "✔ Interpreting results and making data-driven recommendations.",
          "✔ Deployment and monitoring of machine learning models.",
          "✔ End-to-end project workflow with industry case studies.",
        ],
      },
      whoShouldEnroll: [
        "✅ Students & Freshers interested in Data Science.",
        "✅ Professionals looking to transition into Data Science roles.",
        "✅ Entrepreneurs and Business Owners leveraging AI & data.",
        "✅ Analysts aiming to enhance their technical and analytical skills.",
      ],
      courseBenefits: [
        "📌 Hands-on Training with Real-world Projects.",
        "📌 Industry-Recognized Certification.",
        "📌 Expert Mentorship & Career Guidance.",
        "📌 Flexible Learning Options (Online & Offline).",
        "📌 Access to a community of data professionals.",
        "📌 Career Assistance & Resume Building.",
        "📌 Capstone projects for portfolio development.",
      ],
      contactUs: [
        "📞 Contact Us:",
        "📍 Location: 7, Ahinsa Tower, Indore (M.P.)",
        "📧 Email: skillskadda@gmail.com",
        "📲 Call/WhatsApp: 91-78987-97660",
        "🌐 Website: www.skillskadda.in",
      ],
      callToAction:
        "Join Skills Adda Today & Kickstart Your Data Science Journey!",
    },
    duration: "9 Months",
    image: dataScienceImg,
    highlights: [
      "Machine Learning & AI",
      "Big Data & Cloud Computing",
      "Python for Data Science",
      "SQL & Database Management",
    ],
    syllabus: "/syllabus/data-science.pdf",
  }


  

};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left font-medium flex justify-between items-center bg-accent/30 hover:bg-accent/50 transition-all duration-200"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-cyan-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-cyan-400" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: contentHeight }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
        style={{ height: contentHeight }}
      >
        <div ref={contentRef} className="p-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Course() {
  const { id } = useParams();
  const course = courseDetails[id] || {};
  const [isOpen, setIsOpen] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [showShare, setShowShare] = useState(false);

  // Share functionality
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: course.title,
          text: `Check out this amazing ${course.title} course!`,
          url: window.location.href,
        });
      } else {
        // Fallback
        setShowShare(!showShare);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
    setShowShare(false);
  };

  if (!course.title) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-6">
            Sorry, the course you're looking for doesn't exist.
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 backdrop-blur-sm mb-4 text-sm md:text-base"
              >
                {course.duration}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                {course.title}
              </h1>

              <div className="flex flex-wrap gap-2 mt-4">
                {course.highlights?.map((highlight, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="bg-black/40 backdrop-blur-sm text-white border-cyan-500/50"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Book Demo
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => window.open(course.syllabus, "_blank")}
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30"
                  >
                    <Download className="mr-2 h-4 w-4" /> Syllabus
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>

                  {showShare && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 p-2 bg-card rounded-md shadow-lg z-50 w-48"
                    >
                      <button
                        onClick={copyToClipboard}
                        className="w-full text-left px-3 py-2 hover:bg-accent/50 rounded-md text-sm"
                      >
                        Copy link
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Course Content Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 bg-background border overflow-x-auto flex-wrap justify-start w-full p-1">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-accent/50"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="data-[state=active]:bg-accent/50"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="enrollment"
                  className="data-[state=active]:bg-accent/50"
                >
                  Who Should Enroll
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="data-[state=active]:bg-accent/50"
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-accent/50"
                >
                  Contact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20"
                  >
                    {course.description?.whyChoose?.map((item, index) => (
                      <motion.p
                        key={index}
                        className={`${
                          index === 0
                            ? "text-xl font-semibold mb-4 text-cyan-400"
                            : "text-base text-muted-foreground mb-2"
                        }`}
                      >
                        {item}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="curriculum" className="pt-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {course.description?.whatYouWillLearn &&
                    Object.entries(course.description.whatYouWillLearn).map(
                      ([topic, points], index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <AccordionItem title={topic}>
                            <ul className="list-none pl-4 space-y-2">
                              {points.map((point, idx) => (
                                <motion.li
                                  key={idx}
                                  className="text-muted-foreground"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  {point}
                                </motion.li>
                              ))}
                            </ul>
                          </AccordionItem>
                        </motion.div>
                      )
                    )}
                </motion.div>
              </TabsContent>

              <TabsContent value="enrollment" className="pt-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                    Who Should Enroll?
                  </h2>
                  <ul className="space-y-3">
                    {course.description?.whoShouldEnroll?.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="text-green-500 mr-2">✓</span>{" "}
                        {item.replace("✅ ", "")}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="benefits" className="pt-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                    Course Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.description?.courseBenefits?.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-accent/20 p-4 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300"
                      >
                        <p className="text-muted-foreground">
                          {item.replace("📌 ", "")}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30"
                  >
                    <p className="text-lg font-semibold text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      {course.description?.callToAction}
                    </p>
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="contact" className="pt-2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                    Contact Us
                  </h2>
                  <div className="space-y-4">
                    {course.description?.contactUs
                      ?.slice(1)
                      .map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="flex items-start"
                        >
                          <span className="text-cyan-400 mr-2">
                            {item.split(" ")[0]}
                          </span>
                          <span className="text-muted-foreground">
                            {item.substring(item.indexOf(" ") + 1)}
                          </span>
                        </motion.div>
                      ))}
                  </div>

                  <motion.div variants={itemVariants} className="mt-6">
                    <Button
                      onClick={() => setIsOpen(true)}
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                    >
                      Book a Free Demo Session
                    </Button>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {isOpen && (
        <BookDemoDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          courseTitle={course.title}
        />
      )}

      {/* Image Viewer Modal */}
      {isImageEnlarged && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageEnlarged(false)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={course.image}
            alt={course.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
            onClick={() => setIsImageEnlarged(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
