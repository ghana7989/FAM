import firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB-sd86ByrinfWOSBgufIvH1Io3X-gHnsw',
	authDomain: 'fam-ecommerce.firebaseapp.com',
	projectId: 'fam-ecommerce',
	storageBucket: 'fam-ecommerce.appspot.com',
	messagingSenderId: '269402166884',
	appId: '1:269402166884:web:134b8fa80ba5cf07af3171',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
