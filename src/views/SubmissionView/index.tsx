import { ChangeEvent, FC, useState } from "react";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Header from "components/Header";
import TaskHeader from "components/TaskHeader";
import { SubmitSolution } from "solang/TaskaruSolang";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

export const SubmissionView: FC = ({}) => {
  const router = useRouter();
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [value, setValue] = useState("");
  const [isShowThankYouModal, setIsShowThankYouModal] = useState(false);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickSubmitSolution = () => {
    if (!wallet) return;
    SubmitSolution(wallet, connection)
      .then(() => {
        setIsShowThankYouModal(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const onClickReturn = () => {
    router.push("/taskpage");
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <TaskHeader />
        <div className="container max-w-2xl mx-auto">
          <div className="card h-50 bg-white bg-opacity-10 shadow-xl">
            <div className="card-body flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <div>
                  <h1 className="text-3xl font-display font-normal text-white mb-16">
                    Submit solution
                  </h1>
                </div>
              </div>
              <p className="text-gray-400 text-xl">Pull request link</p>
              <div onChange={onChangeValue}>
                <input
                  type="link"
                  value={value}
                  placeholder=""
                  className="input input-bordered input-md w-full max-w-2xl"
                />
              </div>
              <button
                onClick={onClickSubmitSolution}
                disabled={!Boolean(value)}
                className={
                  "btn btn-block " +
                  (Boolean(value) ? "btn-success" : "btn-disabled")
                }
              >
                Confirm submission
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className={"relative z-10"}
        open={isShowThankYouModal}
        onClose={() => setIsShowThankYouModal(false)}
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
                  Thank you!
                </Dialog.Title>

                <p className="text-lg font-sans">
                  Your solution has been submitted. Thank you for contributing!
                </p>
              </div>

              <button className="btn btn-primary" onClick={onClickReturn}>
                Return
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
