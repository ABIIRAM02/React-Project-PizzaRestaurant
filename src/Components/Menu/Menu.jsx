import { useState } from "react";
import PizzaData from '../PizzaData/PizzaData'

function Menu()
{
    let [pizza , setPizza] = useState( null )

    fetch('http://localhost:7000/pizza')
    .then((res)=>{ return(res.json())})
    .then((data)=>{setPizza(data);})


    return(
        <section className="menu"  >
            {pizza && <PizzaData probs={pizza} />}  
        </section>
    )
}

export default Menu