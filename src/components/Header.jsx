import { useState } from 'react';
import commerceLogo from '../image/commerceLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Deployable } from './Deployable';

const Header = ({ searchState , setSearchState}) => {

    const [deployableState, setDeployableState] = useState({
        wishlist: false,
        cart: false
    });

    const deploy = (target) => {
        setDeployableState(prevState => ({
          ...prevState,
          [target]: !prevState[target]
        }));
    };
        

    return(
        <header id="header">
            <div id="bar">
                <div id="middleBar">
                    <div id="leftMiddleBar">
                        <div id="wishlist" onClick={() => deploy('wishlist')}>
                            <FontAwesomeIcon icon={faHeart} className="fa-light" />
                        </div>
                        <div className={`wishlistStyle ${deployableState.wishlist ? 'shown' : ''}`}>
                            <Deployable type={'wishlistDesign'} tittle={'Wishlist'} />
                        </div>
                    </div>
                    <div id="centerMiddleBar">
                        <img
                            src={commerceLogo}
                            alt="commerceLogo"
                            className="imageLogo"
                        />
                    </div>
                    <div id="rightMiddleBar">
                        <div id="rightMiddleBarOptions">
                            <div className="options" id="searchBar" onClick={() => setSearchState(!searchState)}>
                                <FontAwesomeIcon icon={faSearch} className="fa-light" />
                            </div>
                            <div id="cart" className="options" onClick={() => deploy('cart')}>
                                <FontAwesomeIcon icon={faCartShopping} className="fa-light" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`cartStyle ${deployableState.cart ? 'shown' : ''}`}>
                <Deployable type={'cartDesign'} tittle={'Cart'} />
            </div>
    </header>

    );
};

export default Header;