return foo() ? 'bar' : qux();

if ('bar')
  return foo()
} else {
  return qux();
}

// correct code
if (foo()) {
  return 'bar';
} else {
  return qux();
}