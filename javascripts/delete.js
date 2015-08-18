define(function(){
  return function(){
    $(document).on("click", ".delete",  function(){
      console.log("clicked");
      console.log(this);
      var key = $(this).parent().parent().attr("class");
      console.log(key);
      console.log($(this).parent().parent().parent());
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

      // $.ajax({
      //   url: "https://flickering-fire-4801.firebaseio.com/songs.json",
      //   method: "DELETE",
      //   data: JSON.stringify()
      // }).done();

    });
  };
});