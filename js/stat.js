'use strict';

var drawRect = function (ctx, x, y, width, height, color) {
  var currentColor = color || '#fff';
  ctx.fillStyle = currentColor;
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {

  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    START_X: 100,
    START_Y: 10,
    SHADOW_DIF: 10
  };

  var Chart = {
    WIDTH: 40,
    START_X: 145,
    START_Y: 240,
    SPACE_BETWEEN: 50,
    GIST_HEIGHT: 150
  };

  var Text = {
    TITLE_X: 115,
    TITLE_Y: 45,
    TITLE_SECOND_LINE: 20,
    INTERVAL: 1.55,
    NAMES_MARGIN: 260
  };

  drawRect( // draw shadow
      ctx,
      Cloud.START_X + Cloud.SHADOW_DIF,
      Cloud.START_Y + Cloud.SHADOW_DIF,
      Cloud.WIDTH,
      Cloud.HEIGHT,
      'rgba(0, 0, 0, 0.7)'
  );

  drawRect( // draw cloud
      ctx,
      Cloud.START_X,
      Cloud.START_Y,
      Cloud.WIDTH,
      Cloud.HEIGHT,
      '#fff'
  );

  drawText(ctx, 'Ура вы победили!', Text.TITLE_X, Text.TITLE_Y, '#000');
  drawText(ctx, 'Список результатов:', Text.TITLE_X, Text.TITLE_Y + Text.TITLE_SECOND_LINE, '#000');

  var topTimes = 0;

  for (var i = 0; i <= times.length - 1; i += 1) { // top time in array
    if (times[i] > topTimes) {
      topTimes = Math.floor(times[i]);
    }
  }

  for (var j = 0; j <= names.length - 1; j += 1) {
    var randomColor = Math.random().toFixed(2);

    if (names[j] === 'Вы') {
      var chartColor = 'rgba(255, 0, 0, 1)';
    } else {
      chartColor = 'rgba(0, 0, 255, ' + randomColor + ')';
    }

    drawRect(
        ctx,
        Chart.WIDTH * j + Chart.SPACE_BETWEEN * j + Chart.START_X,
        Chart.START_Y,
        Chart.WIDTH,
        -(Chart.GIST_HEIGHT * times[j]) / topTimes,
        chartColor
    );

    drawText(
        ctx,
        Math.floor(times[j]),
        Chart.WIDTH * j + Chart.SPACE_BETWEEN * j + Chart.START_X,
        Chart.GIST_HEIGHT * Text.INTERVAL - (Chart.GIST_HEIGHT * times[j]) / topTimes,
        '#000'
    );

    drawText(
        ctx,
        names[j],
        Chart.WIDTH * j + Chart.SPACE_BETWEEN * j + Chart.START_X,
        Text.NAMES_MARGIN,
        '#000'
    );
  }
};
