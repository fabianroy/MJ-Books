
const FAQ = () => {
    return (
        <div data-aos="fade-up" className="max-w-screen-xl mx-10 flex flex-col gap-2 my-32">
            <h3 className="text-3xl font-semibold text-center mb-6">FAQ</h3>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How can I place an order?</div>
                <div className="collapse-content">
                    <p>You can place an order by clicking the "Order Now" button below the book you want to buy. You will be redirected to a Google Form where you can fill in your details and place your order.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How many days will it take to deliver the book?</div>
                <div className="collapse-content">
                    <p>It will take 5 to 7 days to deliver the book to your doorstep. If you are in Dhaka, you will get the book within 3 days. If you are outside Dhaka, you will get the book within 5 days.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What's the payment method?</div>
                <div className="collapse-content">
                    <p>You have to send money through bKash. You will get the payment details in the Google Form after you place your order.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What's the delivery charge?</div>
                <div className="collapse-content">
                    <p>The delivery charge is BDT 60 for inside Dhaka and BDT 120 for outside Dhaka.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;