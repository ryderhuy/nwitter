import Navigation from "components/Navigation";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import EditProfile from "routes/EditProfile";
import Profile from "routes/Profile";
import UploadFile from "routes/UploadFile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Menu from "../routes/Menu";

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn ? "login success" : "login false");
  //let history = useHistory();
  // const testClick = () => {
  //   const xxx = withRouter("/");
  //   history.push(xxx);
  //   console.log(xxx);
  // };
  return (
    <Router>
      {/* {isLoggedIn && <Navigation />} */}

      <Switch>
        {isLoggedIn === true ? (
          <>
            <Menu />

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/editprofile">
              <EditProfile />
            </Route>
            <Route exact path="/uploadfile">
              <UploadFile isLoggedIn={isLoggedIn} />
            </Route>
            {/* <button onClick={testClick}>logout</button> */}
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
