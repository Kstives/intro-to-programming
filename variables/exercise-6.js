const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
** This program will not produce an error because, like the previous exercise, there are
** two different constants of FOO being declared, the first with global scope, 
** and the second with block scope that shadows the first constant. 
*/