let consulting = document.querySelector(".consulting");
let send_btn = document.querySelector('.send');
let consulting_block = document.querySelector('.consulting__block');
let consulting_inputs = document.querySelector('.consulting__inputs');
let show = `<div class="alert alert-success" role="alert">
<h4 class="alert-heading">Well done!</h4>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<hr>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`;
send_btn.addEventListener('click', function(){
    consulting_block.style.display="none";
    consulting_inputs.style.display="none";
    consulting.innerHTML=`<div class="container"><div class="alert alert-success w-100 h-100" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div></div>`;
})