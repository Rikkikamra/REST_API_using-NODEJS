import foo from './foo';

it('should foo', () => {
  const val = foo().then(res => {
    expect(res).toEqual(200);
  });
});
