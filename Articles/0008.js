var data = {'title': 'Letter from General Secy', 'desc': 'Torque 3.0', 'img': '../Assets/letter2.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Rama Balhara', 'authorDesc': 'General Secretary, Student Council, IIT Gandhinagar', 'authorImg': '../Assets/rama.jpg', 'articleContent': 'This is a great honor and pleasure for me to address the crowd of TORQUE. In this latest edition, the content is not limited to only technical content; rather a marriage of technical and nontechnical subjects is executed. The new edition hopes to bring in more audiences and see the implicit aspects embedded in science and technology. However, Rome was not built in a day, therefore, the credit for this continuing feat of publishing the magazine goes out to the exceptional team, both the past and the present.<br>TORQUE 3.0 will once again bring the light in the midst of this pandemic before we reach the end of the tunnel. With this, I wish you all a happy life and enjoy reading with an open mind.<br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0007.html', 'articleNo': '0008', 'nextArticle': '0009.html'};

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