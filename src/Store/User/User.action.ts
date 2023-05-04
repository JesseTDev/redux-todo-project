import { createAction } from "../Todo/Todo.action";
import { USER_ACTION_TYPES } from "./User.types";

const addNewUsername = (usernameToAdd: string) => {
    return usernameToAdd;
  };
  
  export const addUsername = (usernameToAdd: string) => {
   const newUsername = addNewUsername(usernameToAdd) 
    return createAction(USER_ACTION_TYPES.SET_USERNAME, newUsername);
  };
  