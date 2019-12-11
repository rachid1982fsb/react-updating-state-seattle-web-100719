// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      count: 0
    };
  }
 
  handleClick = () => {
      let newCount = this.state.count + 1
      this.setState({hasBeenClicked: true,
                    count: newCount
                    }, () =>  console.log(this.state.hasBeenClicked))
       
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;