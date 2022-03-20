import Navigation from './src/navigation';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCR2oW0uaj7sMYGOMV6e0zg8fTPZLpWuUg",
  authDomain: "sell-now-7c9a5.firebaseapp.com",
  projectId: "sell-now-7c9a5",
  storageBucket: "sell-now-7c9a5.appspot.com",
  messagingSenderId: "720102021423",
  appId: "1:720102021423:web:96f31f92968477c2afe9da",
  measurementId: "G-9HN1J0904W"
};

export default function App() {

  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  return (<Navigation />);
}

