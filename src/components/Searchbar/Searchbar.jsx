import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  Header,
  Form,
  SearchButton,
  SearchFormButtonLabel,
  Input,
} from './Searchbar.styled'

const Searchbar = ({ onSubmit }) => {
  // console.log(onSubmit.length)
  const [query, setQuery] = useState('')

  const handleChange = ({ target }) => {
    const value = target.value

    setQuery(value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === '') {
      toast.warning('Tap some word for searching!')
      return
    }
    onSubmit(query)
    clearForm()
  }

  const clearForm = () => {
    setQuery('')
  }

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchButton>

        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  )
}

export default Searchbar

//=============hte old class
// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   }

//   handleChange = ({ target }) => {
//     const value = target.value

//     this.setState({
//       query: value.toLowerCase(),
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     const { query } = this.state
//     const { onSubmit } = this.props

//     if (query.trim() === '') {
//       toast.warning('Tap some word for searching!')
//       //   alert('Tap text for searching')
//       return
//     }
//     onSubmit(query)
//     this.clearForm()
//   }

//   clearForm = () => {
//     this.setState({ query: '' })
//   }

//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchButton>

//           <Input
//             type="text"
//             name="query"
//             value={this.state.query}
//             onChange={this.handleChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </Form>
//       </Header>
//     )
//   }
// }
