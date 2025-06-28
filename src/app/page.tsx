"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { initialStat, readOnlyStatAtom, statAtom, gameKbnAtom } from "./atom";
import { useAtom, useSetAtom } from "jotai";

export default function Home() {
  const router = useRouter();
  const setShowStat = useSetAtom(statAtom);
  const setReadOnlyStat = useSetAtom(readOnlyStatAtom);

  const handleRecordGame = () => {
    router.push("/scoreSheet");
    setShowStat(initialStat);
    setReadOnlyStat(initialStat);
  };

  const handleHistoryRecords = () => {
    router.push("/history");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  const [gameKbn, setGameKbn] = useAtom(gameKbnAtom);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div
            className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center relative animate-spin overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffffff 0%, #f8f9fa 25%, #e9ecef 50%, #dee2e6 75%, #adb5bd 100%)",
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.35), inset -3px -3px 15px rgba(0, 0, 0, 0.08), inset 3px 3px 15px rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(173, 181, 189, 0.2)",
            }}
          >
            <style jsx>{`
              .animate-spin {
                animation: spin 8s linear infinite;
              }
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>

            {/* Main highlight spot */}
            <div
              className="absolute top-1 md:top-2 left-4 md:left-8 w-6 md:w-12 h-6 md:h-12 rounded-full opacity-90 blur-sm"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 70%)",
              }}
            ></div>

            {/* Yellow stripe */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 rounded-full shadow-inner"
              style={{
                clipPath: "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)",
              }}
            ></div>

            {/* Yellow stripe highlight */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, transparent 20%, rgba(255, 255, 255, 0.25) 30%, transparent 40%, transparent 60%, rgba(255, 255, 255, 0.15) 70%, transparent 80%)",
                clipPath: "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)",
              }}
            ></div>

            {/* White circle for number */}
            <div
              className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-white via-gray-50 to-gray-300 rounded-full flex items-center justify-center border border-gray-500 shadow-inner relative z-10"
              style={{
                boxShadow:
                  "inset -2px -2px 6px rgba(0, 0, 0, 0.12), inset 2px 2px 6px rgba(255, 255, 255, 0.9), 0 1px 3px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Circle highlight */}
              <div className="absolute top-0.5 md:top-1 left-1 md:left-2 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-white via-white to-transparent rounded-full opacity-85 blur-sm"></div>

              <div className="relative">
                <span
                  className="text-2xl md:text-4xl font-black text-gray-900 relative z-10"
                  style={{
                    textShadow:
                      "0.5px 0.5px 1px rgba(0, 0, 0, 0.3), -0.5px -0.5px 0.5px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  9
                </span>
                <svg
                  className="absolute -bottom-0.5 md:-bottom-1 left-1/2 transform -translate-x-1/2 w-4 md:w-6 h-2 md:h-3"
                  viewBox="0 0 24 12"
                >
                  <path
                    d="M2 2 Q12 10 22 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-gray-900"
                    style={{
                      filter:
                        "drop-shadow(0.3px 0.3px 0.5px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Bottom shadow/reflection */}
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-8 md:w-16 h-8 md:h-16 bg-gradient-to-tl from-gray-400 via-gray-200 to-transparent rounded-full opacity-25 blur-sm"></div>
          </div>
        </div>
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-wider">
          Billiards Accuracy Meter
        </h1>
        <div className="p-4">
          <div className="flex flex-col gap-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="9"
                checked={gameKbn === 9}
                onChange={(event) => setGameKbn(Number(event.target.value))}
                className="form-radio text-blue-600"
              />
              <span>9</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="10"
                checked={gameKbn === 10}
                onChange={(event) => setGameKbn(Number(event.target.value))}
                className="form-radio text-blue-600"
              />
              <span>10</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-xs md:max-w-sm px-4 mx-auto">
          <button
            onClick={handleRecordGame}
            className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Record Game
          </button>

          <button
            onClick={handleHistoryRecords}
            className="w-full py-3 md:py-4 bg-gray-600 hover:bg-gray-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg px-6"
          >
            History Records
          </button>

          <button
            onClick={handleSettings}
            className="w-full py-3 md:py-4 bg-gray-600 hover:bg-gray-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
