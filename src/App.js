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

  removeFriend = id => {
    console.log("hi there: ", id.target);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  }

  // method for handling image click events
  friendClick = event => {
      console.log("hello: ", event);
      const currentImage = event.target.alt;
      const alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

      // if you click on an image more than once, you lose and the score resets to 0, the clickedImages are reset, and the images reshuffle
      if (alreadyClicked) {
          alert("You lost!");
          this.setState({
              friends: this.shuffleCards(friends),
              clickedImages: [],
              score: 0
          });
      } else {
          // else you score a point, the selected image is stored in the clickedImages array, and the images reshuffle
          this.setState(
              {
                  friends: this.shuffleCards(friends),
                  clickedImages: this.state.clickedImages.concat(currentImage),
                  score: this.state.score + 1,
              },

              // methods called all the time; resets values when you win and keeps best score
              () => {

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

}

export default App;
