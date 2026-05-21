$(document).ready(function () {
    // ================================++++++++++++++++++++====================
    // desktop nav code starts here

    // desktop mega menu code starts here
    let inventoryBtn = $(".toggleInventoryMenu");
    let resourcesBtn = $(".toggleResourcesMenu");
    let searchBtn = $(".navSearchIcon");

    let inventoryMenu = $(".inventoryMegaMenu");
    let resourcesMenu = $(".resourcesMegaMenu");
    let searchBar = $(".navSearchInput");

    let closeBtn = $(".closeInventoryIcon");

    let closeAllMenus = () => {
        inventoryMenu.stop(true, true).fadeOut(200);
        resourcesMenu.stop(true, true).fadeOut(200);
        searchBar.stop(true, true).slideUp(200);
    };

    // Inventory toggle
    inventoryBtn.on("click", function (e) {
        e.stopPropagation();

        if (inventoryMenu.is(":visible")) {
            inventoryMenu.fadeOut(200);
        } else {
            closeAllMenus();
            inventoryMenu.stop(true, true).fadeIn(200);
        }
    });

    // Resources toggle
    resourcesBtn.on("click", function (e) {
        e.stopPropagation();

        if (resourcesMenu.is(":visible")) {
            resourcesMenu.fadeOut(200);
        } else {
            closeAllMenus();
            resourcesMenu.stop(true, true).fadeIn(200);
        }
    });

    // search toggle
    searchBtn.on("click", function (e) {
        e.stopPropagation();

        if (searchBar.is(":visible")) {
            searchBar.fadeOut(200);
        } else {
            closeAllMenus();
            searchBar.stop(true, true).fadeIn(200);
        }
    });

    // Close button
    closeBtn.on("click", function (e) {
        e.stopPropagation();
        inventoryMenu.fadeOut(200);
    });

    // Prevent closing when clicking inside
    $(".inventoryMegaMenu, .resourcesMegaMenu, .navSearchInput").on("click", function (e) {
        e.stopPropagation();
    });

    // Outside click
    $(document).on("click", function () {
        closeAllMenus();
    });
    // desktop mega menu code ends here

    // desktop nav code ends here
    // ================================++++++++++++++++++++====================


    // ================================++++++++++++++++++++====================
    // home page code starts here
    if ($('.promoSlider').length) {
        $('.promoSlider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<img src="./assets/images/home/left-arrow.webp" alt="prev"/>', '<img src="./assets/images/home/right-arrow.webp" alt="next"/>'],
            dots: true,
            smartSpeed: 600,
            center: true,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            },
        });
    }


    // home page code ends here
    // ================================++++++++++++++++++++====================
});