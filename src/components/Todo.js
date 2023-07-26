


































import React, { useState, useEffect } from "react";
import { CloseIcon, ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoValue, setEditedTodoValue] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [
        ...todos,
        { todo: newTodo.trim(), id: Date.now(), completed: false },
      ];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveData(newTodos);
  };

  const toggleCompleted = (id) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    saveData(newTodos);
  };

  const toggleAllCompleted = () => {
    const areAllCompleted = todos.every((todo) => todo.completed);
    let newTodos;
    if (areAllCompleted) {
      newTodos = todos.map((todo) => ({ ...todo, completed: false }));
    } else {
      newTodos = todos.map((todo) => ({ ...todo, completed: true }));
    }
    setTodos(newTodos);
    setAllCompleted(!areAllCompleted);
    saveData(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddTodo();
    }
  };

  const clearCompletedTasks = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    saveData(newTodos);
  };

  const showCompletedTodos = () => {
    setShowCompleted(true);
    setShowActive(false);
    setShowAll(false);
  };

  const showActiveTodos = () => {
    setShowCompleted(false);
    setShowActive(true);
    setShowAll(false);
  };

  const showAllTodos = () => {
    setShowCompleted(false);
    setShowActive(false);
    setShowAll(true);
  };

  const getFilteredTodos = () => {
    if (showCompleted) {
      return todos.filter((todo) => todo.completed);
    }

    if (showActive) {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  const handleTodoDoubleClick = (id, todoValue) => {
    setEditingTodoId(id);
    setEditedTodoValue(todoValue);
  };

  const handleTodoBlur = () => {
    if (editingTodoId !== null) {
      const newTodos = todos.map((todo) => {
        if (todo.id === editingTodoId) {
          return { ...todo, todo: editedTodoValue };
        }
        return todo;
      });

      setTodos(newTodos);
      setEditingTodoId(null);
      saveData(newTodos);
    }
  };

  const handleTodoChange = (e) => {
    setEditedTodoValue(e.target.value);
  };

  const [hoveredInput, setHoveredInput] = useState(null);
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (

<Box>
<Text
        color={"rgba(175, 47, 47, 0.15)"}
        textAlign={"center"}
        fontSize={"100px"}
        h={"50px"}
        
      >
        todos
      </Text>
    <Box  m={"0 auto"} w={"fit-content"} boxShadow={"rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"}>
    <Box
    bg={"white"}
     
      maxW={"500px"}
      boxShadow={
        "0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)"
      }
    >
      

      <Box m={"0 auto"} w={"100%"}>
        <Flex
          border={"1px solid grey"}
          justifyContent={"center"}
          alignItems={"center"}
          m={"0 auto"}
          p={"5px 0"}
          w={"98%"}
        >
          <ChevronDownIcon
            color="gray.300"
            h={"30px"}
            w={"30px"}
            onClick={toggleAllCompleted}
          />
          <Input
          border={"none"}
          w={"500px"}
            fontSize={"20px"}
            _focus={{
                outline: "none",
                boxShadow: "none",
            }}
            type="text"
            id="todoInput"
            className="form-control"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Flex>

        {getFilteredTodos().map((todo, index) => (
          <Flex
            m={"0 auto"}
            borderBottom={"1px solid grey"}
            w={"94%"}
            p={"0px 10px"}
            key={todo.id}
            alignItems={"center"}
            onMouseEnter={() => setHoveredInput(index)}
            onMouseLeave={() => setHoveredInput(null)}
          >
            <Flex gap={"10px"}  justifyContent={"center"}
                alignItems={"center"}>
              <Flex
                justifyContent={"center"}
                onClick={() => toggleCompleted(todo.id)}
                alignItems={"center"}
                borderRadius={"50%"}
                border={"1px solid gray"}
                h={"30px"}
                w={"30px"}
              >
                {todo.completed ? <CheckIcon color="green.600" /> : null}
              </Flex>
              {editingTodoId === todo.id ? (
                <Input 
                w={"400px"}
                mr={"10px"}
                h={"50px"}
            fontSize={"20px"}
                borderRadius={"0px"}
                
                  value={editedTodoValue}
                  onBlur={handleTodoBlur}
                  onChange={handleTodoChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleTodoBlur();
                    }
                  }}
                  _focus={{
                    border:"none",
                    outline: "none",
                    boxShadow: "-2px 0 0 grey",
                  }}
                />
              ) : (
                <Box
                  onDoubleClick={() =>
                    handleTodoDoubleClick(todo.id, todo.todo)
                  }
                  w={"400px"}
                  h={"50px"}
                  mr={"10px"}
                  display={"flex"}
                  alignItems={"center"}
                  textDecoration={todo.completed ? "line-through" : "none"}
                  color={todo.completed ? "#d9d9d9" : "black"}
                  fontSize={"20px"}
                >
                  {todo.todo}
                </Box>
              )}
            </Flex>
            {hoveredInput === index && (
              <CloseIcon
                h={"15px"}
                w={"15px"}
                color="red.300"
                onClick={() => deleteTodo(todo.id)}
              />
            )}
          </Flex>
        ))}
      </Box>

      <Flex p={"0 10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Text>{activeTodos.length} items left</Text>
        <Flex gap={"10px"}>
        <Button onClick={showAllTodos}  border={showAll ? "1px solid black" : "none"}>
          All
        </Button>
        <Button onClick={showActiveTodos} border={showActive ? "1px solid black" : "none"} >
          Active
        </Button>
        <Button onClick={showCompletedTodos} border={showCompleted ? "1px solid black" : "none"}>
          Completed
        </Button>
        </Flex>
        <Text onClick={clearCompletedTasks}>Clear completed</Text>
      </Flex>
      
    </Box>
    </Box>

</Box>
      );
}

export default Todo;
