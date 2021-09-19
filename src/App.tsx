import React, { useState, useEffect, useRef, useCallback } from "react";
import RepoHeader from "./components/RepoHeader";
import SearchBar from "./components/SearchBar";
import Issues from "./components/Issues";
import IssueHeader from "./components/IssueHeader";
import ContributeMessage from "./components/ContributeMessage";
import LoaderComponent from "./components/LoaderComponent";
import "./index.css";
import axios from "axios"
import Navbar from "./components/Navbar"


export interface GithubData {
  title: string;
  number: number;
  created_at: string;
  user: {
    login: string;
  };
  labels:[{
    name: string;
    color: string
  }]
}

export default function App() {
  const [fetchStatus, setStatus] = useState<Boolean>(false);
  const [data, setData] = useState<GithubData[]>([]);
  const [searchValue, updateSearchValue] = useState<string>("");
  const [page,setPage] = useState<number>(1);

  const fetchData = () => {
    setPage(page=> page + 1)
    axios({
      method: 'GET',
      url: `https://api.github.com/repos/facebook/react/issues`,
      params: {
        page: page,
        per_page: 10
      }
    })
    .then(res=>{
      setData(prev=>{
        return [...prev,...res.data]
      })
      setStatus(true)
    })
    .catch(err=>{
      console.log("Something went wrong ... ")
      setData([])
      setStatus(true)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  window.onscroll = function(){
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
        fetchData();
        // setStatus(false)
    }
  }


  const handleChange = (event: { target: HTMLInputElement }) => {
    updateSearchValue(event.target.value);
  };

  return (
    <div className="app">
      {fetchStatus ? (
        <div className="rendered-app">
          <Navbar/>
          <RepoHeader />
          <div className="search-and-list-container">
            <ContributeMessage />
            <SearchBar searchingFunction={handleChange} />
            <div className="list-of-issues">
              <IssueHeader />
              {data
                .filter((issue) => {
                  if (issue.title && issue.title.toLowerCase().includes(searchValue)) {
                    return issue;
                  }
                })
                .map((issue, index) => {
                  return (
                    <div className="issue-row" key={index}>
                      <Issues
                        key={index}
                        login={issue.user.login}
                        title={issue.title}
                        number={issue.number}
                        created_at={issue.created_at}
                        labels={issue.labels}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
      ) :<LoaderComponent/> }
    </div>
  );
};
