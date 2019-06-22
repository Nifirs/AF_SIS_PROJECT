import React, {Component} from 'react';
import axios from 'axios';


export default class editNote extends React.Component{
    constructor(props){
        super(props);

        this.changeSubject = this.changeSubject.bind(this);
        this.changeRegNo = this.changeRegNo.bind(this);
        this.changeMarks= this.changeMarks.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Subject:'',
            RegNo:'',
            Marks:'',
            completed:false

        }
    }


    componentDidMount() {
        axios.get('http://localhost:4000/notifys/'+this.props.match.params.id)
            .then(response =>{


                this.setState({
                    Subject: response.data.Subject,
                    RegNo: response.data.regNo,
                    Marks: response.data.Marks,
                    completed:response.data.completed


                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    changeSubject(e){
        this.setState({
            Subject: e.target.value
        });
    }

    changeRegNo(e){
        this.setState({
            RegNo: e.target.value
        });
    }
    changeMarks(e){
        this.setState({
            Marks:e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();


        const newMark={
            Subject:this.state.Subject,
            regNo:this.state.RegNo,
            Marks:this.state.Marks,
            completed:this.state.completed

        };
        axios.post('http://localhost:4000/notifys/mUpdate/'+this.props.match.params.id,newMark)
            .then(res => console.log(res.data));

        this.props.history.push('/viewM');

    }

    delete(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/course/delete/'+this.props.match.params.id)
            .then(res=>console.log(res.data))

    }

    render() {
        return(
            <div>
                <h2>Edit course</h2>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group" align="left">
                        <label style={{color:'white'}}>Subject </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Subject}
                               onChange={this.changeSubject}
                        /><br/></div>
                    <div className="form-group" align="left">
                        <label style={{color:'white'}}>Register No </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.RegNo}
                               onChange={this.changeRegNo}
                        /><br/></div>
                    <div className="form-group" align="left">
                        <label style={{color:'white'}}>Marks </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Marks}
                               onChange={this.changeMarks}
                        /><br/></div>
                    <div>
                        <div className="form-group">
                            <input type="submit"
                                   className="btn btn-primary"
                                   value="Update Course"

                            />
                        </div></div>
                </form>

            </div>
        )
    }
}