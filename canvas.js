window.addEventListener("load", ()=>{
    const canvas = document.querySelector("#canvas"); // Selector by Id
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /*ctx.fillRect(100,100,500,500);
    ctx.strokeStyle="rgba(255, 0, 0, 0.5)";
    ctx.strokeRect(100, 700, 500,500);
    ctx.strokeStyle="rgba(85,134,72,0.5)";
    ctx.lineWidth = 10
    ctx.strokeRect(900, 700, 500,500);
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 100);
    ctx.lineTo(100, 100);
    ctx.stroke();
    */
    // Variables
    let paiting = false;

    function startPosition(e){
        paiting = true;
        draw(e);
    }
    function finishPosition(){
        paiting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!paiting) return;
        ctx.lineWidth = 10;
        ctx.lineCap="round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle="red"
        ctx.stroke(); // Essential to visualize
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    }
    // EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw)
})