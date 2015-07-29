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
        username:'',
        userList: []
      }
    },
    inputUsername: function (e) {
      var name = e.currentTarget.value;
      this.setState({username:name});
    },
    addUser:function () {
      var username = this.state.username;
      var userList = this.state.userList;
      if(!username) return;
      this.setState({})
    },
    render: function () {
      var username = this.state.username;
      return (
        React.createElement("div", null, 
          React.createElement("div", null, 
            React.createElement("input", {name: "username", value: username, onChange: this.inputUsername}), React.createElement("button", {onClick: this.addUser}, "click")
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