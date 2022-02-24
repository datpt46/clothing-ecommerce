import React from "react";
import { makeStyles } from "@mui/styles";

// TODO: add type annotation
interface CartItemProps {
  item: any;
}

const useStyles = makeStyles({
  cartItem: {
    width: "100%",
    display: "flex",
    height: "80px",
    marginBottom: "15px",
    color: "black",
  },
  image: {
    width: "30%",
  },
  itemDetails: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "10px 20px",
  },
  name: {
    fontSize: "16px",
  },
});

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.cartItem}>
      <img className={classes.image} src={item.previewImage} alt="item" />
      <div className={classes.itemDetails}>
        <div className={classes.name}>{item.name}</div>
        <div className="price">
          {item.quantity} x ${item.price}
        </div>
      </div>
    </div>
  );
};
