import Book from './Book';
import {useState,useRef, useEffect} from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";

//import img from  "./sddssd"

//Read component data from a local JSON file or API
import bookList from "../data/data.json";


//t least one image, video or multimedia component 

export default function Home ({setScreen, cartList, setCartList}) {

    //state
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(0)
 
    

    //componenetDidUpdate
    //lists for when cart gets updated


    //componentDidUpdate
    //listens on cart List update
    useEffect(() => {
        setMessage(cartList.length)
    }, [cartList]);


 


    //At least one Event Handling, Lists And keys
   
    const buttonHandler = function (e) {
            console.log("click", e.target)
            setShow(!show)

    }

    const addToCart = function (item) {
        console.log("addToCart", item)
        setCartList([...cartList, item])
        ///...spread operator bring everyting in cartList
        // and add the additional item
    }

    //<img src={img} />

    return <div>
     
        <div className="loginButton"  onClick={()=> setScreen("login")}>
            Login
        </div>
        <div className="cartButton"  onClick={()=> setScreen("cart")}>
            Cart {message}
        </div>
        <h1>CSP Book Store</h1>
        <button onClick={buttonHandler}>Click me</button>
        <div className="bookContainer">
        {
            bookList.map((b)=>{

                let bookImg = "";
                if(b.img == "book1.jpg"){
                    bookImg = book1;
                } else if (b.img == "book2.jpg") {
                    bookImg = book2;
                } else {
                    bookImg = book3;
                }

                //Passing property from a parent component to a child component
                return <Book key={b.title} title={b.title}
                addToCart={addToCart}
                buttonHandler={buttonHandler}
                author={b.author}
                show={show}
                img={bookImg}
                price={b.price}
                >{b.desc}</Book>
            })
        }
        </div>

        {
            show ? <div>secret</div>:""
        }
       <div>
        {message}
       </div>
    </div>



}