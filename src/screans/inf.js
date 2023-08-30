import React from 'react';


function About() {
const data ={}

  return (
    <div>
      <h2>About</h2>

        <>
          <p>Text: {data.text}</p>
          <p>Data: {data.data}</p>
          <p>Fulltext: {data.fulltext}</p>
          <img src={data.img} alt="Post" />
        </>
      
    </div>
  );
}

export default About;
