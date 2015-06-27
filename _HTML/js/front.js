var GlobalApp = {};

(function($) {

      App = {
        Init : function() {

            App.TouchMenu.Init('.main', ["#header .logo",".language-switcher-locale-url"] , [".menu-container"]);
            

            $(window).resize(function() {
                App.TouchMenu.Resize();
            });

            // adding resize functions to window focus (because user might be on other tab when he triggers the resize)
            $(window).on("focus", function() {
                App.TouchMenu.Resize();
            });



        },
        IsMobile: function() {
          if ($(window).width() + App.Utils.ScrollWidth() < 768) {
              return true;
          } else {
              return false;
          }
        },
        IsOnPage: function(elem) {
          var $elem = $(elem);
          if ($elem.length) {
                var $window = $(window);
            
                var docViewTop = $window.scrollTop();
                var docViewBottom = docViewTop + $window.height();
            
                var elemTop = $elem.offset().top;
                var elemBottom = elemTop + $elem.height();
            
                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));      
          }
        },
        TouchMenu : {
          Init: function(pageWrapper, headerElements, menuElements) {
            App.TouchMenu.Resize();
            App.TouchMenu.WrapPage(pageWrapper);
            //App.TouchMenu.PopulateHeader(headerElements);
            App.TouchMenu.PopulateMenu(menuElements);
            App.TouchMenu.Actions();
            App.TouchMenu.Scroll();
          },
          Actions: function() {
            $(document).on('click', '.toggle-menu', function() {
              if (!$('html').hasClass('menu-open')) {
                App.TouchMenu.Open();
              } else {
                App.TouchMenu.Close();
              }
            });
            $(document).on('click', '.mobile-touch-overlay', function() {
                App.TouchMenu.Close();
            });
          },
          Close: function() {
            $('html').removeClass('menu-open');
          },
          PopulateHeader:function(headerElements) {
            var numberOfElements = headerElements.length;
            if (!$('header').hasClass('mobile-touch-desktop-header')) {
              // sinalize this is the desktop version of header
              $('header').addClass('mobile-touch-desktop-header');

              // append header
              $('.mobile-touch-header').prepend('<span class="mobile-touch-menu-toggle">Menu</span>')
              $('.mobile-touch-header').addClass('mobile-touch-slideout mobile-touch-header-fixed');

              for (var i = 0; i < numberOfElements; i++) {
                $(headerElements[i]).clone().appendTo('.mobile-touch-header .inner');
              } 
            }
          },
          Exists: function() {
            if (($(window).width() + App.Utils.ScrollWidth() < 1160) || Modernizr.touch) {
              return true;
            } else {
              return false;
            }
          },
          Open: function() {
            $('html').addClass('menu-open');
          },
          PopulateMenu: function(menuElements) {
            var menus = menuElements;
            var numberOfMenus = menus.length;

            // remove previous menu items
            $('.mobile-touch-menu').remove();

            // add menu items
            $('body').prepend('<nav class="mobile-touch-menu mobile-touch-slideout"><div class="inner"></div></nav>');
            for (var i = 0; i < numberOfMenus; i++) {
              $(menus[i]).clone().appendTo('.mobile-touch-menu .inner');
            }

            //remove extra markup
            $('.mobile-touch-menu .menu-toggle').remove();
            $('.mobile-touch-menu .menu-toggle-target').remove();

            $('.mobile-touch-menu .inner').addClass('mobile-touch-slideout inner-opened');
          },
          Resize: function() {
            if (App.TouchMenu.Exists()) {
              $('html').addClass('mobile-touch-menu-exists');
            } else {
              $('html').removeClass('mobile-touch-menu-exists');
            }
          },
          Scroll: function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 0) {
                    $('html').addClass('scrolled');
                } else {
                    $('html').removeClass('scrolled');
                }
            });
          },
          WrapPage:function(pageWrapper) {
            $(pageWrapper).before('<div class="mobile-touch-header mobile-touch-push-page"><div class="inner"></div></div>');
            $(pageWrapper).after('<div class="mobile-touch-overlay"></div>');
            $(pageWrapper).addClass('mobile-touch-slideout mobile-touch-push-page');
            $('.mobile-touch-overlay').addClass('mobile-touch-slideout mobile-touch-push-page');
          }
        },
        Utils : {
          WindowWidth: function() {
              return $(window).width() + App.Utils.ScrollWidth();
          },
          ScrollWidth: function() {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";

            // add innerdiv
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);        

            var widthWithScroll = inner.offsetWidth;

            // remove divs
            outer.parentNode.removeChild(outer);

            return widthNoScroll - widthWithScroll;
          }   
        }
      }
      

      $(function() {
            App.Init();
      });

      GlobalApp = App;
      
       
})(jQuery)


