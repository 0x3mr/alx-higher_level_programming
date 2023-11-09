#!/usr/bin/python3

for num in range(0, 100):
    if num in range(0, 10):
        print(f"0{num}, ", end='')
    elif num == 99:
        print("99")
    else:
        print(f"{num}, ", end='')
