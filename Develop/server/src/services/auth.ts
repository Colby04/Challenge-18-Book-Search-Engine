import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY || 'default_secret';

import { Request } from 'express';

export function authenticateGraphQL({ req }: { req: Request }) {
  const token = req.headers['authorization'];
  if (!token) return { user: null };

  try {
    const user = jwt.verify(token, secretKey);
    if (user && typeof user !== 'string') {
      req.user = user as { _id: unknown; username: string; };
      return { user };
    } else {
      return { user: null };
    }
  } catch (err) {
    return { user: null };
  }
}