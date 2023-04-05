import { useEffect, useState } from "react"

export default function Cart({cartList, setCartList}) {
    const [complete, setComplete] = useState(false);

    //compoenet on mount //this only runs once
    useEffect(()=>{
            console.log(cartList)
    },[])

    //componenet on udpate, runs everytime you setSomething
    useEffect(()=>{

    })

    const buyHandler = function(){
        setComplete(true)
        setCartList([]);

    }


    return <div>
        Cart
        {
            cartList.map(function(item, i){
                return <div key={item.title + i}>
                        {item.title}
                        {item.price}
                </div>
            })


        }
        <button className="buyBtn" onClick={buyHandler}>
            Buy
        </button>
        {
            complete ? <div>Purchase Completed</div>:""
        }
    </div>
}