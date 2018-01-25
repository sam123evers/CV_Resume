var reactCanvas = document.getElementById('react-canvas')
var htmlCanvas = document.getElementById('html-css-canvas')
var backboneCanvas = document.getElementById('backbone-canvas')
var expressCanvas = document.getElementById('express-canvas')

backboneCanvas.width = 200
backboneCanvas.height = 200

expressCanvas.width = 200
expressCanvas.height = 200

htmlCanvas.width = 200
htmlCanvas.height = 200

reactCanvas.width = 200
reactCanvas.height = 200

//-=-=-=-=-=-=-=-REACT CANVAS-=-=-=-=-=-=-=-=-=-

var reactCTX = reactCanvas.getContext('2d')
reactCTX.lineWidth = 20;
reactCTX.strokeStyle = '#102B3F';
reactCTX.beginPath();
reactCTX.arc(100, 100, 80, (Math.PI/180)*270, (Math.PI/180)*200, false);
reactCTX.stroke();

reactCTX.strokeStyle = "grey";
reactCTX.beginPath()
reactCTX.arc(100, 100, 80, (Math.PI/180)*200, (Math.PI/180)*270, false);
reactCTX.stroke()
reactCTX.font = '48px Helvetica';
reactCTX.fillText('75%', 62.5, 115);

//-=-=-=-=-=-=-=-=-=-=-=HTML/CSS CANVAS--=-=-=-=-=-=-=-=

var htmlCTX = htmlCanvas.getContext('2d');
htmlCTX.lineWidth = 20;
htmlCTX.strokeStyle = '#102B3F';
htmlCTX.beginPath();
htmlCTX.arc(100, 100, 80, (Math.PI/180)*270, (Math.PI/180)*220, false);
htmlCTX.stroke();
htmlCTX.strokeStyle = 'grey';
htmlCTX.beginPath()
htmlCTX.arc(100, 100, 80, (Math.PI/180)*220, (Math.PI/180)*270, false);
htmlCTX.stroke();
htmlCTX.font = '48px Helvetica';
htmlCTX.fillText('85%', 62.5, 115);

//-=-=-=-=-=-=-=-=-=-=-Backbone Canvas =-=-=-=-=-=-=-=-=-=-=-=-

var backboneCTX = backboneCanvas.getContext('2d')
backboneCTX.lineWidth = 20
backboneCTX.strokeStyle = '#102B3F';
backboneCTX.beginPath();
backboneCTX.arc(100, 100, 80, (Math.PI/180)*270, (Math.PI/180)*170, false)
backboneCTX.stroke()

backboneCTX.strokeStyle = "grey";
backboneCTX.beginPath();
backboneCTX.arc(100, 100, 80, (Math.PI/180)*170, (Math.PI/180)*270, false)
backboneCTX.stroke()

backboneCTX.font = '48px Helvetica'
backboneCTX.fillText('70%', 62.5, 115)

//=-=-=-=-=-=-=-=-=-=-=-=-Express Canvas =-=-=-=-=-=-=-==-=-=-=-=

var expressCTX = expressCanvas.getContext('2d')
expressCTX.lineWidth = 20
expressCTX.strokeStyle = '#102B3F';
expressCTX.beginPath();
expressCTX.arc(100, 100, 80, (Math.PI/180)*270, (Math.PI/180)*130, false);
expressCTX.stroke()

expressCTX.strokeStyle = 'grey';
expressCTX.beginPath();
expressCTX.arc(100, 100, 80, (Math.PI/180)*130, (Math.PI/180)*270, false);
expressCTX.stroke();
expressCTX.font = '48px Helvetica'
expressCTX.fillText('60%', 62.5, 115)

