document.addEventListener('DOMContentLoader', function(){
    window.addEventListener('scroll', function(){
        let scrolled = (this.pageYOffset / 2);
        console.log(scrolled);
        document.getElementById('paralax').style.backgroundPosition = '0 ' + scrolled + 'px';
    })
   /* window.addEventListener('scroll', function(){
    let scrolling = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let paralaxHeight = document.getElementById('paralax').offsetHeight;
    if(paralaxHeight < this.pageYOffset) {
        document.getElementById('paralax').classList.add="nowa-klasa"; }
    }) */
})