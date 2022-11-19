/* import { collection, query, where, doc, setDoc,Timestamp, deleteDoc  } from "firebase/firestore";
import { useSelector } from "react-redux";

const tasklistRef = collection(db, 'tasklist');
const user = useSelector(store => store.supervisor);

// Query to get supervised task list

export const supervisedTasklist = query(tasklistRef, where('userId', "==", `${user.userId}`));



 */