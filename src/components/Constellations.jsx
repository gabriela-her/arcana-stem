export default function Constellations() {
  // Coordenadas en vw/vh para posicionarlas donde no molesten
  const zodiac = [
    {
      name: "Virgo",
      stars: [
        [12, 18], [16, 22], [20, 27], [25, 25], [29, 28], [32, 33]
      ],
      lines: [[0,1], [1,2], [2,3], [3,4], [4,5]]
    },
    {
      name: "Escorpio",
      stars: [
        [80, 20], [83, 26], [85, 33], [87, 40], [89, 47], [87, 55], [84, 62]
      ],
      lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
    },
    {
      name: "Acuario",
      stars: [
        [15, 70], [22, 68], [28, 72], [34, 70], [40, 75]
      ],
      lines: [[0,1], [1,2], [2,3], [3,4]]
    },
    {
      name: "Cáncer",
      stars: [
        [70, 72], [73, 65], [77, 69], [81, 63]
      ],
      lines: [[0,1], [1,2], [2,3]]
    },
    {
      name: "Tauro",
      stars: [
        [50, 15], [53, 22], [56, 28], [60, 25]
      ],
      lines: [[0,1], [1,2], [2,3]]
    },
    {
      name: "Géminis",
      stars: [
        [45, 85], [48, 78], [52, 83], [56, 77], [60, 82]
      ],
      lines: [[0,1], [1,2], [2,3], [3,4]]
    }
  ];

  return (
    <svg className="constellations-svg">
      {zodiac.map((c, i) => (
        <g key={i} className="constellation-group">
          {c.lines.map(([a, b], j) => (
            <line
              key={j}
              x1={`${c.stars[a][0]}vw`}
              y1={`${c.stars[a][1]}vh`}
              x2={`${c.stars[b][0]}vw`}
              y2={`${c.stars[b][1]}vh`}
              className="constellation-line"
            />
          ))}

          {c.stars.map(([x, y], j) => (
            <circle
              key={j}
              cx={`${x}vw`}
              cy={`${y}vh`}
              r="2"
              className="constellation-star"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
