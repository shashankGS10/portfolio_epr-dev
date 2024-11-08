import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
import { Connection } from './types'

export const clients = [...new Array(10)].map((_, index) => ({
  href: `/${index + 1}.png`,
}));

export const techStackImages = [
    {
      src: "/images/partners/nodejs-dark.png",
      height: 65,
      width: 55,
      alt: "Node.js",
    },
    {
      src: "/images/partners/react-logo.png",
      height: 55,
      width: 110,
      alt: "React.js",
    },
    {
      src: "/images/partners/native-logo.png",
      height: 45,
      width: 45,
      alt: "React Native",
    },
    {
      src: "/images/partners/typescript-logo.png",
      height: 55,
      width: 55,
      alt: "TypeScript",
    },
    {
      src: "/images/partners/js-logo.png",
      height: 55,
      width: 55,
      alt: "JavaScript",
    },
    {
      src: "/images/partners/babel-logo.png", // Updated path
      height: 55,
      width: 110,
      alt: "Babel",
    },
    {
      src: "/images/partners/redux-react-logo.png",
      height: 45,
      width: 45,
      alt: "Redux",
    },
    {
      src: "/images/partners/three-js-logo.png",
      height: 55,
      width: 60,
      alt: "Three.js",
    },
    {
      src: "/images/partners/vue-logo.png",
      height: 40,
      width: 45,
      alt: "Vue.js",
    },
    {
      src: "/images/partners/figma-logo.png",
      height: 45,
      width: 45,
      alt: "Figma",
    },
    {
      src: "/images/partners/npm-logo.png",
      height: 30,
      width: 55,
      alt: "NPM",
    },
    {
      src: "/images/partners/webpack-logo.png",
      height: 65,
      width: 65,
      alt: "Webpack",
    },
    {
      src: "/images/partners/html5-logo.png",
      height: 45,
      width: 45,
      alt: "HTML5",
    },
    {
      src: "/images/partners/d3-logo.png",
      height: 40,
      width: 45,
      alt: "D3.js",
    },
];



export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]

export const projectData = [
  {
    title: "Eduvar Software - PropertyFunda",
    location: "Bengaluru, IN",
    role: "Tech Co-Founder | May 2024 – Present",
    achievements: [
      "Built, deployed, and maintained a full-stack PWA using Next.js, Node.js, Express.js, and MongoDB.",
      "Beta Testing and Market Research in Chhattisgarh",
      "Conducted Ground Research and Rolled Out Targeted Advertisements"
    ],
    url: "https:/images///propertyfunda.in",
    screenshot: "/propertyfunda-bg.png"
  },
  {
    title: "Eduvar Software - KamPao.in",
    location: "Bengaluru, IN",
    role: "Tech Co-Founder | Feb 2023 – Present",
    achievements: [
      "Developed and deployed a full-stack application using React Native, Next.js, Node.js, Express.js, and MongoDB.",
      "Part of Lab32 Cohort by T-Hub Hyderabad and LaunchPad by NSRCEL IIM Bengaluru",
      "Released App in 9 Languages on Google Play Store, Gaining 7,500 Users in 3 Months and 15,000 Active Users Currently"
    ],
    url: "https://kampao.in",
    screenshot: "/kampao-bg.png"
  },
  {
    title: "ACS Gaming",
    location: "CA, USA",
    role: "Mobile Application Developer | May 2022 – April 2023",
    achievements: [
      "Maintained and deployed hybrid applications using React Native, ensuring 100% compliance with iOS app distribution protocols.",
      "Achieved a 20% Increase in VIP Play and Engagement Metrics",
      "Streamlined Client Retention and Engagement Strategies for Casino Clients like Casino Del Sol",
      "Ensured Consistency through Manual Testing Across Multiple Devices"
    ],
    url: "https://acsgaming.com",
    screenshot: "/acsgaming-bg.png"
  },
  {
    title: "Kuvera.in [Acquired By Cred]",
    location: "Bengaluru, IN",
    role: "SDE 2 | Sept 2021 – April 2022",
    achievements: [
      "Led a team of 5 developers to re-design interface to deploy collaborative product, Amazon Wealth.",
      "Integrated and tested applications with third-party collaborators like Housing.com and Amazon.",
      "Estimated 10-15% increase in user satisfaction and retention due to interface redesign and process streamlining."
    ],
    url: "https://kuvera.in",
    screenshot: "/kuvera-bg.png"
  }
];

export const products = [
  {
    title: 'Kampao.in',
    link: 'https://kampao.in',
    thumbnail: '/kampao_thumbnail.png', // You can replace with actual image path
  },
  {
    title: 'PropertyFunda.in',
    link: 'https://propertyfunda.in',
    thumbnail: '/propertyfunda-thumbnail.png', // You can replace with actual image path
  },
  {
    title: 'IIM Bangalore Launchpad',
    link: 'https://www.linkedin.com/posts/suryansh-p-416a88235_indianstartups-nsrcel-launchpad-activity-7158382723319975936-bStK?utm_source=share&utm_medium=member_desktop',
    thumbnail: '/iim-bangalore-thumbnail.png', // You can replace with actual image path
  },
  {
    title: 'T-Hub Hyderabad Lab32',
    link: 'https://programs.t-hub.co/lab-32-directory/',
    thumbnail: '/thub-thumbnail.png', // You can replace with actual image path
  },
  {
    title: 'Kampao.in Ad',
    link: 'https://www.youtube.com/watch?v=CZFJmiYIMPE', // Replace with your actual LinkedIn profile
    thumbnail: '/yt-thmb.png', // You can replace with actual image path
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shashank-g-sai/',
    thumbnail: '/linkedin_thumbnail.png', // You can replace with actual image path
  },
  {
    title: 'Kampao.in',
    link: 'https://www.youtube.com/watch?v=CZFJmiYIMPE', // Replace with your actual LinkedIn profile
    thumbnail: '/labour_mart.png', // You can replace with actual image path
  },
];

// export const EditorCanvasDefaultCardTypes = {
//   Email: { description: 'Send and email to a user', type: 'Action' },
//   Condition: {
//     description: 'Boolean operator that creates different conditions lanes.',
//     type: 'Action',
//   },
//   AI: {
//     description:
//       'Use the power of AI to summarize, respond, create and much more.',
//     type: 'Action',
//   },
//   Slack: { description: 'Send a notification to slack', type: 'Action' },
//   'Google Drive': {
//     description:
//       'Connect with Google drive to trigger actions or to create files and folders.',
//     type: 'Trigger',
//   },
//   Notion: { description: 'Create entries directly in notion.', type: 'Action' },
//   'Custom Webhook': {
//     description:
//       'Connect any app that has an API key and send data to your applicaiton.',
//     type: 'Action',
//   },
//   Discord: {
//     description: 'Post messages to your discord server',
//     type: 'Action',
//   },
//   'Google Calendar': {
//     description: 'Create a calendar invite.',
//     type: 'Action',
//   },
//   Trigger: {
//     description: 'An event that starts the workflow.',
//     type: 'Trigger',
//   },
//   Action: {
//     description: 'An event that happens after the workflow begins',
//     type: 'Action',
//   },
//   Wait: {
//     description: 'Delay the next action step by using the wait timer.',
//     type: 'Action',
//   },
// }

// export const CONNECTIONS: Connection[] = [
//   {
//     title: 'Google Drive',
//     description: 'Connect your google drive to listen to folder changes',
//     image: '/googleDrive.png',
//     connectionKey: 'googleNode',
//     alwaysTrue: true,
//   },
//   {
//     title: 'Discord',
//     description: 'Connect your discord to send notification and messages',
//     image: '/discord.png',
//     connectionKey: 'discordNode',
//     accessTokenKey: 'webhookURL',
//   },
//   {
//     title: 'Notion',
//     description: 'Create entries in your notion dashboard and automate tasks.',
//     image: '/notion.png',
//     connectionKey: 'notionNode',
//     accessTokenKey: 'accessToken',
//   },
//   {
//     title: 'Slack',
//     description:
//       'Use slack to send notifications to team members through your own custom bot.',
//     image: '/slack.png',
//     connectionKey: 'slackNode',
//     accessTokenKey: 'slackAccessToken',
//     slackSpecial: true,
//   },
// ]
