import { Todo } from "../../Components/Todos/components/createTodo.component";

export const TODO_ACTION_TYPES = {
    SET_TODOS: 'SET_TODOS'
}; 

const randomDate = () => {
    const startDate = new Date("2023-04-01");
    const endDate = new Date("2023-04-31");
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;
    return new Date(startDate.getTime() + randomTime);
  };
  
  export const DEFAULT_TODOS: Array<Todo> = [
    {
      title: "Clean Bedroom",
      description:
        "Make sure to clean your bedroom",
      dateCreated: randomDate(),
      urgency: 'Low'
    },
    {
      title: "Dinner with friend",
      description:
        "Go to dinner with friend at 6:00pm",
      dateCreated: randomDate(),
      urgency: 'Medium'
    },
    {
      title: "Book Dentist Appointment",
      description:
        "Book checkup appointment at the dentist.",
      dateCreated: randomDate(),
      urgency: 'High'
    },
    {
      title: "Write a new song",
      description:
        "Write a new song for new album",
      dateCreated: randomDate(),
      urgency: 'Low'
    },
    {
      title: "Continue Programming",
      description:
        "Continue programming your application. Push latest updates to a new branch in Github and create a pull request",
      dateCreated: randomDate(),
      urgency: 'High'
    },
  ];
  

