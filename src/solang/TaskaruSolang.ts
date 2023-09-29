import { IDL, TaskaruSolang } from "./types/taskaru_solang";
import {
  Address,
  AnchorProvider,
  Program,
  Wallet,
  setProvider,
} from "@coral-xyz/anchor";
import { u64 } from "@solana/spl-token";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Struct } from "@solana/web3.js";

const programID = "7C8HShAB3k6XuZ8Yo7krx4VdmBJXYW1CXecEY2jrfVfP";

export function useTaskaruProgram(
  connection: Connection,
  wallet: Wallet | null
) {
  const idl = IDL;
  if (!wallet) {
    console.error("TaskaruSolang: Wallet not connected.");
    return;
  }
  const provider = new AnchorProvider(connection, wallet, {});
  setProvider(provider);
  const program = new Program(idl, programID);
  return program;
}
export async function AcceptTask(wallet: AnchorWallet, connection: Connection) {
  const program = useTaskaruProgram(connection, wallet as Wallet);
  if (!program) {
    return;
  }
  if (!wallet) {
    return;
  }
  console.log("accepting task");
  const seed = wallet.publicKey.toBuffer();
  const [dataAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from("seed"), seed],
    program.programId
  );
  const tx = await program.methods
    .setIsAcceptedTask(true)
    .accounts({ dataAccount: dataAccount })
    .rpc();
  const latestBlockHash = await connection.getLatestBlockhash();
  const confirm = await connection.confirmTransaction(
    {
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: tx,
    },
    "processed"
  );
  return confirm;
}
export async function ForfeitTask(
  wallet: AnchorWallet,
  connection: Connection
) {
  const program = useTaskaruProgram(connection, wallet as Wallet);
  if (!program) {
    return;
  }
  if (!wallet) {
    return;
  }
  console.log("accepting task");
  const seed = wallet.publicKey.toBuffer();
  const [dataAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from("seed"), seed],
    program.programId
  );
  const tx = await program.methods
    .setIsAcceptedTask(false)
    .accounts({ dataAccount: dataAccount })
    .rpc();
  const latestBlockHash = await connection.getLatestBlockhash();
  const confirm = await connection.confirmTransaction(
    {
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: tx,
    },
    "processed"
  );
  return confirm;
}

export async function InitializeAccountData(
  wallet: Wallet,
  connection: Connection
) {
  const program = useTaskaruProgram(connection, wallet as Wallet);
  if (!program) {
    return;
  }
  if (!wallet) {
    return;
  }
  console.log("initializing account data");
  const seed = wallet.publicKey.toBuffer();
  const [dataAccount, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("seed"), seed],
    program.programId
  );
  const tx = await program.methods
    .new(seed, [bump], dataAccount)
    .accounts({ dataAccount: dataAccount })
    .rpc();
}
export async function getIsAcceptedTask(
  wallet: Wallet,
  connection: Connection
) {
  const program = useTaskaruProgram(connection, wallet as Wallet);
  if (!program) {
    return;
  }
  if (!wallet) {
    return;
  }
  console.log("get isAcceptedTask");
  const seed = wallet.publicKey.toBuffer();
  const [dataAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from("seed"), seed],
    program.programId
  );
  const isAcceptedTask = await program.methods
    .getIsAcceptedTask()
    .accounts({ dataAccount: dataAccount })
    .view();
  console.log(isAcceptedTask);
}

export async function fetchAccountInfo(wallet: Wallet, connection: Connection) {
  console.log("getting account data");
  if (!wallet) return;
  const { data } = (await connection.getAccountInfo(wallet.publicKey)) || {};
  if (!data) return;
  console.log(data);
}
