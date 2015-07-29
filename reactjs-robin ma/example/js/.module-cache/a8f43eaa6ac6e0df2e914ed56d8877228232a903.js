(function(){

  var InputReact = new React.createClass({
      render: function () {
        return (
          React.createElement("input", {value: this.props.name, name: "uname"})
        );
      }
  });

  React.render(React.createElement(InputReact, {name: "jime"}),document.getElementById('example'));

}());
