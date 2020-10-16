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
            pOne.style.display = "contents"
            h4One.style.fontWeight = 700;
            arrowOne.style.transform = "rotate(180deg)";
        }else{
            pOne.style.display = "none";
            h4One.style.fontWeight = 400;
            arrowOne.style.transform = "rotate(0deg)";
        }

    })

    h4Two.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            pTwo.style.display = "contents"
            h4Two.style.fontWeight = 700;
            arrowTwo.style.transform = "rotate(180deg)";
        }else{
            pTwo.style.display = "none";
            h4Two.style.fontWeight = 400;
            arrowTwo.style.transform = "rotate(0deg)";
        }

    })

    h4Three.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            pThree.style.display = "contents"
            h4Three.style.fontWeight = 700;
            arrowThree.style.transform = "rotate(180deg)";
        }else{
            pThree.style.display = "none";
            h4Three.style.fontWeight = 400;
            arrowThree.style.transform = "rotate(0deg)";
        }

    })

    h4Four.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            pFour.style.display = "contents"
            h4Four.style.fontWeight = 700;
            arrowFour.style.transform = "rotate(180deg)";
        }else{
            pFour.style.display = "none";
            h4Four.style.fontWeight = 400;
            arrowFour.style.transform = "rotate(0deg)";
        }

    })

    h4Five.addEventListener('click', () =>{
        
        switcher = !switcher

        if(switcher === true){
            pFive.style.display = "contents";
            h4Five.style.fontWeight = 700;
            arrowFive.style.transform = "rotate(180deg)";
        }else{
            pFive.style.display = "none";
            h4Five.style.fontWeight = 400;
            arrowFive.style.transform = "rotate(0deg)";
        }

    })

    let switcher = false;