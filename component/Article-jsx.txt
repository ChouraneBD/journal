import React from 'react'
import './css/article.css'
const Article = ({ img, title, text }) => {
  return (
    <div className='container  row '>
      <div className="col-5" >
        <img className='img' src={img} alt="" />

      </div>
      <div className="content col-7">
        <h3 className="alert alert-dark">{title}</h3>
        <p>{text}</p>
      </div>
<br/><br/><br/>
    </div>
  )
}

export default Article