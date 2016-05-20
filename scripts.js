'use strict';
if (this.OrgsView === undefined) this.OrgsView = {};

(function(context) {

  var apiData;

  function buildDOMList(obj) {

  }

  var organizationsList = document.querySelector('#org-list');

  function start() {

    $.ajax('https://api.github.com/users/jisaacks/orgs').done(function(result) {
      console.log('got the data', result);
      apiData = result;
      console.log(apiData);
      buildDOMList(apiData);
    });


    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.OrgsView);
