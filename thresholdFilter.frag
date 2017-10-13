precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float threshold;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec3 blue = vec3(51.0/255.0, 153.0/255.0, 255.0/255.0);
    if (color.a < threshold)
    {
       gl_FragColor = vec4(vec3(0.0), 1.0);
    }
    else
    {
       gl_FragColor = vec4(blue, 1.0);
    }
}
