let pict = document.querySelector(".image");
let navbar = document.getElementById("navbarTop");
let about = document.querySelector("#about");
let photos = document.querySelector("#photos");
let reviews = document.querySelector("#reviews");
let order = document.querySelector("#order");
let footer = document.querySelector("footer");
let portfolio = document.querySelector(".portfolio");

AOS.init();

gsap.from(".box", {x:-90,  duration:2, rotation:30, stagger:.5, repeat:-1});
gsap.to("#writingText", {
  text: "Don't limit youself!!!",
  duration: 2,
  repeat: -1, 
  repeatDelay: .5, 
  ease: "power5.in",
  yoyo: true,
  dalay:1
}
);
gsap.to(".bigText", {
  text: "is Real!",
  duration: 2,
  repeat: -1, 
  repeatDelay: .7, 
  ease: "power2.in",
  yoyo: true,
  dalay:2
}
);
// button UPP
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
      if ($('#upbutton').is(':hidden')) {
          $('#upbutton').css({opacity : 1}).fadeIn('slow');
      }
  } else { 
      $('#upbutton').stop(true, false).fadeOut('fast'); 
  }
});
$('#upbutton').on('click', function() {
  $('html, body').stop().animate({scrollTop : 0}, 300);
});

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {
  action: "https://formspree.io/f/mvolyvaj",
  title: "Write to me:",
  fields: [
    { 
      type: "email",
      label: "your Email:", 
      name: "email",
      required: true,
      placeholder: "elena.webcode@gmail.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      required: true,
      placeholder: "...",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray",
      right: "10px"
    }
  }
});
