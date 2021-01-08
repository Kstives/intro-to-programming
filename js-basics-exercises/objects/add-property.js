let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 8; // Add property 'age'.
fido['favorite food'] = 'chicken'; // Add property 'favorite food'.

console.log(`Fido's is ${fido.age} years old and his favorite food is ${fido['favorite food']}.`);