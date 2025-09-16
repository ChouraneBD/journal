import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteArticle } from '../feature/articleSlice'

import { Link } from 'react-router-dom'
import Article from './Article'
const Journal = () => {
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch()
    return (


        <div className=" container card">

            <div className="card-title alert bg-dark text-light row" >
                
                    <h1>JOURNALE</h1>
                
                </div >
                    <Link to={'/add'}>
                        <button className='btn btn-primary float-end ' >Add Article</button>
                    </Link>
            <div className="card-body  mt-5  ">
                <ul className="list-group d-flex mx-2 justify-content-between ">
                    {articles.map(article =>
                        <div key={article.id} >
                            <li className='list-group-item d-flex   justify-content-between' >
                                <div>
                                    <Article img={`./img/${article.img}`} title={article.title} text={article.text} />
                                    
                                   
                                    

                                </div>
                                <div >
                                    <Link to={`/edit/${article.id}`}>
                                        <button className='btn btn-success  bt  ' >Edit</button>
                                    </Link>
                                    <Link to={'/'}>
                                        <button onClick={() => dispatch(deleteArticle({ id: article.id }))} className='btn btn-danger mt-4 ' >delete</button>
                                    </Link>
                                </div>
                            </li></div>

                    )}

                </ul>
            </div>
        </div>

    )
}

export default Journal