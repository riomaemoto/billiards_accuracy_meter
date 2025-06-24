"use client";

import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export type StatType = {
  id?: number;
  created_at?: string;
  updated_at?: string;
  player1: string;
  player2: string;
  gameScore: { left: number; right: number };
  totalBreak: { left: number; right: number };
  winningStreak: { left: number; right: number };
  ballsPocketed: { left: number; right: number };
  ballsMissed: { left: number; right: number };
  ballsMissedWithSafety: { left: number; right: number };
  unforcedErrors: { left: number; right: number };
  safetyErrors: { left: number; right: number };
  kickingErrors: { left: number; right: number };
  dryBreaks: { left: number; right: number };
  scratchesonBreak: { left: number; right: number };
  ballsMadeonBreak: { left: number; right: number };
  shotAfterTheBreak: { left: number; right: number };
  consecutiveBreakandRuns: { left: number; right: number };
  breakAndRun: { left: number; right: number };
};

export const initialStat: StatType = {
  player1: "",
  player2: "",
  gameScore: { left: 0, right: 0 },
  totalBreak: { left: 0, right: 0 },
  winningStreak: { left: 0, right: 0 },
  ballsPocketed: { left: 0, right: 0 },
  ballsMissed: { left: 0, right: 0 },
  ballsMissedWithSafety: { left: 0, right: 0 },
  unforcedErrors: { left: 0, right: 0 },
  safetyErrors: { left: 0, right: 0 },
  kickingErrors: { left: 0, right: 0 },
  dryBreaks: { left: 0, right: 0 },
  scratchesonBreak: { left: 0, right: 0 },
  ballsMadeonBreak: { left: 0, right: 0 },
  shotAfterTheBreak: { left: 0, right: 0 },
  consecutiveBreakandRuns: { left: 0, right: 0 },
  breakAndRun: { left: 0, right: 0 },
};

export const readOnlyStatAtom = atom<StatType>(initialStat);

export const toggleAtom = atom<boolean>(false);

export const statAtom = atom<StatType>(initialStat);

export const player1Atom = focusAtom(statAtom, (optic) =>
  optic.prop("player1")
);
export const player2Atom = focusAtom(statAtom, (optic) =>
  optic.prop("player2")
);

export const gameScoreLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("gameScore").prop("left")
);
export const gameScoreRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("gameScore").prop("right")
);
export const totalBreakLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("totalBreak").prop("left")
);
export const totalBreakRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("totalBreak").prop("right")
);
export const winningStreakLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("winningStreak").prop("left")
);
export const winningStreakRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("winningStreak").prop("right")
);
export const ballsPocketedLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsPocketed").prop("left")
);
export const ballsPocketedRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsPocketed").prop("right")
);
export const ballsMissedLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMissed").prop("left")
);
export const ballsMissedRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMissed").prop("right")
);
export const ballsMissedWithSafetyLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMissedWithSafety").prop("left")
);
export const ballsMissedWithSafetyRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMissedWithSafety").prop("right")
);
export const unforcedErrorsLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("unforcedErrors").prop("left")
);
export const unforcedErrorsRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("unforcedErrors").prop("right")
);
export const safetyErrorsLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("safetyErrors").prop("left")
);
export const safetyErrorsRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("safetyErrors").prop("right")
);
export const kickingErrorsLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("kickingErrors").prop("left")
);
export const kickingErrorsRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("kickingErrors").prop("right")
);
export const dryBreaksLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("dryBreaks").prop("left")
);
export const dryBreaksRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("dryBreaks").prop("right")
);
export const scratchesonBreakLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("scratchesonBreak").prop("left")
);
export const scratchesonBreakRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("scratchesonBreak").prop("right")
);
export const ballsMadeonBreakLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMadeonBreak").prop("left")
);
export const ballsMadeonBreakRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("ballsMadeonBreak").prop("right")
);
export const shotAfterTheBreakLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("shotAfterTheBreak").prop("left")
);
export const shotAfterTheBreakRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("shotAfterTheBreak").prop("right")
);
export const consecutiveBreakandRunsLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("consecutiveBreakandRuns").prop("left")
);
export const consecutiveBreakandRunsRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("consecutiveBreakandRuns").prop("right")
);
export const breakAndRunLeftAtom = focusAtom(statAtom, (optic) =>
  optic.prop("breakAndRun").prop("left")
);
export const breakAndRunRightAtom = focusAtom(statAtom, (optic) =>
  optic.prop("breakAndRun").prop("right")
);

export type ToastNotification = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
};

export const toastAtom = atom<ToastNotification | null>(null);
