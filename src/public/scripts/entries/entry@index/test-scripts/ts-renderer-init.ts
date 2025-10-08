import { FluexGL, WebGPURenderer } from "../../../../../../../FluexGL/lib/src/index";

FluexGL.options.debugger.breakOnError = true;

(async function() {

    const renderer = new WebGPURenderer();

    renderer.AppendCanvasToElement(document.querySelector(".scene-wrapper") as HTMLDivElement);
    renderer.SetCanvasSizeRelativeToWindow(0, true);

    await renderer.Initialize();

    console.log(renderer);

})();