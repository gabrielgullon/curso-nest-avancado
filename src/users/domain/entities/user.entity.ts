export type UserProps = {
  name: string;
  email: string;
  pw: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get pw() {
    return this.props.pw;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
