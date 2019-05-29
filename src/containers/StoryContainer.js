import React, { Component } from 'react';
import StoryDetail from '../components/StoryDetail';
import StorySelector from '../components/StorySelector';

class StoryContainer extends Component {
    render() {
        return (
            <>
                <StoryDetail />
                <StorySelector />
            </>
        )
    }
}

export default StoryContainer;