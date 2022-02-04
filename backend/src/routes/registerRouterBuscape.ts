import express from 'express';
import { registerProductsBuscapeController } from '../controllers/registerProductsBuscapeController';

const registerRouterBuscape = express.Router();

registerRouterBuscape.get('/', registerProductsBuscapeController);

export default registerRouterBuscape;
