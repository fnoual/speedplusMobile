import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
          source={{ uri: 'https://speedplus.delivery' }}
      >
      <StatusBar hidden={true} />
      </WebView>
  );
}
