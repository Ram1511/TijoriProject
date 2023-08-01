import React, { useEffect, useRef, useState } from "react";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
const BlogCategories = () => {
  const owlRef = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [item, setItem] = useState({});
  const [dynamicDataRender, setDynamicDataRender] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const owlResponsiveOption = {
    0: { items: 1 },
    676: { items: 2 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 },
    1600: { items: 3 },
  };
  useEffect(() => {
    document.title = "Tijoree | Blog";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchData();
  }, []);
  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const getShortenedDescription = (description) => {
    if (!description) {
      return "";
    }
    const words = description.split(" ");
    const shortened = words.slice(0, 15).join(" "); // Display the first 20 words (adjust as needed)
    return shortened;
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://apidev.tijoree.money:8443/blog/category/all`
      );
      const data = Object.values(response.data);
      const keys = Object.keys(response.data)
      setDynamicDataRender(data);
      setFilteredData(data.flat());
      setKeys(keys);
      setLoading(false); // Set loading to false when data is fetched
      if (data.length > 0) {
        setItem(data[0]);
        // Set the first blog item to the 'item' state
      }
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };
  const { shortened, remaining } = getShortenedDescription(item.articleDescription);
  const handleDateFilter = (date) => {
    if (date === selectedDate) {
      setSelectedDate('');
      setFilteredData(dynamicDataRender.flat());
    } else {
      setSelectedDate(date);
      const filtered = dynamicDataRender
        .map((arr) => arr.filter((item) => item.date === date))
        .flat();
      setFilteredData(filtered);
    }
  };
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Blog Categories | Corporate Business Banking | Tijoree</title>
        <meta
        />
      </Helmet>
      <div className="page-wrapper">
        {/* header section card start */}
        <section className="page-inner-banner">
          <div className="container-md">
            <div className="banner-post-slide">
              <OwlCarousel
                className="owl-theme"
                items={1}
                margin={25}
                dots={false}
                nav={true}
                loop={true}
                ref={owlRef}
                responsiveClass={true}
              >
                {/* [Blog Item] */}
                {filteredData.map((item, i) => (
                  <div className="blog-item row m-0" key={i}>
                    <div className="blog-img col-sm-6 col-lg-7 p-0">
                      <Link to={`/blog-detail?id=${item.title}`}>
                        <img
                          className="w-100 h-100"
                          src={item.imageUrl}
                          alt="image"
                        />
                      </Link>
                    </div>
                    <div className="blog-feature-data col-sm-6 col-lg-5">
                      <div className="title">
                        <Link to={"#"}>{item.title}</Link>
                      </div>
                      <div className="data mt-0 text-start">
                        {getShortenedDescription(item.articleDescription)}....<Link to={`/blog-detail?id=${item.title}`}>more
                        </Link>
                      </div>
                      <div className="meta-info flex-column align-items-end">

                        <div className="category"  >
                          <Link className="lh-1" to={`/blog-detail?id=${item.title}`}>{keys[i]}</Link>
                        </div>
                        <div className="date">
                          {new Date(item.articleDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* [/Blog Item] */}
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* header section card end */}
        <section id="smart-money" className="blog-category">
          <div className="container">
            {dynamicDataRender.map((arr, categoryName) => (
              <div className="row mb-4" key={categoryName}>
                <div className="col-12 col-sm-11 mx-auto mb-6">
                  <h4 className="slide-head">{keys[categoryName]}</h4>
                  <div className="slider-main">
                    <OwlCarousel
                      className="owl-theme"
                      margin={40}
                      dots={false}
                      nav={true}
                      loop={false}
                      ref={owlRef}
                      responsiveClass={true}
                      responsive={owlResponsiveOption}
                    >
                      {arr.map((item) => (
                        <div key={categoryName + "sub"} className="blog-item blog-card">
                          <div className="blog-img">
                            <Link to={`/blog-detail?id=${item.title}`}>
                              <img
                                className="w-100"
                                src={item.imageUrl}
                              // alt={`blog Image ${index + 1}`}
                              />
                            </Link>
                          </div>
                          <div className="blog-meta-info">
                            <div className="title">
                              {/* <Link to={`/blog-detail?id=${item.id}`}>{item.title}</Link> */}
                              <Link to={`/blog-detail?id=${item.title}`}>{item.title}</Link>
                            </div>
                            <div className="date">
                              {new Date(item.articleDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default BlogCategories;
