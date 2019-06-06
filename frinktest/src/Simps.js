import React from 'react';

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

      render() {
          return (
            <div>          
                <h1 className="display-4 pt-5 mt-5">{this.state.quote}</h1>
                <img className="mt-5" src={this.state.image} />
            </div>
          )
      }
}

export default Simps;