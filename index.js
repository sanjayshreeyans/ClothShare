// import * as React from 'react';
// import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, NavigatingContainer } from 'react-native';
// import Constants from 'expo-constants';
// //import { useFonts } from 'expo-font';
// import { initializeApp } from 'firebase/app';



// import { Navigation } from 'react-native-navigation';

// //import { AppLoading } from "expo";


// // Optionally import the services that you want to use
// import {
//     getAuth,
//     onAuthStateChanged,
//     FacebookAuthProvider,
//     signInWithCredential,
//     signInWithEmailAndPassword

// } from 'firebase/auth';

// import { get } from "firebase/database";
// //import {...} from "firebase/firestore";
// //import {...} from "firebase/functions";
// //import {...} from "firebase/storage";

// import { getDatabase, ref, onValue, set } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyDXRu2omq3p2KBfoj-0wj0iQ2kKnT60Jp8",
//     authDomain: "restroomsignout-bbcaf.firebaseapp.com",
//     databaseURL: "https://restroomsignout-bbcaf-default-rtdb.firebaseio.com",
//     projectId: "restroomsignout-bbcaf",
//     storageBucket: "restroomsignout-bbcaf.appspot.com",
//     messagingSenderId: "120464602127",
//     appId: "1:120464602127:web:721a35455fd0c431fbdf7a",
//     measurementId: "G-JTHT4M7KE0"
// };



// initializeApp(firebaseConfig);


// const auth = getAuth();

// // Listen for authentication state to change.
// onAuthStateChanged(auth, user => {
//     if (user != null) {
//         console.log('We are authenticated now!');
//     }

//     // Do other things
// });



// function storeHighScore(userId, score) {
//     const db = getDatabase();
//     const reference = ref(db, 'users/' + userId);
//     set(reference, {
//         highscore: score,
//     });
// }



// const LoginView = (props) => {
//     const [text, onChangeText] = React.useState(null);

//     const [number, onChangeNumber] = React.useState(null);

//     // let [fontsLoaded] = useFonts({
//     //     'SignPainter': require('./assets/fonts/SignPainterHouseScript.ttf')
//     // });


//     return (


//         <View style={styles.container}>
//             <Text style={styles.paragraph}>
//                 Egress
//             </Text>


//             <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeText}

//                 placeholder="Email:"
//             />

//             <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeNumber}

//                 placeholder="Password:"
//                 secureTextEntry={true}
//                 autoComplete="true"
//             />

//             <View style={styles.fixToText}>
//                 <TouchableOpacity
//                     title="Log In"
//                     color="purple"
//                     onPress={() => LoginPage(text, number)}
//                     style={styles.roundButton1}>


//                     <Text style={styles.roundButton13}>
//                         Log In

//                     </Text>

//                 </TouchableOpacity>



//             </View>

//             <View style={styles.fixToText}>
//                 <TouchableOpacity
//                     title="Log In"
//                     color="blue"
//                     onPress={() => LoginPage(text, number)}
//                     style={styles.roundButton2}>


//                     <Text style={styles.roundButton14}>
//                         Create a Account

//                     </Text>

//                 </TouchableOpacity>

//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {

//         justifyContent: 'center',
//         paddingTop: 200,
//         backgroundColor: 'white',
//         padding: 8,
//     },
//     paragraph: {
//         margin: 24,
//         fontSize: 70,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         // SignPainter- HouseScript
//         fontFamily: 'SignPainter',
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         borderWidth: 1,
//         borderRadius: 15,
//         padding: 10,
//         width: 400,
//         fontFamily: "SignPainter",

//         alignSelf: 'center',


//     },

//     fixToText: {

//         alignSelf: "center",
//         width: 200,
//         borderRadius: 15,
//         paddingTop: 20

//     },

//     roundButton1: {
//         width: 200,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: "center",
//         padding: 10,
//         borderRadius: 15,

//         backgroundColor: 'purple',
//     },



//     roundButton2: {
//         width: 200,
//         height: 40,
//         paddingTop: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: "center",
//         padding: 0,
//         borderRadius: 15,

//         backgroundColor: 'orange',
//     },
//     // SignPainter- HouseScript 98.0
//     roundButton13: {
//         fontSize: 20,
//         color: "white",
//     },
//     roundButton14: {
//         fontSize: 20,
//         color: "white",


//     }
// });

// function LoginPage(email, password) {

//     console.log(email, password, "Email and Password")
//     const auth = getAuth()
//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             console.log('User account created & signed in!');
//         })
//         .catch(error => {
//             if (error.code === 'auth/email-already-in-use') {
//                 console.log('That email address is already in use!');
//             }

//             if (error.code === 'auth/invalid-email') {
//                 console.log('That email address is invalid!');
//             }

//             console.error(error);
//         });
// }
// Navigation.registerComponent('LoginView', () => LoginView);




// //  <View style={styles.fixToText}>
// //         <TouchableOpacity.
// //           title="Log In"
// //           color="purple"
// //           onPress={() => LoginPage(text, number)}
// //           style={styles.roundButton1}>


// //           <Text style={styles.roundButton13}>
// //             Log In

// //           </Text>


// // Below is SignupView




// const SignupView = (props) => {
//     return (
//         <View style={styles2.container}>
//             <Text style={styles2.textStyle}> Sign up </Text>
//             <Button
//                 title="See Details"
//                 onPress={() => navigation.navigate("Details")}
//             />
//         </View>
//     );
// };

// const styles2 = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// });
// Navigation.registerComponent('SignupView', () => SignupView);

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'LoginView',
//               name: "SignupView"
//             }
//           }
//         ]
//       }
//     }
//   });
// });

// In index.js of a new project
// In index.js of a new project
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Navigation } from 'react-native-navigation';

// const HomeScreen = (props) => {
//   return (
//     <View style={styles.root}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };
// Navigation.registerComponent('Home', () => HomeScreen);

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Home'
//             }
//           }
//         ]
//       }
//     }
//   });
// });

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'whitesmoke'
//   }
// });