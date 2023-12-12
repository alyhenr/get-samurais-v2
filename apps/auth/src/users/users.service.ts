import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return this.usersRepository.create({
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      });
    } catch (error) {
      throw new ConflictException('Email already in use');
    }
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return this.usersRepository.update(id, updateUserDto);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  remove(id: string) {
    try {
      return this.usersRepository.remove(id);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw 'Email not found';

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw 'Password is wrong';

    return user;
  }
}
