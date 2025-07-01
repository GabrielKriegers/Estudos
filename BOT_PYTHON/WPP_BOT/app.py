from flask import Flask, request, jsonify 

from bot.ai_bot import AIBot
from services.waha import Waha

app = Flask(__name__)

@app.route('/chatbot/webhook/', methods=['POST'])
def webhook():
    data = request.json
    
    
    waha = Waha()
    ai_bot = AIBot()
    
    chat_id = data['payload']['from']
    received_menssage = data['payload']['body']
    
    print(f'EVENTO RECEBIDO: {data}')
    
    response = (ai_bot.invoke(question=received_menssage) + ' 🫦')
    print(received_menssage[-1])
    # if(chat_id == '554891012409@c.us' or chat_id == '554899047092@c.us'):  
        
    #     if (received_menssage[-1] != '🫦'):
            
    #         waha.start_typing(chat_id=chat_id)
            
    #         waha.send_message(
    #             chat_id='554891012409@c.us',
    #             message=response,
    #         )
            
    #         waha.stop_typing(chat_id=chat_id)
    #     else:
    #         print("NÃO TRATO MENSAGENS JÁ TRADUZIDAS!")
        
    
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
        