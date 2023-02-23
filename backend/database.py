from model import Todo
from apiKeys import apiKey

# MongoDB driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient(apiKey)
database = client.TodoList
collection = database.todo


async def fetch_one_todo(title):
    """An async function that fetches one todo from the db

    Args:
        title (String): The item used in fetching the todo
    """
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos():
    """A function that fetches all the Todo objects from the database
    """
    todos = []
    cursor = collection.find({})

    async for document in cursor:
        todos.append(Todo(**document))

    return todos


async def create_todo(todo):
    """A function that writes a todo object on the database

    Args:
        todo (Todo): The item being written onto the database
    """
    document = todo
    result = await collection.insert_one(document)
    return document


async def update_todo(title, description):
    """A function that updates items on the database

    Args:
        title (String): Acts as the identifier of teh Todo i=objects
        description (String): The body of the Todo objects
    """
    await collection.update_one({"title": title}, {"$set": {"description": description}})
    document = await collection.find_one({"title": title})
    return document
