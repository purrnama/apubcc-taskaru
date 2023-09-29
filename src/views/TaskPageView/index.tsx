import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";
import Image from "next/image";

export const TaskPageView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  //<p style="text-align: left;">This text is aligned to the left.</p>

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
                    <button className="btn btn-outline">View on Github</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-300 bg-white bg-opacity-5 shadow-xl">
          <div className="card-body">
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-3 card w-30 mb-5 bg-white bg-opacity-10 ">
                <div className="card-body">
                  <h2 className="card-title  mt-5 mb-5">Issue Description: </h2>
                    <p className="justify-text">
                      We are looking to enhance our website by adding a new React
                      component, [Component Name], to improve the user experience
                      and provide additional functionality. This component will
                      [briefly describe the purpose and functionality of the
                      component].
                    </p>
                  <h2 className="card-title mt-5 mb-5">Expected Behaviour Criteria:</h2>
                    <p> • When [describe how the component should behave], it should [describe the expected behavior].</p>
                    <p className="justify-text"> • [Add any other specific expected behaviors here].</p>
                    <h2 className="justify-text mt-5 mb-5"> Designs and Mockups: [ applicable, provide links or attachments to any design mockups or wireframes that illustrate how the new component should look and function].</h2>
                  <h2 className="card-title mt-5 mb-5">Implementation Details:</h2>
                    <p>• Create a new React component named (Component Name).</p>
                    <p className="justify-text">• Integrate the component into the appropriate page(s) within the website.</p>
                    <p className="justify-text">• Ensure that the component is responsive and functions seamlessly across different devices and screen sizes.</p>
                    <p className="justify-text">• Implement any necessary CSS or styling to match the website's design.</p>
                  <h2 className="card-title mt-5 mb-5">Acceptance Criteria:</h2>
                    <p className="justify-text">• The new component should be fully functional and free of any errors or bugs.</p>
                    <p className="justify-text">• It should be well-documented, including clear comments and usage instructions.</p>
                    <p className="justify-text">• The component's code should adhere to our coding standards and best practices.</p>
                    <p className="justify-text">• The component should be visually consistent with the rest of the website.</p>
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <div className="card mb-2 bg-white bg-opacity-10 ">
                  <div className="card-body ">
                    <div className="flex flex-row gap-6">
                      <h2 className="card-title">Bounty</h2>
                      <h3 className="text-xl-1 ml-20 font-display font-normal text-white">
                        700 USDC
                      </h3>
                    </div>
                    <div className="flex flex-row gap-6">
                      <h2 className="card-title mb-8">Participants</h2>
                      <h2 className="text-xl-1 ml-24 font-display font-normal text-white">
                        8
                      </h2>
                    </div>
                    <h2 className="mr-2 mb-2 card-title">Submission period</h2>
                    <p>12 Sep 2030 - 26 Sep 2030</p>
                    <progress
                      className="progress w-56"
                      value="75"
                      max="150"
                    ></progress>
                    <p className="mb-4">14 days remaining</p>
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
                <div className="card w-120 bg-white bg-opacity-10 bg-base-80 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Task Resources</h2>
                    <div className="flex flex-row">
                      <button className="btn btn-block btn-outline bg-white bg-opacity-10">Github Source Code</button>
                    </div>
                    <div className="flex flex-row">
                      <button className="btn btn-block btn-outline bg-white bg-opacity-10">Latte Protocol Documentaion</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
