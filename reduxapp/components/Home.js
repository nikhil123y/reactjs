import React from 'react'

function Home(props) {
    console.warn("home",props.data)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home