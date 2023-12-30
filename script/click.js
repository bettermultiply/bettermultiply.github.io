
$("#but").on("click", function(e){
    get_contact_form_info();
});


function get_contact_form_info(){
    var email = $("#enter").val();
    if(email != ""){
        $("#enter").attr("value", "");
        alert("Sorry, it haven't be implented...orz");
    }else{
        alert("your email can't be empty!");
    }
}
    
