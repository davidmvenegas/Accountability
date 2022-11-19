
import { collection, query, where, doc, setDoc,Timestamp, deleteDoc  } from "firebase/firestore";
import { db } from "../config";

//const tasklistRef = collection(db, 'taskList');


// Query to get users task list
export const queryTasks = async (user) => {
    try {
        const tasklistRef =   collection(db, "taskList")
        //console.log(tasklistRef)
        const tasklist =   query(tasklistRef, where('userID', "==", user.userId));
        //console.log(tasklist)
        return tasklist;
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

