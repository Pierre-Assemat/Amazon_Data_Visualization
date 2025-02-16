export const TILES_URL = {
  'root': 'data_private/maps/tiles2',
}

// The ID of the categories has to correspond to a referenced layer in LAYER_MAP, with the same id
export const CATEGORIES = {
  'agricultura': {
    'agricultura': {
      'url': 'data/land-use/agricultura.topojson',
      'format': 'TopoJSON',
      'style': {
          fill: 'rgba(80, 30, 30, 1)' //'rgba(180, 180, 30, 1)'
        }
    },
    'pasto': {
      'url': 'data/land-use/pasto.geojson',
      'style': {
          fill: 'rgba(80, 30, 30, 1)'
        }
    },
    'pasto-agricultura': {
      'url': 'data/land-use/pasto_agricultura.geojson',
      'style': {
          fill: 'rgba(80, 30, 30, 1)' //'rgba(150, 200, 50, 1)'
        }
    },
    'pasto-herbazal': {
      'url': 'data/land-use/pasto_herbazal.geojson',
      'style': {
          fill: 'rgba(80, 30, 30, 1)' //'rgba(80, 130, 130, 1)'
        }
    },
    'vegetacion': {
      'url': 'data/land-use/vegetacion.geojson',
      'style': {
          fill: 'rgba(80, 30, 30, 1)' //'rgba(5, 90, 5, 1)'
        }
    },
  },
  'agua': {
    'agua': {
      'url': 'data/land-use/agua.topojson',
      'format': 'TopoJSON',
      'style': {
        fill: 'rgba(5, 5, 120, 1)' // 'rgba(20, 20, 240, 1)'
      },
      'text': 'Agua',
    },
    'aguajales': {
      'url': 'data/land-use/aguajales.geojson',
      'style': {
        fill: 'rgba(5, 5, 120, 1)'
      },
      'text': 'Aguajales',
    },
    'bosque-inundable': {
      'url': 'data/land-use/bosque_inundable.geojson',
      'style': {
        fill: 'rgba(5, 5, 120, 1)' // 'rgba(40, 130, 190, 1)'
      },
      'text': 'Bosque inundable',
    }
  },
}

export const LAYER_MAP = {
  'AOI-percountry': {
    'url': 'data/AOI_percountry.geojson',
    'style': {
      fill: 'rgba(80, 130, 80, 1)',
      stroke: 'rgba(0,0,0,0.15)',
      text: (feature, resolution) => {
        return {
          text: resolution < 100000 ? feature.get('SOVEREIGNT') : '' ,
          fill: new ol.style.Fill({ fill: "#000000" }),
          font: "14px sans-serif",
        };
      },
    },
    'text': 'AOI per country',
    'check': false,
  },
  'agricultura': {
    'text': 'Agricultura',
    'url': 'data/land-use/agricultura.geojson',
    'style': {
        fill: 'rgba(80, 30, 30, 1)' //'rgba(180, 180, 30, 1)'
      }
  },
  'agua': {
    'text': 'Agua',
  },
  // 'bosque-inundable': {
  //   'url': 'data/land-use/bosque_inundable.geojson',
  //   'style': {
  //     fill: 'rgba(40, 130, 190, 1)'
  //   },
  //   'text': 'Bosque inundable',
  // },
  'urbano': {
    'url': 'data/land-use/urbano.geojson',
    'style': {
      fill: 'rgba(120, 120, 130, 1)'
    },
    'text': 'Urbano',
  },
  'mineria': {
    'url': 'data/land-use/mineria.geojson',
    'style': {
      fill: 'rgba(0, 0, 0, 1)'
    },
    'text': 'Mines',
  },
  'mines_1980s': {
    'url': 'data/mines/80s.geojson',
    'style': {
      fill: 'rgba(0, 0, 0, 1)'
    },
    'text': 'Mines in the 80s',
  },
  'mines_1990s': {
    'url': 'data/mines/90s.geojson',
    'style': {
      fill: 'rgba(0, 0, 0, 1)'
    },
    'text': 'Mines in the 90s',
  },
  'mines_2010s': {
    'url': 'data/mines/2010s.topojson',
    'style': {
      fill: 'rgba(0, 0, 0, 1)'
    },
    'format': 'TopoJSON',
    'text': 'Mines in the 2010s',
  },
  'mines_2000s': {
    'url': 'data/mines/2000s.geojson',
    'style': {
      fill: 'rgba(0, 0, 0, 1)'
    },
    'text': 'Mines in the 2000s',
  }
  // 'corrientes': {
  //   'url': 'data/corrientes.geojson',
  //   'style': null,
  //   'text': 'Corrientes',
  // },
  // 'carbon-stock': {
  //   'url': 'data/modeled_carbon_stocks_4326_tiles/{z}/{x}/{y}.png',
  //   'style': {
  //     fill: 'rgba(80, 130, 80, 1)'
  //   },
  //   'text': 'Carbon Stocks',
  //   'check': false,
  // },
  // 'airport': {
    //   'url': 'data/airport.geojson',
    //   'style': null
    // },
  // 'bosque-no-inundable': {
  //   'url': 'data/land-use/bosque_no_inundable.geojson',
  //   'style': {
  //       fill: 'rgba(80, 130, 80, 1)'
  //     }
  // },
  // 'herbazal': {
  //   'url': 'data/land-use/herbazal.geojson',
  //   'style': {
  //       fill: 'rgba(8, 230, 3, 1)'
  //     }
  // },
  // 'suela-desnudo': {
  //   'url': 'data/land-use/suela_desnudo.geojson',
  //   'style': {
  //       fill: 'rgba(180, 130, 30, 1)'
  //     }
  // },
  // 'arbustos': {
  //   'url': 'data/land-use/arbustos.geojson',
  //   'style': {
  //       fill: 'rgba(5, 90, 5, 1)'
  //     }
  // },
  // 'land-use-contour': 'data/land-use-contour.geojson',
  // 'humedales': 'data/land-use/humedales.geojson',
  // 'sabana': 'data/land-use/sabana.geojson',
  // 'sabana-humedales': 'data/land-use/sabana_humedales.geojson',
  // 'thb-df': 'data/land-use/thb_df.geojson',
  // 'other': 'data/land-use/other.geojson',
};

export const BASE_ID = "base";
