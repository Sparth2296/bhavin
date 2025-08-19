import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "./Blog_details.css"

const Blog_details = () => {
    const location = useLocation();
    let nav = useNavigate();

    useEffect(() => {
        const savedData = localStorage.getItem("loginData");
        if (!savedData) {
            // Redirect to login page or any other route
            nav("/")
        }
    }, [nav]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // console.log(location.state)

    let obj = [
        {
            img: "./public/image/img1.jpg",
            heading: "પર્યાવરણની જાળવણી",
            discription: "પર્યાવરણ આપણાં જીવનનું - શ્રુસ્ટીનું આવરણ છે.આ મહત્વના આવરણને બચાવવું આપણા માટે અનિવાર્ય છે.પર્યાવરણને થઈ રહેલી નુકસાની",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વચ્છ ભારત અભિયાન",
            discription: "સ્વચ્છતા આપણા આરોગ્ય અને પર્યાવરણ માટે મહત્વપૂર્ણ છે. આ અભિયાન દ્વારા લોકોમાં જાગૃતિ લાવવામાં આવે છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "વૃક્ષારોપણ મહોત્સવ",
            discription: "વૃક્ષો જીવનનું આધાર છે. વધુમાં વધુ વૃક્ષો વાવવા આપણી જવાબદારી છે જેથી પ્રકૃતિ સંતુલિત રહે.",
            catagory: "મેં ભી ગાંધી"
        },
    ]
    const { bgColor, discription, heading, img } = location.state || {}

    return (
        <>
            <div className='warapper'>
                <Navbar />

                <div className="blog_title_background" style={{ backgroundColor: bgColor }}>

                    <p className='single_blog_title'>{heading}</p>

                </div>

                <div className="image_and_description_main">
                    <div className="image_and_description">

                        <div className="blog_img_main">
                            <img src={img} alt="" />

                        </div>
                        <p className='blog_description'> પર્યાવરણ આપણાં જીવનનું - શ્રુસ્ટીનું આવરણ છે.આ મહત્વના આવરણને બચાવવું આપણા માટે અનિવાર્ય છે.પર્યાવરણને થઈ રહેલી નુકસાની આપણા માટે આવનારા સમયનો  ગંભીર ખતરો બની રહી છે. મહાત્મા ગાંધી પર્યાવરણની જાળવણી પ્રત્યે ખૂબ જ સજાગ હતા.સ્વયંમ પોતે
                            દરરોજ સવારે સાબરમતી આશ્રમના ફુલઝાડની માવજત કરતા હતા.પોતાની જાહેર સભા સ્થળની <br /><br /> વ્યવસ્થા દરમિયાન કોઈપણ ઝાડપાન ને જરા પણ નુકશાન ન પહોંચે એનું ખાસ ધ્યાન રાખતા હતા.પર્યાવરણની જાળવણી માટે આપણે પણ જાગૃત અને પ્રયતશીલ થવું જોઈએ.
                            પર્યાવરણની જાળવણીની શરુઆત આપણે આપણા ઘરેથી પણ કરી શકીએ આપણા ફળિયા વિસ્તારમાં ઓછામાં ઓછું એક વૃક્ષ ઉછેરીએ અને આસપાસના અન્ય મોટાં વૃક્ષોની જાળવણી કરીયે.
                            પર્યાવરણ જાળવણી વિષય સલગ્ન વિવિધ સામાજિક સંસ્થાઓ દ્વારા ચાલતી પ્રવૃતિઓમાં સક્રિય ભાગ લઈએ. <br /><br />
                            આપણા પોતના અંગત નાના મોટા લાભ માટે આપણી આસપાસના ઝાડપાન ને કદાપિ નુકસાન ન પહોંચાડીએ.
                            ⁠નદી ,જંગલ કે અન્ય પ્રાકૃતિક વિસ્તારમાં હરવા - ફરવા જઈએ ત્યારે સિંગલ યુઝડ  <br /><br />પ્લાસ્ટિકનો કચરો ન ફેલાય એનું ખાસ ધ્યાન રાખીયે.
                            નાના મોટી પ્રવૃત્તિ દ્વારા માનવીય વર્તણુક બદલાવ માટેની શરૂઆત સ્વયંમ પોતાનાથી કરીયે અને ત્યારબાદ પર્યાવરણ જાળવણી સલગ્ન માહિતી અન્ય 5 મિત્રો સાથે શેર કરીયે.</p>

                    </div>
                </div>


                <div className="other_blog_post_main">
                    <div className='other_blog_heading'>

                        <p >બીજી પોસ્ટ</p>
                    </div>


                    <div className="catagory_card_main_warapper" style={{ marginTop: "0px" }}>

                        <div className="catagory_card_main">

                            {
                                obj.map((val, i) => {
                                    return (
                                        <div className="catagory_card" key={i} >

                                            <div className="catagory_image_main">
                                                <img src={val.img} alt="" />
                                            </div>

                                            <div className="catagory_details_main" style={{ backgroundColor: "#ffffff" }}>
                                                <p className="catagory_details_title">{val.heading}</p>
                                                <p className='catagory_details_description'>{val.discription}</p>
                                                <button className='read_more_button' onClick={() => { nav("/blogdetails", { state: { ...val, bgColor } }) }}>Read More</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>



                </div>

                <Footer />


            </div>
        </>
    )
}

export default Blog_details
