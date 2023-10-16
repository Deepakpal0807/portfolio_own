let name = document.body.querySelector(".names").firstElementChild;
console.log(name);

let ani = document.querySelector(".secondname");
console.log(ani);
let ans1 = document.querySelector(".prsnlinfo");
// console.log(ans1);
let out = "Hello, I'm Deepak Pal,";
// // for( let i=0;i<out.length;i++){
// //     console.log(out[i]);
// //

let i = 0;
let flag = false;
let id = setInterval(() => {
    name.innerHTML += out[i];
    i++;
    if (i == out.length) {
        
        Anima();
        
        clearInterval(id);
    }
}, 250);

let dev = "frontend developer ";
async function Anima() {
    let i = 0;
    await setTimeout(() => {
        let id = setInterval(() => {
            ani.innerHTML += dev[i];
            i++;
            if (i == dev.length) {
                
                ani.innerHTML = "";
                dev = "Programmer ";
                
                setTimeout(()=>{

                    clearInterval(id);
                    },10);
                
            }
        }, 200);
    }, 0)
    await setTimeout(() => {
       let  i = 0;
        let id = setInterval(() => {
            ani.innerHTML += dev[i];
            i++;
            if (i == dev.length) {
                ani.innerHTML="";
                dev = " frontend developer ";
                Anima();
                setTimeout(() => {
                    clearInterval(id);
                }, 100);
            }
        }, 200);
    },3900)
  

}

let out1 = "I am always open to different opportunities, curious about learning new technologies and undertaking to explore other domains as much as possibleLooking ahead to learn new skills and bring out technological developments.";
setTimeout(() => {


    let j = 0;
    let id1 = setInterval(() => {
        ans1.innerHTML += out1[j];
        j++;
        if (j == out1.length) {
            clearInterval(id1);
        }

    }, 100);
}, 10000)



