import React from 'react';
import CommentDetail from './CommentDetail'

const CommentList = ({ comments }) => {

    if (comments === null) {
        return <p>No comments</p>
    }

    const commentsItems = comments.map(comment => {
        return (
            <CommentDetail
                key={comment.id}
                by={comment.by}
                text={comment.text}
            >
            </CommentDetail>
        )
    })
    return (
        <div className="comment-list">
            <h3>Comments</h3>
            {commentsItems}
        </div>
    )
}

export default CommentList;