
//  import React from "react";
//  import items from "../routes/api/items";
//  import { BrowserRouter as Router } from "react-router-dom";

//  class Contractor extends React.Component {


//  export default Contractor;

import React from 'react';
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
                    <CardImg top width="100%" src="../images/MorganGarcia.jpg" alt="Contractor Img" />
                    <CardBody>
                        <CardTitle>Morgan Garcia</CardTitle>
                        <CardSubtitle>Mixer/Mastering</CardSubtitle>
                        <CardText>$1,200 per Mixer $150 per song for Mastering</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        </Container>
    );
};

export default Example;
