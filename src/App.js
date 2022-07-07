import React from "react"
import { Container, Row } from 'reactstrap'
import Header from "./Header"

import Footer from "./Footer"
import Countries from "./Countries"





export default class App extends React.Component {



    render() {

        return (
            <div>
                <Container>

                    <Row><Header/></Row>
                    <Row><Countries/></Row>

        
                    <Row><Footer/></Row>

                </Container>
            </div>
        )
    }
}








