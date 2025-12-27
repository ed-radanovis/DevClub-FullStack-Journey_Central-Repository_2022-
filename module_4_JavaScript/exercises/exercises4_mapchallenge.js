// FIRST CHALLENGE - MAP

//exercise one

const list = [
  { name: "Edmar", vip: true },
  { name: "Jessica", vip: false },
  { name: "João", vip: true },
  { name: "José", vip: true },
  { name: "Antonio", vip: false },
  { name: "Maria", vip: true },
  { name: "Ana", vip: false },
];

const newListOne = list.map((sector) => {
  const defineSector = {
    name: sector.name,
    vip: sector.vip,
    sector: sector.vip ? "Black" : "Green",
  };
  return defineSector;
});

console.log(newListOne);

console.log();
//exercise two

const students = [
  { name: "Edmar", testGrade: 7 },
  { name: "Jessica", testGrade: 5 },
  { name: "João", testGrade: 8 },
  { name: "José", testGrade: 9 },
  { name: "Antonio", testGrade: 3 },
  { name: "Maria", testGrade: 2 },
  { name: "Ana", testGrade: 10 },
];

const result = students.map((grade) => {
  let gradevalue;
  if (grade.testGrade < 7) {
    gradevalue = "Disapproved";
  } else {
    gradevalue = "Approved";
  }
  const approval = {
    name: grade.name,
    finalResult: gradevalue,
  };
  return approval;
});

console.log(result);
