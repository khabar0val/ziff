from mysql.connector import connect, Error

try:
    with connect(
        host = "localhost",
        user = "root",
        password = "NfnmzyfKhabarova1979@!",
        database = "ziff"
    ) as connection:
        print(connection)
except Error as e:
    print(e)