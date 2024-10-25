import logo from './logo.svg';
import './App.css';
import Dog from './classes/Dog';
import Lion from './classes/Lion';

function App() {

  let puppy = new Dog(4,2,1,0);

  let puppy2 = new Dog();
  puppy2.noOfLegs = 4;
  puppy2.noOfEyes = 2;
  puppy2.foodBehaviour();
  puppy2.sleepingBehaviour();
  puppy2.facingHuman();

  console.log(puppy2.noOfEyes);
  console.log(puppy2.noOfLegs);
  console.log(puppy2.noOfNose);
  console.log(puppy2.noOfTails);

   console.log("-----Lion-----");
  let Mammai = new Lion();
  Mammai.foodBehaviour();
  Mammai.sleepingBehaviour();
  Mammai.facingHuman();
  Mammai.calculateResult();
  Mammai.calculateResult(1);
  Mammai.calculateResult(1,2);
  Mammai.calculateResult(1,2,3);

  return <div className="App">  </div>
 
}

export default App;
