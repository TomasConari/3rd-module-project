import React, { useState, useEffect } from "react";

export const Content = ({ searchState }) => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setItems(data);
      setOriginalItems(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const filter = (event) => {
    const searchText = event.target.value.toLowerCase();
    if (searchText.length > 0) {
      const newItems = originalItems.filter((el) => {
        const { title, category, description } = el;
        return (
          title.toLowerCase().includes(searchText) ||
          category.toLowerCase().includes(searchText) ||
          description.toLowerCase().includes(searchText)
        );
      });
      setItems(newItems);
    } else {
      setItems(originalItems);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="searchContainer">
        <input className={`searchBar ${searchState ? "shown" : ""}`} type="text" placeholder=" Search..." onChange={filter} />
      </div>
      <div id="items" className="itemContainer">
        {items.map((el, i) => {
          return (
            <div key={i} id={el.title} className="item">
              <div className="imageContainer">
                <img className="productImages" src={el.image} alt={el.title} />
              </div>
              <h4>{el.title}</h4>
              <h5>${el.price}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
