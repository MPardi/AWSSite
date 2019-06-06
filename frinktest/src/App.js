import React from 'react';
import './App.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Simps from './Simps';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0,
      quote: null,
      character: null,
      image: null
    }
  }

  fillBar() {
    this.interval = setInterval(() => {
      console.log(this.state.percent);
      if (this.state.percent <= 99) {
        this.setState({
          percent: this.state.percent + 1
        })
      }
      else {
        clearInterval(this.interval);
      }
    }, 2);
  }

  render() {
    let view;
    if (this.state.percent === 100) {
      view = <Simps />
    } else {
      view =<div><h1 className="display-5 pt-5 mt-5">Fart Bar</h1>
      <h4>A Single Click Away From Simpsons Quotes.</h4>
        <div className="container mt-5">
          <ProgressBar className="progress-bar" variant="warning" now={this.state.percent} />
          </div>
        <button onClick={(e) => this.fillBar(e)} type="button" className="btn btn-lg btn-danger mt-5">Start Progress</button></div>
    }
    return(
      <div className="App-header">
        <div className="container Mid-cont text-center">
          {view}
        </div>
      </div>
    )
  }
}

export default App;
