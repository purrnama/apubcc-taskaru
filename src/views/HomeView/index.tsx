import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SolanaLogo } from "components";
import styles from "./index.module.css";
import TaskCard from "components/TaskCard";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Taskaru</span>
          </div>

          {/* Added Button code here*/}
          <div className="flex-none">
            <button className="btn btn-ghost">Taskboard</button>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost">Task Listing</button>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost">Portfolio</button>
          </div>
          <div className="flex-none">
            <WalletMultiButton
              style={{ backgroundColor: "#FF4874" }}
              className="btn btn-ghost"
            />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">Start working now.</h1>
                <p className="mb-5">
                  Explore hundreds of tasks from open-source projects waiting
                  for you to be completed. Harness the speed and creativity of
                  hackathons to rapidly develop and earn for your contributions.
                </p>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1>Active tasks</h1>
        <div className="flex flex-row gap-4">
          <TaskCard
            title="Latte Protocol"
            description="New Component Implementation"
          />
          <TaskCard title="Matcha Client" description="Fix issues" />
        </div>
      </div>
    </div>
  );
};
