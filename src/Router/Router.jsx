import React from 'react'
import { Link, Route, Switch } from "react-router-dom"
import Footer from '../Components/Footer/Footer'
import FrontPage from '../Components/FrontPage/FrontPage'
import Navbar from '../Components/Navbar/Navbar'
import SelectOption from '../Components/Option_page/SelectOption'
import WomenPage from '../Components/WomenPage/WomenPage'
import MenPage from "../Components/MenPage/MenPage"
import KidsPage from "../Components/KidsPage/KidsPage"
import PlusSize from "../Components/PlusSize/PlusSize"
const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <FrontPage />
                </Route>
                <Route exact path="/select">
                    <Navbar />
                    <SelectOption />
                    <Footer />
                </Route>
                <Route exact path="/women">
                    <WomenPage/>
                </Route>
                <Route exact path="/men">
                    <MenPage/>
                </Route>
                <Route exact path="/kids">
                    <KidsPage/>
                </Route>
                <Route exact path="/plus">
                    <PlusSize/>
                </Route>
                <Route>
                    <h1>Page is not found 404</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Router
