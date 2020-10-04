import React, { useState, useEffect, useCallback, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../../api";
import Cards from "../Cards";
import { Input, Spin } from "antd";
import "./SearchParams.css";

const { Search } = Input;

const SearchParams = (props) => {
  const { setNewsData, newsData } = props;
  const [search, setSearch] = useState("ipl")
  const [loading, setLoading] = useState(true)

  const fetchResult = useCallback(async () => {
    setLoading(true)
    const newsData = await api.get(`q=${search}`)
    addIdentifier(newsData.articles)
    setNewsData(newsData.articles)
    setLoading(false)
  }, [search, setNewsData])

  useEffect(() => {
    fetchResult();
  }, [search, fetchResult])



  const addIdentifier = (data = []) => {
    data.forEach(eachData => {
      eachData["id"] = uuidv4()
      if (eachData["content"]) {
        eachData["content"] = eachData["content"].substring(0, 201)
        eachData["isContentAvailable"] = true
      } else {
        eachData["content"] = "No Content"
        eachData["isContentAvailable"] = false
      }
    });
  }
  return (
    <Fragment>
      <Search
        placeholder="Topic"
        enterButton="Search Topic"
        size="large"
        style={{ width: "400px" }}
        onSearch={value => setSearch(value)}
      />

      {loading ? (
        <Spin className="loader" tip="Loading..." />
      ) : (
          <Cards newsData={newsData} />
        )}
    </Fragment>
  );
};

export default SearchParams;
