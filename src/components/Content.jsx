import { useState , useEffect } from "react";

export const Content = ({ searchState }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('https://fakestoreapi.com/products?limit=30');
            const data = await response.json();
            console.log(data);
            setItems(data);
          }catch(error){
            console.log("Error fetching data:", error);
          };
        };
    
        fetchData();
    }, []);

    return(
        <div>
            <div className="searchContainer">
                <input className={`searchBar ${searchState ? 'shown' : ''}`} type='text' placeholder=' Search...'></input>
            </div>
            <div id="items">
                {items.map((el) => {
                    return(
                        <div id={el.id}>
                            <img className="productImages" src={el.image} alt={`${el.title} image`} />
                            <h3>{el.title}</h3>
                            <h6>{el.price}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};