import blogpic1 from "../assets/blogpic-1.jpg";
import blogpic2 from "../assets/blogpic-2.png";

const about = () => {
    return (
        <div className="my-16 md:my-28 lg:my-40 mx-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-6 md:gap-20">
            <div data-aos="fade-right" className="flex-1">
                <p className="md:text-xl text-justify leading-8 font-semibold">মুজতাবির একজন প্রতিভাবান লেখক এবং কবি, যিনি বর্তমানে ইনডিপেনডেন্ট ইউনিভার্সিটি, বাংলাদেশ (আইইউবি)-তে ব্যবসায় প্রশাসন (বিবিএ) নিয়ে অধ্যয়ন করছেন। সাহিত্য এবং সৃজনশীলতার প্রতি তার গভীর আগ্রহ রয়েছে, যা তাকে কবিতা ও ছোটগল্প লেখায় দক্ষ করে তুলেছে। তার দ্বিতীয় বই Appreciate the Forgiveness ২০২৪ সালের একুশে বইমেলায় প্রকাশিত হয় এবং পাঠকদের মাঝে ব্যাপক সাড়া ফেলে। মুজতাবিরের লেখায় জীবনের নানা দিক, সামাজিক প্রেক্ষাপট, এবং ব্যক্তিগত অনুভূতির প্রতিফলন ঘটে। লেখালেখির পাশাপাশি তিনি তার শিক্ষার ক্ষেত্রেও মনোযোগী, এবং ভবিষ্যতে একজন সফল লেখক এবং ব্যবসায়িক নেতা হিসেবে নিজেকে প্রতিষ্ঠিত করতে আগ্রহী।</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div data-aos="fade-down">
                    <img className="w-60 h-80 rounded-2xl" src={blogpic1} alt="Mujtabir Hossain" />
                </div>
                <div data-aos="fade-up" className="md:mt-20 ">
                    <img className="w-60 h-80 rounded-2xl" src={blogpic2} alt="Mujtabir Hossain" />
                </div>
            </div>
        </div>
    );
};

export default about;