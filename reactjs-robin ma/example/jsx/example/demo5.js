(function(){

  // ----

  var SubReact = React.createClass({

    clickMe: function () {
      this.props.ClickSubReact();
    },
    render: function () {
      return (
        <button onClick = {this.clickMe}>btn</button>
      );
    }

  });

  var ParentReact = React.createClass({
    clickSub: function () {
      console.log('click sub React');
    },
    render: function (){
      return (
        <div>
          <SubReact ClickSubReact={this.clickSub} />
        </div>
      );
    }
  })

  React.render(<ParentReact />,
  document.getElementById('example'));

}());
