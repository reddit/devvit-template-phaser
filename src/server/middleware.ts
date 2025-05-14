import { RequestContext } from '@devvit/server';
import { Request, Response, NextFunction } from 'express';
import { Devvit } from '@devvit/public-api';

// Extend Express Request type to include devvit context
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      devvit: Devvit.Context; // Make it non-optional, middleware should add it
    }
  }
}

// Create the middleware function
export function devvitMiddleware(req: Request, _res: Response, next: NextFunction): void {
  // Add the devvit property to the request
  req.devvit = RequestContext(req.headers) as Devvit.Context;
  next();
}
