// @ts-nocheck

import { 
    FluexGL, 
    WebGPURenderer, 
    EnsureWebGPU, 
    WebGPURendererScene, 
    Thread, 
    PerspectiveCamera, 
    CubeGeometry 
} from "@fluexgl";

FluexGL.options.debugger.breakOnError = true;

(async function () {

    const state = await EnsureWebGPU();

    if(!state.ok) return alert(state.error);

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

    thread.AddEventListener("update", function () {
        try {

            // cube.UpdateUniforms(renderer.gpuDevice);
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