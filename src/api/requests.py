from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Methods(Resource):
    def get(self, data):
        return data

    def post(self, data):


api.add_resource(Methods, '/')

if __name__ == '__main__':
    app.run(debug=True)