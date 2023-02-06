import { useEffect, useState } from 'react'
import './Cart.css'


function Cart()
{

    let [cart ,setCart] = useState(null)

    useEffect(()=>{

        fetch('http://localhost:7000/cart')
        .then((res)=>{
            return(res.json()); 
        })
        .then((data)=>{
            console.log(data);setCart(data)
        })

    },[])
 
    return(
        <div>
            {cart && 
            <section>
                {
                    cart.map((data)=>{
                        return(
                            <section>

                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                fetch('http://localhost:7000/cart/' + data.id , {method:"DELETE"})
                                .then(()=>{
                                window.location.reload();
                                })
                            }} className="cart">
                                <img src={data.pizza.img} alt="" />
                                <h2>{data.pizza.name}</h2>
                                <h2>₹{data.pizza.price[data.size]}</h2>
                                <h2>(x{data.input})</h2>
                                <h2>Additional Incrediants ₹{data.extra}</h2>
                                <h2>TOTAL ₹{data.pizza.price[data.size]*data.input+data.extra} </h2>
                                <button >Remove</button>
                            </form>                            

                            </section>
                        )
                    })
                }
            </section>}
            {cart==false && <h2 className='msg' > EMPTY CART., ADD ITEMS IN HOME</h2> } 
        </div>
    )
}

export default Cart