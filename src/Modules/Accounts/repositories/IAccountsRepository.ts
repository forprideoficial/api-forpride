import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
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
  password: string;
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
}

 
interface IAccountsRepository {
  create({ id, país, username, role, status, sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, password, online, patron, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude}: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void>;
  findByUsername(id: string): Promise<void>;
  session(email: string, username: string, password: string);
  sessionFast(id: string);
  list();
  update({ id, país, username, role, status, sex, sexualOption, preferenceSex, preferenceSexualOption, sign, birthDate, email, phone, online, patron, nickname, avatar, cover, relationship, city, uf, password, cep, latitude, longitude}: IAccountsDTO): void;
  delete({id});
}

export { IAccountsRepository, IAccountsDTO };
