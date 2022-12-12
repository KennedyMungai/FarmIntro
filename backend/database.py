from model import Todo


# MongoDb driver
import motor.motor_asyncio


client = motor.motor_async_io.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.TodoList

collection = database.todo


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document
