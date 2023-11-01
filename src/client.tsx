import {renderApp} from "./renderApp";
import {hydrateRoot} from "react-dom/client";

hydrateRoot(document.getElementById('root'),renderApp());

