import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { lit, temp } from "./Modal";
const App = () => {
    const theme = useState("purple");
    return (
        <ThemeContext.Provider value={theme}>
            <div
                className="p-0 m-0"
                style={{
                    background:
                        "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
                }}
            >
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me!!</h1>
                        </Link>
                    </header>
                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
console.log("Hello");
lit();
console.log(temp);
console.log("bye");
