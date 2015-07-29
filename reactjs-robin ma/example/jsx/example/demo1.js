(function(){

  var InputReact = new React.createClass({
      getDefaultProps: function () {
          return {
            age:12
          }
      },
      propTypes:{
        name:React.PropTypes.string
      },
      render: function () {
        return (
          <input value = {this.props.name+':'+this.props.age} name='uname' />
        );
      }
  });

  React.render(<InputReact name='jim' />,
  document.getElementById('example'));

}());
