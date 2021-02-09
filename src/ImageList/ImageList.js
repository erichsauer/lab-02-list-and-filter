import React from 'react'
import ImageItem from './ImageItem/ImageItem'

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                Image List has {this.props.hornedCreatures.length} items.
            <ImageItem />
            </div>
        )
    }
}
