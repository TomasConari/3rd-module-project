import { useState } from 'react';
import commerceLogo from '../image/commerceLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Deployable } from './Deployable';

const Header = () => {

    const [wishlist, setWishlist] = useState(true);
    const [cart, setCart] = useState(true);

    return(
        <header>
            <div id="bar">
                <div id="middleBar">
                    <div id="leftMiddleBar">
                        <div id='wishlist' onClick={() => setWishlist(!wishlist)}>
                            <FontAwesomeIcon icon={faHeart} className="fa-light" />
                        </div>
                        <div className="wishlistStyle" id={wishlist ? "shownCart" : ""}>
                            <Deployable />
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
                            <div className="options" id='searchBar'>
                                <input type='text'></input>
                                <FontAwesomeIcon icon={faSearch} className="fa-light" />
                            </div>
                            <div className="options" id='cart' onClick={() => setCart(!cart)}>
                                <FontAwesomeIcon icon={faCartShopping} className="fa-light" />
                            </div>
                            <div className="cartStyle" id={cart ? "shownCart" : ""}>
                                <Deployable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;