import React from 'react';
import { Container, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

import ContractorCard from "./ContractorCard.js";

const Contractor = (props) => {
    return (
        <div>

            <Container>
                <div id="searchContainer">
                    <h3>Contractor Search</h3>
                    <form id="contractorSearch">
                        <label htmlFor="contractorInput" form="contractorSearch">Enter Contractor to Search</label>
                        <br></br>
                        <input type="text" name="contractorInput" id="contractorInput" form="contractorSearch" onChange={(e) => props.handleChange(e)} placeholder="Name" required />
                        <br></br>
                        <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
                    </form>
                </div>
                <ContractorCard />

            </Container>
        </div>
    );
};

export default Contractor;

