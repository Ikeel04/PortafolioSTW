const navLinks = [
    {
        name: "Trabajo",
        link: "#work",
    },
    {
        name: "Experiencia",
        link: "#experience",
    },
    {
        name: "Habilidades",
        link: "#skills",
    }
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Años de experiencia" },
    { value: 0, suffix: "+", label: "Clientes satisfechos (Aún no hay xd)" },
    { value: 3, suffix: "+", label: "Proyectos Completados" },
    { value: 0, suffix: "%", label: "Tasa de retención de clientes" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/react.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/git.svg",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/node.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/three.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Enfoque en calidad",
        desc: "Siempre se buscan resultados de alta calidad manteniendo " +
            "la mayor atención posible en cada detalle.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Comunicación de confianza.",
        desc: "Te mantengo informado y actualizado de cada paso dado para asegurar" +
            "transparencia y claridad.",
    },
    {
        imgPath: "/images/time.png",
        title: "Entrega a tiempo",
        desc: "Siempre se trata de que los proyectos se completen a tiempo, con calidad y atención al detalle.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "Desarrollador React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Desarrollador Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Desarrollador Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Desarrollador Interactivo",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Etapa primeriza en la creación de páginas web." +
            "Primero utilizando solamente HTML para luego ir implementando más herramientas como con JS y CSS. ",
        imgPath: "/images/banner1.png",
        logoPath: "/images/icon1.png",
        title: "Desarrollador HTML",
        date: "Junio 2022 - Presente",
        responsibilities: [
            "Desarrollé y mantuve la estructura HTML de páginas web, asegurando compatibilidad con navegadores modernos.",
            "Integré contenido dinámico trabajando con equipos de backend (Plantillas para CMS o APIs).",
            "Documenté y refactoricé código heredado para mantener escalabilidad y buenas prácticas.",
        ],
    },
    {
        review: "Desarrollé aplicaciones web dinámicas y escalables utilizando React.js y React.jsx, " +
            "enfocándome en crear interfaces de usuario eficientes, componentes reutilizables y una experiencia de usuario fluida. " +
            "Trabajé en estrecha colaboración con equipos de diseño y backend para implementar soluciones técnicas alineadas con los objetivos del producto.",
        imgPath: "/images/banner2.png",
        logoPath: "/images/icon2.png",
        title: "Trabajos con React",
        date: "Febrero 2025 - Presente",
        responsibilities: [
            "Desarrollé componentes React altamente reutilizables y optimizados para mejorar la mantenibilidad del código.",
            "Implementé hooks (useState, useEffect, useContext) y manejo de estado con Redux/Toolkit para gestión de datos complejos.",
            "Trabajé con librerías complementarias como React Router, Formik, Material-UI o TailwindCSS para agilizar el desarrollo.",
        ],
    },
    {
        review: "Implementé y optimicé entornos de desarrollo, despliegue y producción utilizando Docker para " +
            "garantizar consistencia, escalabilidad y portabilidad en aplicaciones. Trabajé en la contenerización de servicios, " +
            "la gestión de imágenes y la automatización de workflows para mejorar la eficiencia del ciclo de vida del software.",
        imgPath: "/images/banner3.png",
        logoPath: "/images/icon3.png",
        title: "Trabajos con Docker",
        date: "Marzo 2025 - Presente",
        responsibilities: [
            "Gestioné contenedores y orquestación básica con docker-compose para entornos locales y staging..",
            "Optimicé imágenes aplicando buenas prácticas (multistage builds, Alpine Linux, limpieza de caché).",
            "Dockericé aplicaciones (backend, frontend y servicios) creando imágenes optimizadas con Dockerfile.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/itsadri_rd?igsh=NDF3MW04cXV4Y2Fh",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/share/19EiGFkXdT/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://x.com/RicardoI1013?t=Qpxu04-rnYpJPMrS1MOSfA&s=08",
        imgPath: "/images/x.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};