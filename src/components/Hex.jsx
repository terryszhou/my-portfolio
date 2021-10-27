export const Hex = ({title}) => (
   <div className="hex-box-main hex-box-other">
   <a className="hex-link" href="https://github.com/terryszhou/my-portfolio" target="_blank" rel="noreferrer">
      <div id="hex-ring-lg" />
      <div id="hex-greyspace-lg" />
      <div id="hex-gold">
         <div id="hex-goldenrod">
            <div id="hex-ring-sm">
               <div id="hex-greyspace-sm">
                  <div id="hex-smallest" />
               </div>
            </div>
         </div>
      </div>
      <h2>{title}</h2>
   </a>
 </div>
)