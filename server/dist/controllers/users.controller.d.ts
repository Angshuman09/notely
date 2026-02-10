import type { Request, Response } from "express";
export declare const register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const logout: (_: any, res: Response) => Promise<void>;
//# sourceMappingURL=users.controller.d.ts.map