import React from "react";

interface ItemProps {
  itemKey: string;
}

interface Section {
  title: string;
  items: { text: string; imgSrc: string; imgAlt: string }[];
}

interface ItemData {
  mainTitle: string;
  sections: Section[];
}

const data: { [key: string]: ItemData } = {
  item1: {
    mainTitle: "Hébergement Cloud Sécurisé",
    sections: [],
  },
  item2: {
    mainTitle: "Sauvegarde et Restauration des Données",
    sections: [],
  },
  item3: {
    mainTitle: "Optimisation de l'Infrastructure Cloud",
    sections: [],
  },
  item4: {
    mainTitle: "Administration et Gestion des Serveurs",
    sections: [],
  },
  item5: {
    mainTitle: "Expert VMWare",
    sections: [],
  },
  item6: {
    mainTitle: "Surveillance et Maintenance 24/7",
    sections: [],
  },
  item7: {
    mainTitle: "Gestion des Performances et du Trafic",
    sections: [],
  },
};

const SecureInfrastructure: React.FC<ItemProps> = ({ itemKey }) => {
  const itemData = data[itemKey];

  if (!itemData) {
    return <div>Item non trouvé</div>;
  }

  return (
    <div className="securite">
      <h1>{itemData.mainTitle}</h1>
      {itemData.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <p>{item.text}</p>
              <img src={item.imgSrc} alt={item.imgAlt} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default SecureInfrastructure;
