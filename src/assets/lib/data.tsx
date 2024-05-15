import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import auty from "../../assets/img/auty.webp";
import ovolo from "../../assets/img/ovolo.webp";
import piesse from "../../assets/img/piesse.webp";
import wpinsight from "../../assets/img/wpinsight.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import aws from "../../assets/icons/aws-icon.svg";
import bitbucket from "../../assets/icons/bitbucket-icon.svg";
import cloudflare from "../../assets/icons/cloudflare-icon.svg";
import digitalocean from "../../assets/icons/digitalocean-icon.svg";
import elementor from "../../assets/icons/elementor-icon.svg";
import gatsby from "../../assets/icons/gatsby-js-icon.svg";
import git from "../../assets/icons/git-icon.svg";
import ga from "../../assets/icons/google-analytics-icon.svg";
import openai from "../../assets/icons/openai-icon.svg";
import python from "../../assets/icons/python-icon.svg";
import php from "../../assets/icons/php-icon.svg";
import woocommerce from "../../assets/icons/woocommerce-icon.svg";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { TbBrandUpwork } from "react-icons/tb";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    pt: "Olá, sou Paulo H.",
    en: "Hi, I'm Paulo H.",
  },
  subtitle: "Fullstack Developer ",
  description: {
    pt: "Sou Paulo Henrique, especialista em otimização de WordPress com mais de 15 anos de experiência como líder técnico e gerente de projetos. Também crio ferramentas usando IA e sou um defensor do código aberto e da diversidade. Meu objetivo é fazer parte de projetos inspiradores!",
    en: "I'm Paulo Henrique, a WordPress Optimization Specialist with 15+ Years of Expertise as Tech Lead and Project Manager. I also create tools using AI and am an advocate for Open Source and diversity. My goal is to be part of inspiring projects!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        pt: "Vamos Conversar",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        pt: "Alguns Projetos",
        en: "Some Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Ovolo Hotels",
    description:
      "A reformulação do site Ovolo Hotels em 2020 apresenta um design moderno e elegante, espelhando o estilo das suas propriedades e a nova identidade da marca com o lema 'Wonder. Full'. Mesclamos três sites diferentes em um, mantendo todo o SEO intacto.",
    description_EN:
      "The Ovolo Hotels website redesign in 2020 features a modern and sleek design, mirroring the style of their properties and the new brand identity with the motto 'Wonder. Full'. Merged three different sites into one, keeping all SEO intact.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Figma", icon: figmaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
      { name: "WordPress", icon: wordpressicon },
    ],
    image: ovolo,
    deploymenturl: "https://ovolohotels.com/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Auty",
    description:
      "Conheça Auty, seu novo amigo e ajudante pessoal! Auty é um companheiro amigável de IA projetado para apoiar indivíduos no espectro neurodivergente. Deixe a Auty ser sua parceira em sua jornada!  (Vencedor do Coze Bot Challenge 2024)",
    description_EN:
      "Meet Auty, your new friend and personal helper! Auty is a friendly AI companion designed to support individuals in the neurodivergent spectrum. Let Auty be your partner on your journey! (Winner of the Coze Bot Challenge 2024)",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "OpenAI", icon: openai },
    ],
    image: auty,
    deploymenturl:
      "https://dev.to/phalkmin/meet-auty-a-bot-designed-to-support-and-guide-autistic-individuals-on-coze-l5f",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "WP-AutoInsight",
    description:
      "O plugin WP-AutoInsight permite gerar automaticamente postagens de blog para WordPress usando o poder da API OpenAI e Gemini. Basta fornecer um conjunto de palavras-chave ou assuntos e o plugin irá gerar conteúdo envolvente para você.",
    description_EN:
      "The WP-AutoInsight plugin allows you to automatically generate blog posts for WordPress using the power of the OpenAI & Gemini API. Simply provide a set of keywords or subjects, and the plugin will generate engaging content for you.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "WordPress", icon: wordpressicon },
      { name: "OpenAI", icon: openai },
      { name: "PHP", icon: php },
    ],
    image: wpinsight,
    deploymenturl:
      "https://wordpress.org/plugins/automated-blog-content-creator/",
    githuburl: "https://github.com/phalkmin/openai-blog",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Piesse",
    description:
      "Uma loja de roupas chamada Piesse com back-end WooCommerce e layout Elementor.",
    description_EN:
      "A clothing store called Piesse with a WooCommerce backend and Elementor layout.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "WordPress", icon: wordpressicon },
      { name: "Woocommerce", icon: woocommerce },
      { name: "Elementor", icon: elementor },
    ],
    image: piesse,
    deploymenturl: "https://piesse.com.br/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    pt: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "OpenAI",
        hash: "#OpenAI",
        icon: openai,
        color: "#000000",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: php,
        color: "#6884BA",
      },
      {
        title: "Python",
        hash: "#python",
        icon: python,
        color: "#7f54b3",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Servers & CI/CD",
    skills: [
      {
        title: "CloudFlare",
        hash: "#CloudFlare",
        icon: cloudflare,
        color: "#F48120",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: aws,
        color: "#f90",
      },
      {
        title: "DigitalOcean",
        hash: "#DigitalOcean",
        icon: digitalocean,
        color: "#0080FF",
      },
      {
        title: "BitBucket",
        hash: "#BitBucket",
        icon: bitbucket,
        color: "#2684FF",
      },
      {
        title: "Git/Github",
        hash: "#Git",
        icon: git,
        color: "#F4511E",
      },
      {
        title: "Google Analytics",
        hash: "#GA",
        icon: ga,
        color: "#e37400",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#0073AA",
      },
      {
        title: "Elementor",
        hash: "#Elementor",
        icon: elementor,
        color: "#ED345E",
      },
      {
        title: "Woocommerce",
        hash: "#Woocommerce",
        icon: woocommerce,
        color: "#7f54b3",
      },
      {
        title: "Gatsby",
        hash: "#Gatsby",
        icon: gatsby,
        color: "#639",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
    ],
  },
] as const;

export const navLinks = [
  { pt: "Home", en: "Home", hash: "#home", icon: GoHome },
  { pt: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { pt: "Projetos", en: "Projects", hash: "#projects", icon: GoProject },
  { pt: "Sobre", en: "About me", hash: "#about-me", icon: GoPerson },
  { pt: "Contato", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { pt: "Imprimir", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { pt: "Privacidade", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:phalkmin@protonmail.com",
  text: "phalkmin@protonmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/phalkmin/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/phalkmin",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:phalkmin@protonmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: "https://www.upwork.com/freelancers/~01d19e7e09c71181a4/",
    icon: TbBrandUpwork,
    altimgname: "Upwork",
  },
] as const;

export const quotesData = [
  {
    pt: '"No meu cartão de visitas, sou um consultor de tecnologia. Na minha mente, sou um ativista do software livre. Mas no meu coração, sei que roubar citações é errado."',
    en: `"On my business card, I am a tech consultant. In my mind, I am a free software activist. But in my heart, I know that stealing quotes is wrong."`,
    author: "",
  },
  {
    pt: '"Falar é fácil, me mostre o código"',
    en: `"Talk is cheap, show me the code"`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre min",
  title_EN: "About me",
  description: "Uns pedacinhos de código sobre mim",
  description_EN: "A few code snippets about me",
  paragraphs_PT: [
    {
      title: "O que está em minha mente",
      description:
        "Um nerd de carteirinha, sou um profissional dedicado e focado em negócios digitais, aliando excelência técnica com centelha criativa. Reconhecido pela minha capacidade de resolver problemas de forma criativa.",
      icon: hardwareicon,
    },
    {
      title: "Solucionador de desafios do mundo real",
      description:
        "Desde a realização de auditorias completas de SEO e de desempenho do site até a elaboração de soluções robustas, sou especializado em orientar projetos como consultor e coach líder de tecnologia, garantindo que o site seja rápido e confiável.",
      icon: caricon,
    },
    {
      title: "Autor e Palestrante",
      description:
        "Publiquei livros e escrevi artigos técnicos por amor a compartilhar meu conhecimento. Proferiu palestras em eventos de prestígio como a Campus Party, compartilhando ideias e multiplicando a paixão por tecnologia e desenvolvimento.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "What Lies in My Mind",
      description:
        "A huge nerd, I am a dedicated professional focused in digital business, combining technical excellence with a creative spark. Renowned for my ability to solve problems creatively.",
      icon: hardwareicon,
    },
    {
      title: "Solver of Real-World Challenges",
      description:
        "From conducting thorough SEO and site performance audits to crafting robust solutions, I specialize in guiding projects as a tech lead advisor and coach, making sure that the site is fast and reliable.",
      icon: caricon,
    },
    {
      title: "Author & Speaker",
      description:
        "I published books and wrote technical articles for love of sharing my knowledge. Delivered talks at prestigious events like the Campus Party, sharing ideas and multiplying the passion for technology and development.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    pt: "Contato",
    en: "Contact",
  },
  description: {
    pt: "Escreva uma mensagem e eu retornarei assim que possível",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        pt: "Seu Nome",
        en: "Your Name",
      },
      type: "text",
      validation: {
        pt: "Por favor digite seu nome",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        pt: "Seu E-mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        pt: "Por favor digite seu e-mail",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        pt: "Assunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        pt: "Por favor digite o Assunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      pt: "Mensagem",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      pt: "Por favor, digite a mensagem",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      pt: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      pt: "Concordo que Paulo H. utilize meus dados pessoais (nome e e-mail) para entrar em contato comigo.",
      en: "I agree that Paulo H. may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      pt: "Ao enviar esta solicitação, você reconhece que leu a Política de Privacidade",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    pt: "🥷🏽 A demo será aberta em breve. Iniciando servidores...",
    en: "🥷🏽 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    pt: "🥷🏽 Obrigado pelo seu e-mail. Entrarei em contato com você o mais rápido possível",
    en: "🥷🏽 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    pt: "🥷🏽 Infelizmente o envio do seu e-mail não funcionou. Por favor, tente novamente mais tarde",
    en: "🥷🏽 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    pt: "Por favor preencha seu nome",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    pt: "PT",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
