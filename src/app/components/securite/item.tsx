// src/app/components/securite/item.tsx
import React from "react";

interface ItemProps {
  itemKey: string;
}

const SecureInfrastructure: React.FC<ItemProps> = ({ itemKey }) => {
  return (
    <div className="securite">
      <h1>La Sécurisation de l'Infrastructure {itemKey}</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          La sécurisation de l'infrastructure est essentielle pour protéger les
          données et garantir la continuité des activités. Elle inclut des
          mesures de protection physique, des protocoles de sécurité
          informatique, et des pratiques organisationnelles.
        </p>
        <img
          src="https://via.placeholder.com/600x400?text=Infrastructure+s%C3%A9curis%C3%A9e"
          alt="Infrastructure sécurisée"
        />
      </section>

      <section>
        <h2>Les Mesures de Protection Physique</h2>
        <p>
          Les mesures de protection physique comprennent des dispositifs comme
          des caméras de surveillance, des systèmes d'alarme, et des contrôles
          d'accès pour prévenir les intrusions non autorisées.
        </p>
        <img
          src="https://via.placeholder.com/600x400?text=Protection+physique"
          alt="Mesures de protection physique"
        />
      </section>

      <section>
        <h2>Les Protocoles de Sécurité Informatique</h2>
        <p>
          Les protocoles de sécurité informatique impliquent l'utilisation de
          pare-feux, de logiciels antivirus, et de politiques de gestion des
          mots de passe pour protéger les systèmes informatiques contre les
          cyberattaques.
        </p>
        <img
          src="https://via.placeholder.com/600x400?text=S%C3%A9curit%C3%A9+informatique"
          alt="Sécurité informatique"
        />
      </section>

      <section>
        <h2>Les Pratiques Organisationnelles</h2>
        <p>
          Les pratiques organisationnelles incluent la formation des employés,
          la mise en place de politiques de sécurité, et la réalisation d'audits
          réguliers pour s'assurer que les mesures de sécurité sont respectées.
        </p>
        <img
          src="https://via.placeholder.com/600x400?text=Pratiques+organisationnelles"
          alt="Pratiques organisationnelles"
        />
      </section>
    </div>
  );
};

export default SecureInfrastructure;
