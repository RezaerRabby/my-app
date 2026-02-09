import Example from "../public/Example";
import Home from "./home";

const Layout = ({ children }) => {
    return (
        <>  
        <Home />

        {children}

        <Example />
        </>

    );
};
export default Layout;