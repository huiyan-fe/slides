(function(){

  // ----

  var SubReact = React.createClass({displayName: "SubReact",

    clickMe: function () {
      this.props.ClickSubReact();
    },
    render: function () {
      return (
        React.createElement("button", {onClick: this.clickMe}, "btn")
      );
    }

  });

  var ParentReact = React.createClass({displayName: "ParentReact",
    clickSub: function () {
      console.log('click sub React');
    },
    render: function (){
      return (
        React.createElement("div", null, 
          React.createElement(SubReact, {ClickSubReact: this.clickSub})
        )
      );
    }
  })

  React.render(React.createElement(ParentReact, null),
  document.getElementById('example'));

}());
