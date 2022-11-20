 import { collection , doc, getDocs, query, setDoc, where} from "firebase/firestore";
 import { db } from "../config";





// Get supervisor

export const queryUser = async(user) => {
    try {
        const q = query(collection(db, 'user'), where('userId', "==", user.userId))
        const querySnapshot = await getDocs(q);

        const docs = querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return docs;
        
    } catch (error) {
        console.log(error)
        
    }
}

// Add or update supervisor

export const createNewUser = async (user) => {
    await setDoc(doc, 'users'),{
        userId : user.userId,
        supervisorId: '',
        supervisor : '',
        totalcompletion : 0
    }

}
/*
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