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
  location: "Khairpur, Sindh, Pakistan",

  /* Combined headline shown in the hero + used as the resume summary */
  hero: {
    headline: "Websites and Games That Help You <em>Stand Out.</em>",
  },
  tagline:
    "I build modern, mobile-friendly websites for small businesses and polished Unity games for mobile and PC — helping you showcase what you do, build trust, and make it easy for people to get in touch.",

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
      headline: "Websites That Help Your Business Stand Out.",
      description:
        "I build modern, mobile-friendly websites for small businesses that want to showcase their services, build trust, and make it easier for customers to get in touch.",
    },
    {
      title: "Game Development",
      headline: "Games That Players Remember and Come Back To.",
      description:
        "I build polished 2D and 3D Unity games for mobile and PC, with smooth controls, engaging gameplay, and solid performance, for people who want to turn a game idea into something players can actually enjoy.",
    },
  ],

  /* ----------------------------------------------------------------------
     SKILLS — add a new entry here and it flows into the site + resume.
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
     PROJECTS — "live" is optional; projects with a live link show a
     "Live site" button next to the repo link. Order here = order on page.
     ---------------------------------------------------------------------- */
  projects: [
    {
      name: "Mind Care",
      category: "Website",
      platform: "Web",
      description: "A mental-health-focused website designed to make support and resources easier to reach.",
      live: "https://mindcareproject.netlify.app/",
      repo: "https://github.com/SuhailSeelro/Mind-Care",
    },
    {
      name: "ChatBot — Suhail Ahmed",
      category: "Web App · AI",
      platform: "Web",
      description: "A browser-based conversational chatbot built to handle natural back-and-forth interaction.",
      live: "https://chatbot-suhailahmed.netlify.app/",
      repo: "https://github.com/SuhailSeelro/ChatBot-SuhailAhmed",
    },
    {
      name: "Heart Disease Prediction",
      category: "Web App · ML",
      platform: "Web",
      description: "A web application that estimates heart disease risk from patient data using a trained prediction model.",
      repo: "https://github.com/SuhailSeelro/Heart-Disease-Prediction-Web",
    },
    {
      name: "CMS Project",
      category: "Web App",
      platform: "PHP / XAMPP",
      description: "A content management system built on PHP and MySQL via XAMPP, handling structured content creation and administration.",
      repo: "https://github.com/SuhailSeelro/CMS-Project-Xampp",
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
    {
      name: "DSA in Java",
      category: "Data Structures",
      platform: "Java",
      description: "A structured collection of core data structure and algorithm implementations in Java — built while sharpening problem-solving fundamentals.",
      repo: "https://github.com/SuhailSeelro/DSA-in-JAVA",
    },
  ],

  /* ----------------------------------------------------------------------
     CERTIFICATES — type is "specialization" (multi-course badge) or
     "course". "file" maps to /assets/certificates/ (png thumb + pdf/).
     ---------------------------------------------------------------------- */
  certificates: [
    {
      type: "specialization",
      title: "Google Prompting Essentials",
      issuer: "Google · Coursera · 4-course specialization",
      date: "Nov 27, 2025",
      file: "Google-Prompting-Essentials",
      verify: "https://coursera.org/verify/specialization/G91PRIWCTKOZ",
    },
    {
      type: "specialization",
      title: "Google Agile Essentials",
      issuer: "Google · Coursera · 3-course specialization",
      date: "Aug 31, 2026",
      file: "Google-Agile-Essentials",
      verify: "https://coursera.org/verify/specialization/C7J8XEKUD813",
    },
    {
      type: "course",
      title: "Foundations of Agile Project Management",
      issuer: "Google · Coursera",
      date: "Aug 31, 2026",
      file: "Foundations-of-Agile-Project-Management",
      verify: "https://coursera.org/verify/ATPB5FB1M4AW",
    },
    {
      type: "course",
      title: "Implement the Scrum Framework",
      issuer: "Google · Coursera",
      date: "Aug 31, 2026",
      file: "Implement-the-Scrum-Framework",
      verify: "https://coursera.org/verify/SDLR4WAJ9RA7",
    },
    {
      type: "course",
      title: "Organize Projects and Measure Productivity with Scrum",
      issuer: "Google · Coursera",
      date: "Aug 31, 2026",
      file: "Organize-Projects-and-Measure-Productivity-with-Scrum",
      verify: "https://coursera.org/verify/ARCM6WB1BI4L",
    },
    {
      type: "course",
      title: "Start Writing Prompts like a Pro",
      issuer: "Google · Coursera",
      date: "Nov 27, 2025",
      file: "Start-Writing-Prompts-like-a-Pro",
      verify: "https://coursera.org/verify/C4ADYHHES529",
    },
    {
      type: "course",
      title: "Design Prompts for Everyday Work Tasks",
      issuer: "Google · Coursera",
      date: "Nov 27, 2025",
      file: "Design-Prompts-for-Everyday-Work-Tasks",
      verify: "https://coursera.org/verify/WKFBPAWH7E59",
    },
    {
      type: "course",
      title: "Speed Up Data Analysis and Presentation Building",
      issuer: "Google · Coursera",
      date: "Nov 27, 2025",
      file: "Speed-Up-Data-Analysis-and-Presentation-Building",
      verify: "https://coursera.org/verify/FYR7EE3IYOKN",
    },
    {
      type: "course",
      title: "Use AI as a Creative or Expert Partner",
      issuer: "Google · Coursera",
      date: "Nov 27, 2025",
      file: "Use-AI-as-a-Creative-or-Expert-Partner",
      verify: "https://coursera.org/verify/02VF39NQ48FZ",
    },
    {
      type: "course",
      title: "Accelerate Your Job Search with AI",
      issuer: "Google · Coursera",
      date: "Nov 26, 2025",
      file: "Accelerate-Your-Job-Search-with-AI",
      verify: "https://coursera.org/verify/C8CTFRK5X9QS",
    },
  ],
};

if (typeof module !== "undefined") module.exports = SITE_DATA;
