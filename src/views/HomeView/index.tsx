import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";
import Image from "next/image";
import { fetchAndParseData } from "solang/DeserializeAccountData";
import { Dialog } from "@headlessui/react";
import { InitializeAccountData } from "solang/TaskaruSolang";

export const HomeView: FC = ({}) => {
  const [isShowWelcomeModal, setIsShowWelcomeModal] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  useEffect(() => {
    async function fetchAccountData() {
      console.log("check wallet data");
      if (!wallet) return null;
      const data = await fetchAndParseData(wallet.publicKey, connection);
      console.log(data);
      if (!data && !isSkipped) {
        console.log("show welcome modal");
        setIsShowWelcomeModal(true);
      } else {
        console.log("data already available");
      }
    }
    if (wallet) {
      fetchAccountData();
    }
  }, [wallet]);

  const onClickInitializeData = () => {
    if (!wallet) return;
    InitializeAccountData(wallet, connection)
      .then(() => setIsShowWelcomeModal(false))
      .catch((e) => {
        console.log(e);
      });
  };
  const onClickSkip = () => {
    setIsShowWelcomeModal(false);
    setIsSkipped(true);
  };

  const onClickRequestAirdrop = async () => {
    if (!wallet) {
      console.log("request airdrop: wallet not connected");
      return;
    }
    const tx = await connection.requestAirdrop(wallet.publicKey, 1000000000);
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0 relative">
      <div>
        <Header />
        <div className="pt-2">
          <div className="hero min-h-16 py-4 relative">
            <div className="absolute top-0 left-20">
              <Image
                src={"/blob.png"}
                alt="decorative blob"
                height={558 / 1.5}
                width={638 / 1.5}
                priority
              />
            </div>
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

      <Dialog
        as="div"
        className={"relative z-10"}
        open={isShowWelcomeModal}
        onClose={() => setIsShowWelcomeModal(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-20" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel
              className={
                "w-full max-w-xl overflow-hidden rounded-lg bg-neutral-800 px-8 py-6 text-left align-middle shadow-xl"
              }
            >
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <Dialog.Title className={"font-display text-3xl"}>
                    Welcome to Taskaru!
                  </Dialog.Title>
                  <Dialog.Description className={"font-display text-lg"}>
                    Ready to start working?
                  </Dialog.Description>
                </div>

                <p className="text-lg font-sans">
                  Looks like this account is new. In order to start your
                  developer journey, you need to initialize your portfolio on
                  the blockchain. A small amount of SOL will be used to pay for
                  renting space.
                </p>
              </div>

              <button
                className="btn btn-success"
                onClick={onClickInitializeData}
              >
                Let&apos;s go
              </button>
              <button
                className="btn btn-secondary"
                onClick={onClickRequestAirdrop}
              >
                Airdrop 1 Test Sol
              </button>
              <button className="btn btn-error" onClick={onClickSkip}>
                Skip
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
