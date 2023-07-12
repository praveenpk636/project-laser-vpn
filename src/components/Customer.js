import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'

const Plan =({img,name,discription})=>{
    return (
        <div className='customer'>
            <CContainer>
                <CRow className='containerrow'>
                    <CCol>
            <img src={img}/>
            </CCol>
            <CCol>
            <h5>{name}</h5>
            
            </CCol>
            </CRow>
            <CRow>
            <p>{discription}</p>
            </CRow>
    </CContainer>
        </div>
    )
}

function Customer() {
  return (
    <section>
        <div className='net d-flex justify-content-center'>
            <h2>Trusted by Thousands of Happy Customer</h2>
            <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
        <div className='cust'>
            <Plan img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/'} 
            name={'Praveen'} discription={'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'}/>
            
            
            <Plan img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/'} 
            name={'Praveen'} discription={'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'}/>
             
            <Plan img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/'} 
            name={'Praveen'} discription={'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'}/>
            
        
        </div>
        
    </section>

  )
}

export default Customer