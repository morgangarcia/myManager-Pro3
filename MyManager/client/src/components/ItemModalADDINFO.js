import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    ModalBody

} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        textArea: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });
    };
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            textArea: this.state.textArea
        }
        //Add item via addItem action
        this.props.addItem(newItem);
        //close modal
        this.toggle();

    }

    render() {
        return (
            <div>
                <Button color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Additional Info</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Additional Info</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Contractor Info"
                                    onChange={this.onChange} />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }} block>
                                    Additional Info
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);