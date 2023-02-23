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
