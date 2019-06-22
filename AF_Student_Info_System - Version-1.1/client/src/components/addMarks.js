import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default class addMarks extends React.Component{

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

        console.log(`Form submitted:`);
        console.log(`Note Date :${this.state.Subject}`);
        console.log(`Note Sub :${this.state.RegNo}`);
        console.log(`Note :${this.state.Marks}`);
        console.log(`Course Fee :${this.state.completed}`);

        const newNote={
            Subject:this.state.Subject,
            regNo:this.state.RegNo,
            Marks:this.state.Marks,
            completed:this.state.completed

        };
        axios.post('http://localhost:4000/notifys/mAdd',newNote)
            .then(res => console.log(res.data));


        this.setState({
            Subject:'',
            RegNo:'',
            Marks:'',
            completed:false
        })
    }




    render(){
        return(
            <div style={{background:'grey'}}>

                <div style={{background:'url(https://cdn.allwallpaper.in/wallpapers/2950x2094/12093/learning-books-education-jackets-light-2950x2094-wallpaper.jpg) center/cover' , marginTop:'40px', marginLeft:'500px', marginRight:'500px' , padding:'20px'}}>
              <pre>  <h2 style={{color:'white'}}>Add Marks</h2>
                <form onSubmit={this.onSubmit} ><div>
                    <div className="form-group" align="left">
                    <label style={{color:'white'}}>Subject </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Subject}
                               onChange={this.changeSubject}
                        required
                        /><br/></div>
                    <div className="form-group" align="left">
                    <label style={{color:'white'}}>Register Number </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.RegNo}
                           onChange={this.changeRegNo}
                           required
                    /><br/></div>
                    <div className="form-group" align="left">
                    <label style={{color:'white'}}>Note </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.Marks}
                           onChange={this.changeMarks}
                           required
                    /><br/></div>
                    <div>

                        <input type="submit" value="Add Marks" className="btn btn-primary"/></div></div>
                </form></pre>
                </div>
            </div>
        );
    }
}