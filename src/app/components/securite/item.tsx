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
    mainTitle: "La Sécurisation de l'Infrastructure",
    sections: [
      {
        title: "Introduction",
        items: [
          {
            text: "La sécurisation de l'infrastructure est essentielle pour protéger les données et garantir la continuité des activités. Elle inclut des mesures de protection physique, des protocoles de sécurité informatique, et des pratiques organisationnelles.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Infrastructure+s%C3%A9curis%C3%A9e",
            imgAlt: "Infrastructure sécurisée",
          },
        ],
      },
      {
        title: "Les Mesures de Protection Physique",
        items: [
          {
            text: "Les mesures de protection physique comprennent des dispositifs comme des caméras de surveillance, des systèmes d'alarme, et des contrôles d'accès pour prévenir les intrusions non autorisées.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Protection+physique",
            imgAlt: "Mesures de protection physique",
          },
        ],
      },
      {
        title: "Les Protocoles de Sécurité Informatique",
        items: [
          {
            text: "Les protocoles de sécurité informatique impliquent l'utilisation de pare-feux, de logiciels antivirus, et de politiques de gestion des mots de passe pour protéger les systèmes informatiques contre les cyberattaques.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=S%C3%A9curit%C3%A9+informatique",
            imgAlt: "Sécurité informatique",
          },
        ],
      },
      {
        title: "Les Pratiques Organisationnelles",
        items: [
          {
            text: "Les pratiques organisationnelles incluent la formation des employés, la mise en place de politiques de sécurité, et la réalisation d'audits réguliers pour s'assurer que les mesures de sécurité sont respectées.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Pratiques+organisationnelles",
            imgAlt: "Pratiques organisationnelles",
          },
        ],
      },
    ],
  },
  item2: {
    mainTitle: "Protection Contre les Attaques",
    sections: [
      {
        title: "Introduction",
        items: [
          {
            text: "La protection contre les attaques est essentielle pour assurer la sécurité des systèmes et des données. Elle englobe diverses stratégies et mesures visant à prévenir, détecter et répondre aux menaces potentielles.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Infrastructure+Item+2",
            imgAlt: "Image représentant l'infrastructure de protection",
          },
        ],
      },
      {
        title: "Protection Physique",
        items: [
          {
            text: "La protection physique comprend les mesures prises pour protéger les équipements et les installations contre les accès non autorisés et les dommages. Cela inclut l'installation de barrières physiques, de systèmes de surveillance et de contrôle d'accès.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Protection+physique+Item+2",
            imgAlt: "Image représentant la protection physique",
          },
        ],
      },
      {
        title: "Protection Logique",
        items: [
          {
            text: "La protection logique vise à sécuriser les systèmes informatiques et les réseaux contre les cyberattaques. Elle inclut l'utilisation de pare-feux, de logiciels antivirus, de chiffrement et de systèmes de détection d'intrusion.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Protection+logique+Item+2",
            imgAlt: "Image représentant la protection logique",
          },
        ],
      },
      {
        title: "Formation et Sensibilisation",
        items: [
          {
            text: "Former et sensibiliser les employés aux menaces de sécurité est crucial. Des programmes de formation réguliers et des campagnes de sensibilisation aident à promouvoir une culture de sécurité au sein de l'organisation.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Formation+et+Sensibilisation+Item+2",
            imgAlt: "Image représentant la formation et la sensibilisation",
          },
        ],
      },
      {
        title: "Surveillance et Réponse",
        items: [
          {
            text: "La surveillance continue et la capacité de réponse rapide aux incidents de sécurité sont essentielles pour limiter les dommages. Les organisations doivent disposer de plans de réponse aux incidents bien définis et de personnel formé pour gérer les crises.",
            imgSrc:
              "https://via.placeholder.com/600x400?text=Surveillance+et+Réponse+Item+2",
            imgAlt: "Image représentant la surveillance et la réponse",
          },
        ],
      },
    ],
  },
  item3: {
    mainTitle: "Sécurité des Applications",
    sections: [],
  },
  item4: {
    mainTitle: "Gestion des Accès et des Identités",
    sections: [],
  },
  item5: {
    mainTitle: "Protection des Données",
    sections: [],
  },
  item6: {
    mainTitle: "Surveillance et Journalisation",
    sections: [],
  },
  item7: {
    mainTitle: "Tests de Sécurité",
    sections: [],
  },
  item8: {
    mainTitle: "Politiques de Sécurité",
    sections: [],
  },
  item9: {
    mainTitle: "Formation et Sensibilisation",
    sections: [],
  },
  item10: {
    mainTitle: "Gestion des Incidents",
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
