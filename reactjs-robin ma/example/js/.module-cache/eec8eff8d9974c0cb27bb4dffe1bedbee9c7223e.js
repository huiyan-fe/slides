(function(){

  var UserInput = React.createClass({displayName: "UserInput",
    render: function () {
      return (
        React.createElement("div", null, 
          React.createElement("div", null, 
            React.createElement("input", {name: "username", value: ""}), React.createElement("button", null, "click")
          )
        )
      );
    }
  });

  React.render(React.createElement(UserInput, null),
  document.getElementById('example'));

}());
