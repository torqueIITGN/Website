var data = {'title': 'New Torque Logo', 'desc': '', 'img': '../Assets/1A.png', 'imgCredit': 'Credits: Design Team, Torque', 'time': '30 s', 'authorName': 'Team Torque', 'authorDesc': 'IIT Gandhinagar', 'authorImg': '../Assets/avatar.svg', 'articleContent': '<strong>The logo has 3 elements: A pen, wings and IITGN&rsquo;s famous landmark - The Lal Minar. </strong><br> <br>&lsquo;If you want to change the world, pick up your pen and write&rsquo;. Resonating with these words of Martin Luther King, we started this magazine 3 years ago at IITGN because we wanted to bring a change in the student culture - we noticed so many student activities, projects and achievements going unnoticed in the colossal and thus decided to make our very own platform to do it! With two successful editions as the Technical Magazine of IITGN, with this edition TORQUE is spreading its wings and flying high as IITGN&rsquo;s own campus magazine!<br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0000.html', 'articleNo': '0001', 'nextArticle': '0002.html'};

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