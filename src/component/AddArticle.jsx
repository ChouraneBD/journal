import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { add } from '../feature/articleSlice';
const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handeladd = () => {
    
    dispatch(add({ id: "5", title, text, img }))
    navigate('/')
  }

  return (
    <div className='container '>
      <h1 className='alert alert-dark'>Add Article</h1>
      <form className="form">
        <label >Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />

        <label >Text</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} className='form-control' cols="30" rows="10"></textarea>
        {/* <input type="text" value={text}  onChange={(e)=>setText(e.target.value)} className='form-control' /> */}

        <label >Image</label>
        <input type="file" value={img} onChange={(e) => setImg(e.target.value)} className='form-control' />

        <button onClick={handeladd} className='btn btn-success mt-5' >Submit</button>


      </form>

    </div>
  )
}

export default AddArticle