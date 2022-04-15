function web(url) {
    this.url = url;
}

const google = new web("www.google.com");
console.log(google);

const ytb = web("www.youtube.com");
console.log(ytb);
