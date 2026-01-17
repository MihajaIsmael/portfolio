import {
    Bug,
    Code,
    Rocket,
    ShieldCheck,
} from "lucide-react";

export const serviceCategories = [
    {
        title: "Maintenance & correction de bugs",
        icon: Bug,
        color: "red",
        items: [
            "Correction de bugs PHP / JavaScript",
            "Dépannage urgent",
            "Stabilisation d’applications existantes",
        ],
    },
    {
        title: "Développement de fonctionnalités",
        icon: Code,
        color: "blue",
        items: [
            "Fonctionnalités sur mesure",
            "Modules métiers (CRM / ERP)",
            "Intégration API (REST, SOAP)",
        ],
    },
    {
        title: "Refonte & optimisation",
        icon: Rocket,
        color: "purple",
        items: [
            "Refactoring de code",
            "Optimisation des performances",
            "Amélioration UX / UI",
        ],
    },
    {
        title: "Sécurité & bonnes pratiques",
        icon: ShieldCheck,
        color: "green",
        items: [
            "Bonnes pratiques de sécurité",
            "Audit applicatif basique",
            "Automatisation CI/CD (DevSecOps)",
        ],
    },
];
