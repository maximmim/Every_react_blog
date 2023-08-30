import React, { useEffect, useState } from "react";
import { Post } from "../commponet/post";
import PostSkeleton from "../commponet/postskleton"; // Импортируем компонент скелетона

function Home() {
  const [d, setD] = useState([]);
  const [loading, setLoading] = useState(true); // Добавляем состояние для отслеживания загрузки

  useEffect(() => {
    fetch("https://644ab0e4a8370fb32155be44.mockapi.io/item")
      .then((response) => response.json())
      .then((data) => {
        setD(data);
        setLoading(false); // Устанавливаем загрузку в false после получения данных
      });
  }, []);

  return (
    <>
      {loading ? (
        // Если загрузка идет, отображаем скелетон
        <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        
        </>
      ) : (
        
        
        // Иначе, отображаем данные
        d.map((data, index) => (
          <Post key={index} img={data.img} fulltext={data.fulltext} text={data.text} data={data.data} />
        ))
        
              )}
    <img onClick={()=>{window.location.href = 'adm'}} className="addpost" src="../img/plus.png"/>
    </>
  );
}

export default Home;
