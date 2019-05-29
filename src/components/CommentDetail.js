import React from 'react';

const CommentDetail = ({ text, by }) => {
    return (
        <div>
            <h4>{by}</h4>
            <p>{text}</p>
        </div>
    )
}

export default CommentDetail;