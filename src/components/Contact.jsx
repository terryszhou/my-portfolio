export const Contact = () => {
    return (
        <div className="container pt-3">
            <div className="shape-box">
                <div id="hex-outer"/>
                <div id="hex-grey"/>
                <div id="hex-gold">
                    <div id="hex-goldenrod">
                        <div id="hex-small">
                            <div id="hex-smaller">
                                <div id="hex-smallest"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Contact</h2>
            </div>
            <form id="contact-form">
                <div id="contact-form-outer"/>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" name="name"/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" name="message"></textarea>
                </div>
            </form>
            <div id="hourglass"/>
        </div>
    )
}