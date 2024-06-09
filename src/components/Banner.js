// components/Banner.js
import Data from "./Data"
import Image from 'next/image';
import Back from "../assets/img/banner/back.svg"
import Tape from "../assets/img/banner/tape.svg"
import Iphone from "../assets/img/banner/iphone.svg"
import Arrow from "../assets/img/banner/arrow.svg"
const Banner = () => {
    return (
        <section className="banner" id="banner">
            <div className="heading">
                <div className="header-info">
                    <h1>{Data.hero.subheadline}</h1>
                    <Image className="back-img" src={Back} alt="backimg" />
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className="banner-btn-grp">
                    <button className="btn">Get Started <span><Image style={{ marginLeft: "10px" }} src={Arrow} alt="arrow" width={24} height={24} /></span> </button>

                    <div className="watch-video">
                        <svg className="icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                            <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="black" stroke="black" />
                        </svg>
                        <span className="text">Watch Video</span>
                    </div>
                </div>
            </div>

            <div className="tape-img">
                <Image src={Tape} alt="tape-img" width={100} height={100} />
            </div>

            <div className="img">
                <Image src={Iphone} alt="banner-img1" width={300} height={600} />
            </div>
        </section>
    )
}

export default Banner;
