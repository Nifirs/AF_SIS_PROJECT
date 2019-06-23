import React from 'react';
import axios from 'axios';

export default class deleteAssingmemt extends React.Component {

    constructor(props){
        super(props);


        this.state ={
            id: '',

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5001/notifys/'+this.props.match.params.id)
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

        axios.delete(`http://localhost:5001/notifys/aDelete/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        this.props.history.push('/viewA');
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h6>Course ID:</h6>
                        <input type="text" name="id" onChange={this.handleChange} value={this.state.id}/>
                    </label>
                    <button className="btn btn-danger" type="submit">Delete</button>
                </form>
            </div>
        )
    }
}
