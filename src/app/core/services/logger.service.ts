import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrMessage } from '@core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  public logError(error: any) {
    const errMessage: ErrMessage = this.createErrMessage(error);
    // Use any logger solution here to track and store the app error logs.
  }

  private createErrMessage(error: any): ErrMessage {
    const date = new Date().toISOString();
    if (error instanceof HttpErrorResponse) {
      return {
        date,
        type: 'HTTP ERR',
        message: error.message,
        status: error.status,
      };
    } else if (error instanceof TypeError) {
      return {
        date,
        type: 'TYPE ERR',
        message: error.message,
      };
    } else if (error instanceof Error) {
      return {
        date,
        type: 'GENERAL ERR',
        message: error.message,
      };
    } else {
      return {
        date,
        type: 'UNKNOWN ERR',
        message: error.message,
      };
    }
  }
}
