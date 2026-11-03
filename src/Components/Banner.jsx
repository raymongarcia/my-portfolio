import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";

const Banner = () => {
    
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">Welcome to <span className="text-fuchsia-500">My Website</span></h1>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia asperiores dicta, saepe alias suscipit exercitationem sint. Ex earum maxime dolorum delectus corrupti ab. Quam accusantium facere reprehenderit earum doloribus!</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[20px]" />
                            </a>
                        </div>
                        <div className="flex space-x-2">
                            <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaLinkedin className="text-[20px]" />
                            </a>
                        </div>
                        <div className="flex space-x-2">
                            <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FiTwitter className="text-[20px]" />
                            </a>
                        </div>
                        <div className="flex space-x-2">
                            <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaInstagram className="text-[20px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={profileImg} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"/>
        </div>
    );
};

export default Banner;