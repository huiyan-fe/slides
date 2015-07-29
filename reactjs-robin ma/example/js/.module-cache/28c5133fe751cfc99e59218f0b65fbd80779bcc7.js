(function (){

    var GlobalReact = React.createClass({displayName: "GlobalReact",
      render: function () {
        return (
          React.createElement("div", null

          )
        );
      }
    });

    var Avater = React.createClass({displayName: "Avater",

      render: function () {
        return (
          React.createElement("img", {src: "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/whfpf%3D425%2C260%2C50/sign=5ff54ee7217f9e2f70604e48790ddd16/c2cec3fdfc03924528f61d0e8194a4c27d1e2574.jpg", width: "24", height: "24"})
        );
      }
    });

    var UserName = React.createClass({displayName: "UserName",

      render: function () {
        return (
          React.createElement("div", null, "鹿晗")
        );
      }
    });

}());
