import { useEffect } from "react";

export default function CarregaTabuleiro() {
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
  let baseURL = "https://nw2w71.sse.codesandbox.io/api";
  let finalURL = "";
  useEffect(() => {
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
            psNs_c1[pageData[linha].r][pageData[linha].n][pageData[linha].i][
              pageData[linha].j
            ] = pageData[linha].par_numero;
          }
          console.table(psNs_c1);
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
  });

  return (
    <h1>
      alguma coisa <br />
      <button onClick={""}>Carrega DAdos </button>
    </h1>
  );
}
