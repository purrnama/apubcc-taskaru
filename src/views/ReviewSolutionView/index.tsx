import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import ReviewSolutionCard from "components/ReviewSolutionCard";
import Header from "components/Header";
import TaskHeader from "components/TaskHeader";

export const ReviewSolutionView: FC = ({}) => {
  const { publicKey } = useWallet();
  const [value, setValue] = useState(false);

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div>
        <Header />
        <TaskHeader />
        <div className="card-body">
          <div className="flex flex-col gap-6">
            <div className="card w-30 mb-5 bg-white bg-opacity-10 ">
              <div className="card-body">
                <h2 className="mb-13 text-2xl font-display">
                  Review solutions{" "}
                </h2>
                <p>
                  Inspect each solution and provide a rating based on its
                  implementation, documentation and code quality.
                </p>
                <br></br>
                <p>
                  <strong>Great</strong> : Code accomplishes all task criteria
                  with distinction and well documented.
                </p>
                <p>
                  <strong>Good</strong> : Code satisfies task, documentation
                  provided.
                </p>
                <p>
                  <strong>Poor</strong> : Code does not accomplish task,
                  lackluster documentation.
                </p>
                <br></br>
                <ReviewSolutionCard noSolution={1} />
                <ReviewSolutionCard noSolution={2} />
                <ReviewSolutionCard noSolution={3} />
                <ReviewSolutionCard noSolution={4} />
              </div>
              <div className="flex flex-row ...">
                <input
                  type="checkbox"
                  checked={value}
                  className="checkbox checkbox-xs"
                  style={{ marginLeft: "40px", marginTop: "37px" }}
                  onClick={() => {
                    setValue(!value);
                  }}
                />
                <div className="card-body">
                  <p>
                    I hereby declare that I have reviewed the solutions in good
                    faith, and any misconducts found will result in deduction of
                    my reputation.
                  </p>
                </div>
              </div>

              <button
                disabled={!value}
                className={"btn " + (value ? "btn-success" : "btn-disabled")}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
