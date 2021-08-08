var data = {'title': 'Opinion Pieces', 'desc': 'Essay Writing Competition', 'img': '../Assets/letter3.svg', 'imgCredit': '', 'time': '1 min', 'authorName': '', 'authorDesc': '', 'authorImg': '', 'articleContent': "An Essay Writing Competition was organized by the Technical Council on the occasion of Republic Day. The following topics were given:<br><br>1. AI and Biotechnology: Ethical, Economic, and Political considerations for the future <br>2. Climate Change: Policy and Practice<br>3. Should there be limits to freedom of speech?<br>4. Is HealthCare a right or a commodity? <br><br>Winning essays were to receive amazon gift vouchers worth Rs.1000 each and we're also featuring them as opinion pieces in this edition of the magazine!<br><br>The winning essays were submitted by:<br><br>Parichay Thakore and Yash Kamble for writing on Is Health Care a Right or Commodity<br><br>Aman Raj for writing on Climate Change: Policy and Practice<br>", 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0019.html', 'articleNo': '0020', 'nextArticle': '0021.html'};

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