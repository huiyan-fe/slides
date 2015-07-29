(function(){

  var UserName = React.createClass({displayName: "UserName",
    render: function () {
      return (
        React.createElement("li", null, this.props.name)
      );
    }
  });

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
