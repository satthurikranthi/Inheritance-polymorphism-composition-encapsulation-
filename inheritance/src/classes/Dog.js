class Dog{
    constructor(legs,eyes,nose,tails){
        console.log("Inside Dog Constructor");
        this.noOfLegs = legs;
        this.noOfEyes = eyes;
        this.noOfNose = nose;
        this.noOfTails = tails;
      
    }


    foodBehaviour = ()=>{
        console.log("dog eat anything and sometimes hunts humans.");

    };

    sleepingBehaviour = ()=>{
        console.log("dogs sleeps on the street rods and houses.");
    };

    facingHuman = ()=>{
        console.log("sometime dog escapeing from humans sometimes humans escaping from dogs.");
           
    };

}

export default Dog;