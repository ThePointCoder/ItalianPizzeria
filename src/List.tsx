import React from 'react'

const List = ({list}: any) => {
    
    return (
        <div className="grid grid-rows gap-2 p-2 font-quicksand font-medium">
            {list.map((pizza: any) => (
                <div className="p-3 rounded-xl grid-cols-2 gap-2 h-full xl:grid" style={{backgroundColor:"hsla(45,70%,70%,0.7)", gridTemplateColumns:"55% 45%"}} key={pizza.id}>
                    <div className="max-h-full">
                        <h2 className="bg-blue-200 px-1 py-1">{ pizza.title }</h2>
                        <ul className="bg-gray-50 p-1 m-0">
                            <li>Pizza Type: {pizza.type}</li>
                            <li classNam="bg-yellow-100">Cheese: {pizza.cheese}</li>
                            <li>Topping: {pizza.topping}</li>
                            <li classNam="bg-red-100">Sauce: {pizza.sauce}</li>
                        </ul>
                    </div>
                    <img className="mt-3 xl:mt-0" style={{height: "15vh"}} src={pizza.image} alt="Pizza Image" />
                </div>
            ))}
        </div>
    )
}

export default List;