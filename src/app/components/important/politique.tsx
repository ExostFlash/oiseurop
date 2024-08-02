import React from "react";

const Politique: React.FC = () => {
  return (
    <div className="securite">
      <h1>Politique de Confidentialité</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Votre confidentialité est importante pour nous. Cette politique de
          confidentialité explique quelles informations nous collectons, comment
          nous les utilisons et comment nous les protégeons. En utilisant notre
          site web, vous acceptez les pratiques décrites dans cette politique.
        </p>
      </section>

      <section>
        <h2>2. Informations que nous collectons</h2>
        <p>
          Nous pouvons collecter des informations personnelles identifiables
          telles que votre nom, adresse email, numéro de téléphone, ainsi que
          des informations non identifiables personnellement telles que votre
          adresse IP, type de navigateur et les pages que vous visitez sur notre
          site.
        </p>
      </section>

      <section>
        <h2>3. Utilisation des informations</h2>
        <p>
          Les informations que nous collectons peuvent être utilisées pour :
        </p>
        <ul>
          <li>Améliorer notre site web et votre expérience utilisateur</li>
          <li>Répondre à vos questions et demandes de support</li>
          <li>
            Vous envoyer des mises à jour, des promotions et des notifications
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Partage des informations</h2>
        <p>
          Nous ne vendons, n'échangeons ni ne louons vos informations
          personnelles à des tiers. Nous pouvons partager des informations avec
          des fournisseurs de services tiers de confiance qui nous aident à
          exploiter notre site web, mener nos affaires ou vous servir, tant que
          ces parties acceptent de garder ces informations confidentielles.
        </p>
      </section>

      <section>
        <h2>5. Sécurité des informations</h2>
        <p>
          Nous mettons en œuvre une variété de mesures de sécurité pour protéger
          vos informations personnelles. Cependant, aucune méthode de
          transmission sur Internet ou de stockage électronique n'est sécurisée
          à 100%, et nous ne pouvons garantir une sécurité absolue.
        </p>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre
          site. Un cookie est un petit fichier texte que notre site envoie à
          votre navigateur et qui est stocké sur votre appareil. Vous pouvez
          choisir de désactiver les cookies via les paramètres de votre
          navigateur, mais cela peut affecter la fonctionnalité de notre site.
        </p>
      </section>

      <section>
        <h2>7. Modifications de cette politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications prendront effet dès
          leur publication sur cette page. Nous vous encourageons à consulter
          cette politique régulièrement pour être informé de toute mise à jour.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de
          confidentialité, veuillez nous contacter à l'adresse suivante :{" "}
          <a href="mailto:bonjour@oiseurope.com">bonjour@oiseurope.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Politique;
