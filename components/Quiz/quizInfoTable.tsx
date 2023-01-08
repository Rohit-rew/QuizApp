import React from "react";

type propTypes = {
  quizName : string | undefined
  totalQuestions :number | undefined
  createdBy :string | undefined
  category :string | undefined
  id : string | undefined
}

export default function QuizInfoTable({quizName , totalQuestions , createdBy , category , id} : propTypes) {
  return (
    <table className="border text-left rounded shadow">
      <tbody>
        <tr className="border ">
          <th className="border p-1">Quiz Name</th>
          <th className="border font-light p-1">{quizName}</th>
        </tr>
        <tr className="border ">
          <th className="border p-1">Total Questions</th>
          <th className="border font-light p-1">{totalQuestions}</th>
        </tr>

        <tr className="border">
          <th className="border p-1">Category</th>
          <th className="border font-light p-1">{category}</th>
        </tr>
        <tr className="border">
          <th className="border p-1">Created By</th>
          <th className="border font-light p-1">{createdBy}</th>
        </tr>
        <tr className="border">
          <th className="border p-1">Quiz id</th>
          <th className="border font-light p-1">{id}</th>
        </tr>
      </tbody>
    </table>
  );
}
