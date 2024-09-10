import banner from "../assets/banner.png";

const Banner = () => {
    return (
        <div data-aos="fade-up" className="md:m-4 relative">
            <img className="md:rounded-2xl bg-contain" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;