import React from "react";
import Image from "next/image";

export default function Quiz() {
  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        Welcome to
      </h1>
      <Image alt="" src={"/mainimage.png"} width={200} height={200} />

      <div className="flex flex-col w-full gap-16 max-w-xl ">
        <div className="quizInfo w-full flex bg-white rounded p-4 flex flex-col gap-5">
          <p className="text-3xl text-center w-full">Quiz Info</p>

          <table className="border text-left rounded shadow">
            <tbody>
              <tr className="border ">
                <th className="border p-1">Quiz Name</th>
                <th className="border font-light p-1">Name of the quiz</th>
              </tr>
              <tr className="border ">
                <th className="border p-1">Total Questions</th>
                <th className="border font-light p-1">10</th>
              </tr>

              <tr className="border">
                <th className="border p-1">Category</th>
                <th className="border font-light p-1">Javascript</th>
              </tr>
              <tr className="border">
                <th className="border p-1">Created By</th>
                <th className="border font-light p-1">Satpal mcCullum</th>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="border border-white rounded-2xl shadow py-4 text-xl bg-white font-semibold hover:border-red-500 w-full">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
