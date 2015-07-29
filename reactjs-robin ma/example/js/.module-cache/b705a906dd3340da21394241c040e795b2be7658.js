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
      userList.push(username);
      this.setState({userList:userList,username:''});
    },
    render: function () {
      var username = this.state.username;
      var userList = this.state.userList;
      console.log(userList,'userLIst')
      return (
        React.createElement("div", null, 
          React.createElement("div", null, 
            React.createElement("input", {name: "username", value: username, onChange: this.inputUsername}), React.createElement("button", {onClick: this.addUser}, "click")
          ), 
          React.createElement("ul", null, 
          userList.map(function(item){
              return React.createElement(UserName, {name: item});
          })
          )
        )
      );
    }
  });

  React.render(React.createElement(UserInput, null),
  document.getElementById('example'));



  // ----

  var SubReact = React.createClass({displayName: "SubReact",

    clickMe: function () {
      this.props.ClickSubReact();
    },
    render: function () {
      return (
        React.createElement("button", {onClick: this.clickMe}, "btn")
      );
    }

  });

  var ParentReact = React.createClass({displayName: "ParentReact",
    clickSub: function () {
      console.log('click sub React');
    },
    render: function (){
      return (
        React.createElement("div", null, 
          React.createElement(SubReact, {ClickSubReact: this.clickSub})
        )
      );
    }
  })

  React.render(React.createElement(ParentReact, null),
  document.getElementById('example'));

}());
