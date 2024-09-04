import product1 from "../assets/dhuturar shesh chithi.jpg";
import product2 from "../assets/Appreciate The Forgiveness - Front Cover.png";

const Product = () => {
    return (
        <div className="flex flex-col gap-10">
            {/* Book 1 */}
            <div data-aos="fade-left" className="flex gap-8 border rounded-2xl p-6">
                <div>
                    <img className="w-96 h-auto rounded-lg" src={product1} draggable="false" alt="Dhuturar Shesh Chithi" />
                </div>
                <div>
                    <h3 className="text-3xl mb-4 font-semibold">Dhuturar Shesh Chithi</h3>
                    <h4 className="text-lg mb-4 font-semibold">Price: <span>BDT 60.00</span></h4>
                    <a className="btn mb-4 bg-orange-500 text-white" href="https://forms.gle/aug4a1ZNKtF2vGEL8" target="_self">Order Now</a>
                    <hr />
                    <p className="text-base mt-4 font-semibold">আমি শুধু আমার পাওনাটা বুঝে নিলাম আর ফিরিয়ে দিলাম আমার বাবার কাছে দেয়া এই
                        ফুলগুলো। যে ফুলগুলোর কারণে আজ আমি বাবা হারানো এক নিঃস্ব হয়ে যাওয়া অনাথ সন্তান। </p>
                    <p class="status mt-6 font-semibold">Status: <span class="text-green-600">Available</span></p>
                </div>
            </div>

            {/* Book 2 */}
            <div data-aos="fade-right" className="flex flex-row-reverse gap-8 border rounded-2xl p-6">
                <div>
                    <img className="w-96 h-auto rounded-lg" src={product2} draggable="false" alt="Dhuturar Shesh Chithi" />
                </div>
                <div>
                    <h3 className="text-3xl mb-4 font-semibold text-right">Appreciate The Forgiveness</h3>
                    <h4 className="text-lg mb-4 font-semibold text-right">Price: <span>BDT 80.00</span></h4>
                    <div className="text-right">
                        <a className="btn mb-4 bg-orange-500 text-white " href="https://forms.gle/aug4a1ZNKtF2vGEL8" target="_self">Order Now</a>
                    </div>
                    <hr />
                    <p className="text-base mt-4 font-semibold text-right">আমি সবাইকে ক্ষমা করে দিয়ে যাচ্ছি। আমি জানি যে এই অনুশোচনাবোধ আসার পরও ক্ষমা না পেলে কতটা কষ্ট লাগে। আমি চাইনা আপনারা আজীবন এই কষ্ট নিয়ে বেঁচে থাকেন।</p>
                    <p class="status mt-6 font-semibold text-right">Status: <span class="text-green-600">Available</span></p>
                </div>
            </div>
        </div>
    );
};

export default Product;