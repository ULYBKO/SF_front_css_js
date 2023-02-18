import requests
import json
from config import currency


class ConvertorExcep(Exception):
    pass

class CryptoConverter:
    @staticmethod
    def convert(quote:str, base:str, amount:str):
        if quote == base:
            raise ConvertorExcep(f'Не возможно перевести одинаковые валюты {base}')

        quote_ticker, base_ticker = currency[quote], currency[base]

        try:
            quote_ticker = currency[quote]
        except KeyError:
            raise ConvertorExcep(f'Не удалось обработать валюту {quote}')

        try:
            base_ticker = currency[base]
        except KeyError:
            raise ConvertorExcep(f'Не удалось обработать валюту {base}')

        try:
            amount = float(amount)
        except ValueError:
            raise ConvertorExcep(f'Введите цифрЫ, а не вот это все => {amount}')
        
        r = requests.get(f'https://min-api.cryptocompare.com/data/price?tsyms={base_ticker}&fsym={quote_ticker}')
        total_base= json.loads(r.content)[currency[base]]
        total = total_base * amount                                      
        return total
            

