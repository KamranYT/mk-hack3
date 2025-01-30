import React from "react";
import Image from "next/image";
const ShopexOffer: React.FC = () => {
  const offers = [
    {
      img: "/delivery.png",
      title: "Fast Delivery",
      description:
        "Experience quick and reliable delivery for all your purchases.",
    },
    {
      img: "/cashback.png",
      title: "Secure Payment",
      description:
        "Enjoy safe and secure payment options for a worry-free experience.",
    },
    {
      img: "/quality.png",
      title: "Quality Products",
      description: "Get access to top-quality products from trusted brands.",
    },
    {
      img: "/24.png",
      title: "24/7 Support",
      description: "Our team is available around the clock to assist you.",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-[#151875] text-4xl mb-8 font-bold">Our Feature</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            img={offer.img}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  );
};

interface OfferCardProps {
  img: string;
  title: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ img, title, description }) => (
  <div className="w-[270px] bg-white shadow-lg rounded-lg flex flex-col items-center p-5 text-center">
    <Image
      src={img}
      alt={title}
      width={16}
      height={16}
      className="w-16 h-16 mb-4"
    />
    <h3 className="text-lg text-gray-800 mb-2 font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default ShopexOffer;
