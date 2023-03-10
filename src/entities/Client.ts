import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/replace';

export interface ClientProps {
  name: string;
  username: string;
  avatar: string;
  email: string;
  password: string;
  SSN: string;
  driver_license: string;
  isAdmin: boolean;
  created_at: Date;
}
export class Client {
  private _id: string;
  private props: ClientProps;
  constructor(props: Replace<ClientProps, { created_at?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, created_at: props.created_at ?? new Date() };
  }

  get id() {
    return this._id;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get name(): string {
    return this.props.name;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  set avatar(path: string) {
    this.props.avatar = path;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get username(): string {
    return this.props.username;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get email(): string {
    return this.props.email;
  }

  set password(password: string) {
    this.props.password = password;
  }

  set SSN(SSN: string) {
    this.props.SSN = SSN;
  }

  get SSN(): string {
    return this.SSN;
  }

  set driver_license(driver_license: string) {
    this.props.driver_license = driver_license;
  }

  get driver_license(): string {
    return this.props.driver_license;
  }

  get isAdmin(): boolean {
    return this.props.isAdmin;
  }
  get created_at(): Date {
    return this.props.created_at;
  }
}
