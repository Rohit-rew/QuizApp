import React from "react";

export default function ItemMenue() {
  return (
    <div
      id="itemMenue"
      className="w-1/3 bg-white absolute right-5 top-20 z-10 rounded"
    >
      <button
        onClick={() => console.log("yes works")}
        className="border w-full h-full rounded py-2 hover:bg-gray-300"
      >
        Logout
      </button>
      {/* can add more buttons here */}
    </div>
  );
}
