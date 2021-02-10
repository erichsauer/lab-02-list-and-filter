import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        const renderedImages = this.props.filteredCreatures.map((singleCreature) => {
            return <div key={Math.random()} className='creatureDiv'>
                {singleCreature.title}
                <img key={singleCreature.title} alt={singleCreature.description} src={singleCreature.url} keyword={singleCreature.keyword}></img>
            </div>
        });
        return (
            <div className='results-div'>
                {renderedImages}
            </div>
        )
    }
}
