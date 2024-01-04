import React from "react"
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit"

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src="https://www.bing.com/th/id/OGC.d767e125c6fbf265452e36aa438d98cb?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f491923%2fscreenshots%2f1815379%2fblack-flip.gif&ehk=waQW9JXdC9AdmMgqSLSmsgJKkdBt1TDCyz02P1Kp6fI%3d" height="60" alt="" loading="lazy" />
            AUTOMATIC COUNTER APPLICATION
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
