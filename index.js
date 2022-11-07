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
        // $(".variant-container").css("display", "none");
        // $("#personalise-form-id ").prepend(' <select class="form-control select-package"><option>Default select</option><option>select 02</option><option>select 03</option></select>');

        $(".custom-container.cart-container .cart-login-cont .login-cart-panel").prepend(' <p class="panel-note-text">Please note this login is for Capella Bangkok gifting platform only.</p>');
        $("#add-to-basket-btn").text("Buy Now");
        $(".related-products .custom-container").prepend(' <h3 class="section-title">More Like This</h3>');
        $('.related-products .container.custom-container .container').addClass('product-detail-container');

        $(".cart-login-cont .guest-form-cont ").prepend(' <p class="panel-after-checkout">You can create account after checkout</p>');

        $('.vendor-items-holder .vendor-items .ng-star-inserted .item-image-cont').addClass('col').removeClass('col-2');
        $('.custom-container.cart-container.all').addClass('w-xxl-100').removeClass('container');
        $('.custom-container.cart-container .cart-item.new .item-details .col-8.col-lg-7.pl-0').addClass('col-lg-6').removeClass('col-lg-7');

        $('.custom-container.cart-container .item-details-cont .item-details .col-8.pl-0.col-lg-6').addClass('col px-0 product_item').removeClass('col-lg-6 pl-0 col-8');
        $('.custom-container.cart-container .item-details-cont .item-details .col-lg-2.d-none.d-lg-block.text-center').addClass('col quantity_item').removeClass('col-lg-2 text-center');
        $('.custom-container.cart-container .item-details-cont .item-details .col-4.col-lg-3.pr-0').addClass('col subtotal_item').removeClass('col-4 col-lg-3');
        $('.custom-container.cart-container .vendor-items-holder .cart-item .col-10.px-0.item-details-cont').addClass('col').removeClass('col-10');

        $('.custom-container.cart-container.w-xxl-100 .row .col-12.col-md-8.cart-left-cont').addClass('col-lg-8').removeClass('col-md-8');
        $('.custom-container.cart-container.w-xxl-100 .row .col-12.col-md-4.cart-right-cont.ng-star-inserted').addClass('col-lg-4 col-10').removeClass('col-md-4 col-12');
        $( ".custom-container.checkout .order-totals-container .form-group " ).addClass("d-block").removeClass("d-none");
        $( ".custom-container.checkout .order-totals-container .form-group.pt-4.mb-0.d-none" ).addClass("d-block").removeClass("d-none");

        $( "app-footer-checkout .container.custom-container.checkout-footer.text-center" ).empty().removeClass("container custom-container text-center").addClass("text-start");
        $( "app-footer-checkout .checkout-footer.text-start" ).append(' <div class="ts-copyright"><span><a href="https://techsembly.com/" target="_blank">Techsembly©</a></span><span class="ml-1">2022</span></div> ');
        

        $('.edit-item-new img , .edit-contact img , .edit-address img').attr('src', 'https://static.techsembly.com/NPYRdytipVjtSV2vKtzLvrV6');

      }, 2000);

    });
  });
})();


