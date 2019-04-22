import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import MorganGarcia from './images/MorganGarcia.jpg';

class ContractorCard extends Component {
    render() {
        return (
            <Card>
                <CardImg top width="100%" src={MorganGarcia} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Morgan Garcia</CardTitle>
                    <CardText>Full Stack Developer</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                    <Button>Book</Button>
                </CardBody>
            </Card>
        );
    }
}
export default ContractorCard;
