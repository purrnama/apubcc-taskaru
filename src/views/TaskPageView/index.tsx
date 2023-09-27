import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "components/TaskCard";
import Header from "components/Header";

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

        <div className="card w-300 bg-white bg-opacity-5 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row gap-6">
              <div className="card w-30 mb-5 bg-white bg-opacity-10 ">
                <div className="card-body">
                  <h2 className="card-title">Issue Description: </h2>
                  <h2 className="card-title">Expected Behaviour: </h2>
                  <h2 className="mr-2 mb-2 card-title">Implementation Details:</h2>
                  <h2 className="mr-2 mb-2 card-title">Acceptance Criteria:</h2>
                  <p>- The new component should be fully funrtional and free of any errors or bugs.</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="card w-30 mb-5 bg-white bg-opacity-10 ">
                  <div className="card-body">
                    <h2 className="card-title">Bounty</h2>
                    <h2 className="card-title mb-8">Paricipants</h2>
                    <h2 className="mr-2 mb-2 card-title">Submission period</h2>
                    <p>12 Sep 2030 - 26 Sep 2030</p>
                    <progress className="progress w-56" value="75" max="150"></progress>
                    <p>14 days remaining</p>
                    <div className="card mb-5 w-30 bg-white bg-opacity-10 ">
                      <div className="flex flex-row">
                        <div className="card-body">
                          <p>Participating as</p>
                          <div className="flex flex-row gap-2 avatar placeholder">
                            <div className="bg-neutral-focus mt-5 text-neutral-content rounded-full w-12 h-12">
                              <img
                                src="https://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg"
                                alt="Avatar"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            </div>
                            <h2 className="text-1xl mr-4 mt-5 font-display font-normal text-white">@Dev</h2>
                            <h3 className="text-gray-200 mt-7 mb-5">0xaddr...xyz</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-120 h-300 bg-white bg-opacity-10 bg-base-80 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Task Resources</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 my-4">
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
