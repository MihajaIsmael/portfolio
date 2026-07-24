import zeendocImg from "../assets/projects/zeendoc.png";
import crmImg from "../assets/projects/1crm-metier.png";
import cervoprintImg from "../assets/projects/cervoprint.png";
import portfolioImg from "../assets/projects/portfolio.png";
import pennylaneImg from "../assets/projects/pennylane.png";
import vokatraImg from "../assets/projects/saisie-vokatra.png";

export const projectList = [
    {
        name: '1CRM - Modules Métiers',
        desc: 'Conception et intégration de modules personnalisés adaptés aux besoins spécifiques des départements (Comptabilité, Commerce, Direction, Gestion de Projet), améliorant l\'efficacité opérationnelle.',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Smarty', 'Git'],
        image: crmImg,
        url: '#',
        github: '#'
    },
    {
        name: '1CRM - Connecteur Zeendoc',
        desc: 'Développement d\'une passerelle API pour l\'importation automatique et la gestion centralisée des factures depuis la solution GED Zeendoc.',
        tags: ['PHP', 'MySQL', 'SOAP', 'Smarty', 'Git'],
        image: zeendocImg,
        url: '#',
        github: '#'
    },
    {
        name: '1CRM - Connecteur Cervoprint',
        desc: 'Implémentation d\'un flux automatisé pour la récupération et le traitement des commandes via l\'API Cervoprint, fluidifiant la chaîne logistique.',
        tags: ['PHP', 'MySQL', 'API REST', 'Smarty', 'Git'],
        image: cervoprintImg,
        url: '#',
        github: '#'
    },
    {
        name: 'Portfolio Personnel',
        desc: 'Site vitrine personnel développé en React, mettant en avant mes compétences et réalisations avec des animations fluides et une interface responsive.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        image: portfolioImg,
        url: 'https://mihajaismael.github.io/portfolio',
        github: 'https://github.com/MihajaIsmael/portfolio'
    },
    {
        name: 'Connecteur Synchronisation 1CRM ↔ Pennylane',
        desc: 'Conception et développement d\'une intégration API REST bidirectionnelle entre 1CRM et Pennylane. Automation du flux comptable : synchronisation automatique des clients, produits, factures et avoirs vers Pennylane, et remonte des factures d\'achat vers 1CRM.',
        tags: ['PHP', 'API REST', 'Pennylane API', 'MySQL', 'Git'],
        image: pennylaneImg,
        url: '#',
        github: '#'
    },
    {
        name: 'Application de Saisie Vokatra & Impression Code-Barres',
        desc: 'Développement d\'une application sur-mesure de saisie de production (Vokatra) avec génération et impression automatique / directe de codes-barres. Optimisation du flux opérationnel terrain, réduction des erreurs de saisie et traçabilité immédiate.',
        tags: ['PHP', 'MongoDB', 'JavaScript', 'Docker', 'Git'],
        image: vokatraImg,
        url: '#',
        github: 'https://github.com/MihajaIsmael/ambohimanambola-saisie-vokatra'
    },
];
