import React from 'react';
import CommentList from './CommentList';


class CommentDetail extends React.Component {

    render() {
        const { comments, by, text } = this.props
        if (!comments) {
            return (
                <div>
                    <h4>{by}</h4>
                    <p>{text}</p>
                </div>
            )
        }
        return (
            <div>
                <h4>{by}</h4>
                <p>{text}</p>
                <CommentList comments={comments} />
            </div>
        )
    }

}

export default CommentDetail;