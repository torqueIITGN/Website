var data = {'title': 'Letters from Tech Secy', 'desc': 'Torque 3.0', 'img': '../Assets/letter.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Kanishk Kalra', 'authorDesc': 'Secretary, Student Technical Council, 2020-21', 'authorImg': '../Assets/kanishk.jpeg', 'articleContent': 'The Technical Council at IIT Gandhinagar is proud to present the third edition of the institute&rsquo;s first student magazine, Torque. Torque was envisioned by the second-to-last Technical Council of IITGN with the aim of effectively communicating to the community and the world at large, the incredible talents and skills of a very dynamic and vibrant Technical community at the campus. Over the years it has served purposes which are manifold. In addition to informing about the technical culture at campus, the magazine has evolved to presenting ideas, igniting interests, and encouraging the entire student community to participate and engage with campus culture of the institute. We hope to provide the readers with some fun knowledge and some food for thought and motivate them in the process to engage and seize the opportunities coming their way.<br><br>The past year has presented everyone with an unprecedented challenge in the form of Covid-19 pandemic. And while almost every person&rsquo;s life has been drastically affected by it, the entire IIT Gandhinagar community has shown incredible resilience and persistence in dealing with its effects. In order to celebrate this spirit of our community, the theme of this edition of Torque is &ldquo;Beating the Blues&rdquo;. This Torque is a testament to the perseverance of our community as we rise to the challenges thrown at us.<br><br>Kudos to the very dedicated and incredible team of this edition of Torque for their phenomenal work and invaluable efforts in bringing this great project to fruition!<br><br>Happy reading!<br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0005.html', 'articleNo': '0006', 'nextArticle': '0007.html'};

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