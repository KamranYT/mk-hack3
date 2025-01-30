import { groq } from "next-sanity";

export const allProdcts = groq`*[_type == "product"]`;
export const HeroSofa = groq`*[_type == "product"][0] {
    _id,
    name,
    price,
    discountPercentage,
    image
  }`;
export const four = groq`*[_type=="product" && _id in ["8ptia17TGb7SGzDviwYL8G", "8ptia17TGb7SGzDviwYZhs", "gbTY3B2TxF1zfilLOh7ZwD", "gbTY3B2TxF1zfilLOh7FG0"]]{
    name,
    description,
    price,
    originalPrice,
    _id,
    image,
    stockLevel,
    categories,
    tags
}`;
