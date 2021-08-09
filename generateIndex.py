import re
import os
import json
import pandas as pd

def getData(file_path):
    with open(file_path, 'r') as f:
        data = f.read()

    data_list = data.split('\n')[0].split('{')[-1].split('}')[0].split(', ')[:8]

    data_dict = {x.split(': ')[0][1:-1]:x.split(': ')[1][1:-1] for x in data_list if ': ' in x}

    
    title = data_dict['title']
    authorName = data_dict['authorName']
    time = data_dict['time']
    desc = data_dict['desc']
    img = data_dict['img'].replace('../', '')
    href = file_path.replace('.js', '.html')

    return title, authorName, time, desc, img, href

def generateIndex():
    file_paths = [ 'Articles/'+x for x in os.listdir('Articles') if x.endswith('.js')]

    file_paths.remove('Articles/0000.js')

    file_paths.sort()

    titles = []
    authorNames = []
    times = []
    descs = []
    imgs = []
    hrefs = []

    for path in file_paths:
        title, authorName, time, desc, img, href = getData(path)

        titles.append(title)
        authorNames.append(authorName)
        times.append(time)
        descs.append(desc)
        imgs.append(img)
        hrefs.append(href)

    idx = pd.DataFrame()

    idx['titles'] = titles
    idx['authorNames'] = authorNames
    idx['times'] = times
    idx['descs'] = descs
    idx['imgs'] = imgs
    idx['hrefs'] = hrefs

    idx.to_csv('idx.csv', index=False)

if __name__ == '__main__':
    generateIndex()
