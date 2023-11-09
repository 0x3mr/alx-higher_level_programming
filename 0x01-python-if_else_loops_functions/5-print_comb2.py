#!/usr/bin/python3

printf = ""

for num in range(0, 100):
    if num in range(0, 10):
        printf += f"0{num}, "
    elif num == 99:
        printf += "99"
    else:
        printf += f"{num}, "
print(printf, end='')
