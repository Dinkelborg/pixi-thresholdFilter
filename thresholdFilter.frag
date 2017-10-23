precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float threshold;

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    if(color.a < threshold)
    {
        color.a = 0.0;
    }
    gl_FragColor = color;//vec4(1.0,1.0,1.0,1.0);//texture2D( uSampler, vTextureCoord );
}
