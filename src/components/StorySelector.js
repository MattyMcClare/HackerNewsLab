import React from 'react';

const StorySelector = (props) => {

    const options = props.stories.map((story, index) => {
        return (
            <option
                value={index}
                key={index}>
                {story}
            </option>);
    })

    function handleSelectChange(evt) {
        const selectedIndex = evt.target.value;
        props.onStorySelected(selectedIndex);
    }

    return (
        <select
            onChange={handleSelectChange}
            defaultValue="default">
            <option
                disabled value="default">
                select a story...
            </option>
            {options}
        </select>
    )
}

export default StorySelector;