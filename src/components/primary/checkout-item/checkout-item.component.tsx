import React from "react";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "redux/cart/cart.actions";
import { Dispatch } from "redux";

const useStyles = makeStyles({
  checkoutItem: {
    width: "100%",
    display: "flex",
    minHeight: "100px",
    borderBottom: "1px solid darkgrey",
    padding: "15px 0",
    fontSize: "20px",
    alignItems: "center",
  },
  imageContainer: {
    // width: "23%",
    width: "20%",
    height: "180px",
    paddingRight: "15px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  name: {
    width: "23%",
  },
  price: {
    width: "23%",
  },
  quantity: {
    width: "23%",
    paddingLeft: "20px",
    display: "flex",
  },
  arrow: {
    cursor: "pointer",
  },
  value: {
    margin: "0 10px",
  },
  removeButton: {
    paddingLeft: "12px",
    cursor: "pointer",
  },
});

// TODO: add type annotation
interface CheckoutItemProps {
  cartItem: any;
  clearItem?: (item: any) => void;
  addItem?: (item: any) => void;
  removeItem?: (item: any) => void;
}

const MyCheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  const classes = useStyles();
  const { name, quantity, price, previewImage } = cartItem;
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={previewImage} alt="item" />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={() => removeItem?.(cartItem)}>
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div className={classes.arrow} onClick={() => addItem?.(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>${price}</span>
      <div className={classes.removeButton} onClick={() => clearItem?.(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

// TODO: add type annotation
const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: any) => dispatch(clearItemFromCart(item)),
  addItem: (item: any) => dispatch(addItem(item)),
  removeItem: (item: any) => dispatch(removeItem(item)),
});

export const CheckoutItem = connect(null, mapDispatchToProps)(MyCheckoutItem);
