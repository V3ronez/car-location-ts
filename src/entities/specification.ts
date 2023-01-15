import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/replace';
interface SpecificationProps {
  name: string;
  description: string;
  created_at: Date;
}
export class Specification {
  private _id: string;
  private props: SpecificationProps;
  constructor(props: Replace<SpecificationProps, { created_at?: Date }>) {
    this._id = randomUUID();
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
  get createdAt() {
    return this.props.created_at;
  }
}
