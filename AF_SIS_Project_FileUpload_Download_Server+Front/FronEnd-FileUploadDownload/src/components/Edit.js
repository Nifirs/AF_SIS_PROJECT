import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

export default class Editcourse extends React.Component {

    constructor(props){
        super(props);



        this.changecoursename = this.changecoursename.bind(this);
        this.changecourseId = this.changecourseId.bind(this);
        this.changecourseDur = this.changecourseDur.bind(this);
        this.changecourseFee = this.changecourseFee.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            coursename: '',
            courseId: '',
            courseDur: '' ,
            courseFee:''

        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/course/" + this.props.match.params.id).then(
            res => {
                this.setState({
                    coursename: res.data.coursename,
                    courseId: res.data.courseId,
                    courseDur: res.data.courseDur,
                    courseFee: res.data.courseFee
                });
            }
        ).catch((err)=> {
            console.log(err);
        })
    }

    changecoursename(e){
        this.setState({
            coursename: e.target.value
        });
    }

    changecourseId(e){
        this.setState({
            courseId: e.target.value
        });
    }

    changecourseDur(e){
        this.setState({
            courseDur: e.target.value
        });
    }

    changecourseFee(e){
        this.setState({
            courseFee: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newobj = {
            coursename:this.state.coursename,
            courseId:this.state.courseId,
            courseDur:this.state.courseDur,
            courseFee:this.state.courseFee
        }

        axios.post("http://localhost:5000/course/update/"+ this.props.match.params.id,newobj).then(res => console.log(res.data));
        this.props.history.push('/');

        this.setState({
            coursename:'',
            courseId:'',
            courseDur:'',
            courseFee:''
        })
    }

    render(){
        return(
            <div>
                <div style={{background:'url(https://www.pixelstalk.net/wp-content/uploads/images3/Spring-iPhone-HD-Wallpaper-Free-download-349x620.jpg) center/cover' , padding:"50px", marginTop:"70px", marginLeft:"370px",marginRight:"370px",marginBottom:"150px"}} align="left">
                    <pre>
                            <h3> Edit a course module</h3><br/>
                                 <form onSubmit={this.onSubmit} >

                                     <label>course name : </label><br/>
                                     <input type="text" className="form-control" value={this.state.coursename} onChange={this.changecoursename} /><br/><br/>
                                     <label>course ID : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseId} onChange={this.changecourseId}/><br/><br/>
                                     <label>course Duration : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseDur} onChange={this.changecourseDur}/><br/><br/>
                                     <label>course Fee : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseFee} onChange={this.changecourseFee}/><br/><br/>
                                     <input type="submit" className="btn-primary" value="Edit course" />

                                 </form>
                    </pre>
                </div>
            </div>
        )
    }
}

