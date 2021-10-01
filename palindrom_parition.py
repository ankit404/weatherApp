class Solution:
    def partition(self, s):
        self.p = []
        self.dp = [[False for _ in range(len(s))] for _ in range(len(s))]
        self.backtrack(s, 0, [])
        return self.p
    
    def backtrack(self, s, l, path):
        # print(self.dp)
        if l >= len(s):
            self.p += path,
            return 
        
        for i in range(l, len(s)):
            if s[i] == s[l] and (i-l <= 2 or self.dp[l+1][i-1]):
                self.dp[l][i] = True
                self.backtrack(s, i+1, path+[s[l:i+1]])

s = Solution()
print(s.partition("abbab"))