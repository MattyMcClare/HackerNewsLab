import React from 'react';
import StoryComments from './StoryComments';

const StoryDetail = ({ story }) => {

    if (story === null) {
        return <p>Select a story for more details...</p>
    }

    const storyText = story.text || "No story yet!"

    const storyLink = story.url ? <a href={story.url}>Click to Read More</a> : <p>{storyText}</p>

    return (
        <div className="story-detail">
            <h3>Title: {story.title}</h3>
            <p>By: {story.by}</p>
            {storyLink}
            <StoryComments />
        </div>
    )
}

export default StoryDetail;