const btnGenerateAdvise = document.getElementById("btn-generate-advise");
const adviseText = document.getElementById("advise");

btnGenerateAdvise.addEventListener("click", generateAdvise);

async function generateAdvise() {
    btnGenerateAdvise.style.pointerEvents = "none";
    btnGenerateAdvise.textContent = "LOADING!";

    try {
        
        const response = await fetch("https://api.adviceslip.com/advice");

        if(!response.ok) {
            throw new Error("Requisition failed!" + response.status);
        }

        const data = await response.json();

        adviseText.textContent = data.slip.advice;
    } catch (error) {
        console.error("Something went wrong!" + error);
    }

    btnGenerateAdvise.style.pointerEvents = "all";
    btnGenerateAdvise.textContent = "GENERATE!";
}