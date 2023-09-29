import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";
import Image from "next/image";
import FirstStatus from "components/FirstStatus";
import ThirdtStatus from "components/ThirdStatus";
import SecondStatus from "components/SecondStatus";

export const TestingstatesView: FC = ({}) => {
  const { publicKey } = useWallet();
  
  const onClick = () => {};

  return (
        <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div>
        <Header />
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-2 flex flex-col gap-2">
            
                <h1>View Page</h1>

                <h2>Normal Status:</h2>
                
                <div>
                <div className="card mb-2 bg-white bg-opacity-10 ">
                    <div className="card-body ">
                        <FirstStatus />
                        {publicKey && (
                                <div className="card mb-5 h-40 w-30 bg-white bg-opacity-10 ">
                                <div className="flex flex-row">
                                    <div className="card-body">
                                    <p>Participating as</p>
                                    <div className="flex flex-row items-center gap-2 avatar placeholder">
                                        <div className="bg-neutral-focus mt-5 text-neutral-content rounded-full">
                                        <Image
                                            src={"/default-avatar.png"}
                                            alt="Avatar"
                                            width={60}
                                            height={60}
                                            className="rounded-full"
                                        />
                                        </div>
                                        <h2 className="text-xl font-display font-normal text-white">
                                        @Dev
                                        </h2>
                                        <h3 className="text-gray-200">
                                        {publicKey ? (
                                            <>
                                            Your address:{" "}
                                            {publicKey.toBase58().slice(0, 8) + "..."}
                                            </>
                                        ) : (
                                            "0xaddr...xyz"
                                        )}
                                        </h3>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )}
                            <button
                                className={
                                "btn " + (publicKey ? "btn-success" : "btn-disabled")
                                }
                            >
                                {publicKey ? "Accept Task" : "Connect Wallet"}
                            </button>
                    </div>
                </div>

                <div className="card mb-2 bg-white bg-opacity-10 ">
                    <div className="card-body">
                        <SecondStatus />
                        <button
                            className={
                            "btn " + (publicKey ? "btn-error" : "btn-disabled")
                            }
                        >
                            {publicKey ? "Submit solution" : "Connect Wallet"}
                        </button>
                    </div>
                </div>
               

                <ThirdtStatus />

                    
                </div>
            </div>
        </div>

                          
        </div>    
    </div>
  );
};

