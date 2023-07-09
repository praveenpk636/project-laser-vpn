import { CCol, CContainer, CRow } from '@coreui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

    
    
const Icon=({icon,h1,p1,p2,p3,p4,p5,h2,b})=>{
    return (
        <CCol className='plancontainer'>
        <img src={icon}
        width="100"/>
        <h4>{h1}</h4>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>
        <div>
            <h3>{h2}</h3>
            <button>{b}</button>
        </div>
    </CCol>
    )
    

}



function Plan() {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        getUser();
      }, []);

    async function getUser(){
        try {
            const response = await axios.get('https://lasalesvpn.free.beeceptor.com/plans');
            console.log(response.data);
            setPlans(response.data.data);
          } catch (error) {
            console.error(error);
          }
        
    }


  return (
    <section>
        <div className='plan d-flex justify-content-center'>
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>

        </div>
        <CContainer>
            <div>
                <CRow>
                    {
                        plans.map(item=>(
<CCol className=''>
                        <Icon icon={"/assets/img/Free.png"} h1={"Free Plan"} p1={"Unlimited Bandwitch"} p2={"Encrypted Connection"}
                            p3={"No Traffic Logs"} p4={"Works on All Devices"}p5={"connection"} h2={"Free"} b={"Select"}/>
                    </CCol>
                        ))
                    }
                    
                  
                </CRow>
            </div>
        </CContainer>
    </section>
  )
}

export default Plan