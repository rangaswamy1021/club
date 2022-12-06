import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable, throwError, throwIfEmpty } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = this.cookieService.get('token');
    const token = localStorage.getItem("token");

    if (token && navigator.cookieEnabled) {
      request = request.clone({
        setHeaders: { authorization: `${token}` },
      });
    }
    console.log('Intercepted HTTP call', request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  public handleError(error) {
    return throwError(error);
  }
}

export const httpErrorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true,
};
