import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Deployable = ({ type, tittle, state, setState }) => {

    const [message, setMessage] = useState(true)

    const deleteFrom = (i) => {
        setState((prevState) => {
            const newState = [...prevState];
            newState.splice(i, 1);
            return newState;
        });
    };

    const buy = () => {
        setState([]);
        setMessage(false);
        setTimeout(() => setMessage(true), 2000);
    };
      

    if(tittle === "Wishlist"){
        return(
            <div className={type}>
                <h3>{tittle}</h3>
                <ol style={{ lineHeight: "1.2", listStyleType: "none"}}>
                    {state.map((el, i) => (
                        <li key={i}>
                            <div className="li">
                                <div>
                                    <img className="deployableImages" src={el.image} />
                                </div>
                                <div>
                                    {el.title} ${el.price}
                                </div>
                                <div>
                                    <button onClick={() => deleteFrom(i)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }else{
        return(
            <div className={type}>
                <h3>{tittle}</h3>
                <ol style={{ lineHeight: "1.2", listStyleType: "none"}}>
                    {state.map((el, i) => (
                        <li key={i}>
                            <div className="li">
                                <div>
                                    <img className="deployableImages" src={el.image} />
                                </div>
                                <div>
                                    {el.title} ${el.price}
                                </div>
                                <div>
                                    <button onClick={() => deleteFrom(i)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <div>
                    <button onClick={buy}>Buy</button>
                    <div className={message? 'showMessage' : ''}>
                        <p>Purchase Succesful!!</p>
                    </div>
                </div>
            </div>
        );
    };
};
  