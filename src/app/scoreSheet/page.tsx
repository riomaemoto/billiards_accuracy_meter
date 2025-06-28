"use client";

import React, { useEffect } from "react";
import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
  ballsMissedWithSafetyLeftAtom,
  ballsMissedWithSafetyRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
  gameScoreLeftAtom,
  gameScoreRightAtom,
  totalBreakLeftAtom,
  totalBreakRightAtom,
  unforcedErrorsLeftAtom,
  unforcedErrorsRightAtom,
  winningStreakLeftAtom,
  winningStreakRightAtom,
  kickingErrorsLeftAtom,
  kickingErrorsRightAtom,
  safetyErrorsLeftAtom,
  safetyErrorsRightAtom,
  dryBreaksLeftAtom,
  dryBreaksRightAtom,
  scratchesonBreakLeftAtom,
  scratchesonBreakRightAtom,
  ballsMadeonBreakLeftAtom,
  ballsMadeonBreakRightAtom,
  shotAfterTheBreakLeftAtom,
  shotAfterTheBreakRightAtom,
  breakAndRunLeftAtom,
  breakAndRunRightAtom,
  consecutiveBreakandRunsLeftAtom,
  consecutiveBreakandRunsRightAtom,
  statAtom,
  toggleAtom,
  readOnlyStatAtom,
  toastAtom,
  statKbnAtom,
  gameKbnAtom,
} from "@/app/atom";
import { BamScore } from "@/components/bamScore";
import { BamScoreWithMissSafety } from "@/components/bamScoreWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { useRouter } from "next/navigation";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { sendStatsData, upDateStatsData } from "../supabase";
import Toast from "@/components/Toast";

export default function ScoreSheet() {
  const saveNewStat = useAtomValue(statAtom);
  const [isEditing, setIsEditing] = useAtom(toggleAtom);
  const router = useRouter();
  const readOnlyValue = useAtomValue(readOnlyStatAtom);
  const [toast, setToast] = useAtom(toastAtom);
  const setStatKbn = useSetAtom(statKbnAtom);
  const gameKbn = useAtomValue(gameKbnAtom);

  const isViewingExistingStat = saveNewStat.id;

  useEffect(() => {
    console.log("test");
    if (!saveNewStat.id) {
      setStatKbn(gameKbn);
    }
  }, []);

  useEffect(() => {
    if (isViewingExistingStat) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [saveNewStat.id, setIsEditing]);

  const handleBack = () => {
    router.push("/");
  };

  const handleSave = async () => {
    try {
      if (saveNewStat.id) {
        await upDateStatsData(saveNewStat);
        setToast({
          id: Date.now().toString(),
          message: "Game updated successfully!",
          type: "success",
          isVisible: true,
        });
      } else {
        const newStat = await sendStatsData(saveNewStat);
        if (newStat && newStat.id) {
          saveNewStat.id = newStat.id;
          setToast({
            id: Date.now().toString(),
            message: "New game saved successfully!",
            type: "success",
            isVisible: true,
          });
        }
      }
    } catch (error) {
      console.error("Save failed:", error);
      setToast({
        id: Date.now().toString(),
        message: "Failed to save game. Please try again.",
        type: "error",
        isVisible: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900">
      <div className="w-full max-w-[1400px] mx-auto p-6">
        <div className="flex justify-start mb-4 md:mb-8">
          <button
            onClick={handleBack}
            className="group relative px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 border border-yellow-300 text-sm md:text-base"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative">← Back</span>
          </button>
        </div>

        <div className="flex items-center justify-center mb-4 md:mb-8">
          <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-3 md:p-6 shadow-2xl">
            <div className="flex items-center space-x-2 md:space-x-6 flex-wrap gap-2 md:gap-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-xs md:text-sm font-medium">
                  Status:
                </span>
              </div>

              <button
                className={`group relative px-3 md:px-6 py-2 md:py-3 font-semibold rounded-xl transition-all duration-300 border text-sm md:text-base ${
                  isEditing
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-500 hover:shadow-emerald-500/25"
                    : "bg-gradient-to-r from-gray-600 to-gray-700 text-white border-gray-500 hover:shadow-gray-500/25"
                } hover:scale-105`}
                onClick={() => setIsEditing(!isEditing)}
              >
                <span
                  className={`absolute inset-0 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 ${
                    isEditing
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                      : "bg-gradient-to-r from-gray-500 to-gray-600"
                  }`}
                ></span>
                <span className="relative flex items-center space-x-1 md:space-x-2">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isEditing ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    )}
                  </svg>
                  <span className="hidden sm:inline">
                    {isEditing ? "Editing Mode" : "Read Only"}
                  </span>
                  <span className="sm:hidden">
                    {isEditing ? "Edit" : "Read"}
                  </span>
                </span>
              </button>

              <button
                onClick={handleSave}
                className="group relative px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 border border-blue-500 text-sm md:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center space-x-1 md:space-x-2">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                  <span className="hidden sm:inline">Save Game</span>
                  <span className="sm:hidden">Save</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 md:p-8">
          <Toprow />

          <div className="space-y-2 md:space-y-4 mt-4 md:mt-6">
            <Rowbox
              boxTitle="Game Score"
              left={gameScoreLeftAtom}
              right={gameScoreRightAtom}
              readOnly={readOnlyValue.gameScore}
            />
            <Rowbox
              boxTitle="Total Break"
              left={totalBreakLeftAtom}
              right={totalBreakRightAtom}
              readOnly={readOnlyValue.totalBreak}
            />
            <PercentageRowbox
              boxTitle="Dry Breaks"
              left={dryBreaksLeftAtom}
              right={dryBreaksRightAtom}
              readOnly={readOnlyValue.dryBreaks}
            />
            <PercentageRowbox
              boxTitle="Scratches on Break"
              left={scratchesonBreakLeftAtom}
              right={scratchesonBreakRightAtom}
              readOnly={readOnlyValue.scratchesonBreak}
            />
            <PercentageRowbox
              boxTitle="Balls Made on Break"
              left={ballsMadeonBreakLeftAtom}
              right={ballsMadeonBreakRightAtom}
              readOnly={readOnlyValue.ballsMadeonBreak}
            />
            <PercentageRowbox
              boxTitle="Shot After The Break"
              left={shotAfterTheBreakLeftAtom}
              right={shotAfterTheBreakRightAtom}
              readOnly={readOnlyValue.shotAfterTheBreak}
            />
            <PercentageRowbox
              boxTitle="Break and Run"
              left={breakAndRunLeftAtom}
              right={breakAndRunRightAtom}
              readOnly={readOnlyValue.breakAndRun}
            />
            <PercentageRowbox
              boxTitle="Consecutive Break and Runs"
              left={consecutiveBreakandRunsLeftAtom}
              right={consecutiveBreakandRunsRightAtom}
              readOnly={readOnlyValue.consecutiveBreakandRuns}
            />
            <Rowbox
              boxTitle="Longest Game Winning Streak"
              left={winningStreakLeftAtom}
              right={winningStreakRightAtom}
              readOnly={readOnlyValue.winningStreak}
            />
            <InGameStats />
            <Rowbox
              boxTitle="Balls Pocketed"
              left={ballsPocketedLeftAtom}
              right={ballsPocketedRightAtom}
              readOnly={readOnlyValue.ballsPocketed}
            />
            <Rowbox
              boxTitle="Balls Missed"
              left={ballsMissedLeftAtom}
              right={ballsMissedRightAtom}
              readOnly={readOnlyValue.ballsMissed}
            />
            <Rowbox
              boxTitle="Balls Missed with safety"
              left={ballsMissedWithSafetyLeftAtom}
              right={ballsMissedWithSafetyRightAtom}
              readOnly={readOnlyValue.ballsMissedWithSafety}
            />
            <Rowbox
              boxTitle="Unforced Errors"
              left={unforcedErrorsLeftAtom}
              right={unforcedErrorsRightAtom}
              readOnly={readOnlyValue.unforcedErrors}
            />
            <Rowbox
              boxTitle="Safety Errors"
              left={safetyErrorsLeftAtom}
              right={safetyErrorsRightAtom}
              readOnly={readOnlyValue.safetyErrors}
            />
            <Rowbox
              boxTitle="Kicking Errors"
              left={kickingErrorsLeftAtom}
              right={kickingErrorsRightAtom}
              readOnly={readOnlyValue.kickingErrors}
            />
            <BamScore />
            <BamScoreWithMissSafety />
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
