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
    <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 py-12">
      {/* Section Title */}
      <h1 className="text-[#151875] text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
        What Shopex Offer!
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
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
  <div className="w-full max-w-[300px] bg-white shadow-lg rounded-lg flex flex-col items-center p-6 text-center transition-transform transform hover:scale-105">
    <Image
      src={img}
      width={70}
      height={70}
      alt={title}
      className="mb-4"
    />
    <h3 className="text-lg sm:text-xl font-semibold text-[#151875]">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

export default ShopexOffer;
