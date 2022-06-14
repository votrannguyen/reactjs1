
import './App.css';
import {STAFFS,DEPARTMENTS} from './staffs.jsx'
import {useState} from 'react'
import Demo from './Demo';
import dateFormat from 'dateformat';
function App() {

  //console.log(DEPARTMENTS[0]);
  

  return (
    <div class="row">
      {
        STAFFS.map((item,index)=>(
          <div className="col-lg-4 col-md-6 col-sm-12" key={item}>
          
          <Demo
              
              id={item.id} 
              name={item.name} 
              doB={ dateFormat(item.doB, "dd/mm/yyyy")} 
              startDate={ dateFormat(item.startDate, "dd/mm/yyyy")}
              department ={item.department.name}
              annualLeave ={item.annualLeave}
              overTime ={item.overTime}
            >

            </Demo>
          </div>
          
        ))
      }
    </div>
  );
}

export default App;
