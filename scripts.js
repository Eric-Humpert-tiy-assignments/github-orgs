'use strict';
if (this.OrgsView === undefined) this.OrgsView = {};

(function(context) {

  function start() {

    $.ajax('https://api.github.com/users/jisaacks/orgs');
    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.OrgsView);
