import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListForunsUseCase } from "./ListForunsUseCase";

class ListForunsController {
  constructor(private listForunsUseCase: ListForunsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.foruns.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListForunsController };
