/*Using the stack structure, we run through the array in reverse. We check if any car is going to reach
the end before the car in front of them than the first car. If so, they are popped from a stack to signal that they have joined the car fleet of the car
ahead of them. Time complexity is O(n) because iterating through the array once.*/


const getSolution = (target, posArray, spdArray) => {
    const cars = [];
    const stack = [];
    for(let i = 0; i < posArray.length; i ++){
        cars.push([posArray[i], spdArray[i]]);
    }

    for(let j = cars.length - 1; j >= 0; j--){
        const timeToTarget = (target - cars[j][0]) / cars[j][1];
        while (stack.length > 0 && timeToTarget >= stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(timeToTarget);
    }
     return stack.length; 
}