import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <div className="pt-2">
          <div className="hero min-h-16 py-4">
            <div className="hero-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-display">
                  Start working now.
                </h1>
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

        <h1 className="text-2xl font-display">Active tasks</h1>
        <div className="flex flex-row gap-4 my-4">
          <TaskCard
            title="Latte Protocol"
            description="New Component Implementation"
            color="#FFD874"
            progressValue={15}
            remainingDay={24}
            href="/taskpage"
          />
          <TaskCard
            title="Matcha Client"
            description="Fix issues"
            color="#C2FF74"
            progressValue={75}
            remainingDay={5}
          />
        </div>
      </div>
    </div>
  );
};
