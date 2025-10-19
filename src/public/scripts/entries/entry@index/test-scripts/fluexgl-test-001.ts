import { 
    FluexGL, 
    WebGPURenderer, 
    SimpleTriangle, 
    WebGPURendererScene, 
    Thread, 
    PerspectiveCamera, 
    CubeGeometry 
} from "@fluexgl";

import {
    
} from "@fluexgl/audio";

FluexGL.options.debugger.breakOnError = true;

(async function () {

    const renderer = new WebGPURenderer({ msaaSampleCount: 4 });
    const scene = new WebGPURendererScene(renderer);
    const thread = new Thread();

    const camera = new PerspectiveCamera(innerWidth / innerHeight);

    camera.SetPosition(0, 0, 3);
    camera.LookAt(0, 1, 0);

    renderer.AppendCanvasToElement(document.querySelector(".scene-wrapper") as HTMLDivElement);
    renderer.SetCanvasSizeRelativeToWindow(0, true);

    await renderer.Initialize();

    const cube = new CubeGeometry();
    scene.AddRenderable(cube);
    
    await scene.Prepare(camera);

    let t = 0;
    
    thread.AddEventListener("update", function () {
        try {
            t += 0.016; 

            const c = Math.cos(t), s = Math.sin(t);
            const model = new Float32Array([
                c, 0, s, 0,
                0, 1, 0, 0,
                -s, 0, c, 0,
                0, 0, 0, 1,
            ]);


            const vp = camera.viewProjection as Float32Array;
            const mvp = new Float32Array(16);

            for (let r = 0; r < 4; r++) {
                for (let k = 0; k < 4; k++) {
                    let sum = 0;
                    for (let i = 0; i < 4; i++) sum += vp[i * 4 + r] * model[k * 4 + i];
                    mvp[k * 4 + r] = sum;
                }
            }

            cube.UpdateUniforms(renderer.gpuDevice, mvp);
            renderer.Render(scene, camera);
        } catch (err) {
            thread.Stop();
            console.error(err);
        }
    });

    addEventListener("resize", () => {
        
        renderer.SetCanvasSizeRelativeToWindow(0, true);
        camera.SetAspect?.(innerWidth / innerHeight);
    });

    thread.Start();

})();