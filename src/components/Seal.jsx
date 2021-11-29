export const Seal = (props) => (
   <div className="seal-box">
      <img id="seal" src={props.sealSig} alt="seal" />
      <div className="tip-text seal-tip">
         <p className="text-left" style={{marginLeft: "20px"}}>
            汉字: <span style={{color: "red"}}>周思佳</span>
         </p>
         <p className="text-left" style={{marginLeft: "20px"}}>
            Pīnyīn: <span style={{color: "red"}}>Zhōu Sījīa</span>
         </p>
         <p className="text-left" style={{marginLeft: "20px"}}>
            <span style={{color: "red"}}>周 Zhōu</span>: The longest-lived dynasty in Chinese history.
         </p>
         <p className="text-left" style={{marginLeft: "20px"}}>
            <span style={{color: "red"}}>思 Sī</span>: (to) think
         </p>
         <p className="text-left" style={{marginLeft: "20px"}}>
            <span style={{color: "red"}}>佳 Jīa</span>: (with) excellence & beauty
         </p>
      </div>
   </div>
);
