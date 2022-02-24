import { Grid, ListItem, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { footerItemLinkProps, footerItemProps } from "./footer.data";

export const FooterSection: React.FC<footerItemProps> = ({ title, links }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Typography variant="h6" component="p" textAlign="center">
        {title}
      </Typography>
      <List>
        {links.map(({ id, name, route }: footerItemLinkProps) => (
          <ListItem key={id} disablePadding>
            <ListItemButton component="a" href={route}>
              <ListItemText sx={{ textAlign: "center" }} primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
