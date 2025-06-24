import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
  ballsMissedWithSafetyLeftAtom,
  ballsMissedWithSafetyRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
  kickingErrorsLeftAtom,
  kickingErrorsRightAtom,
  safetyErrorsLeftAtom,
  safetyErrorsRightAtom,
  unforcedErrorsLeftAtom,
  unforcedErrorsRightAtom,
} from "@/app/atom";
import { useAtomValue } from "jotai";

export const BamScoreWithMissSafety = () => {
  const ballsMissedLeft = useAtomValue(ballsMissedLeftAtom);
  const ballsMissedRight = useAtomValue(ballsMissedRightAtom);
  const unforcedErrorsLeft = useAtomValue(unforcedErrorsLeftAtom);
  const unforcedErrorsRight = useAtomValue(unforcedErrorsRightAtom);
  const safetyErrorsLeft = useAtomValue(safetyErrorsLeftAtom);
  const safetyErrorsRight = useAtomValue(safetyErrorsRightAtom);
  const ballsPocketedLeft = useAtomValue(ballsPocketedLeftAtom);
  const ballsPocketedRight = useAtomValue(ballsPocketedRightAtom);
  const kickingErrorsLeft = useAtomValue(kickingErrorsLeftAtom);
  const kickingErrorsRight = useAtomValue(kickingErrorsRightAtom);
  const ballsMissedWithSafetyLeft = useAtomValue(ballsMissedWithSafetyLeftAtom);
  const ballsMissedWithSafetyRight = useAtomValue(
    ballsMissedWithSafetyRightAtom
  );

  const bamScoreLeft =
    ballsPocketedLeft /
    (ballsPocketedLeft +
      ballsMissedLeft +
      unforcedErrorsLeft +
      safetyErrorsLeft +
      kickingErrorsLeft +
      ballsMissedWithSafetyLeft);

  const bamScoreRight =
    ballsPocketedRight /
    (ballsPocketedRight +
      ballsMissedRight +
      unforcedErrorsRight +
      safetyErrorsRight +
      kickingErrorsRight +
      ballsMissedWithSafetyRight);

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-white/20 w-[70px] md:w-[100px] h-[70px] md:h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
          {isNaN(bamScoreLeft) ? 0 : bamScoreLeft.toFixed(3)}
        </div>

        {/* Premium Billiards Accuracy Meter with Miss Safety Design */}
        <div className="relative w-[160px] md:w-[250px] h-[70px] md:h-[80px] bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-900 rounded-xl border-2 md:border-4 border-emerald-400 shadow-2xl overflow-hidden">
          {/* Tech pattern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-teal-900/30"></div>
          <div className="absolute inset-0.5 md:inset-1 border border-emerald-300/20 rounded-lg"></div>
          <div className="absolute inset-1.5 md:inset-3 border border-emerald-200/10 rounded"></div>

          {/* Tech decorative elements */}
          <div className="absolute top-1 md:top-2 left-1 md:left-2 w-1 md:w-2 h-1 md:h-2 bg-emerald-300 rounded-full opacity-80"></div>
          <div className="absolute top-1 md:top-2 right-1 md:right-2 w-1 md:w-2 h-1 md:h-2 bg-emerald-300 rounded-full opacity-80"></div>
          <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-1 md:w-2 h-1 md:h-2 bg-emerald-300 rounded-full opacity-80"></div>
          <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 w-1 md:w-2 h-1 md:h-2 bg-emerald-300 rounded-full opacity-80"></div>
          <div className="absolute top-1/2 left-0.5 md:left-1 transform -translate-y-1/2 w-0.5 md:w-1 h-3 md:h-6 bg-emerald-300 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-0.5 md:right-1 transform -translate-y-1/2 w-0.5 md:w-1 h-3 md:h-6 bg-emerald-300 rounded-full opacity-50"></div>

          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center px-1">
            <span
              className="text-emerald-200 font-bold text-xs md:text-sm text-center tracking-wide"
              style={{
                textShadow:
                  "2px 2px 0px #1a1a1a, -1px -1px 0px #1a1a1a, 1px -1px 0px #1a1a1a, -1px 1px 0px #1a1a1a",
              }}
            >
              BAM Score with Miss Safety
            </span>
          </div>
        </div>

        <div className="border border-white/20 w-[70px] md:w-[100px] h-[70px] md:h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
          {isNaN(bamScoreRight) ? 0 : bamScoreRight.toFixed(3)}
        </div>
      </div>
    </div>
  );
};
