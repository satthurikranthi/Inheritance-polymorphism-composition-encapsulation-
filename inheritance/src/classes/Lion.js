import Dog from "./Dog";

class Lion extends Dog {

constructor(){
    super();
}

    foodBehaviour = ()=>{
        console.log("Lion hunts animal and  eat nonveg.");

    };
    sleepingBehaviour = ()=>{
        console.log("Lion sleeps on forests area.");
    };

    facingHuman = ()=>{
        console.log("Human runs away from Lion.");
           
    };

    calculateResult = ()=>{
        console.log("Inside Calculate Result - 0 parameters")
    };
    calculateResult = (a)=>{
        console.log("Inside Calculate Result - 1 parameters")
    };
    calculateResult = (a,b)=>{
        console.log("Inside Calculate Result - 2 parameters")
    };
    calculateResult = (a,b,c)=>{
        console.log("Inside Calculate Result - 3 parameters")
    };

}

export default Lion;

