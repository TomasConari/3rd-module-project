import { useState, useEffect } from "react";

export const Content = ({ searchState }) => {
  const [items, setItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=30");
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log("Error fetching data:", error);
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
        <input
          className={`searchBar ${searchState ? "shown" : ""}`}
          type="text"
          placeholder=" Search..."
        ></input>
      </div>
      <div id="items" className="itemContainer">
        {items.map((el, i) => {
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
                    <button>Add To Wishlist</button>
                    <button>Add To Cart</button>
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
