import React, { useEffect, useRef, useState } from "react";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import BlogDetailBanner from '../../assets/img/blog-detail-banner.png';
import blogItembannerImg from "../../assets/img/Mobile-37.png";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
const BlogDetail = () => {
    const owlRef = useRef(null);
    const [dynamicDataRender, setDynamicDataRender] = useState([]);
    const [blogData, setBlogData] = useState({});
    const query = new URLSearchParams(window.location.search);
    const blog_id = query.get("id");
    const [articleDescription, setArticleDescription] = useState("");
    useEffect(() => {
        document.title = "Tijoree | Detail";
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
                const matchedBlog = dataArray.find((item) => item.title.toString() === blog_id);
                if (matchedBlog) {
                    setBlogData(matchedBlog);
                    const paragraphs = matchedBlog.articleDescription.split(/\r?\n|\r\n|\n\r|\n{2}|\n\n|\\n/);
                    const formattedText = paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ));
                    setArticleDescription(formattedText);
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
                <title> Blog Detail | Corporate Business Banking |Tijoree</title>
                <meta
                    name="description"
                    content="Discover Tijoree, your trusted partner for corporate business banking solutions. With a focus on delivering exceptional financial services, we empower businesses with cutting-edge digital banking tools and personalized support. Learn more about our comprehensive suite of services and how Tijoree can fuel your business growth. Contact us today and experience a new era of corporate banking excellence."
                />
            </Helmet>
            <div className="page-wrapper">
                {/* header section card start */}
                <div className="container-md">
                    <div className="blog-top-detail">
                        <div className="subtitle">{item?.category?.categoryName}</div>
                        <div className="title">
                            <Link to="#">{item.title}</Link>
                        </div>
                        <div className="date">{new Date(item.articleDate).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}</div>
                        <div className="blog-socials">
                            {/* <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#" className="twitter"></a></li>
                                <li><a href="#" className="linkedin"></a></li>
                                <li><a href="#" className="gmail"></a></li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="blog-banner">
                        <img className="" src={item.imageUrl} alt="blog detail" />
                    </div>
                    <div className="blog-inner-content pb-4">
                        {articleDescription}
                        {/* <p>Lorem ipsum dolor sit amet consectetur. Vitae lacinia vitae elementum dignissim interdum orci. Neque etiam tempor faucibus
                            sem purus rhoncus est vitae. Dignissim nisl risus sollicitudin maecenas et vitae. Sed lorem ut fringilla egestas purus
                            elementum vestibulum lorem pulvinar.
                        </p>
                        <p>
                            Nunc neque feugiat nulla facilisi sit penatibus sollicitudin eu. Accumsan augue dignissim in ac. Dignissim sagittis lectus gravida
                            faucibus bibendum ullamcorper. Mauris dictumst blandit sollicitudin tincidunt nisl. Morbi orci quis volutpat risus purus in fames
                            sagittis lectus. Fames eleifend at lorem amet proin id sit et. Scelerisque feugiat morbi dictum mi tristique. Commodo risus nibh
                            commodo turpis vitae adipiscing tellus. Faucibus tellus cras id nam venenatis ultrices. Magna laoreet facilisi sed quis ornare
                            scelerisque hac morbi sed. Est urna fermentum adipiscing sed amet ridiculus quisque ornare.
                        </p>
                        <p>
                            Dolor nam in odio nibh neque euismod ornare. Nam vestibulum leo diam dui ultricies. Egestas sagittis gravida mattis arcu commodo.
                            A aliquet a a interdum sociis neque id dui. Consectetur eu elementum massa facilisis molestie. Gravida sed amet sed bibendum orci
                            et sapien turpis. Sed eros sit tempor porta. Congue quam nunc nulla elit vel vestibulum. Enim leo odio tristique donec auctor
                            volutpat lacus viverra magna. In ultrices purus odio velit neque elementum id blandit pellentesque. Gravida cras lectus pellentesque
                            arcu fermentum tellus nunc.
                        </p>
                        <p>
                            Aenean lectus ut in pulvinar enim tellus id sollicitudin. Et dolor id accumsan fringilla ornare elementum. Purus nibh fermentum massa
                            donec penatibus. Suscipit hac in amet adipiscing eget. At libero ac senectus faucibus suspendisse tortor imperdiet lectus augue.
                            Sapien diam nec ac amet non. Ac mauris justo enim scelerisque dictum. Enim id eu rutrum ut.</p>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae lacinia vitae elementum dignissim interdum orci. Neque etiam tempor
                            faucibus sem purus rhoncus est vitae. Dignissim nisl risus sollicitudin maecenas et vitae. Sed lorem ut fringilla
                            egestas purus elementum vestibulum lorem pulvinar.
                        </p>
                        <p>Nunc neque feugiat nulla facilisi sit penatibus sollicitudin eu. Accumsan augue dignissim in ac. Dignissim sagittis
                            lectus gravida faucibus bibendum ullamcorper. Mauris dictumst blandit sollicitudin tincidunt nisl. Morbi orci
                            quis volutpat risus purus in fames sagittis lectus. Fames eleifend at lorem amet proin id sit et. Scelerisque
                            feugiat morbi dictum mi tristique. Commodo risus nibh commodo turpis vitae adipiscing tellus. Faucibus tellus
                            cras id nam venenatis ultrices. Magna laoreet facilisi sed quis ornare scelerisque hac morbi sed. Est urna
                            fermentum adipiscing sed amet ridiculus quisque ornare.
                        </p>
                        <div className="add-container">
                            Ad for Current Account or POS or CCC (Image 1040x120 px)
                        </div>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae lacinia vitae elementum dignissim interdum orci. Neque etiam tempor
                            faucibus sem purus rhoncus est vitae. Dignissim nisl risus sollicitudin maecenas et vitae. Sed lorem ut
                            fringilla egestas purus elementum vestibulum lorem pulvinar.
                        </p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet consectetur. Lacinia tortor habitasse fermentum ultrices ut. Quis curabitur
                                at massa consectetur in enim penatibus id viverra. Lorem viverra sit faucibus imperdiet dui tempor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur. Lacinia tortor habitasse fermentum ultrices ut.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur. Lacinia tortor habitasse fermentum ultrices ut. Quis curabitur at
                                massa consectetur in enim penatibus id viverra. Lorem viverra sit faucibus imperdiet dui tempor.
                            </li>
                        </ol> */}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};
export default BlogDetail;


