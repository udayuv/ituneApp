import React from 'react';

function NoResult() {
    let nothingToShowText = 'I don\'t have to show anything .'
        return (
            <div className="no-results">
                <h1>{nothingToShowText}</h1>
            </div>
        );
}

export default NoResult
