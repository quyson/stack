/* Utilize a stack structure in order to solve this problem. Compare the Ith element to the top of the stack, although
the first element would naturally be placed in the stack regardless. If the Ith element is larger, than pop
the last element from the stack, and then fill the corresponding array position with the difference in position
to get the amount of days. If the Ith element is smaller, then simply append on to the top of the stack. By the
end, if there are still numbers in the stack, then their corresponding values in the answer array would be 0 for
0 days. This time complexity should be O(n) because we are iterating over the days array only once. The space
complexity should be O(n)? */


const getSolution = (days) => {
    const stack = [];
    const result = Array(days.length).fill(0)

    for(let i = 0; i < days.length; i++){
        if(i == 0){
            stack.push([i , days[i]]);
        }
        if(days[i] <= stack[stack.length - 1][1]){
            stack.push([i, days[i]]);
        }
        if(days[i] > stack[stack.length - 1][1]){

            while(days[i] > stack[stack.length - 1][1] && stack.length > 0){
                result[stack[stack.length - 1][0]] = i - stack[stack.length - 1][0];
                stack.pop();
            }

            stack.push([i, days[i]]);
        }
    }
    return result;
}