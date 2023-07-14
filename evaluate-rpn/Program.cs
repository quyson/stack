public class Solution {
    public int EvalRPN(string[] tokens) {
        List<int> stack = new List<int>();
        for(int i = 0; i < tokens.Length; i++){
            if(tokens[i] == "+"){
               int num1 = stack[stack.Count - 1];
               stack.RemoveAt(stack[stack.Count - 1]);
               int num2 = stack[stack.Count - 1];
               stack.RemoveAt(stack[stack.Count - 1]);
               int result = num1 + num2;
               stack.Add(result);
            }
            else if(tokens[i] == "-"){
                int num2 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int num1 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int result = num1 - num2;
                stack.Add(result);
            }
            else if(tokens[i] == "*"){
                int num2 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int num1 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int result = num1 * num2;
                stack.Add(result);
            }
            else if(tokens[i] == "/"){
                int num2 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int num1 = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);
                int result = num1 / num2;
                stack.Add(result);
            }
            else{
                int num;
                if (int.TryParse(tokens[i], out num)) {
                    stack.Add(num);
                }
                else {
                    throw new ArgumentException("Invalid token: " + tokens[i]);
                }
            }
        }
        return stack[0];
    }
}