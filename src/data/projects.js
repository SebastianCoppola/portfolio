//Assets:
import miNotesPrint from '../assets/projects/minotes-print.png'
import farazPrint from '../assets/projects/faraz-print.png'
import porfolioPrint from '../assets/projects/portfolio-print.png'
import sasPrint from '../assets/projects/sas-print.png'
import microfrontendPrint from '../assets/projects/microfrontend-print.png'
//Icons:
import stackIcons from './stackIcons'

const projectsData = [
    { 
        img: miNotesPrint, 
        url:'https://mi-notes.netlify.app/', 
        gitHub:'https://github.com/SebastianCoppola/miNotes', 
        title:'MiNotes - WebApp',
        description: {
            en: 'A platform employing MERN technology to organize daily tasks effectively.',
            es: 'Una plataforma que emplea la tecnología MERN para organizar tareas diarias de manera efectiva.'
        },
        stack: [stackIcons.node, stackIcons.react, stackIcons.mongo, stackIcons.mui],
        color: 'red', 
        number: 1 
    },
    { 
        img: farazPrint, 
        url:'https://villafaraz.com.ar/', 
        gitHub: null, 
        title:'Villa Faraz - WebApp',
        description: {
            en: 'Site for rental of beachfront cabins in Mar de las Pampas, Argentina.',
            es: 'Sitio web para alquiler de cabañas frente al mar en Mar de las Pampas, Argentina.'
        },
        stack: [stackIcons.react, stackIcons.mui, stackIcons.javascript],
    },
    { 
        img: sasPrint, 
        url: null, 
        gitHub: null, 
        title:'Health Insurance - WebApp',
        description: {
            en: 'Private accident management system for a major insurance company.',
            es: 'Sistema privado de gestión de accidentes para una importante compañía de seguros.'
        },
        stack: [stackIcons.java, stackIcons.spring, stackIcons.react, stackIcons.mui, stackIcons.mysql, stackIcons.typescript],
    },
    { 
        img: microfrontendPrint, 
        url: 'https://d1ysdp92vvp849.cloudfront.net/auth', 
        gitHub: 'https://github.com/SebastianCoppola/mft-login', 
        title: 'Microfrontend - Final Exam',
        description: {
            en: 'Two-factor authentication designed with microfrontend architecture for the final exam of microfrontend course.',
            es: 'Autenticación de dos pasos diseñada con arquitectura de microfrontend para el examen final del curso de microfrontend.'
        },
        stack: [stackIcons.java, stackIcons.spring, stackIcons.react, stackIcons.mui, stackIcons.mysql, stackIcons.typescript],
    },
    { 
        img: porfolioPrint, 
        url: null, 
        gitHub: null, 
        title:'Portfolio - WebApp',
        description: {
            en: 'The current SPA was made for sharing my work with the communitty.',
            es: 'La actual SPA fue creada para compartir mi trabajo con la comunidad.'
        },
        stack: [stackIcons.react, stackIcons.mui, stackIcons.javascript],
    },
]

export default projectsData