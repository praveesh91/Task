import React from 'react'
import { Jumbotron, Container, Card, Row, Col, CardBody,CardTitle, CardSubtitle } from 'reactstrap'

function Jumbotrons() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <Row>
                <Col xs="4">
                    <Card>
                        <CardBody>
                        <CardTitle>Supply Balance</CardTitle>
                        <CardSubtitle>$0.000</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="4">
                    <Card>
                        <CardBody>
                        <CardTitle>Borrow Balance</CardTitle>
                        <CardSubtitle>$0.000</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="4">
                    <Card>
                        <CardBody>
                        <CardTitle>Borrowing power</CardTitle>
                        <CardSubtitle>$0.000</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
            </Jumbotron>
        </div>
    )
}
export default Jumbotrons