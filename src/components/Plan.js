import { CCol, CContainer, CRow } from '@coreui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

    
    
const Icon=({icon,h1,p1,h2,b,features})=>{
    return (
        <CCol className='plancontainer'>
        <img src={icon}
        width="100"/>
        <h4>{h1}</h4>
        <p>{p1}</p>
        <div className='features'>
       {features.map(feature=>
        
        <p>{feature.name}</p>)}
                           
            
        </div>
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
    <section className='plans'>
        <div className='plan d-flex justify-content-center'>
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>

        </div>
        <CContainer>
            <div>
                <CRow>
                    {
                        plans.map(item=>(
<CCol className=''>{console.log(item.features)}
                        <Icon icon={"/assets/img/Free.png"} h1={item.plan} p1={item.id}features={item.features}  h2={item.month} b={"Select"}/>
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