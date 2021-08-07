var data = {'title': 'Letters from the TORQUE Team', 'desc': 'Torque 3.0', 'img': '../Assets/letter.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Praveen Venkatesh', 'authorDesc': 'Chief Editor, Torque', 'authorImg': '../Assets/praveen.png', 'articleContent': 'The past year has been a rollercoaster for all of us. Crippling almost every aspect of our lives, the virus has set things back. However, as it always happens, life must go on. Throughout this magazine, we attempt to address various aspects of life during the pandemic at the institute and beyond. For the first time at Torque, we also present some unique surveys about our community that I am sure that you would enjoy reading.<br><br>As I skimmed through the final draft of the magazine, I felt a sense of hope about the future as we begin to ease back into our usual lives. In hindsight, I realize that making the magazine was one way our team beat the pandemic blues. I genuinely hope you like what we&rsquo;ve put together over the past year :)<br><br>Have fun!<br>Praveen<br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0009.html', 'articleNo': '0010', 'nextArticle': '0011.html'};

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