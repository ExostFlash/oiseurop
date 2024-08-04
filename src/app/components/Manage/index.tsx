"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const names = [
  {
    heading: "Sécurité",
    link: "securite",
    items: [
      {
        name: "Sécurisation de l'Infrastructure",
        link: "securisation-infrastructure",
      },
      { name: "Protection Contre les Attaques", link: "protection-attaques" },
      { name: "Sécurité des Applications", link: "securite-applications" },
      {
        name: "Gestion des Accès et des Identités",
        link: "gestion-acces-identites",
      },
      { name: "Protection des Données", link: "protection-donnees" },
      {
        name: "Surveillance et Journalisation",
        link: "surveillance-journalisation",
      },
      { name: "Tests de Sécurité", link: "tests-securite" },
      { name: "Politiques de Sécurité", link: "politiques-securite" },
      {
        name: "Formation et Sensibilisation",
        link: "formation-sensibilisation",
      },
      { name: "Gestion des Incidents", link: "gestion-incidents" },
    ],
  },
  {
    heading: "Hébergement",
    link: "hebergement",
    items: [
      {
        name: "Hébergement Cloud Sécurisé",
        link: "hebergement-cloud-securise",
      },
      {
        name: "Sauvegarde et Restauration des Données",
        link: "sauvegarde-restauration-donnees",
      },
      {
        name: "Optimisation de l'Infrastructure Cloud",
        link: "optimisation-infrastructure-cloud",
      },
      {
        name: "Administration et Gestion des Serveurs",
        link: "administration-gestion-serveurs",
      },
      { name: "Expert VMWare", link: "expert-vmware" },
      {
        name: "Surveillance et Maintenance 24/7",
        link: "surveillance-maintenance-247",
      },
      {
        name: "Gestion des Performances et du Trafic",
        link: "gestion-performances-trafic",
      },
    ],
  },
  {
    heading: "Développement et Web",
    link: "web",
    items: [
      { name: "Base de données", link: "base-donnees" },
      {
        name: "Développement de solutions backend",
        link: "developpement-solutions-backend",
      },
      { name: "Création de site web", link: "creation-site-web" },
      {
        name: "Sécurité et Gestion des Données",
        link: "securite-gestion-donnees",
      },
      { name: "UI/UX Design", link: "ui-ux-design" },
      {
        name: "Optimisation des Performances",
        link: "optimisation-performances",
      },
      { name: "Tests et Assurance Qualité", link: "tests-assurance-qualite" },
      {
        name: "Maintenance et Support Continus",
        link: "maintenance-support-continus",
      },
      {
        name: "Adaptabilité aux Nouvelles Technologies",
        link: "adaptabilite-nouvelles-technologies",
      },
    ],
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
          {names.map((category, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{category.heading}</h4>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <ul className="text-sm font-medium text-darkgrey mb-3 mt-6 text-left">
                {category.items.map((item, index) => (
                  <li key={index} className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    <Link href={`/${category.link}#${item.link}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
