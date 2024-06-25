// pages/hebergement/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import HebergementInfrastructure from "../../../src/app/components/hebergement/item";

interface HebergementItemProps {
  itemKey: string;
}

const HebergementItem: NextPage<HebergementItemProps> = ({ itemKey }) => {
  return (
    <main>
      <HebergementInfrastructure itemKey={itemKey} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { key } = context.params as { key: string };
  return {
    props: { itemKey: key }, // Rename the prop to itemKey
  };
};

export default HebergementItem;
