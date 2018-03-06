var kamut = [];

function jarjestaFrendit(){
    kamut.sort();
    console.log(kamut);
    listaaKaverit();
}

function poistaKaveri() {
    document.getElementById("kamut");
    kamut.pop();
    console.log(kamut);
    listaaKaverit();
}


function lisaaKaveri(){

    var nimi = window.prompt("Anna kaverin nimi");
    kamut.push(nimi);
    console.log(kamut);

    listaaKaverit();
}

function listaaKaverit(){

    document.getElementById('kamut').innerHTML = '';

    for (var i=0; i < kamut.length; i++){
        document.getElementById('kamut').innerHTML += '<li>' + kamut[i] + '</li>';
    }
}

        function myFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("nimi_kentta");
            filter = input.value.toUpperCase();
            ul = document.getElementById("kamut");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
        
                }
            }
        }

// kamut.push('yeet');

