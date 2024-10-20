import { randomUUID } from 'node:crypto';

export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly _props: Props;

  constructor(props: Props, id: string) {
    this._props = props;
    this._id = id || randomUUID();
  }

  get id() {
    return this._id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this._props,
    } as Required<{ id: string } & Props>;
  }
}
