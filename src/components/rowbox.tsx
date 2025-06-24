"use client";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { toggleAtom } from "@/app/atom";

type Props = {
  boxTitle: string;
  left: PrimitiveAtom<number>;
  right: PrimitiveAtom<number>;
  readOnly: { left: number; right: number };
};

export const Rowbox = ({ boxTitle, left, right, readOnly }: Props) => {
  const [leftNumber, setLeftNumber] = useAtom(left);
  const [rightNumber, setRightNumber] = useAtom(right);
  const isEditing = useAtomValue(toggleAtom);

  const incrementLeft = () => {
    if (setLeftNumber === undefined) return;
    setLeftNumber(leftNumber + 1);
  };

  const decreaseLeft = () => {
    if (leftNumber > 0 && setLeftNumber !== undefined) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const incrementRight = () => {
    if (!setRightNumber) return;
    setRightNumber(rightNumber + 1);
  };
  const decreaseRight = () => {
    if (rightNumber > 0 && setRightNumber) {
      setRightNumber(rightNumber - 1);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className={`border-2 border-black w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 ${
              isEditing
                ? "bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white shadow-lg hover:shadow-green-400/50"
                : "bg-gray-300 cursor-not-allowed opacity-50"
            }`}
            onClick={incrementLeft}
            disabled={!isEditing}
          >
            <span className="text-2xl md:text-3xl font-bold text-white">+</span>
          </button>
          <button
            className={`border-2 border-black w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 ${
              isEditing
                ? "bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-400/50"
                : "bg-gray-300 cursor-not-allowed opacity-50"
            }`}
            onClick={decreaseLeft}
            disabled={!isEditing}
          >
            <span className="text-2xl md:text-3xl font-bold text-white">−</span>
          </button>
        </div>

        <div className="border border-white/20 w-[47px] md:w-[100px] h-[80px] md:h-[90px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-sm md:text-base">
          {isEditing ? leftNumber : readOnly.left}
        </div>

        {/* Pool Table Design for Title */}
        <div className="relative w-[160px] md:w-[250px] h-[80px] md:h-[90px] bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-lg border-2 md:border-4 border-amber-600 shadow-lg">
          {/* Pool table felt texture */}
          <div className="absolute inset-1 md:inset-2 bg-gradient-to-br from-green-500 to-green-700 rounded opacity-40"></div>

          {/* Corner and middle pocket decorations */}
          <div className="absolute -top-0.5 md:-top-1 -left-0.5 md:-left-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -top-0.5 md:-top-1 -right-0.5 md:-right-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -top-[4px] md:-top-1.5 left-1/2 -translate-x-1/2 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>

          <div className="absolute -bottom-0.5 md:-bottom-1 -left-0.5 md:-left-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-0.5 md:-bottom-1 -right-0.5 md:-right-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-[4px] md:-bottom-2 left-1/2 -translate-x-1/2 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>

          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center px-1 md:px-2">
            <span
              className="text-yellow-300 font-bold text-md md:text-lg text-center drop-shadow-lg"
              style={{
                textShadow: "2px 2px 3px black",
              }}
            >
              {boxTitle}
            </span>
          </div>
        </div>

        <div className="border border-white/20 w-[47px] md:w-[100px] h-[80px] md:h-[90px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-sm md:text-base">
          {isEditing ? rightNumber : readOnly.right}
        </div>
        <div>
          <button
            className={`border-2 border-black w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 ${
              isEditing
                ? "bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white shadow-lg hover:shadow-green-400/50"
                : "bg-gray-300 cursor-not-allowed opacity-50"
            }`}
            onClick={incrementRight}
            disabled={!isEditing}
          >
            <span className="text-2xl md:text-3xl font-bold text-white">+</span>
          </button>
          <button
            className={`border-2 border-black w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 ${
              isEditing
                ? "bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-400/50"
                : "bg-gray-300 cursor-not-allowed opacity-50"
            }`}
            onClick={decreaseRight}
            disabled={!isEditing}
          >
            <span className="text-2xl md:text-3xl font-bold text-white">−</span>
          </button>
        </div>
      </div>
    </div>
  );
};
