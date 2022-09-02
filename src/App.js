import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/scss/main.scss";
import "slick-carousel/slick/slick.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginForm from "./pages/auth/LoginForm";
import Signup from "./pages/auth/Signup";
import BecomeSeller from "./pages/BecomeaSeller";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Dashboard from "./pages/user/Dashboard";
import SubCategory from "./pages/SubCategory";
import Particular from "./pages/category/Particular";
import Userprofile from "./pages/Userprofile";
import ServiceDetails from "./pages/ServiceDetails";
import Wishlistcardpage from "./pages/user/Wishlistcardpage";
import CartDetails from "./pages/user/CartDetails";
import UserEditPrifile from "./pages/UserEditPrifile";
import CustomerServicePage from "./pages/CustomerServicePage";
import ChatWithSeller from "./pages/ChatWithSeller";
import UserMessage from "./pages/user/UserMessage";
import TermsAndCondtions from "./pages/TermsAndCondtions";
import EditReview from "./pages/UserEditReview";
import UserEditReview from "./pages/UserEditReview";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/customer-service" element={<CustomerServicePage />} />
            <Route path="/category/:slug" element={<SubCategory />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/create-account" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/user/dashbaord" element={<Dashboard />} />
            <Route
              path="/category/particular/:categorySlug/:subCatSlug"
              element={<Particular />}
            />
            <Route path="/user/profile" element={<Userprofile />} />
            <Route
              path="/service-detail/:serviceId/:sellerId"
              element={<ServiceDetails />}
            />
            <Route path="/wishlist" element={<Wishlistcardpage />} />
            <Route path="/user/cart" element={<CartDetails />} />
            <Route path="/user/profile/edit" element={<UserEditPrifile />} />
            <Route
              path="/user/messages/opened/:sellerId"
              element={<ChatWithSeller />}
            />
            <Route path="/user/messages" element={<UserMessage />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndCondtions />}
            />
            <Route path="user/Editreview" element={<UserEditReview />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
