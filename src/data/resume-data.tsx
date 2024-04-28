import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shafayeat Kabir",
  initials: "SKS",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about:
    "Full Stack Engineer, specializing in both frontend and backend realms of mobile app development",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with React Native, React, Python, Strapi, Node.js, and GraphQL. I have over 6 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/9054649?v=4",
  personalWebsiteUrl: "https://shafayeat.com",
  contact: {
    email: "sumithired@gmail.com",
    tel: "+8801673344545",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shafayeatsumit",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shafayeat/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ShafayeatSumit",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Daffodil International University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "HostiFi",
      link: "https://www.hostifi.com/",
      badges: ["Remote", "Contract"],
      title: "Mobile Application Developer",
      logo: ParabolLogo,
      start: "Dec, 2023",
      end: "Present",
      description:
        "Developed a React Native and Expo-based mobile app facilitating Ubiquiti Networking device discovery, enabling network engineers to remotely monitor and manage UniFi Network devices",
    },
    {
      company: "PayNest",
      link: "https://www.paynest.co/",
      badges: ["Remote", "Contract"],
      title: "Mobile Application Developer",
      logo: ClevertechLogo,
      start: "Aug, 2022",
      end: "Jun, 2023",
      description:
        "Developed and deployed Paynest's mobile app for both platforms IOS and Android using React-Native. Technologies: React Native, React, Expo, TypeScript, GraphQL",
    },
    {
      company: "3 Thoughts Healthier LLC",
      badges: ["Remote"],
      title: "Full-stack Developer",
      logo: JojoMobileLogo,
      start: "Mar, 2020",
      end: "Dec, 2021",
      description:
        "Crafted numerous mobile applications focusing on meditation, guided meditation, and breathing exercises, all centered around mental health, leveraging React Native and Strapi/Node.js for backend, complemented with native modules developed in Swift, Objective-C, and Java as a fullstack engineer.",
    },
    {
      company: "Vome Inc",
      link: "https://www.vomevolunteer.com/",
      badges: ["Remote", "Contract"],
      title: "Front-End Developer",
      logo: NSNLogo,
      start: "Nov, 2019",
      end: "Mar, 2020",
      description:
        "Led VOME's iOS & Android app creation in React Native, directed app development, made UX/UI/feature decisions, collaborated with backend devs, handled all aspects of development: UI, animations, architecture, networking, deployment, & beta testing.",
    },
    {
      company: "Skyligt",
      link: "https://www.skylightframe.com/",
      badges: ["Remote", "Freelance"],
      title: "Front-End Developer",
      logo: NSNLogo,
      start: "Apr, 2019",
      end: "Oct, 2019",
      description:
        "As a key contributor, I played a pivotal role in the development of the Skylight mobile app, particularly focusing on photo and video editing, propelling the early-stage startup to over 200,000 downloads on both the App Store and Play Store. Skylight has since evolved into a thriving consumer electronics company, boasting a 2021 revenue of $75 million.",
    },
    {
      company: "Finder LBS",
      link: "https://finder-lbs.com/",
      badges: ["Onsite"],
      title: "Full-stack Developer",
      logo: NSNLogo,
      start: "Apr, 2016",
      end: "Nov, 2018",
      description:
        "Maintained legacy code while helping with the transition process to new systems, including massive data migration. Assisted engineers across the company (primarily from Web/Python backgrounds) in implementing Mobile app features on a tight deadline.Drove architecture decisions such as using React Native for a mobile (iOS/Android) React/Redux web app, Python back end. Technologies: Python, MongoDB, React Native, React",
    },
  ],
  skills: [
    "React Native/React",
    "Python",
    "Swift",
    "Objective-C",
    "Java",
    "JavaScript",
    "TypeScript",
    "Strapi/Node.js",
    "GraphQL",
  ],
  projects: [
    {
      title: "HostiFi Device Discovery Tool",
      techStack: ["React Native", "Expo", "React Navigation"],
      description:
        "find any Ubiquiti devices on your local network, either in the UISP or UniFi family and then be able to adopt them to a UniFi controller by simply providing the inform URL.",
      logo: ConsultlyLogo,
      link: {
        label: "hostifi-discovery-tool.com",
        href: "https://www.hostifi.com/hostifi-device-discovery-tool",
      },
    },
    {
      title: "React Native Rich Vibration",
      techStack: [
        "Side Project",
        "Open Source",
        "NPM package",
        "React Native",
        "Swift",
        "Kotlin",
      ],
      description:
        "This React Native library provides an alternative to the standard vibrations API",
      logo: MonitoLogo,
      link: {
        label: "RN Rich Vibration",
        href: "https://github.com/openingbracket/react-native-rich-vibration",
      },
    },
    {
      title: "Paynest Mobile",
      techStack: ["React Native", "Redux", "App Center"],
      description:
        "Paynest Mobile app not only empowers employees by granting them early access to their wages but also facilitates connections with financial advisors, enriching their financial well-being.",
      logo: JarockiMeLogo,
      link: {
        label: "paynest",
        href: "https://www.paynest.co/",
      },
    },
    {
      title: "Skylight Mobile",
      techStack: ["React Native", "Expo", "Redux"],
      description:
        "Skylight App: Manage your Frame or Calendar with ease, featuring video playback, album organization, text captions, downloads, remote settings, and seamless Frame management.",
      logo: Minimal,
      link: {
        label: "Skylight App",
        href: "https://apps.apple.com/us/app/skylight-app/id1438779037",
      },
    },
    {
      title: "Vome",
      techStack: ["ReactJS", "React Native", "Redux", "Expo"],
      description:
        "The all-in-one volunteer management solution. Register for opportunities, reserve spots to shifts, complete challenges and so much more on the Vome app!",
      logo: BarepapersLogo,
      link: {
        label: "vomevolunteer.com",
        href: "https://www.vomevolunteer.com/",
      },
    },
    {
      title: "Wise Shopper",
      techStack: ["Open Source", "Python", "Scrapy", "Django"],
      description:
        "WiseShopper is an autonomous price comparison platform catering to Bangladesh, aiding users in discovering the optimal deals from the primary secondhand marketplaces in the country.",
      logo: YearProgressLogo,
      link: {
        label: "wiseshopper",
        href: "https://github.com/shafayeatsumit/wiseshopper",
      },
    },
    {
      title: "MultiSig Wallet",
      techStack: ["Open Source", "Web3", "React", "Solidity"],
      description:
        "A minimal clone of gnosis-safe with. The purpose of multisig wallets is to increase security by requiring multiple parties to agree on transactions before execution. Transactions can be executed only when confirmed by a predefined number of owners",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shafayeatsumit/rugged-multisig",
      },
    },
    {
      title: "Momenta",
      techStack: ["Open Source", "React Native", "Objective-C", "Java"],
      description:
        "Momenta is a mobile application designed to provide users with a tranquil and serene space to unwind, relax, and practice mindfulness meditation",
      logo: EvercastLogo,
      link: {
        label: "Momenta",
        href: "https://github.com/shafayeatsumit/Momenta",
      },
    },
    {
      title: "The Fit League",
      techStack: ["Open Source", "React Native", "Redux"],
      description:
        "TFL applies the format of fantasy sports to personal exercise. Form a league with your friends and compete over a 10-week season.",
      logo: MobileVikingsLogo,
      link: {
        label: "The Fit League",
        href: "https://github.com/shafayeatsumit/The-Fit-League-App",
      },
    },
  ],
} as const;
