// pages/web/[key]/index.tsx
import { NextPage, GetServerSideProps } from "next";
import WebInfrastructure from "../../src/app/components/web/item";

const WebItem: NextPage = () => {
  return (
    <main>
      <WebInfrastructure />
    </main>
  );
};

export default WebItem;
