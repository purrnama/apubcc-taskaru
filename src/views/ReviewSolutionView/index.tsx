import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import ReviewSolutionCard from "components/ReviewSolutionCard";
import Header from "components/Header";

export const ReviewSolutionView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

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
        <div className="card-body">
            <div className="flex flex-col gap-6">
                <div className="card w-30 mb-5 bg-white bg-opacity-10 ">
                    <div className="card-body">
                        <h2 className="mb-13 text-2xl font-display">Review solutions </h2>
                        <p>Inspect each solution and provide a rating based on its implementation, documentation and code quality.</p>
                        <br></br>
                        <p><strong>Great</strong> : Code accomplishes all task criteria with distinction and well documented.</p>
                        <p><strong>Good</strong> : Code satisfies task, documentation provided.</p>
                        <p><strong>Poor</strong> : Code does not accomplish task, lackluster documentation.</p>
                        <br></br>
                        <ReviewSolutionCard
                            noSolution= {1}
                        />
                        <ReviewSolutionCard
                            noSolution= {2}
                        />
                        <ReviewSolutionCard
                            noSolution= {3}
                        />
                        <ReviewSolutionCard
                            noSolution= {4}
                        />
                    </div>
                    <div className="flex flex-row ...">
                        <input type="checkbox" checked={false} className="checkbox checkbox-xs" style={{ marginLeft: '40px',marginTop: '37px' }}/>
                        <div className="card-body">
                        <p>I hereby declare that I have reviewed the solutions in good faith, and any misconducts found will result in deduction of my reputation. </p>
                        </div>
                    </div>

                    <button className="btn btn-neutral">Submit Review</button>
                </div>
                
            </div>  
            
        </div>
      </div>
    </div>
  );
};
