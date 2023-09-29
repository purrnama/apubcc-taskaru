import Image from "next/image";

export default function TaskHeader() {
  return (
    <div className="pt-2">
      <div className="hero min-h-16 py-4 relative">
        <div className="absolute top-0 right-0">
          <Image
            src={"/blob.png"}
            alt="decorative blob"
            height={558 / 1.5}
            width={638 / 1.5}
          />
        </div>
        <div className="hero-content">
          <div className="max-w-5xl">
            <h1 className="mb-13 text-3xl font-display ">
              Latte Protocol: New Component Implementation
            </h1>
            <div className="flex flex-row gap-8 pt-2 mb-4">
              <div className="badge badge-accent"> Active </div>
              <p className="gap-2 mb-5"> Task opened 3 days ago </p>
              <div className=" mb-2" style={{ marginLeft: "270px" }}>
                <a
                  href="https://github.com/purrnama/taskaru-latte-sample/issues/1"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  View on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
