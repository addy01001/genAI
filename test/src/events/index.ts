import EventEmitter from 'events';
import { Request } from 'express';
export const emitter = new EventEmitter();

emitter.on("handleAsync", (req: Request)=>{
    setTimeout(()=>{
        console.log("Wait successful", req.body)
    }, 5000)
})
