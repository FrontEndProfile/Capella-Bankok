function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

(function () {
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);

  // Poll for jQuery to come into existence
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 20);
    }
  };

  // Now lets do something 
  checkReady(function ($) {
    $(function () {
      // header change flag icon
      $(document).ready(function () {
        $("header.header .shipping li img").each(function () {
          $(this).attr("src", "http://localhost/fazal-test/TB.png");
        });
      });
      // CHange Payment icons 
      $('.footer .copyright-cont .pay-methods-avail').each(function () {
        if (!$(this).hasClass('modified')) {
          $(this).addClass('modified');
          $(this).find('.meth-link:not(.new)').addClass('d-none');
        }
      });

      // CHange Socials icons == FOOTER
      $('.footer .footer-widget .social-links li a img[alt="fb"]:not(.modified)').addClass('modified').attr('src', 'https://fazal-cdn.pages.dev/footer-icon-one.png');
      $('.footer .footer-widget .social-links li a img[alt="instagram"]:not(.modified)').addClass('modified').attr('src', 'https://fazal-cdn.pages.dev/footer-icon-two.png');
      $('.footer .footer-widget .social-links li a img[alt="linkedin"]:not(.modified)').addClass('modified').attr('src', 'https://fazal-cdn.pages.dev/footer-icon-three.png');
      $('.footer .copyright-cont .pay-methods-avail').append(
        '<div class="meth-link new"><img alt="master-card" src="https://fazal-cdn.pages.dev/payment_01.png" width="36"></div>' +
        '<div class="meth-link new"><img alt="o-pay" src="https://fazal-cdn.pages.dev/payment_02.png" width="36"></div>' +
        '<div class="meth-link new"><img alt="visa" src="https://fazal-cdn.pages.dev/payment_03.png" width="36"></div>');
      $('.products-container .products-holder-main .products-holder').append('<i aria-hidden="true" class="product-column fake_div"></i><i aria-hidden="true" class="product-column fake_div"></i>');

      setTimeout(function () {
        $('.tab-content.expanded .row .col-lg-10').addClass('col-lg-12').removeClass('col-lg-10');
        $(".variant-container").css("display", "none");
        $("#personalise-form-id ").prepend(' <select class="form-control select-package"><option>Default select</option><option>select 02</option><option>select 03</option></select>');
        $("#add-to-basket-btn").text("Buy Now");
        $(".related-products .custom-container").prepend(' <h3 class="section-title">More Like This</h3>');
        $('.related-products .container.custom-container .container').addClass('product-detail-container');
      }, 2000);

    });
  });
})();
