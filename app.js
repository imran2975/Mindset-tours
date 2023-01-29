// AOS initialise
//AOS.init();

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date').innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    //linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else{
        linksContainer.style.height = 0
    }
})

// ********** fixed navbar ************
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if (scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
    } else{
        navBar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500){
        topLink.classList.add('show-link')
    } else{
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
//  select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        //prevent default
        e.preventDefault()
        //navigate to specific spot 
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        // calculate the height
        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight

        if (!fixedNav){
            position = position - navHeight
        }
        if (navHeight > 82){
            position = position + containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})


// ** reviews control **

// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  //select items
  
  const img = document.getElementById("person-img")
  const author = document.getElementById("author")
  const job = document.getElementById("job")
  const info = document.getElementById("info")
  
  const prevBtn = document.querySelector(".prev-btn")
  const nextbtn = document.querySelector(".next-btn")
  const randomBtn = document.querySelector(".random-btn")
  
  //set starting item
  let currentPerson = 0
  
  //load initial item
  window.addEventListener("DOMContentLoaded", () => {
    showPerson()
  })
  
  //show person
  function showPerson() {
    const person = reviews[currentPerson]
    img.src = person.img
    author.textContent = person.name
    job.textContent = person.job
    info.textContent = person.text
  }
  
  //show next person
  nextbtn.addEventListener('click', () => {
    currentPerson++
    if(currentPerson > reviews.length - 1){
      currentPerson = 0
    }
    showPerson()
  })
  
  //show prev person
  prevBtn.addEventListener('click', () => {
    currentPerson--
    if(currentPerson < 0 ) {
      currentPerson = reviews.length - 1
    }
    showPerson()
  })
  
  //random person
  randomBtn.addEventListener('click', () => {
    const randomPerson = Math.floor(Math.random() * reviews.length)
    currentPerson = randomPerson
    showPerson()
  })