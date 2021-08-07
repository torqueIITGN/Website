var data = {'title': 'From the Dean’s Desk', 'desc': 'Torque 3.0', 'img': 'https://iitgn.ac.in/media/pages/faculty/chemistry/fac-sivapriya/1919414313-1600344524/sivapriya.JPG', 'imgCredit': '', 'time': '30 s', 'authorName': 'Prof. Sivapriya Kirubakaran', 'authorDesc': 'Dean, Student Affairs, IIT Gandhinagar', 'authorImg': '', 'articleContent': "Many congrats &quot;IITGN's own campus magazine&quot; for successfully running for three consecutive years. I appreciate your team efforts to bring a smile on our face while we were battling through a pandemic crisis with 7 day long lil' breaks of life. Your student owned feature made the students who are running their businesses feel like a star. I personally enjoy your creative posters for announcements. I am looking forward to a fantastic 3rd edition now!", 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0003.html', 'articleNo': '0004', 'nextArticle': '0005.html'};

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