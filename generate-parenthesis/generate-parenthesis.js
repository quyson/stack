const getSolution = (pairs) => {
    const stack = [];
    possibleOptions("", 0, 0);
    return stack;

    function possibleOptions(current, openCount, closeCount) {
        if(openCount == pairs && closeCount == pairs){
            stack.push(current);
            return
        }
        if(openCount < pairs){
            possibleOptions(current + "(", openCount + 1, closeCount);
        }
        if(closeCount < pairs)
            possibleOptions(current + ")", openCount, closeCount + 1)
        }
};


