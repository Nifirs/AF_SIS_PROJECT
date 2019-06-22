import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Marks = props =>(
    <tr>

        <td>{props.marks.Subject}</td>
        <td >{props.marks.regNo}</td>
        <td>{props.marks.Marks}</td>

        <td>
            <Link to={"/editM/"+props.marks._id}>Edit</Link>&nbsp;&nbsp;&nbsp;
            <Link to={"/deleteM/"+props.marks._id}>Delete</Link>

        </td>

    </tr>
);

export default class viewMarks extends React.Component{

    constructor(props){
        super(props);
        this.state = {marks:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({marks:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({marks:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    courseList(){
        return this.state.marks.map((currentCourse,i) =>{
            return <Marks marks={currentCourse} key={i}/>;
        });
    }






    render() {
        return(
            <div>
                <h2>View Marks</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Register No</th>
                        <th>Marks</th>

                        <th>Edit  &nbsp; Delete</th>



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
