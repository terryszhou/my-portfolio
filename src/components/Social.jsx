export const Social = (props) => {
   const socialData = props.socialData.map(e => (
      <a href={e.href} target="_blank" rel="noreferrer">
         <i className={e.icon}>
            <p className="tip-text">{e.pTag}</p>
         </i>
      </a>
   ));

   return (
      <>
         <div className="social">{socialData}</div>
      </>
   );
};
