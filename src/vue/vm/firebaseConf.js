export default {
    apiKey: process.env.GOOGLE_KEY || '',
    authDomain: "planner-faf0d.firebaseapp.com",
    databaseURL: "https://planner-faf0d.firebaseio.com",
    storageBucket: "planner-faf0d.appspot.com",
    messagingSenderId: process.env.GOOGLE_SENDER || ''
};