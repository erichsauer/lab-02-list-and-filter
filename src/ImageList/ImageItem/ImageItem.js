import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        const renderedImages = this.props.hornedCreatures.map((singleCreature) => {
            return <div>
                {singleCreature.title}
                <img key={singleCreature.title} alt={singleCreature.description} src={singleCreature.url} keyword={singleCreature.keyword}></img>
            </div>
        });
        return (
            <>
                {renderedImages}
            </>
        )
    }
}
