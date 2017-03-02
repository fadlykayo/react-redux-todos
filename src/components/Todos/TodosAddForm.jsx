import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = {
  input: {
    width: '30%',
    padding: '0px 10px',
    textAlign: 'left'
  }
}

import { fetchNewTodos } from '../../actions'

class TodosAddForm extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit (event) {
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <form onSubmit={e => {
                  e.preventDefault(); return this.props.fetchNewTodos(this.state.text)}}>
        <input
          style={style.input}
          id='add'
          type='text'
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='Add to list...' />
        {'  '}
        <button type='submit' className='btn light-green darken-3'>
          <i className='material-icons'>add</i>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNewTodos: (newTodo) => dispatch(fetchNewTodos(newTodo))
})

export default connect(null, mapDispatchToProps)(TodosAddForm)
