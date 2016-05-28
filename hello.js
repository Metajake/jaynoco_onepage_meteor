var testimonials = {
  doug: {
    text: "Dedication and creativity are two of the best words that describe Jacob. I have worked with Jacob way into the night on various occasions to meet crazy deadlines and he has always come through with a smile on his face. Excellent work ethic and passion."
  },
  donna: {
    text: 'Jacob is an intuitive, process-driven designer. I would describe him as a "big-thinker" because he incorporates a deep understanding of the brand into his designs. He is a team player, stays invested in his work, and frequently seeks out new artistic perspectives and tools to improve his craft.'
  },
  nate: {
    text: "Jacob is reliable and humane. Illustration, interface design, a firm grasp of programming languages, and people skills are what make him capable in a modern creative environment. Jacob has been at GameStart School for almost one year. Within that time he has taken on new educational responsibilities and continued to provide the school with invested energy."
  }
};

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  function circularize(){
    $('div.circular').height($('div.circular').width())
    $('div.proportionate').height($('div.proportionate').width())
  }

  $(document).ready(function(){
    circularize()
  });

  $(window).resize(function(){
    circularize()
  });

  Meteor.startup(function () {
    $.getScript('/scripts/form_submission_handler.js', function(){});
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
