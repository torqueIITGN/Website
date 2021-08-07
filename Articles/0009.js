var data = {'title': 'Letters from the TORQUE Team', 'desc': 'Torque 3.0', 'img': '../Assets/letter2.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Deepika Soni', 'authorDesc': 'Chief Editor, Torque', 'authorImg': '../Assets/deepika.jpg', 'articleContent': "I feel delighted to be sharing the third edition of this magazine with you all. I've been associated with TORQUE as one of its Co-Founders. I'm thrilled and proud to see that the splendid work put by our teams over the editions has taken this magazine to another level! This edition is unique and special - we've expanded TORQUE from a tech to a campus' magazine. I hope you enjoy flipping and reading through the pages and appreciate the efforts put in by the team. As I graduate from this institute, TORQUE will ALWAYS have a special place in my heart. I'm hopeful and optimistic that this magazine will reach even greater heights as an institute magazine over the coming years and augment the student culture at IITGN!<br><br>Cheers,<br>Deepika<br>", 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0008.html', 'articleNo': '0009', 'nextArticle': '0010.html'};

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