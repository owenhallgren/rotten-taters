import { Component } from 'react'

class Form extends Component {
    constructor() {
        super() 
        this.state = {
            search: ''
        }
    }

    handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Search a movie'
                    name='search'
                    value={this.state.search}
                    onChange={e => this.handleChange(e)}
                />
            </form>
        )
    }
}


export default Form;