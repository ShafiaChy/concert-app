import React from 'react';
import './Cart.css';


const Cart = (props) => {

    // destructuring
    const {cart} = props;

    let total = 0;
    let name = '';

    // adding name of the singers on the cart(singer selected) with the help of a function
    const addName = singerName => {
        const div = document.getElementById('singer-name-add');
        div.innerHTML=`<h3 class="heading-three">Name of the Singer:<span class="name-added">${singerName}</span></h3>`
        
    }
    
    // a loop to send names to the above function as well as to calculate the total
    for(const singer of cart){
        name = name +'<br>'+singer.name;
        addName(name);
        total = total + singer.earns; 
        
    }

    return (
        // displaying cart(selected singer) information
        <div>
            <h2>Singers Selected</h2>
            <h3 className="heading-three">Number of Singers: <span className="name-added">{props.cart.length}</span></h3>

            <div id="singer-name-add">

            </div>
           
            <hr />
            <h3 className="heading-three">Total Cost: $ <span className="name-added">{total}</span></h3>
            
        </div>
    );
};

export default Cart;