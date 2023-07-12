import { CContainer, CRow,CCol } from '@coreui/react'
import React from 'react'

const Plan =({icon,number,name, border})=>{
    
    return (<CCol>
        <div className='bancont' style={!border ? {border:'none'} : {}}>
       
            <img src={icon}/>
       
        <div>
            <h4>{number}</h4>
            <p>{name}</p>
        </div>
        </div>
    </CCol>
  )

}

Plan.defaultProps={
    border:true, 
}

function Banner() {
  return (
    <section className="ban" id='home'> 
<CContainer>
    <CRow>
        <CCol>
<div className='banh1'>
    <h2>Want anything to be easy with <span>LaslesVPN.</span></h2>
    <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
    <button className='banbutton'>Get Started</button>
</div>
        </CCol>
        <CCol>
        <div>
            <img src='/assets/img/Illustration.png'
            width="100%"
            />
        </div>
        </CCol>
    </CRow>
    <CRow className='d-flex justify-content-center bannerwrapper'>
        
       <Plan icon={'/assets/icon/user.svg'} number={'90+'} name={"Users"}/>
       <Plan icon={'/assets/icon/location.svg'} number={'50+'} name={"Locations"}/>
       <Plan icon={'/assets/icon/Server.svg'} number={"30+"} name={'Server'} border={false}/>



    </CRow>
</CContainer>

    </section>
  )
}

export default Banner