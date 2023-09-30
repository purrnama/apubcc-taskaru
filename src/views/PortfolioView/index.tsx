import { FC, useState } from "react";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";
import Image from "next/image";
import { ResetAllData } from "solang/TaskaruSolang";
import { Dialog } from "@headlessui/react";

export const PortfolioView: FC = ({}) => {
  const { publicKey } = useWallet();

  const wallet = useAnchorWallet();
  const { connection } = useConnection();

  const [isShowResetModal, setIsShowResetModal] = useState(false);

  const onClickResetAll = () => {
    if (!wallet) return;
    setIsShowResetModal(true);
    ResetAllData(wallet, connection).then(() => {
      setIsShowResetModal(false);
    });
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <div className="h-16"></div>
        <div className="container max-w-5xl mx-auto">
          <h1 className="mb-4 text-4xl font-display">Welcome back!</h1>
          <div className="card h-50 bg-white bg-opacity-10 shadow-xl">
            <div className="card-body">
              <div className="grid grid-cols-3">
                <div className="">
                  <Image
                    src={"/default-avatar.png"}
                    alt="Avatar"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                  <h2 className="text-3xl font-display font-normal text-white">
                    @Dev
                  </h2>
                  <h3 className="text-gray-200">
                    {publicKey ? (
                      <>{publicKey.toBase58().slice(0, 8) + "..."}</>
                    ) : (
                      "0xaddr...xyz"
                    )}
                  </h3>
                </div>
                <div className="col-span-2 flex flex-col gap-8">
                  <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center">
                      <div className="avatar placeholder">
                        <div className="bg-pink-500 text-neutral-content rounded-full w-8 h-8 ml-2">
                          <span className="text-xs font-display">T</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-400 text-xl">810</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="avatar placeholder">
                        <div className="bg-pink-500 text-neutral-content rounded-full w-8 h-8 ml-2">
                          <span className="text-xs font-display">R</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-400 text-xl">2600</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-display font-normal text-white">
                        Tasks completed
                      </h3>
                      <p className="font-sans text-xl">8</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-display font-normal text-white">
                        Projects involved
                      </h3>
                      <div className="flex flex-row gap-2">
                        <div className="w-8 h-8 rounded-md bg-green-400"></div>
                        <div className="w-8 h-8 rounded-md bg-yellow-300"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-display font-normal text-white">
                        Total earned
                      </h3>
                      <p className="font-sans text-xl">1600 USDC</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-display text-xl">Contributions</h1>
                    <div className="w-full h-[100px] bg-neutral bg-opacity-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-display mt-4 mb-1">Working on</h1>
          <div className="flex flex-row gap-1 my-4">
            <TaskCard
              title="Latte Protocol"
              description="New Component Implementation"
              color="#FFD874"
              progressValue={30}
              remainingDay={14}
              href="/taskpage"
            />
          </div>
        </div>
      </div>
      <button onClick={onClickResetAll} className="btn btn-error">
        Reset all data
      </button>

      <Dialog
        as="div"
        className={"relative z-10"}
        open={isShowResetModal}
        onClose={() => setIsShowResetModal(false)}
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
                <Dialog.Title className={"font-display text-3xl"}>
                  Reset data
                </Dialog.Title>

                <p className="text-lg font-sans">
                  This will reset all the data in your account. For debugging
                  purposes only.
                </p>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
