import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://192.168.1.100:3000/berita'); // Ganti localhost dengan alamat IP lokal Anda
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Berita</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.id_berita.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.judul_berita}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Pusatkan secara vertikal
    alignItems: 'center',     // Pusatkan secara horizontal
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center', // Pusatkan teks dalam item
  },
  item: {
    fontSize: 18,
  },
});

export default NewsList;
