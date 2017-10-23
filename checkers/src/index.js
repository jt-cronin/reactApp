import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class RSquare extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      value: null,
	    };
	  }
	render() {
	  return (
	    <button className="rSquare" onClick={() => this.setState({value: 'B'})}>
        {this.state.value}
	    </button>
	  );
	}
}

class BSquare extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      value: null,
	    };
	  }
  render() {
    return (
      <button className="bSquare" onClick={() => this.setState({value: 'R'})}>
      {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderRSquare(i) {
    return <RSquare value={i} />;
  }
  renderBSquare(i) {
    return <BSquare value={i} />;
  }

  render() {
    const status = 'Next player: B';

    return (
      <div className="mainBody">
      	<h1> Welcome to Checkers</h1>
      	<h2> We will be using B(lack) and W(hite) pieces for our game</h2>
      	<h3> First player to 12 points wins. One point for each opposing piece that is taken</h3>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
        </div>
        <div className="board-row">
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
        </div>
        <div className="board-row">
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
          {this.renderRSquare(0)}
          {this.renderBSquare(2)}
        </div>
        <div className="board-row">
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
        </div>
        <div className="board-row">
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
          {this.renderRSquare(2)}
          {this.renderBSquare(2)}
        </div>
        <div className="board-row">
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
        </div>
        <div className="board-row">
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
          {this.renderRSquare(2)}
          {this.renderBSquare(1)}
        </div>
        <div className="board-row">
          {this.renderBSquare(1)}
          {this.renderRSquare(0)}
          {this.renderBSquare(1)}
          {this.renderRSquare(0)}
          {this.renderBSquare(1)}
          {this.renderRSquare(0)}
          {this.renderBSquare(1)}
          {this.renderRSquare(0)}
        </div>


      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// ===========
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);