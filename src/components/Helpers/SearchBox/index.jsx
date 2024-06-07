import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import auth from "../../../../utils/auth";
import LoginContext from "../../Contexts/LoginContext";
import ServeLangItem from "../ServeLangItem";
import search from "/public/images/icons/search.png";
export default function SearchBox({ className }) {
  const router = useRouter();
  const [toggleCat, setToggleCat] = useState(false);
  const [subToggleCat, setSubToggleCat] = useState(false);
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [categories, setCategories] = useState(null);
  const [subCategories, setSubCategoris] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState(null);
  const [searchKey, setSearchkey] = useState("");
  const loginPopupBoard = useContext(LoginContext);

  useEffect(() => {
    if (router && router.route && router.route === "/search") {
      setSearchkey(router.query ? router.query.search : "");
    }
    return () => {
      setSearchkey("");
    };
  }, [router]);

  const categoryHandler = (value) => {
    setSelectedCat(value);
    setSubCategoris(
      value.active_sub_categories && value.active_sub_categories.length > 0
        ? value.active_sub_categories
        : null
    );
    setToggleCat(!toggleCat);
  };

  const subCategoryHandler = (value) => {
    setSelectedSubCat(value);
    setSubToggleCat(!subToggleCat);
  };

  useEffect(() => {
    if (websiteSetup) {
      setCategories(
        websiteSetup.payload && websiteSetup.payload.productCategories
      );
    }
  }, [websiteSetup]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (auth()) {
      if (searchKey !== "") {
        if (selectedCat) {
          router.push({
            pathname: "/search",
            query: { search: searchKey, category: selectedCat.slug },
          });
        } else {
          router.push({
            pathname: "/search",
            query: { search: searchKey },
          });
        }
      } else if (searchKey === "" && selectedCat) {
        router.push({
          pathname: "/products",
          query: { category: selectedCat.slug },
        });
      } else {
        return false;
      }
    } else {
      loginPopupBoard.handlerPopup(true);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`w-full h-full flex items-center border border-qgray-border bg-white rounded-md  ${
        className || ""
      }`}
    >
      <div className="flex-1 border h-full rounded-md relative">
        <div className="h-full flex items-center">
          <Image
            src={search}
            alt="Search Icon"
            width={15}
            height={5}
            className="ml-4"
          />
          <input
            value={searchKey}
            onChange={(e) => setSearchkey(e.target.value)}
            type="text"
            className=" text-md pl-2 " // Add left padding to accommodate the icon
            placeholder={ServeLangItem()?.Search}
          />
        </div>
      </div>
    </form>
  );
}
