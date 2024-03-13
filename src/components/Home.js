import { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import './style.css';
const Home = () => {
    const url = "http://localhost:9091/company";
    const [company, setCompany] = useState([]);    

    const fetchInfo = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setCompany(d))
      }

      useEffect(() => {
        fetchInfo();
      }, []);

      

  const remove = async (id) => { 
    fetch(`http://localhost:9091/company/${id}`, { 
      method: 'DELETE',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  }).then(() => { 
    let data = [...company].filter(x => x.id !== id);
    setCompany(data);
  });
}
    
    return (
        <div className="main">            
        <table>
            <thead>
                <th>COMPANY</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>ACTION</th>
            </thead>
            
        {company.map((companyObj, index) => {
          return (
          <tbody>
                    <tr>
                        <td>{companyObj.name}</td>
                        <td>{companyObj.date}</td>
                        <td>{companyObj.status}</td>
                        <td><Button onClick={() => remove(companyObj.id)}>Delete</Button></td>
                    </tr>                     
          </tbody>            
            
          );
        })} </table></div>
        
           
            
        );   
     
}
export default Home