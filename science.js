const fetchData = async ()=>{
    try{
        const url ="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b1327b3dfc0e4f78b87f0c8607df8411";
        // const url =  "https://newsapi.org/v2/top-headlines?q=Bitcoin&country=in&category=business&apiKey=b1327b3dfc0e4f78b87f0c8607df8411";
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
    }catch(err){
        console.log("Error fetching data...",err);
    }
}

const mapData = async ()=>{
    const article = await fetchData();
    const newsContainer = document.querySelector(".news-container");
    newsContainer.innerHTML = " ";

    article.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const img = document.createElement('img');
        img.classList.add('news-image');
        img.src = news.urlToImage;
        newsItem.appendChild(img);

        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');

        const newsTitle = document.createElement('h2');
        newsTitle.classList.add('news-title');
        newsTitle.textContent = news.title;
        newsContent.appendChild(newsTitle);
        
        const newsSource = document.createElement('p');
        newsSource.classList.add('news-source');
        newsSource.textContent = news.source.name;
        newsContent.appendChild(newsSource);

        const newsAuthor = document.createElement('p');
        newsAuthor.classList.add('news-author');
        newsAuthor.textContent = news.author;
        newsContent.appendChild(newsAuthor);

        const newsDescription = document.createElement('p');
        newsDescription.classList.add('news-description');
        newsDescription.textContent = news.description;
        newsContent.appendChild(newsDescription)

        // const newsLink = document.createElement('a');
        // newsLink.classList.add('news-link');
        // newsLink.textContent = 'Read more';
        // newsLink.href = news.url;
        // newsContent.appendChild(newsLink)

        const publishedAt = document.createElement('p');
        publishedAt.classList.add('publishedat');
        publishedAt.textContent = news.publishedAt;
        newsContent.appendChild(publishedAt);


        newsItem.appendChild(newsContent);

        newsContainer.appendChild(newsItem);


        newsItem.addEventListener("click",function(){
            // window.location.href = news.url;
            // window.location.target = '_blank';
            window.open(news.url,'_blank');
        })
    });
}

mapData();