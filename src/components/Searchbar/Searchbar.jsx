import React, { Component } from 'react'
import { toast } from 'react-toastify'
import {
  Header,
  Form,
  SearchButton,
  SearchFormButtonLabel,
  Input,
} from './Searchbar.styled'

export default class Searchbar extends Component {
  state = {
    img: '',
  }

  handleChange = ({ target }) => {
    const value = target.value

    this.setState({
      img: value.toLowerCase(),
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { img } = this.state
    const { onSubmit } = this.props

    if (img.trim() === '') {
      toast.warning('Tap some word for searching!')
      //   alert('Tap text for searching')
      return
    }
    onSubmit(img)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ img: '' })
  }

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchButton>

          <Input
            type="text"
            name="img"
            value={this.state.img}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    )
  }
}
