import React from 'react';

let pathSVG = React.createFactory('path');
import render3D from './area-generic.3d';

export default {
  name: "area",
  prototype: "areas",

  info: {
    tag: ['area'],
    group: "Chiusura orizzontale",
    description: "Stanza generica",
  },

  properties: {
    patternColor: {
      type: "color",
      defaultValue: "#f5f4f4"
    },
    texture: {
      type: "enum",
      defaultValue: 'none',
      values: {
        'none': "Nessuna",
        'parquet': "Parquet",
        'tile1': "Tile 1",
      }
    }
  },

  render2D: function (element, layer, scene) {
    let path = "";
    let first = true;

    element.vertices.valueSeq()
      .map(vertexID => layer.vertices.get(vertexID))
      .forEach((vertex, vertexID) => {
        path += `${first ? 'M' : 'L'} ${vertex.x} ${vertex.y} `;
        first = false;
      });

    let fill = element.selected ? "#99c3fb" : element.properties.get('patternColor');

    return pathSVG({d: path, fill});
  },

  render3D,

};
