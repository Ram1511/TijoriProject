import React, { useEffect, useRef, useState } from "react";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
const DetailPage = () => {
    const owlRef = useRef(null);
    const [dynamicDataRender, setDynamicDataRender] = useState([]);
    const [blogData, setBlogData] = useState({});
    //const [articleDescription, setArticleDescription] = useState("");
    const query = new URLSearchParams(window.location.search);
    const blog_id = query.get("id");
    // const owlResponsiveOption = {
    //     0: {
    //         items: 1,
    //     },
    //     676: {
    //         items: 2,
    //     },
    //     768: {
    //         items: 2,
    //     },
    //     992: {
    //         items: 3,
    //     },
    //     1200: {
    //         items: 4,
    //     },
    //     1600: {
    //         items: 3,
    //     },
    // };


    // const articleDescription = item.articleDescription;
    // // Format the text to include proper line breaks and paragraphs
    // const formattedDescription = articleDescription.replace(/\\n/g, '<br/>');
    // const paragraphs = formattedDescription.split('<br/><br/>');



    useEffect(() => {
        document.title = "Tijoree | Blog";
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://apidev.tijoree.money:8443/blog/category/all`
            );
            setDynamicDataRender(Object.values(response.data))
            const allData = Object.values(response.data);

            for (const dataArray of allData) {
                const matchedBlog = dataArray.find((item) => item.id.toString() === blog_id);
                if (matchedBlog) {
                    setBlogData(matchedBlog);
                    break; // Exit the loop once the matching blog data is found
                }
            }

        } catch (error) {
            console.error(error);
        }
    };
    const item = blogData;
    return (
        <React.Fragment>
            <Helmet>
                <title> Blog Categories | Corporate Business Banking |Tijoree</title>
                <meta
                    name="description"
                    content="Discover Tijoree, your trusted partner for corporate business banking solutions. With a focus on delivering exceptional financial services, we empower businesses with cutting-edge digital banking tools and personalized support. Learn more about our comprehensive suite of services and how Tijoree can fuel your business growth. Contact us today and experience a new era of corporate banking excellence."
                />
            </Helmet>
            <div className="page-wrapper">
                {/* header section card start */}
                <section className="page-inner-banner">
                    <div class="container-md">
                        <div class="banner-post-slide">
                            {/* <OwlCarousel
                                    className="owl-theme"
                                    items={1}
                                    margin={25}
                                    dots={false}
                                    nav={true}
                                    loop={true}
                                    ref={owlRef}
                                    responsiveClass={true}
                                // responsive={owlResponsiveOption}
                                > */}
                            {/* [Blog Item] */}
                            <div className="blog-item row m-0">

                                <div className="blog-feature-data " style={{ textAlign: "center" }} >
                                    <div className="category">
                                        <Link to="#">{item.title}</Link>
                                    </div>
                                    <div className="title">
                                        <Link to="#">{item?.category?.categoryName}</Link>
                                    </div>
                                    <div className="date">{new Date(item.articleDate).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}</div>
                                    <div className="blog-img col-sm-9 p-0" style={{ margin: "auto", marginTop: 20 }}>
                                        <img
                                            className="w-100"
                                            src={item.imageUrl}
                                            alt="blog Image"
                                        />
                                    </div>


                                    {/* <div>
                                        {paragraphs.map((paragraph, index) => (
                                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                        ))}
                                    </div> */}
                                    <div className="data" style={{ textAlign: "center" }}>
                                        {item.articleDescription}
                                    </div>

                                </div>
                            </div>
                            {/* </OwlCarousel> */}
                        </div>
                    </div>
                </section >
                < Footer />
            </div >
        </React.Fragment >
    );
};
export default DetailPage;