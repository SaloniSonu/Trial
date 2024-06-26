import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import "../CSS/StProfile.css"

function StuProfilePage(){
  let[pf,setprofile]=useState("");
  let[imageURL,setImageUrl]=useState("")
  let {Id}=useParams();
  let[postion,setPosition]=useState("")
  let[journey,setJourney]=useState("")
  let[SRoll,setRoll]=useState();
  let[Name,setName]=useState("");
  let[Session,setSession]=useState("")

  function input1(event)
  {
     console.log(event.target.value);
     setPosition(event.target.value);
  }
  function input2(event)
  {
     console.log(event.target.value);
     setJourney(event.target.value);
  }

  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('SRoll',SRoll)
    formdata.append('SName',Name)
    formdata.append('Session',Session)
    formdata.append('Jobs',postion)
    formdata.append('Description',journey)

    
   
    fetch('http://localhost:8050/alumini/add', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Request sent successful:', data);
        alert("successfully updated !!!")
      })
      .catch(error => {
        console.error('Error during Added:', error);
      });
  }
   
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8050/student/getStudent/${Id}`);
          const response2 = await fetch(`http://localhost:8050/student/downloadImage/${Id}`);
         if (!response.ok ) {
           throw new Error('Network response was not okk');
         }
        //  if (!response.ok ) {
        //   throw new Error('Network response was not okk');
        // }
         const data = await response.json();
         setRoll(data.roll)
         const imageBlob = await response2.blob(); 
         const imageObjectUrl = URL.createObjectURL(imageBlob);
         console.log(data);
         setprofile(data);
         setName(data.name)
         setSession(data.ssession)
           setImageUrl(imageObjectUrl);
        //  console.log(profile); 
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
      <div  id="mySidebar">
      <span className="s2" id="sus">Welcome  {pf.name}</span>
          <span className="s1"><img id ="simg" height="120" width="120" src={imageURL} ></img></span>
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      <div id="pff">
        <div id="pff2">
          {/* <h2>Profile</h2> */}
            Profile<br></br>
          <label className="chik">Name</label><br></br>
          <input value={pf.name} disabled></input><br></br>
          <span className="chik">Session</span><br></br>
          <input value={`${pf.ssession} -${pf.ssession+4}`} disabled></input><br></br>
          <span className="chik">Branch</span><br></br>
          <input value={pf.branch} disabled></input><br></br>
          <span className="chik">Roll No</span><br></br>
          <input value={pf.roll} disabled></input><br></br>
          <span>Semester</span><br></br>
          <input value={pf.semester < 9 ? `${pf.semester}th` : " Degree Completed"} disabled></input><br></br>
          {/* <span>Date of Birth</span><br></br>
          <input value={pf.dob} disabled></input><br></br> */}
         


        </div>
        

        <div id="pff3">
          {/* <h2>Profile</h2> */}
          <br></br><label></label>
          <label>Mobile</label><br></br>
          <input id="iti"value={pf.mobile} disabled></input><br></br>
          <span>Email</span><br></br>
          <input id="iti" value={pf.email} disabled></input><br></br>
          <span>Linkedin</span><br></br>
          <input id="iti"value={pf.linkedin} disabled></input><br></br>
          <span>Github</span><br></br>
          <input id="iti"value={pf.github} disabled></input><br></br>
          <span>Portfolio</span><br></br>
          <input id="iti"value={pf.github} disabled></input><br></br>
          

        </div>
        <div id="pff3">
          {/* <h2>Profile</h2> */}
          <br></br><label></label>
          <span>Average CGPA</span><br></br>
          <input id="iti" value={pf.cgpa} disabled></input><br></br>
          <label>Backlogs</label><br></br>
          <input id="iti"value={pf.backlog} disabled></input><br></br>
          
          <span>Experiences</span><br></br>
          <input id="iti"value={pf.experience} disabled></input><br></br>
          <span>Skills</span><br></br>
          <input id="iti"value={pf.skills} disabled></input><br></br>
          <span>Interest</span><br></br>
          <input id="iti"value={pf.interest} disabled></input><br></br>
          <br></br><br></br>
         {/* <button style={{ width: '100px', color:"white",backgroundColor:'green' }}>Save details</button> */}
         <button style={{ display: pf.semester === 9 ? 'none' : 'block', backgroundColor: 'green', color: '#fff', marginLeft: '30%', marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Profile</button>

          

        </div>
      </div> 
      
      
      { pf.semester === 9 && (
          <div id="dd1">
          
          <textarea  value={postion} onChange={input1} rows="3" cols="60" placeholder="Share Current Position & Institution"></textarea>
            
          </div>
        )}
        { pf.semester === 9 && (
          <div id="dd">
          
            
            <textarea value={journey} onChange={input2} placeholder="Share your Placement Journey...."rows="7" cols="60"></textarea>

             <button onClick={submit} style={{backgroundColor: 'green', color: '#fff', marginLeft: '30%', marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Update Profile</button>
          </div>
        )}
      
    </div> 
  )
}
export default StuProfilePage;
