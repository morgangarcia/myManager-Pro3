
import React from "react";
//import items from "../routes/api/items";
import { BrowserRouter as Router } from "react-router-dom";







import {
    Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, FormGroup, Label, Input
} from 'reactstrap';

const Example = (props) => {

    return (

        <Container>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="search placeholder"
                />
                <Button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</Button>
            </FormGroup>

            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="../../images/MorganGarcia.jpg" alt="Contractor Img" />
                    <CardBody>
                        <CardTitle>Morgan Garcia</CardTitle>
                        <CardSubtitle>Mixer/Mastering</CardSubtitle>
                        <CardText>$1,200 per Mix per song for Mastering</CardText>
                        <Button>Book Now</Button>
                    </CardBody>
                </Card>

            </CardDeck>

        </Container >
    );
};

export default Example;
