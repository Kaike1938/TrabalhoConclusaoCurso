import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Chess } from "chess.js"; // import Chess from  "chess.js"(default) if recieving an error about new Chess not being a constructor
import Chessboard from "chessboardjsx";
export default function PlayRandomMoveEngine() {
  var biasF1_c1 = [0, 0, 0, 0, 0, 0];

  var psF1_c1N1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF1_c1N2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF1_c1N3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF1_c1N4 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF1_c1N5 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF1_c1N6 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psNsF1_c1 = [
    psF1_c1N1,
    psF1_c1N2,
    psF1_c1N3,
    psF1_c1N4,
    psF1_c1N5,
    psF1_c1N6
  ];

  var biasF1_c2 = [0, 0, 0, 0];

  var psF1_c2N1 = [0, 0, 0, 0, 0, 0];
  var psF1_c2N2 = [0, 0, 0, 0, 0, 0];
  var psF1_c2N3 = [0, 0, 0, 0, 0, 0];
  var psF1_c2N4 = [0, 0, 0, 0, 0, 0];
  var psNsF1_c2 = [psF1_c2N1, psF1_c2N2, psF1_c2N3, psF1_c2N4];

  var psF1_S = [0, 0, 0, 0];
  var biaF1_S = 0;

  var biasF2_c1 = [0, 0, 0, 0, 0, 0];
  var psF2_c1N1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF2_c1N2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF2_c1N3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF2_c1N4 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF2_c1N5 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psF2_c1N6 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var psNsF2_c1 = [
    psF2_c1N1,
    psF2_c1N2,
    psF2_c1N3,
    psF2_c1N4,
    psF2_c1N5,
    psF2_c1N6
  ];

  var biasF2_c2 = [0, 0, 0, 0];

  var psF2_c2N1 = [0, 0, 0, 0, 0, 0];
  var psF2_c2N2 = [0, 0, 0, 0, 0, 0];
  var psF2_c2N3 = [0, 0, 0, 0, 0, 0];
  var psF2_c2N4 = [0, 0, 0, 0, 0, 0];
  var psNsF2_c2 = [psF2_c2N1, psF2_c2N2, psF2_c2N3, psF2_c2N4];

  var psF2_S = [0, 0, 0, 0];
  var biaF2_S = 0;

  var psNs_c1 = [psNsF1_c1, psNsF2_c1];
  var biasF_c1 = [biasF1_c1, biasF2_c1];
  var psNs_c2 = [psNsF1_c2, psNsF2_c2];
  var biasF_c2 = [biasF1_c2, biasF2_c2];
  var psF_S = [psF1_S, psF2_S];
  var biasF_S = [biaF1_S, biaF2_S];

  var psN1_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN2_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN3_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN4_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN5_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN6_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN7_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN8_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN9_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN10_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN11_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN12_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN13_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var ps_c1 = [
    psN1_c1,
    psN2_c1,
    psN3_c1,
    psN4_c1,
    psN5_c1,
    psN6_c1,
    psN7_c1,
    psN8_c1,
    psN9_c1,
    psN10_c1,
    psN11_c1,
    psN12_c1,
    psN13_c1
  ];
  var bias_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var psN1_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN2_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN3_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN4_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN5_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN6_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN7_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN8_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN9_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var ps_c2 = [
    psN1_c2,
    psN2_c2,
    psN3_c2,
    psN4_c2,
    psN5_c2,
    psN6_c2,
    psN7_c2,
    psN8_c2,
    psN9_c2
  ];
  var bias_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var psN1_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN2_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN3_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN4_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN5_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var psN6_c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var ps_c3 = [psN1_c3, psN2_c3, psN3_c3, psN4_c3, psN5_c3, psN6_c3];
  var bias_c3 = [0, 0, 0, 0, 0, 0];

  var ps_S = [0, 0, 0, 0, 0, 0];
  var bia_S = 0;
  let baseURL = "https://bdia.azurewebsites.net/api"; //"https://nw2w71.sse.codesandbox.io/api";
  let finalURL = "";
  // const [atualizar, setAtualizar] = useState(0);
  var at = 0;

  const parametros = async () => {
    for (let bias = 1; bias < 15; bias++) {
      finalURL = `${baseURL}/parametros/?bias=${bias}&_sort=r,b&_order=asc,asc`;
      // try {
      const page = await fetch(finalURL);
      if (page.status !== 200) throw new Error("Erro de consulta");
      const pageData = await page.json();
      // console.clear();
      //console.table(biasF_c1);

      if (bias === 1) {
        console.log("Bias: ", bias);
        for (let linha = 0; linha < pageData.length; linha++) {
          biasF_c1[pageData[linha].r][pageData[linha].b] =
            pageData[linha].par_numero;
        }
        // console.table(biasF_c1);
      }

      if (bias === 2) {
        for (let linha = 0; linha < pageData.length; linha++) {
          psNs_c1[pageData[linha].r][pageData[linha].n][pageData[linha].i][
            pageData[linha].j
          ] = pageData[linha].par_numero;
        }
        //console.table(psNs_c1);
      }
      if (bias === 3) {
        for (let linha = 0; linha < pageData.length; linha++) {
          biasF_c2[pageData[linha].r][pageData[linha].b] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 4) {
        for (let linha = 0; linha < pageData.length; linha++) {
          psNs_c2[pageData[linha].r][pageData[linha].n][pageData[linha].p] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 5) {
        for (let linha = 0; linha < pageData.length; linha++) {
          psF_S[pageData[linha].r][pageData[linha].p] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 6) {
        for (let linha = 0; linha < pageData.length; linha++) {
          biasF_S[pageData[linha].r] = pageData[linha].par_numero;
        }
      }
      if (bias === 7) {
        for (let linha = 0; linha < pageData.length; linha++) {
          ps_c1[pageData[linha].n][pageData[linha].p] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 8) {
        for (let linha = 0; linha < pageData.length; linha++) {
          bias_c1[pageData[linha].b] = pageData[linha].par_numero;
        }
      }
      if (bias === 9) {
        for (let linha = 0; linha < pageData.length; linha++) {
          ps_c2[pageData[linha].n][pageData[linha].p] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 10) {
        for (let linha = 0; linha < pageData.length; linha++) {
          bias_c2[pageData[linha].b] = pageData[linha].par_numero;
        }
      }
      if (bias === 11) {
        for (let linha = 0; linha < pageData.length; linha++) {
          ps_c3[pageData[linha].n][pageData[linha].p] =
            pageData[linha].par_numero;
        }
      }
      if (bias === 12) {
        for (let linha = 0; linha < pageData.length; linha++) {
          bias_c3[pageData[linha].b] = pageData[linha].par_numero;
        }
      }
      if (bias === 13) {
        for (let linha = 0; linha < pageData.length; linha++) {
          ps_S[pageData[linha].p] = pageData[linha].par_numero;
        }
      }
      if (bias === 14) {
        for (let linha = 0; linha < pageData.length; linha++) {
          bia_S[pageData[linha].p] = pageData[linha].par_numero;
        }
      }
      // }psNs_c1[r][n][i][j] = psNs_c1[r][n][i][j]
      // } catch (error) {
      //   console.log({ error: error.message });
      // }
    }
  };
  //const carregaDados = async () => {

  //};
  useEffect(() => {
    parametros();
  }, []);
  class HumanVsRandom extends Component {
    static propTypes = { children: PropTypes.func };

    state = { fen: "start", squareStyles: {}, pieceSquare: "" };

    componentDidMount() {
      this.game = new Chess();
    }

    makeRandomMove = async () => {
      at = at + 1;

      // setAtualizar(at);
      // var executar = "";
      // executar = await parametros();
      // console.log("at: ", at);
      // if (executar !== "") {
      let possibleMoves = this.game.moves();
      const fen = this.game.fen();
      var move;

      // exit if the game is over

      if (
        this.game.game_over() === true ||
        this.game.in_draw() === true ||
        possibleMoves.length === 0
      )
        return;

      var coluna = ["a", "b", "c", "d", "e", "f", "g", "h"];
      var linha = ["1", "2", "3", "4", "5", "6", "7", "8"];
      var tabuleiro = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""]
      ];

      var nsF_c1 = [0, 0, 0, 0, 0, 0];

      var nsF_c2 = [0, 0, 0, 0];

      var featureMap = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ];
      var pooling1 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      var pooling2 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      var poolings = [pooling1, pooling2];

      var ns_c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      var jog = 0;

      var ns_c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      var ns_c3 = [0, 0, 0, 0, 0, 0];

      var sF = 0;

      //valores dos parâmetros
      //biasF1_c1
      /* useEffect(() => {
          const carregaDados = async () => {
            for (let bias = 1; bias < 3; bias++) {
              finalURL = `${baseURL}/parametros/?bias=${bias}&_sort=r,b&_order=asc,asc`;
              // try {
              const page = await fetch(finalURL);
              if (page.status !== 200) throw new Error("Erro de consulta");
              const pageData = await page.json();
              console.clear();
              console.table(biasF_c1);
  
              if (bias === 1) {
                console.log("Bias: ", bias);
                for (let linha = 0; linha < pageData.length; linha++) {
                  biasF_c1[pageData[linha].r][pageData[linha].b] =
                    pageData[linha].par_numero;
                }
                console.table(biasF_c1);
              }
  
              if (bias === 2) {
                for (let linha = 0; linha < pageData.length; linha++) {
                  psNs_c1[pageData[linha].r][pageData[linha].n][
                    pageData[linha].i
                  ][pageData[linha].j] = pageData[linha].par_numero;
                }
                console.table(psNs_c1);
              }
              // }psNs_c1[r][n][i][j] = psNs_c1[r][n][i][j]
              // } catch (error) {
              //   console.log({ error: error.message });
              // }
            }
          };
        }, []);*/

      //
      var av = 1;
      var candidatos = [];
      for (let m = 0; m < possibleMoves.length; m++) {
        const chess = new Chess();
        chess.load(fen);
        chess.move(possibleMoves[m]);
        const fen2 = chess.fen();
        const resposta = chess.moves();
        for (let m2 = 0; m2 < resposta.length; m2++) {
          const chess = new Chess();
          //jog = 1;
          chess.load(fen2);
          chess.move(resposta[m2]);
          //console.log(resposta[m2]);
          for (let l = 0; l < 8; l++) {
            for (let c = 0; c < 8; c++) {
              // chess.load(
              //   "r1bq3r/pppp1k1p/2n3p1/2Q5/3pP3/8/PPP2PPP/RNB1K2R w KQ - 0 1"
              // );
              var casa = chess.get(coluna[c] + linha[l]);
              if (!!casa) {
                if (casa.type === "p") {
                  tabuleiro[l][c] = 1;
                } else {
                  if (casa.type === "n") {
                    tabuleiro[l][c] = 2;
                  } else {
                    if (casa.type === "b") {
                      tabuleiro[l][c] = 3;
                    } else {
                      if (casa.type === "r") {
                        tabuleiro[l][c] = 4;
                      } else {
                        if (casa.type === "q") {
                          tabuleiro[l][c] = 5;
                        } else {
                          if (casa.type === "k") {
                            tabuleiro[l][c] = 6;
                          }
                        }
                      }
                    }
                  }
                }
                if (casa.color === "b") {
                  tabuleiro[l][c] = tabuleiro[l][c] * -1;
                }
              } else {
                tabuleiro[l][c] = 0;
              }
              var material = 0;
              for (let l = 0; l < 8; l++) {
                for (let c = 0; c < 8; c++) {
                  material = material + tabuleiro[l][c];
                }
              }
              /*console.log("Linha: "+(l+1))
            console.log("Coluna: "+(c+1))*/
              //console.log(tabuleiro[[l][c]]);
            }
          }
          for (let r = 0; r < 2; r++) {
            for (let y = 0; y < 6; y++) {
              for (let x = 0; x < 6; x++) {
                for (let n = 0; n < 6; n++) {
                  for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                      nsF_c1[n] =
                        nsF_c1[n] +
                        tabuleiro[i + y][j + x] * psNs_c1[r][n][i][j];

                      if ((i === 2) & (j === 2)) {
                        nsF_c1[n] = nsF_c1[n] + biasF_c1[r][n];

                        if (nsF_c1[n] < 0) {
                          nsF_c1[n] = 0;
                        }
                      }

                      if (n === 5) {
                        for (let s = 0; s < 4; s++) {
                          for (let p = 0; p < 6; p++) {
                            nsF_c2[s] =
                              nsF_c2[s] + nsF_c1[p] * psNs_c2[r][s][p];

                            if (p === 5) {
                              nsF_c2[s] = nsF_c2[s] + biasF_c2[r][s];

                              if (nsF_c2[s] < 0) {
                                nsF_c2[s] = 0;
                              }
                              if (s === 3) {
                                for (let f = 0; f < 4; f++) {
                                  featureMap[y][x] =
                                    featureMap[y][x] + nsF_c2[f] * psF_S[r][f];

                                  if (f === 3) {
                                    featureMap[y][x] =
                                      featureMap[y][x] + biasF_S[r];

                                    if (featureMap[y][x] < 0) {
                                      featureMap[y][x] = 0;
                                    }
                                    for (let a = 0; a < 6; a++) {
                                      nsF_c1[a] = 0;
                                    }
                                    for (let a = 0; a < 4; a++) {
                                      nsF_c2[a] = 0;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            // for (let i = 0; i < 6; i++) {
            //   for (let j = 0; j < 6; j++) {
            //     console.log("Feature Map: ", featureMap[i][j]);
            //   }
            // }
            for (let y = 0; y < 3; y++) {
              for (let x = 0; x < 3; x++) {
                for (let i = 0; i < 2; i++) {
                  for (let j = 0; j < 2; j++) {
                    if ((i === 0) & (j === 0)) {
                      var maxPooling = featureMap[i + y * 2][j + x * 2];
                    }
                    if (featureMap[i + y * 2][j + x * 2] > maxPooling) {
                      maxPooling = featureMap[i + y * 2][j + x * 2];
                    }
                    poolings[r][y][x] = maxPooling;
                  }
                }
              }
            }
            // for (let i = 0; i < 3; i++) {
            //   for (let j = 0; j < 3; j++) {
            //     console.log("Pooling: ", poolings[r][i][j]);
            //   }
            // }
            for (let i = 0; i < 6; i++) {
              for (let j = 0; j < 6; j++) {
                featureMap[i][j] = 0;
              }
            }
          }

          for (let n = 0; n < 13; n++) {
            var p = 0;
            for (let r = 0; r < 2; r++) {
              for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                  ns_c1[n] = ns_c1[n] + poolings[r][i][j] * ps_c1[n][p];
                  p = p + 1;
                  if (p === 18) {
                    ns_c1[n] = ns_c1[n] + jog * ps_c1[n][p];
                    ns_c1[n] = ns_c1[n] + bias_c1[n];
                    if (ns_c1[n] < 0) {
                      ns_c1[n] = 0;
                    }
                  }
                }
              }
            }
          }
          // for(let t=0;t<13;t++){
          //   console.log(ns_c1[t])
          // }
          for (let n = 0; n < 9; n++) {
            for (let p = 0; p < 13; p++) {
              ns_c2[n] = ns_c2[n] + ns_c1[p] * ps_c2[n][p];
              if (p === 12) {
                ns_c2[n] = ns_c2[n] + bias_c2[n];
                if (ns_c2[n] < 0) {
                  ns_c2[n] = 0;
                }
              }
            }
          }
          // for (let t = 0; t < 9; t++) {
          //   console.log(ns_c2[t]);
          // }
          for (let n = 0; n < 6; n++) {
            for (let p = 0; p < 9; p++) {
              ns_c3[n] = ns_c3[n] + ns_c2[p] * ps_c3[n][p];
              if (p === 8) {
                ns_c3[n] = ns_c3[n] + bias_c3[n];
                if (ns_c3[n] < 0) {
                  ns_c3[n] = 0;
                }
              }
            }
          }
          // for (let t = 0; t < 6; t++) {
          //   console.log(ns_c3[t]);
          // }
          for (let p = 0; p < 6; p++) {
            sF = sF + ns_c3[p] * ps_S[p];
            if (p === 5) {
              sF = sF + bia_S;
              sF = 1 / (1 + 2.718281828459045235360287 ** -sF);
            }
          }
          sF = sF + material;
          //console.log(possibleMoves[m]);
          // console.log(sF);

          if (m2 === 0) {
            // console.clear();
            av = sF;

            candidatos[m] = av;

            // console.log(Move);
            // console.log(av);
          } else {
            if (av < sF) {
              av = sF;

              candidatos[m] = av;
              //Move = possibleMoves[m];
              //console.log(Move);
              // console.log(av);
            }
          }
          //z
          for (let r = 0; r < 2; r++) {
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                poolings[r][i][j] = 0;
              }
            }
          }
          for (let n = 0; n < 13; n++) {
            ns_c1[n] = 0;
          }
          for (let n = 0; n < 9; n++) {
            ns_c2[n] = 0;
          }
          for (let n = 0; n < 6; n++) {
            ns_c3[n] = 0;
          }
          sF = 0;
        }
      }
      var min = 0;
      for (let m = 0; m < candidatos.length; m++) {
        if (m === 0) {
          min = candidatos[m];
          var Move = possibleMoves[m];
          //Move=possibleMoves[m]
          console.log(Move);
        } else {
          if (min > candidatos[m]) {
            min = candidatos[m];
            Move = possibleMoves[m];
            console.log(Move);
          }
        }
        // console.log(candidatos[m]);
      }

      //}
      // let randomIndex = Math.floor(Math.random() * possibleMoves.length);

      this.game.move(Move);
      this.setState({
        fen: this.game.fen(),
        squareStyles: {
          [this.game.history({ verbose: true })[this.game.history().length - 1]
            .to]: {
            backgroundColor: "DarkTurquoise"
          }
        }
      });
    };

    onDrop = ({ sourceSquare, targetSquare }) => {
      // see if the move is legal
      var move = this.game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q" // always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return;

      this.setState({ fen: this.game.fen() });

      window.setTimeout(this.makeRandomMove, 1000);
    };

    onSquareClick = (square) => {
      this.setState({
        squareStyles: { [square]: { backgroundColor: "DarkTurquoise" } },
        pieceSquare: square
      });

      let move = this.game.move({
        from: this.state.pieceSquare,
        to: square,
        promotion: "q" // always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return;

      this.setState({ fen: this.game.fen() });
      window.setTimeout(this.makeRandomMove, 1000);
    };

    render() {
      const { fen, squareStyles } = this.state;
      return this.props.children({
        position: fen,
        onDrop: this.onDrop,
        onSquareClick: this.onSquareClick,
        squareStyles
      });
    }
  }

  return (
    <div>
      <HumanVsRandom>
        {({ position, onDrop, onSquareClick, squareStyles }) => (
          <Chessboard
            width={550} //550
            id="humanVsRandom"
            position={position}
            onDrop={onDrop}
            boardStyle={{
              borderRadius: "5px",
              boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
            }}
            onSquareClick={onSquareClick}
            squareStyles={squareStyles}
          />
        )}
      </HumanVsRandom>
    </div>
  );
}
