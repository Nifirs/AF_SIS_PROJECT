import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Delete extends React.Component {


    constructor(props){
        super(props);

        this.state = { id: '',}
    }


    handleChange = e => {
        this.setState({id: e.target.value})
    }


    componentDidMount() {
        axios.get("http://localhost:5000/course/" + this.props.match.params.id).then(
            res => {
                this.setState({
                   id: res.data._id
                });
            }
        ).catch((err)=> {
            console.log(err);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.delete(`http://localhost:5000/course/delete/${this.state.id}`).then(
            res =>{
                console.log(res);
                console.log(res.data);
            }

        )

        this.props.history.push('/');
    }

    render() {
        return(

            <div style={{background:'lightblue' , padding:"50px", marginTop:"70px", marginLeft:"370px",marginRight:"370px",marginBottom:"150px"}} >
            <form onSubmit={this.handleSubmit}>
                <label style={{color:"black"}}>
                    <h6>Course ID:</h6>
                </label>&nbsp;&nbsp;
                <input type="text" name="id" onChange={this.handleChange} value={this.state.id}/>&nbsp;&nbsp;
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
            </div>
        )
    }
}
