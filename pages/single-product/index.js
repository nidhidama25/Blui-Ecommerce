import { useRouter } from "next/router";
import PageHead from "../../src/components/Helpers/PageHead";
import SingleProductPage from "../../src/components/SingleProductPage";

const SingleProduct = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <PageHead
        title={`${data.product && data.product.seo_title}`}
        metaDes={data.product && data.product.seo_description}
      />
      {router.query.id && <SingleProductPage details={data} />}
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/product/${context.query.id}`
    );
    const data = await res.json();
    console.log("Response from server:", data); // Log the response
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

export default SingleProduct;
