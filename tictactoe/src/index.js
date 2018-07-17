import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={alert(this.props.appleSauce)}>
        {this.props.appleSauce}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square appleSauce={i}/>;
  }

  render() {
    const status = 'Next player: X';
    const row1 = Array(3).fill().map((_, i) => {
      return this.renderSquare(i)
    })
    console.log(row1)
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {row1}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);