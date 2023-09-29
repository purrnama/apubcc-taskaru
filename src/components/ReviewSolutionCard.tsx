export default function ReviewSolutionCard({
  noSolution,
}: {
  noSolution: number;
}) {
  return (
    <div className="card w-120 h-300 bg-white bg-opacity-10 bg-base-80 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between ...">
          <h2 className="card-title">Solution {noSolution}</h2>
          <div className="card w-30 h-300 bg-white bg-opacity-5 bg-base-80 shadow-xl">
            <div className="btn-group">
              <input
                type="radio"
                name={"options" + noSolution}
                data-title="Poor"
                className="btn"
              />
              <input
                type="radio"
                name={"options" + noSolution}
                data-title="Good"
                className="btn"
              />
              <input
                type="radio"
                name={"options" + noSolution}
                data-title="Great"
                className="btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
