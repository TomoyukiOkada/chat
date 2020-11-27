
// $(function(){
//     $("#add_haiku_dialog").dialog({
//         autoOpen:false});

//     $("#add_haiku").click(function(){
//         $("#add_haiku_dialog").dialog("open");
//     })

//     })

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBW42n8S-cZRXUUM8IapAkRq15bGl5yo0M",
//     authDomain: "haiku-b2409.firebaseapp.com",
//     databaseURL: "https://haiku-b2409.firebaseio.com",
//     projectId: "haiku-b2409",
//     storageBucket: "haiku-b2409.appspot.com",
//     messagingSenderId: "834749135698",
//     appId: "1:834749135698:web:7afd451014f5885e8c588b"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //firebaseのデーターベース（保存させる場所）を使いますよ
// const newPostRef = firebase.database().ref();


// $("#send").on("click", function () {
//     var haiku = {
//         haiku:""
//     };
//     // データを登録で送る
//     newPostRef.push({
//         haiku: $("#haiku").val()
//     })
//     });