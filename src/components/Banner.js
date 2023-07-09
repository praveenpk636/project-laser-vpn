import { CContainer, CRow,CCol } from '@coreui/react'
import React from 'react'

const Icon =({icon,number,name})=>{
    
    return (<CCol>
        <div className='bancont'>
       
            <img src={icon}/>
       
        <div>
            <h4>{number}</h4>
            <p>{name}</p>
        </div>
        </div>
    </CCol>
  )

}

function Banner() {
  return (
    <section className="ban"> 
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
        
       <Icon icon={'/assets/icon/user.svg'} number={'90+'} name={"Users"}/>
       <Icon icon={'/assets/icon/location.svg'} number={'50+'} name={"Locations"}/>
       <Icon icon={'/assets/icon/Server.svg'} number={"30+"} name={'Server'}/>



    </CRow>
</CContainer>

    </section>
  )
}

export default Banner