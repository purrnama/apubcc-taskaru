import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Header from "components/Header";
import TaskHeader from "components/TaskHeader";
import TaskPageForm from "components/TaskPageForm";
import { AcceptTask, ForfeitTask, GetTaskStatus } from "solang/TaskaruSolang";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";

export const TaskPageView: FC = ({}) => {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isShowFetchingModal, setIsShowFetchingModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const wallet = useAnchorWallet();
  const publicKey = wallet?.publicKey;
  const { connection } = useConnection();

  const onClickAcceptTask = () => {
    if (!wallet) return;
    AcceptTask(wallet, connection)
      .then(() => setAccepted(true))
      .catch((e) => {
        console.log(e);
      });
  };
  const onClickForfeitTask = () => {
    if (!wallet) return;
    ForfeitTask(wallet, connection)
      .then(() => setAccepted(false))
      .catch((e) => {
        console.log(e);
      });
  };

  const onClickSubmitTask = () => {
    router.push("/submission");
  };

  const checkTaskStatus = () => {
    if (!wallet) return;
    if (isInitialized) return;
    setIsShowFetchingModal(true);
    GetTaskStatus(wallet, connection)
      .then((result) => {
        if (!result) return;
        setAccepted(result.isAcceptedTask);
        setSubmitted(result.isSubmittedSolution);
        setIsInitialized(true);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsShowFetchingModal(false);
      });
  };

  useEffect(() => {
    if (wallet?.publicKey) {
      checkTaskStatus();
    }
  }, [wallet]);

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
                  submitted={submitted}
                  initialized={isInitialized}
                  onClickSubmitTask={onClickSubmitTask}
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

      <Dialog
        as="div"
        className={"relative z-10"}
        open={isShowFetchingModal}
        onClose={() => setIsShowFetchingModal(false)}
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
                  Fetching data
                </Dialog.Title>

                <p className="text-lg font-sans">
                  Sign the transaction to fetch accept status from your account
                  data.
                </p>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
