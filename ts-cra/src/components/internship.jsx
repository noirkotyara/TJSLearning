import React from 'react'

class User extends React.Component {
    constructor() {
        this.state = {
            score: 0
        }
    }
    increaseScore() { //update state asynchronously
        this.setState((state, props) => {
            return {score: state.score + 1}
        })
    }
    render() {
        return (
            <div>
                This is scored {this.state.score}
            </div>
        )
    }
}


class UnControlledForm extends React.Component {
    handleSubmit = () => {
        console.log('input value' + this.input.value)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                ref={(input) => this.input = input}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

function CustomForm(){
    let InputElement
    handleSubmit = () => {
        console.log('input value' + InputElement.value)
    }
    return(
        <form onSubmit={handleSubmit}>
                <input type="text"
                ref={(input) => InputElement = input}/>
                <button type='submit'>Submit</button>
            </form>
    )
}

<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'

// fetchUser принимает имя пользователя и возвращает promise
// который резолвится с данными пользователя
class Twitter extends Component {
    state = {
        user:null
    }
    static propTypes = {
        username: PropsType.string.isRequired
    }

  componentDidMount(){
       fetchUser(this.props.username)
       .then((user) => {
           return this.setState({user})
       })
  }
  render(){
      return this.props.children(this.state.user)
  }
}

React.Children.map(props.children, () => {}) //need to do like this