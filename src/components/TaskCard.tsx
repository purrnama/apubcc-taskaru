export default function TaskCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-actions justify-end">
        <button className="btn btn-square btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-row">
          <div className="badge badge-neutral mr-2 mb-2">Rust</div>
          <div className="badge badge-neutral mr-2 mb-2">Typescript</div>
        </div>
        <progress className="progress w-56" value="10" max="100"></progress>
      </div>
    </div>
  );
}
