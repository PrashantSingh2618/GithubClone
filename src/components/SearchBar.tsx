import React, { FC } from "react";
import { Labels, Milestone } from "./icons";
import "../index.css";

interface Props {
  searchingFunction: any;
}

export default function SearchBar(props:Props){
  return (
    <div className="search-bar-row">
      <div className="filter-and-form">
        <div className="button-filter">
          <p>Filters&darr;</p>
        </div>
        <input
          className="search-bar"
          placeholder="  is:issue is:open "
          style={{ fontSize: "14px" }}
          onChange={props.searchingFunction}
        ></input>
        <div className="labels-and-milestones">
          <div className="labels-button gray-hover">
            <Labels />
            Labels <div className="number">58</div>
          </div>
          <div className="milestones-button gray-hover">
            <Milestone/>
            Milestones <div className="number">1</div>
          </div>
        </div>
      </div>
      <div className="new-issue">New Issue</div>
    </div>
  );
};


