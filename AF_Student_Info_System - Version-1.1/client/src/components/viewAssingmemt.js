import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Asin = props =>(

    <tr>

        <td>{props.asins.Subject}</td>
        <td >{props.asins.regNo}</td>
        <td><a href={props.asins.Link}>Click to Download</a></td>


        <td>
            <Link to={"/deleteA/"+props.asins._id}>Delete</Link>

        </td>

    </tr>





);

export default class viewAssingmemt extends React.Component{

    constructor(props){
        super(props);
        this.state = {asins:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({asins:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({asins:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    courseList(){
        return this.state.asins.map((currentCourse,i) =>{
            return <Asin asins={currentCourse} key={i}/>;
        });
    }






    render() {
        return(
            <div>
                <h2>View Assingmemt</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Register No</th>
                        <th>Link</th>

                        <th>Remove</th>



                    </tr>
                    </thead>

                    <tbody>
                    {this.courseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
