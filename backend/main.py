from database import (
    create_todo,
    fetch_one_todo,
    fetch_all_todos,
    update_todo,
    delete_todo
)
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo

# App Object
app = FastAPI()


origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    """A simple endpoint used to test API connection

    Returns:
        object: A simple dumb object
    """
    return {"Ping": "Pong"}


@app.get('/api/todo')
async def get_todo():
    """Am API endpoint intended for retrieving all todos

    Returns:
        1: A number (for testing purposes)
    """
    response = await fetch_all_todos()

    if response:
        return response


@app.get('/api/todo{title}', response_model=Todo)
async def get_todo_by_id(title):
    """An endpoint for retrieving individual todos by their id

    Args:
        id (identifier): An identifier for individual todos

    Returns:
        1: A simple number
    """
    response = await fetch_one_todo(title)

    if response:
        return response


@app.post('/api/todo')
async def post_todo(todo):
    """A simple endpoint for posting todos

    Args:
        todo (Object): The actual item being posted

    Returns:
        1: For testing purposes
    """
    return 1


@app.put('/api/todo{id}')
async def put_todo(id, data):
    """An endpoint for updating the todos

    Args:
        id (identifier): Acts as the identifier for the todo to be updated
        data (Object): The object meant to replace the todo

    Returns:
        1: A number for testing purposes
    """
    return 1


@app.delete('/api/todo{id}')
async def delete_todo(id):
    """A simple endpoint intended for deleting todos

    Args:
        id (Identifier): An identifier for the todo to be deleted

    Returns:
        1: A simple number for testing purposes
    """
    return 1
