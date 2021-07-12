import React, { useEffect, useState } from 'react'
import { v4 as uuid_v4 } from 'uuid';
import { Chip, Container, Zoom } from '@material-ui/core';
import Sidebar from '../../components/Sidebar'
import HeaderComp from './HeaderComp';
import TodoComp from './TodoComp';
import FormDailogComp from './FormDailogComp';
import { useFormik } from 'formik';
import { DragDropContext } from 'react-beautiful-dnd';

// user defined React Hoocks By Arghadeep 

function useLocalStorageState(key, defaultValue = "") {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) || defaultValue)

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}


function Todos() {
    const [todos, setTodos] = useLocalStorageState('todos',[])
    const [isOpen, setIsOpen] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState({})
    const [priorityFilter, setPriorityFilter] = useState('')
    const [filteredTodos, setFilteredTodos] = useState([])

    const currentDate = () => {
        const now = new Date();
        return (now.toISOString().slice(0, 10))
    }

    const formik = useFormik({
        initialValues: {
            todoText: '',
            priority: 'low',
            dueDate: currentDate(),
        },

    });

    useEffect(() => {
        if (editMode) {
            formik.values.todoText = editTodo.val;
            formik.values.priority = editTodo.priority;
            formik.values.dueDate = editTodo.dueDate;
        } else {
            formik.values.todoText = ""
            formik.values.priority = "low"
            formik.values.dueDate = currentDate();
        }
        // console.log(`EditMood: ${editMode}, isOpen: ${isOpen}`);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editMode])

    useEffect(() => {
        if (!isOpen) {
            if (editMode) setEditMode(false)
        }

    }, [editMode, isOpen])

    useEffect(() => {
        setFilteredTodos(todos.filter(t => t.priority === priorityFilter))
    }, [priorityFilter, todos])

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleSubmit = () => {
        const { todoText, priority, dueDate } = formik.values;

        if (!editMode) {
            if (todoText === "") return;
            setTodos([...todos, { id: uuid_v4(), val: todoText, priority: priority, dueDate: dueDate, in: true }])
        } else {
            const newTodos = [...todos];
            const term = newTodos.find(t => t.id === editTodo.id)

            term.val = todoText;
            term.priority = priority;
            term.dueDate = dueDate;

            setEditMode(false)
            setEditTodo({})
            setTodos(newTodos)
        }


        setIsOpen(false)

        formik.values.todoText = ""
        formik.values.priority = "low"
        formik.values.dueDate = currentDate();

        // console.log(formik.values);
    }

    const handleDelete = (id) => {
        const newTodos = [...todos]; //sprading it in a new todos array
        setTodos(newTodos.filter(t => t.id !== id))
    }

    const handleEditlick = (todo) => {
        setIsOpen(true);
        setEditMode(true)
        setEditTodo(todo)
    }

    const handleDone = (todo) => {
        const newTodos = [...todos]
        const t = newTodos.find(t => t.id === todo.id)
        t.done = !t.done;
        setTodos(newTodos);
    }

    const handlePriority = (priority) => {
        setPriorityFilter(priority)
    }

    const handlePriorityDelete = () => {
        setPriorityFilter('')
    }

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;
        if (destination.index === source.index) return;

        const t = todos.filter(todo => todo.id === draggableId)[0]

        const newTodos = [...todos]
        newTodos.splice(source.index, 1)
        newTodos.splice(destination.index, 0, t)
        setTodos(newTodos)
    }

    return (
        <div>
            <Sidebar />
            <Container className="todos_body">
                <HeaderComp handleFabClick={handleOpen} />
                {priorityFilter === "" ? null : (
                    <Zoom
                        in={priorityFilter !== ''}
                        timeout={200}
                    >
                        <Chip
                            label={priorityFilter}
                            onDelete={handlePriorityDelete}
                            color="secondary" style={{ marginTop: '1.2rem' }}
                        />
                    </Zoom>)}

                <DragDropContext onDragEnd={onDragEnd}>
                    <TodoComp
                        todos={priorityFilter === "" ? todos : filteredTodos}
                        handleDelete={handleDelete}
                        handleEditlick={handleEditlick}
                        handleDone={handleDone} handlePriority={handlePriority}
                    />
                </DragDropContext>
            </Container>

            <FormDailogComp
                open={isOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                formik={formik}
                editMode={editMode}
            />
        </div>
    )
}

export default Todos
