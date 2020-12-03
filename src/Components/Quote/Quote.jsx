import React from 'react'

import Button from '../Button/Button'

import './Quote.css'

const Quote = ({onNewRequest, quote, onTweet}) => {

    let setSizeForLongText = '';
    if(quote[0].quote) {
        setSizeForLongText = quote[0].quote.length > 50 ? 'long-quote' : '';
    }

    return (
        <div className="quote-text">
            <i className="fas fa-quote-left"></i>
            <span 
                id="quote" 
                className={setSizeForLongText}
            >
                {' ' + quote[0].quote}
            </span>
            <div className="quote-author">
                <span id="author">{quote[0].character}</span>
            </div>
            <div className="button-container">
                <Button 
                    children={<i className="fab fa-twitter"></i>} 
                    cssClass="twitter-button"
                    id="twitter"
                    title="Tweet this!"
                    onSubmit={onTweet}
                />
                    
                <Button 
                    children="New Quote" 
                    id="new-quote"
                    onSubmit={onNewRequest}
                />
                    
            </div>
        </div>
    )
}

export default Quote;