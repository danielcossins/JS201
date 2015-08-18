define(function(){
  return function(){
    var member = {};
    var name = $("#name").val();
    console.log(name);
    var age = $("#age").val();
    var gender = $("#gender").val();
    var skills = {
      0: $("#skill1").val();
      1: $("skill2").val();
      2: $("skill3").val();
      3: $("skill4").val();
    };
    console.log(skills);
    member.name = name;
    member.age = age;
    member.gender = gender;
    member.skills = skills;
    console.log(members);

    return member;
  };
});