from model import Todo


# MongoDb driver
import motor.motor_asyncio


client = motor.motor_async_io.AsyncIOMotorClient('mongodb://localhost:27017')
