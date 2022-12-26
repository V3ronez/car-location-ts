import { randomUUID } from 'node:crypto';
interface CategoryProps {
  name: string;
  description: string;
  created_at: Date;
}
export class Category {
  private _id: string;
  private props: CategoryProps;
  constructor(props: CategoryProps, id?: string) {
    this.props = { ...props };
    this._id = id ?? randomUUID();
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
  get createdAt() {
    return this.props.created_at;
  }
}
