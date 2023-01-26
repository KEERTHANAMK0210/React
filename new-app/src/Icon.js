import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import './Icon.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
 import{BsFillAlarmFill} from 'react-icons/bs'

function Icon() {
  return (
    <div>
      <MDBCard className='ab'>
      <BsFillAlarmFill/>
      <MDBCardImage className='img' src='https://media.istockphoto.com/id/1061453284/vector/alarm-clock.jpg?s=612x612&w=0&k=20&c=1iUlDmJjuCUaN5d2cCcJbhbz2NXXrBtD8HZib5uOKQQ=' position='top' alt='...' />
      <MDBCardBody>
     
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default Icon
