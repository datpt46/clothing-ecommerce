import { Grid } from "@mui/material";
import { CollectionItem } from "components/primary";
import { Collections } from "pages/home/home.component";
import React from "react";

interface CollectionPreviewProps {
  productCollections: Collections[];
}

export const CollectionsPreview: React.FC<CollectionPreviewProps> = ({ productCollections }) => {
  return (
    <Grid container spacing={3}>
      {productCollections?.map((item: any) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <CollectionItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
