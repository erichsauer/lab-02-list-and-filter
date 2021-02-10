import React from 'react'
import ImageItem from './ImageItem/ImageItem'

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                <ImageItem hornedCreatures={this.props.hornedCreatures}/>
            </div>
        )
    }
}
