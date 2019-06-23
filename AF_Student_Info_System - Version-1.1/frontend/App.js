import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addassign from "./components/uploadassign";
import Download from './components/download';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import courses from './components/courses'
import Addcourses from './components/Addcourse'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Exam from './components/viewexam'
import View from './pages/view'



function App() {
  return (

   <div>
       <div align="center">
           <header>
               <Router>
                   <br/><br/>
                   <Link to='Addcourses'>Add Courses</Link>&nbsp; <label>| </label>&nbsp;
                   <Link to={'/courses'}> View Courses </Link>&nbsp; <label>| </label>&nbsp;
                   <Link to={'/Exam'}> View Exam </Link>&nbsp; <label>| </label>&nbsp;
                   <Link to='Addassign'>Upload </Link>&nbsp; <label>| </label>&nbsp;
                   <Link to='Download'>Download </Link>&nbsp; <label>| </label>&nbsp;
                   <Link to='View'>View </Link>


                   <Route exact path = '/Addcourses' component ={Addcourses}/>
                   <Route exact path = '/courses' component = {courses}/>
                   <Route exact path = '/Edit/:id' component = {Edit}/>
                   <Route exact path = '/Delete/:id' component = {Delete}/>
                   <Route exact path = '/Exam' component = {Exam}/>
                   <Route exact path = '/Addassign' component ={Addassign}/>
                   <Route exact path = '/Download' component ={Download}/>
                   <Route exact path = '/View' component ={View}/>



               </Router>
           </header>
       </div>

   </div>
  );
}

export default App;
