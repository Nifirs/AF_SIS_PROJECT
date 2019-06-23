import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const Exam = props => (
    <tr>
        <td>{props.course.coursename}</td>
        <td>{props.course.courseId}</td>
        <td>{props.course.courseDur}</td>
        <td>{props.course.courseFee}</td>
        
        <td>
            <Link to ={ "/Edit/" + props.course._id}>Edit</Link>&nbsp;&nbsp;
            <Link to = {"/Delete/" + props.course._id}>Delete</Link>

        </td>

    </tr>
);


export default class courses extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/course/").then(
            res => {
                this.setState({courses: res.data});
            }
        ).catch((err)=> {
            console.log(err);
        })
    }

    componentDidUpdate() {
        axios.get("http://localhost:5000/course/").then(
            res => {
                this.setState({courses: res.data});
            }
        ).catch((err)=>{
            console.log(err);
        })
    }

    courseList(){
        return this.state.courses.map((currentCourse, i) =>{
            return <Exam course = {currentCourse} key = {i}/>
        })
    }


    render(){
        return(
            <div>

                <h3>View exams </h3>

                <table className="table table-striped bg-light" style={{marginTop:"20px",marginLeft:"10px",marginRight:"10px", marginBottom:"10px"}}>
                    <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Id</th>
                        <th>Course Duration</th>
                        <th>Course Fee</th>
                        <th>Edit &nbsp; Delete </th>
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

