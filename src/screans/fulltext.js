import React from 'react';


export function Fulltext() {
let data;
if (localStorage.data) {
  data = JSON.parse(localStorage.data);
setTimeout(()=>{
  localStorage.removeItem('data')
},1000)

}

  return (
    <>
{localStorage.data && <>
        <h1 className='place'>{data.text}</h1>
        <h2 className='placedata'>{data.data}</h2>
        <p className='place-text'>{data.fulltext}</p>
        <img onClick={()=>window.location = '/'} className='b1' src={data.img} alt="Post" />
  
    </>
  
  }
    </>
  );
}
