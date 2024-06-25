// pages/web/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import WebInfrastructure from "../../../src/app/components/web/item";

interface WebItemProps {
  itemKey: string;
}

const WebItem: NextPage<WebItemProps> = ({ itemKey }) => {
  return (
    <main>
      <WebInfrastructure itemKey={itemKey} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { key } = context.params as { key: string };
  return {
    props: { itemKey: key }, // Rename the prop to itemKey
  };
};

export default WebItem;
