import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    ModalBody,
    Container

} from 'reactstrap';
import { addItem } from '../actions/itemActions';
import { connect } from 'react-redux';

class ItemModal extends Component {
    componentDidMount() {
        this.props.getItems();
    }



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleonClick = this.handleonClick.bind(this);
}

handleChange(event) {
    //console.log(event.target.checked); //just for the checkbox



    state = {
        modal: false,
        contractorName: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({
            [e.target.contractorName]: e.target.value

        });
    };
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            contractorName: this.state.contractorName
        }
        //Add item via addItem action
        this.props.addItem(newItem);
        //console.log(this.state.contractorName);
        //close modal
        this.toggle();

    }
}


render() {

    return (
        <Container>

            <Button color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={this.toggle}
            >Add Name</Button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
            >
                <ModalHeader toggle={this.toggle}>ADD Contractor Name</ModalHeader>
                <ModalBody>
                    <Form Submit={this.Submit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                contractorName="contractorName"
                                id="item"
                                placeholder="Add Contractor Name"
                                onChange={this.onChange} />
                            <Button
                                color="dark"
                                Submit={this.onSubmit}
                                style={{ marginTop: '2rem' }} block>
                                Add Contractor Name
                                />
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

        </Container >
    )
}


const mapStateToProps = state => ({
    item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);