import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('user entity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      pw: faker.internet.password(),
    };
    sut = new UserEntity(props);
  });

  it('constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.pw).toEqual(props.pw);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('should get name', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(sut.props.name);
    expect(typeof sut.name).toEqual('string');
  });

  it('should get name', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(sut.props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('should get email', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(sut.props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('should get pw', () => {
    expect(sut.pw).toBeDefined();
    expect(sut.pw).toEqual(sut.props.pw);
    expect(typeof sut.pw).toBe('string');
  });

  it('should get createdAt', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
