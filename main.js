let index =0; 
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const image = document.getElementById('val');
yes.addEventListener('click',()=>{
    image.setAttribute('src','2.gif');
    document.querySelector('h1').innerText = 'Thaank you';
    yes.remove()
    no.remove()
    hh = document.createElement('h1')
    hh.innerText = "I Love You ♡"
    document.querySelector('.container').appendChild(hh)
})
no.addEventListener('click',()=>{
    if(index==0){
        no.innerText = "u sure?";
        yes.style.padding='15px 30px'
        index++;
    }else{
        if(index==1){
            no.innerText = "think twice.";
            yes.style.padding='22px 39px'
            index++;
        }else{
            if(index==2){
                no.innerText = "ur breaking my heart";
                yes.style.padding='44px 60px'
                yes.style.fontSize = '30px'
                index++;
            }else{
                if(index==3){
                    no.innerText = "dont do it";
                    yes.style.padding='50px 68px';
                    yes.style.fontSize = '38px'
                    index++;
                }else{
                    if(index==4){
                        no.innerText = "click yes";
                        yes.style.padding='50px 68px';
                        yes.style.fontSize = '38px'
                        index++;
                    }else{
                        if(index==5){
                            no.innerText = "am getting angry";
                            yes.style.padding='50px 68px';
                            yes.style.fontSize = '38px'
                            index++;
                        }else{
                            if(index==6){
                                no.innerText = "K";
                                yes.style.padding='50px 68px';
                                yes.style.fontSize = '38px'
                                index++;
                            }else{
                                if(index == 7){
                                    yes.remove()
                                    no.remove()
                                    hh = document.createElement('h1')
                                    hh.innerText = "I hate u"
                                    document.querySelector('.container').appendChild(hh)
                                        image.setAttribute('src','3.png');
    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})