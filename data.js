/* =========================================================================
   SITE DATA — single source of truth
   -------------------------------------------------------------------------
   Both index.html (the portfolio) and resume.html (the resume) read from
   this one file. To add a new skill, project, or certificate, edit the
   matching array below and save — it will appear on the site AND the
   resume automatically, with no other file to touch.
   ========================================================================= */

const SITE_DATA = {
  name: "Suhail Ahmed",
  role: "Web & Game Developer",
  tagline: "Building interactive worlds for the browser and the build target — from responsive web apps to Unity games on mobile and PC.",
  location: "Khairpur, Sindh, Pakistan",

  contact: {
    phone: "+92 329 3805820",
    whatsapp: "+92 316 3700131",
    emailPersonal: "binmoosaseelro@gmail.com",
    emailEducation: "suhailahmed.bscssef23khp@iba-suk.edu.pk",
    linkedin: "https://www.linkedin.com/in/suhail-ahmed-9b4a07311",
    github: "https://github.com/SuhailSeelro",
  },

  education: [
    {
      degree: "BS Computer Science",
      school: "Sukkur IBA University",
      note: "Final-year student",
      years: "2023 — 2027 (Expected)",
    },
  ],

  expertise: [
    {
      title: "Web Development",
      description: "Full-stack web apps — from database-backed CMS platforms to ML-powered prediction tools and AI chat interfaces.",
    },
    {
      title: "Game Development",
      description: "Unity 2D & 3D games and apps shipped for mobile and PC, from endless runners to first-person shooters.",
    },
  ],

  /* ----------------------------------------------------------------------
     SKILLS — add a new entry here and it flows into the site + resume.
     "level" is a short word, not a number, so it stays honest as you grow.
     ---------------------------------------------------------------------- */
  skillGroups: [
    {
      group: "Languages",
      skills: ["Java", "C#", "PHP", "JavaScript", "HTML5 & CSS3", "SQL"],
    },
    {
      group: "Game Development",
      skills: ["Unity 2D", "Unity 3D", "Mobile Game Builds", "PC Game Builds", "Game Physics & Mechanics"],
    },
    {
      group: "Web Development",
      skills: ["MySQL / XAMPP", "REST-style Integrations", "Responsive UI", "ML-backed Web Apps"],
    },
    {
      group: "Tools & Practice",
      skills: ["Git & GitHub", "Agile / Scrum", "Data Structures & Algorithms", "AI-assisted Prompting"],
    },
  ],

  /* ----------------------------------------------------------------------
     PROJECTS
     ---------------------------------------------------------------------- */
  projects: [
    {
      name: "DSA in Java",
      category: "Data Structures",
      platform: "Java",
      description: "A structured collection of core data structure and algorithm implementations in Java — built while sharpening problem-solving fundamentals.",
      repo: "https://github.com/SuhailSeelro/DSA-in-JAVA",
    },
    {
      name: "CMS Project",
      category: "Web App",
      platform: "PHP / XAMPP",
      description: "A content management system built on PHP and MySQL via XAMPP, handling structured content creation and administration.",
      repo: "https://github.com/SuhailSeelro/CMS-Project-Xampp",
    },
    {
      name: "Mind Care",
      category: "Website",
      platform: "Web",
      description: "A mental-health-focused website designed to make support and resources easier to reach.",
      repo: "https://github.com/SuhailSeelro/Mind-Care",
    },
    {
      name: "Heart Disease Prediction",
      category: "Web App · ML",
      platform: "Web",
      description: "A web application that estimates heart disease risk from patient data using a trained prediction model.",
      repo: "https://github.com/SuhailSeelro/Heart-Disease-Prediction-Web",
    },
    {
      name: "ChatBot — Suhail Ahmed",
      category: "Web App · AI",
      platform: "Web",
      description: "A browser-based conversational chatbot built to handle natural back-and-forth interaction.",
      repo: "https://github.com/SuhailSeelro/ChatBot-SuhailAhmed",
    },
    {
      name: "Zombie Shooter",
      category: "Game",
      platform: "Unity 3D · Mobile",
      description: "A 3D first-person zombie shooter built in Unity and optimized for mobile hardware and touch controls.",
      repo: "https://github.com/SuhailSeelro/Zombie-Shooter-Game-Mobile",
    },
    {
      name: "Endless Dino Runner",
      category: "Game",
      platform: "Unity 2D · PC",
      description: "An endless-runner built in Unity 2D, featuring procedural obstacles and an escalating difficulty curve.",
      repo: "https://github.com/SuhailSeelro/Endless_Dino_Runner_Game",
    },
    {
      name: "CodeAlpha Unit Converter",
      category: "Mobile App",
      platform: "Unity 2D · Mobile",
      description: "A Unity-built 2D mobile utility app for converting between common units, developed during the CodeAlpha internship track.",
      repo: "https://github.com/SuhailSeelro/CodeAlpha_UnitConverter",
    },
  ],

  /* ----------------------------------------------------------------------
     CERTIFICATES — filenames map to /assets/certificates/
     ---------------------------------------------------------------------- */
  certificates: [
    {
      title: "Organize Projects and Measure Productivity with Scrum",
      issuer: "Google · Coursera",
      file: "Organize-Projects-and-Measure-Productivity-with-Scrum",
    },
    {
      title: "Foundations of Agile Project Management",
      issuer: "Google · Coursera",
      file: "Foundations-of-Agile-Project-Management",
    },
    {
      title: "Implement the Scrum Framework",
      issuer: "Google · Coursera",
      file: "Implement-the-Scrum-Framework",
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Google · Coursera · 4-course specialization",
      file: "Google-Prompting-Essentials",
    },
    {
      title: "Accelerate Your Job Search with AI",
      issuer: "Google · Coursera",
      file: "Accelerate-Your-Job-Search-with-AI",
    },
  ],
};

if (typeof module !== "undefined") module.exports = SITE_DATA;
