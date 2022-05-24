import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrwnLogo} from './../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils"

import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

// import { CartContext } from "../../contexts/cart.context"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"



const Navigation = () => {
  const dispatch = useDispatch();
  // const { currentUser} = useContext(UserContext);

  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='Logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                      SIGN OUT
                    </NavLink>
                  ) : (
                      <NavLink to='/auth'>SIGN IN</NavLink>
                  )
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}
  
export default Navigation