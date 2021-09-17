import React, { FC } from "react";
import { Issues, Tick } from "./icons"
import "../index.css";

const IssueHeader: FC = (props) => {
  return (
    <div className="issue-header">
      <div className="number-issues-container">
        <a className="number-issues-open" href="/">
          <Issues />
          <div className="issues-status-count">460 Open</div>
        </a>
        <a className="number-issues-closed" href="/">
          <Tick />
          <div className="issues-status-count">8,973 Closed</div>
        </a>
      </div>
      <div className="issue-header-tabs-container">
        <a href="/" className="issue-header-button issue-header-button-author ">
          Author&darr;
        </a>
        <a href="/" className="issue-header-button issue-header-button-label">
          Label&darr;
        </a>
        <a
          href="/"
          className="issue-header-button issue-header-button-projects"
        >
          Projects&darr;
        </a>
        <a
          href="/"
          className="issue-header-button  issue-header-button-milestones"
        >
          Milestones&darr;
        </a>
        <a
          href="/"
          className="issue-header-button issue-header-button-assignee"
        >
          Assignee&darr;
        </a>
        <a href="/" className="issue-header-button issue-header-button-sort">
          Sort&darr;
        </a>
      </div>
    </div>
  );
};

export default IssueHeader;
