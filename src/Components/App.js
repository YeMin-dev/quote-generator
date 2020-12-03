import React, { Component } from 'react'
import stormconsultancy from '../apis/stormconsultancy'

import Container from './Container/Container'
import Loader from './Loader/Loader'

class App extends Component {

    state = {
        quote: {},
        isLoading: true
    }

    componentDidMount() {
        this.onNewQuote();
    }

    onNewQuote = async () => {
        const response = await stormconsultancy.get('/quotes');
        this.setState({quote: response.data, isLoading: false});
    }

    onTweetQuote = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quote.quote} \n- ${this.state.quote.character}`;
        window.open(twitterUrl, '_blank');
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? 
                <Loader /> 
                : 
                <Container 
                    onNewRequest={this.onNewQuote} 
                    quote={this.state.quote}
                    onTweet={this.onTweetQuote}/>
                }
            </div>
        )
    }
}

export default App;