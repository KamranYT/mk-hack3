"use client";

import { FC } from "react";
import Head from "next/head";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { toast } from "react-toastify";

interface SocialSharingProps {
  product: {
    title: string;
    imageUrl: string;
    price: number;
    slug: string;
  };
}

const SocialSharing: FC<SocialSharingProps> = ({ product }) => {
  const productUrl = `https://next-ecommerce-template-4.vercel.app/api/product${product.slug}`;

  const message = `Exciting find of the day! I came across the incredible ${product.title} on Comforty, available at an unbeatable price of just $${product.price}. Its quality and features truly stand out! Don’t miss out—explore it here: ${productUrl}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(productUrl);
    toast.info("Link is Copied  !!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(message)}`;
    console.log(facebookUrl); // Debugging line to check if the URL is correct
    window.open(facebookUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message
    )}&url=${encodeURIComponent(productUrl)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      productUrl
    )}&text=${encodeURIComponent(message)}&source=${encodeURIComponent(
      product.imageUrl
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>{product.title} - Comforty</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={`Buy ${product.title} for just $${product.price}. Check it out on Comforty!`} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:image:alt" content={product.title} />
        <meta property="og:url" content={productUrl} />
        <meta property="og:type" content="product" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={`Buy ${product.title} for just $${product.price}.`} />
        <meta name="twitter:image" content={product.imageUrl} />
        <meta name="twitter:url" content={productUrl} />
      </Head>

      {/* Social Sharing Buttons */}
      <div className="flex gap-4 mt-16">
        {/* Copy URL */}
        <button
          onClick={copyUrl}
          className="relative group bg-[#007580] text-white p-3 rounded-full hover:opacity-90 flex items-center justify-center"
        >
          <FaLink className="md:size-8 size-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Link
          </span>
        </button>

        {/* WhatsApp Share */}
        <button
          onClick={shareOnWhatsApp}
          className="relative group bg-[#25D366] text-white md:p-3 p-2 rounded-full hover:opacity-90 flex items-center justify-center"
        >
          <FaWhatsapp className="md:size-8 size-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Share on WhatsApp
          </span>
        </button>

        {/* Facebook Share */}
        <button
          onClick={shareOnFacebook}
          className="relative group bg-[#3b5998] text-white md:p-3 p-2 rounded-full hover:opacity-90 flex items-center justify-center"
        >
          <FaFacebookF className="md:size-8 size-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Share on Facebook
          </span>
        </button>

        {/* Twitter Share */}
        <button
          onClick={shareOnTwitter}
          className="relative group bg-[#1DA1F2] text-white md:p-3 p-2 rounded-full hover:opacity-90 flex items-center justify-center"
        >
          <FaTwitter className="md:size-8 size-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Share on Twitter
          </span>
        </button>

        {/* LinkedIn Share */}
        <button
          onClick={shareOnLinkedIn}
          className="relative group bg-[#0077B5] text-white md:p-3 p-2 rounded-full hover:opacity-90 flex items-center justify-center"
        >
          <FaLinkedinIn className="md:size-8 size-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Share on LinkedIn
          </span>
        </button>
      </div>
    </>
  );
};

export default SocialSharing;