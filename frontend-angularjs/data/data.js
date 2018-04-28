const USE_MOCKS_DATASOURCE = true;

var hotels  = [
    {
      "id": "249942",
      "name": "Hotel Stefanos",
      "stars": 3,
      "price": 994.18,
      "image": "../assets/images/hotels/4900059_30_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/beach.svg",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "161901",
      "name": "Hotel Santa Cruz",
      "stars": 3,
      "price": 1267.57,
      "image": "../assets/images/hotels/6623490_6_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/bathtub.svg",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "161914",
      "name": "NM Lima Hotel",
      "stars": 4,
      "price": 1445.5,
      "image": "../assets/images/hotels/981018_26_b.jpg",
      "amenities": [
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/garden.svg"
      ]
    },
    {
      "id": "208599",
      "name": "El Golf Hotel Boutique",
      "stars": 4,
      "price": 1513.45,
      "image": "../assets/images/hotels/1191401_110_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/bathrobes.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "236309",
      "name": "Casa Andina Select Miraflores",
      "stars": 4,
      "price": 1545.46,
      "image": "../assets/images/hotels/2a5bb415_b.jpg",
      "amenities": [
        "coffe-maker",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/restaurant.svg",
        "garden",
        "children-club"
      ]
    },
    {
      "id": "161899",
      "name": "Radisson Hotel Decapolis Miraflores",
      "stars": 4,
      "price": 2314.61,
      "image": "../assets/images/hotels/46512_29_b.jpg",
      "amenities": [
        "bathtub",
        "separate-bredroom",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "104074",
      "name": "Antigua Miraflores Hotel",
      "stars": 3,
      "price": 1862.16,
      "image": "../assets/images/hotels/480835_73_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "separate-bredroom",
        "../assets/icons/amenities/business-center.svg",
        "bathrobes",
        "beach"
      ]
    },
    {
      "id": "512559",
      "name": "Casa Falleri Boutique Hotel",
      "stars": 3,
      "price": 1634.03,
      "image": "../assets/images/hotels/11908954_150_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "garden",
        "coffe-maker",
        "kitchen-facilities",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "228165",
      "name": "Habitat Hotel",
      "stars": 3,
      "price": 1061.79,
      "image": "../assets/images/hotels/12808943_13_b.jpg",
      "amenities": [
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathtub",
        "children-club",
        "beach"
      ]
    },
    {
      "id": "137536",
      "name": "Hotel San Blas",
      "stars": 3,
      "price": 1106.56,
      "image": "../assets/images/hotels/4417477_17_b.jpg",
      "amenities": [
        "coffe-maker",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/business-center.svg",
        "bathrobes",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "266879",
      "name": "Palmetto Hotel Business San Borja",
      "stars": 3,
      "price": 1105.87,
      "image": "../assets/images/hotels/4626475_1_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "coffe-maker",
        "../assets/icons/amenities/restaurant.svg",
        "separate-bredroom",
        "bathtub"
      ]
    },
    {
      "id": "19325",
      "name": "Foresta Hotel Lima",
      "stars": 4,
      "price": 1941.99,
      "image": "../assets/images/hotels/200684_222_b.jpg",
      "amenities": [
        "bathtub",
        "kitchen-facilities",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "garden"
      ]
    },
    {
      "id": "427467",
      "name": "Royal Inca Hotel",
      "stars": 2,
      "price": 683.5,
      "image": "../assets/images/hotels/6900423_6_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "coffe-maker",
        "../assets/icons/amenities/safety-box.svg",
        "kitchen-facilities",
        "bathtub"
      ]
    },
    {
      "id": "277990",
      "name": "Bayview Hotel",
      "stars": 3,
      "price": 1043.88,
      "image": "../assets/images/hotels/1231695_139_b.jpg",
      "amenities": [
        "bathtub",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "90757",
      "name": "Casa Andina Premium Miraflores",
      "stars": 4,
      "price": 1887.2,
      "image": "../assets/images/hotels/2039609_120_b.jpg",
      "amenities": [
        "children-club",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/restaurant.svg",
        "separate-bredroom",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "161890",
      "name": "New Corpac Hotel",
      "stars": 3,
      "price": 886.12,
      "image": "../assets/images/hotels/1876197_31_b.jpg",
      "amenities": [
        "children-club",
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/fitness-center.svg",
        "bathrobes",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "314944",
      "name": "Qorianka Hotel",
      "stars": 2,
      "price": 1024.91,
      "image": "../assets/images/hotels/9320547_26_b.jpg",
      "amenities": [
        "children-club",
        "garden",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/newspaper.svg",
        "kitchen-facilities"
      ]
    },
    {
      "id": "433932",
      "name": "Casa Suyay",
      "stars": 3,
      "price": 1695.37,
      "image": "../assets/images/hotels/8962073_23_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/newspaper.svg",
        "coffe-maker"
      ]
    },
    {
      "id": "277988",
      "name": "Casa Bella Miraflores",
      "stars": 3,
      "price": 842.54,
      "image": "../assets/images/hotels/4479382_65_b.jpg",
      "amenities": [
        "garden",
        "kitchen-facilities",
        "bathtub",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "455161",
      "name": "Tierra Viva Miraflores Larco",
      "stars": 3,
      "price": 1431.47,
      "image": "../assets/images/hotels/6153044_28_b.jpg",
      "amenities": [
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/nightclub.svg",
        "bathrobes",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "260342",
      "name": "Atton San Isidro",
      "stars": 4,
      "price": 1943.69,
      "image": "../assets/images/hotels/4357289_55_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/business-center.svg",
        "coffe-maker",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "488116",
      "name": "Urbano Apartment Miraflores Pardo",
      "stars": 3,
      "price": 1258.4,
      "image": "../assets/images/hotels/10968139_27_b.jpg",
      "amenities": [
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathtub",
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/restaurant.svg",
        "bathrobes"
      ]
    },
    {
      "id": "132929",
      "name": "Los Tallanes Hotel & Suites",
      "stars": 3,
      "price": 2014.68,
      "image": "../assets/images/hotels/12287657_13_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "beach",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "266875",
      "name": "Hotel Ferre Miraflores",
      "stars": 3,
      "price": 1183.19,
      "image": "../assets/images/hotels/3045476_5_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/newspaper.svg",
        "garden",
        "separate-bredroom",
        "children-club"
      ]
    },
    {
      "id": "411416",
      "name": "Arawi Lima Miraflores",
      "stars": 4,
      "price": 2099.1,
      "image": "../assets/images/hotels/5429945_8_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "beach",
        "children-club",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "266877",
      "name": "Peru Star Boutique Apartments Hotel",
      "stars": 4,
      "price": 1093.37,
      "image": "../assets/images/hotels/3124310_1_b.jpg",
      "amenities": [
        "bathtub",
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathrobes",
        "kitchen-facilities"
      ]
    },
    {
      "id": "106682",
      "name": "Del Pilar Miraflores Hotel",
      "stars": 3,
      "price": 1713.42,
      "image": "../assets/images/hotels/412713_46_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "coffe-maker",
        "bathtub",
        "kitchen-facilities",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "266911",
      "name": "1900 Hostel",
      "stars": 1,
      "price": 596.7,
      "image": "../assets/images/hotels/4850335_10_b.jpg",
      "amenities": [
        "coffe-maker",
        "garden",
        "kitchen-facilities",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "266878",
      "name": "Machu Picchu Suites",
      "stars": 3,
      "price": 794.74,
      "image": "../assets/images/hotels/3688061_52_b.jpg",
      "amenities": [
        "beach",
        "kitchen-facilities",
        "bathtub",
        "garden",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "411417",
      "name": "Hotel Señorial",
      "stars": 3,
      "price": 1193.14,
      "image": "../assets/images/hotels/7700456_3_b.jpg",
      "amenities": [
        "../assets/icons/amenities/business-center.svg",
        "beach",
        "garden",
        "separate-bredroom",
        "../assets/icons/amenities/newspaper.svg"
      ]
    },
    {
      "id": "266871",
      "name": "Las Palmas",
      "stars": 3,
      "price": 1118.45,
      "image": "../assets/images/hotels/4618948_40_b.jpg",
      "amenities": [
        "beach",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/newspaper.svg"
      ]
    },
    {
      "id": "266872",
      "name": "Miraflores Lodge",
      "stars": 3,
      "price": 1090.91,
      "image": "../assets/images/hotels/3612838_12_b.jpg",
      "amenities": [
        "coffe-maker",
        "../assets/icons/amenities/restaurant.svg",
        "kitchen-facilities",
        "bathtub",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "266873",
      "name": "Casa Wayra Bed & Breakfast Miraflores",
      "stars": 3,
      "price": 1175.85,
      "image": "../assets/images/hotels/3688064_92_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "coffe-maker",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "kitchen-facilities"
      ]
    },
    {
      "id": "266874",
      "name": "HosteLima",
      "stars": 2,
      "price": 297.65,
      "image": "../assets/images/hotels/4982472_16_b.jpg",
      "amenities": [
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/safety-box.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/fitness-center.svg"
      ]
    },
    {
      "id": "266919",
      "name": "3B Barranco's Chic and Basic B&B",
      "stars": 3,
      "price": 1488.42,
      "image": "../assets/images/hotels/9ae3980d_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "children-club",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/safety-box.svg",
        "beach"
      ]
    },
    {
      "id": "162141",
      "name": "Hotel El Ducado",
      "stars": 3,
      "price": 1624.1,
      "image": "../assets/images/hotels/1688562_53_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "266914",
      "name": "LYNIK La Casa de Blanca",
      "stars": 2,
      "price": 676.59,
      "image": "../assets/images/hotels/4846837_5_b.jpg",
      "amenities": [
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "bathtub",
        "separate-bredroom",
        "kitchen-facilities"
      ]
    },
    {
      "id": "26396",
      "name": "Country Club Lima Hotel",
      "stars": 5,
      "price": 3109.07,
      "image": "../assets/images/hotels/115596_172_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "garden",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "88527",
      "name": "Hotel Libertador Lima",
      "stars": 4,
      "price": 1708.74,
      "image": "../assets/images/hotels/519318_82_b.jpg",
      "amenities": [
        "bathrobes",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "450977",
      "name": "Los Girasoles",
      "stars": 3,
      "price": 1177.32,
      "image": "../assets/images/hotels/3474909_52_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "bathtub",
        "beach",
        "../assets/icons/amenities/fitness-center.svg",
        "children-club"
      ]
    },
    {
      "id": "35715",
      "name": "Melia Lima",
      "stars": 4,
      "price": 2099.3,
      "image": "../assets/images/hotels/484066_158_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "498515",
      "name": "Casa Aika",
      "stars": 3,
      "price": 757.58,
      "image": "../assets/images/hotels/5987363_77_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/nightclub.svg",
        "children-club",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "431154",
      "name": "Kingdom Hotel",
      "stars": 3,
      "price": 1754.36,
      "image": "../assets/images/hotels/9365800_92_b.jpg",
      "amenities": [
        "children-club",
        "bathtub",
        "beach",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "454496",
      "name": "Hotel Panamericano",
      "stars": 3,
      "price": 798.53,
      "image": "../assets/images/hotels/11920422_40_b.jpg",
      "amenities": [
        "bathtub",
        "children-club",
        "beach",
        "../assets/icons/amenities/newspaper.svg",
        "kitchen-facilities"
      ]
    },
    {
      "id": "266865",
      "name": "Condor's House - Hostel",
      "stars": 2,
      "price": 301.86,
      "image": "../assets/images/hotels/5030807_9_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "separate-bredroom",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/restaurant.svg",
        "garden"
      ]
    },
    {
      "id": "266866",
      "name": "House Inn Backpacker",
      "stars": 2,
      "price": 280.8,
      "image": "../assets/images/hotels/4982482_7_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "kitchen-facilities",
        "separate-bredroom",
        "bathrobes"
      ]
    },
    {
      "id": "266900",
      "name": "La Casa Nostra Hostel",
      "stars": 2,
      "price": 1228.5,
      "image": "../assets/images/hotels/2537805_1_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "../assets/icons/amenities/fitness-center.svg",
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "266867",
      "name": "Hotel Kamana",
      "stars": 3,
      "price": 846.93,
      "image": "../assets/images/hotels/4478078_39_b.jpg",
      "amenities": [
        "bathtub",
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/newspaper.svg",
        "separate-bredroom"
      ]
    },
    {
      "id": "91522",
      "name": "Embajadores Hotel",
      "stars": 3,
      "price": 1031.9,
      "image": "../assets/images/hotels/386779_53_b.jpg",
      "amenities": [
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "bathrobes",
        "coffe-maker",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "266908",
      "name": "Sm Hotel And Business",
      "stars": 3,
      "price": 969.64,
      "image": "../assets/images/hotels/4688439_88_b.jpg",
      "amenities": [
        "children-club",
        "separate-bredroom",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathtub",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "157628",
      "name": "Fiesta Hotel & Casino",
      "stars": 4,
      "price": 2927.68,
      "image": "../assets/images/hotels/1777231_85_b.jpg",
      "amenities": [
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/fitness-center.svg",
        "separate-bredroom",
        "coffe-maker",
        "../assets/icons/amenities/restaurant.svg"
      ]
    },
    {
      "id": "266903",
      "name": "San Isidro Inn",
      "stars": 3,
      "price": 1053,
      "image": "../assets/images/hotels/3952922_27_b.jpg",
      "amenities": [
        "children-club",
        "bathtub",
        "../assets/icons/amenities/fitness-center.svg",
        "separate-bredroom",
        "../assets/icons/amenities/newspaper.svg"
      ]
    },
    {
      "id": "266904",
      "name": "Posada Peregrinus",
      "stars": 2,
      "price": 614.25,
      "image": "../assets/images/hotels/4546549_9_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/fitness-center.svg",
        "bathrobes",
        "separate-bredroom"
      ]
    },
    {
      "id": "413051",
      "name": "Courtyard Lima Miraflores",
      "stars": 4,
      "price": 2240.34,
      "image": "../assets/images/hotels/9866569_13_b.jpg",
      "amenities": [
        "separate-bredroom",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "76136",
      "name": "Hotel Estelar Miraflores",
      "stars": 4,
      "price": 1927.17,
      "image": "../assets/images/hotels/b3e281b1_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/business-center.svg",
        "bathtub",
        "coffe-maker"
      ]
    },
    {
      "id": "76414",
      "name": "Swissôtel Lima",
      "stars": 5,
      "price": 3397.94,
      "image": "../assets/images/hotels/d44c63f1_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "coffe-maker",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathrobes",
        "../assets/icons/amenities/newspaper.svg"
      ]
    },
    {
      "id": "473343",
      "name": "Luxury Hotel Inkari",
      "stars": 4,
      "price": 2049.84,
      "image": "../assets/images/hotels/9438646_27_b.jpg",
      "amenities": [
        "bathtub",
        "kitchen-facilities",
        "beach",
        "../assets/icons/amenities/fitness-center.svg",
        "coffe-maker"
      ]
    },
    {
      "id": "266870",
      "name": "La Paz Apart Hotel",
      "stars": 3,
      "price": 2535.14,
      "image": "../assets/images/hotels/4099852_34_b.jpg",
      "amenities": [
        "bathrobes",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "garden",
        "kitchen-facilities"
      ]
    },
    {
      "id": "84153",
      "name": "Basadre Suites Boutique Hotel",
      "stars": 3,
      "price": 997.16,
      "image": "../assets/images/hotels/1110876_60_b.jpg",
      "amenities": [
        "bathrobes",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/safety-box.svg",
        "separate-bredroom",
        "../assets/icons/amenities/fitness-center.svg"
      ]
    },
    {
      "id": "187309",
      "name": "Hotel Melodia",
      "stars": 3,
      "price": 1053,
      "image": "../assets/images/hotels/7864635_1_b.jpg",
      "amenities": [
        "garden",
        "bathtub",
        "bathrobes",
        "../assets/icons/amenities/safety-box.svg",
        "separate-bredroom"
      ]
    },
    {
      "id": "458601",
      "name": "Hotel Plaza Mayor",
      "stars": 2,
      "price": 469.94,
      "image": "../assets/images/hotels/9866986_18_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "garden",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "coffe-maker",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "300212",
      "name": "Hotel Nobility",
      "stars": 3,
      "price": 1547.88,
      "image": "../assets/images/hotels/6214511_57_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "children-club",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "187306",
      "name": "Casa Andina Standard Miraflores Centro",
      "stars": 3,
      "price": 1218.06,
      "image": "../assets/images/hotels/85248126_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "children-club",
        "separate-bredroom",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathrobes"
      ]
    },
    {
      "id": "432536",
      "name": "Wyndham Costa Del Sol Lima City",
      "stars": 4,
      "price": 1749.25,
      "image": "../assets/images/hotels/10210122_194_b.jpg",
      "amenities": [
        "children-club",
        "beach",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "27227",
      "name": "Sonesta Hotel El Olivar Lima",
      "stars": 4,
      "price": 2339.9,
      "image": "../assets/images/hotels/525844_90_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "coffe-maker",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "532067",
      "name": "Thunderbird Hotels J.Pardo",
      "stars": 3,
      "price": 2237.4,
      "image": "../assets/images/hotels/1774520_182_b.jpg",
      "amenities": [
        "bathrobes",
        "coffe-maker",
        "children-club",
        "bathtub",
        "kitchen-facilities"
      ]
    },
    {
      "id": "91274",
      "name": "La Hacienda Hotel Miraflores",
      "stars": 3,
      "price": 2071.2,
      "image": "../assets/images/hotels/430037_31_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "beach",
        "garden",
        "../assets/icons/amenities/fitness-center.svg"
      ]
    },
    {
      "id": "296187",
      "name": "El Angolo Lima",
      "stars": 3,
      "price": 1864.08,
      "image": "../assets/images/hotels/5981696_40_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "bathrobes",
        "../assets/icons/amenities/restaurant.svg",
        "garden",
        "../assets/icons/amenities/newspaper.svg"
      ]
    },
    {
      "id": "161918",
      "name": "Hostal Porta",
      "stars": 3,
      "price": 629.8,
      "image": "../assets/images/hotels/1688561_29_b.jpg",
      "amenities": [
        "children-club",
        "separate-bredroom",
        "../assets/icons/amenities/nightclub.svg",
        "garden",
        "bathtub"
      ]
    },
    {
      "id": "227172",
      "name": "Hotel Novotel Lima",
      "stars": 4,
      "price": 2091.07,
      "image": "../assets/images/hotels/2803127_64_b.jpg",
      "amenities": [
        "beach",
        "kitchen-facilities",
        "children-club",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "277989",
      "name": "ibis Larco Miraflores",
      "stars": 3,
      "price": 1156.91,
      "image": "../assets/images/hotels/917bd6d1_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathrobes",
        "bathtub",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "234536",
      "name": "Miraflores Suites Centro",
      "stars": 3,
      "price": 841.45,
      "image": "../assets/images/hotels/3334784_86_b.jpg",
      "amenities": [
        "beach",
        "kitchen-facilities",
        "../assets/icons/amenities/newspaper.svg",
        "separate-bredroom",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "161900",
      "name": "Radisson Hotel San Isidro",
      "stars": 4,
      "price": 1761.4,
      "image": "../assets/images/hotels/1580314_67_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "children-club",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "433213",
      "name": "Hotel Boutique Huaca Wasi",
      "stars": 3,
      "price": 1715.28,
      "image": "../assets/images/hotels/5379215_11_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "garden",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "239304",
      "name": "Hotel Inka Path",
      "stars": 2,
      "price": 1088.1,
      "image": "../assets/images/hotels/9649999_27_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "garden",
        "separate-bredroom",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "109664",
      "name": "Plaza del Bosque Hotel",
      "stars": 4,
      "price": 1889.37,
      "image": "../assets/images/hotels/48784_97_b.jpg",
      "amenities": [
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "../assets/icons/amenities/fitness-center.svg",
        "kitchen-facilities",
        "../assets/icons/amenities/newspaper.svg",
        "children-club"
      ]
    },
    {
      "id": "111046",
      "name": "Suites Antique Apart Hotel",
      "stars": 3,
      "price": 1594.88,
      "image": "../assets/images/hotels/11820110_10_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "coffe-maker",
        "kitchen-facilities",
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "110914",
      "name": "Royal Park Hotel",
      "stars": 4,
      "price": 3141.14,
      "image": "../assets/images/hotels/583479_86_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "coffe-maker",
        "bathrobes",
        "garden"
      ]
    },
    {
      "id": "500017",
      "name": "El Faro Inn",
      "stars": 3,
      "price": 855.22,
      "image": "../assets/images/hotels/9817258_55_b.jpg",
      "amenities": [
        "coffe-maker",
        "beach",
        "garden",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "132928",
      "name": "Hotel San Agustin Riviera",
      "stars": 3,
      "price": 798.89,
      "image": "../assets/images/hotels/1354077_84_b.jpg",
      "amenities": [
        "garden",
        "../assets/icons/amenities/nightclub.svg",
        "bathrobes",
        "bathtub",
        "separate-bredroom"
      ]
    },
    {
      "id": "410363",
      "name": "Palmetto San Miguel",
      "stars": 3,
      "price": 1057.15,
      "image": "../assets/images/hotels/12627687_102_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/restaurant.svg",
        "garden",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "161908",
      "name": "BTH",
      "stars": 4,
      "price": 1822.71,
      "image": "../assets/images/hotels/897079_215_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "bathtub",
        "children-club",
        "bathrobes",
        "../assets/icons/amenities/safety-box.svg"
      ]
    },
    {
      "id": "137782",
      "name": "Thunderbird Hotels Carrera",
      "stars": 3,
      "price": 1559.54,
      "image": "../assets/images/hotels/1773941_61_b.jpg",
      "amenities": [
        "kitchen-facilities",
        "../assets/icons/amenities/nightclub.svg",
        "beach",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "children-club"
      ]
    },
    {
      "id": "161909",
      "name": "qp Hotels Lima",
      "stars": 3,
      "price": 1318.17,
      "image": "../assets/images/hotels/1876458_102_b.jpg",
      "amenities": [
        "separate-bredroom",
        "../assets/icons/amenities/newspaper.svg",
        "beach",
        "../assets/icons/amenities/fitness-center.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "161904",
      "name": "Sol de Oro Hotel & Suites",
      "stars": 4,
      "price": 1722.41,
      "image": "../assets/images/hotels/63569_150_b.jpg",
      "amenities": [
        "../assets/icons/amenities/fitness-center.svg",
        "garden",
        "beach",
        "../assets/icons/amenities/restaurant.svg",
        "separate-bredroom"
      ]
    },
    {
      "id": "139167",
      "name": "Hotel Park Suites",
      "stars": 2,
      "price": 1447.88,
      "image": "../assets/images/hotels/00650d24_b.jpg",
      "amenities": [
        "children-club",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/restaurant.svg",
        "garden",
        "coffe-maker"
      ]
    },
    {
      "id": "511549",
      "name": "Inkawasi Hostel Boutique",
      "stars": 2,
      "price": 796.13,
      "image": "../assets/images/hotels/4241228_30_b.jpg",
      "amenities": [
        "../assets/icons/amenities/restaurant.svg",
        "../assets/icons/amenities/fitness-center.svg",
        "kitchen-facilities",
        "beach",
        "../assets/icons/amenities/business-center.svg"
      ]
    },
    {
      "id": "110347",
      "name": "Roosevelt Hotel & Suites",
      "stars": 3,
      "price": 1710.01,
      "image": "../assets/images/hotels/81959_63_b.jpg",
      "amenities": [
        "separate-bredroom",
        "../assets/icons/amenities/nightclub.svg",
        "coffe-maker",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "garden"
      ]
    },
    {
      "id": "239178",
      "name": "The Westin Lima Hotel & Convention Center",
      "stars": 5,
      "price": 3268.52,
      "image": "../assets/images/hotels/4359018_144_b.jpg",
      "amenities": [
        "../assets/icons/amenities/safety-box.svg",
        "kitchen-facilities",
        "bathrobes",
        "../assets/icons/amenities/fitness-center.svg",
        "coffe-maker"
      ]
    },
    {
      "id": "108545",
      "name": "Delfines Hotel & Convention Center",
      "stars": 4,
      "price": 3841.81,
      "image": "../assets/images/hotels/4d72efed_b.jpg",
      "amenities": [
        "separate-bredroom",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/safety-box.svg",
        "children-club",
        "bathrobes"
      ]
    },
    {
      "id": "72019",
      "name": "Belmond Miraflores Park",
      "stars": 5,
      "price": 9355.52,
      "image": "../assets/images/hotels/530284_167_b.jpg",
      "amenities": [
        "coffe-maker",
        "separate-bredroom",
        "garden",
        "children-club",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "433923",
      "name": "Atelier Hotel",
      "stars": 3,
      "price": 1512.97,
      "image": "../assets/images/hotels/5405282_15_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "../assets/icons/amenities/business-center.svg",
        "children-club",
        "beach",
        "coffe-maker"
      ]
    },
    {
      "id": "15102",
      "name": "Jose Antonio Lima",
      "stars": 4,
      "price": 1914.87,
      "image": "../assets/images/hotels/164283a_hb_a_001.jpg",
      "amenities": [
        "garden",
        "../assets/icons/amenities/business-center.svg",
        "bathrobes",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg"
      ]
    },
    {
      "id": "93911",
      "name": "El Condado Miraflores Hotel & Suites",
      "stars": 3,
      "price": 1374.56,
      "image": "../assets/images/hotels/9291429_9_b.jpg",
      "amenities": [
        "coffe-maker",
        "../assets/icons/amenities/restaurant.svg",
        "bathtub",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "separate-bredroom"
      ]
    },
    {
      "id": "132931",
      "name": "Suites del Bosque Hotel",
      "stars": 3,
      "price": 1647.73,
      "image": "../assets/images/hotels/1574025_73_b.jpg",
      "amenities": [
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/newspaper.svg",
        "separate-bredroom",
        "../assets/icons/amenities/safety-box.svg",
        "garden"
      ]
    },
    {
      "id": "132930",
      "name": "Leon de Oro Inn & Suites",
      "stars": 3,
      "price": 1128,
      "image": "../assets/images/hotels/6975518_43_b.jpg",
      "amenities": [
        "../assets/icons/amenities/nightclub.svg",
        "../assets/icons/amenities/business-center.svg",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "garden"
      ]
    },
    {
      "id": "161892",
      "name": "Sonesta Posadas del Inca Miraflores - Lima",
      "stars": 3,
      "price": 1485.63,
      "image": "../assets/images/hotels/44e00399_b.jpg",
      "amenities": [
        "garden",
        "../assets/icons/amenities/restaurant.svg",
        "beach",
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "bathtub"
      ]
    },
    {
      "id": "161891",
      "name": "B&B Tradiciones",
      "stars": 3,
      "price": 801.45,
      "image": "../assets/images/hotels/893882_7_b.jpg",
      "amenities": [
        "../assets/icons/amenities/newspaper.svg",
        "coffe-maker",
        "../assets/icons/amenities/safety-box.svg",
        "../assets/icons/amenities/beach-pool-facilities.svg",
        "../assets/icons/amenities/nightclub.svg"
      ]
    },
    {
      "id": "132937",
      "name": "Maria Angola Hotel & Centro de Convenciones",
      "stars": 3,
      "price": 1131.76,
      "image": "../assets/images/hotels/23645_15_b.jpg",
      "amenities": [
        "garden",
        "../assets/icons/amenities/restaurant.svg",
        "children-club",
        "separate-bredroom",
        "../assets/icons/amenities/deep-soaking-bathtub.svg"
      ]
    },
    {
      "id": "132936",
      "name": "Hotel Continental",
      "stars": 3,
      "price": 774.53,
      "image": "../assets/images/hotels/802720_60_b.jpg",
      "amenities": [
        "../assets/icons/amenities/deep-soaking-bathtub.svg",
        "coffe-maker",
        "../assets/icons/amenities/newspaper.svg",
        "beach",
        "children-club"
      ]
    }
  ]