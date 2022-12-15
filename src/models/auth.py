from connector import connection
from methods.add_user import add_user_query

def sign_up(username, password):
    with connection.cursor() as cursor:
        cursor.execute(add_user_query, username, password)