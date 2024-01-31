import numpy as np

def key_arr(key):
    key_arr = list(key)
    unique_key=[]
    for i in key_arr:
        if(i not in unique_key):
            if(i=='J'):
                unique_key+=['I']
                continue
            unique_key+=[i]
    for i in range(65,91):
        if(chr(i) not in unique_key and i!=74):
            unique_key+=[chr(i)]         
    unique_key = np.reshape(unique_key,(5,5))        
    return unique_key

def plaintext_arr(plaintext):
    newtxt=[]
    for i in plaintext:
        if(i != ' '):
            newtxt+=[i]
    new=[]
    i=0
    while(i<len(newtxt)):
        one=newtxt[i]
        two=''
        if(i+1>=len(newtxt)):
            if(newtxt[i]=='Z'):
                two='X'
            else:
                two='Z'   
        else:
            two=newtxt[i+1]     
        # print(i,"  ",newtxt[i],"->",two)        
        if(one==two):
                if(two=='Z'):
                    two='X'
                else:
                    two='Z'   
                i+=1    
                new+=[one+two]  
                continue
        i+=2 
        new+=[one+two]
    return new    

def index_finder(key,value):
    for i in range(0,5):
        for j in range(0,5):
            if(key[i,j]==value):
                return [i,j]
                 
def encrypt(plaintext,key):
    final=''
    for i in plaintext:
        one = i[0]
        two = i[1]
        index_one = index_finder(key,one)
        index_two = index_finder(key,two)
        
        # print("BEFORE:",key[index_one[0]][index_one[1]]," ",key[index_two[0]][index_two[1]])
        # print("INDEX BEFORE:",index_one,index_two)
        if(index_one[0]==index_two[0]):
            index_one[1]=((index_one[1]+1)%5)
            index_two[1]=((index_two[1]+1)%5)
        elif(index_one[1]==index_two[1]):
            index_one[0]=((index_one[0]+1)%5)
            index_two[0]=((index_two[0]+1)%5)
        else:
            inter = index_two[0]
            index_two[0]=index_one[0]
            index_one[0]=inter 
            index_one,index_two=index_two,index_one
        one = key[index_one[0]][index_one[1]]
        two = key[index_two[0]][index_two[1]]
        final+=one+two
        # print("AFTER :",one," ",two)
        # print("INDEX AFTER:",index_one,index_two) 
    return final     

def decrypt(plaintext,key):
    final=''
    for i in plaintext:
        one = i[0]
        two = i[1]
        index_one = index_finder(key,one)
        index_two = index_finder(key,two)        
        # print("BEFORE:",key[index_one[0]][index_one[1]]," ",key[index_two[0]][index_two[1]])
        # print("INDEX BEFORE:",index_one,index_two)
        if(index_one[0]==index_two[0]):
            index_one[1]=((index_one[1]-1)%5)
            index_two[1]=((index_two[1]-1)%5)
        elif(index_one[1]==index_two[1]):
            index_one[0]=((index_one[0]-1)%5)
            index_two[0]=((index_two[0]-1)%5)
        else:
            inter = index_two[0]
            index_two[0]=index_one[0]
            index_one[0]=inter 
            index_one,index_two=index_two,index_one
        one = key[index_one[0]][index_one[1]]
        two = key[index_two[0]][index_two[1]]
        final+=one+two
        # print("AFTER :",one," ",two)
        # print("INDEX AFTER:",index_one,index_two) 
    return final 

choice = int(input("1 for ENCRYPTION\n2 for DECRYPTION\n3 for BOTH\nENTER YOUR CHOICE:"))

if(choice == 1):
        key = key_arr(input("Enter a Key : "))
        plaintext=plaintext_arr(input("Enter a PlainText to ENCRYPT: "))
        encrypted_text=encrypt(plaintext,key)
        print("Encrypted:",encrypted_text)   
elif(choice==2):
        key = key_arr(input("Enter a Key : "))
        plaintext=plaintext_arr(input("Enter a PlainText to DECRYPT : "))  
        decrypted_text=decrypt(plaintext,key)
        print("Decrypted:",decrypted_text)
elif(choice==3):
        key = key_arr(input("Enter a Key : "))
        plaintext=plaintext_arr(input("Enter a PlainText : "))
        encrypted_text=encrypt(plaintext,key)
        decrypted_text=decrypt(plaintext_arr(encrypted_text),key)
        print("Encrypted:",encrypted_text)    
        print("Decrypted:",decrypted_text)        
else:
    print("INVALID INPUT")