$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /*toggle click event*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});