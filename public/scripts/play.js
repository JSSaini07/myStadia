const imageContainer = document.getElementById("gameContent");

const socket = new WebSocket('ws://localhost:8000/connect');

const handleMessage = (message) => {
    const {data} = message;
    blobUtil.blobToDataURL(data).then((imageURL) => {
        imageContainer.src = imageURL;
    });
}

socket.onmessage = handleMessage;
