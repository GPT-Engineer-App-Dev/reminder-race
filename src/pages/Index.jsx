import { useState } from "react";
import { Container, VStack, HStack, Input, Button, List, ListItem, Text, IconButton, Checkbox } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <Container centerContent maxW="container.md" py={4}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              backgroundColor="gray.100"
              p={2}
              borderRadius="md"
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "del" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;