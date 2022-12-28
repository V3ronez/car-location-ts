import { randomUUID } from 'node:crypto';
interface SpecificationProps {
  name: string;
  description: string;
  created_at: Date;
}
export class Specification {
  private _id: string;
  private props: SpecificationProps;
  constructor(props: SpecificationProps, id?: string) {
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
