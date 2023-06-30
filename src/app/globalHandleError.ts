import { LocationStrategy } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalHandleError extends ErrorHandler {
    constructor(private httpClient:HttpClient,private locationStrategy:LocationStrategy){
        super()
    }
    override handleError(error: any): void {

        var errorEvent ={
            path:this.locationStrategy.path(),
            message:error.message?? error.toString(),
            handler:'GlobalHandleError',
            date:new Date(),
            stack:error.stack
        }

        this.httpClient.post("http://localhost:3002/errors",errorEvent).subscribe(()=>{})
    }
}