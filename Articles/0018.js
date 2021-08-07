var data = {'title': 'Professor Next Door: Prof. Jooyoung Kim', 'desc': 'Professor Jooyoung Kim, Assistant Teaching Professor, Humanities and Social Sciences<br>Interviewed by: Abhishek Ramesh', 'img': 'https://iitgn.ac.in/media/pages/faculty/hss/fac-jooyoung/1363384721-1600344526/jooyoung.jpg', 'imgCredit': '', 'time': '2 min', 'authorName': '', 'authorDesc': '', 'authorImg': '', 'articleContent': 'In this new series, Professor Next Door, by the TORQUE Magazine, we will be interviewing our own professors and get to know them beyond the classroom environs! <br><hr><br>For this interview, we had Prof. Jooyoung Kim for company. She introduced herself as belonging to South Korea and going on to the US to do her PhD. Her connection with IITGN began after a close friend recommended her to join the institute. She was particularly impressed with the multidisciplinary system and holistic development of students at IITGN. She is currently a part of the Writing Studio and also takes the Foundation Program course for both postgraduate and undergraduate students. <br><br>Prof. Jooyoung is interested in the multilingualism culture at IITGN. She expressed keenness in knowing about India&rsquo;s multilingual culture and especially regarding English and how Indians approach English as a tool to get better job opportunities and social status. Her work in research also revolves around Korean and Japanese syntax and semantics.<br><br>Her interest in linguistics stemmed from junior high school when she would get a lot of clarity from reading encyclopedias about the world. She took up linguistic anthropology to enable her to visit remote areas and analyse language, habit and culture. She is also interested in etymology. While in college, she diversified her understanding of linguistics and how she uses language on her own. She particularly liked the scientific method of testing, observing and hypothesising.<br><br>Talking about the culture at IITGN, Prof. Jooyoung said that the people are very nice and friendly. She remembered the time when students brought her sweets on Makar Sankranti while she was at her office. She also likes the chai culture at Lal Minar. She said she loves bird-watching at campus and was thrilled to see peacocks in their natural habitat.<br><br>Regarding her food interests, she expressed that she does not really have a sweet tooth but she still likes chikkis and rasmalai. Other sweets like gulab jamun are too sweet for her liking. She likes trying new things, especially Indian curry items. She also misses Korean food as she can&rsquo;t get the ingredients over here to make it herself.<br><br>She also said how she loves to play video games and that she is a fan of Marvel and X-Men. She also has a subscription to Marvel ultimate.<br><br>When asked about the Covid-19 situation, she said that it has enabled people to have some alone time. As a linguist, she was keen on how the main idea of communication is the message and getting the emotion across to oneself. <br>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0017.html', 'articleNo': '0018', 'nextArticle': '0019.html'};

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