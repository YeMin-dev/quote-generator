import React from 'react'

import Quote from '../Quote/Quote'

import './Container.css'

const Container = ({onNewRequest, quote, onTweet}) => {
    return (
        <div className="quote-container">
            <Quote onNewRequest={onNewRequest} quote={quote} onTweet={onTweet}/>
        </div>
    );
}

export default Container;