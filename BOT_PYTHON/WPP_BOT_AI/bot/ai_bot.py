import os
 
from decouple import config

from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq

os.environ['GROQ_API_KEY'] = config('GROQ_API_KEY')



class AIBot:
    
    def __init__(self):
        self.__chat = ChatGroq(model='llama-3.3-70b-versatile')
        
    def invoke(self, question):
        prompt = PromptTemplate(
            input_variables=['pergunta'],
            template='''
            Você é um tradutor de textos que traduz o texto do usuário para o Inglês Americano, mas quero apenas uma tradução, sem notas ou explicações. Uma tradução simples e sem adornos. Levando em conta o contexto.
            <pergunta>
            {pergunta}
            </pergunta>
            '''
        )
        chain = prompt | self.__chat | StrOutputParser()
        response = chain.invoke({
            'texto': question, 
        })
        return response
    