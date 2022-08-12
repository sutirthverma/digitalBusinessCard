import profile from '/src/assets/pic.jpg'
import email from '/src/assets/Mail.svg'
import linkedin from '/src/assets/linkedin.svg'

export default function Info() {
    return (
        <div className="info">
            <img src={profile} alt="" className="profile" />
            <div className="infoDetails">
                <div className="name">Sutirth Verma</div>
                <div className="role">Frontend Developer</div>
                <div className="website">github.com/sutirthverma</div>
                <div className="connectButtons">
                    <button className="email button">
                        <img src={email} className='mailIcon icon' alt="" />
                        Email</button>
                    <button className="linkedin button">
                    <img src={linkedin} className='liIcon icon' alt="" />
                        LinkedIn</button>
                </div>
            </div>

        </div>

    )
}