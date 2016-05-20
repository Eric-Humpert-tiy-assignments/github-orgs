'use strict';
if (this.OrgsView === undefined) this.OrgsView = {};

(function(context) {

  var orgList = $('.org-list');
  var apiData;

  function buildDOMList(arr) {
    arr.forEach(function(obj) {
      console.log(obj);
      var templateListItem = $('#org-template').html();
      console.log("The template being used",templateListItem);
      var listItem = _.template(templateListItem);
      console.log('using the template with lodash', listItem);
      var orgItem = listItem({ avatar: obj.avatar_url, login: obj.login });
      orgList.append(orgItem);
    })
  }

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
