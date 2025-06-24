import { player1Atom, player2Atom, toggleAtom } from "@/app/atom";
import { useAtom, useAtomValue } from "jotai";

export const Toprow = () => {
  const [leftName, setLeftName] = useAtom(player1Atom);
  const [rightName, setRightName] = useAtom(player2Atom);
  const isEditing = useAtomValue(toggleAtom);
  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <input
          className={`w-[105px] md:w-[150px] h-[60px] md:h-[70px] border border-white/20 text-center text-[16px] bg-white/10 backdrop-blur-md text-white font-semibold placeholder-gray-300 ${
            isEditing ? "" : "cursor-not-allowed"
          }`}
          placeholder="Enter Name"
          type="text"
          onChange={(e) => setLeftName(e.target.value)}
          value={leftName}
          disabled={!isEditing}
        />

        <div className="w-[160px] md:w-[250px] h-[60px] md:h-[70px] border border-white/20 text-center flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-sm md:text-base">
          BREAKS
        </div>

        <input
          className={`w-[105px] md:w-[150px] h-[60px] md:h-[70px] border border-white/20 text-center text-[16px] bg-white/10 backdrop-blur-md text-white font-semibold placeholder-gray-300 ${
            isEditing ? "" : "cursor-not-allowed"
          }`}
          placeholder="Enter Name"
          type="text"
          onChange={(e) => setRightName(e.target.value)}
          value={rightName}
          disabled={!isEditing}
        />
      </div>
    </div>
  );
};
