# Calculator Simple project in Python with programiz.pro , ..
while True:

    print()
    print("Python Calculator")
    print("=" * 20)
    print()

    num1 = float(input("Enter the first number:"))
    num2 = float(input("Enter the second number:"))

    # print(f"you entered: {a} {b}")


    operator = input('Enter an operation (+, -, *, /, **):');
    print(f"you chose: {operator}")



    if operator == '+':
        result = num1 + num2
        print(f"{num1} + {num2} = {result}")
    elif operator == '-':
        result = num1 - num2
        print(f"{num1} - {num2} = {result}")
    elif operator == '*':
        result = num1 * num2
        print(f"{num1} * {num2} = {result}")
    elif operator == '**':
        result = num1 ** num2
        print(f"{num1} ** {num2} = {result}")
    elif operator == '/' and num2 != 0:
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")
    elif operator == '/' and num2 == 0:
        print("Cannot divide by Zero!")
    else:
        print("Invalid Operator!")

        print()
    reset = input(f'Press "C" to calculate again. Press any other key to exit!')
    if reset not in ("C", "c"):
        print("GOODBYE!")
        print()
        break


    # if reset.lower != "c":
    #     print('GOODBYE!')
    #     # break   












# # while True:
# print("Python Calculator")
# print("=" * 20)
# print()

# num1 = float(input("Enter the first number:"))
# num2 = float(input("Enter the second number:"))

# # print(f"you entered: {a} {b}")
# # print(f"you chose: {operator}")


# operator = input('Enter an operation (+, -, *, /, **):');
# print(f"You chose :", operator)

# if operator == '+' :
#     # print(f'You chose:{operator}')
#     result = num1 + num2;
#     print(result)
# elif operator == '-' :
#     # print(f'You chose:{operator}')
#     result = num1 - num2;
#     print(result)
# elif operator == '*' :
#     # print(f'You chose:{operator}')
#     result = num1 * num2;
#     print(result)
# elif operator == '**' :
#     # print(f'You chose:{operator}')
#     result = num1 ** num2;
#     print(result)


# elif operator == '/' and num2 != 0:
#     # print(f'You chose:{operator}')
#     result = num1 / num2;
#     print(result)
# elif operator == '/' and num2 == 0:
#     print("Cannot divide by Zero!")
#     # print(f'You chose:{operator}')
# else:
#     # print(f'You chose:{operator}')
#     print('Invalid Operator!')



# while True:
#     print("Python Calculator")
#     print("=" * 20)
#     print()

#     num1 = float(input("Enter the first number: "))
#     num2 = float(input("Enter the second number: "))

#     operator = input("Enter an operation (+, -, *, /, **): ")
#     print("You chose:", operator)

#     if operator == '+':
#         result = num1 + num2
#         print(f"{num1}+{num2}={result}")
#         # print(result)
#     elif operator == '-':
#         result = num1 - num2
#         print(f"{num1}-{num2}={result}")
#         # print(result)
#     elif operator == '*':
#         result = num1 * num2
#         print(f"{num1}*{num2}={result}")
#         # print(result)
#     elif operator == '**':
#         result = num1 ** num2
#         print(f"{num1}**{num2}={result}")
#         # print(result)
#     elif operator == '/' and num2 != 0:
#         result = num1 / num2
#         print(f"{num1}/{num2}={result}")
#         # print(result)
#     elif operator == '/' and num2 == 0:
#         print("Cannot divide by Zero!")
#     else:
#         print("Invalid Operator!")


    # reset = input(f'Press "C" to calculate again. Press any other key to exit!')
    # if reset.lower != "c":
    #     break








#     if operator == '+':
#     result = num1 + num2
#     print(f"{num1} + {num2} = {result}")
# elif operator == '-':
#     result = num1 - num2
#     print(f"{num1} - {num2} = {result}")
# elif operator == '*':
#     result = num1 * num2
#     print(f"{num1} * {num2} = {result}")
# elif operator == '**':
#     result = num1 ** num2
#     print(f"{num1} ** {num2} = {result}")
# elif operator == '/' and num2 != 0:
#     result = num1 / num2
#     print(f"{num1} / {num2} = {result}")
# elif operator == '/' and num2 == 0:
#     print("Cannot divide by Zero!")
# else:
#     print("Invalid Operator!")
