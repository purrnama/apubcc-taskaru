export default function TaskCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="card w-96 bg-neutral bg-opacity-10 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-display font-normal text-2xl">
          {title}
        </h2>
        <p className="mb-8">{description}</p>
        <div className="flex flex-row">
          <div className="badge badge-neutral border-0 bg-opacity-10 mr-2 mb-2">
            Rust
          </div>
          <div className="badge badge-neutral border-0 bg-opacity-10 mr-2 mb-2">
            Typescript
          </div>
        </div>
        <progress className="progress w-56" value="10" max="100"></progress>
      </div>
    </div>
  );
}
