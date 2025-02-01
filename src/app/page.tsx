import {
  Hero,
  SofaFeature,
  ShopexOffer,
  TopCategories,
  Under,
  CenteredPage,
  LatestBlog,
  LatestProduct,
  ProductGrid,
} from "@/components";

function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      {/* <div className="mt-12 padding-x padding-y max-width"> */}
      {/* <div className="home__text-container"> */}
      <ProductGrid />
      <LatestProduct />
      <ShopexOffer />
      <SofaFeature />
      <TopCategories />
      <CenteredPage />
      <Under />
      <LatestBlog />
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}
export default Home;
