import Link from "next/link";

export default function TaskCard({
  title,
  description,
  color,
  progressValue,
  remainingDay,
  href,
}: {
  title: string;
  description?: string;
  color: string;
  progressValue: number;
  remainingDay: number;
  href?: string;
}) {
  const squareStyle = {
    backgroundColor: color, // Set the background color dynamically
  };

  return (
    <Link href={href || "#"} passHref>
      <div className="card w-[500px] bg-white bg-opacity-10 shadow-xl hover:bg-opacity-20">
        <div className="card-body">
          <div className="flex flex-row">
            <div
              className="rounded w-8 h-8 flex items-center justify-center mr-2"
              style={squareStyle} // Apply the dynamic style
            ></div>
            <h2 className="card-title font-display font-normal text-2xl">
              {title}
            </h2>
          </div>
          <p className="mb-8">{description}</p>
          <div className="flex flex-row">
            <div className="badge badge-neutral border-0 bg-opacity-10 mr-2 mb-2 text-white">
              Rust
            </div>
            <div className="badge badge-neutral border-0 bg-opacity-10 mr-2 mb-2 text-white">
              Typescript
            </div>
          </div>
          <div>Remaining days: {remainingDay} days</div>
          <progress
            className="progress w-56"
            value={progressValue}
            max="100"
          ></progress>
        </div>
      </div>
    </Link>
  );
}
