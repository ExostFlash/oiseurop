"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const names = [
  {
    heading: "Sécurité",
    link: "securite",
    item1: "Sécurisation de l'Infrastructure",
    item2: "Protection Contre les Attaques",
    item3: "Sécurité des Applications",
    item4: "Gestion des Accès et des Identités",
    item5: "Protection des Données",
    item6: "Surveillance et Journalisation",
    item7: "Tests de Sécurité",
    item8: "Politiques de Sécurité",
    item9: "Formation et Sensibilisation",
    item10: "Gestion des Incidents",
  },
  {
    heading: "Hébergement",
    link: "hebergement",
    item1: "Hébergement Cloud Sécurisé",
    item2: "Sauvegarde et Restauration des Données",
    item3: "Optimisation de l'Infrastructure Cloud",
    item4: "Administration et Gestion des Serveurs",
    item5: "Expert VMWare",
    item6: "Surveillance et Maintenance 24/7",
    item7: "Gestion des Performances et du Trafic",
  },
  {
    heading: "Développement et Web",
    link: "web",
    item1: "Base de données",
    item2: "Développement de solutions backend",
    item3: "Création de site web",
    item4: "Sécurité et Gestion des Données",
    item5: "UI/UX Design",
    item6: "Optimisation des Performances",
    item7: "Tests et Assurance Qualité",
    item8: "Maintenance et Support Continus",
    item9: "Adaptabilité aux Nouvelles Technologies",
  },
];

const Manage = () => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Nos Services.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {names.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <ul className="text-sm font-medium text-darkgrey mb-3 mt-6 text-left">
                {Object.keys(items)
                  .filter((key) => key !== "heading" && key !== "link")
                  .map(
                    (key) =>
                      items[key] && (
                        <li key={key} className="mb-3 checkmark">
                          <img src="/images/mark.png" alt="mark" />
                          <Link href={`/${items.link}/${key}`}>
                            {items[key]}
                          </Link>
                        </li>
                      )
                  )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
