import Twitter from '/src/assets/Twitter Icon.svg';
import Facebook from '/src/assets/Facebook Icon.svg';
import Instagram from '/src/assets/Instagram Icon.svg';
import Github from '/src/assets/Github Icon.svg';


export default function Footer(){
    return(
        <div className="footer">
            <img src={Twitter} alt="" className="footerSocial twitter" />
            <img src={Facebook} alt="" className="footerSocial facebook" />
            <img src={Instagram} alt="" className="footerSocial instagram" />
            <img src={Github} alt="" className="footerSocial github" />
        </div>
    )
}