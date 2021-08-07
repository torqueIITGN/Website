from math import floor
import os

def convertToName(i):
    nDigits = len(str(i))

    if nDigits < 4:
        return ((4-nDigits)*'0' + str(i))
    else:
        return str(i)

def readingTime(content:str):
    nWords = len(content.replace('<br>', ' ').split())

    periods = int(nWords/100)

    if periods <= 1:
        return ('1 min')
    if periods%2:
        mins = floor(periods/2)
        return (str(mins) + ' min 30 s')
    else:
        mins = int(periods/2)
        return (str(mins) + ' min')

class Article():
    def __init__(self):
        self.data = dict()
        self.data['title'] = ''
        self.data['desc'] = ''
        self.data['img'] = ''
        self.data['imgCredit'] = ''
        self.data['time'] = ''
        self.data['authorName'] = ''
        self.data['authorDesc'] = ''
        self.data['authorImg'] = ''
        self.data['articleContent'] = ''
        self.data['twitterShare'] = 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:'
        self.data['fbShare'] = 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE'
        self.data['prevArticle'] = sorted(os.listdir('.'))[-3].split('.')[0] + '.html'
        self.data['articleNo'] = convertToName(int(self.data['prevArticle'][:-5]) + 1)
        self.data['nextArticle'] = convertToName(int(self.data['articleNo']) + 1) + '.html'

    def createHTML(self):
        HTMLFile = open("0000.html", "r")
        HTMLCode = HTMLFile.read()
        HTMLFile.close()

        newHTMLFile = open(self.data['articleNo'] + ".html", "w")
        newHTMLFile.write(HTMLCode.replace('0001', self.data['articleNo']))
        newHTMLFile.close()
        print(self.data['articleNo'] + ".html created.")

    def collectData(self):
        self.data['title'] = input('title:')
        self.data['desc'] = input('desc:')
        self.data['img'] = input('img:')
        self.data['imgCredit'] = input('imgCredit:')
        self.data['authorName'] = input('authorName:')
        self.data['authorDesc'] = input('authorDesc:')
        self.data['authorImg'] = input('authorImg:')
        
        articleFile = open('content.txt', 'r')
        self.data['articleContent'] = articleFile.read()
        articleFile.close()
        self.data['time'] = readingTime(self.data['articleContent'])

    def createJS(self):
        JSFile = open("0000.js", "r")
        JSCode = JSFile.read()
        JSFile.close()

        newJSFile = open(self.data['articleNo'] + ".js", "w")
        newJSFile.write("var data = " + str(self.data) + ";")
        newJSFile.write("\n" + JSCode)
        print(self.data['articleNo'] + ".js created.")


if __name__ == "__main__":
    articleObj = Article()
    articleObj.collectData()
    articleObj.createJS()
    articleObj.createHTML()
