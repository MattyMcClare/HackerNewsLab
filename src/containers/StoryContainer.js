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
    }

    componentDidMount() {
        const url = "http://hacker-news.firebaseio.com/v0/topstories.json";
        fetch(url)
            .then(res => res.json())
            .then((stories) => {
                this.setState({ stories });
            })
    }


    render() {
        return (
            <div className='story-container'>
                <h1>Hacker News</h1>
                <StoryDetail />
                <StorySelector />
            </div>
        )
    }
}

export default StoryContainer;