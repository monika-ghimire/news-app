import React from 'react'

export default function Newsitems(props) {
  return (
    <>
     <div class="card my-3" style={{width: "18rem"}}>
  <img src={props.imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desciption}</p>
    <a href={props.newsUrl}  class="btn btn-primary">Read More</a>
  </div>
</div>
    </>
  )
}



 