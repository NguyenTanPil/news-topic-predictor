import re
from pyvi import ViTokenizer

class Preprocess:
    def __init__(self):
        self.uniChars = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ"
        self.unsignChars = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU"
        self.char1252 = 'à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ'.split(
            '|')
        self.charutf8 = "à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ".split(
            '|')
        self.vowel_table = [['a', 'à', 'á', 'ả', 'ã', 'ạ', 'a'],
                    ['ă', 'ằ', 'ắ', 'ẳ', 'ẵ', 'ặ', 'aw'],
                    ['â', 'ầ', 'ấ', 'ẩ', 'ẫ', 'ậ', 'aa'],
                    ['e', 'è', 'é', 'ẻ', 'ẽ', 'ẹ', 'e'],
                    ['ê', 'ề', 'ế', 'ể', 'ễ', 'ệ', 'ee'],
                    ['i', 'ì', 'í', 'ỉ', 'ĩ', 'ị', 'i'],
                    ['o', 'ò', 'ó', 'ỏ', 'õ', 'ọ', 'o'],
                    ['ô', 'ồ', 'ố', 'ổ', 'ỗ', 'ộ', 'oo'],
                    ['ơ', 'ờ', 'ớ', 'ở', 'ỡ', 'ợ', 'ow'],
                    ['u', 'ù', 'ú', 'ủ', 'ũ', 'ụ', 'u'],
                    ['ư', 'ừ', 'ứ', 'ử', 'ữ', 'ự', 'uw'],
                    ['y', 'ỳ', 'ý', 'ỷ', 'ỹ', 'ỵ', 'y']]
        self.start_word_table = ['', 'f', 's', 'r', 'x', 'j']

    def get_stopwords_to_list(self, path):
        stopwords = []
        f =  open(path, 'r', encoding="utf-8")
        stopwords_list = list(f)
        stopwords = [re.sub('\n', '', word) for word in stopwords_list]
        return stopwords

    def loaddicchar(self):
        dic = {}
        
        for i in range(len(self.char1252)):
            dic[self.char1252[i]] = self.charutf8[i]
        return dic

    def make_vowel_to_ids(self):
        vowel_to_ids = {}

        for i in range(len(self.vowel_table)):
            for j in range(len(self.vowel_table[i]) - 1):
                vowel_to_ids[self.vowel_table[i][j]] = (i, j)

        return vowel_to_ids

    def vn_word_to_telex_type(self, word):
        dau_cau = 0
        new_word = ''
        vowel_to_ids = self.vowel_to_ids()
        for char in word:
            x, y = vowel_to_ids.get(char, (-1, -1))
            if x == -1:
                new_word += char
                continue
            if y != 0:
                dau_cau = y
            new_word += self.vowel_table[x][-1]
        new_word += self.start_word_table[dau_cau]
        return new_word

    def vn_sentence_to_telex_type(self, sentence):
        """
        Chuyển câu tiếng việt có dấu về kiểu gõ telex.
        :param sentence:
        :return:
        """
        words = sentence.split()
        for index, word in enumerate(words):
            words[index] = self.vn_word_to_telex_type(word)
        return ' '.join(words)

    def standard_vietnam_word_marks(self, word):
        if not self.is_valid_vietnam_word(word):
            return word
    
        chars = list(word)
        dau_cau = 0
        vowel_index = []
        qu_or_gi = False
        vowel_to_ids = self.vowel_to_ids()
        for index, char in enumerate(chars):
            x, y = vowel_to_ids.get(char, (-1, -1))
            if x == -1:
                continue
            elif x == 9:  # check qu
                if index != 0 and chars[index - 1] == 'q':
                    chars[index] = 'u'
                    qu_or_gi = True
            elif x == 5:  # check gi
                if index != 0 and chars[index - 1] == 'g':
                    chars[index] = 'i'
                    qu_or_gi = True
            if y != 0:
                dau_cau = y
                chars[index] = self.vowel_table[x][0]
            if not qu_or_gi or index != 1:
                vowel_index.append(index)
        if len(vowel_index) < 2:
            if qu_or_gi:
                if len(chars) == 2:
                    x, y = vowel_to_ids.get(chars[1])
                    chars[1] = self.vowel_table[x][dau_cau]
                else:
                    x, y = vowel_to_ids.get(chars[2], (-1, -1))
                    if x != -1:
                        chars[2] = self.vowel_table[x][dau_cau]
                    else:
                        chars[1] = self.vowel_table[5][dau_cau] if chars[1] == 'i' else self.vowel_table[9][dau_cau]
                return ''.join(chars)
            return word
    
        for index in vowel_index:
            x, y = vowel_to_ids[chars[index]]
            if x == 4 or x == 8:  # ê, ơ
                chars[index] = self.vowel_table[x][dau_cau]
                return ''.join(chars)
    
        if len(vowel_index) == 2:
            if vowel_index[-1] == len(chars) - 1:
                x, y = vowel_to_ids[chars[vowel_index[0]]]
                chars[vowel_index[0]] = self.vowel_table[x][dau_cau]
            else:
                x, y = vowel_to_ids[chars[vowel_index[1]]]
                chars[vowel_index[1]] = self.vowel_table[x][dau_cau]
        else:
            x, y = vowel_to_ids[chars[vowel_index[1]]]
            chars[vowel_index[1]] = self.vowel_table[x][dau_cau]
        return ''.join(chars)

    def standard_vietnam_sentence_marks(self, sentence):
        sentence = sentence.lower()
        words = sentence.split()
        for index, word in enumerate(words):
            cw = re.sub(r'(^\\p{P}*)([p{L}.]*\\p{L}+)(\\p{P}*$)', r'\1/\2/\3', word).split('/')
            # print(cw)
            if len(cw) == 3:
                cw[1] = self.standard_vietnam_word_marks(cw[1])
            words[index] = ''.join(cw)
        return ' '.join(words)


    def is_valid_vietnam_word(self, word):
        chars = list(word)
        vowel_index = -1
        vowel_to_ids = self.vowel_to_ids()
        for index, char in enumerate(chars):
            x, y = vowel_to_ids.get(char, (-1, -1))
            if x != -1:
                if vowel_index == -1:
                    vowel_index = index
                else:
                    if index - vowel_index != 1:
                        return False
                    vowel_index = index
        return True

    def convert_unicode(self, txt):
        dicchar = self.loaddicchar()
        return re.sub(
            r'à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ',
            lambda x: dicchar[x.group()], txt)

    def remove_loop_char(self, txt):
        txt = re.sub(r'([A-Z])\1+', lambda m: m.group(1).upper(), str(txt), flags=re.IGNORECASE)
        txt = re.sub(r'[^\s\wáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịúùủũụưứừửữựýỳỷỹỵđ_]',' ',txt)
        return txt

    def remove_stopwords(self, txt):
        stopwords = self.get_stopwords_to_list('./train/stopwords-nlp-vi.txt')
        split_words = txt.split()
        words = []
        for char in split_words:
            if char not in stopwords:
                words.append(char)
                
        return " ".join(words)

    def tokenize(self, txt):
        return ViTokenizer.tokenize(txt)

    def remove_number(self, txt):
        txt= re.sub(r'\d+',"",txt)
        return txt

    def remove_single_char_and_space(self, txt):
        # remove all single characters
        txt = re.sub(r'\s+[a-zA-Z]\s+', ' ', txt)
        
        # Remove single characters from the start
        txt = re.sub(r'\^[a-zA-Z]\s+', ' ', txt) 
        
        # remove space
        txt = re.sub(r'\s+', ' ', txt)
        return txt

    def fit(self, input):
        txt = input.lower()
        txt = self.remove_number(txt)
        txt = self.remove_single_char_and_space(txt)
        txt = self.convert_unicode(txt)
        txt = self.standard_vietnam_sentence_marks(txt)
        txt = self.remove_loop_char(txt)
        txt = self.tokenize(txt)
        txt = self.remove_stopwords(txt)
        return txt
