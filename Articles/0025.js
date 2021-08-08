var data = {'title': 'Doodles', 'desc': 'Doodling Competition, Torque 3.0', 'img': '', 'imgCredit': '', 'time': '1 min', 'authorName': '', 'authorDesc': '', 'authorImg': '', 'articleContent': '<div class="row"><div class="col-md-6"> <img class="para-img" src="../Assets/doodles/1.jpg"> Samiksha Kamble (First Position)</div> <div class="col-md-6"> <img class="para-img" src="../Assets/doodles/2.jpg">Asma Vindhani (Second Position)</div></div><br><br><img class="para-img" src="../Assets/doodles/3.jpg">Shreya Shukla<br><br><img class="para-img" src="../Assets/doodles/4.jpg">Shweta Chitkara<br><br><div class="row"><div class="col-md-6"> <img class="para-img" src="../Assets/doodles/5.jpg"> Rituparna Jana</div> <div class="col-md-6"> <img class="para-img" src="../Assets/doodles/6.jpg">Omlar Singh</div></div><br><br><div class="row"><div class="col-md-6"> <img class="para-img" src="../Assets/doodles/7.jpg"> Krishna</div> <div class="col-md-6"> <img class="para-img" src="../Assets/doodles/9.jpg">Hiren Solanki</div></div><br><br><div class="row"><div class="col-md-6"> <img class="para-img" src="../Assets/doodles/10.jpg"> Ekta Jaiswal</div> <div class="col-md-6"> <img class="para-img" src="../Assets/doodles/11.jpg">Bukunmi</div></div><br><br><img class="para-img" src="../Assets/doodles/8.jpg">Jayesthi Mali', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0024.html', 'articleNo': '0025', 'nextArticle': '0026.html'};

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