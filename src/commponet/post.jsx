import React from 'react';


export function Post({ text, data, fulltext, img }) {


  function opend() {
    localStorage.data = JSON.stringify({text:text,data:data,fulltext:fulltext,img:img})
   window.location.href = '/full'
    
  }

  return (
    <>

      <div onClick={opend} className="Post">
        <img className="Post-img" src={img} alt="Post" />
        <p className="Post-text">{text}</p>
        <p className="Post-data">{data}</p>
      </div>
      

    </>
  );
}
