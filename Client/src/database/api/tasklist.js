
import { collection, query, where, getDocs, doc, setDoc,Timestamp, deleteDoc  } from "firebase/firestore";
import { db } from "../config";


// Query to get users task list
export const queryTasks = async (user) => {
    try {
        // const q = query(collection(db, "taskList"), where("userID", "==", user.userId));
        const q = query(collection(db, "taskList"));
        const querySnapshot = await getDocs(q);

        const docs = querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });

        return docs;
    } catch (error) {
        console.log(error)
    }
}


// Add task to tasklist

/* export const newTasktoTasklist = async (title, details, deadline, author) => {
await setDoc(doc(db, "tasklist"),{
    title : title,
    userId : author,
    deadline : deadline,
    details : details,
    date : Timestamp.now(),
    status : 'not completed'
})
} */

// delete task

/* export const deleteTask = async (title, dispatch) => {
    await deleteDoc(doc(db, "tasklist", `${title}`));
    //dispatch(your_tasks());
} */

