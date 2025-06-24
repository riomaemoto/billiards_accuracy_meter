"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-start mb-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center mb-4">Settings</h1>
      <div className="max-w-md mx-auto">
        <p className="text-gray-600 text-center">Settings page coming soon...</p>
      </div>
    </div>
  );
}