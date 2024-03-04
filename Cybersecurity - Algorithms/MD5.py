import math
from collections import defaultdict as dd
def padding(input,length):
    remain = (math.ceil(length/512))*512 - length
    new_input = input
    if(remain < 64):
        new_input = input + '1' + ('0'*(remain))
    else:
        bit_input_64_len = bin(length)[2:]
        if(len(bit_input_64_len) > 64 ):
            return 'INPUT EXCEEDS 64-bit size'
        new_input = input + "1"  + ('0'*(remain-1-64)) + ('0'*((64-len(bit_input_64_len)))) + str(bit_input_64_len)
    return new_input    

def split(text,length=512):
    if(length == len(text)):
        new = [text]
    else:
        new=[]
        for i in range(0,len(text),length):
            new += [[text[i:i+length]]]
    return new

def leftrotate(x,n):
    return ((x << n) | (x >> (32 - n))) & '0xFFFFFFFF'

def encryption(chunk,A,B,C,D):
    for j in chunk:
        split_32 = split(j,32)
        for i in range(0,64):
            if(i>=0 and i<16):
                F = hex((int(B,16) & int(C,16)) | (~int(B,16) & int(D,16)))
                g = i
            elif(i>=16 and i<32):
                F = hex((int(D,16) & int(B,16)) | (~int(D,16) & int(C,16)))   
                g = (5*i + 1)%16
            elif(i>=32 and i<48):
                F = hex(int(B,16) ^ int(C,16) ^ int(D,16))     
                g = (3*i + 5)% 16
            elif(i>=48 and i<64):
                F = hex(int(C,16) ^ (int(B,16) | (~int(D,16)))) 
                g = (7*i)%16  
            temp = D
            D = C
            C = B
            B = hex(( (( ((( ((int(A,16) + int(F,16))% (2**32)) + k[i])% (2**32)) + int(split_32[g][0],2)) %(2**32)) << r[i]) + int(B,16) )%(2**32))
            A = temp     
    return A,B,C,D

# x = input('Enter a Text :')
x = 'VANAKAM DA MAAPLA'
bits_input = ''.join([bin(ord(i)).replace('b','') for i in x])
# print(bin(ord(x[1])).replace('b',''))
len_input = len(bits_input) 
print((math.ceil(1024/512))*512 - 1024)

# print(bits_input,len_input)

# print(padded_inp)
A = '01234567'

B = '89abcdef'

C = 'fedcba98'

D = '76543210'

r = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17,22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9,\
      14,20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11,16, 23, 4, 11, 16, 23, 6, 10, 15,\
          21, 6, 10, 15, 21, 6,10, 15, 21, 6, 10, 15, 21]
k = [math.floor(abs(math.sin(i))*(2**32)) for i in range(0,64)]
splited = split(padding(bits_input,len_input))
A,B,C,D = encryption(splited,A,B,C,D)
Hash = A+B+C+D
print(Hash)
print(k)
# print(len(split(splited[0],32)))
# constants = {}
# constants[-4],constants[-3],constants[-2],constants[-1] = A,B,C,D
# print(constants,A,B,C,D)
# print(hex(int(B,16) & int(C,16) | (~int(B,16) & int(D,16))))
print(int(splited[0][14],2))