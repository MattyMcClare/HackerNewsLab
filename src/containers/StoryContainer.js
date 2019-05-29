import React, { Component } from 'react';
import StoryDetail from '../components/StoryDetail';
import StorySelector from '../components/StorySelector';

class StoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            selectedStory: null
        }

        this.selectStory = this.selectStory.bind(this);
    }

    componentDidMount() {
        const url = "http://hacker-news.firebaseio.com/v0/topstories.json";
        fetch(url)
            .then(res => res.json())
            .then((stories) => {
                this.setState({ stories });
            })
    }

    selectStory(selectedIndex) {
        const selectedStory = this.state.stories[selectedIndex];
        this.setState({ selectedStory })
    }


    render() {
        return (
            <div className='story-container'>
                <h1>Hacker News</h1>
                <StoryDetail />
                <StorySelector
                    stories={this.state.stories}
                    onStorySelected={this.selectStory}
                />
            </div>
        )
    }
}

export default StoryContainer;