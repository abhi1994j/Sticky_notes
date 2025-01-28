const textArea = document.querySelector("textarea");
const color = document.getElementById('color');
const btn = document.querySelector(".bn27")
const rightContainer = document.querySelector(".right-container-notes")
const notAdded = document.querySelector(".notesNotAdded")

let userNote = "";

btn.addEventListener("click", () => {
    // console.log(textArea.value, color.value, btn);
    if(textArea.value== ''){
        alert("Enter some text");      
    }
    else{
        notAdded.style.display = "none";
        const notebox = document.createElement('div');
        rightContainer.appendChild(notebox)
        const para = document.createElement('p');
        notebox.appendChild(para)
        const btnEd = document.createElement('button')
        btnEd.classList.add("cross")
        btnEd.innerText = "X"
        notebox.appendChild(btnEd)     
        // console.log(rightContainer);
        para.innerText = textArea.value;
        textArea.value = "";
        notebox.style.backgroundColor = color.value;
        notebox.style.padding = "10px"
        removeNotes();
    }
});

function removeNotes(){
    const btnEd = document.querySelectorAll(".cross");
    btnEd.forEach((ele ,idx)=>{
        ele.addEventListener('click' , ()=>{
            ele.parentElement.remove();
            notAdded.style.display = "block";
            notAdded.style.textAlign = "center"
            // console.log();
        })
    })
   
}