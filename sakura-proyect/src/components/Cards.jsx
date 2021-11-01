import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


const Cards = () => {

const url= "https://protected-taiga-89091.herokuapp.com/api/card"
const getCards = async()=>{
    try {
        const res= await fetch(url)
        const data = await res.json()

        console.log(data.data);
    } catch (error) {
        console.log(error)
    }
}

getCards()

    return (
<Container fluid>
  <Row>
    <Col style={{ backgroundColor:"#581845"}}>1 of 1</Col>
  </Row>
</Container>
    )
}

export default Cards
