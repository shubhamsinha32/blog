import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Main/Home';
import Header from './component/common/Header';
import Aside from './component/common/Aside';
import NewForm from './component/form/Form';
import Tablelisting from './component/table/Table';
import AddCategory from './component/category/AddCategory';
import ViewCategory from './component/category/ViewCategory';
import AddBlog from './component/blog/AddBlog';
import ViewBlog from './component/blog/ViewBlog';
import Login from './component/login/Login';

function Root() {

    const location = useLocation();
    const isLoginPath = location.pathname === '/';

    return (
        <>
            {isLoginPath ?
                <Routes>
                    <Route exact path="/" Component={Login} />
                </Routes> :
                <div className='wrapper'>
                    <Aside />
                    <main>
                        <Header />
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <Routes>
                                        <Route exact path="/home" Component={Home} />
                                        <Route exact path="/Newform" Component={NewForm} />
                                        <Route exact path="/Table" Component={Tablelisting} />
                                        <Route exact path="/addcategory" Component={AddCategory} />
                                        <Route exact path="/viewcategory" Component={ViewCategory} />
                                        <Route exact path="/addblog" Component={AddBlog} />
                                        <Route exact path="/viewblog" Component={ViewBlog} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            }

        </>
    );
}

export default Root;