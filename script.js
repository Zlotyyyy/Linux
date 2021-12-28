function renderTime(){

    // Data
    var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000){
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Niedziela","Sobota","Piątek","Czwartek","Środa","Wtorek","Poniedziałek")
        var montharray = new Array("Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień")
    // Data koniec


    // Czas
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h==24){
            h=0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }
        
        if(m<10){
            m= "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }

        var Data = document.getElementById("data");
        Data.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
        Data.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;

        var Godzina = document.getElementById("godzina");
        Godzina.textContent = "" + " " + " " +h+ ":" +m+ ":" +s;
        Godzina.innerText = "" + " " + " " +h+ ":" +m+ ":" +s;



        // + " " + " " +h+ ":" +m+ ":" +s
        setTimeout("renderTime()", 1000);   
    }
renderTime();