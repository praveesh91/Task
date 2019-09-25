import React from 'react'
import { Container, Card, Row, Col, CardImg, CardBody } from 'reactstrap'

function IndividualCoin({name,bitCoin,supply,borrow,imageUrl}) {
    return (
        <div>
            <Container>
                <Card>
                    <CardImg top width="100%" src={imageUrl} alt="Card image cap" /><h5>{name}</h5>
                    <hr/>                          
                    <CardBody>
                        <table>
                            <tbody>
                            <tr className="card-title">
                                <td>Market Size</td>
                                <td className="attValue">{bitCoin}</td>
                            </tr>
                            <tr className="card-title">
                                <td>Supply APR</td>
                                <td className="attValue">{supply}</td>
                            </tr>
                            <tr className="card-title">
                                <td>Borrow APR</td>
                                <td className="attValue">{borrow}</td>
                            </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
                </Container>
        </div>
    )
}
export default IndividualCoin