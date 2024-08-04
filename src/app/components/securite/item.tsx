import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const data = {
  "securisation-infrastructure": {
    mainTitle: "Sécurisation de l'Infrastructure",
    text: "Nous assurons la sécurité de l'infrastructure de votre entreprise en mettant en place des mesures de protection avancées. Cela inclut la configuration des pare-feux, des systèmes de détection d'intrusion et des réseaux sécurisés pour garantir que vos systèmes restent à l'abri des menaces.",
  },
  "protection-attaques": {
    mainTitle: "Protection Contre les Attaques",
    text: "Nous mettons en œuvre des solutions pour protéger vos systèmes contre les attaques, telles que les attaques DDoS, les logiciels malveillants et les tentatives de phishing. Notre équipe surveille en permanence les menaces et réagit rapidement pour neutraliser les risques potentiels.",
  },
  "securite-applications": {
    mainTitle: "Sécurité des Applications",
    text: "Nous nous assurons que vos applications sont sécurisées contre les vulnérabilités en effectuant des tests réguliers et en appliquant des correctifs de sécurité. Nous utilisons également des techniques de développement sécurisé pour prévenir les failles de sécurité dès la phase de conception.",
  },
  "gestion-acces-identites": {
    mainTitle: "Gestion des Accès et des Identités",
    text: "Nous gérons les accès et les identités de manière sécurisée en mettant en place des contrôles d'accès stricts et des systèmes d'authentification multi-facteurs. Cela garantit que seules les personnes autorisées peuvent accéder à vos données sensibles.",
  },
  "protection-donnees": {
    mainTitle: "Protection des Données",
    text: "Nous protégeons vos données en utilisant des techniques de chiffrement et des solutions de sauvegarde avancées. En cas de perte de données, nous disposons de procédures de récupération pour minimiser l'impact sur votre activité.",
  },
  "surveillance-journalisation": {
    mainTitle: "Surveillance et Journalisation",
    text: "Nous offrons des services de surveillance et de journalisation pour détecter les activités suspectes et conserver des enregistrements détaillés de toutes les actions effectuées sur votre réseau. Cela aide à identifier et à résoudre rapidement les incidents de sécurité.",
  },
  "tests-securite": {
    mainTitle: "Tests de Sécurité",
    text: "Nous réalisons des tests de sécurité réguliers, y compris des tests de pénétration et des évaluations de vulnérabilité, pour identifier et corriger les failles de sécurité avant qu'elles ne puissent être exploitées par des attaquants.",
  },
  "politiques-securite": {
    mainTitle: "Politiques de Sécurité",
    text: "Nous aidons à développer et à mettre en œuvre des politiques de sécurité robustes qui définissent les pratiques et les procédures à suivre pour maintenir un environnement sécurisé. Ces politiques couvrent tous les aspects de la sécurité de l'information.",
  },
  "formation-sensibilisation": {
    mainTitle: "Formation et Sensibilisation",
    text: "Nous proposons des programmes de formation et de sensibilisation pour éduquer vos employés sur les meilleures pratiques en matière de sécurité. Cela inclut la reconnaissance des tentatives de phishing, l'utilisation sécurisée des mots de passe et la protection des informations sensibles.",
  },
  "gestion-incidents": {
    mainTitle: "Gestion des Incidents",
    text: "Nous offrons des services de gestion des incidents pour répondre efficacement aux incidents de sécurité. Notre équipe est prête à intervenir rapidement pour contenir les incidents, minimiser les dommages et restaurer les opérations normales.",
  },
};

const SecureInfrastructure: React.FC = () => {
  const router = useRouter();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const newHash = window.location.hash.substring(1);
    if (newHash) {
      const element = document.getElementById(newHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [hash]);

  return (
    <div className="securite">
      <h1 id="hebergement-cloud-securise">Sécurité</h1>
      {Object.keys(data).map((key) => (
        <section key={key} id={key}>
          <h2>{data[key].mainTitle}</h2>
          <div>
            <p>{data[key].text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SecureInfrastructure;
