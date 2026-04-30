import { render } from "preact"
import QrScanner from "qr-scanner"

const onclick = async () => {
  const constraints = {
    video: {
      facingMode: "environment",
    },
    audio: false,
  }
  const stream = await navigator.mediaDevices.getUserMedia(constraints)

  if (stream) {
    const video = document.getElementById("qr-video") as HTMLVideoElement
    video.srcObject = stream
    document.getElementById("result")!.textContent = "カメラにアクセスしました"
    video.play()
    document.getElementById("result")!.textContent = "QRコードをスキャンします"
  } else {
    alert("カメラにアクセスできませんでした")
    return
  }

  const qrScanner = new QrScanner(
    document.getElementById("qr-video") as HTMLVideoElement,
    (result) => {
      document.getElementById("result")!.textContent = result.data
      qrScanner.stop()
    },
    {
      onDecodeError: (error) => {
        document.getElementById("result")!.textContent = `Error: ${error}`
      },
      preferredCamera: "environment",
      highlightScanRegion: true,
      highlightCodeOutline: true,
    },
  )
  await qrScanner.setCamera("environment")
  document.getElementById("result")!.textContent =
    "QRコードをスキャンしています..."
  qrScanner.start()
  document.getElementById("result")!.textContent = "QRコードをスキャン中..."
}
document.getElementById("scan-button")!.addEventListener("click", onclick)

function Loader() {
  return (
    <>
      <div>Loading...</div>
    </>
  )
}

render(<Loader />, document.getElementById("root")!)
