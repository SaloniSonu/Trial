import React, { useEffect, useState } from "react";
import "./Adminresult.css"
import { Link, useParams } from "react-router-dom";
function Adminresult()
{ 
let{Id}=useParams();
const [company,setcompany] = useState();
const [result,setresult] = useState();
const[student,setStudetns]=useState();
var i=1;
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8050/result/allC");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setcompany(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8050/student/allS");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setresult(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);

    return(
        <div>
            <div id="bcd"> I.K. Gujral Punjab Technical University</div>
            
            <div  id="mySidebar">
            <span className="s2" id="sus" >All Students</span>
                {
                    company && company.map(index=>(
                        <Link id="llll" to={`/CompanyWiseResult/${index}`}><span className="s1">{index}</span></Link>
                    ))
                }

           </div>
           <Link id="addu" to={`/AddResult/${Id}`}><button >Add more results</button></Link>
           <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Sl No.</th>
                        <th>Company Name</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Session</th>
                        <th>Branch</th>
                        <th>Role</th>
                        <th>CTC</th>
                        {/* <th>Branch</th> */}
                        {/* <th>Date</th> */}
                        
                    </thead>
                    {   
                        result && result.map(result =>(
                            <tr>
                               <td>{i++}</td>
                               <td>{result.compName}</td>
                               <td>{result.studName}</td>
                               <td>{result.roll}</td>
                               <td>{result.session}</td>
                               <td>{result.branch}</td>
                               <td>{result.role}</td>
                               <td>{result.ctc/100000} LPA</td>
                            </tr>
                        ))
                    }
                </table>
            </div>

           
           
            {/* <Link id="addu" to={`/AddResult/${Id}`}><button style={{ width: '60%', backgroundColor: 'green', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save All</button></Link> */}
            
        </div>
    )
}
export default Adminresult;