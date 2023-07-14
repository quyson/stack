using System;
using System.Collections.Generic;

public class MinStack {
    private List<int> stack;
    private List<int>  minStack;

    public MinStack() {
        stack = new List<int>();
        minStack = new List<int>();
    }
    
    public void Push(int val) {
        stack[minStack.Count - 1] = val;
        if(val < minStack[minStack.Count - 1] || minStack.Count == 0){
            minStack.Add(val);
        } else {
            minStack.Add(minStack[minStack.Count - 1]);
        }
    }
    
    public void Pop() {
        stack.RemoveAt(stack.Count - 1);
        minStack.RemoveAt(minStack.Count - 1);
    }
    
    public int Top() {
        return stack[stack.Count - 1];
    }
    
    public int GetMin() {
        return minStack[minStack.Count - 1];
        
    }
}