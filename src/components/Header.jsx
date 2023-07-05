import { useState } from 'react';
import commerceLogo from '../image/commerceLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Deployable } from './Deployable';

const Header = () => {

    const [deployableState, setDeployableState] = useState({
        wishlist: false,
        cart: false,
        search: false
    });

    const deploy = (target) => {
        setDeployableState(prevState => ({
          ...prevState,
          [target]: !prevState[target]
        }));
    };
        

    return(
        <header id='header'>
            <div id="bar">
                <div id="middleBar">
                    <div id="leftMiddleBar">
                        <div id='wishlist' onClick={() => deploy("wishlist")}>
                            <FontAwesomeIcon icon={faHeart} className="fa-light" />
                        </div>
                        <div className={`wishlistStyle ${deployableState.wishlist ? 'shown' : ''}`}>
                            <Deployable type={"wishlistDesign"} tittle={"Wishlist"}/>
                        </div>
                    </div>
                    <div id="centerMiddleBar">
                        <a href="/" className='tittle'>
                            <img 
                                src={commerceLogo} 
                                alt="commerceLogo"
                                className="imageLogo"
                            />
                        </a>
                    </div>
                    <div id="rightMiddleBar">
                        <div id="rightMiddleBarOptions">
                            <div className="options" id='searchBar' onClick={() => deploy("search")}>
                                <FontAwesomeIcon icon={faSearch} className="fa-light" />
                            </div>
                            <div className="options" id='cart' onClick={() => deploy("cart")}>
                                <FontAwesomeIcon icon={faCartShopping} className="fa-light" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="searchContainer">
                <input className={`searchBar ${deployableState.search ? 'shown' : ''}`} type='text' placeholder=' Search...'></input>
            </div>
            <div className={`cartStyle ${deployableState.cart ? 'shown' : ''}`}>
                <Deployable type={"cartDesign"} tittle={"Cart"} />
            </div>
        </header>
    );
};

export default Header;