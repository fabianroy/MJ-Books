import { FaFacebook, FaInstagram } from "react-icons/fa";

const Follow = () => {
    return (
        <div
            data-aos="fade-up"
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://pbs.twimg.com/media/B97zd0yCEAEBqMZ.jpg:large)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Follow On</h1>
                    <div data-aos="fade-up" className="flex items-center justify-center gap-4">
                        <button className="text-4xl">
                            <a href="https://www.facebook.com/mjnayeef" target="_blank">
                                <FaFacebook />
                            </a>
                        </button>
                        <button className="text-4xl">
                            <a href="https://www.instagram.com/mujtabir" target="_blank">
                                <FaInstagram />
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Follow;