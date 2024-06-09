"use client"
import Image from "next/image";
import TestimonialImg from "../assets/img/testimonial/img.svg";
import BackSvg from "../assets/img/features/back.svg";
import StarSvg from "../assets/img/features/star.svg";
import UserSvg from "../assets/img/testimonial/user.svg";
import UserSecSvg from "../assets/img/testimonial/user-sec.svg";
const Testomonial = () => {
    return (
        <section className="testomonial" data-aos="fade-in" id="testomonial">
            <div className="testominal-heading"  data-aos="fade-up">
                <h1 style={{color:"black"}}>TESTIMONIAL</h1>
            </div>
            <div className="testimonial-subheading"  data-aos="fade-up" data-aos-delay="200" >
                <h1 style={{color:"black",marginTop:"3%"}}>What Our Users Say About Us?</h1>
            </div>
            <div className="testimonal-bx"  data-aos="fade-up" data-aos-delay="400">

                <div className="testimonial-img-bulk">
                    <div className="back-glow">
                        <Image src={BackSvg} alt="back"/>
                    </div>
                    <div >
                        <Image style={{width:"100%"}} src={TestimonialImg} alt="img"/>

                    </div>
                    <Image src={StarSvg} alt="star"/>

                </div>
                <div className="testimonial-txt-bx">
                    <div className="head-bx">
                        <h1 style={{color:"black",width:"60%",lineHeight:"30px"}}>
                            The Best Financial Accounting App Ever!
                        </h1>
                        
                    </div>
                    <p style={{marginTop:"3%"}}>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                    </p>     
                    <div className="user-icon">
                        <div>
                            <Image src={UserSvg} alt="user-svg"/>

                        </div>
                        <div style={{marginTop:"5px",marginLeft:"10px"}}>
                            <Image style={{opacity:"50%"}} src={UserSecSvg} alt="user-svg"/>

                        </div>
                    </div> 
                    <div className="user-name">
                        <h4 style={{color:"black",marginTop:"3%"}}>Nick Jonas</h4>
                    </div>            
                </div>

                
            </div>
         

        </section>
    )
}
export default Testomonial;