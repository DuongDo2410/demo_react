import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/website/404';
import LayoutWebsite from './layouts/Website';
import HomePage from './pages/website/HomePage';
import LayoutAdmin from './layouts/Admin';
import SignIn from './pages/website/SignIn';
import SignUp from './pages/website/SignUp';
import Details from './pages/website/Details';
import ListCategory from './pages/admin/Category/ListCategory';
import ListProduct from './pages/admin/products/ListProduct';
import ListUser from './pages/admin/User/ListUser';
import AddProduct from './pages/admin/products/AddProduct';
import AddCategory from './pages/admin/Category/AddCategory';
import UpdateCategory from './pages/admin/Category/UpdateCategory';
import Dashboard from './api/auth/Dashboard';
import UpdateProduct from './pages/admin/products/UpdateProduct';
import Shop from './pages/website/Shop';


const Routes = (props) => {
    return (
        <Router>
            <Switch>
                
                <Route path="/admin/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                   <Redirect to="/admin"/>
                                </Route>
                                <Dashboard exact path="/admin/dashboard">
                                    da
                                </Dashboard>
                                <Dashboard exact path="/admin/products">
                                    <ListProduct {...props} />
                                </Dashboard>
                                <Route exact path="/admin/addproduct">
                                    <AddProduct {...props} />
                                </Route>
                                <Route exact path="/admin/updateproduct/:id">
                                    <UpdateProduct {...props} />
                                </Route>
                                <Route exact path="/admin/category">
                                    <ListCategory {...props} />
                                </Route>
                                <Route exact path="/admin/addcategory">
                                    <AddCategory {...props} />
                                </Route>
                                <Route exact path="/admin/updatecategory/:id">
                                    <UpdateCategory {...props} />
                                </Route>
                                <Route exact path="/admin/user">
                                    <ListUser {...props} />
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                       
                </Route>
                
                <Route>
                    <LayoutWebsite>
                        <Switch>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route exact path="/shop">
                                <Shop {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <SignIn />
                            </Route>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route exact path="/detail/:id">
                                <Details {...props} />
                            </Route>
                            <Route path="*">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </LayoutWebsite>

                </Route>
            </Switch>
        </Router>
    )
}
export default Routes