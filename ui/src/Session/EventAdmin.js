import React, { useEffect, useState } from "react";
import "../Session/EventAdmin.css";
import { Link, useParams } from "react-router-dom";
function EventAdmin(){
  let{Id}=useParams();
  let[eventt,seteventt]=useState("");
  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/session/hate`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          seteventt(data);
          console.log(eventt); 
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[1])
  return(
    <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div id="offf">
        <div id="off1">Sessions</div>
        <Link to={`/addEvents/${Id}`}><div id="off2">Add More +</div></Link>
       </div>

       <div id="nobita">
          {
            eventt && eventt.map(ee=>(
              <div id="thiss"><h2>{ee.sname}</h2>
              <h4>Location : {ee.location}</h4>
              <h4>Speaker : {ee.speaker}</h4>
              <h4>Date : {ee.date}</h4>
              <h4>Timings : {ee.timings}</h4>
              <h4>Description : {ee.description}</h4>
              </div>
            ))
          }
          
        </div>
      
    </div>
  )
}
export default EventAdmin;