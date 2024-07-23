// pages/hebergement/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import HebergementInfrastructure from "../../src/app/components/hebergement/item";

const HebergementItem: NextPage = () => {
  return (
    <main>
      <HebergementInfrastructure />
    </main>
  );
};

export default HebergementItem;
