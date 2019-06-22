import React from 'react';
import axios from 'axios';

export default class deleteNote extends React.Component {

    constructor(props){
        super(props);


        this.state ={
            id: '',

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/notifys/'+this.props.match.params.id)
            .then(response =>{


                this.setState({
                    id: response.data._id,
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    handleChange (event) {
        this.setState({
            id: event.target.value });
    };



    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:4000/notifys/mDelete/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        this.props.history.push('/viewM');
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Course ID:
                        <input type="text" name="id" onChange={this.handleChange} value={this.state.id}/>
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}
