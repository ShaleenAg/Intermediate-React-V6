import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
//console.log(this.props);
const Modal = ({ children }) => {
    const elref = useRef(null);
    if (!elref.current) {
        elref.current = document.createElement("div");
    }

    useEffect(() => {
        modalRoot.appendChild(elref.current);
        return () => modalRoot.removeChild(elref.current);
    }, []);
    console.log(children);
    return createPortal(<div>{children}</div>, elref.current);
};
 const lit = () => {
    console.log("hello world");
};
const temp = "hellooooooooo";
export default Modal;
export { modalRoot };
export {lit, temp};