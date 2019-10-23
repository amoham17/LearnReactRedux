import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning..</h4>
          Are you sure you want to do this ?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Abdul"
          timeAgo="Today at 4.00 PM"
          imageUri={faker.image.avatar()}
          comment="Super hit.."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="junnu"
          timeAgo="Today at 5.00 Am"
          imageUri={faker.image.avatar()}
          comment="Good Job.."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="pasha"
          timeAgo="Today at 12:00 Pm"
          imageUri={faker.image.avatar()}
          comment="keep up the nice work .."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
