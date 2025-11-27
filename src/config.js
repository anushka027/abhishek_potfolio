// Portfolio Configuration File
// Update this file to modify content, links, and other settings

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Abhishek Singh",
    title: "Consultant",
    company: "Deloitte",
    specialty: "CRM & MS Dynamics 365",
    tagline: "Let's Debug the Future Together 🐛",
    profileImage: "/images/profile.jpeg", // Add your profile image here
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/abhishek-singh-2128b919a/",
    github: "https://github.com",
    email: "official.abhishek.singh22@gmail.com",
    phone: "+918126533346",
  },

  // Resume
  resume: {
    fileName: "resume.pdf", // Place your resume.pdf in /public folder
    path: "/resume.pdf",
  },

  // About Page Content
  about: {
    intro: [
      "Hi I'm Abhishek Singh",
      "Professionally a Software Engineer..",
      "Educationally a Mechanical one..",
      "Emotionally? Just vibing with tech.. 😊",
    ],
    certifications: [
      {
        name: "Microsoft Power Automate Essential Training",
        icon: "/images/powerautomate-icon.png", // Add icon in /public/images/
        pdfPath: "/certificates/powerautomate.jpeg", // Certificate in JPEG format
      },
      {
        name: "Git Essential Training: The Basics",
        icon: "/images/git-icon.png",
        pdfPath: "/certificates/git-basics.png",
      },
      {
        name: "Learning Jenkins",
        icon: "/images/jenkins-icon.png",
        pdfPath: "/certificates/jenkins.png",
      },
      {
        name: "DevOps Foundations: Containers",
        icon: "/images/devops-icon.png", 
        pdfPath: "/certificates/devops-containers.png",
      },
      {
        name: "DevOps Foundations: Continuous Delivery/Continuous Integration",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-ci-cd.png",
      },
      {
        name: "DevOps Foundations: Infrastructure as Code",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-iac.png",
      },
      {
        name: "DevOps Foundations: Lean and Agile",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-lean-agile.png",
      },
      {
        name: "DevOps Foundations: Microservices",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-microservices.png",
      },
      {
        name: "DevOps Foundations: Monitoring and Observability",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-monitoring.png",
      },
      {
        name: "DevOps Foundations: Site Reliability Engineering",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-sre.png",
      },
      {
        name: "DevOps Foundations: Transforming the Enterprise",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-transforming.png",
      },
      {
        name: "Succeeding in DevOps",
        icon: "/images/devops-icon.png",
        pdfPath: "/certificates/devops-success.png",
      },
    ],
    education: [
      {
        degree: "Bachelor of Technology - BTech",
        institution: "MORADABAD INSTITUTE OF TECHNOLOGY",
        location: "Moradabad, Uttar Pradesh",
        year: "2018-2022",
      },
      {
        degree: "CISCE",
        institution: "SPRINGFIELDS COLLEGE",
        location: "Moradabad, Uttar Pradesh",
        year: "",
      },
    ],
  },

  // Work Experience Timeline
  experience: [
    {
      position: "Consultant",
      company: "Deloitte",
      location: "Gurugram, Haryana, India",
      type: "Hybrid",
      period: "",
      status: "Present",
      logo: "/images/deloitte-logo.jpeg", // Add company logos
    },
    {
      position: "Engineer << Ass. Engineer << Trainee",
      company: "Nagarro",
      location: "Gurugram, Haryana, India",
      type: "Remote",
      period: "Mar 2022 - May 2022",
      status: "",
      logo: "/images/nagarro-logo.jpeg",
    },
    {
      position: "Front-end Intern",
      company: "Jamsfy",
      location: "Mumbai, Maharashtra, India",
      type: "Remote",
      period: "Apr 2022 - Jun 2021",
      status: "",
      logo: "/images/jamsfy-logo.jpeg",
    },
    {
      position: "Human Resources Intern",
      company: "MyCaptain",
      location: "Remote",
      type: "Remote",
      period: "Apr 2021 - Jun 2021",
      status: "",
      logo: "/images/mycaptain-logo.jpeg",
    },
  ],

  // Skills
  skills: [
    "Customer Requirement Management",
    "MS Dynamics",
    "Docker Products",
    "Continuous Integration & Orchestration",
    "jQuery",
    "React.js",
  ],

  // Theme Colors
  colors: {
    primary: "#77913F", // Green color from design
    background: "#000000",
    text: "#FFFFFF",
  },
};