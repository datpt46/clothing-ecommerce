import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import womenImage1 from "assets/product-images/women/Back Detailed Beach Dress/Back Detailed Beach Dress.jpg";
import womenImage2 from "assets/product-images/women/Coord Tailored Shorts/Coord Tailored Shorts.jpg";
import womenImage3 from "assets/product-images/women/Fashion Hooded Knitted Jacket/Fashion Hooded Knitted Jacket.jpg";
import womenImage4 from "assets/product-images/women/Gathered Sleeve With Skirt Set/Gathered Sleeve With Skirt Set_1.jpg";
import { CollectionsPreview } from "components/primary";

export interface Collections {
  id?: number;
  name: string;
  price: number;
  priceDiscount: number;
  previewImage: string;
}

export interface ProductSectionProps {
  id?: number;
  title: string;
  collections: Collections[];
}

const productSectionsData: ProductSectionProps[] = [
  {
    id: 1,
    title: "Newest",
    collections: [
      {
        id: 2,
        name: "FILA x White",
        price: 204,
        priceDiscount: 150,
        previewImage: womenImage1,
      },
      {
        id: 3,
        name: "FILA x Black",
        price: 204,
        priceDiscount: 150,
        previewImage: womenImage2,
      },
      {
        id: 4,
        name: "FILA x Blue",
        price: 204,
        priceDiscount: 150,
        previewImage: womenImage3,
      },
      {
        id: 5,
        name: "FILA x Green",
        price: 204,
        priceDiscount: 150,
        previewImage: womenImage4,
      },
    ],
  },
  {
    id: 6,
    title: "Best Seller",
    collections: [
      {
        id: 7,
        name: "FALI x White",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage1,
      },
      {
        id: 8,
        name: "FALI x Black",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage2,
      },
      {
        id: 9,
        name: "FALI x Blue",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage3,
      },
      {
        id: 10,
        name: "FALI x Green",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage4,
      },
    ],
  },
  {
    id: 11,
    title: "Best Rated",
    collections: [
      {
        id: 12,
        name: "FLAI x White",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage1,
      },
      {
        id: 13,
        name: "FLAI x Black",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage2,
      },
      {
        id: 14,
        name: "FLAI x Blue",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage3,
      },
      {
        id: 15,
        name: "FLAI x Green",
        price: 402,
        priceDiscount: 150,
        previewImage: womenImage4,
      },
    ],
  },
];

export const HomePage = () => {
  return (
    <Box>
      {productSectionsData.map(({ id, title, collections }) => (
        <Container key={id} sx={{ marginBottom: "100px" }}>
          <Box>
            <Typography variant="h4" mb={5}>
              {title}
            </Typography>
            <CollectionsPreview productCollections={collections} />
          </Box>
        </Container>
      ))}
    </Box>
  );
};
