import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import { List } from './ImageGallery.styled'

function ImageGallery({ searchQuery, onClick }) {
  return (
    <List>
      {searchQuery &&
        searchQuery.map((img) => (
          <ImageGalleryItem key={img.id} card={img} onClick={onClick} />
        ))}
    </List>
  )
}

export default ImageGallery

//---------------тоже самое но классом
// import React, { Component } from 'react'

// export default class ImageGallery extends Component {

//   render() {
//     // console.log(this.state.newImage)
//     return (
//       <List>
//         {this.props.searchQuery &&
//           this.props.searchQuery.map((img) => (
//             <ImageGalleryItem
//               key={img.id}
//               card={img}
//               onClick={this.props.onClick}
//             />
//           ))}
//       </List>

//     )
//   }
// }
