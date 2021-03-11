import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
function Cards(){
	return(

		<div className='cards'>
		  <h1>Check out these EPIC destination now</h1>	
		  <div className='cards__container'>
		   <div className='cards__wrapper'>
 		    <ul className='cards__items'>
            <CardItems
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='https://www.gettyimages.com/photos/amazon-rainforest-waterfall?phrase=amazon%20rainforest%20waterfall&sort=mostpopular'
            />
            <CardItems
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='https://ph.hotels.com/go/indonesia/best-islands-around-bali'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='https://www.nationalgeographic.org/activity/crossing-the-atlantic-then-and-now/'
            />
            <CardItems
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='https://www.britannica.com/place/Himalayas'
            />
            <CardItems
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='https://www.britannica.com/place/Sahara-desert-Africa'
            />
          </ul>
		   </div>
		  </div>
		</div>
	)
}

export default Cards
	
