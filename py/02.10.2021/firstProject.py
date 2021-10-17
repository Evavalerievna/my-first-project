# name = "Tatiana"
# print("hello, ", name)
# a = d = c = 1
# print(a, d, c)

# a = 1
# b = 2
#
# print('a:', a)
# print('b:', b)
# c = b
# b = a
# a = c
# print(a, b)

# s1 = "Выполнил задание"
# s2 = "Багинская Т. В. "
# s3 = "слушатель группы python 111"
# print("\"Выполнил задание\n\t\t Багинская Т. В.\n\t\t\t\t слушатель группы python 111\" ")

# a = 5
# b = 7
# c = 3
# print(a + b + c)
# print(a * b * c)
# print((a + b + c)/3)

# a = "9"
# b = "7"
# c = "5"
# d = "3"
# print("Исходное число:", a + b + c + d)
# print("Обратное число:", d + c + b + a)

# num = 9876
# res = (num % 10) * 1000
# # print(res)
# num = num // 10
# # print(num)
# res += (num % 10) * 100
# # print(res)
# num = num // 10
# # print(num)
# res += (num % 10) * 10
# # print(res)
# num = num // 10
# # print(num)
# res += num % 10
# print(res)

# num1 = "2"
# num2 = 3
# res = int(num1) + num2
# print(res)

# print(int(3.8))  # 3
# print(round(3.8))  # 4
# print(round(3.891, 2))  # 3.89

# Домашнее задание. Поменять местами переменные
# Вариант 1
# a = 1
# b = 2
# a, b = b, a
# print(a)
# print(b)

# Вариант 2
# a = 1
# b = 2
# a = a + b   # 3
# b = a - b   # 1
# a = a - b
#
# print(a)
# print(b)

# Задача. Число 5 в степени 2 равно: 25
# number = int(input("Введите число: "))
# degree = int(input("Укажите степень; "))
#
# res = number ** degree
# print("Число", number, "в степени ", degree, "равно:", res)

# Задача.
# num1 = int(input("Введите первое число: "))
# num2 = int(input("Введите второе число: "))
# num3 = int(input("Введите третье число: "))
# num4 = int(input("Введите четвертое число: "))
# res1 = num1 + num2
# res2 = num3 + num4
# res3 = res1 / res2
# print("Результат:", res3)
# print("Результат: %.4f" % res3)

# a = 10
# b = 5
# c = a ==b
# print(a, b, c)

# print(5 - 3 == 2 or 3 + 3 == 4)
# print(not 9 - 9)

# cnt = 15
# if cnt < 10:
#     cnt +=1
#     print(cnt)


# age = int(input("Введите свой возраст: "))
# if age >= 18:
#     print("Доступ нас сайт разрешен")
# else:
#     print("Доступ запрещен")

# a = 15
# b = 5
# if a > b:
#     print("a > b")
# elif a < b:
#     print("b > a")
# else:
#     print("a == b")

# a = int(input("Введите первую сторону: "))
# b = int(input("Введите вторую сторону: "))
# c = int(input("Введите третью сторону: "))
# if a == b == c:
#     print("треугольник равносторонний")
# elif a == b != c:
#     print("треугольник равнобедренный")
# elif a == c != b:
#     print("треугольник равнобедренный")
# elif b == c != a:
#     print("треугольник равнобедренный")
# else:
#     print("треугольник разносторонний")

# day = int(input("Введите день недели (цифрой): "))
# if (day >= 1) and day <= 5:
#     print("Рабочий день - ", end="")
#     if day == 1:
#         print("понедельник")
#     if day == 2:
#         print("вторник")
#     if day == 3:
#         print("среда")
#     if day == 4:
#         print("четверг")
#     if day == 5:
#         print("пятница")
# elif day == 6 or day == 7:
#     print("Выходной день - ", end="")
#     if day == 6:
#         print("суббота")
#     if day == 7:
#         print("воскресенье")
# else:
#     print("Такого дня недели не существует!")

# m = int(input("Введите номер месяца (цифрой): "))
# if 1 <= m <= 12:
#     print("Название времени года - ", end="")
#     if m == 12 or 1 <= m <= 2:
#         print("зима")
#     if 3 <= m <= 5:
#         print("весна")
#     if 6 <= m <= 8:
#         print("лето")
#     if 9 <= m <= 11:
#         print("осень")
# else:
#     print("Ошибка ввода данных")


# quantity = int(input("Введите количество ворон: "))
# if 0 <= quantity <= 9:
#     if quantity == 1:
#         print("На ветке", quantity, "ворона")
#     if 2 <= quantity <= 4:
#         print("На ветке", quantity, "вороны")
#     if 5 <= quantity <= 9 or quantity == 0:
#         print("На ветке", quantity, "ворон")
#
# else:
#     print("Ошибка ввода данных")
#
#
# a, b = 10, 5
# print(a / b if b != 0 else " ошибка ввода")

# i = 20
# while i > 0:
#     print("i = ", i)
#     i -=2


# a = int(input("укажите количество символов: "))
# i = 0
# while i < a:
#     print("*", end='')
#     i +=1


# Задача. Написать программу, проверяющую введенное пользователем целое число на четность
# number = int(input("Введите целое число: "))
# if number % 2 == 0:
#     print("Число", number, "четное")
# else:
#     print("Число", number, "нечетное")


# Задача. Написать слово копеек в правильном формате (диапазон  от 1 до 99)
# quantity = int(input("Введите число от 1 до 99: "))
# res = quantity % 10
# if res == 0 or 5 <= res <= 10:
#     print(quantity, "копеек")
# if res == 1:
#     print(quantity, "копейка")
# if 2 <= res <= 4:
#     print(quantity, "копейки")


# Задача. Написать программу калькулятор
# a = int(input("Введите цифру: "))
# b = int(input("Введите первое число: "))
# c = int(input("Введите второе число: "))
# if c == 0:
#     print("На 0 делить нельзя")
# elif 1 <= a <= 8:
#     if a == 1:
#         print(b + (-c))
#     if a == 2:
#         print(b + c)
#     if a == 3:
#         print(b - c)
#     if a == 4:
#         print(b / c)
#     if a == 5:
#         print(b * c)
#     if a == 6:
#         print(b % c)
#     if a == 7:
#         if b < c:
#             print(b)
#         else:
#             print(c)
#     if a == 8:
#         if b > c:
#             print(b)
#         else:
#             print(c)

# Задача. Написать программу нахождения максимального значения из трех чисел введенных пользователем
# (с использованием тернарного оператора).
# a = int(input("Введите первое число: "))
# b = int(input("Введите второе число: "))
# c = int(input("Введите третье число: "))
# abc_num = a if b < a > c else b if a < b > c else c if a < c > b else 0
# print(abc_num)

# 1) Конкатенация try - except
# try:
#     n = int(input("Введите целое число: "))
#     print(n * 2)
# except ValueError:
#     print("Что-то пошло не так")

# try:
#     n = int(input("Введите делимое: "))
#     m = int(input("Введите делитель: "))
#     print(n / m)
# except ValueError:
#     print("Нельзя вводить строки")
# except ZeroDivisionError:
#     print("Делить на 0 нельзя")
# else:
#     print("Все нормально. Вы ввели числа", n, "и", m)
# finally:
#     print("Конец программы")


# n = input("Введите первое число: ")
# m = input("Введите второе число: ")
# try:
#     n = int(n)
#     m = int(m)
# except ValueError:
#     n = str(n)
#     m = str(m)
# finally:
#     print(n + m)

# i = 0
# while i < 5:
#     print("i = ", i)
#     i = i + 1

# i = 10
# while i > 0:
#     print("i = ", i)
#     i -= 1

# i = 1
# while i <= 20:
#     if i % 2 == 0:
#         print("i = ", i)
#     i += 1

# a = int(input("Укажите количество символов "))
# i = 1
# while i <= a:
#     print("*", end="")
#     i += 1

# n = input("Введите целое число: ")
# while type(n) != int:
#     try:
#         n = int(n)
#     except ValueError:
#         print("Число не целое!")
#         n = input("Введите целое число: ")
# if n % 2 == 0:
#     print("Четное")
# else:
#     print("Нечетное")

# i = 0
# while i < 10:
#     print(i, end="")
#     i += 1
# print("\nЦикл завершен")


# i = 1
# while True:
#     n = int(input())
#     if n ==0:
#         print(i)
#         break
#     i *= n

# i = 0
# while i < 10:
#     print(i)
#     i += 1
# else:
#     print("Цикл окончен, i = ", i)

# i = 1
# while i < 5:
#     print("Внешний цикл: i= ", i)
#     j = 1
#     while j < 4:
#         print("\tВнутренний цикл: j=", j)
#         j +=1
#     i += 1

# i = 1
# while i <= 9:
#     j = 1
#     while j <= 9:
#         print(i, "*", j, "=", i * j, "\t\t", end="")
#         j += 1
#     print()
#     i += 1

# i = 0
# while i < 3:
#     j = 0
#     while j < 6:
#         print("^", end="")
#         j += 1
#     print()
#     i += 1

# i = 0
# while i < 5:
#     j = 0
#     while j < 16:
#         if i % 2 == 0:
#             print("+", end="")
#         else:
#             print("-", end="")
#         j += 1
#     print()
#     i += 1

# i = 1
# while i <= 5:
#     j = 0
#     while j <= 5:
#         if i == j:
#             print("*", end="")
#         else:
#             print(" ", end="")
#         j += 1
#     print()
#     i += 1

# a = 1
# while a <= 5:
#     print(" " * a, "+")
#     a += 1

# for i in collection:
# print(i)

# for i in "Hello":
#     print(i)

# i = 1
# for color in "red", "orange", "yellow", "green", "blue", 1, 20, 0.3:
#     print(i, "color: ", color)
#     i += 1

# range(start, stop, step)

# for i in range(9):
#     print(i, end="  ")

# for i in range(2, 9, 3):
#     print(i, end="  ")

# for i in range(9, 2, -1):
#      print(i, end="  ")

# a = int(input("Введите целое число: "))
# for i in range(1, a):
#     if a % i == 0:
#         print(i, end=" ")

# for i in range(11, 100, 11):
#     print(i, end=" ")

# for i in range(10, 100):
#     if i % 11 == 0:
#         print(i, end=" ")

# for i in range(3):
#     print("+++")
#     for j in range(2):
#         print("-------")


# Задача. Разработать программу, которая выводит на экран линию из символов. Пользователь указывает: число символов,
# тип символов, и ориентацию линии - веритикальную или горизонтальную.

# n = int(input("Введите количество символов: "))
# m = input("Введите тип символов: ")
# print("Ориентация линии: \n0 - горизонтальная", "\n1 - вертикальная")
# p = int(input("Введите ориентацию линии: "))
# i = 1
# while i <= n:
#     if p == 0:
#         print(m, end="")
#     else:
#         print(m)
#     i += 1

# Решила добавить возможность писать число строкой. Почему выдает ошибку?

# n = input("Введите количество символов: ")
# m = input("Введите тип символов: ")
# print("Ориентация линии: \n0 - горизонтальная", "\n1 - вертикальная")
# p = input("Введите ориентацию линии: ")
# i = 1
# while i <= n:
#     if p == 0:
#         print(m, end="")
#     else:
#         print(m)
# i += 1
# try:
#     n = int(n)
# except (ValueError, TypeError):
#     n = str(n)

# Задача. Написать программу, которая вычисляет среднее арифметическое последовательности дробных чисел,
# вводимых с клавиатуры. После ввода последнего числа программа должна вывести минимальное и максимальное
# число последовательности. Количество чисел последовательности должно задаваться во время работы программы.

# n = int(input("Введите количество чисел последовательности: "))
# i = 1
# res = 0
# while True:
#     m = float(input("Введите число: "))
#     if i != n:
#         res += m
#     elif i == n:
#         res += m
#         break
#     i += 1
# print("Количество чисел", n)
# print("Среднее арифметическое: ", res / n)
# print("Максимальное число: ", m)


# Задача. Напищите программу, которая определяет являются ли они палиндромами и выводит их на экран.
# Палиндром это число или текст, который одинаково читается с лева на право и обратно.

# n = int(input("Введите число: "))
# num = n
# rev = 0
# while n > 0:
#     remainder = n % 10    # остаток от целочисленного деления дает последнюю цифру нашего числа
#     n = n // 10  # последняя цифра числа убирается путем операции целочисленного деления на 10
#     rev = rev * 10 + remainder  # число записывается в новую переменную.
# if num == rev:
#     print("Число", num, "- полиндром")
# else:
#     print("Число", num, "- не является полиндромом")

# w = int(input("Ширина прямоугольника: "))
# h = int(input("Длина прямоугольника: "))
# for i in range(h):
#     for j in range(w):
#         print("*", end="")
#     print()

# w = int(input("Введите ширину прямоугольника: "))
# h = int(input("Введите длину прямоугольника: "))
# for i in range(h):
#     if i == 0 or i == h - 1:
#         for j in range(w):
#             print("*", end=" ")
#     else:
#         print("*", end=" ")
#         for j in range(1, w - 1):
#             print(" ", end=" ")
#         print("*", end=" ")
#     print()


# w = int(input("Введите ширину прямоугольника: "))
# h = int(input("Введите длину прямоугольника: "))
# for i in range(h):
#     for j in range(w):
#         if (i == 0 or i == h - 1) or (j == 0 or j == w - 1):
#             print("*", end="")
#         else:
#             print(" ", end="")
#     print()

# print([i*2 for i in "Hello"])
# print([i for i in range(30) if i % 2 == 0])

num = [8, 3, 9, 4, 1]
print(num)
print(type(num))
print(type(["one", "two", 2, 3.5, [1, 2, 3]]))
print(num[0])
