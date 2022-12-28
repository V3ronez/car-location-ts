export class SpecificationExistsError extends Error {
  constructor() {
    super('Specification already exists');
  }
}
