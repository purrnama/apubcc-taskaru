import { Connection, PublicKey } from "@solana/web3.js";
import { publicKey, u64, bool } from "@solana/buffer-layout-utils";
import { u32, u8, struct } from "@solana/buffer-layout";

const rpc = "https://api.devnet.solana.com";
const connection = new Connection(rpc);

export interface UserPortfolio {
  user: PublicKey;
  tasksCompleted: bigint;
  isAcceptedTask: boolean;
}

export const UserPortfolioLayout = struct<UserPortfolio>([
  publicKey("user"),
  u64("tasksAccepted"),
  bool("isAcceptedTask"),
]);

export const fetchAndParseData = async (
  wallet: PublicKey,
  connection: Connection
) => {
  try {
    console.log("fetching account data");
    let { data } = (await connection.getAccountInfo(wallet)) || {};
    if (!data) return;
    return data;
  } catch (e) {
    console.log(e);
  }
};
