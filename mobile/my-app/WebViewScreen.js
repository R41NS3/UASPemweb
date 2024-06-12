import React from 'react';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
    return <WebView source={{ uri: 'http://localhost:3000' }} />;
}
