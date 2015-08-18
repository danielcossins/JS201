define(function(members){
  return function(members){
    var newMembers = [];
    var name = $(this).prev().prev().prev().prev().val();
    console.log(name);
    $.each(members, function(index, value){
      if(name!=="Name: "+value.name){
        newMembers = members.push(value);
      }
    });

    return newMembers;

    });

    // $.ajax({
    //   url: "https://flickering-fire-4801.firebaseio.com/songs.json",
    //   method: "POST",
    //   data: JSON.stringify(song)
    // }).done();
  };
});