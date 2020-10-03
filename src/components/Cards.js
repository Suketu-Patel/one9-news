import React from "react"
import Card from "./Card/Card"

const Cards = ({ newsData = [] }) => {
    return (
        <div>
            {
                newsData.map(singleNews => {
                    return <Card news={singleNews} />
                })
            }
        </div>
    )
}
export default Cards