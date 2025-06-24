document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("play-button");
  const volumeSlider = document.getElementById("volume-slider");

  const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "grey",
    progressColor: "#444",
    height: 120,
    barWidth: 2,
    responsive: true,
    cursorColor: "rgba(0,0,0,1)",
  });

  wavesurfer.load("/audio/A.wav");

  // 🔴🟢 Indicador Mix / Master (Semáforo)
  wavesurfer.on('audioprocess', () => {
    const currentTime = wavesurfer.getCurrentTime();
    const duration = wavesurfer.getDuration();
    const indicatorDot = document.getElementById('indicator-dot');
    const indicatorLabel = document.getElementById('indicator-label');

    if (indicatorDot && indicatorLabel) {
      if (currentTime < duration / 2) {
        indicatorDot.style.backgroundColor = '#00e676';
        indicatorLabel.textContent = 'Mix';
      } else {
        indicatorDot.style.backgroundColor = 'red';
        indicatorLabel.textContent = 'Master';
      }
    }
  });

  playBtn.addEventListener("click", () => {
    wavesurfer.playPause();
    playBtn.innerHTML = wavesurfer.isPlaying() ? "⏸ Pause" : "▶ Play";
  });

  volumeSlider.addEventListener("input", (e) => {
    wavesurfer.setVolume(e.target.value);
  });
});








document.addEventListener('DOMContentLoaded', () => {
  Plyr.setup('.js-player', {
    controls: ['play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'download']
  });
});