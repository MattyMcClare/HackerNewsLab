import React from 'react';
import CommentList from './CommentList';

const StoryDetail = (props) => {
    const { story } = props
    if (story === null) {
        return <p className='before'>Select a story for more details...</p>
    }

    const storyText = story.text || "No story yet!"

    const storyLink = story.url ? <a href={story.url}>Click to Read More</a> : <p>{storyText}</p>

    return (
        <>
            <div className="story-detail">
                <h3>{story.title}</h3>
                <p>by: {story.by}</p>
                {storyLink}
            </div>
            <div className='comment-container'>
                <CommentList comments={story.kids} />
            </div>
        </>
    )
}

export default StoryDetail;