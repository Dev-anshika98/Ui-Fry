"use client"
import Image from "next/image";
import BackSvg from "../assets/img/features/back.svg";
import StarSvg from "../assets/img/features/star.svg";
import FirstSvg from "../assets/img/features/first-img.svg";
import SecondSvg from "../assets/img/features/second-img.svg";
import ThirdSvg from "../assets/img/features/third-img.svg";
import icon from "./icon.svg"

const Features = () => {
 
    return (
        <section className="features" id="features">
            <div className="img-txt-bx-1" data-aos="fade-left">
                <div className="img-flow">
                    <Image data-aos="fade-left" className="star-svg" style={{left:"10px"}} src={StarSvg} alt="star"/>

                    <div className="back-glow">
                        <Image  src={BackSvg} alt="back"/>
                    </div>
                    <div className="front-img">
                        <Image src={FirstSvg} alt="first"/>
                    </div>
                </div>
                <div className="feature-txt-bx">                
                    <span className="feature-tagline">FEATURES</span>
                    <h1 data-aos="fade-right" >Uifry Premium</h1>
                    <div className="txt-bx1" style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
                        <span><Image src={icon} alt="s"/></span>
                        <h2>Budgeting Intervals</h2>
                    </div>
                    <p data-aos="fade-right">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className="txt-bx1" style={{display:"flex",alignItems:"center",marginTop:"15px"}}>
                        <span><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.50002V11M10 11L18.5 6.27773M10 11L1.5 6.27773M10 11V20.5M18.5 15.7222L10.777 11.4317C10.4934 11.2741 10.3516 11.1954 10.2015 11.1645C10.0685 11.1371 9.93146 11.1371 9.79855 11.1645C9.64838 11.1954 9.50658 11.2741 9.22297 11.4317L1.5 15.7222M19 15.0586V6.94147C19 6.59883 19 6.4275 18.9495 6.27471C18.9049 6.13953 18.8318 6.01545 18.7354 5.91076C18.6263 5.79242 18.4766 5.70922 18.177 5.54282L10.777 1.43171C10.4934 1.27415 10.3516 1.19537 10.2015 1.16448C10.0685 1.13715 9.93146 1.13715 9.79855 1.16448C9.64838 1.19537 9.50658 1.27415 9.22297 1.43171L1.82297 5.54282C1.52345 5.70922 1.37369 5.79242 1.26463 5.91076C1.16816 6.01545 1.09515 6.13953 1.05048 6.27471C1 6.42751 1 6.59883 1 6.94147V15.0586C1 15.4012 1 15.5725 1.05048 15.7253C1.09515 15.8605 1.16816 15.9846 1.26463 16.0893C1.37369 16.2076 1.52345 16.2908 1.82297 16.4572L9.22297 20.5683C9.50658 20.7259 9.64838 20.8047 9.79855 20.8356C9.93146 20.8629 10.0685 20.8629 10.2015 20.8356C10.3516 20.8047 10.4934 20.7259 10.777 20.5683L18.177 16.4572C18.4766 16.2908 18.6263 16.2076 18.7354 16.0893C18.8318 15.9846 18.9049 15.8605 18.9495 15.7253C19 15.5725 19 15.4012 19 15.0586Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        <h2>Budgeting Intervals</h2>
                    </div>
                    <p data-aos="fade-right">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className="txt-bx1" style={{display:"flex",alignItems:"center",marginTop:"15px"}}>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        <h2>Budgeting Intervals</h2>
                    </div>
                    <p data-aos="fade-right">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </div>

                <div className="back-glow" style={{right:"-15%"}}>
                    <Image src={BackSvg} alt="back"/>
                </div>
                
            </div>
            <div className="img-txt-bx-1" data-aos="fade-up">
                
                <div className="feature-txt-bx" style={{marginLeft:"8%"}}>                
                    <span className="feature-tagline">ADVANTAGES</span>
                    <h1 data-aos="fade-right">Why Choose Uifry?</h1>
                    <div className="txt-bx1" style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
                        <span><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.488" r="24" fill="#FF5555"/><path d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        <h2 >Clever Notifications</h2>
                    </div>
                    <p data-aos="fade-right" style={{marginTop:"20px"}}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    
                </div>
                <div className="img-flow" style={{marginTop:"-30px",marginRight:"10%"}} data-aos="fade-left">
                    <Image className="star-svg" style={{position:"absolute",right:"3%",marginTop:"3%"}} src={StarSvg} alt="star"/>

                    <div className="back-glow">
                        <Image src={BackSvg} alt="back"/>
                    </div>
                    <div className="front-img">
                        <Image src={SecondSvg} alt="first"/>
                    </div>
                </div>               
            </div>
            <div className="img-txt-bx-1">
                <div className="img-flow" data-aos="fade-right">
                    <Image style={{marginTop:"3%",marginLeft:"40%"}} className="star-svg" src={StarSvg} alt="star"/>

                    <div className="front-img">
                        <Image src={ThirdSvg} alt="first"/>
                    </div>
                   

                </div>
                <div className="feature-txt-bx" style={{marginTop:"15%",width:"45%",marginLeft:"10%"}}>                
                    
                    <div className="txt-bx1" style={{display:"flex",alignItems:"center",marginTop:"-20px"}}>
                        <span><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.9761" r="24" fill="#FF5555"/><path d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        <h2 style={{fontSize:"28px"}}>Fully Customizable</h2>
                    </div>
                    <p style={{lineHeight:"28px"}}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    
                </div>

          
                
            </div>
            <Image style={{position:"absolute",right:"10%"}} className="star-svg" src={StarSvg} alt="star"/>

           
        </section>
    )
}
export default Features;