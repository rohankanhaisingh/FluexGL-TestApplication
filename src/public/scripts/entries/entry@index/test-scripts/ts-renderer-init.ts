import { FluexGL, WebGPURenderer, SimpleTriangle, WebGPURendererScene, Thread, PerspectiveCamera } from "../../../../../../../FluexGL/lib/src/index";

FluexGL.options.debugger.breakOnError = true;

(async function() {

    const renderer = new WebGPURenderer({
        msaaSampleCount: 4,
    });
    const scene = new WebGPURendererScene(renderer);
    const camera = new PerspectiveCamera(innerWidth / innerHeight);

    const thread = new Thread();

    renderer.AppendCanvasToElement(document.querySelector(".scene-wrapper") as HTMLDivElement);
    renderer.SetCanvasSizeRelativeToWindow(0, true);

    await renderer.Initialize();

    const triangle = new SimpleTriangle();
    scene.AddRenderable(triangle);
    
    await scene.Prepare(camera);

    thread.AddEventListener("update", function() {

        try {
            
            renderer.Render(scene, camera);


        } catch(err) {
            thread.Stop();
            console.log(err);
        }
    });

    thread.Start();
    
})();