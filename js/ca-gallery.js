;(function ($) {
  'use strict' // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          'easeInOutExpo'
        )
        return false
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54,
  })

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink')
    } else {
      $('#mainNav').removeClass('navbar-shrink')
    }
  })
})(jQuery) // End of use strict

renderPortfolioGrid()

function addPortfolioEventListener() {
  $('.portfolio-link').on('click', function () {
    const projId = $(this).data('projId')
    renderModal(projId)
  })
}

function renderPortfolioGrid() {
  var projs = getGProjs()

  var strHTMLs = projs.map(
    (proj) =>
      `<div  class="col-md-4 col-sm-6 portfolio-item">
    <a data-proj-id="${proj.id}"
    class="portfolio-link"
    data-toggle="modal"
    href="#portfolioModal1"
  >
    <div  class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img
      class="img-fluid"
      src="img/portfolio/${proj.id}-thumbnail.png"
      alt=""
    />
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
  </div>
</div>`
  )

  $('.portfolio-gallery').html(strHTMLs)
  addPortfolioEventListener()
}

function renderModal(projId) {
  var proj = getProjById(projId)
  var date = getHumanDate(proj.publishedAt)
  console.log(projId)
  console.log(proj)
  var strHTMLs = `
            <h2>${proj.name}</h2>
            <p class="item-intro text-muted">
            ${proj.title}
            </p>
            <img
              class="img-fluid d-block mx-auto"
              src="img/portfolio/${proj.id}.png"
              alt="${proj.title}"
              title="${proj.title}"
            />
            <p>
              ${proj.desc}
            </p>
            <ul class="list-inline">
              <li>Date: ${date}</li>
              <li>Category: ${proj.category}</li>
            </ul>
            <button
              class="btn btn-primary"
              data-dismiss="modal"
              type="button"
            >
              <i class="fa fa-times"></i>
              Close Project
            </button>
`
  // $('.portfolio-modal').show()
  $('.modal-body').html(strHTMLs)
}
