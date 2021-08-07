var data = {'title': 'From the Director’s Desk', 'desc': 'Torque 3.0', 'img': 'https://iitgn.ac.in/media/pages/faculty/civil/fac-skjain/3163897598-1600344525/skjain.jpg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Prof. Sudhir K. Jain', 'authorDesc': 'Director, IIT Gandhinagar', 'authorImg': '', 'articleContent': "I am delighted to launch the third edition of TORQUE, the IITGN Campus magazine. Despite the challenges of the pandemic, the TORQUE team has been able to make the IITGN Student's talent visible through the magazine. Let us dedicate this edition to all the brave IITGN frontline workers in the fight against Covid 19. I am confident that this magazine will be a platform for creative expression and a forum to disseminate IITGN values.<br><br>I wish the TORQUE team great success and IITGN Students the strength to overcome the current challenges of the pandemic. Let this forum continue the stride of advancing the aspirations of IITGN.<br>", 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0002.html', 'articleNo': '0003', 'nextArticle': '0004.html'};

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