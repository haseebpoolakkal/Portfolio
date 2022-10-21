import fliebae from "../assets/icons/fliebae.png";
import forU from "../assets/icons/4u.png";
import kanniyadath from "../assets/icons/kanniyadath.jpg";
import phoenix from "../assets/icons/phoenix.png";
import {
    SiFlutter,
    SiMongodb,
    SiRedis,
    SiTypescript,
    SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
    FaNodeJs,
    FaAngular,
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaJava,
    FaAndroid,
    FaGithub,
} from "react-icons/fa";

const iconSize = 14;
const iconClass = "fill-accent";

export const WorkList = [
    {
        icon: { image: fliebae },
        title: "Fliebae",
        body: "Food delivery application with restaurant and dish searching and payment integeration.",
        techs: [
            <SiFlutter className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
    {
        icon: { image: fliebae },
        title: "Fliebae Server",
        body: "Server appilcation for Fliebae website, mobile application and admin console.",
        techs: [
            <IoLogoJavascript className={iconClass} size={iconSize} />,
            <FaNodeJs className={iconClass} size={iconSize} />,
            <SiMongodb className={iconClass} size={iconSize} />,
            <SiRedis className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
    {
        icon: { image: fliebae },
        title: "Fliebae Admin Console",
        body: "Admin console for Fliebae to register restaurants, dishes, delivery boys and to orchestrate orders.",
        techs: [
            <SiTypescript className={iconClass} size={iconSize} />,
            <FaAngular className={iconClass} size={iconSize} />,
            <FaHtml5 className={iconClass} size={iconSize} />,
            <FaCss3 className={iconClass} size={iconSize} />,
            <FaBootstrap className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
    {
        icon: { image: forU },
        title: "4U Building Wares",
        body: "An android application to track electricians and plumbers purchase benifits for electrial retail shop.",
        techs: [
            <FaJava className={iconClass} size={iconSize} />,
            <FaAndroid className={iconClass} size={iconSize} />,
            <SiFirebase className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
    {
        icon: { image: kanniyadath },
        title: "Kanniyadath Jwellers",
        body: "An android application to track employees insentive based on their sales and to track attendance.",
        techs: [
            <FaJava className={iconClass} size={iconSize} />,
            <FaAndroid className={iconClass} size={iconSize} />,
            <SiFirebase className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
    {
        icon: { image: phoenix },
        title: "Phoenix Hospital",
        body: "Android and IOS application to search available doctors and schedule an appointments.",
        techs: [
            <SiFlutter className={iconClass} size={iconSize} />,
            <FaAndroid className={iconClass} size={iconSize} />,
            <FaNodeJs className={iconClass} size={iconSize} />,
            <SiMongodb className={iconClass} size={iconSize} />,
            <FaGithub className={iconClass} size={iconSize} />,
        ]
    },
]