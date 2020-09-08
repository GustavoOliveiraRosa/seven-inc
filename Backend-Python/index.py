from flask import Flask, jsonify, request
import pymysql
import os
from datetime import datetime

# Importando arquivo de conexão com o MYSQL


# Inicio API REST - Employees

app = Flask(__name__)

# Validação de login de usuário
@app.route('/Employees/login', methods=['POST'])
def login_curtocurso():
    return 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5004)
