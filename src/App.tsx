import React, {useContext} from 'react';
import './App.css';
import {SignInContainer} from "./containers/auth/sign-in.container";
import {SignUpContainer} from "./containers/auth/sign-up.container";
import ProfileContainer from "./containers/profile/profile.container";
import {AuthContext} from "./components/auth/auth.provider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PathUtil from "./util/path.util";
import ProductManagerContainer from "./containers/products/product-manager.container";
import HomeContainer from "./containers/home.container";

function App() {
    const auth: any = useContext(AuthContext)

    return (
        <div className="App" style={{padding: "24px"}}>
            {auth ?
                <Router>
                    <Switch>
                        <Route exact path={PathUtil.getPath('/')}>
                            <HomeContainer></HomeContainer>
                        </Route>

                        <Route exact path={PathUtil.getPath('/products')}>
                            <ProductManagerContainer></ProductManagerContainer>
                        </Route>

                        <Route exact path={PathUtil.getPath('/profile')}>
                            <ProfileContainer></ProfileContainer>
                        </Route>

                    </Switch>
                </Router>
                :
                <Router>
                    <Switch>
                        <Route exact path={PathUtil.getPath('/')}>
                            <SignInContainer></SignInContainer>
                        </Route>

                        <Route exact path={PathUtil.getPath('/signup')}>
                            <SignUpContainer></SignUpContainer>
                        </Route>
                    </Switch>
                </Router>

            }
        </div>
    );
}

export default App;
