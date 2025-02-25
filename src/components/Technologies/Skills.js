import { DiJavascript1, DiTerminal, DiReact, DiHtml5, DiPostgresql, DiAsterisk, DiPhp, DiLinux, DiNginx, DiGoogleCloudPlatform, DiDocker, DiRedis, DiSwift } from "react-icons/di";
import { SiAngularjs, SiNextdotjs, SiGit, SiVuedotjs, SiCss3, SiMysql, SiAmazonaws, SiWebrtc, SiSocketdotio, SiNodedotjs, SiPrisma, SiTrpc, SiTypescript, SiQuasar, SiVuetify, SiTailwindcss } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  // Frontend Skills
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>Write scalable and interactive web applications</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>More scalable and secure code with advanced typing capabilities</>,
  },
  {
    slug: "swift",
    Component: DiSwift,
    title: "Swift",
    Description: () => <>Build native iOS and macOS applications</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Build efficient and reusable user interfaces</>,
  },
  {
    slug: "react-native",
    Component: DiReact,
    title: "React Native",
    Description: () => <>Build cross-platform mobile applications</>,
  },
  {
    slug: "angularjs",
    Component: SiAngularjs,
    title: "AngularJS",
    Description: () => <>Create (SPAs) using JavaScript</>,
  },
  {
    slug: "vue.js",
    Component: SiVuedotjs,
    title: "Vue.js",
    Description: () => <>Build interactive and user-friendly web interfaces</>,
  },
  {
    slug: "vuetify",
    Component: SiVuetify,
    title: "Vuetify",
    Description: () => <>Styling of my Vue2 webpages</>,
  },
  {
    slug: "quasar",
    Component: SiQuasar,
    title: "Quasar",
    Description: () => <>Styling of my Vue3 webpages</>,
  },
  {
    slug: "tailwindcss",
    Component: SiTailwindcss,
    title: "Tailwind CSS",
    Description: () => <>Styling of my React webpages</>,
  },
  {
    slug: "next.js",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => <>Building server-side rendered and statically generated applications</>,
  },

  // Backend Skills
  {
    slug: "node.js",
    Component: SiNodedotjs,
    title: "Node.js",
    Description: () => <>Build server-side applications with event-driven and non-blocking I/O model</>,
  },
  {
    slug: "nest.js",
    Component: SiNodedotjs,
    title: "NestJS",
    Description: () => <>Build scalable and maintainable server-side applications</>,
  },
  {
    slug: "php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>Build AGIs for Asterisk</>,
  },
  {
    slug: "prisma",
    Component: SiPrisma,
    title: "Prisma",
    Description: () => <>Simplify database access and management</>,
  },
  {
    slug: "trpc",
    Component: SiTrpc,
    title: "TRPC",
    Description: () => <>Implement type-safe and efficient communication between client and server</>,
  },
  {
    slug: "webrtc",
    Component: SiWebrtc,
    title: "WebRTC",
    Description: () => <>Enable real-time communication through audio directly in web browsers</>,
  },
  {
    slug: "socket.io",
    Component: SiSocketdotio,
    title: "Socket.io",
    Description: () => <>Real-time communication between clients and servers</>,
  },
  {
    slug: "mysql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "psql",
    Component: DiPostgresql,
    title: "PostgreSQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "asterisk",
    Component: DiAsterisk,
    title: "Asterisk",
    Description: () => <>Develop telephony and communication systems</>,
  },

  // Infrastructure Skills
  {
    slug: "nginx",
    Component: DiNginx,
    title: "Nginx",
    Description: () => <>Utilize the high-performance web server, load balancer, and reverse proxy</>,
  },
  {
    slug: "docker",
    Component: DiDocker,
    title: "Docker",
    Description: () => <>Simplifies software deployment and improves scalability</>,
  },
  {
    slug: "redis",
    Component: DiRedis,
    title: "Redis",
    Description: () => <>Simplifies software deployment and improves scalability</>,
  },
  {
    slug: "linux",
    Component: DiLinux,
    title: "Linux",
    Description: () => <>O.S. for server administration and development</>,
  },
  {
    slug: "googlecloud",
    Component: DiGoogleCloudPlatform,
    title: "Google Cloud Platform",
    Description: () => <>Scalable and reliable cloud computing services</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "Amazon Web Services",
    Description: () => <>Scalable and reliable cloud computing services</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
