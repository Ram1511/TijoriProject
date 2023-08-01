require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const generateSiteMap = () => {
  try {
    return new Sitemap(router)
      .build("https://www.tijoree.money/")
      .save("./public/sitemap.xml");
  } catch (e) {
    console.log("Error is ", e);
    throw new Error("Not able to Generate Sitemaps", e);
  }
};

generateSiteMap();
