import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data berita dari backend
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3000/news'); // Ganti URL dengan endpoint berita Anda
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Panggil fungsi fetchNews saat komponen dimuat
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Daftar Berita</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
