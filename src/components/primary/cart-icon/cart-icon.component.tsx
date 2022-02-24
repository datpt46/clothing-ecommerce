import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleCartHidden } from "redux/cart/cart.actions";
import { selectCartItemsCount } from "redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const useStyles = makeStyles({
  cartIcon: {
    width: "45px",
    height: "45px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
  },
  shoppingIcon: {
    width: "24px",
    height: "24px",
  },
  itemCount: {
    position: "absolute",
    fontSize: "11px",
    fontWeight: "bold",
    bottom: "14px",
  },
});

interface MyCartIconProps {
  toggleCartHidden?: () => void;
  itemCount?: number;
}

const MyCartIcon: React.FC<MyCartIconProps> = ({ toggleCartHidden, itemCount }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartIcon} onClick={toggleCartHidden}>
      <ShoppingBagOutlinedIcon className={classes.shoppingIcon} />
      <span className={classes.itemCount}>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(MyCartIcon);
