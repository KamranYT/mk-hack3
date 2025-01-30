export interface Products {
    _id: string;
    name: string;
    _type: "product";
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
    image: string | { asset: { _ref: string; _type: "image" } }; // Allow both formats
  }
  