import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { CartItem } from "components/primary";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { toggleCartHidden } from "redux/cart/cart.actions";
import { selectCartItems } from "redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

// TODO: fix cart dropdown display in dark mode

const useStyles = makeStyles({
  cartDropdown: {
    position: "absolute",
    width: "240px",
    height: "340px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid black",
    backgroundColor: "white",
    top: "90px",
    right: "40px",
    zIndex: "5",
  },
  cartItems: {
    minHeight: "240px",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  myButton: {
    marginTop: "auto !important",
  },
  emptyMessage: {
    color: "black",
    textAlign: "center",
  },
});

interface MyCartDropdownProps {
  cartItems?: any[];
  toggleCartHidden?: () => void;
}

const MyCartDropdown: React.FC<MyCartDropdownProps> = ({ cartItems, toggleCartHidden }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems}>
        {cartItems?.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        {!cartItems ||
          (cartItems.length === 0 && (
            <span className={classes.emptyMessage}>Your cart is empty</span>
          ))}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden?.();
        }}
        className={classes.myButton}
        variant="outlined"
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export const CartDropdown = connect(mapStateToProps, mapDispatchToProps)(MyCartDropdown);
