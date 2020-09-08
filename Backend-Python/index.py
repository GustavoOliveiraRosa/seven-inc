from flask import Flask, jsonify, request
import pymysql
import os
from datetime import datetime


################## Importando Funcoes

# 1- Conexao com BD
from functions.mysql_connector import *



app = Flask(__name__)

# Validação de login de usuário
@app.route('/Employees/login', methods=['POST'])
def login_Employees():
    data = request.get_json()
    content = request.json
    print(content)
    comando = cmdmysql(str('SELECT * from usuarios where email="')+str(content['email'])+str('" and senha="')+str(content['senha'])+str('"'))
    if comando != ():
        for row in comando:
            return jsonify(Status='Success', id=row[0]), 200
    else:
        return jsonify(Status='Fail'), 200




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5004)
