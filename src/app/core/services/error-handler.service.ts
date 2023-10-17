import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoggerService } from '@core/services/logger.service';

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
