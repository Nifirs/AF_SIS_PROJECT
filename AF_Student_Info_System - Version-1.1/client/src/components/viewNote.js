import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Note = props =>(
    <tr>

        <td>{props.note.Date}</td>
        <td className={props.note.completed ? 'completed':''}>{props.note.Subject}</td>
        <td className={props.note.completed ? 'completed':''}>{props.note.Note}</td>

        <td>
            <Link to={"/edit/"+props.note._id}>Edit</Link>&nbsp;&nbsp;&nbsp;
            <Link to={"/delete/"+props.note._id}>Delete</Link>

        </td>

    </tr>
);

export default class viewCourse extends React.Component{

    constructor(props){
        super(props);
        this.state = {notes:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({notes:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/notifys/')
            .then(response=>{
                this.setState({notes:response.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    courseList(){
        return this.state.notes.map((currentCourse,i) =>{
            return <Note note={currentCourse} key={i}/>;
        });
    }



    // delete(e){
    //     e.preventDefault();
    //     axios.delete('http://localhost:4000/course/delete/'+this.props.course._id)
    //         .then(res=>console.log(res.data))
    //
    // }
    //
    // deleteCourse(courseId){
    //     const {courses}=this.state;
    //     this.setState({
    //         courses:courses.filter(course => this.props.course._id !== courseId)
    //     })
    //
    // }
    // onDelete(){
    //     let courseId=this.props.courses.id;
    //     axios.delete(`http://localhost:4000/course/delete/${courseId}`)
    //         .then(response =>{
    //             this.props.history.push('/');
    //         }).catch(err=>console.log(err));
    // }


    render() {
        return(
            <div>
                <h2>View Course</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Note Date</th>
                        <th>Note Subject</th>
                        <th>Note</th>

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
