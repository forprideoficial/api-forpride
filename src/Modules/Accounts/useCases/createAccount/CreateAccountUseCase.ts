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

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({id, país, username, role, status,  sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude }: IRequest): Promise<void> {
    const findEmail = await this.accountRepository.findByEmail(email);
    const findUsername = await this.accountRepository.findByUsername(username);
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.create({
        id, país, username, role, status,  sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, online, patron, password: passwordHash, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude
      });

  }
}

export { CreateAccountUseCase };