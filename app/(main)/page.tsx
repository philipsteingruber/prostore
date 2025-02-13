import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = getLatestProducts();
  const local = false;

  return (
    <>
      {local ? (
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
