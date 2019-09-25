import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Card, Row, Col, CardImg, CardBody } from 'reactstrap'
import axios from 'axios'
import './custom.css'
import Jumbotrons from './Jumbotrons'
import IndividualCoin from './IndividualCoin'

class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            coins : [],
            bitCoin: '',
            borrow : '',
            supply : '',
            imageUrl : 'https://www.cryptocompare.com',
            name : '',
            resp : 'false'
        }
    }

    componentDidMount() {
        this.retrieveData()
    }

    retrieveData = () => {
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR')
        .then(response => {
            const coins = response.data
            const imgUrl = coins.RAW.BTC.EUR.IMAGEURL
            const bitCoin = coins.RAW.BTC.USD.PRICE
            const borrow = coins.RAW.BTC.USD.PRICE
            const supply = coins.RAW.BTC.USD.SUPPLY
            const name = coins.RAW.BTC.USD.LASTMARKET
           
            this.setState({
                coins : coins,
                bitCoin :bitCoin,
                borrow : borrow,
                supply : supply,
                name : name,
                imageUrl : 'https://www.cryptocompare.com'+imgUrl
            })
        })
        .catch(error => {
          console.log("No data found");
        });

       
    }

    clickHandler = () =>{
        this.setState(prevState => ({
            resp: 'true'
          }));
    }
        

    render() {
        const {borrow, supply, bitCoin,imageUrl,name,coins,resp} = this.state
        console.log(resp)
        if(resp===true){
            
            let IndividualCoin = <IndividualCoin getData={this.retrieveData} />
        }
        return (

            <React.Fragment>
            <Jumbotrons/>
            <Container>
            <Router>
            <Link to="/crypto" onClick={this.clickHandler}>
                {IndividualCoin}
            <Row>
                <Col xs="4">
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
                </Col>
                <Col xs="4">
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
                </Col><Col xs="4">
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
                </Col>
            </Row>
            </Link>
            </Router>
            </Container>
            </React.Fragment>
        )
    }
}

export default Dashboard
