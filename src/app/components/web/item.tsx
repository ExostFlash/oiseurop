import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const data = {
  "base-donnees": {
    mainTitle: "Base de données",
    text: "Nous concevons et gérons des bases de données robustes et performantes pour stocker et organiser vos données de manière sécurisée. Notre expertise couvre les bases de données relationnelles et non relationnelles, garantissant une gestion efficace de vos informations.",
  },
  "developpement-solutions-backend": {
    mainTitle: "Développement de solutions backend",
    text: "Nous développons des solutions backend puissantes et scalables pour supporter vos applications et sites web. Nos services incluent la création d'API, la gestion des serveurs et l'intégration de systèmes pour assurer la fluidité et la fiabilité de vos opérations.",
  },
  "creation-site-web": {
    mainTitle: "Création de site web",
    text: "Nous créons des sites web attrayants, réactifs et optimisés pour les moteurs de recherche. Notre équipe de développeurs et de designers travaille ensemble pour produire des sites qui non seulement attirent l'œil mais offrent aussi une expérience utilisateur exceptionnelle.",
  },
  "securite-gestion-donnees": {
    mainTitle: "Sécurité et Gestion des Données",
    text: "Nous mettons en place des mesures de sécurité avancées pour protéger vos données contre les cybermenaces. Cela inclut le chiffrement des données, la gestion des accès et la surveillance continue pour prévenir et répondre aux incidents de sécurité.",
  },
  "ui-ux-design": {
    mainTitle: "UI/UX Design",
    text: "Nous concevons des interfaces utilisateur intuitives et attrayantes, en mettant l'accent sur l'expérience utilisateur. Nos designers créent des prototypes et des maquettes qui assurent une navigation fluide et agréable pour vos utilisateurs finaux.",
  },
  "optimisation-performances": {
    mainTitle: "Optimisation des Performances",
    text: "Nous optimisons les performances de vos applications et sites web pour garantir une rapidité et une efficacité maximales. Cela inclut l'optimisation du code, la mise en cache et l'amélioration des temps de chargement pour offrir une expérience utilisateur optimale.",
  },
  "tests-assurance-qualite": {
    mainTitle: "Tests et Assurance Qualité",
    text: "Nous réalisons des tests rigoureux et complets pour assurer la qualité et la fiabilité de vos produits. Nos services d'assurance qualité incluent les tests automatisés, les tests manuels et les audits de code pour détecter et corriger les bugs avant la mise en production.",
  },
  "maintenance-support-continu": {
    mainTitle: "Maintenance et Support Continus",
    text: "Nous offrons des services de maintenance et de support pour assurer le bon fonctionnement de vos systèmes à long terme. Notre équipe est disponible pour résoudre les problèmes, effectuer des mises à jour et fournir une assistance technique continue.",
  },
  "adaptabilite-nouvelles-technologies": {
    mainTitle: "Adaptabilité aux Nouvelles Technologies",
    text: "Nous nous tenons constamment à jour avec les dernières technologies et tendances pour vous offrir des solutions innovantes et modernes. Cela inclut l'intégration de nouvelles technologies et la mise à jour de vos systèmes existants pour rester compétitif sur le marché.",
  },
};

const SecureInfrastructure: React.FC = () => {
  const router = useRouter();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    var newHash = window.location.hash.substring(1);
    if (newHash) {
      const element = document.getElementById(newHash as string);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  return (
    <div className="securite">
      <h1>Développement et Web</h1>
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
