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
      title: "Brush Teeth",
      description:
        "You need to brush your teeth in a circular motion, using a toothbrush and toothpaste",
      dateCreated: randomDate(),
      urgency: 'Low'
    },
    {
      title: "Make Bed",
      description:
        "You need to brush your teeth in a circular motion, using a toothbrush and toothpaste",
      dateCreated: randomDate(),
      urgency: 'Medium'
    },
    {
      title: "Shower",
      description:
        "You need to brush your teeth in a circular motion, using a toothbrush and toothpaste",
      dateCreated: randomDate(),
      urgency: 'High'
    },
    {
      title: "Cook Breakfast",
      description:
        "You need to brush your teeth in a circular motion, using a toothbrush and toothpaste",
      dateCreated: randomDate(),
      urgency: 'Medium'
    },
    {
      title: "Drive To Work",
      description:
        "You need to brush your teeth in a circular motion, using a toothbrush and toothpaste",
      dateCreated: randomDate(),
      urgency: 'Low'
    },
  ];
  

