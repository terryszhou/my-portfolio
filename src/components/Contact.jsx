import {Hex} from "./Hex"

export const Contact = (props) => {
   const showContacts = props.contactData.map(e => (
      <div className="contact-box">
         <a href={e.href} target="_blank" rel="noreferrer">
            <i className={`contact-icon ${e.icon}`}>
               <p>{e.pTag}</p>
            </i>
         </a>
      </div>
   ))
   
   return (
      <div className="container pt-1">
         <div id="skew-bg-left"/>
         <div id="skew-bg-right"/>
         <img className="bg-image" src={props.flowersWhite} alt="background"/>
         <Hex title="Contact" />
         <div className="content-box">
            <h3 className="content-box-heading">Let's Get in Touch!</h3>
            <div className="content-box-outer">
               <fieldset className="content-field contact-field">
                  {showContacts}
               </fieldset>
            </div>
         </div>
         <div className="content-box">
            <a href="https://hihello.me/p/c2fcf08c-ba21-4fe6-8e72-c542170b10e2" target="_blank" rel="noreferrer">
               <img id="qr-code" src={props.cardQR} alt="cardQR"/>
            </a>
            <p id="qr-code-text">Here's my business card!</p>
         </div>
      </div>
   )
}
