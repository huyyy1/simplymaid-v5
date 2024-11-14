export interface Stat {
  title: string;
  value: string;
  change: string;
}

export interface Sale {
  id: number;
  customer: string;
  status: "Completed" | "Processing" | "Failed";
  date: string;
  amount: string;
}

export interface Activity {
  action: string;
  time: string;
}
