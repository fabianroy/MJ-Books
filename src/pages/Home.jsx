import Banner from "../components/Banner";
import Product from "../components/Product";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    
    AOS.init();

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl m-auto">
                <div className="w-fit mx-auto my-32">
                    <h2 data-aos="zoom-in-up" className="text-5xl text-center font-semibold">
                        Now It's Easy To Buy{' '}
                        <span className="text-orange-500 font-bold text-8xl">Mujtabir Hossain's</span> Books From This{' '}
                        <span className="text-orange-500 font-bold text-8xl">Brand New</span> Website!!
                    </h2>
                </div>
                <Product></Product>
            </div>
        </div>
    );
};

export default Home;