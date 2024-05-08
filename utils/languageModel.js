export default function languageModel() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("language")) {
      const prevObj = JSON.parse(localStorage.getItem("language"));
      const keys = Object.keys(prevObj).map((item) =>
        item
          .replaceAll("-", " ")
          .replaceAll(",", " ")
          .replaceAll(".", " ")
          .replaceAll("'", "")
          .replaceAll("!", "")
          .replaceAll("?", "")
          .split(" ")
          .join("_")
      );

      const values = Object.values(prevObj);
      const generateNewArr = values.map((item, i) => {
        let newObj = {};
        newObj[keys[i]] = item;
        return newObj;
      });

      // Add specific labels here
      const additionalLabels = {
        Business_Address: "Business Address",
        Business_Name: "Business Name",
        GSTIN_Number: "GSTIN Number",
        PAN_Card_Number: "PAN Card Number",
        Aadhar_Card_Number: "Aadhar Card Number",
        Full_Name: "Full Name",
        Referral_Code: "Referral Code",
        Name: "Name",
        // Add more labels as needed
      };

      return Object.assign.apply(Object, [...generateNewArr, additionalLabels]);
    }
    return false;
  }
  return false;
}
