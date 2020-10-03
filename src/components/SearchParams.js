import React, { useState, useEffect, Fragment } from "react"
import api from "../api"
import Cards from "./Cards";
import { Input, Spin } from 'antd';
import "./SearchParams.css"

const { Search } = Input;


const SearchParams = () => {
    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("ipl")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchResult();
    }, [search])

    const fetchResult = async () => {
        setLoading(true)
        const newsData = await api.get(`q=${search}`)
        setNewsData(newsData.articles)
        setLoading(false)
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

            {loading ?
                <Spin className="loader" tip="Loading..." />
                :
                <Cards
                    newsData={newsData}
                />
            }
        </Fragment>
    )
}

export default SearchParams