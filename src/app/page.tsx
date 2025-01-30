import ProductGrid from "@/components/productgrid";
import LatestProduct from "@/components/latest";
import LatestBlog from "@/components/blog";
import CenteredPage from "@/components/shopupdate";
import Under from "@/components/img";
import TopCategories from "@/components/Categories";
import ShopexOffer from "@/components/ShopexOffer";
import SofaFeature from "@/components/SofaFeature";
import { Hero } from "@/components";


function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h2 className="home__text-title">Shop by Category</h2>
          <ProductGrid />
          <LatestProduct />
          <ShopexOffer />
          <SofaFeature />
          <TopCategories />
          <CenteredPage />
          <Under />
          <LatestBlog />
        </div>
      </div>
    </main>
  );
}
export default Home;
