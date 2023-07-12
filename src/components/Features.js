import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'

const Icon =({icon,name})=>{
    
    return (<CCol>
        <div className='icon1'>
       
            <img src={icon}/>
       
            <p>{name}</p>
        
        </div>
    </CCol>
  )}

function Features() {
  return (
    <section className='features' id='features'>
        <CContainer>
            <CRow>
                <CCol>
        <div className=''>
            <img src='/assets/img/Illustration2.png'
            width="600"
            />
        </div>
        </CCol>
        <CCol>
            <div className='feature'>
            <h2>We Provide Many Features You Can Use</h2>
            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <CCol className='icon2'>
                <Icon icon={'/assets/icon/Group.svg'} name={'Powerfull online protection.'}/>
                <Icon icon={'/assets/icon/Group.svg'} name={'Internet without borders.'}/>
                <Icon icon={'/assets/icon/Group.svg'} name={'Supercharged VPN'}/>
                <Icon icon={'/assets/icon/Group.svg'} name={'No specific time limits.'}/>
                
            </CCol>
            </div>
        </CCol>
        </CRow>
        </CContainer>
    </section>
  )
}

export default Features