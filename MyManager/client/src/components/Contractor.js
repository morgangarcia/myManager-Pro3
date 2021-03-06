import React, { Component } from "react";
import {
  Button,
  // Modal,
  // ModalHeader,
  // Form,
  // FormGroup,
  // Label,
  // Input,
  // ModalBody

} from 'reactstrap';
import FriendCard from "./FriendCard";
import Wrapper from "./Wrapper";
import Title from "./Title";
import friends from "./friends.json";

class Contractor extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title>Contractors</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}

          />


        ))}
        <Button>Book</Button>
        <Button>Make An Offer</Button>
      </Wrapper>
    );
  }
}

export default Contractor;
