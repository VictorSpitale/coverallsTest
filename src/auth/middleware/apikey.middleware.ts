import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as passport from 'passport';

@Injectable()
export class ApikeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      'headerapikey',
      { session: false, failureRedirect: '/api/unauthorized' },
      (value) => {
        if (value) {
          next();
        } else {
          throw new UnauthorizedException('Api Key Unauthorized');
        }
      },
    )(req, res, next);
  }
}
