import GILogo from "@/public/GILogo.png";
import austLogo from "@/public/austlogo.png";
import pioneerLogo from "@/public/pioneerlogo.png";
import btriLogo from "@/public/btrilogo.png";
import collegeLogo from "@/public/clglogo.png";
import seuLogo from "@/public/seulogo.png";
import TLlogo from "@/public/TLlogo.png";

import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
  faOrcid,
  faResearchgate,
  faStackOverflow,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGraduationCap,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Publications", href: "/publications" },
  { name: "Honours & Awards", href: "/honours-and-awards" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "/cv" },
];

export const connectItems = [
  { name: "Dhaka, Bangladesh", link: "#", icon: faLocationArrow },
  { name: "Email", link: "mailto:ahmedsaadtanim@gmail.com", icon: faEnvelope },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=gvUoRlkAAAAJ&hl=en&authuser=2",
    icon: faGoogleScholar,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-saad-tanim-b15991212/",
    icon: faLinkedin,
  },
  {
    name: "Github",
    link: "https://github.com/AhmedSaadTanim",
    icon: faGithub,
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/Astreal/",
    icon: faSteam,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@projectalpha8849",
    icon: faYoutube,
  },
];

export const experienceItems = [
  {
    position: "Software Engineer",
    department: "",
    organization: "TorpedoLabs, INC",
    organizationSite: "https://www.torpedolabs.com",
    duration: "Duration: October 2023 - Present",
    organizationLogo: TLlogo,
  },
  {
    position: "Junior Game Developer",
    department: "",
    organization: "Ghost Interactive",
    organizationSite: "https://www.ghost.com.bd",
    duration: "Duration: September 2023 - October 2023",
    organizationLogo: GILogo,
  },
];

export const educationItems = [
  {
    institution: "Ahsanullah University of Science and Technology",
    institutionLink: "https://aust.edu/",
    institutionLogo: austLogo,
    degree: "Bachelor of Science (B.Sc.)",
    major: "Computer Science and Engineering",
    duration: "Duration: 2019 - 2023",
    result: (
      <>
        CGPA: <span className="font-semibold">3.955/4.00</span> scale (Ranked
        <span className="font-semibold">
          1<sup>st</sup>
        </span>
        )
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/1-5id8matVUouxL5vrx_ar3I2wyuOSW9r/view",
    transcript:
      "https://drive.google.com/file/d/1E6IHb3rssSN7ksa149CcDeJ7-3aljYKP/view",
  },
  {
    institution: "St. Joseph Higher Secondary School and College",
    institutionLink: "https://sjs.edu.bd/new/index.php",
    institutionLogo: collegeLogo,
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    duration: "Duration: 2016 - 2018",
    result: (
      <>
        GPA: <span className="font-semibold">5.00/5.00</span> scale
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/13ivCbEkj-qEh7D3R7KvtB4OFymGlUavo/view",
    transcript: null,
  },
  {
    institution: "St. Joseph Higher Secondary School and College",
    institutionLogo: collegeLogo,
    institutionLink: "https://sjs.edu.bd/new/index.php",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    duration: "Duration: 2014 - 2016",
    result: (
      <>
        GPA: <span className="font-semibold">5.00/5.00</span> scale
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/1jlC3WAcSR6V90d7DU3MbzrFdwhavncCG/view",
    transcript: null,
  },
];

export const honours = [
  {
    title: (
      <>
        <span style={{ color: "#1FAB89", fontWeight: 600 }}>
         1st place in Dean’s List of Honor
        </span>
        , Ahsanullah University of Science and Technology, 2023
      </>
    ),
    certificate: null,
  },
  {
    title:
      "Tuition Fee Waiver for every Semester in the duration of the whole degree, Ahsanullah University of Science and Technology",
    certificate: null,
  },
  {
    title:
      "Most Spiritual team in Intra AUST Programming Contest at CODEWARE19, Ahsanullah University of Science and Technology",
    certificate: null,
  },
];

export const courseCompletedItems = [
  {
    title: "Unity Junior Programmer, Unity",
    certificate:
      "https://www.credly.com/badges/585375cf-030e-4b04-ab64-db02e1f49cb7?source=linked_in_profile",
  },
  {
    title:
      "Unity Essentials, Unity",
    certificate:
      "https://www.credly.com/badges/be58e1f3-d1f3-477b-96aa-ca570fe77e2f?source=linked_in_profile",
  },
  {
    title:
      "Responsive Web Design, freeCodeCamp",
    certificate:
      "https://www.freecodecamp.org/certification/ahmedsaadtanim/responsive-web-design",
  },
];

export const projectItems = [
  {
    title: "Hybrid RL & IL for Autonomous Driving in Simulation",
    description: "Evaluation of RL, imitation learning, and hybrid strategies for autonomous driving in Unity-based simulation environments.",
    gitLink: "https://github.com/AhmedSaadTanim/hybrid-rl-il-autonomous-driving",
    demoLink: "N/A",
    embedLink: "N/A",
  },
  {
    title: "Main Memory",
    description: "A text based interactive game where game AI adapts to player responses and actions",
    gitLink: "https://github.com/TeamAugmentors/Main-Memory",
    demoLink: "N/A",
    embedLink: "N/A",
  },
  {
    title: "JobSeeker Web",
    description: "A medium between freelancers and hirers in Bangladesh",
    gitLink: "https://github.com/TeamAugmentors/JobseekerWeb",
    demoLink: "https://www.youtube.com/watch?v=PN0mgFHmdnI",
    embedLink: "https://www.youtube.com/embed/PN0mgFHmdnI?si=itXYISlAwiO6GX6d",
  },
  {
    title: "JobSeeker",
    description:
      "A user friendly and easy to use android app for freelancing where people can post their requirements and freelancers can accept the job they are interested in",
    gitLink: "https://github.com/TeamAugmentors/JobSeeker",
    demoLink: "https://www.youtube.com/watch?v=YYKiquIiLZ4",
    embedLink: "https://www.youtube.com/embed/YYKiquIiLZ4?si=X6VX2raWQBma3yni",
  },
  {
    title: "Vaccine Distribution System",
    description:
      "A database management system for managing Covid-19 vaccines and tracking",
    gitLink: "https://github.com/TeamAugmentors/VaccineDistributionSystem",
    demoLink: "https://www.youtube.com/watch?v=3LjfySrpGjM",
    embedLink: "https://www.youtube.com/embed/3LjfySrpGjM?si=O5H9q9MQW03xsAI8",
  },
  {
    title: "Alice",
    description:
      "A fun to use Java application consisting of Tic Tac Toe, Hangman and Snake games",
    gitLink: "https://github.com/TeamAugmentors/SD-Project",
    demoLink: "https://www.youtube.com/watch?v=HxwJTcHEUoY",
    embedLink: "https://www.youtube.com/embed/HxwJTcHEUoY?si=kxjO4e8oXJ152wIC",
  },
  {
    title: "Arrival",
    description:
      "Arrival is a survival game taking place in the space. It is an infinite scrolling game continuously defending two objects, the player’s spacecraft and the earth",
    gitLink: "https://github.com/TeamAugmentors/Arrival.git",
    demoLink: "https://www.youtube.com/watch?v=hKz_J2qHpe4",
    embedLink: "https://www.youtube.com/embed/hKz_J2qHpe4?si=u5IWprMg_SKiRIDA",
  },
];

export const publicationItems = [
  {
    year: 2023,
    publications: [
      {
        paperTitle:
          "Evaluating the Reliability of CNN Models on Classifying Traffic and Road Signs using LIME.",
        authors:
          "Md. Atiqur Rahman, Ahmed Saad Tanim, Sanjid Islam, F. P.; and G.M. Shahariar, M. T. R. S.",
        conference: "arXiv preprint arXiv:2309.05747",
        extra: "2023",
        paperLink: "https://arxiv.org/abs/2309.05747",
        abstract:
          "The objective of this investigation is to evaluate and contrast the effectiveness of four state-of-the-art pre-trained models, ResNet-34, VGG-19, DenseNet-121, and Inception V3, in classifying traffic and road signs with the utilization of the GTSRB public dataset. The study focuses on evaluating the accuracy of these models' predictions as well as their ability to employ appropriate features for image categorization. To gain insights into the strengths and limitations of the model's predictions, the study employs the local interpretable model-agnostic explanations (LIME) framework. The findings of this experiment indicate that LIME is a crucial tool for improving the interpretability and dependability of machine learning models for image identification, regardless of the models achieving an f1 score of 0.99 on classifying traffic and road signs. The conclusion of this study has important ramifications for how these models are used in practice, as it is crucial to ensure that model predictions are founded on the pertinent image features.",
      },
    ],
  },
];

export const languageCertifications = [
  {
    title: "International English Language Testing System Academic (IELTS Academic)",
    certificate:
      "https://drive.google.com/file/d/1V6BYoZk_nbSpUS1IdQymgeS294cYDAgg/view?usp=sharing",
  },
];
