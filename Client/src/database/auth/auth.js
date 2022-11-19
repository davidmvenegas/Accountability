import {getAuth,signOut,  signInWithEmailAndPassword ,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useDispatch} from 'react-redux';
import {login, logout} from './../../redux/actions/userActions';

// Create User

const auth = getAuth();
const dispatch = useDispatch();

createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log(user);
    const userId = userCredential.user;

    dispatch(login(userId));
    
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);
})

// Sign in user

signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
    const userId = userCredential.user;
    dispatch(login(userId));
})
.catch((error) => {
    errorCode = error.code;
    errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);

});

// Sign out user

signOut(auth).then(() => {
    dispatch(logout);
    console.log("Successfully signed out")

})
.catch((error) => {
    console.log(error);
})


// Google auth

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
signInWithPopup(provider).then((userCredential) => {
    const userId = userCredential.user;
    dispatch(login(userId));

})
