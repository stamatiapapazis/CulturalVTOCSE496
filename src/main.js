import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function () {

    await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    const path = window.location.pathname;
    if (path === '/') {
        document.getElementById('CavalryJacketButton').addEventListener('click', () => {
            window.location.href = '/CavalryJacket.html';
        });
    }

    else if (path === '/cavalryjacket') {

        document.getElementById('BackHomeButton').addEventListener('click', () => {
            window.location.href = '/';
        });

        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['a6eb2979-3850-444d-8464-278edb51156d'])

        session.applyLens(lenses[0])

        let currentFacingMode = 'user';
        let currentCameraType = 'front';
        let currentLens = 0;

        const startCamera = async (facingMode, cameraType) => {
            let mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: facingMode
                }
            });


            const source = createMediaStreamSource(mediaStream, {
                cameraType: cameraType
            });

            await session.setSource(source)
            session.source.setRenderSize(1000, 800)
            session.play()
        };
        await startCamera('user', 'front')

        document.getElementById('SwitchCameraButton').addEventListener('click', async () => {
            if (currentFacingMode === 'user') {
                currentFacingMode = 'environment';
                currentCameraType = 'back';
            }
            else {
                currentFacingMode = 'user';
                currentCameraType = 'front'
            }
            await startCamera(currentFacingMode, currentCameraType);
            session.applyLens(lenses[currentLens]);
        });
    }
})();
