import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function NewsListScreen() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <View>
            <Text>News List</Text>
            {news.map(item => (
                <View key={item.id_berita}>
                    <Text>{item.judul_berita}</Text>
                    <Text>{item.ringkasan}</Text>
                </View>
            ))}
        </View>
    );
}
