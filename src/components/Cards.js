import React from "react"
import Card from "./Card/Card"
import { Col, Row } from "antd"
const Cards = ({ newsData = [] }) => {
    return (
        <div>
            <Row gutter={8}>
                {
                    newsData.map(singleNews => {
                        return <Col xs={16} xl={10} xxl={6}><Card news={singleNews} /></Col>
                    })
                }
            </Row>
        </div>
    )
}
export default Cards