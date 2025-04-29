import { useEffect } from "react"


export const Receiver = () => {
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'receiver'
            }));
        }
        startReceiving(socket);
    }, []);

    function startReceiving(socket: WebSocket) {
        const audio = document.createElement('audio');
        document.body.appendChild(audio);

        const pc = new RTCPeerConnection();
        // pc.ontrack = (event) => {
        //     console.log(event);
        //     audio.srcObject = new MediaStream([event.track]);
        //     audio.play();
        // }
        pc.ontrack = (event) => {
            console.log("Track event:", event);
          
            // Access the incoming track
            const incomingTrack = event.track;
            console.log("Track kind:", incomingTrack.kind);
          
            // Create a MediaStream with the incoming track
            const mediaStream = new MediaStream([incomingTrack]);
          
            // Assign the stream to an <audio> element
            const audioElement = document.querySelector("audio");
            if (audioElement) {
              audioElement.srcObject = mediaStream;
            }
          
            // Prompt user to enable playback
            const enableAudioButton = document.createElement("button");
            enableAudioButton.textContent = "Enable Audio";
            enableAudioButton.onclick = () => {
              audioElement?.play().catch((error) => {
                console.error("Error playing audio:", error);
              });
              enableAudioButton.remove(); // Remove button after use
            };
            document.body.appendChild(enableAudioButton);
          };
          
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createOffer') {
                pc.setRemoteDescription(message.sdp).then(() => {
                    pc.createAnswer().then((answer) => {
                        pc.setLocalDescription(answer);
                        socket.send(JSON.stringify({
                            type: 'createAnswer',
                            sdp: answer
                        }));
                    });
                });
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(message.candidate);
            }
        }
    }

    return <div>
        
    </div>
}