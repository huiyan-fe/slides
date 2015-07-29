(function(){

  var InputReact = new React.createClass({
      getDefaultProps: function () {
          return {
            age:12
          }
      },
      propTypes:{
        name:React.PropTypes.String
      },
      render: function () {
        return (
          React.createElement("input", {value: this.props.name+':'+this.props.age, name: "uname"})
        );
      }
  });

  React.render(React.createElement(InputReact, {name: "jime"}),
  document.getElementById('example'));

}());
