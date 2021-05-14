import React from 'react'
import { Route, Switch } from 'react-router-dom';
 
​import Home from './components/Home';
import DanhSachBaiThi from './components/DanhSachBaiThi';
import Shop from './components/Shop';
import Error from './components/Error';
 
 
export default function Nav() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/danh-sach-bai-thi" component={DanhSachBaiThi} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Switch>
        </>
    );
};