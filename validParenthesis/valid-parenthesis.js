/* This uses a stack in order to solve for the answer. The logic goes that as we loop through the string
we will add them to a stack, but only if they are opening brackets. once, we reach a closing bracket, the top
of the stack should theoretically be it's corresponding opening bracket. if not then it's not valid. but if it
is then we should pop from the stack to put the next stack value up top in case we meet another closing bracket.
finally, we will check if the stack is empty at the end suggesting that all opening brackets have found a closing
bracket. if not then, there are not enough closing brackets to close the opening brackets and it is false. */

const getSolution = (string) => {
    const closeToOpen = {")" : "(", "}": "{", "]": "["};
    let stack = [];

    for(let i = 0; i < string.length; i++){
        if(string[i] in closeToOpen){
            if(stack.length > 0 && stack[stack.length - 1] == closeToOpen[string[i]]){
                stack.pop()
            }
            return false;
        } else {
            stack.push(string[i]);
        }
    }
    if(stack.length == 0){
        return true;
    }
    return false;
}