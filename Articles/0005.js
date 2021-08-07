var data = {'title': 'From the FA’s Desk', 'desc': 'Torque 3.0', 'img': 'https://iitgn.ac.in/media/pages/faculty/cse/anirban/729890348-1612245003/anirban.jpg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Prof. Anirban Dasgupta', 'authorDesc': 'Faculty Advisor, Technical Council', 'authorImg': '', 'articleContent': "On behalf of the faculty, staff, and the campus community, I would like to sincerely thank the Torque organizers and the contributors for taking time out of their schedules to help us celebrate creativity. I am really looking forward to enjoying the contributions. I am sure that going forward, Torque will become a unique facet of the IITGN campus life and its culture.", 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0004.html', 'articleNo': '0005', 'nextArticle': '0006.html'};

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