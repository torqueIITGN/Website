var data = {'title': 'Featuring Winners of Torque Competitions', 'desc': 'Congratulations to all the winners!', 'img': '../Assets/32A.jpg', 'imgCredit': 'Photo by Nataliya Vaitkevich from Pexels', 'time': '1 min', 'authorName': 'Team Torque', 'authorDesc': 'IIT Gandhinagar', 'authorImg': '../Assets/avatar2.svg', 'articleContent': '<strong>Winners</strong><br>\n<br>\nDoodling Competition: I- Samiksha Kamble, II- Vindhani Asma, III- Shreya Shukla<br>\n<br>\nPhoto Story Competition: I-Tanvi Chaudhari , II- Anutosh Jaishwal, III- Jayanti Hansdah<br>\n<br>\nScript Writing Competition : I- Krish Gupta , II- Yash Aditya<br>\n<br>\nEssay Writing competition: Parichay Thakore, Yash Kamble, Aman Raj<br>\n<br>\n<strong>Prizes</strong><br>\n<br>\nRs 1000 in each of Doodling, Photo Story, Script Writing (I-500, II- 300, III- 200)<br>\n<br>\nRs 1000 for first two winners of Essay Writing, Total = 4800<br>\n<br>\n<strong>Participation</strong><br>\n<br>\n11 participants in Doodling<br>\n<br>\n6 participants in Photo Story<br>\n<br>\n2 participants in Script Writing<br>\n<br>\n5 participants in Essay Writing<br>\n<br>\n<strong>Event Dates</strong><br>\n<br>\n10 January 2021-Doodling<br>\n<br>\n25 January 2021- Photo Story<br>\n<br>\n17 March 2021- Script Writing<br>\n<br>\n11 January 2021- Essay Writing<br>\n<br>\n<strong>Congratulations to all the winners!</strong>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0031.html', 'articleNo': '0032', 'nextArticle': '0033.html'};

window.onload = function(){
    document.getElementById('article-title').innerHTML = data.title;
    document.getElementById('article-desc').innerHTML = data.desc;
    document.getElementById('article-img').src = data.img;
    document.getElementById('img-src').innerHTML = data.imgCredit;
    document.getElementById('article-time').innerHTML = '<i class="far fa-clock"></i> ' + data.time;
    document.getElementById('author-name').innerHTML = data.authorName;
    document.getElementById('author-desc').innerHTML = data.authorDesc;
    document.getElementById('author-img').src = data.authorImg;
    document.getElementById('article-text').innerHTML = data.articleContent;
    document.getElementById('share-twitter').href = data.twitterShare.replace("URL_HERE", document.URL);
    document.getElementById('share-fb').href = data.fbShare.replace("URL_HERE", document.URL);
};

function prev(){
    window.location.href = data.prevArticle;
}

function next(){
    window.location.href = data.nextArticle;
}