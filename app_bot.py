import telebot
from config import currency,TOKEN
from extension import ConvertorExcep, CryptoConverter

 


bot = telebot.TeleBot(TOKEN)



#Обрабатываются все сообщения, содержащие команды '/start'
@bot.message_handler(commands=['start'])
def repeat(message: telebot.types.Message):
    name = message.from_user.username
    #bot.reply_to(message, f'Шалом, {name}')pipin
    bot.send_message(message.chat.id, f"Добро пожаловать, {name}, \n Для того что бы узнать как работать с ботом необходимо ввести команду /help")


@bot.message_handler(commands=['help'])
def help(message):
    bot.send_message(message.chat.id, "Для того что бы узнать курс валют необходимо ввести сообщение в формате: ИСХОДНАЯ ВАЛЮТА ИСКОМАЯ ВАЛЮТА КОЛИЧЕСТВО")
    bot.reply_to(message, text)

 
@bot.message_handler(commands=['values'])
def values(message: telebot.types.Message):
    text = 'Доступные валюты:'
    for key in currency.keys():
        text ='\n'.join((text, key, ))
    bot.reply_to(message, text)

@bot.message_handler(content_types=['text', ])
def convert (message: telebot.types.Message):
    try:
        values = message.text.split(' ')
        
        if len(values) !=3:
            raise  ConvertorExcep('Too much parametrs')
        quote, base, amount = values
        total_base= CryptoConverter.convert(quote,base,amount)
    except ConvertorExcep as e:
        bot.reply_to(message, f'Ошибка пользователя.\n{e}')
    except Exception as e:
        bot.reply_to(message, f'Не удалось обработать команду\n{e}')
    else:
        text = f'Цена {amount} {quote}  в {base} - {total_base}'
        bot.send_message(message.chat.id, text)



bot.polling(none_stop=True)
    


# @bot.message_handler(commands=["start"])
# def start(m, res=False):
#     bot.send_message(m.chat.id, 'Я на связи. Напиши мне что-нибудь )')