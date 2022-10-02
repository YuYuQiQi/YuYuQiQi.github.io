// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtHxGS1_WLE6PLnqUow6xcz-YxxFUbl6Q",
  authDomain: "webdesign-finalproject.firebaseapp.com",
  projectId: "webdesign-finalproject",
  storageBucket: "webdesign-finalproject.appspot.com",
  messagingSenderId: "552532244260",
  appId: "1:552532244260:web:48dd9f80a378986bf9e5b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
const db = getDatabase(app);

function InsertData() {
  if (result == []) {
      return
  }
  const time = Date.now();
  set(ref(db, 'food/' + time), {
      details: result,
      total: bill
  })
      .then(() => {
          SelectData(time);
          $(function () {
              $('#dialog').dialog({
                  modal: true
              })
          })
      })
      .catch((error) => {
          alert(error);
      })
}

