import React from 'react';
import CommentDetail from './CommentDetail'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = () => {
        const comments = this.props.comments
        const promises = comments.map(id => {
            return fetch(`http://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json())
        });
        Promise.all(promises)
            .then(commentObjects => {
                this.setState({ comments: commentObjects })
            })
    }

    render() {
        const { comments } = this.props
        console.log(comments)
        if (comments.length === 0) {
            return <p>No comments</p>
        }
        const commentsItems = this.state.comments.map(comment => {
            return (
                <CommentDetail
                    key={comment.id}
                    by={comment.by}
                    text={comment.text}
                    comments={comment.kids}
                >
                </CommentDetail>
            )
        })
        return (
            <div className="comment-list">
                {commentsItems}
            </div>
        )
    }
}







export default CommentList;