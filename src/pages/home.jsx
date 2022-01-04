import { ContentMenu } from '../components/ContentMenu';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import '../style/home.css';
export function Home(){
    return(
        <div>
            <Navbar />
            <ContentMenu />
            <Footer />
        </div>
    )
}