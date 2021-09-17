import * as t from 'runtypes';

export const cartItemRuntype = t.Record({
  productId: t.Number,
  amount: t.Number,
});

export type CartItem = t.Static<typeof cartItemRuntype>;
