
;
const header = document.querySelector('.header-fixed');
if (header) {
    const headerTransparent = document.querySelector('.header-transparent');
    const headerHeight = header.offsetHeight;

    function debounce(func, wait = 100) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        };
    }

    let toggleHeaderClass = function () {
        scrollpos = window.scrollY;
        if (scrollpos >= headerHeight) {
            header.classList.add('header-scrolled');
            if (headerTransparent) {
                header.classList.remove('header-transparent');
            }
        } else {
            header.classList.remove('header-scrolled');
            if (headerTransparent) {
                header.classList.add('header-transparent');
            }
        }
    };

    window.addEventListener('scroll', toggleHeaderClass);
}

;
(function () {
    var menuTrigger = document.querySelector("#toggle-menu-main-mobile");
  
    if (menuTrigger !== null) {
      var body = document.querySelector("body");
      var menuContainer = document.querySelector("#menu-main-mobile");
      var menuContainerCenter = document.querySelector(".menu-main-mobile-center");
      var closeIcon = document.querySelector("#close-overlay");
      var hamburgerIcons = document.querySelectorAll(".hamburger");
  
      function toggleMobileMenu(e) {
        menuContainer.classList.toggle("open");
        hamburgerIcons.forEach((icon) => icon.classList.toggle("is-active"));
        menuTrigger.classList.toggle("open");
        body.classList.toggle("lock-scroll");
      }
  
      menuTrigger.addEventListener("click", (e) => toggleMobileMenu(e));
  
      function closeOverlay(e) {
        if (e.target === e.currentTarget) {
          toggleMobileMenu();
        }
      }
  
      menuContainerCenter.addEventListener("click", (e) => closeOverlay(e));
      closeIcon.addEventListener("click", (e) => toggleMobileMenu(e));
  
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key == "Esc") {
          //if esc key was not pressed in combination with ctrl or alt or shift
          const isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);
          const menuIsOpen = menuContainer.classList.contains("open");
          if (isNotCombinedKey && menuIsOpen) {
            toggleMobileMenu(e);
          }
        }
      });
    }
  })();
  