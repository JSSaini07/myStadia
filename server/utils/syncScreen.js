const screenshot = require('screenshot-desktop')

const syncScreen = (connectedClient) => {
    const sendImage = () => {
        screenshot().then((img) => {
            connectedClient.send(img);
            setTimeout(sendImage, 1000);
        }).catch((err) => {
            console.log(err);
        })
    }
    sendImage();
}

module.exports = syncScreen;
