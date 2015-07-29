(function(){

  var UserName = React.createClass({
    render: function () {
      return (
        <li>{this.props.name}</li>
      );
    }
  });

  var UserInput = React.createClass({
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
        <div>
          <div>
            <input name="username" value={username} onChange={this.inputUsername} /><button onClick = {this.addUser}>click</button>
          </div>
          <ul>
          {userList.map(function(item){
              return <UserName name={item} />;
          })}
          </ul>
        </div>
      );
    }
  });

  React.render(<UserInput />,
  document.getElementById('example'));

}());
