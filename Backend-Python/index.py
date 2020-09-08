from flask import Flask, jsonify, request
import pymysql
import os
from datetime import datetime


################## Importando Funcoes

# 1- Conexao com BD
from functions.mysql_connector import *



app = Flask(__name__)

# Validação de login de usuário
@app.route('/employees/login', methods=['POST'])
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


# Lista todos os empregados
@app.route('/employees', methods=['GET'])
def listarEmpregados_Employees():
    # Listando usuários por ordem de adição
    comando = cmdmysql(str('select id,nome,DATE_FORMAT(bornDate, "%d/%m/%Y"),salary,position from empregados ORDER BY id desc'))
    payload = []
    content = {}
    for result in comando:
       content = {'id':result[0],'nome': result[1], 'bornDate': result[2],'salary':result[3] , 'position':result[4]}
       payload.append(content)
       content = {}
    return jsonify(payload), 201






if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5004)
