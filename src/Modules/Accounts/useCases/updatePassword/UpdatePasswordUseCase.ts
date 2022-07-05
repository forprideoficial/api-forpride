import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  username: string;
  nickname: string;
  role: string;
  status: string;
  sex: string;
  sexualOption: string;
  preferenceSex: string;
  preferenceSexualOption: string;
  sign: string;
  birthDate: string;
  email: string;
  phone: string;
  online: boolean;
  patron: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  país: string; 
  cep: string;
  latitude: string;
  longitude: string;
  password: Promise<string>;
}

class UpdatePasswordUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({id, país, username, role, status,  sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, online, patron, nickname, avatar, cover, relationship, city, uf, password, cep, latitude, longitude }: IRequest): Promise<void> {
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({
        id, país, username, role, status,  sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, online,patron, nickname, avatar, cover, relationship, city, uf, password: passwordHash , cep, latitude, longitude
      });

  }
}

export { UpdatePasswordUseCase };
