var data = {'title': 'Letters from the TORQUE Team', 'desc': 'Torque 3.0', 'img': '../Assets/letter.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Jayesh Khanna', 'authorDesc': 'Chief Editor, Design and Illustration Team, Torque', 'authorImg': '../Assets/jayesh.jpg', 'articleContent': 'I&rsquo;m glad to be part of the Design and Illustration Team for the third volume of TORQUE magazine which includes commendable graphic designers. The coronavirus-led pandemic has changed our lives from offline to online mode, which is why TORQUE is also appearing in its online version this year, with, of course, a physical version too. As it is a campus magazine now, it covers both sides of a coin. I hope we beat the pandemic blues at the earliest so that we can return to pre-pandemic life at the earliest with lots of improvements in our lives. You will surely feel the TORQUE&rsquo;s ambiance around you while reading the magazine.<br><br>Needless to mention, let us know your feedback about the magazine by mailing us at <a href="mailto:torque@iitgn.ac.in">torque@iitgn.ac.in</a>.<br><br>Cheers, <br>Jayesh Khanna<br>Chief Editor, Design and Illustration Team', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0010.html', 'articleNo': '0011', 'nextArticle': '0012.html'};

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