import Title from "./Title"

export default function Book ({addToCart, price, title, img , author, children,show, buttonHandler}){


    return <div className="bookItem">
         
            <img src={img} style={{width: "150px"}}/>
            <Title>{title}</Title>
            
            <p>{children}</p>
            {/* Passing property from a child component to parent component (use a callback */}
            <button onClick={buttonHandler}>Inside Button</button>
            {
                show ? <div>{author}</div>: ""
            }
            <div>
                ${price}
            </div>
            <button className="purchaseBtn" onClick={() => addToCart({
                price: price,
                title: title
            })}>
                Purchase
            </button>


    </div>
}