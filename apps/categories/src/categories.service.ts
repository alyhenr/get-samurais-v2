import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.create(createCategoryDto);
  }

  findAll() {
    return this.categoriesRepository.findAll();
  }

  findOne(id: string) {
    return this.categoriesRepository.findOne(id);
  }

  async update(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(categoryId, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoriesRepository.remove(id);
  }
}
