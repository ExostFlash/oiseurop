// pages/securite/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import SecureInfrastructure from "../../src/app/components/securite/item";

const SecuriteItem: NextPage = () => {
  return (
    <main>
      <SecureInfrastructure />
    </main>
  );
};

export default SecuriteItem;
