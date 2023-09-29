import { ChangeEvent, FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Header from "components/Header";
import TaskHeader from "components/TaskHeader";

export const SubmissionView: FC = ({}) => {
  const { publicKey } = useWallet();
  const [value, setValue] = useState("");

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
    </div>
  );
};
