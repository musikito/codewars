using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;

        // Your code here
        for(int i = 0; i < str.Length; i++)
        {
          if(str[i] =='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            vowelCount++;
        }// end if
        } //end for

        return vowelCount;
    }