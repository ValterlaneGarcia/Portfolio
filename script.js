particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff4000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

document.addEventListener("DOMContentLoaded", () => {
  var alterar = ["Engineer Software","Front-end Developer","Analyst","Software Developer"];
  var num = 0;

  document.getElementById("Nomes").innerHTML = alterar[num];

  function TransNome(){
      switch(num){
          case 0:
              num = 1;
              break;
          case 1:
              num = 2;
              break;
          case 2:
              num = 3;
              break;
          case 3:
            num = 0;
              break;
      }
      document.getElementById("Nomes").innerHTML = alterar[num];

      const titulo = document.getElementById("Nomes");
      typeWrite(titulo);
  }

  setInterval(TransNome, 1000*2);

  const titulo = document.getElementById("Nomes");
  typeWrite(titulo);
});

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
      setTimeout(() => {
          elemento.innerHTML += letra;
      }, 75 * i);
  });
}

window.sr = ScrollReveal({reset: true});

sr.reveal('.container',{
  rotate: {x:0 , y:80, z:0},
  duration: 1000
});

sr.reveal('.NomeProjeto',{duration: 1000
});

sr.reveal('.containerSobre',{duration: 1000
});

function ProgressBar(a){
          var barra = ['step01','step02','step03'];
          var c = document.getElementById('line-process');
          
          const section1 = document.getElementById("section1");
          const section2 = document.getElementById("section2");
          const section3 = document.getElementById("section3");
          
          for (var i = 0; i < barra.length; i++) {
               var li = document.getElementById(barra[i]);

          if (i === a) {
              li.classList.add('active');

              switch(a) {
                case 0:
                        c.style.cssText = 'width: 5%';
                        section1.style.display = "flex";
                        section2.style.display = "none";
                        section3.style.display = "none";
                         break;

                case 1:
                        c.style.cssText = 'width: 50%';
                        section1.style.display = "none";
                        section2.style.display = "flex";
                        section3.style.display = "none";
                        break;
                case 2:
                        c.style.cssText = 'width: 100%';
                        section1.style.display = "none";
                        section2.style.display = "none";
                        section3.style.display = "flex";
                        break;
}

                       } else {

              li.classList.remove('active');
         }
     }
};

function paginaPipFiscal() {
  window.location.href = "PIP FISCAL.html";
}

function paginaLogin() {
  window.location.href = "https://github.com/ValterlaneGarcia/TELA-DE-LOGIN";
}


function infomation() {
  let elements = document.getElementsByClassName('info');
  
  // Iterar sobre todos os elementos com a classe 'info'
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = 'block';
  }
}

function cvbaixar(){
  window.location.href = 'https://docs.google.com/document/d/11jmIKfstyt7i7UtJ_lC1vKsBt7t4sVao/export?format=pdf';
}