import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "OIS Europe c'est quoi ?",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Outsource Information Systems Europe est une filiale de Outsource Information Systems, une entreprise de services informatiques créée aux États-Unis en 2003. Nous sommes spécialisés dans la fourniture de solutions technologiques innovantes et de qualité pour répondre aux besoins spécifiques de nos clients.",
    link: "Learn more",
  },
  {
    heading: "Expertise et Clients",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Nous possédons une vaste expérience dans les domaines de l'infrastructure serveurs, du cloud, du réseau, de VMWare, de Veeam Backup, d'Office 365, de CloudFlare, de l'automatisation, de l'intégration et du développement back-end full stack sur Windows. Parmi nos clients de renom, nous comptons des entreprises telles que Dakine, Billabong, RVCA, Porcelanosa USA, TRX, Brixton, Mervin et Huff. Nous fournissons des solutions personnalisées et fiables pour répondre aux besoins spécifiques de chaque client, qu'il s'agisse d'infrastructure serveurs, de développement d'applications, ou de gestion des données et de la sécurité.",
    link: "Learn more",
  },
  {
    heading: "Nos engagement",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Nous avons mis en place des processus d'automatisation pour améliorer l'efficacité opérationnelle de nos clients. Notre objectif est de proposer des solutions technologiques à la pointe de l'innovation, contribuant ainsi à la réussite de nos partenaires. Nous nous engageons à offrir des services de qualité pour assurer la satisfaction et le succès de nos clients.",
    link: "Learn more",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue text-lg tracking-widest">
          À propos de nous
        </h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold">
          En savoir plus sur nous.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
