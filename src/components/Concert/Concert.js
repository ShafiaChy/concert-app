import React from 'react';
import {useState,useEffect} from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Concert.css';

const Concert = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    // fetching data from singer.JSON file
    useEffect(() => {
        fetch('./singer.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    },[])

    // storing data from to new array to display on the Selected Singer cart
    const addSingers = singer =>{
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
        <div>
             <hr />
             {/* body section title */}
            <div className="body-title">
                <h2>Choose The Singers For <span className="music-fest-color">The Music Festival, 2021</span></h2>
             
            </div>
           
           {/* grid container for displaying singer information */}
            <div className="grid-container">
                <div className="row">
                    {
                        singers.map(singer => <Singers 
                            key = {singer.key}
                            singer={singer}
                            addSingers = {addSingers}
                            ></Singers>)
                    }
                </div>
                
                {/* cart div */}
                <div className="total-cost-div">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Concert;