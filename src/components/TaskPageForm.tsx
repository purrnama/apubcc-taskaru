import Image from "next/image";

export default function TaskPageForm({
  publicKey,
  accepted,
  onClickAcceptTask,
  onClickForfeitTask,
  onClickSubmitTask,
}: {
  publicKey?: string;
  accepted: boolean;
  onClickAcceptTask?: () => void;
  onClickForfeitTask?: () => void;
  onClickSubmitTask?: () => void;
}) {
  return (
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
        {!accepted && (
          <>
            <h2 className="mr-2 mb-2 card-title">Submission period</h2>
            <p>12 Sep 2030 - 26 Sep 2030</p>
            <progress className="progress w-56" value="75" max="150"></progress>
            <p className="mb-4">14 days remaining</p>
          </>
        )}
        {publicKey && !accepted && (
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
                      <>Your address: {publicKey.slice(0, 8) + "..."}</>
                    ) : (
                      "0xaddr...xyz"
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {Boolean(!publicKey || !accepted) && (
          <button
            onClick={onClickAcceptTask}
            className={"btn " + (publicKey ? "btn-primary" : "btn-disabled")}
          >
            {publicKey ? "Accept Task" : "Connect Wallet"}
          </button>
        )}
        {publicKey && accepted && (
          <>
            <h2 className="card-title  ml-12">Time to left to submit</h2>
            <h2 className="text-3xl ml-20 mb-8  font-normal text-white">
              14d:10h:12m
            </h2>
            <button
              onClick={onClickSubmitTask}
              className={"btn " + (publicKey ? "btn-success" : "btn-disabled")}
            >
              Submit Solution
            </button>
            <button
              onClick={onClickForfeitTask}
              className={"btn " + (publicKey ? "btn-error" : "btn-disabled")}
            >
              Forfeit Task
            </button>
          </>
        )}
      </div>
    </div>
  );
}
