// ফায়ারবেস কনফিগারেশন এবং ইনিশিয়ালাইজেশন
const firebaseConfig = {
  apiKey: "AIzaSyCM9gCd38eJg3AM1j58R1_dylF2KkvZRfA",
  authDomain: "bkash-727c2.firebaseapp.com",
  projectId: "bkash-727c2",
  storageBucket: "bkash-727c2.firebasestorage.app",
  messagingSenderId: "1056984290374",
  appId: "1:1056984290374:web:e74c5180d12fe12671e647",
  measurementId: "G-547CWLL152"
};

// ফায়ারবেস ইনিশিয়াল করা
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// সার্ভিসগুলো এক্সপোর্ট করা
export const db = firebase.firestore();
export const auth = firebase.auth();
