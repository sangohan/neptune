import js.html.Node;
import neptune.platform.html.HtmlPlatform.*;
import neptune.Neptune;

class HelloWorld implements Neptune 
{
    public function new() : Void
    {
    }

    public function cool() : Node
    {
        var isLeft = true;
        var x = 0;
        var left = <h2>This is a heading</h2>;

        function updateX() {
            x = x + 1;
        }

        var right = <div><button onclick={updateX}>Increment X</button></div>;

        function onClick() {
            isLeft = !isLeft;
        }

        return 
            <div>
                <button onclick={onClick}>Toggle Child</button>
                {isLeft ? left : right}
                <h1>{x}</h1>
            </div>;
    }
}