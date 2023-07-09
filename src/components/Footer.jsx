import "../css/Footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_socialMedia">
                <div><a href="#"><img className="footer_logo" src="../../public/Instagram-logo.svg" alt="instagram"/></a></div>
                <div><a href="#"><img className="footer_logo" src="../../public/Telegram-logo.svg" alt="telegram"/></a></div>
                <div><a href="#"><img className="footer_logo" src="../../public/Facebook-logo.svg" alt="facebook"/></a></div>
            </div>
            <div className="footer_right">2023 Viz Media, Shueisha</div>
        </div>
    )
}