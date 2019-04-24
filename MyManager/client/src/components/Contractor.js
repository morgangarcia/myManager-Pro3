import React from 'react';
import { Container } from 'reactstrap';
import SearchForm from "./SearchForm";
import ContractorCard from "./ContractorCard";

const Contractor = (props) => {
    return (

        <Container>
            <SearchForm />
            {/* <div id="searchContainer">
                <h3>Contractor Search</h3>
                <form id="contractorSearch">
                    <label htmlFor="contractorInput" form="contractorSearch">Enter Contractor to Search</label>
                    <br></br>
                    <input type="text" name="contractorInput" id="contractorInput" form="contractorSearch" onChange={(e) => props.handleChange(e)} placeholder="Name" required />
                    <br></br>
                    <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
                </form>
            </div> */}
            <ContractorCard />

        </Container>

    );
};

export default Contractor;

