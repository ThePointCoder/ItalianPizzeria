import React, { useState, useEffect } from 'react'
import List from './List'

const Menu: any = () => {

    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/pizzas')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setText(data);
                setLoading(false);
            });
        }, 1000);
    }, []);

    return(
        <div className="grid h-full xl:justify-center">
            { loading && <div>Loading...</div>}
            {text && <List list={text}/>}
        </div>
    )
        
}

export default Menu; 