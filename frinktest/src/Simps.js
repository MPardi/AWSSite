import React from 'react';
import Button from 'react-bootstrap/Button'

class Simps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: null,
            quotes: null,
            character: null,
            image: null
        }
    }

    componentDidMount() {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                quote: result[0].quote,
                character: result[0].character,
                image: result[0].image
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      reload() {
        window.location.reload()
      }

      render() {
          return (
            <div>          
                <h1 className="display-5 pt-5 mt-5">{this.state.quote}</h1>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                            </div>
                            <div className="col-6">
                                <h5>{this.state.character}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="mt-5" src={this.state.image} />
                <div className="container mt-5">
                    <Button variant="danger" size="lg" onClick={(e) => this.reload(e)}>Reset</Button>
                </div>
            </div>
          )
      }
}

export default Simps;