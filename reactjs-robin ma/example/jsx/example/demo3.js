(function () {

  var InputReact = React.createClass({
    getInitialState: function () {
      return {
        value:'这是一个例子'
      }
    },
    changeVal: function (e) {
    //  this.setState({value:e.currentTarget.value})
    },
    render: function () {
      var value = this.state.value;
      return (
        <div>
          <input value={value} onChange = {this.changeVal} />
        </div>
      );
    }
  });



  React.render(<InputReact />,
  document.getElementById('example'));

}());
