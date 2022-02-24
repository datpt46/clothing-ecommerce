import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addItem } from "redux/cart/cart.actions";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface MyCollectionItemProps {
  item: any;
  addItem?: (item: any) => void;
}

const MyCollectionItem: React.FC<MyCollectionItemProps> = ({ item, addItem }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia component="img" height="200" image={item.previewImage} alt="collection-item" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button size="small">Details</Button>
        <Button onClick={() => addItem?.(item)} size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

// TODO: fix any type
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export const CollectionItem = connect(null, mapDispatchToProps)(MyCollectionItem);
