var slideIndex = 0;
        showSlides();
        
        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 7000); // Change image every 2 seconds
        }


        function myFunction9() {

            var x = document.getElementById("Mobile-menu");
            x.style.opacity = 0;
            if (x.style.visibility === "visible") {
                      document.getElementById("Mobile-menu").style.visibility = "hidden";
            } else {                                      
              x.style.visibility = "visible";
              x.style.opacity = 1;
            }
          }




          function myFunction99() {

            var x = document.getElementById("Mobile-menu");
            x.style.opacity = 1;
            if (x.style.visibility === "visible") {
                      document.getElementById("Mobile-menu").style.visibility = "hidden";
            } else {                                      
              x.style.visibility = "hidden";
              x.style.opacity = 0;
            }
          }



          
          

          myFunction1();
          function myFunction1(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(b.style.visibility == "hidden"){
              b.style.visibility = "visible";

              a.style.visibility = "hidden";
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              h.style.visibility = "hidden";
            }
          }

            myFunction2();
          function myFunction2(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(c.style.visibility == "hidden"){
              c.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              e.style.visibility = "hidden";
            }

          }

          myFunction3();
          function myFunction3(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(d.style.visibility == "hidden"){
              d.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              c.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              b.style.visibility = "hidden";
            }

          }

          myFunction4();
          function myFunction4(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(e.style.visibility == "hidden"){
              e.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              d.style.visibility = "hidden";
              c.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              c.style.visibility = "hidden";
            }

          }

          myFunction5();
          function myFunction5(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(f.style.visibility == "hidden"){
              f.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              c.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              g.style.visibility = "hidden";
            }

          }

          myFunction6();
          function myFunction6(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(g.style.visibility == "hidden"){
              g.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              c.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              a.style.visibility = "hidden";
            }

          }

          myFunction7();
          function myFunction7(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(h.style.visibility == "hidden"){
              h.style.visibility = "visible";

              a.style.visibility = "hidden";
              b.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              c.style.visibility = "hidden";
            }
            else{
              f.style.visibility = "hidden";
            }

          }

          myFunction();
          function myFunction(){
            
            var a = document.getElementById("Detail-1");
            var b = document.getElementById("Detail-2");
            var c = document.getElementById("Detail-3");
            var d = document.getElementById("Detail-4");
            var e = document.getElementById("Detail-5");
            var f = document.getElementById("Detail-6");
            var g = document.getElementById("Detail-7");
            var h = document.getElementById("Detail-8");
            
            if(a.style.visibility == "hidden"){
              a.style.visibility = "visible";

              b.style.visibility = "hidden";
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
              e.style.visibility = "hidden";
              f.style.visibility = "hidden";
              g.style.visibility = "hidden";
              h.style.visibility = "hidden";
            }
            else{
              c.style.visibility = "hidden";
            }
          }





          mySlider();
          function mySlider(){
            var i;
            var s = document.getElementById("Doc-cards-main");
              if(s.style.transform == "translate3d(0px, 0px, 0px)"){
                s.style.transform = "translate3d(-400px, 0px, 0px)";
                s.style.transition = "transform 1200ms ease 0s";
              }
                else if(s.style.transform == "translate3d(-400px, 0px, 0px)"){
                  s.style.transform = "translate3d(-800px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-800px, 0px, 0px)"){
                  s.style.transform = "translate3d(-1200px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-1200px, 0px, 0px)"){
                  s.style.transform = "translate3d(-1600px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-1600px, 0px, 0px)"){
                  s.style.transform = "translate3d(-2000px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-2000px, 0px, 0px)"){
                  s.style.transform = "translate3d(-2400px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-2400px, 0px, 0px)"){
                  s.style.transform = "translate3d(-2800px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-2800px, 0px, 0px)"){
                  s.style.transform = "translate3d(-3200px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-3200px, 0px, 0px)"){
                  s.style.transform = "translate3d(-3600px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-3600px, 0px, 0px)"){
                  s.style.transform = "translate3d(-4000px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-4000px, 0px, 0px)"){
                  s.style.transform = "translate3d(-4400px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-4400px, 0px, 0px)"){
                  s.style.transform = "translate3d(-4800px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-4800px, 0px, 0px)"){
                  s.style.transform = "translate3d(-5200px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-5200px, 0px, 0px)"){
                  s.style.transform = "translate3d(-5600px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-5600px, 0px, 0px)"){
                  s.style.transform = "translate3d(-6000px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-6000px, 0px, 0px)"){
                  s.style.transform = "translate3d(-6400px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-6400px, 0px, 0px)"){
                  s.style.transform = "translate3d(-6800px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else if(s.style.transform == "translate3d(-6800px, 0px, 0px)"){
                  s.style.transform = "translate3d(-7200px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                else{
                  s.style.transform = "translate3d(0px, 0px, 0px)";
                  s.style.transition = "transform 1200ms ease 0s";
                }
                setTimeout(mySlider, 7000);
              }
            
            // }

            

              
            

              function colorChange(){
                
                var m = document.getElementById("Lab-card");
                m.style.background = "#5c6895";

              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange0(){
                
                var l = document.getElementById("Psycho-card");
                l.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange2(){
                
                var n = document.getElementById("Dental-card");
                n.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange3(){
                
                var o = document.getElementById("Cardio-card");
                o.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange4(){
                
                var p = document.getElementById("card-1");
                p.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange5(){
                
                var q = document.getElementById("card-2");
                q.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }


              function colorChange6(){
                
                var r = document.getElementById("card-3");
                r.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var s = document.getElementById("card-4");
              s.style.background = "#F6F7F5";
              var t = document.getElementById("card-4");
              t.style.background = "#F6F7F5";
              }



              function colorChange7(){
                
                var s = document.getElementById("card-4");
                s.style.background = "#5c6895";

              var m = document.getElementById("Lab-card");
              m.style.background = "#F6F7F5";
              var l = document.getElementById("Psycho-card");
              l.style.background = "#F6F7F5";
              var n = document.getElementById("Dental-card");
              n.style.background = "#F6F7F5";
              var o = document.getElementById("Cardio-card");
              o.style.background = "#F6F7F5";
              var p = document.getElementById("card-1");
              p.style.background = "#F6F7F5";
              var q = document.getElementById("card-2");
              q.style.background = "#F6F7F5";
              var r = document.getElementById("card-3");
              r.style.background = "#F6F7F5";
              
              }

























































































            // function mySlider2(){
            //   var i;
            //   var s = document.getElementById("Doc-card-1");

            // for(i = 0; i < s.length; i++){
            //   s[i].style.transform = "translate3d(-400)"
            // }
            // }



            
          
          // myDepartment();
          // function myDepartment(){
          //   var i;
          //   var y = document.getElementById("Detail-1");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment2();
          // function myDepartment2(){
          //   var i;
          //   var y = document.getElementById("Detail-2");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment3();
          // function myDepartment3(){
          //   var i;
          //   var y = document.getElementById("Detail-3");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment4();
          // function myDepartment4(){
          //   var i;
          //   var y = document.getElementById("Detail-4");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment5();
          // function myDepartment5(){
          //   var i;
          //   var y = document.getElementById("Detail-5");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment6();
          // function myDepartment6(){
          //   var i;
          //   var y = document.getElementById("Detail-6");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment7();
          // function myDepartment7(){
          //   var i;
          //   var y = document.getElementById("Detail-7");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }

          // myDepartment8();
          // function myDepartment8(){
          //   var i;
          //   var y = document.getElementById("Detail-8");            
          //   if(y.style.visibility === "hidden"){
          //     y.style.visibility = "visible";
          //   }
          //   else{
          //     y.style.visibility = "hidden";
          //   }
          // }



          

          
























          // if(x[1].style.active == true){
          //   y[1].style.opacity = 1;
          // }
          // else if(x[2].style.active == true){
          //   y[2].style.opacity = 1;
          // }
          // else if(x[3].style.active == true){
          //   y[3].style.opacity = 1;
          // }
          // else if(x[4].style.active == true){
          //   y[4].style.opacity = 1;
          // }
          // else if(x[5].style.active == true){
          //   y[5].style.opacity = 1;
          // }
          // else if(x[6].style.active == true){
          //   y[6].style.opacity = 1;
          // }
          // else if(x[7].style.active == true){
          //   y[7].style.opacity = 1;
          // }
          // else if(x[8].style.active == true){
          //   y[8].style.opacity = 1;
          // }
          // else{
          //   x[1].style.opacity = 1;
          // }





          hoverChange();
          function hoverChange(){

            var w = document.getElementsByClassName("department-tab");
            w.style.hover.background = "#5c6896";
          }