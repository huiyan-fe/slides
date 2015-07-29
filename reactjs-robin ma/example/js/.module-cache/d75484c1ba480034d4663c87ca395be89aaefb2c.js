(function () {

  var InputReact = React.createClass({displayName: "InputReact",
    getInitialState: function () {
      return {
        value:'这是一个例子'
      }
    },
    changeVal: function (e) {
      this.setState({value:e.currentTarget.value})
    },
    render: function () {
      var value = this.state.value;
      return (
        React.createElement("div", null, 
          React.createElement("input", {value: value, onChange: this.changeVal})
        )
      );
    }
  });



  React.render(React.createElement(InputReact, null),
  document.getElementById('example'));

}());
