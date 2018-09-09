'use strict';

window.renderStatistics = function (ctx, names, times) {
  var getRandom = function (min, max) {
    return Math.random() * (max - min + 1) + min;
  };
  var drawCloud = function (xPos, yPos, width, height) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(xPos + 10, yPos + 10, width, height); // shadow
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(xPos, yPos, width, height); // cloud
  };
  var drawCharts = function (posX, posY, width, height) {
    var randomColor = getRandom(0.2, 1);
    if (names[i].toLowerCase() === 'вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomColor + ')';
    }
    ctx.fillRect(posX, posY, width, height);
  };
  var drawInfo = function (arrayEl, coordY) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(
        arrayEl,
        Chart.WIDTH * i + Chart.SPACE_BETWEEN * i + Chart.START_X,
        coordY
    );
  };
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    START_X: 100,
    START_Y: 10
  };
  var Chart = {
    WIDTH: 40,
    START_X: 145,
    START_Y: 240,
    SPACE_BETWEEN: 50,
    GIST_HEIGHT: 150
  };
  drawCloud(Cloud.START_X, Cloud.START_Y, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText('Ура вы победили!', 115, 45);
  ctx.fillText('Список результатов:', 115, 65);
  var topTimes = 0;
  for (var i = 0; i <= times.length - 1; i += 1) { // top time in array
    if (times[i] > topTimes) {
      topTimes = Math.floor(times[i]);
    }
  }
  for (var j = 0; j <= names.length - 1; j += 1) {
    drawCharts(
        Chart.WIDTH * j + Chart.SPACE_BETWEEN * j + Chart.START_X,
        Chart.START_Y,
        Chart.WIDTH,
        -(Chart.GIST_HEIGHT * times[j]) / topTimes
    );
    drawInfo(Math.floor(times[j]), Chart.GIST_HEIGHT * 1.55 - (Chart.GIST_HEIGHT * times[j]) / topTimes);
    drawInfo(names[j], 260);
  }
};
