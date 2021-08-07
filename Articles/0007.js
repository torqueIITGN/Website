var data = {'title': 'Letters from Tech Secy', 'desc': 'Torque 3.0', 'img': '../Assets/letter.svg', 'imgCredit': '', 'time': '1 min', 'authorName': 'Vrutik Shah', 'authorDesc': 'Secretary, Student Technical Council, 2021-22', 'authorImg': '../Assets/vrutik.jpeg', 'articleContent': 'I am thrilled and take great pride in presenting to the IITGN community the latest edition of Torque magazine - TORQUE 3.0. Over the past couple of years, Torque magazine has produced some exceptional content as the technical magazine of IIT Gandhinagar and has managed to pique the interest of all its readers. Whether it was about all the technical activities and initiatives happening around our campus or the latest, ground-breaking news in Science and technology around the world, Torque magazine was indeed a one-stop destination for all of us. <br><br>The Covid-19 pandemic has proved to be a challenge for all of us, making us take a step back and doing things differently. During these times, the Technical Council has firmly stuck to the principle of adapting and improvising continuously to ensure that the IITGN student community has a great experience, always having the opportunity to try out something new and interesting. <br><br>Finally, kudos to the incredibly talented and diverse team of Torque for crafting yet another great edition and for all their efforts to make the magazine more inclusive as the Institute Magazine of IIT Gandhinagar. I am sure that TORQUE 3.0 would be a page-turner and a very interesting read for all of us, providing us insights into several new areas and broadening our horizons.<br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0006.html', 'articleNo': '0007', 'nextArticle': '0008.html'};

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