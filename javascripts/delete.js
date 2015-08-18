define(function(){
  return function(){
    $('#family').on("click", ".delete",  function(){
      console.log(this);
      var key = ($(this).parent().attr('data-key'));
      console.log(key);
      // var newMembers = [];
      // var name = $(this).prev().prev().prev().prev().val();
      // console.log(name);
      // $.each(members, function(index, value){
      //   if(name!=="Name: "+value.name){
      //     newMembers = members.push(value);
      //   }
      // });
      // $(this).parent().hide();

      // return newMembers;
      var firebaseRef = new Firebase("https://daniel-family.firebaseio.com/family/"+key);
      firebaseRef.remove();

      // $.ajax({
      //   url: "https://daniel-family.firebaseio.com/family/"+key,
      //   method: "DELETE"
      // }).done(function(){
      //   console.log("deleted");
      // });

    });
  };
});