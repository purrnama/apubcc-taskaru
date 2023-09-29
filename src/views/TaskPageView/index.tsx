import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Header from "components/Header";
import TaskHeader from "components/TaskHeader";
import TaskPageForm from "components/TaskPageForm";

export const TaskPageView: FC = ({}) => {
  const { publicKey } = useWallet();
  const [accepted, setAccepted] = useState(false);
  const onClick = () => {};

  const onClickAcceptTask = () => {
    setAccepted(true);
  };
  const onClickForfeitTask = () => {
    setAccepted(false);
  };

  //<p style="text-align: left;">This text is aligned to the left.</p>

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <TaskHeader />

        <div className="card w-300 bg-white bg-opacity-5 shadow-xl relative">
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
                  <h2 className="card-title mt-5 mb-5">
                    Expected Behaviour Criteria:
                  </h2>
                  <p>
                    • When [describe how the component should behave], it should
                    [describe the expected behavior].
                  </p>
                  <p className="justify-text">
                    • [Add any other specific expected behaviors here].
                  </p>
                  <h2 className="justify-text mt-5 mb-5">
                    Designs and Mockups: [ applicable, provide links or
                    attachments to any design mockups or wireframes that
                    illustrate how the new component should look and function].
                  </h2>
                  <h2 className="card-title mt-5 mb-5">
                    Implementation Details:
                  </h2>
                  <p>• Create a new React component named (Component Name).</p>
                  <p className="justify-text">
                    • Integrate the component into the appropriate page(s)
                    within the website.
                  </p>
                  <p className="justify-text">
                    • Ensure that the component is responsive and functions
                    seamlessly across different devices and screen sizes.
                  </p>
                  <p className="justify-text">
                    • Implement any necessary CSS or styling to match the
                    website&apos;s design.
                  </p>
                  <h2 className="card-title mt-5 mb-5">Acceptance Criteria:</h2>
                  <p className="justify-text">
                    • The new component should be fully functional and free of
                    any errors or bugs.
                  </p>
                  <p className="justify-text">
                    • It should be well-documented, including clear comments and
                    usage instructions.
                  </p>
                  <p className="justify-text">
                    • The component&apos;s code should adhere to our coding
                    standards and best practices.
                  </p>
                  <p className="justify-text">
                    • The component should be visually consistent with the rest
                    of the website.
                  </p>
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <TaskPageForm
                  publicKey={publicKey?.toBase58()}
                  accepted={accepted}
                  onClickAcceptTask={onClickAcceptTask}
                  onClickForfeitTask={onClickForfeitTask}
                />
                <div className="card w-120 bg-white bg-opacity-10 bg-base-80 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Task Resources</h2>
                    <div className="flex flex-row">
                      <button className="btn btn-block btn-outline bg-white bg-opacity-10">
                        Github Source Code
                      </button>
                    </div>
                    <div className="flex flex-row">
                      <button className="btn btn-block btn-outline bg-white bg-opacity-10">
                        Latte Protocol Documentaion
                      </button>
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
