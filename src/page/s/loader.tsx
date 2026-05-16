import { signal } from "@preact/signals"
import { render } from "preact"
import QrScanner from "qr-scanner"
import { Shiba11 } from "../shiba11"
import LZString from "lz-string"

const code = signal(
  JSON.stringify([
    [1, "html"],
    [2, "p"],
    [3, "static_text", "Hello, World."],
    [1, "end"],
  ]),
)

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
    document.getElementById("result")!.textContent = "Accessing camera..."
    video.play()
    document.getElementById("result")!.textContent = "Scanning QR code..."
  } else {
    alert("Unable to access camera.")
    return
  }

  const qrScanner = new QrScanner(
    document.getElementById("qr-video") as HTMLVideoElement,
    (result) => {
      code.value = document.getElementById("result")!.textContent =
        LZString.decompressFromEncodedURIComponent(result.data)
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
  document.getElementById("result")!.textContent = "Scanning QR code..."
  qrScanner.start()
  document.getElementById("result")!.textContent = "QR code scanned."
}
document.getElementById("scan-button")!.addEventListener("click", onclick)

function Loader() {
  return (
    <>
      <div>
        <Shiba11 code={code.value} />
      </div>
    </>
  )
}

render(<Loader />, document.getElementById("root")!)
