import './style.css';
import { useState } from 'react';

const AddCompany  = () => {
  
const[id,setId] = useState('')
const[name,setName] = useState('')
const[date,setDate] = useState('')  
const[status,setStatus] = useState('')
 
    
const handleSubmit = (event) => {
  event.preventDefault(); 
  
  const company = {id,name,date,status};     
     
  console.log(company.id+company.name);

  fetch("http://localhost:9091/company",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(company)
          
      }).then(() => {
          console.log("one list added")        
          
      })
       
  }
    
    return(
        <div className="main">
            Add entries
          <form>
          
            <label for="id">ID</label>
            <input type="number" name="id" id="id" value={id} onChange={(event)=>setId(event.target.value)} />
            <label for="name">Company name:</label>
            <input type="text" name="name" id="name" value={name} onChange={(event)=>setName(event.target.value)}/>
            <label for="date">Date</label>
            <input type="date" name="date" id="date" value={date} onChange={(event)=>setDate(event.target.value)} />
            <label for="status">Status:</label>
            <input type="text" name="status" id="status" value={status} onChange={(event)=>setStatus(event.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            
          </form>
          {name}
          
        </div>
    )
}
export default AddCompany;