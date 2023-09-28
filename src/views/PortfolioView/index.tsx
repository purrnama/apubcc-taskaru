import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";
import Image from "next/image";

export const PortfolioView: FC = ({}) => {
  const { publicKey } = useWallet();
  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <div className="pt-2">
          <div className="hero min-h-16 py-4">
            <div className="hero-content">
              <div className="max-w-3xl"></div>
            </div>
          </div>
        </div>
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
                      <>Your address: {publicKey.toBase58()}</>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};