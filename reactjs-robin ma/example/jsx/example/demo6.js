

  var UserInput = React.createClass({

    getInitialState: function () {
      return {}
    },
    componentDidMount: function () {
      this.getDom();
    },
    componentWillUnmount: function () {

    },
    getDom: function () {
      var inputDom = this.refs.unamdom.getDOMNode();
      var inputDom = React.findDOMNode(this.refs.unamdom)
    },

    render: function () {
      return (
        <div>
          <input valu="test" name="uname" ref='unamdom' />
        </div>
      );
    }
  });

  React.render(<UserInput />,
  document.getElementById('example'));
