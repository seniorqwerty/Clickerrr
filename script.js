// Firebase config
const firebaseConfig = {
apiKey: "AIzaSyBhBIEBOFTtlccPQmpBIIL5G8HjgIUraEo",
authDomain: "grishinium-d8d99.firebaseapp.com",
projectId: "grishinium-d8d99",
storageBucket: "grishinium-d8d99.appspot.com",
messagingSenderId: "894232638590",
appId: "1:894232638590:web:d8ed7ab3a5bdb1af78142f",
measurementId: "G-VKYRFZ5MP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database references
const coinsRef = firebase.database().ref("coins");
const boostsRef = firebase.database().ref("boosts");
const leaderboardRef = firebase.database().ref("leaderboard");

// Telegram Bot API token
const botToken = "YOUR_BOT_TOKEN";

// Get user info from Telegram
const getTelegramUserInfo = async (userId) => {
  const url = `https://api.telegram.org/bot${botToken}/getChat?chat_id=${userId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

// Initialize variables
let coins = 0;
let boosts = [];
let leaderboard = [];

// Update coins count
const updateCoinsCount = () => {
  document.getElementById("coins-count").textContent = `${coins
