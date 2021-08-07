var data = {'title': 'Letters from the TORQUE Team', 'desc': 'Torque 3.0', 'img': '../Assets/letter.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Shashi Sarraf', 'authorDesc': 'Head for Online Presence, Torque', 'authorImg': '../Assets/shashi.jpg', 'articleContent': 'So, why should you read this magazine? I have three reasons for that. The first is, each article is written by your college mates who are more or less of equal age or experience as you in the college, so no one is expert in it. Hence while reading, you can feel a sense of attachment which may not be while reading articles from an expert or outsider. Second, the graphics used in it are fabulous, which gives you a desire to learn them for your purpose as they are created by your peers; hence you may also do it. And third is, throughout the year, we have organized many competitive activities where you may or may not have participated. But looking at their works may encourage you to expand yourself in arts, culture, and writing skills rather than only looking to get the degree from our college.<br><br>Hope you love reading the magazine!<br><br>SHASHI SARRAF<br>Head for Online Presence', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0011.html', 'articleNo': '0012', 'nextArticle': '0013.html'};

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