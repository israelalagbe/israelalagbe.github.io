let menu = document.querySelector(".header__menu");
let navbar = document.querySelector(".header__middle");
let close = document.querySelector(".header__close");
let link = document.querySelector(".header__link");
let projectWrapper = document.querySelector(".project__wrapper");
let modalSection = document.querySelector(".modal-section");
let projectBox = document.querySelectorAll(".project__box");

const $$ = (selector) => {
  /**
   * @type {HTMLElement}
   */
  const element = document.querySelector(selector);
  return {
    getHtml: () => {

      return element.innerHTML;
    },
    /**
     * 
     * @param {keyof CSSStyleDeclaration} key 
     * @param {string} prop 
     */
    setCss: (key, prop) => {
      element.style[key] = prop;
    },
    /**
     * 
     * @param {keyof CSSStyleDeclaration} key 
     */
    getCss: (key) => {
      return element.style[key];
    },

    setHtml: (html) => {
      element.innerHTML = html;
    },
    /**
     * 
     * @param {string} event 
     * @param {(e:Event)=>any} callback 
     */
    on: (event, callback) => {
      element.addEventListener(event, callback)
    }
  };
}


AOS.init();

menu.addEventListener("click", function (e) {
  setTimeout(function () {
    if (e.target.className === "header__menu") {
      navbar.style.display = "block";
    } else if (e.target.className === "close") {
      navbar.style.display = "none";
    }
  }, 200);
});

projectBox.forEach((item) => item.setAttribute('style', `height:${item.offsetWidth/2.2}px`))
window.addEventListener('resize', () => {
    projectBox.forEach((item) => item.setAttribute('style', `height:${item.offsetWidth/2.2}px`))
});

close.addEventListener("click", function (e) {
  if (e.target.className === "header__close") {
    closeMenu();
  }
});

navbar.addEventListener("click", function (e) {
  if (e.target.className === "header__link") {
    closeMenu();
  }
});

let closeMenu = function () {
  navbar.animate(
    [{
      transform: "translateY(0px)"
    }, {
      transform: "translateY(-2000px)"
    }], {
      duration: 500,
    },

    "linear"
  );
  setTimeout(function () {
    navbar.style.display = "none";
  }, 500);
};

projectWrapper.addEventListener("click", function (e) {
  console.log(e.target.classList)
  if (e.target.classList.contains("project__box")) {
    e.target.querySelector('a').click();
    return;
    
    if (e.target.classList.contains("riby")) {
      
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
     
      <img class="modal__image" src="/images/agent.png"/>
      </div>
          
        <div class="modal__info">
          <h3 class="modal__heading">
          Finance Life Technologies Limited (Riby)   
          </h3>
          <p class="modal__paragraph">
          Riby is a Digital Banking & Financial Services Platform for Cooperatives, Trade/Business Groups & Salary
          Earners in Company Groups.
       </p>
       <ul class="modal__details">
       <li>Worked on Riby Agent landing page</li>
       <li>
         Worked on Riby Agent Network Control Center(ANCC) for managing
         agent’s operations
       </li>
       <li>Maintained other landing pages across other Riby products.</li>
       <li>Worked on Riby Pay dashboard.</li>
       <li>Assigned tasks to interns, and managed their projects</li>
       <li>
         Worked on Riby Single Sign On (SSO) page used for authentication
         across all Riby products.
       </li>
     </ul>
        </div>
    </div>
    </div>`;
      modalSection.innerHTML = modalContent;
    }

    else if (e.target.classList.contains("skooleo")) {
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
      <img class="modal__image" src="images/skooleo.PNG"/>
      </div>
      <div class="modal__info">
      <h3 class="modal__heading">
      Skooleeo Technology   
      </h3>
      <p class="modal__paragraph">
      Skooleeo is a software as a service(SaaS) management app for schools to connect teachers, parents and
      students. With Skooleeo, teachers can manage classrooms better and students are able to optimize learning with
      parent’s engagement.
   </p>
   <ul class="modal__details">
   <li>Designed the whole software architecture and data structure for the back-end.</li>
   <li>
   Worked on the landing page
   </li>
   <li>Developed a role-based teacher, parent, school, and admin dashboard</li>
   <li>Optimized the back-end so it can scale for thousands of concurrent users.</li>
   
 </ul>
    </div>
    </div>
    </div>`;
      modalSection.innerHTML = modalContent;
    }


    else if (e.target.classList.contains("eachone")) {
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
      <img class="modal__image" src="images/eachone.PNG"/>
      </div>
      <div class="modal__info">
      <h3 class="modal__heading">
      Each One  
      </h3>
      <p class="modal__paragraph">
      The eachone.ng initiative is making it possible for 
      Nigerians to lift up fellow Nigerians in need. 
      It is a connector bridging the gap between 
      families in need and those who can provide assistance.
   </p>
   <ul class="modal__details">
   <li>Worked on Riby Agent landing page</li>
   <li>
     Worked on Riby Agent Network Control Center(ANCC) for managing
     agent’s operations
   </li>
   <li>Maintained other landing pages across other Riby products.</li>
   <li>Worked on Riby Pay dashboard.</li>
   <li>Assigned tasks to interns, and managed their projects</li>
   <li>
     Worked on Riby Single Sign On (SSO) page used for authentication
     across all Riby products.
   </li>
 </ul>
    </div>
    </div>
    </div>`;
      modalSection.innerHTML = modalContent;
    }

  }

});

modalSection.addEventListener("click", function (e) {
  if (e.target.className === "modal__close") {
    modalSection.innerHTML = ""
  }
})


console.log($$('.landing__icon--6').getCss('top'))

// $$('#contactForm').on('submit', (e)=>{
//   e.preventDefault();
//   alert("Hello")
// });

function onParticleLoaded() {
  const color = "#f00";
  
  tsParticles.load("tsparticles",{
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#000000"
      },
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
      "cure": false,
      "delay": 0,
      "enable": false,
      "infections": 0,
      "stages": []
    },
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": false,
          "mode": "push"
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse",
          "parallax": {
            "enable": false,
            "force": 60,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.8,
          "size": 40
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 400,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "speed": 1
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 1,
          "quantity": 1
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": false,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#33aa33",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#ffffff"
        },
        "consent": false,
        "distance": 150,
        "enable": true,
        "frequency": 1,
        "opacity": 0.4,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#00ff00"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 45,
          "value": 90
        },
        "attract": {
          "enable": false,
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "decay": 0,
        "distance": 0,
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 50
      },
      "opacity": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": {
          "min": 0.1,
          "max": 0.5
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 1,
          "sync": false,
          "destroy": "none",
          "minimumValue": 0.1,
          "startValue": "random"
        }
      },
      "reduceDuplicates": false,
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {
          "character": {
            "value": [
              "html",
              "css",
              "js",
              "react",
              "angular",
              "laravel",
              "vue",
              "c",
              "l",
              "e",
              "s"
            ],
            "font": "Verdana",
            "style": "",
            "weight": "400",
            "fill": true
          },
          "char": {
            "value": [
              "t",
              "s",
              "P",
              "a",
              "r",
              "t",
              "i",
              "c",
              "l",
              "e",
              "s"
            ],
            "font": "Verdana",
            "style": "",
            "weight": "400",
            "fill": true
          }
        },
        "type": "char"
      },
      "size": {
        "random": {
          "enable": false,
          "minimumValue": 1
        },
        "value": 16,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 10,
          "sync": false,
          "destroy": "none",
          "minimumValue": 10,
          "startValue": "random"
        }
      },
      "stroke": {
        "width": 1,
        "color": {
          "value": "#ffffff",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            }
          }
        }
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "themes": []
  });


  document.querySelectorAll('.landing__icon').forEach((item)=>{
    item.remove()
  });
}