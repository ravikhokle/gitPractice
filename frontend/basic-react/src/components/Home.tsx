import { Navbar } from "./Navbar";  
import Gallery from "./Gallery";
import "./Gallery.css";
import { Footer } from "./Footer";  


function Home(){
    return(
        <div>
            <Navbar />
            <Gallery />
            <Footer />
        </div>
    );
}
export {Home};
