import React, {useEffect, useState} from 'react';
import CreateNewProject from './modals/createNewProjectModal';
import View from './modals/viewModal';
import axios from "axios";

function ClientDashboard(){    
    
        const [projectData, setProjectData] = useState('');
    
        useEffect(()=>{
            // Replace the Authorization Token here. 
            const options = {
                headers: {
                    "Authorization": "Token " + localStorage.getItem("token"),
                },
            };
            axios
              .get(
                "https://bug-tracker01.herokuapp.com/api/user/project",
                options
              )
              .then(
                (response) => {
                  console.log(response.data);
                  setProjectData(response.data);
                },
                (error) => {
                  console.log(error);
                }
              );
              },[])
    
    return(
        <>
        
        <div className="container">
        <br />
        <CreateNewProject />
        <br />
        <table>
        <thead>
          <tr>
              <th>Project</th>
              <th>Description </th>
              <th>View </th>
          </tr>
        </thead>

        <tbody>
          {projectData && 
                projectData.map((item, index) => {
                    return  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td><View projectId={item.id} /></td>
                  </tr>
                })
          }
        </tbody>
      </table>
        </div>

        
        </>
    )
}

export default ClientDashboard;