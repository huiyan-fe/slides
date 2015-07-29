(function (){

    var GlobalReact = React.createClass({
      render: function () {
        return (
          <div>
            <Avater />
            <UserName />
          </div>
        );
      }
    });

    var Avater = React.createClass({

      render: function () {
        return (
          <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/whfpf%3D425%2C260%2C50/sign=5ff54ee7217f9e2f70604e48790ddd16/c2cec3fdfc03924528f61d0e8194a4c27d1e2574.jpg" width="50" height="50" />
        );
      }
    });

    var UserName = React.createClass({

      render: function () {
        return (
          <div>鹿晗</div>
        );
      }
    });

    React.render(<GlobalReact />,
    document.getElementById('example'));

}());
