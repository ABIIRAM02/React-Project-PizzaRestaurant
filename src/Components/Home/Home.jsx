
import { useEffect, useState } from 'react'

import image1 from '../../images/pizza1.jpg'
import image2 from '../../images/pizza2.jpg'
import image3 from '../../images/pizza3.jpg'
import image4 from '../../images/pizza4.jpg'

import './Home.css'

function Home()
{

  let [image , setImage] = useState([image1,image2,image3,image4]) 
  let [index , setIndex] = useState(2)

// useEffect(()=>
// {
//     setTimeout(() => {
        
//         setIndex(index => index < 3 ? index+1 : 0)

//     }, 2000);
// }, [index] )

    return(
        <section className="home" id='events' >

            <div className='container' >
            <i onClick={()=>
                {
                    if(index > 0)
                    {
                        setIndex(index-1)
                    }
                }} class='bx bxs-chevron-left arrows'></i>
            <img className='slider' src={image[index]} alt="" />
            <i onClick={()=>
                {
                    if(index < image.length-1)
                    {
                        setIndex(index+1)
                    }
                }} class='bx bxs-chevron-right arrows'></i>
            </div>



        </section>
    )

}

export default Home