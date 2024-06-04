import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AllProductPage from "../../src/components/AllProductPage/index";
import PageHead from "../../src/components/Helpers/PageHead";
import Navbar from "../../src/components/Navbar"; // Ensure correct import path

export default function AllProductsPageData({ data, categories }) {
  const { seoSetting } = data || {};
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push("*");
    }
  }, [data, router]);

  return (
    <>
      {data && seoSetting && (
        <>
          <PageHead
            title={`${seoSetting.seo_title}`}
            metaDes={seoSetting.seo_description}
          />
          <Navbar categories={categories} /> {/* Pass categories to Navbar */}
          <AllProductPage response={data} />
        </>
      )}
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const productRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/product?${
        context.query.category
          ? `category=${context.query.category}`
          : context.query.sub_category
          ? `sub_category=${context.query.sub_category}`
          : context.query.child_category
          ? `child_category=${context.query.child_category}`
          : context.query.highlight
          ? `highlight=${context.query.highlight}`
          : context.query.brand
          ? `brand=${context.query.brand}`
          : ""
      }`
    );
    const productData = await productRes.json();

    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/categories`
    );
    const categoryData = await categoryRes.json();

    return {
      props: {
        data: productData,
        categories: categoryData.categories || [], // Ensure categories is always an array
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: false,
        categories: [],
      },
    };
  }
};
