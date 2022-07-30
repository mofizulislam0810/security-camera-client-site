import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import ProductsPage from "./Pages/ProductsPage/ProductsPage/ProductsPage";
import ProductPage from "./Pages/ProductsPage/ProductPage/ProductPage";
import { Provider } from "react-redux";
import CartPage from "./Pages/CartPage/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage/CheckoutPage";
import { PersistGate } from "redux-persist/integration/react";
import { persitor, store } from "./redux/store";
import LoginPage from "./Pages/Login/LoginPage/LoginPage";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import RegisterPage from "./Pages/Register/RegisterPage/RegisterPage";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import DashboardOpen from "./Pages/Dashboard/DashboardOpen/DashboardOpen";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import AboutPage from "./Pages/About/AboutPage/AboutPage";
import AllProduct from "./Pages/Admin/AllProduct/AllProduct";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Admin/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate persistor={persitor}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                  path="/checkout"
                  element={
                    <PrivateRoute>
                      <CheckoutPage />
                    </PrivateRoute>
                  }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardHome />
                    </PrivateRoute>
                  }
                >
                  <Route path="" element={<DashboardOpen />} />
                  <Route
                    path="addproduct"
                    element={
                      <AdminRoute>
                        <AddProduct />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="makeadmin"
                    element={
                      <AdminRoute>
                        <MakeAdmin />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="allproduct"
                    element={
                      <AdminRoute>
                        <AllProduct />
                      </AdminRoute>
                    }
                  />
                </Route>
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
