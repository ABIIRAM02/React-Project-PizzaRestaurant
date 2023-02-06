import { Link } from 'react-router-dom'
import './PizzaData.css'

function PizzaData({probs}) 
{

    return(
        <section className='section'id="menu" >
            <div className='pizza'>
            <h1>THE BEST PIZZAS IN TOWN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, architecto facere numquam corrupti minus maxime.</p>
            </div>
            <div className="PizzaData" >

            {
                probs.map((data)=>
                {
                    return(
                       <Link to={`/PizzaInfo${data.id}`} ><div className="data">
                            
                            <div><img src={data.img} alt="" /></div>
                            <h2> <span> CATEGORY :  </span> {data.category}</h2>
                            <h2> <span> NAME :  </span> {data.name}</h2>
                            <h2> <span> $ </span>  {data.price[1]}</h2>

                        </div></Link>
                    )
                })
            }

            </div>
        </section>
    )
}

export default PizzaData