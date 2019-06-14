

function bmi() {
  this.bmi = this.mass/this.height*this.height;
  return this.bmi;
}

var a = {
  fName: 'Anton',
  mass: 135,
  height: 175,
  calcBmi: bmi,
};

var b = {
  fName: 'Boris',
  mass: 80,
  height: 145,
  calcBmi: bmi,
};

function compare(a,b) {
  var aBmi = a.calcBmi();
  var bBmi = b.calcBmi();
  
  if (aBmi === bBmi) {
    console.log('same', aBmi);
    return
  }
  
  var res = (aBmi > aBmi) ? a : b;
  console.log(res.fName, res.bmi);
}

compare(a,b);
