import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import png from '../../images/png.png'
import './PizzaInfo.css'

function PizzaInfo()
{
    let {id} = useParams()
    let h = useHistory()
    let [pizza , setPizza] = useState(null)

 useEffect(()=>{    fetch('http://localhost:7000/pizza/' + id)
    .then((res)=>{
        return(res.json())
    })
    .then((data)=>{
        setPizza(data);
    })
},[])
    

    let [size , setSize] = useState(1)
    let [extra , setExtra] = useState(0)
    let [input , setInput] = useState(1)


    let fun = (e)=>
    {
        e.preventDefault()
        let cartData = { pizza ,extra , size , input }

        fetch('http://localhost:7000/cart',
        {
        method:'POST',
        headers:{"Content-Type" : "application/json" },
        body:JSON.stringify(cartData)
        })
        .then(()=>{
            alert('Added to cart')
            h.push('/')
        })
    }


    return(
        <section className="Pizzainfo">
            {pizza && 
            <form className="info" onSubmit={fun} >

                <div className='info-left' >
                <img src={pizza.img} alt="" />
                </div>
                <div className='info-right'>
                    <h2 >{pizza.name}</h2>
                    <h3>₹ {pizza.price[size]*input+extra} </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cum expedita perferendis nulla, fuga quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo non placeat quasi facilis cum temporibus voluptatum illo ipsa sit?</p>
                    <h4  >choose the size</h4>
                    <div className='png' >
                        <div onClick={()=>{setSize(0)}} >
                    <img src={png} alt="" />
                    <h4>Small</h4>
                        </div>
                        <div onClick={()=>{setSize(1)}} >
                    <img src={png} alt="" />
                    <h4>Medium</h4>
                        </div>
                        <div onClick={()=>{setSize(2)}} >
                    <img src={png} alt="" />
                    <h4>Large</h4>
                        </div>
                    </div>

                <section className='additional' >                    
                <h1>Choose Additional Incrediants</h1>
                <div className='check' >
                    <label >Extra-Cheese</label><input onClick={(e)=>{
                        setExtra(extra + 10)
                        if( e.target.checked===false )
                        {
                            setExtra(extra - 10)
                        }
                    }} type="checkbox" />
                    <label >Extra-Toppings</label><input onClick={(e)=>{
                        setExtra(extra + 10)
                        if( e.target.checked===false )
                        {
                            setExtra(extra - 10)
                        }
                    }} type="checkbox" /> 
                    <label >Extra-mayo</label><input onClick={(e)=>{
                        setExtra(extra + 10)
                        if( e.target.checked===false )
                        {
                            setExtra(extra - 10)
                        }
                    }} type="checkbox" /> 
                    <label >WaterBottle</label><input onClick={(e)=>{
                        setExtra(extra + 10)
                        if( e.target.checked===false )
                        {
                            setExtra(extra - 10)
                        }
                    }} type="checkbox" /> 
                </div>
                </section>

                <section className="add-to-cart">
                    <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="number" defaultValue={1} min='1' required />
                    <button type='submit' > Add-To-Cart</button>
                </section>
                </div>

            </form>
            }
        </section>
    )
}

export default PizzaInfo