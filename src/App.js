import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    friends: friends
  };

  randomRender = id => {
    this.state.friends.forEach((image) => {
      if (image.id === id) {
        //If the image that is been clicked has being previously clicked then Game over.
        if (image.cliked) {
         alert('Game  Over!, This image was previously clicked');
          this.setState({})
          this.gameInit();
          return false;
        }
        else {
          this.updateScore();
          image.cliked = true;
        }
        if (this.state.score >= this.state.topScore) {
          this.newtopScore();
        }
      }
    });
  }




  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winner())
  }

  newtopScore = () => {
    this.setState((newState) => ({
      topScore: newState.score
    }))
  }

  
  // Fucntion for shuffling the images.
  randomDeploy = (arr) => {
    let cartoons = [], n = arr.length, i;
    while (n) {
      i = Math.floor(Math.random() * arr.length);
      if (i in arr) {
        cartoons.push(arr[i]);
        delete arr[i];
        n--;
      }
    }
    this.setState({ friends: cartoons });
  }

// This function is incase the user wins, basically beats the top Score.
winner = () => {
  if (this.state.score === this.state.friends.length) {
    alert('YOU WIN!! congratulations!')
    this.setState({});
    this.gameInit();
  }
  else {
    setTimeout(() => {
      this.randomDeploy(this.state.friends)
    }, 300);
  }
}

  // Function for restarting the game.
  gameInit = () => {
    this.state.friends.forEach((image) => {
      image.cliked = false;
    })
    this.setState({ score: 0 })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
          <Navbar score={this.state.score} topScore={this.state.topScore} />
          <Instructions />
        {this.state.friends.map(friend => {
          return <FriendCard
            {...friend}
            key={friend.id}
            randomRender={this.randomRender}
            randomDeploy={() => this.randomDeploy(this.state.friends)}
          />;
        })}

        <Footer />
      </Wrapper>
  )};
}

export default App;

