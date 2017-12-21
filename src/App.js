import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedImages: [],
    score: 0,
    bestScore: 0
  }

  //shuffle method
  shuffleCards = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.map(item => { return item; });
  }

  // method for handling image click events
  friendClick = event => {
    console.log("hello: ", event);
    const currentImage = event.target.alt;
    const alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    // actions if you click on an image more than once: lose alert, score resets to 0, images reshuffle
    if (alreadyClicked) {
        alert("You lost!");
        this.setState({
            friends: this.shuffleCards(friends),
            clickedImages: [],
            score: 0
        });
    } else {
      // first image click scores a point, selected image stored in array, and the images reshuffle
      this.setState(
          {
              friends: this.shuffleCards(friends),
              clickedImages: this.state.clickedImages.concat(currentImage),
              score: this.state.score + 1,
          },

        () => {
          // methods called with each click: resets values when you win and keeps best score
          if(this.state.bestScore < this.state.score) {
            this.setState(
              {
                bestScore: this.state.bestScore + 1
              }
            );
          }

          if (this.state.score === 12) {
            alert("You win!");
            this.setState({
              friends: this.shuffleCards(friends),
              clickedImages: [],
              score: 0
            });
          }
        }
      );
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
   	    <Navbar score={this.state.score} bestScore={this.state.bestScore} />
   	   	<Header />
        <Title />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            friendClick={this.friendClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }

};

export default App;
