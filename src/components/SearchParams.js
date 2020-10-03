import React, { useState, useEffect, Fragment } from "react"
import api from "../api"
import Cards from "./Cards";
import { Input } from 'antd';

const { Search } = Input;


const SearchParams = () => {
    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("ipl")
    useEffect(() => {
        fetchResult();
    }, [search])

    const fetchResult = async () => {
        const newsData = await api.get(`q=${search}`)
        setNewsData(newsData.articles)
    }
    return (
        <Fragment>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                style={{ width: "400px" }}
                onSearch={value => setSearch(value)}
            />
            <Cards
                newsData={newsData}
            />
        </Fragment>
    )
}

export default SearchParams