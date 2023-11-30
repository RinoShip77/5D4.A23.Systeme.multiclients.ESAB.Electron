import { Explorer } from "./Explorer";

export interface Leaderboard {
  order: string,
  board: Explorer[];
  me: Explorer
}