
import { collection, query, where, getDocs, doc, setDoc,Timestamp, deleteDoc  } from "firebase/firestore";
import { db } from "../config";

// Query users task list
export const getAllTasks = async () => {
    try {
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}

export const getCurrentUsersTasks = async (userId) => {
    try {
        const q = query(collection(db, "cities"), where("capital", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}

// Add task to tasklist
export const newTasktoTasklist = async (title, details, deadline, user) => {
    await setDoc(doc(db, "taskList", title),{
        title : title,
        userId : user.userId,
        deadline : deadline,
        details : details,
        date : Timestamp.now(),
        status : 'not completed'
    })
}  

// delete task

/*  export const deleteTask = async (title) => {
    await deleteDoc(doc(db, "taskList", where("title", "==", title)));
    //dispatch(your_tasks());
}  */

