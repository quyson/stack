using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        int[] array = { 2, 1, 5, 6, 2, 3 };
        int answer = GetSolution(array);
        Console.WriteLine(answer);
    }

    public static int GetSolution(int[] array)
    {
        int maxArea = 0;
        List<int[]> stack = new List<int[]>();

        for (int i = 0; i <= array.Length; i++)
        {
            while (stack.Count > 0 && (i == array.Length || array[i] < stack[stack.Count - 1][1]))
            {
                int[] top = stack[stack.Count - 1];
                stack.RemoveAt(stack.Count - 1);

                int width = (stack.Count == 0) ? i : (i - stack[stack.Count - 1][0] - 1);
                maxArea = Math.Max(maxArea, top[1] * width);
            }

            if (i < array.Length)
            {
                stack.Add(new int[] { i, array[i] });
            }
        }

        return maxArea;
    }
}