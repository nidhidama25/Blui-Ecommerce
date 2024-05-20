import PageHead from "../Helpers/PageHead";
import ProductView from "./ProductView";

const ProductViews = ({ data }) => {
  return (
    <>
      <PageHead
        title={`${data.product && data.product.seo_title}`}
        metaDes={data.product && data.product.seo_description}
      />
      <ProductView details={data} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/product/${context.query.slug}`
    );
    const data = await res.json();
    console.log("Response from server:", data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        data: null,
        error: "Error fetching product data",
      },
    };
  }
};

export default ProductPage;
