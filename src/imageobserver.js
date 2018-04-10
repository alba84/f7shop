export default (function(){
    var observer = {},
        n = 0;

    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) 
    {
        observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
                    entry.target.classList.remove("lazy");
                    observer.unobserve(entry.target);
                }
            });
        });
    }
    
    return {
        get count(){
            return n++;
        },
        watch: function(el){
            observer.observe(el);
        }
    }
}());