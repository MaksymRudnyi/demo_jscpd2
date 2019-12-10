import user from './module';

const subject = new Rx.Subject();

subject.subscribe({
  next: (val) => console.log('val1: ', val),
  error: (err) => console.log('err1: ', err),
  complete: () => console.log('Complete'),
});


subject.subscribe({
  next: (val) => console.log('val2: ', val),
  error: (err) => console.log('err2: ', err),
  complete: () => console.log('Complete')
});

subject.next('test val');

console.log('second file');

console.log(user);
