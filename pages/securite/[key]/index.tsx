// pages/securite/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import SecureInfrastructure from "../../../src/app/components/securite/item";

interface SecuriteItemProps {
  itemKey: string;
}

const SecuriteItem: NextPage<SecuriteItemProps> = ({ itemKey }) => {
  return (
    <main>
      <SecureInfrastructure itemKey={itemKey} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { key } = context.params as { key: string };
  return {
    props: { itemKey: key }, // Rename the prop to itemKey
  };
};

export default SecuriteItem;
