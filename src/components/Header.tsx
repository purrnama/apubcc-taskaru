import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 mb-2">
      <Link href={"/"} passHref>
        <div className="flex-1 px-2 mx-2 gap-4">
          <Image
            src={"/Taskaru-Icon.png"}
            alt="taskaru logo"
            height={32}
            width={32}
          />
          <p className="text-xl font-display">TASKARU</p>
        </div>
      </Link>

      {/* Added Button code here*/}
      <div className="flex flex-row gap-8">
        <Link href="#">Taskboard</Link>
        <Link href="#">Task Listing</Link>
        <Link href="/portfolio">Portfolio</Link>
        <WalletMultiButton
          style={{ backgroundColor: "#FF4874" }}
          className="btn btn-ghost"
        />
      </div>
    </div>
  );
}
