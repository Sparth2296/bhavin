import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "./Blog_Listing_Page.css"
import { useLocation, useNavigate } from "react-router-dom";

const Blog_Listing_Page = () => {
    const location = useLocation();
    let nav = useNavigate();
    const { bgColor, title, titleColor, subTitle } = location.state || {};


    useEffect(() => {
        const savedData = localStorage.getItem("loginData");
        if (!savedData) {
            // Redirect to login page or any other route
            nav("/")
        }
    }, [nav]);




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
        {
            img: "./public/image/img1.jpg",
            heading: "પ્લાસ્ટિક મુક્ત અભિયાન",
            discription: "પ્લાસ્ટિક પ્રદૂષણ આજના સમયમાં એક ગંભીર સમસ્યા છે. તેને ઓછું કરવા માટે પુનઃપ્રયોગી સામગ્રીનો ઉપયોગ કરો.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "નદી સ્વચ્છતા અભિયાન",
            discription: "પાણી જીવનનું અમૂલ્ય સ્ત્રોત છે. નદીઓને સ્વચ્છ રાખવી આપણા સૌની ફરજ છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ઊર્જા બચાવો",
            discription: "વિદ્યુત અને ઈંધણનો સાચો ઉપયોગ કરીને આપણે પ્રકૃતિના સંસાધનોનું સંરક્ષણ કરી શકીએ છીએ.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ગ્રામ વિકાસ યોજના",
            discription: "ગામડાના વિકાસ માટે શિક્ષણ, આરોગ્ય અને રોજગારના અવસર પૂરા પાડવા જરૂરી છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "શિક્ષણ સૌ માટે",
            discription: "દરેક બાળકને ગુણવત્તાયુક્ત શિક્ષણ મેળવવાનો અધિકાર છે. શિક્ષણ સમાજના વિકાસનો આધાર છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પાણી બચાવો અભિયાન",
            discription: "પાણીનો બગાડ રોકો અને વરસાદી પાણીનો સંગ્રહ કરો જેથી ભવિષ્ય માટે પૂરતો પાણી મળે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વસ્થ જીવનશૈલી",
            discription: "યોગ, વ્યાયામ અને સંતુલિત આહાર દ્વારા આપણે સ્વસ્થ અને તંદુરસ્ત રહી શકીએ છીએ.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પરંપરા અને સંસ્કૃતિ",
            discription: "અમારી સંસ્કૃતિ અને પરંપરાનું સંરક્ષણ આપણા અસ્તિત્વ માટે જરૂરી છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પ્રકૃતિ પ્રવાસ",
            discription: "પ્રકૃતિ સાથેનો સમય મનને શાંતિ આપે છે અને પર્યાવરણ સાથેનો જોડાણ મજબૂત કરે છે.",
            catagory: "મેં ભી ગાંધી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પરિક્ષાની તૈયારી",
            discription: "સફળતા માટે સારી યોજના અને સતત અભ્યાસ જરૂરી છે. નિયમિત પુનરાવર્તન કરો અને આત્મવિશ્વાસ રાખો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સમય વ્યવસ્થાપન",
            discription: "અભ્યાસ અને આરામનો સંતુલિત કાર્યક્રમ બનાવવાથી પરિક્ષામાં સારું પરિણામ મળે છે.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "લક્ષ્ય નિર્ધારણ",
            discription: "સ્પષ્ટ લક્ષ્ય નક્કી કરો અને તેના માટે જરૂરી પગલાં લેવા શરૂ કરો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પ્રશ્નપત્ર અભ્યાસ",
            discription: "પાછલાં વર્ષોના પ્રશ્નપત્રો ઉકેલો જેથી પ્રશ્નોના પેટર્ન સાથે પરિચિત થાઓ.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સુધારેલી ટેક્નિક્સ",
            discription: "માઇન્ડ મેપ, નોટ્સ અને શોર્ટ ટ્રિક્સ દ્વારા અભ્યાસને સરળ બનાવો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મોટિવેશન જાળવો",
            discription: "પ્રેરણાદાયી વાર્તાઓ વાંચો અને સકારાત્મક વાતાવરણમાં અભ્યાસ કરો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ધ્યાન અને યોગ",
            discription: "ધ્યાન અને યોગ દ્વારા મનને શાંત રાખો જેથી અભ્યાસ પર ધ્યાન કેન્દ્રિત રહે.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "તંદુરસ્ત ખોરાક",
            discription: "સંતુલિત આહારથી શરીર અને મન બંને સ્વસ્થ રહે છે, જે તૈયારીમાં મદદ કરે છે.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "લેખન અભ્યાસ",
            discription: "ઝડપ અને સ્પષ્ટતા માટે લેખન અભ્યાસ કરો જેથી પરિક્ષામાં સમય બચાવી શકો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વ-મૂલ્યાંકન",
            discription: "મોક ટેસ્ટ આપો અને તમારી ત્રુટિઓ સુધારો જેથી વાસ્તવિક પરિક્ષામાં સારું કરો.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સકારાત્મક વિચારધારા",
            discription: "હંમેશા સકારાત્મક વિચાર રાખો જેથી આત્મવિશ્વાસ વધે અને ચિંતામાં ઘટાડો થાય.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "અભ્યાસનો નિયમ",
            discription: "દૈનિક નિશ્ચિત સમય પર અભ્યાસ કરવાની આદત વિકસાવો જેથી સતત પ્રગતિ થાય.",
            catagory: "તૈયારી જીત કી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "માસિક સફાઈ અભિયાન",
            discription: "દર મહિને ગામ અને શહેરમાં સફાઈ અભિયાન યોજીને સ્વચ્છતા જાળવી રાખો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "વૃક્ષારોપણ દિવસ",
            discription: "દર વર્ષે નક્કી કરેલા દિવસે વૃક્ષો વાવવાનું આયોજન કરો અને હરિયાળો વિસ્તાર વધારો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સાંસ્કૃતિક મેળો",
            discription: "સ્થાનિક કલા, સંગીત અને નૃત્યને પ્રોત્સાહન આપવા માટે સાંસ્કૃતિક મેળાનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "રક્તદાન કેમ્પ",
            discription: "રક્તદાન દ્વારા અનેક જીવ બચાવી શકાય છે. નિયમિત કેમ્પનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ક્રીડા સ્પર્ધા",
            discription: "યુવાનોમાં ઉત્સાહ અને તંદુરસ્તી માટે વિવિધ રમતોની સ્પર્ધાનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પુસ્તક મેળો",
            discription: "વાંચન સંસ્કૃતિને પ્રોત્સાહન આપવા માટે પુસ્તક મેળાનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વાસ્થ્ય ચકાસણી શિબિર",
            discription: "લોકોના આરોગ્યની ચકાસણી માટે નિ:શુલ્ક શિબિર યોજો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પર્યાવરણ જાગૃતિ યાત્રા",
            discription: "પર્યાવરણ બચાવવા માટે જાગૃતિ યાત્રાનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "નદી તટ સફાઈ",
            discription: "પાણીના સ્ત્રોતોને સ્વચ્છ રાખવા માટે નદી અને તળાવની સફાઈ કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "યુવા મીટિંગ",
            discription: "યુવાનો માટે પ્રેરણાદાયી સત્રો અને વર્કશોપનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વચ્છતા સ્પર્ધા",
            discription: "શાળાઓ અને સંસ્થાઓ વચ્ચે સ્વચ્છતા માટે સ્પર્ધા યોજો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "શિક્ષણ સહાય કેમ્પ",
            discription: "ગરીબ વિદ્યાર્થીઓને શિક્ષણ સહાય પૂરી પાડવા માટે કેમ્પનું આયોજન કરો.",
            catagory: "એક્ટિવિટી કેલેન્ડર"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મહાત્મા ગાંધીની અહિંસા",
            discription: "અહિંસા એ સબથી મોટી શક્તિ છે, જે પ્રેમ અને સત્ય પર આધારિત છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્વામી વિવેકાનંદનો આત્મવિશ્વાસ",
            discription: "આત્મવિશ્વાસથી કોઈ પણ મુશ્કેલી પર વિજય મેળવી શકાય છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "એ.પી.જે. અબ્દુલ કલામનું સપનું",
            discription: "મોટા સપના જુઓ અને તેને સાકાર કરવા માટે મહેનત કરો.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સરદાર પટેલની એકતા",
            discription: "એકતા એ રાષ્ટ્રની સૌથી મોટી શક્તિ છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મદર ટેરેસાની સેવા",
            discription: "નિ:સ્વાર્થ સેવા જ સાચી માનવતા છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ભગતસિંહનો બલિદાન",
            discription: "દેશપ્રેમ માટે જીવન અર્પણ કરવું એ સર્વોચ્ચ કર્તવ્ય છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "રવિશંકરની સંગીત સેવા",
            discription: "કલા અને સંગીત મનને શાંતિ અને આનંદ આપે છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "હેલેન કેલરની પ્રેરણા",
            discription: "મર્યાદાઓ હોવા છતાં સફળ થવું શક્ય છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સ્ટીવ જોબ્સની નવીનતા",
            discription: "સર્જનાત્મકતા અને જુદું વિચારો એ સફળતાની ચાવી છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મેરિ કોમની ધીરજ",
            discription: "ધીરજ અને મહેનતથી અશક્યને શક્ય બનાવી શકાય છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "રતન ટાટાનો વ્યવસાયિક આદર્શ",
            discription: "સાચા મૂલ્યો સાથે વ્યવસાય કરવો સૌથી મહત્વપૂર્ણ છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "નેલ્સન મંડેલાની ક્ષમા",
            discription: "ક્ષમા કરવી એ સૌથી મોટી માનવતા છે.",
            catagory: "લાઈફ લેશન ફ્રોમ લિજેન્ડ"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "કલ્પના ચાવલાનું સપનું",
            discription: "કલ્પના ચાવલાએ પોતાના સપના માટે અંતરિક્ષ સુધીનો સફર કર્યો અને ઇતિહાસ રચ્યો.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મલાલા યુસફઝાઇનો સંઘર્ષ",
            discription: "શિક્ષણના હક માટે મલાલાએ જીવન જોખમમાં મૂકીને લડત આપી.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પી.વી. સિંધુની જીત",
            discription: "કઠોર મહેનત અને સમર્પણથી પી.વી. સિંધુએ વિશ્વમાં ભારતનું નામ ઊંચું કર્યું.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "લતા મંગેશકરની સંગીત સેવા",
            discription: "લતા મંગેશકરે પોતાની અવાજથી લાખો હૃદય જીતી લીધા.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "મેરિ કોમની બોક્સિંગ જીત",
            discription: "મેરિ કોમે અનેક આંતરરાષ્ટ્રીય મેડલ જીતીને સ્ત્રીઓ માટે પ્રેરણા આપી.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સાઈના નેહવાલની સફળતા",
            discription: "સાઈના નેહવાલે બેડમિન્ટનમાં ભારત માટે અનેક વિજયો હાંસલ કર્યા.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "અવની ચતુર્વેદીની ઉડાન",
            discription: "ભારતની પ્રથમ મહિલા ફાઈટર પાઇલટ બનીને અવનીએ ઈતિહાસ રચ્યો.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "દીપિકા કુમારીની તીરંદાજી",
            discription: "દીપિકા કુમારીએ તીરંદાજીમાં વિશ્વસ્તરે ભારતનું ગૌરવ વધાર્યું.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "શકુંતલા દેવીની ગણિત કળા",
            discription: "માનવ કમ્પ્યુટર તરીકે જાણીતી શકુંતલા દેવીએ દુનિયાને ચોંકાવી દીધું.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "અરુણિમા સિન્હાનો સંઘર્ષ",
            discription: "અરુણિમાએ પોતાની વિકલાંગતા છતાં એવરેસ્ટ ફતેહ કરી.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "હિમા દાસની દોડ",
            discription: "હિમા દાસે પોતાની ઝડપથી એથ્લેટિક્સમાં ભારતનું નામ રોશન કર્યું.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "વિદ્યાવતીની શૌર્યગાથા",
            discription: "વિદ્યાવતીએ દેશ માટે બહાદુરીથી લડત આપી અને અમર બની ગઈ.",
            catagory: "બહાદુર બેટી"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "હુનરથી સફળતા",
            discription: "સાચા હુનરથી તમે કોઈપણ મંજિલ હાંસલ કરી શકો છો.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "અભ્યાસની શક્તિ",
            discription: "નિરંતર અભ્યાસથી હુનર પરિપૂર્ણ બને છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ધીરજનો માહાત્મ્ય",
            discription: "ધીરજથી કામ લેવાથી હુનરનો સાચો ઉપયોગ થાય છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "અનુભવની કિંમત",
            discription: "અનુભવ તમને તમારી કળામાં પરિપૂર્ણ બનાવે છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "નવાચારનો રસ્તો",
            discription: "નવું શીખવું અને અપનાવવું જ જીત તરફ લઈ જાય છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "સમયનો યોગ્ય ઉપયોગ",
            discription: "સમયને સાચી રીતે વાપરવો હુનરની ઓળખ છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "ટીમ વર્કનો જાદુ",
            discription: "સારા હુનર સાથે ટીમ વર્ક જીતની ચાવી છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "લક્ષ્ય પર ફોકસ",
            discription: "સ્પષ્ટ લક્ષ્ય સાથે હુનર કાયમી સફળતા આપે છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "આત્મવિશ્વાસનો સહારો",
            discription: "આત્મવિશ્વાસથી હુનરનું પ્રદર્શન શ્રેષ્ઠ બને છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "પ્રેરણાથી પ્રગતિ",
            discription: "પ્રેરણા હુનરને નવી ઊંચાઈ પર લઈ જાય છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "નિષ્ઠાનો માર્ગ",
            discription: "નિષ્ઠાથી હુનરનું પરિણામ સદાય જીતમાં જ મળે છે.",
            catagory: "Skill Will Win"
        },
        {
            img: "./public/image/img1.jpg",
            heading: "શિસ્તનો પ્રભાવ",
            discription: "શિસ્તબદ્ધ જીવન હુનરને ઉજાગર કરે છે.",
            catagory: "Skill Will Win"
        }
    ];

    let filterCatagory = obj.filter((val) => val.catagory == title)

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         event.preventDefault();
    //         event.returnValue = ""; // Chrome ke liye
    //     };

    //     window.addEventListener("beforeunload", handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener("beforeunload", handleBeforeUnload);
    //     };
    // }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='warapper'>
                <Navbar />
                <div className="dynamic_catagory_ditails_main" style={{ backgroundColor: bgColor }}>
                    <div className="warrper_to_dynamic_catagory">
                        <p style={{ color: titleColor }}>{title}</p>
                        <h3>{subTitle}</h3>
                    </div>
                </div>

                <div className="catagory_card_main_warapper">

                    <div className="catagory_card_main">

                        {
                            filterCatagory.map((val, i) => {
                                return (
                                    <div className="catagory_card" key={i}>

                                        <div className="catagory_image_main">
                                            <img src={val.img} alt="" />
                                        </div>

                                        <div className="catagory_details_main">
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
                <Footer />
            </div>
        </>
    )
}

export default Blog_Listing_Page
