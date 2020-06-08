import { Request, Response } from 'express';
import Logger from '../logger';

export const saveDeviceIntegration = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};

export const getDeviceIntegrations = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};
