(function(){

  var UserInput = React.createClass({displayName: "UserInput",
    render: function () {
      return (
        React.createElement("div", null, 
          React.createElement("input", {valu: "test", name: "uname", ref: "unamdom"})
        )
      );
    }
  });

  React.render(React.createElement(UserInput, null),
  document.getElementById('example'));

}());
