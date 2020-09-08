import pymysql

def cmdmysql(cmd):
    # MINHAS PRE DEFINIÇÕES - MYSQL
    conexao = pymysql.connect(db='seveninc', user='root', passwd='admin',host='localhost')
    # Cria um cursor:
    cursor = conexao.cursor()
    # Executa o comando:
    cursor.execute(cmd)
    conexao.commit()
    # Recupera o resultado
    resultado = cursor.fetchall()
    # Finaliza a conexão
    conexao.close()
    successs = True
    return resultado
