import time

from flask import Flask, request, jsonify 

from services.waha import Waha

# 3 - Pegar data e hora atual
hora_atual = time.localtime()

# Dias tm_wday = 5 or 6 não envia.

print('Executado.')
if (hora_atual.tm_wday == 5 or hora_atual.tm_wday == 6): exit()
        
waha = Waha()

response = 'Leva o capacete'

waha.send_message(
            chat_id='554891858203@c.us',
            message=response,
        )
    
print ('Mensagem enviada.')