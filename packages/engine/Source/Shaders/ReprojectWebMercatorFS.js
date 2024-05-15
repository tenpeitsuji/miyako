//This file is automatically rebuilt by the Cesium build process.
export default "uniform sampler2D u_texture;\n\
\n\
in vec2 v_textureCoordinates;\n\
\n\
void main()\n\
{\n\
    out_FragColor = texture(u_texture, v_textureCoordinates);\n\
}\n\
";
