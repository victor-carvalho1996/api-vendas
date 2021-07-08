import { Request, Response } from 'express';
import ResetPasswordEmailService from '../services/ResetPasswordEmailService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = new ResetPasswordEmailService();

    await resetPassword.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
