export type Shop = {
  id: number;
  name: string;
  className: string;
  content: string;
  location:string;
  category: "食品" | "文化";
};

export type Question = {
  shopId: number;
  maskedName: string;
  answer: string;
  hints: string[];
  choices: [string, string, string];
};
