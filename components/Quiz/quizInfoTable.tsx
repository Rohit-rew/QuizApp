import React from "react";

export default function QuizInfoTable() {
  return (
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
  );
}
