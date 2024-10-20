import { faker } from '@faker-js/faker/.';
import { UserProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  pw?: string;
  createdAt?: Date;
};

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    pw: props.pw ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date(),
  };
}
