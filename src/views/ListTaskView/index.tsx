import { ChangeEvent, FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Header from "components/Header";

export const ListTaskView: FC = ({}) => {
  const { publicKey } = useWallet();

  const [value, setValue] = useState("");

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Header />
      <div className="pt-8">
        <div className="min-h-12">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl font-display font-normal text-white mb-12">
                List New Task
              </h1>
            </div>
            <div className="">
              <button className="btn btn-outline btn-gray ml-80">
                View on GitHub
              </button>
            </div>
          </div>
          <p>{publicKey ? <>Your ID: {publicKey.toBase58()}</> : null}</p>
        </div>
      </div>
      <div className="container max-w-2xl mx-auto">
        <div className="card h-50 bg-white bg-opacity-10 shadow-xl">
          <div className="card-body flex flex-col gap-5">
            <div>
              <h1 className="text-white-400 text-xl mb-2 ml-2">Issue Link</h1>
            </div>
            <div className="card h-50 bg-white bg-opacity-10 shadow-xl">
              <div className="card-body">
                <p className="text-gray-400 text-xl">
                  Tasks are created by pulling data from issues in your Github
                  repository. Taskaru will keep track of developments and sync
                  any updates for this issue.
                </p>
              </div>
            </div>
            <div onChange={onChangeValue}>
              <input
                type="link"
                value={value}
                placeholder=""
                className="input input-bordered input-md w-full max-w-2xl mb-20"
              />
            </div>
            <button
              disabled={!Boolean(value)}
              className={
                "btn btn-outline btn-accent btn-block" +
                (Boolean(value) ? "btn-success" : "btn-disabled")
              }
            >
              Comfirm submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
