import QrScanner from "qr-scanner"
import LZString from "lz-string"

export function setupQrCodeScanner({
  codeSetter,
  videoId,
  logElementId,
  buttonId,
}: {
  codeSetter: (code: string) => void
  videoId: string
  logElementId: string
  buttonId: string
}): void {
  const onclick = async () => {
    const constraints = {
      video: {
        facingMode: "environment",
      },
      audio: false,
    }
    const stream = await navigator.mediaDevices.getUserMedia(constraints)

    if (stream) {
      const video = document.getElementById(videoId) as HTMLVideoElement
      video.srcObject = stream
      document.getElementById(logElementId)!.textContent = "Accessing camera..."
      video.play()
      document.getElementById(logElementId)!.textContent = "Scanning QR code..."
    } else {
      alert("Unable to access camera.")
      return
    }

    const qrScanner = new QrScanner(
      document.getElementById(videoId) as HTMLVideoElement,
      (result) => {
        const decompressed = LZString.decompressFromEncodedURIComponent(
          result.data,
        )
        if (decompressed !== null) {
          codeSetter(decompressed)
          document.getElementById(logElementId)!.textContent = decompressed
        }
        qrScanner.stop()
      },
      {
        onDecodeError: (error) => {
          document.getElementById(logElementId)!.textContent = `Error: ${error}`
        },
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
      },
    )
    await qrScanner.setCamera("environment")
    document.getElementById(logElementId)!.textContent = "Scanning QR code..."
    qrScanner.start()
    document.getElementById(logElementId)!.textContent = "QR code scanned."
  }
  document.getElementById(buttonId)!.addEventListener("click", onclick)
}
