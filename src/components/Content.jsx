import { useState, useEffect } from "react";

export const Content = ({ searchState, setWishState, setCartState }) => {

  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=30");
      const data = await response.json();
      console.log(data);
      setItems(data);
      setOriginalItems(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const addTo = (list, id) => {
    if(list === "wish"){
        setWishState((prevState) => [...prevState, originalItems[id - 1]]);
    }else{
        setCartState((prevState) => [...prevState, originalItems[id - 1]]);
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

  const toggleItemExpand = (itemId) => {
    if (expandedItemId === itemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
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
        {items.map((el) => {
          const isExpanded = expandedItemId === el.id;
          return (
            <div
              id={el.title}
              className={`item ${isExpanded ? "expanded" : ""}`}
              onClick={() => toggleItemExpand(el.id)}
              key={el.id}
            >
              <div className="imageContainer">
                <img className={`productImages ${isExpanded ? "expanded" : ""}`} src={el.image} alt={el.title} />
              </div>
              <h4>{el.title}</h4>
              <h5>${el.price}</h5>
              {isExpanded && (
                <div className="additionalInfo">
                  <p>
                    {el.description}
                    <br />
                    <br />
                    <button onClick={() => addTo("wish", el.id)}>Add To Wishlist</button>
                    <button onClick={() => addTo("cart", el.id)}>Add To Cart</button>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
