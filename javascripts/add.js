define(function(){
  return function(){
    var member = {};
    var name = $("#name").val();
    console.log(name);
    var age = $("#age").val();
    var gender = $("#gender").val();
    var skills = {};
    skills.a = $("#skill1").val();
    skills.b = $("#skill2").val();
    skills.c = $("#skill3").val();
    skills.d = $("#skill4").val();
    console.log(skills);
    member.name = name;
    member.age = age;
    member.gender = gender;
    member.skills = skills;
    console.log(member);

    // return member;
    $.ajax({
      url: "https://daniel-family.firebaseio.com/family.json",
      method: "POST",
      data: JSON.stringify(member)
    }).done(function(){
      console.log("added");
    });
  };
});