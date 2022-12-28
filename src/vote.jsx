import React from "react";
class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  clickMethod = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div className="vote">
        <img src={this.props.data.url} />
        <h2>{this.props.data.name}</h2>
        <button onClick={this.clickMethod}>Vote</button>
        <p>vote count:{this.state.counter}</p>
      </div>
    );
  }
}
export default Vote;
