import { validate as uuidvalidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
  it('should be set id and props', () => {
    const props = { prop1: 'uuid', prop2: 15 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).toBeDefined();
    expect(uuidvalidate(entity._id)).toBeTruthy();
  });
});
