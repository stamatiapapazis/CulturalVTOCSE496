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
        document.getElementById('TShirtButton').addEventListener('click', () => {
            window.location.href = '/TShirts.html';
        });

        document.getElementById('SweatshirtButton').addEventListener('click', () => {
            window.location.href = '/Sweatshirts.html';
        });

        document.getElementById('HoodieButton').addEventListener('click', () => {
            window.location.href = '/Hoodies.html';
        });
    }

    else if (path === '/tshirts') {

        document.getElementById('BackHomeButton').addEventListener('click', () => {
            window.location.href = '/';
        });

        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['10715257-0fb4-4e6d-96a6-62185e12e129'])

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
            session.source.setRenderSize(500, 800)
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

        document.getElementById('RedTShirt').addEventListener('click', () => {
            session.applyLens(lenses[0]);
            currentLens = 0;
        });

        document.getElementById('GreyTShirt').addEventListener('click', () => {
            session.applyLens(lenses[2]);
            currentLens = 2;
        });

        document.getElementById('WhiteTShirt').addEventListener('click', () => {
            session.applyLens(lenses[1]);
            currentLens = 1;
        });
    }

    else if (path === '/sweatshirts') {

        document.getElementById('BackHomeButton').addEventListener('click', () => {
            window.location.href = '/';
        });


        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['024cac86-11bb-4278-a15b-624766b19f24'])

        session.applyLens(lenses[2])

        let currentFacingMode = 'user';
        let currentCameraType = 'front';
        let currentLens = 2;

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
            session.source.setRenderSize(500, 800)
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

        document.getElementById('RedSweatshirt').addEventListener('click', () => {
            session.applyLens(lenses[2]);
            currentLens = 2;
        });

        document.getElementById('GreySweatshirt').addEventListener('click', () => {
            session.applyLens(lenses[1]);
            currentLens = 1;
        });

        document.getElementById('WhiteSweatshirt').addEventListener('click', () => {
            session.applyLens(lenses[0]);
            currentLens = 0;
        });
    }

    else if (path === '/hoodies') {

        document.getElementById('BackHomeButton').addEventListener('click', () => {
            window.location.href = '/';
        });


        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['70fae489-5e08-45f1-9723-968db5e445a0'])

        session.applyLens(lenses[1])

        let currentFacingMode = 'user';
        let currentCameraType = 'front';
        let currentLens = 1;

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
            session.source.setRenderSize(500, 800)
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

        document.getElementById('RedHoodie').addEventListener('click', () => {
            session.applyLens(lenses[1]);
            currentLens = 1;
        });

        document.getElementById('GreyHoodie').addEventListener('click', () => {
            session.applyLens(lenses[2]);
            currentLens = 2;
        });

        document.getElementById('WhiteHoodie').addEventListener('click', () => {
            session.applyLens(lenses[0]);
            currentLens = 0;
        });
    }

})();
