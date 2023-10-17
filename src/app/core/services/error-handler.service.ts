import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from '@core/services/logger.service';
import {environment} from "../../environments/environment";

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private loggerService: LoggerService) {
    super();
  }

  public override handleError(error: any) {
    if (environment.production) {
      this.loggerService.logError(error);
    }

    super.handleError(error);
  }
}
