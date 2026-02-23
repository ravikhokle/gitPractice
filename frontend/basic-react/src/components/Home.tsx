import { Navbar } from "./Navbar";  
import Gallery from "./Gallery";
import "./Gallery.css";
import { Footer } from "./Footer";  
import Cover from "./Cover";


function Home(){
    return(
        <div>
            <Navbar />
            <Cover />
            <Gallery />
            <Footer />
        </div>
    );
}
export {Home};
