import { getAssetUrl } from "@/lib/utils";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: getAssetUrl("b1.svg"),
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: getAssetUrl("grid.svg"),
    spareimg: getAssetUrl("b4.svg"),
  },

  {
    id: 5,
    title: "Currently building a Esports Team Management System",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: getAssetUrl("b5.svg"),
    spareimg: getAssetUrl("grid.svg"),
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "School Registration Web App",
    des: "A website that streamlines administrative tasks by providing tools for managing student registration",
    img: getAssetUrl("p1.svg"),
    iconLists: [getAssetUrl("re.svg"), getAssetUrl("tail.svg"), getAssetUrl("ts.svg"), getAssetUrl("fire.svg"), getAssetUrl("node.svg")],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Inventory Management System",
    des: "A system that helps businesses track, manage, and optimize their inventory levels in real-time. It streamlines processes like stock monitoring, order fulfillment, and reporting, ensuring efficient operations and reducing costs.",
    img: getAssetUrl("p2.svg"),
    iconLists: [getAssetUrl("re.svg"), getAssetUrl("tail.svg"), getAssetUrl("ts.svg"), getAssetUrl("fire.svg"), getAssetUrl("node.svg")],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Employees Job Tracker",
    des: "A tracker that simplifies workforce management by tracking employee tasks, progress, and performance in real time. It enhances productivity and accountability by providing clear insights into job assignments, deadlines, and achievements.",
    img: getAssetUrl("p3.svg"),
    iconLists: [getAssetUrl("re.svg"), getAssetUrl("tail.svg"), getAssetUrl("ts.svg"), getAssetUrl("fire.svg"), getAssetUrl("node.svg")],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Bureau of Customs E-ticketing",
    des: "A system that streamlines customs processes by digitizing ticket issuance and tracking for shipments and transactions. It enhances efficiency, transparency, and security while reducing paperwork and minimizing delays in customs operations.",
    img: getAssetUrl("p4.svg"),
    iconLists: [
      getAssetUrl("next.svg"),
      getAssetUrl("tail.svg"),
      getAssetUrl("ts.svg"),
      getAssetUrl("figma.svg"),
      getAssetUrl("mongo.svg"),
    ],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "You're one of the most reliable developers I've worked with. Your attention to detail and ability to craft user-friendly React applications make a huge difference in the projects we deliver. It's clear you take pride in creating clean, efficient code, and it inspires the rest of the team to aim higher.",
    name: "Karlo Calzada",
    title: "Advanced App Engineering Specialist",
    pic: getAssetUrl("karlo.jpg"),
  },
  {
    quote:
      "Honestly, your work stands out. The way you approach complex frontend challenges and turn them into seamless, intuitive user interfaces is impressive. It’s always reassuring to know that when you’re on a project, the frontend is going to look and function perfectly.",
    name: "James Carl Junio",
    title: "Custom Software Engineering Specialist",
    pic: getAssetUrl("james.jpeg"),
  },
  {
    quote:
      "I’ve learned so much just by collaborating with you. You not only create amazing React-based solutions but also bring fresh ideas and creative energy to the team. Your commitment to delivering quality results on time really sets a great example for all of us.",
    name: "Lysa Dee Fabilla",
    title: "Custom Software Engineering Analyst",
    pic: getAssetUrl("lysa.jpg"),
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   pic: "karlo.jpg"
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   pic: "karlo.jpg"
  // },
];

export const companies = [
  {
    id: 1,
    name: "vasavah",
    img: "",
    nameImg: getAssetUrl("vasavah.png"),
  },
  {
    id: 2,
    name: "accenture",
    img: "",
    nameImg: getAssetUrl("acn.svg"),
  },
  {
    id: 3,
    name: "cosmotech",
    img: "",
    nameImg: getAssetUrl("cosmotech.png"),
  },
  {
    id: 4,
    name: "slickdigital",
    img: "https://raymongarcia.github.io/my-portfolio/s.svg",
    nameImg: "https://raymongarcia.github.io/my-portfolio/slick_digital.png",
  },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "https://raymongarcia.github.io/my-portfolio/dock.svg",s
  //   nameimg: "https://raymongarcia.github.io/my-portfolio/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: getAssetUrl("exp1.svg"),
  },
  {
    id: 2,
    title: "Junior Frontend Developer",
    desc: "Designed and developed system app using React Js and Node Js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: getAssetUrl("exp2.svg"),
  },
  {
    id: 3,
    title: "Custom App Engineering Analyst",
    desc: "Help build to transform old websites to new techstack which is React Js",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: getAssetUrl("exp3.svg"),
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: getAssetUrl("exp4.svg"),
  },
];

export const socialMedia = [
  {
    id: 1,
    img: getAssetUrl("git.svg"),
    link: "https://github.com/InventorRaymon",
  },
  {
    id: 2,
    img: getAssetUrl("twit.svg"),
    link: "https://x.com/RaymonMamon",
  },
  {
    id: 3,
    img: getAssetUrl("link.svg"),
    link: "https://www.linkedin.com/in/john-raymon-macalib-og-39a12b206/",
  },
];
