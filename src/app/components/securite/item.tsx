import React from "react";

const data = {
  item1: {
    mainTitle: "La Sécurisation de l'Infrastructure",
    text: "Nous assurons la sécurité de l'infrastructure de votre entreprise en mettant en place des mesures de protection avancées. Cela inclut la configuration des pare-feux, des systèmes de détection d'intrusion et des réseaux sécurisés pour garantir que vos systèmes restent à l'abri des menaces.",
  },
  item2: {
    mainTitle: "Protection Contre les Attaques",
    text: "Nous mettons en œuvre des solutions pour protéger vos systèmes contre les attaques, telles que les attaques DDoS, les logiciels malveillants et les tentatives de phishing. Notre équipe surveille en permanence les menaces et réagit rapidement pour neutraliser les risques potentiels.",
  },
  item3: {
    mainTitle: "Sécurité des Applications",
    text: "Nous nous assurons que vos applications sont sécurisées contre les vulnérabilités en effectuant des tests réguliers et en appliquant des correctifs de sécurité. Nous utilisons également des techniques de développement sécurisé pour prévenir les failles de sécurité dès la phase de conception.",
  },
  item4: {
    mainTitle: "Gestion des Accès et des Identités",
    text: "Nous gérons les accès et les identités de manière sécurisée en mettant en place des contrôles d'accès stricts et des systèmes d'authentification multi-facteurs. Cela garantit que seules les personnes autorisées peuvent accéder à vos données sensibles.",
  },
  item5: {
    mainTitle: "Protection des Données",
    text: "Nous protégeons vos données en utilisant des techniques de chiffrement et des solutions de sauvegarde avancées. En cas de perte de données, nous disposons de procédures de récupération pour minimiser l'impact sur votre activité.",
  },
  item6: {
    mainTitle: "Surveillance et Journalisation",
    text: "Nous offrons des services de surveillance et de journalisation pour détecter les activités suspectes et conserver des enregistrements détaillés de toutes les actions effectuées sur votre réseau. Cela aide à identifier et à résoudre rapidement les incidents de sécurité.",
  },
  item7: {
    mainTitle: "Tests de Sécurité",
    text: "Nous réalisons des tests de sécurité réguliers, y compris des tests de pénétration et des évaluations de vulnérabilité, pour identifier et corriger les failles de sécurité avant qu'elles ne puissent être exploitées par des attaquants.",
  },
  item8: {
    mainTitle: "Politiques de Sécurité",
    text: "Nous aidons à développer et à mettre en œuvre des politiques de sécurité robustes qui définissent les pratiques et les procédures à suivre pour maintenir un environnement sécurisé. Ces politiques couvrent tous les aspects de la sécurité de l'information.",
  },
  item9: {
    mainTitle: "Formation et Sensibilisation",
    text: "Nous proposons des programmes de formation et de sensibilisation pour éduquer vos employés sur les meilleures pratiques en matière de sécurité. Cela inclut la reconnaissance des tentatives de phishing, l'utilisation sécurisée des mots de passe et la protection des informations sensibles.",
  },
  item10: {
    mainTitle: "Gestion des Incidents",
    text: "Nous offrons des services de gestion des incidents pour répondre efficacement aux incidents de sécurité. Notre équipe est prête à intervenir rapidement pour contenir les incidents, minimiser les dommages et restaurer les opérations normales.",
  },
};

const SecureInfrastructure: React.FC = () => {
  return (
    <div className="securite">
      <h1 id="item1">Développement et Web</h1>
      {Object.keys(data).map((key) => {
        // Extraction du chiffre en retirant "item" et en convertissant en nombre
        const itemNumber = parseInt(key.replace("item", ""), 10);
        // Soustraction de 1 au chiffre
        const newNumber = itemNumber + 1;
        // Création du nouvel id
        const newId = `item${newNumber}`;

        return (
          <section key={key} id={newId}>
            <h2>{data[key].mainTitle}</h2>
            <div>
              <p>{data[key].text}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SecureInfrastructure;
