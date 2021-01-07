function calculateBMI(heightCm, weightKg) {
  let weightInKilograms = weightKg;
  let heightInMeters = heightCm / 100;
  let bmi = weightInKilograms / (heightInMeters**2);
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"
