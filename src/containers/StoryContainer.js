import React, { Component } from 'react';
import StoryDetail from '../components/StoryDetail';
import StorySelector from '../components/StorySelector';
import CommentList from '../components/CommentList'

class StoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            selectedStory: null
        };
        this.selectStory = this.selectStory.bind(this);
    }
})

    }

selectStory(selectedIndex) {
    const selectedStory = this.state.stories[selectedIndex];
    this.setState({ selectedStory })
    // const comments = selectedStory.kids
    // const promises = comments.map((id) => {
    //     return fetch(`http://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //         .then(res => res.json())
    // });
    // Promise.all(promises)
    //     .then(commentObjects => {
    //         this.setState({ comments: commentObjects })
    //     })
}



render() {

    const commentList = this.state.comments ? <CommentList comments={this.state.comments} /> : null
    return (
        <div className='story-container'>
            <h1>Hacker News</h1>
            <StorySelector
                stories={this.state.stories}
                onStorySelected={this.selectStory}
            />
            <StoryDetail story={this.state.selectedStory} />
            {commentList}
        </div>
    )
}
}

export default StoryContainer;