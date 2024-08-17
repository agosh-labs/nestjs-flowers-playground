import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAuthorized = request.headers.authorization === 'secret';
    if (!isAuthorized) throw new UnauthorizedException();
    return isAuthorized;
  }
}
