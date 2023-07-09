import "../css/Contact.css"

export const Contact = () => {
    return (
        <div className="contact">
                <img className="contact_img" src="../../public/contact.jpg" alt="contact-image"/>
                <form className="contact_form">
                    <div className="contact_inf">
                        <label className="contact_label" For="fullName">Full Name:</label>
                        <input className="contact_input" id="fullName" type="text" placeholder="Enter Your Full name..."/>
                        <label className="contact_label" For="email">Email:</label>
                        <input className="contact_input" id="email" type="email" placeholder="Enter Your Email..."/>
                        <label className="contact_label" For=" message">Message:</label>
                        <input className="contact_input" id="message" type="text" placeholder="Enter Message..."/>
                    </div>
                    <button className="contact_btn">Send Message</button>
                </form>
        </div>
    )
}