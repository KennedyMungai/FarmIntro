from model import Todo
from apiKeys import apiKey
# MongoDB driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient(apiKey)

database = client.TodoList
