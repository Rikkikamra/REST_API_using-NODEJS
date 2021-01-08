import { foo, intFail, intSuccess } from './foo';

it('unit test', () => {
  const val = foo().then(res => {
    expect(res).toEqual(200);
  });
});

it('fail integration', () => {
  const val = intFail().then(res => {
    expect(res).toEqual(400);
  });
});

it('success integration', () => {
  const val = intSuccess().then(res => {
    expect(res).toEqual(200);
  });
});
