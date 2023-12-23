const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');

//  Select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('Not found a media streaming at now.');
  }
}

btn.addEventListener('click', async () => {
  // Disable
  btn.disabled = true;
  // Start PiP
  await videoElement.requestPictureInPicture();
  // Reset
  btn.disabled = false;
});

selectMediaStream();
