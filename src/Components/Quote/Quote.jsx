import React from 'react'

import Button from '../Button/Button'

import './Quote.css'

const Quote = ({onNewRequest, quote, onTweet}) => {

    let setSizeForLongText = '';
    if(quote.quote) {
        setSizeForLongText = quote.quote.length > 50 ? 'long-quote' : '';
    }

    return (
        <div className="quote-text">
            <i className="fas fa-quote-left"></i>
            <span 
                id="quote" 
                className={setSizeForLongText}
            >
                {' ' + quote.quote}
            </span>
            <div className="quote-author">
                <span id="author">{quote.author}</span>
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