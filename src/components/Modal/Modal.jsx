import { useEffect } from 'react'
import { Overlay, ModalWrapper } from './Modal.styled'

const Modal = ({ onClose, onOpen }) => {
  useEffect(() => {
    // console.log('запускаем')
    window.addEventListener('keydown', onImagesClick)

    return () => {
      // console.log('чистим за собой')
      window.addEventListener('keydown', onImagesClick)
    }
  })

  const onImagesClick = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <img src={onOpen.largeImageURL} alt={onOpen.tags} />
      </ModalWrapper>
    </Overlay>
  )
}

export default Modal

//===========the old class
// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onImagesClick)
//   }

//   onImagesClick = (e) => {
//     if (e.code === 'Escape') {
//       this.props.onClose()
//     }
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onImagesClick)
//   }

//   handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose()
//     }
//   }
//   render() {
//     return (
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalWrapper>
//           <img
//             src={this.props.onOpen.largeImageURL}
//             alt={this.props.onOpen.tags}
//           />
//         </ModalWrapper>
//       </Overlay>
//     )
//   }
// }
