import { FaJava, FaNodeJs, FaReact, FaBootstrap  } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi"
import { SiMysql, SiMongodb, SiMui, SiTailwindcss, SiVitess } from "react-icons/si"
import { FaGitlab, FaGithub } from "react-icons/fa6"
import { TbBrandNextjs } from "react-icons/tb"

const stackIcons = {
    node: {icon: FaNodeJs, title: 'NodeJs'},
    java: {icon: FaJava, title: 'JavaJs'},
    react: {icon: FaReact, title: 'ReactJs'},
    spring: {icon: BiLogoSpringBoot, title: 'Spring'},
    javascript: {icon: RiJavascriptFill, title: 'Javascript'},
    typescript: {icon: BiLogoTypescript, title: 'Typescript'},
    mysql: {icon: SiMysql, title: 'MySql'},
    mongo: {icon: SiMongodb, title: 'MongoDB'},
    mui: {icon: SiMui, title: 'MaterialUi'},
    tailwind: {icon: SiTailwindcss, title: 'Tailwind'},
    bootstrap: {icon: FaBootstrap , title: 'Bootstrap'},
    next: {icon: TbBrandNextjs , title: 'NextJs'},
    vite: {icon: SiVitess, title: 'Vite'},
    gitlab: {icon: FaGitlab, title: 'GitLab'},
    github: {icon: FaGithub, title: 'GitHub'},
}

export default stackIcons