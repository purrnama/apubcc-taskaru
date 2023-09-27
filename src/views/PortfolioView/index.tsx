import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";

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
              <div className="max-w-3xl">
                <h1 className="mb-1 text-3xl font-display" style={{textAlign: 'left'}}>
                  Welcome back!
                </h1>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card h-50 w-70 bg-white bg-opacity-10 shadow-xl">
          <div className="card-body h-80 w-80">
            <div className="flex mb-10">
              <div className="flex flex-col gap-8 avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                  <img
                    src="https://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg"
                    alt="Avatar"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-1xl font-display font-normal text-white">@Dev</h2>
                <h3 className="text-gray-200 -mt-8">0xaddr...xyz</h3>
              </div>
              <div className="flex flex-row items-center ml-12 -mt-24"> 
              </div>
                <div className="avatar placeholder ml-4">
                  <div className="bg-pink-500 text-neutral-content rounded-full w-6 h-6 ml-2">
                    <span className="text-xs">T</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400">810</p>
                </div>
                <div className="avatar placeholder ml-16">
                  <div className="bg-pink-500 text-neutral-content rounded-full w-6 h-6 ml-2">
                    <span className="text-xs">P</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400">2,600</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 avatar placeholder">
            </div>
            <div className="flex flex-row items-center ml-6 -mt-24"> 
              <h3 className="text-1xl font-display font-normal text-white ml-36 -mt-28">Tasks completed</h3>
              <h4 className="text-1xl font-display font-normal text-white ml-36 -mt-28">Projects involved</h4>
              <h5 className="text-1xl font-display font-normal text-white ml-36 -mt-28">Total earned</h5>
            </div>
            <div className="flex flex-row items-center gap-1 ml-44 -mt-14"> 
              <p className="text-white-400">8</p>
              <div className="flex flex-row items-center gap-1 ml-56 -mt-8"> 
              <button className="btn btn-info mt-16 px-4 py-4"></button>
              <button className="btn btn-success mt-16 px-4 py-4"></button>
              </div>
              <p className="text-white-400 ml-40 mt-8 mr-auto">1,600 USDC</p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-display mt-4 mb-1">Working on</h1>
        <div className="flex flex-row gap-1 my-4">
          <TaskCard
            title="Latte Protocol"
            description="New Component Implementation"/>
        </div>
      </div>
    </div>
  );
};
