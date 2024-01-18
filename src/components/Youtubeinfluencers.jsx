import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Youtubeinfluencers = () => {
  return (
    <div className='container'>


    <h2>YouTube Influencers</h2>

     <div className='s-box'>
        <input  type='text'  className='search-box' placeholder='Search.......'/>
        <a className='btn'>Search</a>
     </div>

     <p className='search-text'>  <FaLightbulb style={{ color: '#FF9843' }} />  Search for an exact match by putting or phrase inside quotes For example <b> "apple juice"</b> <span>Advanced search tips</span>  </p>

     <hr style={{ borderColor: '#F0F1F1', opacity: 0.5 }} />


    <div className='filter-box'>
       <div className='f1'>
         <p>Filter your results</p>

         <a className='f-btn'>Countries</a>
         <a className='f-btn'>English</a>
         <a className='f-btn'>Category</a>
       </div>

       <div>
         <a className='f-btn'>Export</a>
       </div>


    </div>



      <div className='youtubedetails'> 

        <div className='details-box'>


        <div className='title-box'>
        <p>Channel</p>

<div>
  <p>Total <br/>Subscribers</p>
  <p>Subscriber <br/>change 1 mth</p>
  <p>Subscriber <br/>change 3 mths</p>
  <p>Videos</p>
  <p>Total Views</p>
  <p>View change <br/> 1mth</p>
  <p>View change <br/>3 mths</p>



</div>
        </div>
 

          <hr style={{ borderColor: '#F0F1F1', opacity: 0.5 }} />

          
          
          <div className='empty'>
        
          </div>

        </div>

      </div>

     



      
    </div>
  )
}

export default Youtubeinfluencers
