import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";

export const SubmissionView: FC = ({}) => {
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
                <h1 className="mb-13 text-2xl font-display ">
                  Latte Protocol: New Component Implementation
                </h1>
                <div className="flex flex-row gap-8 pt-2 mb-4">
                  <div className="badge badge-accent"> Active </div>
                  <p className="gap-2 mb-5"> Task opened 3 days ago </p>
                    <div className=" mb-2" style={{ marginLeft: "270px" }}>
                      <div className="badge badge-outline">View on Github</div>
                    </div>
                </div>
                <p>
                  {publicKey ? <>Your ID: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-2xl mx-auto">
          <div className="card h-50 bg-white bg-opacity-10 shadow-xl">
            <div className="card-body flex flex-col gap-4">
            <div className="flex flex-row justify-between">
                <div>
                  <h1 className="text-3xl font-display font-normal text-white mb-16">Submit solution</h1>
                </div>
                <div className="flex items starts">
                  <button className="btn btn-square btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-xl">Pull request link</p>
              <div>
                <input type="link" placeholder="https://github.com/latte/monorepo/pull/1460" className="input input-bordered input-md w-full max-w-2xl" />
              </div>
              <button className="btn btn-outline btn-accent btn-block">Comfirm submission</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
