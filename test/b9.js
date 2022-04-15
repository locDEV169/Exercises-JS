function Blog(url) {
    this.url = url;
    this.sayHi = function () {
        console.log(this.url);
    };
}

var site = new Blog("toidicodedao.com");
site.sayHi();
setTimeout(site.sayHi,0)