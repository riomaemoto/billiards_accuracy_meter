import { SetStateAction } from "jotai";

export type RowboxProps = {
  leftNumber: number;
  leftPercentage?: number;
  rightNumber: number;
  rightPercentage?: number;
  boxTitle?: string;
  inGameStats?: number;
  setLeftNumber?: (value: SetStateAction<number>) => void;
  setRightNumber?: (value: SetStateAction<number>) => void;
};
