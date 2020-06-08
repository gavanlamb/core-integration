import express from 'express';
import {
  saveDeviceIntegration,
  getDeviceIntegrations,
} from './controllers/deviceController';
import compression from 'compression';
import bodyParser from 'body-parser';

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/device/:deviceId/rules', getDeviceIntegrations);
app.post('/api/v1/device/:deviceId/rule', saveDeviceIntegration);

export default app;
