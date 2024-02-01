import numpy as np
plain_text = 'GEEKSFORGEEKS'
key = 'AYUSH'
x=len(plain_text)
y=len(key)
print(x,y)
print(x%y,x/y)

def equal (str1,n,m):
    newstr = str1 + str1*(int(n/m)-1)
    newstr = newstr + str1[0:n%m] 
    return newstr

def populate_mat():
    matrix = []
    for i in range(26):
        arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        arr = list(arr)
        arr1 = arr[i:]
        arr2 = arr[:i]
        matrix+=[[arr1+arr2]]
    matrix = np.array(matrix)    
    return matrix.reshape(26,26).tolist()   
mat = populate_mat()
key=equal(key,x,y)
cipher = ""
for i in range(len(plain_text)):
    x = ord(plain_text[i])%65
    y = ord(key[i])%65
    cipher+= mat[x][y]
print(cipher)    
decrypt = ''
arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for i in range(len(plain_text)):
    x = ord(key[i])%65
    y = mat[x].index(cipher[i])
    decrypt += arr[y]
print(decrypt)