const students = [
  { name: 'John', grades: [90, 87, 93, 88] },
  { name: 'Jane', grades: [78, 82, 80, 85] },
  { name: 'Mike', grades: [92, 89, 85, 78] },
  { name: 'Anna', grades: [75, 80, 92, 87] },
];

function averageGrades(massive) {
  let sum = 0;
  for(const value of massive) {
    for(const grade of value.grades) {
      sum += grade;
      console.log(sum);
    };
  };
  return sum / 16;
};

console.log(`Середній бал усіх студентів: ${averageGrades(students)}`);


function showInfo(massive) {
    for(const value of massive) {
      console.log(value);
      for(let one in value.grades) {
        console.log(value.grades[one]);
        console.log(value.grades[one]);
        
        console.log(`${value.name} оценки ${value.grades[one]}`)
      }
    }
};
showInfo(students);