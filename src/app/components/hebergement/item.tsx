import React from "react";

const data = {
  item1: {
    mainTitle: "Hébergement Cloud Sécurisé",
    text: "Nous offrons des solutions d'hébergement cloud sécurisées pour assurer la disponibilité et la protection de vos données. Nos services incluent des mesures de sécurité avancées telles que le chiffrement, les pare-feux et la surveillance continue pour garantir un environnement cloud sécurisé.",
  },
  item2: {
    mainTitle: "Sauvegarde et Restauration des Données",
    text: "Nous fournissons des services de sauvegarde et de restauration des données pour protéger vos informations critiques contre la perte ou la corruption. Nos solutions de sauvegarde automatisées et nos procédures de récupération rapides assurent la continuité de vos opérations.",
  },
  item3: {
    mainTitle: "Optimisation de l'Infrastructure Cloud",
    text: "Nous optimisons votre infrastructure cloud pour améliorer les performances, réduire les coûts et maximiser l'efficacité. Nos experts analysent et ajustent votre environnement cloud pour garantir une utilisation optimale des ressources.",
  },
  item4: {
    mainTitle: "Administration et Gestion des Serveurs",
    text: "Nous prenons en charge l'administration et la gestion de vos serveurs pour garantir leur fonctionnement fiable et sécurisé. Nos services incluent la configuration, la maintenance, la mise à jour et la surveillance des serveurs.",
  },
  item5: {
    mainTitle: "Expert VMWare",
    text: "Nos experts VMware offrent des services de virtualisation avancés pour optimiser votre infrastructure informatique. Nous déployons et gérons des environnements VMware pour améliorer la flexibilité, la sécurité et les performances de vos systèmes.",
  },
  item6: {
    mainTitle: "Surveillance et Maintenance 24/7",
    text: "Nous offrons des services de surveillance et de maintenance 24/7 pour assurer la disponibilité et la sécurité de vos systèmes en permanence. Notre équipe réagit rapidement aux incidents pour minimiser les temps d'arrêt et garantir la continuité des opérations.",
  },
  item7: {
    mainTitle: "Gestion des Performances et du Trafic",
    text: "Nous gérons les performances et le trafic de votre infrastructure cloud pour garantir une expérience utilisateur optimale. Nos services incluent l'analyse des performances, l'optimisation du trafic et la résolution des problèmes de latence.",
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
