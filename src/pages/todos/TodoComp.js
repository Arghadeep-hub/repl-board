import React from 'react'
import { Chip, Grid, Paper, Typography, ButtonGroup, IconButton, Fade } from '@material-ui/core'
import * as FiIcon from 'react-icons/fi'
import { Droppable, Draggable } from 'react-beautiful-dnd'

function TodoComp(props) {
    const getTextDecor = (done) => {
        return (done ? 'line-through' : 'none')
    }

    return (
        <Droppable droppableId="todolist">
            {(provided) => (
                <Grid container
                    direction="column" spacing={2}
                    style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {props.todos.map((todo, i) => {

                        return (
                            <Draggable draggableId={todo.id} index={i} key={todo.id}>
                                {(provided) => (
                                    <Fade in={todo.in}
                                        timeout={200}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef} >
                                        <Grid item>
                                            <Paper style={{ padding: '1rem' }} elevation={4}>
                                                <Grid container justifyContent="space-between" alignItems="center">
                                                    <Grid item>
                                                        <Typography variant="h6" style={{ textDecoration: getTextDecor(todo.done) }}>
                                                            {todo.val}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip color="primary" label={todo.priority} size="small" onClick={() => props.handlePriority(todo.priority)} />
                                                    </Grid>
                                                </Grid>

                                                <Typography variant="body2">Due: {todo.dueDate}</Typography>
                                                <ButtonGroup color="primary"
                                                    variant="text" size="small" style={{ paddingTop: '12px' }}>
                                                    <IconButton onClick={() => props.handleDelete(todo.id)}>
                                                        <FiIcon.FiTrash />
                                                    </IconButton>

                                                    <IconButton onClick={() => props.handleEditlick(todo)}>
                                                        <FiIcon.FiEdit3 />
                                                    </IconButton>

                                                    <IconButton onClick={() => props.handleDone(todo)}>
                                                        {todo.done ? <FiIcon.FiX /> : <FiIcon.FiCheck />}
                                                    </IconButton>
                                                </ButtonGroup>
                                            </Paper>
                                        </Grid>
                                    </Fade>

                                )
                                }
                            </Draggable>
                        )
                    })}
                </Grid>

            )
            }
        </Droppable>
    )
}

export default TodoComp
