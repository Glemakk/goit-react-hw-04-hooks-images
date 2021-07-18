import { useState, useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify'
// import fetchApi from './services/pixabayApi'
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
import Loader from './components/Loader'
import Modal from './components/Modal'

const App = () => {
  const [image, setImage] = useState([])
  const [searchImage, setSearchImage] = useState(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [largeImage, setLargeImage] = useState('')
  const isFirstRender = useRef(true)

  // if (isFirstRender.current) {
  //     console.log(isFirstRender)
  //     isFirstRender.current = false
  //     return
  //   }

  useEffect(() => {
    if (searchImage === null) {
      return
    }
    setLoading(true)
    fetch(
      `https://pixabay.com/api/?q=${searchImage}&page=${page}&key=21790462-d81f7d941fc30814a1e9b910b&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Word ${searchImage} is not exist`))
      })
      .then((data) => setImage((prevState) => [...prevState, ...data.hits]))
      .catch((error) => setError({ error }))
      .finally(() => setLoading(false))
    return () => {}
  }, [searchImage, page])

  const onClickLoadMore = () => {
    setPage((prevState) => prevState + 1)
  }

  const modalShow = (data) => {
    setShowModal(true)
    setLargeImage(data)
  }

  const modalHide = () => {
    setShowModal(false)
  }

  const onFormSubmit = (img) => {
    setSearchImage(img)
    setPage(1)
    setImage([])
  }

  return (
    <div className="app">
      {error && <h1>{error.message}</h1>}

      <Searchbar onSubmit={onFormSubmit} />
      <ImageGallery searchQuery={image} onClick={modalShow} />
      {image.length !== 0 && (
        <Button
          text="Load more"
          page={page}
          response={image}
          onClick={onClickLoadMore}
          showModal={showModal}
        />
      )}
      {loading && <Loader />}
      {showModal && <Modal onClose={modalHide} onOpen={largeImage} />}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}
export default App

//====================the old class
// export default class App extends Component {
//   state = {
//     image: [],
//     searchImage: null,
//     page: 1,
//     loading: false,
//     error: null,
//     showModal: false,
//     largeImage: '',
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { searchImage, page } = this.state
//     if (prevState.searchImage !== searchImage || prevState.page !== page) {
//       this.setState({ loading: true })
//       fetch(
//         `https://pixabay.com/api/?q=${searchImage}&page=${page}&key=21790462-d81f7d941fc30814a1e9b910b&image_type=photo&orientation=horizontal&per_page=12`,
//       )
//         .then((response) => {
//           if (response.ok) {
//             return response.json()
//           }
//           return Promise.reject(
//             new Error(`Word ${this.state.searchImage} is not exist`),
//           )
//         })
//         .then((data) =>
//           this.setState((prevState) => ({
//             image: [...prevState.image, ...data.hits],
//           })),
//         )
//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }))
//     }
//   }

//   onClickLoadMore = () => {
//     this.setState((prevState) => ({
//       page: prevState.page + 1,
//     }))
//   }

//   modalShow = (data) => {
//     this.setState({ showModal: true, largeImage: data })
//   }

//   modalHide = () => {
//     this.setState({ showModal: false })
//   }

//   onFormSubmit = (img) => {
//     this.setState({ searchImage: img, page: 1, image: [] })
//   }
//   render() {
//     const { image, loading, error, showModal, largeImage, page } = this.state
//     return (
//       <div className="app">
//         {error && <h1>{error.message}</h1>}

//         <Searchbar onSubmit={this.onFormSubmit} />
//         <ImageGallery searchQuery={image} onClick={this.modalShow} />
//         {image.length !== 0 && (
//           <Button
//             text="Load more"
//             page={page}
//             response={image}
//             onClick={this.onClickLoadMore}
//             showModal={showModal}
//           />
//         )}
//         {loading && <Loader />}
//         {showModal && <Modal onClose={this.modalHide} onOpen={largeImage} />}

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     )
//   }
// }
