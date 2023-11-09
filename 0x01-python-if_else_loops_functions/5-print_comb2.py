#!/usr/bin/python3

send = ""

for num in range(0, 100):
    if num in range(0, 10):
        send += f"0{num}, "
    elif num == 99:
        send += "99"
    else:
        send += f"{num}, "
print(send, end='')
