//function to filter out the language specific news

const getNews = async () => {
    try {
        const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_42299a9d3ed78451b9ad11be29e06aa92b796&q=technology p");
        const data = await res.json();
        
        // Filter news articles by language English
        const englishNews = data.results.filter(article => article.language === "english");
        
        // Display the description or title of the first English news article
        const news = document.querySelector("#news");
        news.innerHTML = englishNews.length > 0 ? (englishNews[0].description ? englishNews[0].description : englishNews[0].title) : "No English news found.";
    } catch(error) {
        console.error("Error fetching news:", error);
    }
}

//function to not filter out the language specific news

// const getNews= async () =>{
//     try{
//         const res= await fetch("https://newsdata.io/api/1/news?apikey=pub_42299a9d3ed78451b9ad11be29e06aa92b796&q=technology p")
//         const data= await res.json();
//         const news= document.querySelector("#news");
//         news.innerHTML= data.results[0].description?data.results[0].description: data.results[0].title;
//     }catch(error){}
// }

window.addEventListener("load", ()=>{
    getNews();
});