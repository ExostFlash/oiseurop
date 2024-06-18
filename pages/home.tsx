// pages/home.tsx
import { NextPage } from "next";

import Banner from "../src/app/components/Banner/index";
import Aboutus from "../src/app/components/Aboutus/index";
import Dedicated from "../src/app/components/Dedicated/index";
import Digital from "../src/app/components/Digital/index";
import Beliefs from "../src/app/components/Beliefs/index";
import Wework from "../src/app/components/Wework/index";
import Ourteam from "../src/app/components/Ourteam/index";
import Featured from "../src/app/components/Featured/index";
import Manage from "../src/app/components/Manage/index";
import FAQ from "../src/app/components/FAQ/index";
import Testimonials from "../src/app/components/Testimonials/index";
import Articles from "../src/app/components/Articles/index";
import Joinus from "../src/app/components/Joinus/index";
import Insta from "../src/app/components/Insta/index";

const Home: NextPage = () => {
  return (
    <main>
      <Banner />
      <Aboutus />
      {/* <Dedicated /> */}
      {/* <Digital /> */}
      {/* <Beliefs /> */}
      <Wework />
      {/* <Ourteam /> */}
      {/* <Featured /> */}
      <Manage />
      {/* <FAQ /> */}
      <Testimonials />
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
    </main>
  );
};

export default Home;
