import React from 'react'

function Object() {
    const car=[{ type:"fiat",model:"500",color:"white",Image:"https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?s=612x612&w=0&k=20&c=MkM3U9ruXp2wKCgYKeL6DyZ9H5WFIHtyRWsbOMokrFg="}
    ,{ type:"jfhj",model:"600",color:"red",Image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y="}
    ,{ type:"fiat",model:"500",color:"black",Image:"https://media.istockphoto.com/id/907671144/photo/new-black-metallic-sedan-car-in-spotlight-modern-desing-brandless.jpg?s=612x612&w=0&k=20&c=21WCXCFFvFYtO9-0UiAhNH8xaC8p12IT9_dNHqm9klk="}];
    console.log(car)
  return (
    car.map((a)=>
    <div>
    <div className='w-25 p-1'>
        <div class="card">
      <div class="card-body">
  <img src={a.Image} width="100%"/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text"><h1>{a.type},{a.model},{a.color}</h1></p>
     <a href="#!" class="btn btn-primary">cars</a>
  </div>
</div>
</div>
    </div>
  ))
}

export default Object
