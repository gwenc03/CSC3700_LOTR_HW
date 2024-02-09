
function loadData() {
    let DOMRes = document.getElementById("sellout");
    let url = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php";
    let oStr = '<select name="chars" id="mySelect" >';
    let fRes = fetch(url)
        .then(res =>
            res.json())
        .then(data => {
            console.log("data=");console.log(data);

            for ( let i=0; i<data.length; i++ ){
                oStr += `<option value='${data[i].name}'>`;
                oStr += `${data[i].name}`;
                oStr += "</option>";
            }
            oStr += "</select>"
            DOMRes.innerHTML = oStr;
        }).catch(err => {
            oStr = "<span style=color:red> Error Cannot Connect!</span>";
            oStr += err;
            DOMRes.innerHTML = oStr;
        });
}

function findThisData(inChar, data){
    console.log("got")
    console.log(data.length)

    for ( let i= 0; i<data.length; i++ ){
        console.log ("charselect=" + inChar)
        // console.log ("data name="+ data[i].name)
        if (inChar == data[i].name){
            console.log ("got name="+ data[i].name)
            return data[i];
        } else if (inChar == "Boromir"){
            let bname = inChar.replace("Boramir","Boromir")
            return data[i+6];
        } else if (inChar == "Legalos"){
            let lname = inChar.replace("Legolas","Legalos")
            return data[i+2];
        }
    }
    console.log("else")
    return undefined;
}

function loadCharData(){
    let inChar = document.getElementById("mySelect").value;
    console.log("inChar="+inChar)

    let url = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php";
    let oStr = "";
    let fRes = fetch(url)
        .then(res =>
            res.json())
        .then(data => {
            // console.log("data=");console.log(data);
            console.log("data=");console.log(data);
            oStr += "<table class='charDetails'>";


            let charRecord = findThisData(inChar, data);
            // console.log("name=" + charRecord.name)
            let img = charRecord.img.replace("jpg","png")
            img = img.replace("boramir", "boromir")
            img = img.replace("legolas","legolis")

            if (charRecord == undefined){
                alert ("undefined")
            }

            if (charRecord.weakness == 0){
                oStr += "<th> "
                oStr += "id"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Name"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Race"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Age"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Strengths"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Image"
                oStr += "</th> "

                oStr += "<tr> "

                oStr += "<td>"
                oStr +=`id:${charRecord.id} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`name:${charRecord.name} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`race:${charRecord.race} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`age:${charRecord.age} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`${charRecord.strengths} `
                oStr += "</td>"

                oStr += "<td>"
                oStr += `<img id="charCard" src="${img}"> `
                oStr += "</td>"

                oStr += "</tr> "
            } else{
                oStr += "<th> "
                oStr += "id"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Name"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Race"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Age"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Strengths"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Weaknesses"
                oStr += "</th> "

                oStr += "<th> "
                oStr += "Image"
                oStr += "</th> "

                oStr += "<tr> "

                oStr += "<td>"
                oStr +=`id:${charRecord.id} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`name:${charRecord.name} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`race:${charRecord.race} `
                oStr += "</td>"

                oStr += "<td>"
                oStr +=`age:${charRecord.age} `
                oStr += "</td>"

                oStr += "<td id>"
                oStr +=`${charRecord.strengths} `
                oStr += "</td>"

                oStr += "<td>"

                const weak = charRecord.weakness;
                console.log("weak=" + weak);
                console.log("weakLength=" + weak.length);
                let oList = "<ol>"
                for(let i = 0; i < weak.length; i++){
                    oList = `<li id = 'weak2'> ${charRecord.weakness[i]}</li>`
                    oStr += oList;
                    oStr += "</ol>"
                }
                oStr += "</td>"

                oStr += "<td>"
                oStr += `<img id="charCard2" src="${img}"> `
                oStr += "</td>"

                oStr += "</tr>"
            }

            oStr += "</tr> "

            oStr += "</table>"
            DOMRes.innerHTML = oStr;
        }).catch(err => {
            oStr = "<span style=color:red> Error Cannot Connect!</span>";
            oStr += err;
            DOMRes.innerHTML = oStr;
        });
}