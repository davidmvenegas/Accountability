import {signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useDispatch} from 'react-redux';
import {login, logout} from './../../redux/actions/userActions';
import { auth } from '../config'

// Create User

const registerWithEmail = (dispatch, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(login({
                userId: user.uid,
                email: user.email,
            }));
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
    })
}

// Sign in user

 const signInWithEmail = (dispatch, email, password) => {
    signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
     const user = userCredential.user;
     dispatch(login({   
            userId: user.uid,
            email: user.email,
        }));
 })
 .catch((error) => {
     errorCode = error.code;
     errorMessage = error.message;
     console.log(errorCode + " " + errorMessage);

 })
};

// Sign out user

 const onSignOut = (dispatch) => {signOut(auth)
     .then(() => {
         dispatch(logout());
         console.log("Successfully signed out")
     }).catch((error) => {
     console.log(error);
 })}


// Google auth

// const provider = new GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// signInWithPopup(provider).then((userCredential) => {
//     const userId = userCredential;
//     dispatch(login({ userId: userId }));

// })

export { registerWithEmail, signInWithEmail, onSignOut }