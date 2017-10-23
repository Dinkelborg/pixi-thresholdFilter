precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float threshold;

void main(void)
{
    vec2 uvs = vTextureCoord.xy;

    vec4 color = texture2D(uSampler, vTextureCoord);
    /*if (color.a < threshold)
    {
       gl_FragColor = vec4(0.0);
    }
    else
    {
       gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
    }*/
    gl_FragColor = vec4(1.0,1.0,1.0,1.0);//color;
}
