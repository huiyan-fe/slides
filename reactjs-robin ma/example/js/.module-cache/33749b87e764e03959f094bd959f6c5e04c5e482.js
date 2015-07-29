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
          React.createElement("img", {src: ""})
        );
      }
    });

}());
