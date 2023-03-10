import fs from 'node:fs';
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../../../repositories/category/category.repository.interface';

interface IImportCategories {
  name: string;
  description: string;
}
export class ImportCategoriesCSVUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  async LoadCategories(
    file: Express.Multer.File,
  ): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(console.log(err));
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.LoadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;
      const alreadyExists = await this.categoriesRepository.findByName(name);

      if (!alreadyExists) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}
