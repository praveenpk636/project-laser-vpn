import { CContainer, CRow,CCol } from '@coreui/react'
import React from 'react'

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
</CContainer>

    </section>
  )
}

export default Banner