(function(){

  var UserName = React.createClass({displayName: "UserName",
    render: function () {
      return (
        React.createElement("li", null, this.props.name)
      );
    }
  });

  var UserInput = React.createClass({displayName: "UserInput",
    getInitialState: function () {
      return {
        userList: []
      }
    },
    addUser:function () {

    },
    render: function () {
      return (
        React.createElement("div", null, 
          React.createElement("div", null, 
            React.createElement("input", {name: "username", value: "{this.state.username}"}), React.createElement("button", {onClick: this.addUser}, "click")
          ), 
          React.createElement("ul", null

          )
        )
      );
    }
  });

  React.render(React.createElement(UserInput, null),
  document.getElementById('example'));

}());
