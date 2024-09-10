import Banner from "../components/Banner";
import Product from "../components/Product";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../components/About";
import FAQ from "../components/FAQ";
import Follow from "../components/Follow";

const Home = () => {
    AOS.init();
    return (
        <div>
            <Banner></Banner>

            <div className="lg:max-w-screen-xl md:mx-auto">
                <div className="w-fit mx-8 lg:mx-auto my-12 md:my-20 lg:my-32">
                    <h2 data-aos="zoom-in-up" className="md:text-3xl lg:text-5xl text-xl text-center font-semibold">
                        Now It's Easy To Buy{' '}
                        <span className="text-orange-500 font-bold md:text-3xl lg:text-8xl">Mujtabir Hossain's</span> Books From This{' '}
                        <span className="text-orange-500 font-bold md:text-3xl lg:text-8xl">Brand New</span> Website!!
                    </h2>
                </div>

                <Product></Product>

                <About></About>

                <Follow></Follow>

                <FAQ></FAQ>

            </div>
        </div>
    );
};

export default Home;