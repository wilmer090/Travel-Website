import React from 'react'
import {Link} from 'react-router-dom'

function CardItems(props){

	const {path,src,label,text} = props

	return(
		<>
		  <li className='cards__item'>
           <Link className='cards__item__link' to={{pathname: path}} target='_blank'>
           <figure className='cards__item__pic-wrap' data-category={label}>
             <img
              className='cards__item__img'
              alt='Travel Image'
              src={src}
             />
            </figure>
            <div className='cards__item__info'>
             <h5 className='cards__item__text'>{text}</h5>
            </div>
           </Link>
         </li>
		</>
		)
}

export default CardItems