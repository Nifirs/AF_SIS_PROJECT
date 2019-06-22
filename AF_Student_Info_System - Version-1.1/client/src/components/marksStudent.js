import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Marks = props =>(


        <tr>

            <td>{props.marks.Subject}</td>
            <td>{props.marks.regNo}</td>
            <td>{props.marks.Marks}</td>


        </tr>



);

export default class marksStudent extends React.Component{

    constructor(props){
        super(props);
        this.state = {marks:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/notifys')
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
                {/*<div style={{marginLeft:'1000px'}}>*/}
                {/*<h2>View Notes</h2>*/}

                <div style={{marginLeft:400 , marginRight:400}}>
                <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                <tr>
                <th>Subject</th>
                <th>Register No</th>
                <th>Marks</th>
                </tr>
                </thead>

                <tbody>
                {this.courseList()}
                </tbody>
                </table>
                </div>

            </div>
        )
    }
}
