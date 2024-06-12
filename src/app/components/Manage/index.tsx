"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

const names = [
  {
    heading: "Audit de sécurité",
    item1: "Audit de sécurité",
    item2: "Cybersécurité",
    item3: "Installations et configurations sécurisées",
    item4: "",
    item5: "",
  },
  {
    heading: "Hébergement Cloud",
    item1: "Hébergement Cloud",
    item2: "Sauvegarde des données",
    item3: "Optimisation d'infrastructure",
    item4: "Administration des serveurs",
    item5: "Expert VMWare",
  },
  {
    heading: "Développement et Web",
    item1: "Base de données",
    item2: "Développement de solutions backend",
    item3: "Création de site web",
    item4: "",
    item5: "",
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
                {items.item1 && (
                  <li className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    {items.item1}
                  </li>
                )}
                {items.item2 && (
                  <li className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    {items.item2}
                  </li>
                )}
                {items.item3 && (
                  <li className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    {items.item3}
                  </li>
                )}
                {items.item4 && (
                  <li className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    {items.item4}
                  </li>
                )}
                {items.item5 && (
                  <li className="mb-3 checkmark">
                    <img src="/images/mark.png" alt="mark" />
                    {items.item5}
                  </li>
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
