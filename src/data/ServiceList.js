import {
    BiCodeAlt,
    BiMobileAlt,
    BiServer,
    BiCloud,
    BiData,
} from "react-icons/bi";
import {
    FaAngular,
    FaReact,
    FaVuejs,
    FaAndroid,
    FaJava,
    FaNodeJs,
    FaAws,
    FaDigitalOcean,
    FaFigma,
} from "react-icons/fa";
import {
    SiFlutter,
    SiSpringboot,
    SiMicrosoftazure,
    SiGooglecloud,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiMaterialdesign,
    SiAdobexd,
} from "react-icons/si";


const iconSize = 28;
const iconClass = "fill-accent";
const techIconSize = 14;
const techIconClass = "fill-accent";


export const ServiceList = [
    {
        icon: <BiCodeAlt className={iconClass} size={iconSize} />,
        title: "Web Development",
        techs: [
            <FaAngular className={techIconClass} size={techIconSize} />,
            <FaReact className={techIconClass} size={techIconSize} />,
            <FaVuejs className={techIconClass} size={techIconSize} />,
        ]
    },
    {
        icon: <BiMobileAlt className={iconClass} size={iconSize} />,
        title: "Mobile Development",
        techs: [
            <FaAndroid className={techIconClass} size={techIconSize} />,
            <SiFlutter className={techIconClass} size={techIconSize} />,
        ]
    },
    {
        icon: <BiServer className={iconClass} size={iconSize} />,
        title: "Backend Development",
        techs: [
            <FaJava className={techIconClass} size={techIconSize} />,
            <SiSpringboot className={techIconClass} size={techIconSize} />,
            <FaNodeJs className={techIconClass} size={techIconSize} />,
        ]
    },
    {
        icon: <BiCloud className={iconClass} size={iconSize} />,
        title: "Cloud",
        techs: [
            <FaAws className={techIconClass} size={techIconSize} />,
            <FaDigitalOcean className={techIconClass} size={techIconSize} />,
            <SiMicrosoftazure className={techIconClass} size={techIconSize} />,
            <SiGooglecloud className={techIconClass} size={techIconSize} />,
        ]
    },
    {
        icon: <BiData className={iconClass} size={iconSize} />,
        title: "Database",
        techs: [
            <SiMysql className={techIconClass} size={techIconSize} />,
            <SiMongodb className={techIconClass} size={techIconSize} />,
            <SiRedis className={techIconClass} size={techIconSize} />,
        ]
    },
    {
        icon: <SiMaterialdesign className={iconClass} size={iconSize} />,
        title: "Design",
        techs: [
            <FaFigma className={techIconClass} size={techIconSize} />,
            <SiAdobexd className={techIconClass} size={techIconSize} />,
        ]
    }
];