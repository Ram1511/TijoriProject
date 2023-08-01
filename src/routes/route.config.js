import { Navigate } from 'react-router-dom';
import LandingPage from '../containers/Landing';
import Faq from '../containers/Faq';
import Features from '../containers/Features';
import About from '../containers/About';
import CurrentAccount from '../containers/Products/CurrentAccount';
import PrivacyPolicy from '../containers/Privacy-Policy';
import TermsConditions from '../containers/Terms-Conditions';
import ContactForm from '../containers/Contact-Form';
import BlogCategories from '../containers/Blog-Categories';
import BlogDetail from '../containers/Blog-Detail';
import DetailPage from '../containers/DetailPage/DetailPage';

const routes = [
  {
    path: '/',
    title: '',
    exact: true,
    protected: false,
    element: <LandingPage />,
  },
  {
    path: '/about',
    title: '',
    exact: true,
    protected: false,
    element: <About />,
  },
  {
    path: '/faq',
    title: '',
    exact: true,
    protected: false,
    element: <Faq />,
  },
  {
    path: '/features',
    title: '',
    exact: true,
    protected: false,
    element: <Features />,
  },
  {
    path: '/products/current-account',
    title: '',
    exact: true,
    protected: false,
    element: <CurrentAccount />,
  },
  {
    path: '/privacy-policy',
    title: '',
    exact: true,
    protected: false,
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms-conditions',
    title: '',
    exact: true,
    protected: false,
    element: <TermsConditions />,
  },
  {
    path: '/form',
    title: '',
    exact: true,
    protected: false,
    element: <ContactForm />,
  },
  {
    path: '/blog',
    title: '',
    exact: true,
    protected: false,
    element: <BlogCategories />,
  },
  {
    path: '/blog-detail',
    title: '',
    exact: true,
    protected: false,
    element: <BlogDetail />,
  },
  // {
  //   path: '/detail-page',
  //   title: '',
  //   exact: true,
  //   protected: false,
  //   element: <DetailPage />,
  // },
  {
    path: '*',
    title: '',
    exact: true,
    protected: false,
    element: <Navigate replace to="/" />,
  },
];

export default routes;
