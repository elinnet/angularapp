// angular.module('greetings',[])
//   .directive("welcome",function(){
//     return {
//       restrict: "E",
//       template: "<div>Howdy there! You look splendid.</div>"
//     };
//   });

  angular.module('greetings', [])
  .directive("welcome", function() {
    return {
      restrict: "C",
      link: function(){
        alert("Howdy!");
      }
    };
  })
  .directive("goodbye",function(){
    return{
      restrict: "C",
      link: function(){
        alert("See ya later!");
      }
    };
  });
