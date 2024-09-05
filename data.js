var APP_DATA = {
  "scenes": [
    {
      "id": "0-recepcija",
      "name": "Recepcija",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.416094328326043,
          "pitch": 0.08106651338609439,
          "rotation": 0,
          "target": "1-dvorana"
        },
        {
          "yaw": -1.0601328708264486,
          "pitch": 0.04064721441481822,
          "rotation": 5.497787143782138,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dvorana",
      "name": "Dvorana",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2062746830585844,
          "pitch": 0.046953865011554186,
          "rotation": 0,
          "target": "2-hodnik"
        },
        {
          "yaw": 0.7037889439090748,
          "pitch": 0.01887081848770933,
          "rotation": 0.7853981633974483,
          "target": "0-recepcija"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hodnik",
      "name": "Hodnik",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11508671751357191,
          "pitch": 0.050987589190224725,
          "rotation": 0,
          "target": "3-kuhinja"
        },
        {
          "yaw": -0.39208129286586235,
          "pitch": 0.07716639583034812,
          "rotation": 5.497787143782138,
          "target": "1-dvorana"
        },
        {
          "yaw": 2.6248037809429405,
          "pitch": 0.07898782588867448,
          "rotation": 10.995574287564278,
          "target": "4-wc-muki"
        },
        {
          "yaw": 2.829276116364599,
          "pitch": 0.046519521023963506,
          "rotation": 4.71238898038469,
          "target": "5-wc-enski"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.081406865113988,
          "pitch": 0.06655228500869015,
          "rotation": 0,
          "target": "2-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wc-muki",
      "name": "WC Muški",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2272443320961024,
          "pitch": 0.057830308542005326,
          "rotation": 0.7853981633974483,
          "target": "2-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc-enski",
      "name": "WC Ženski",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0393439398449509,
          "pitch": -0.0034971619098165263,
          "rotation": 0,
          "target": "2-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kat-hodnik",
      "name": "Kat hodnik",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45593303028361376,
          "pitch": 0.06757540832743203,
          "rotation": 0,
          "target": "7-kat-hodnik_2"
        },
        {
          "yaw": -2.3348534922644166,
          "pitch": 0.067139294776144,
          "rotation": 0.7853981633974483,
          "target": "17-ured_2"
        },
        {
          "yaw": -2.6454268590586825,
          "pitch": 0.02688732385914605,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        },
        {
          "yaw": -2.7797248040118507,
          "pitch": 0.052750435377724614,
          "rotation": 5.497787143782138,
          "target": "16-sala-za-sastanke"
        },
        {
          "yaw": -2.9339572861802985,
          "pitch": 0.15340546265336386,
          "rotation": 3.9269908169872414,
          "target": "0-recepcija"
        },
        {
          "yaw": -1.992958639111361,
          "pitch": 0.03852082087141184,
          "rotation": 0,
          "target": "10-ostava_1"
        },
        {
          "yaw": 0.19383630135812346,
          "pitch": 0.056994895897760856,
          "rotation": 5.497787143782138,
          "target": "11-ostava_2"
        },
        {
          "yaw": 2.1477411030729954,
          "pitch": 0.07720319414926813,
          "rotation": 0,
          "target": "18-ured_3"
        },
        {
          "yaw": 0.626113622981535,
          "pitch": 0.06992134570505115,
          "rotation": 0.7853981633974483,
          "target": "19-ured_4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kat-hodnik_2",
      "name": "Kat hodnik_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1181383634835553,
          "pitch": 0.04815627689955271,
          "rotation": 0,
          "target": "6-kat-hodnik"
        },
        {
          "yaw": 0.8373395862465749,
          "pitch": 0.09651034533509595,
          "rotation": 0,
          "target": "20-ured_5"
        },
        {
          "yaw": -0.9807501728676282,
          "pitch": 0.12416934261533896,
          "rotation": 0,
          "target": "12-arhiva"
        },
        {
          "yaw": -2.9239540131385393,
          "pitch": 0.0930080079021387,
          "rotation": 1.5707963267948966,
          "target": "11-ostava_2"
        },
        {
          "yaw": 2.745455749274587,
          "pitch": 0.08387078833821526,
          "rotation": 5.497787143782138,
          "target": "19-ured_4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kat-hodnik_3",
      "name": "Kat hodnik_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7440052516102185,
          "pitch": 0.05142547191844393,
          "rotation": 0,
          "target": "9-kuhinja-kat"
        },
        {
          "yaw": -0.05538602105184509,
          "pitch": 0.04530611164253884,
          "rotation": 5.497787143782138,
          "target": "13-wc-kat_muki"
        },
        {
          "yaw": -0.44254946348539725,
          "pitch": 0.03843036446367343,
          "rotation": 5.497787143782138,
          "target": "14-wc-kat_enski"
        },
        {
          "yaw": -2.9615575761565758,
          "pitch": 0.09838637029367447,
          "rotation": 0,
          "target": "15-ured_1"
        },
        {
          "yaw": 2.1584301713448166,
          "pitch": 0.10042385199320414,
          "rotation": 0.7853981633974483,
          "target": "16-sala-za-sastanke"
        },
        {
          "yaw": 1.90912393543349,
          "pitch": 0.17160364864191102,
          "rotation": 2.356194490192345,
          "target": "0-recepcija"
        },
        {
          "yaw": 1.7870278679354747,
          "pitch": 0.075076261286112,
          "rotation": 0,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kuhinja-kat",
      "name": "Kuhinja kat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4193509451838793,
          "pitch": -0.12307785116939485,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ostava_1",
      "name": "Ostava_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.055401269951939,
          "pitch": -0.04195979263114147,
          "rotation": 0,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ostava_2",
      "name": "Ostava_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.062193873110089,
          "pitch": -0.007940850212499129,
          "rotation": 0,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-arhiva",
      "name": "Arhiva",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.915862487084386,
          "pitch": 0.05908379262049124,
          "rotation": 4.71238898038469,
          "target": "7-kat-hodnik_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-wc-kat_muki",
      "name": "WC Kat_Muški",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0434991414233865,
          "pitch": -0.04730141003295607,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-wc-kat_enski",
      "name": "WC Kat_Ženski",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6442636983939067,
          "pitch": 0.039413033378536966,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ured_1",
      "name": "Ured_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.244440078194515,
          "pitch": 0.04183704357857465,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-sala-za-sastanke",
      "name": "Sala za sastanke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6670827716290475,
          "pitch": 0.09100660482431877,
          "rotation": 0,
          "target": "8-kat-hodnik_3"
        },
        {
          "yaw": 2.6029524582019326,
          "pitch": 0.110259047630624,
          "rotation": 0,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ured_2",
      "name": "Ured_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.653433216038101,
          "pitch": -0.023744085688145233,
          "rotation": 6.283185307179586,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ured_3",
      "name": "Ured_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.992673974688021,
          "pitch": 0.08694266399299622,
          "rotation": 11.780972450961727,
          "target": "6-kat-hodnik"
        },
        {
          "yaw": -2.1245586347868333,
          "pitch": 0.08184461548974653,
          "rotation": 0.7853981633974483,
          "target": "7-kat-hodnik_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ured_4",
      "name": "Ured_4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2891689107806776,
          "pitch": 0.07270529399763426,
          "rotation": 0,
          "target": "7-kat-hodnik_2"
        },
        {
          "yaw": 2.66778595229638,
          "pitch": 0.07163663468670833,
          "rotation": 5.497787143782138,
          "target": "6-kat-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ured_5",
      "name": "Ured_5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4732712668043657,
          "pitch": 0.08331597675690539,
          "rotation": 0,
          "target": "7-kat-hodnik_2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Carta_Osijek",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
