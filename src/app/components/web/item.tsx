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
    mainTitle: "Base de données",
    sections: [],
  },
  item2: {
    mainTitle: "Développement de solutions backend",
    sections: [],
  },
  item3: {
    mainTitle: "Création de site web",
    sections: [],
  },
  item4: {
    mainTitle: "Sécurité et Gestion des Données",
    sections: [],
  },
  item5: {
    mainTitle: "UI/UX Design",
    sections: [],
  },
  item6: {
    mainTitle: "Optimisation des Performances",
    sections: [],
  },
  item7: {
    mainTitle: "Tests et Assurance Qualité",
    sections: [],
  },
  item8: {
    mainTitle: "Maintenance et Support Continus",
    sections: [],
  },
  item9: {
    mainTitle: "Adaptabilité aux Nouvelles Technologies",
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
