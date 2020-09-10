const units = [new Unit('Archer', 50, 100, 50, 100),
new Unit('Pikeman', 100, 50, 100, 50)];

units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(new Unit('Archer', 20, 10, 50, 100))
units.push(new Unit('Archer', 20, 10, 50, 100))

console.log(units, units[0,1,2,3,4,5,6,7,8,9, 10,11].isReadyToMove());

const squad = new Squad(units);
console.log(squad.restore());

