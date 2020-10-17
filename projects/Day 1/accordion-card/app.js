    const h4One = document.getElementById('h4One');
    const pOne = document.getElementById('pOne');
    const arrowOne = document.getElementById('arrowOne')
    console.log(h4One, pOne, arrowOne);

    const h4Two = document.getElementById('h4Two');
    const pTwo = document.getElementById('pTwo');
    const arrowTwo = document.getElementById('arrowTwo')
    console.log(h4Two, pTwo, arrowTwo);

    const h4Three = document.getElementById('h4Three');
    const pThree = document.getElementById('pThree');
    const arrowThree = document.getElementById('arrowThree')
    console.log(h4Three, pThree, arrowThree);

    const h4Four = document.getElementById('h4Four');
    const pFour = document.getElementById('pFour');
    const arrowFour = document.getElementById('arrowFour')
    console.log(h4Four, pFour, arrowFour);

    const h4Five = document.getElementById('h4Five');
    const pFive = document.getElementById('pFive');
    const arrowFive = document.getElementById('arrowFive')
    console.log(h4Five, pFive, arrowOne);
    
    h4One.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            h4One.style.transform = "translateY(0%)"
            pOne.style.visibility = "visible"
            h4One.style.fontWeight = 700;
            arrowOne.style.transform = "rotate(180deg)";
        }else{
            h4One.style.transform = "translateY(200%)"
            pOne.style.visibility = "hidden";
            h4One.style.fontWeight = 400;
            arrowOne.style.transform = "rotate(0deg)";
        }

    })

    h4Two.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            h4Two.style.transform = "translateY(0%)"
            pTwo.style.visibility = "visible"
            h4Two.style.fontWeight = 700;
            arrowTwo.style.transform = "rotate(180deg)";
        }else{
            h4Two.style.transform = "translateY(200%)"
            pTwo.style.visibility = "hidden";
            h4Two.style.fontWeight = 400;
            arrowTwo.style.transform = "rotate(0deg)";
        }

    })

    h4Three.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            h4Three.style.transform = "translateY(0%)"
            pThree.style.visibility = "visible"
            h4Three.style.fontWeight = 700;
            arrowThree.style.transform = "rotate(180deg)";
        }else{
            h4Three.style.transform = "translateY(200%)"
            pThree.style.visibility = "hidden";
            h4Three.style.fontWeight = 400;
            arrowThree.style.transform = "rotate(0deg)";
        }

    })

    h4Four.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            h4Four.style.transform = "translateY(0%)"
            pFour.style.visibility = "visible"
            h4Four.style.fontWeight = 700;
            arrowFour.style.transform = "rotate(180deg)";
        }else{
            h4Four.style.transform = "translateY(200%)"
            pFour.style.visibility = "hidden";
            h4Four.style.fontWeight = 400;
            arrowFour.style.transform = "rotate(0deg)";
        }

    })

    h4Five.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            h4Five.style.transform = "translateY(0%)"
            pFive.style.visibility = "visible";
            h4Five.style.fontWeight = 700;
            arrowFive.style.transform = "rotate(180deg)";
        }else{
            h4Five.style.transform = "translateY(200%)"
            pFive.style.visibility = "hidden";
            h4Five.style.fontWeight = 400;
            arrowFive.style.transform = "rotate(0deg)";
        }

    })

    let switcher = false;