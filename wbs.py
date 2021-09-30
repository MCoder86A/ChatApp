import asyncio
import websockets

w=set()
async def send(ws):
    while 1:
        ms = await ws.recv()
        await asyncio.wait([client.send(ms) for client in w])

async def maan(ws, p):
    try:
        w.add(ws)
        await asyncio.gather(send(ws))
    finally:
        w.remove(ws)

start_server = websockets.serve(maan, "2409:4065:e12:3c32:5061:fb80:d50c:f4c8", 5678)
asyncio.get_event_loop().run_until_complete(start_server)

asyncio.get_event_loop().run_forever()
