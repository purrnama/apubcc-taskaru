import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Taskaru</title>
        <meta
          name="description"
          content="Explore hundreds of tasks from open-source projects waiting for you to be completed. Harness the speed and creativity of hackathons to rapidly develop and earn for your contributions."
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
