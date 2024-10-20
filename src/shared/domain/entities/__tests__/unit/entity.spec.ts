import { Entity } from '../../entity';
import { validate as validateUuid } from 'uuid';
type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('entity unit tests', () => {
  it('should set props and id', () => {
    const props = { prop1: 'value1', prop2: 13 };
    const entity = new StubEntity(props);

    expect(entity._props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(validateUuid(entity.id)).toBeTruthy();
  });

  it('should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 13 };
    const id = 'e20d9ce6-7ac4-4c1a-b2bb-2ffd685c395b';
    const entity = new StubEntity(props, id);

    expect(validateUuid(entity.id)).toBeTruthy();
    expect(entity.id).toBe(id);
  });

  it('should validate the JSON converter', () => {
    const props = { prop1: 'value1', prop2: 13 };
    const id = 'e20d9ce6-7ac4-4c1a-b2bb-2ffd685c395b';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({ id, ...props });
  });
});
