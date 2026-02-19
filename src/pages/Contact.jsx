export default function Contact() {
    return (
        <div className="page">
            <h1>Contact & Tour Request</h1>

            <form className="contact-form">
                <input placeholder="Full Name" required />
                <input placeholder="Phone Number" required />
                <input placeholder="Email" />
                <textarea placeholder="Tell us about your needs"></textarea>

                <button>Send Request</button>
            </form>

            <p>📍 Lynnwood, WA</p>
            <p>📞 (253) XXX-XXXX</p>
        </div>
    );
}
