precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;
uniform float threshold;

void main()
{
    /*if (color.a < threshold)
    {
       gl_FragColor = vec4(0.0);
    }
    else
    {
       gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
    }*/
    gl_FragColor = texture2D( uSampler, vTextureCoord );
}
