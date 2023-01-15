import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/replace';
interface CategoryProps {
  name: string;
  description: string;
  created_at: Date;
}
export class Category {
  private _id: string;
  private props: CategoryProps;
  constructor(
    props: Replace<CategoryProps, { created_at?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = { ...props, created_at: props.created_at ?? new Date() };
  }

  get id() {
    return this._id;
  }

  get name() {
    return this.props.name;
  }
  set name(value: string) {
    this.props.name = value;
  }
  get description() {
    return this.props.description;
  }
  set description(value: string) {
    this.props.description = value;
  }
  get created_at() {
    return this.props.created_at;
  }
}
