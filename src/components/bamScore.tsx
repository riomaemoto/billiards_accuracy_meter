import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
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

export const BamScore = () => {
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

  const bamStatLeft =
    ballsPocketedLeft /
    (ballsPocketedLeft +
      ballsMissedLeft +
      unforcedErrorsLeft +
      safetyErrorsLeft +
      kickingErrorsLeft);

  const bamStatRight =
    ballsPocketedRight /
    (ballsPocketedRight +
      ballsMissedRight +
      unforcedErrorsRight +
      safetyErrorsRight +
      kickingErrorsRight);

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-white/20 w-[70px] md:w-[100px] h-[70px] md:h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
          {isNaN(bamStatLeft) ? 0 : bamStatLeft.toFixed(3)}
        </div>

        {/* Luxury Billiards Accuracy Meter Design */}
        <div className="relative w-[160px] md:w-[250px] h-[70px] md:h-[80px] bg-gradient-to-br from-red-800 via-rose-800 to-red-900 rounded-xl border-2 md:border-4 border-red-400 shadow-2xl overflow-hidden">
          {/* Diamond pattern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-rose-900/30"></div>
          <div className="absolute inset-1 md:inset-2 border border-red-300/30 rounded-lg"></div>

          {/* Decorative elements */}
          <div className="absolute top-0.5 md:top-1 left-1/2 transform -translate-x-1/2 w-2 md:w-4 h-0.5 md:h-1 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-0.5 md:bottom-1 left-1/2 transform -translate-x-1/2 w-2 md:w-4 h-0.5 md:h-1 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute left-0.5 md:left-1 top-1/2 transform -translate-y-1/2 w-0.5 md:w-1 h-2 md:h-4 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute right-0.5 md:right-1 top-1/2 transform -translate-y-1/2 w-0.5 md:w-1 h-2 md:h-4 bg-red-300 rounded-full opacity-70"></div>

          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-red-200 font-bold text-sm md:text-lg tracking-wider"
              style={{
                textShadow:
                  "2px 2px 0px #1a1a1a, -1px -1px 0px #1a1a1a, 1px -1px 0px #1a1a1a, -1px 1px 0px #1a1a1a",
              }}
            >
              BAM SCORE
            </span>
          </div>
        </div>

        <div className="border border-white/20 w-[70px] md:w-[100px] h-[70px] md:h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
          {isNaN(bamStatRight) ? 0 : bamStatRight.toFixed(3)}
        </div>
      </div>
    </div>
  );
};
