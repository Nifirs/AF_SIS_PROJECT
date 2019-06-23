import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import classNames from "classnames";
import _ from "lodash";
import {upload} from "../helpers/upload";

export default class Addcourse extends React.Component {

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


        this.state = {

            form: {
                files: []

            },

            errors: {
                files: null
            }
        };



        this._onTextChange = this._onTextChange.bind(this);
        //this._onSubmit = this._onSubmit.bind(this);
        this._formValidation = this._formValidation.bind(this);
        this._onFileAdded = this._onFileAdded.bind(this);
        this._onFileRemove = this._onFileRemove.bind(this)


    }


    _onFileRemove(key)
    {
        let {files} = this.state.form;

        files.splice(key, 1);

        this.setState({
            form: {
                ...this.state.form,
                files: files
            }
        })


    }

    _onFileAdded(event) {

        let files = _.get(this.state, 'form.files', []);


        _.each(_.get(event, 'target.files', []), (file) => {

            files.push(file);

        });


        this.setState({

            form: {
                ...this.state.form,
                files: files,
            }
        }, () => {

            this._formValidation(['files'], (isValid) => {


            });
        });

    }

    _formValidation(fields = [], callback = () => {}) {

        let {form, errors} = this.state;


        const validations = {

            files: [
                {
                    errorMessage: 'File is required.',
                    isValid: () => {
                        return form.files.length;
                    }
                }
            ]

        };


        _.each(fields, (field) => {


            let fieldValidations = _.get(validations, field, []); // validations[field];


            errors[field] = null;


            _.each(fieldValidations, (fieldValidation) => {


                const isValid = fieldValidation.isValid();

                if (!isValid) {
                    errors[field] = fieldValidation.errorMessage;
                }

            });


        });


        this.setState({
            errors: errors
        }, () => {

            let isValid = true;

            _.each(errors, (err) => {

                if (err !== null) {
                    isValid = false;
                }
            });
            return callback(isValid);

        });


    }

    //
    // _onSubmit(event) {
    //     event.preventDefault();
    //
    //     this._formValidation([ 'files'], (isValid) => {
    //
    //
    //         if (isValid) {
    //             // the form is valid and ready to submit.
    //
    //             const data = this.state.form;
    //
    //             if (this.props.onUploadBegin) {
    //
    //                 this.props.onUploadBegin(data);
    //             }
    //             upload(data, (event) => {
    //
    //                 if (this.props.onUploadEvent) {
    //                     this.props.onUploadEvent(event);
    //                 }
    //             })
    //
    //         }
    //     });
    // }

    _onTextChange(event) {

        let {form} = this.state;

        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        form[fieldName] = fieldValue;
        this.setState({form: form});

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

        const newcourse = {
            coursename:this.state.coursename,
            courseId:this.state.courseId,
            courseDur:this.state.courseDur,
            courseFee:this.state.courseFee
        }

        axios.post("http://localhost:5000/course/add",newcourse).then(res => console.log(res.data));

        this._formValidation([ 'files'], (isValid) => {


            if (isValid) {
                // the form is valid and ready to submit.

                const data = this.state.form;

                if (this.props.onUploadBegin) {

                    this.props.onUploadBegin(data);
                }
                upload(data, (event) => {

                    if (this.props.onUploadEvent) {
                        this.props.onUploadEvent(event);
                    }
                })

            }
        });


        this.setState({
            coursename:'',
            courseId:'',
            courseDur:'',
            courseFee:''
        })
    }

    render(){


        const {form, errors} = this.state;
        const {files} = form;

        return(
            <div>
                <div style={{background:'url(https://www.pixelstalk.net/wp-content/uploads/2016/06/Books-Wallpaper-books-to-read-1920-1200-620x388.jpg) center/cover' , padding:"50px", marginTop:"70px", marginLeft:"370px",marginRight:"370px",marginBottom:"150px"}} align="left">
                    <pre>
                            <h3> Create Exam</h3><br/>
                                 <form onSubmit={this.onSubmit} >

                                     <label>Exam date  : </label><br/>
                                     <input type="text" className="form-control" value={this.state.coursename} onChange={this.changecoursename } required /><br/><br/>
                                     <label>Exam ID : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseId} onChange={this.changecourseId} required/><br/><br/>
                                     <label>Exam Duration : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseDur} onChange={this.changecourseDur} required/><br/><br/>
                                     <label>Exam Time : </label><br/>
                                     <input type="text" className="form-control" value={this.state.courseFee} onChange={this.changecourseFee} required/><br/><br/>



                                      <div className={'app-card-header'}>
                        <div className={'app-card-header-inner'}>


                            {


                                files.length ? <div className={'app-files-selected'}>

                                    {
                                        files.map((file, index) => {

                                            return (
                                                <div key={index} className={'app-files-selected-item'}>
                                                    <div className={'filename'}>{file.name}</div>
                                                    <div className={'file-action'}>
                                                        <button onClick={() => this._onFileRemove(index)}
                                                                type={'button'} className={'app-file-remove'}>X
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div> : null


                            }

                            <div className={classNames('app-file-select-zone', {'error': _.get(errors, 'files')})}>
                                <label htmlFor={'input-file'}>
                                    <input onChange={this._onFileAdded} id={'input-file'} type="file" multiple={true}/>
                                    {
                                        files.length ? <span className={'app-upload-description text-uppercase'}>Add more files</span> :
                                            <span>
                                                <span className={'app-upload-icon'}><i className={'icon-picture-streamline'} /> </span><br/>
                                                <span className={'app-upload-description'}>Drag and drop your files here.</span>
                                            </span>
                                    }
                                </label>
                            </div>


                            <div className={'app-form-actions'}>
                                <input type="submit" className="btn-primary" value="Add" />
                            </div>


                        </div>
                    </div>

                                 </form>

                        <div><br/>
            </div>


                    </pre>
                </div>
            </div>
        )
    }
}

