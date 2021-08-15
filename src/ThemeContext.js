import { func } from "prop-types";
import { createContext } from "react";

const ThemeContext = createContext(['green', function(){}]);

export default ThemeContext;
