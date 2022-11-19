/* import { collection , doc, query, setDoc, where} from "firebase/firestore";
import { useSelector } from "react-redux";

const userRef = collection(db, 'users');
const user = useSelector(store => store.user);


// Get supervisor

export const userInfo = query(userRef, where('userId', "==", `${user.userId}`));

// Add or update supervisor

export const createNewUser = async () => {
    await setDoc(doc, 'users'),{
        userId : user.userId,
        supervisor : '',
        totalcompletion : 0
    }

}

//update supervisor

export const updateUserSupervisor = async (supervisor) =>{
    await setDoc(doc, 'user'),{
        ...state, 
        supervisor : supervisor
    }
}

// Increment completion
export const updateUserCompletion = async (completion) =>{
    await setDoc(doc, 'user'),{
        ...state, 
        completion : user.completion
    }
}

 */