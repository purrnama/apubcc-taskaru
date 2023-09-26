import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SolanaLogo } from "components";
import styles from "./index.module.css";

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
          <div className = "flex-none">
            <button class="btn btn-ghost">Taskboard</button>
          </div>
          <div className = "flex-none">
            <button class="btn btn-ghost">Task Listing</button>
          </div>
          <div className = "flex-none">
            <button class="btn btn-ghost">Portfolio</button>
          </div>
          <div className="flex-none">
          <WalletMultiButton style={{ backgroundColor: "#FF4874" }} className="btn btn-ghost" />
          </div>

        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Start working now.
                </h1>
                <p className="mb-5">
                Explore hundreds of tasks from open-source projects waiting for you to be completed.
Harness the speed and creativity of hackathons to rapidly develop and earn for your contributions. 
                </p>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h1>
          Active tasks
        </h1>

        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-actions justify-end">
              <button class="btn btn-square btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div class="card-body">
              <h2 class="card-title">Latte Protocol</h2>
              <p>New Component Implementation</p>
              <div class="badge badge-neutral mr-2 mb-2">Next.js</div>
              <div class="badge badge-neutral mr-2 mb-2">Typescript</div>
              <progress class="progress w-56" value="10" max="100"></progress>
              
            </div>
            
        </div>
      </div>
    </div>
  );
};


