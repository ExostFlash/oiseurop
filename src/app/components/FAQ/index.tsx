"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 rounded-2xl my-16"
    >
      <h3 className="text-xl font-normal text-black text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-black">
        Question fréquentes.
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-black py-8 px-6 mb-5 text-white">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    Comment protéger mon infrastructure contre les attaques les
                    plus courantes ?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-normal opacity-50">
                  Pour protéger votre infrastructure contre les attaques
                  courantes, il est essentiel de mettre en place des pare-feu
                  robustes, utiliser des systèmes de détection et de prévention
                  des intrusions (IDS/IPS), et implémenter une segmentation
                  réseau pour limiter les mouvements latéraux des attaquants.
                  Assurez-vous également que tous les systèmes et logiciels sont
                  régulièrement mis à jour avec les derniers correctifs de
                  sécurité, et effectuez des audits de sécurité fréquents.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-black py-8 px-6 mb-5 text-white">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    Quels sont les avantages de l'hébergement cloud sécurisé par
                    rapport à l'hébergement traditionnel ?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-normal opacity-50">
                  L'hébergement cloud sécurisé offre une meilleure flexibilité
                  et évolutivité, permettant d'adapter facilement les ressources
                  aux besoins changeants de votre entreprise. Il offre également
                  une disponibilité élevée grâce à la redondance et la
                  réplication des données. De plus, les fournisseurs de cloud
                  mettent en place des mesures de sécurité avancées et des
                  protocoles de sauvegarde et de récupération des données, ce
                  qui assure une protection optimale contre les pertes de
                  données et les cyberattaques.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-black py-8 px-6 text-white">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    Quels sont les principaux risques de sécurité des
                    applications web et comment les atténuer ?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-normal opacity-50">
                  Les principaux risques de sécurité des applications web
                  incluent les injections SQL, les scripts intersites (XSS), et
                  les failles de gestion des sessions. Pour atténuer ces
                  risques, il est crucial de valider et de filtrer toutes les
                  entrées utilisateurs, d'utiliser des requêtes préparées pour
                  les bases de données, de mettre en place des contrôles d'accès
                  stricts et des politiques de gestion des sessions sécurisées.
                  De plus, effectuer régulièrement des tests de pénétration et
                  des audits de sécurité permet d'identifier et de corriger les
                  vulnérabilités avant qu'elles ne soient exploitées par des
                  attaquants.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
