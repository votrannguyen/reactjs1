import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function Demo(props) {
  const [on,setData] = useState(true);
  return (
    <div class="card"  >
      <div class={on?"displayTrue":"displayNone"} onClick={()=>setData(false)}>
        <span>{props.name}</span>
      </div>
      <div class={!on?"displayTrue":"displayNone"} onClick={()=>setData(true)}>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.doB}</p>
        <p>{props.startDate}</p>
        <p>{props.department}</p>
        <p>{props.annualLeave}</p>
        <p>{props.overTime}</p>
      </div>
        
    </div>
  );
}

export default Demo;