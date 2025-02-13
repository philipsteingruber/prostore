import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LOCAL } from "@/lib/constants";

const Homepage = async () => {
  const latestProducts = getLatestProducts();

  return (
    <>
      {LOCAL ? (
        <ProductList
          data={sampleData.products}
          title="Newest Arrivals"
          limit={4}
        />
      ) : (
        <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      )}
    </>
  );
};

export default Homepage;
