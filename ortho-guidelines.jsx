import { useState, useMemo } from "react";

const guidelines = [
  {
    id: 1,
    category: "Anca",
    color: "#1B4F8A",
    icon: "🦴",
    title: "Artroplastica Totale d'Anca (THA)",
    source: "AAOS / SIOT 2023",
    pdfUrl: "https://www.massgeneral.org/assets/mgh/pdf/orthopaedics/sports-medicine/physical-therapy/rehabilitation-protocol-for-total-hip-arthroplasty.pdf",
    tags: ["protesi", "coxartrosi", "chirurgia"],
    summary: "Indicazioni, timing chirurgico e gestione perioperatoria per l'artroprotesi totale d'anca.",
    sections: [
      {
        title: "Indicazioni Chirurgiche",
        content: [
          "Coxartrosi sintomatica con fallimento del trattamento conservativo (≥3 mesi FANS + FKT)",
          "Dolore moderato-severo (VAS ≥5) con significativa limitazione funzionale",
          "Evidenza radiologica: restringimento spazio articolare, osteofiti, sclerosi subcondrale (K-L grade ≥ 3)",
          "Necrosi avascolare della testa femorale (stadio III-IV Ficat)",
          "Frattura del collo femorale (Garden III-IV) nell'anziano",
        ],
      },
      {
        title: "Controindicazioni Assolute",
        content: [
          "Infezione attiva locale o sistemica",
          "Osteomielite pregressa dell'anca",
          "Deficit neurologico progressivo dell'arto",
          "Insufficienza muscolare grave (paralisi)",
        ],
      },
      {
        title: "Profilassi TEV",
        content: [
          "EBPM (es. enoxaparina 4000 UI/die) iniziare 12h post-op",
          "Durata: 28-35 giorni dalla chirurgia",
          "Alternativa: rivaroxaban 10mg/die o apixaban 2.5mg x2/die",
          "Calze elastiche compressive per 6 settimane",
          "Mobilizzazione precoce entro 24h dall'intervento",
        ],
      },
      {
        title: "Riabilitazione Post-operatoria",
        content: [
          "Carico immediato protetto con deambulatore (salvo indicazione chirurgica diversa)",
          "Esercizi isometrici del quadricipite dal 1° giorno",
          "Precauzioni anti-lussazione per via posterolaterale (90° flessione, no adduzione/intrarotazione)",
          "FKT ambulatoriale per 6-8 settimane",
          "Follow-up: 6 settimane, 3 mesi, 1 anno, poi ogni 2 anni",
        ],
      },
      {
        title: "Protocollo Riabilitativo Post-THA — 5 Fasi (MGH / ORI Protocol)",
        content: [
          "⚠️ NOTA: il protocollo seguente si basa sul Massachusetts General Hospital THA Rehabilitation Protocol (massgeneral.org) — la progressione tra fasi dipende dall'approccio chirurgico (anteriore vs posteriore), dalle precauzioni del chirurgo e dall'evoluzione clinica individuale. Seguire sempre le indicazioni del chirurgo prima di progredire.",
          "─── FASE 1 — POST-OP IMMEDIATO (Giorni 0-3) ───",
          "OBIETTIVI: trasferimenti letto/sedia/WC indipendenti; istruzione deambulazione con deambulatore/stampelle; controllo infiammazione e dolore; avvio HEP mobilità e attivazione muscolare",
          "PRECAUZIONI: via anteriore → nessuna precauzione specifica; via posteriore → evitare flessione eccessiva, no sedie basse (anche al di sotto del livello delle ginocchia)",
          "ESERCIZI FASE 1: pompe tibiotarsiche, glut set, quad set, heel prop stretch, heel slides, flessione/estensione seduta AAROM, sollevamento tallone/punta; addestramento al passo (bend & kick, heel-to-toe); equilibrio: spostamenti peso, postura ristretta, postura tandem; scale: step-to pattern",
          "CRITERI PROGRESSIONE: HEP tollerato; trasferimenti sicuri e indipendenti con ausilio minimo; deambulazione con ausilio e gait pattern accettabile",
          "─── FASE 2 — RIABILITAZIONE PRECOCE (Giorni 3 – 2 Settimane) ───",
          "OBIETTIVI: protezione articolazione e stabilizzazione protesi; controllo dolore/edema; screen DVT e infezione; migliorare ROM anca; attivazione muscolare; deambulazione indipendente con ausilio minimo; ADL modificate",
          "ESERCIZI FASE 2: cyclette senza resistenza (ROM); PROM anca (flessione, circonduzioni, abduzione, IR/ER gentle, log rolls); iso abduttori/adduttori; AROM abduzione supina; clamshell supino e laterale; glute bridge; flessione anca in piedi/abduzione/adduzione/estensione; circuiti coni/cerchi/ostacoli; stepping laterale; tandem walk; SLS su superfici piane",
          "CRITERI PROGRESSIONE: forza anca ≥3/5 (via posteriore); PROM entro 20-30° dall'arto controlaterale; dimissione ausilio, gait pattern buono; dolore da minimo a moderato con attività; SLS ≥10 secondi con dolore minimo",
          "─── FASE 3 — FASE INTERMEDIA (Settimane 2-6) ───",
          "OBIETTIVI: normalizzare ROM attivo e passivo; migliorare forza muscolare; normalizzare pattern deambulatorio senza ausili; progressione movimenti funzionali; ADL indipendenti",
          "ESERCIZI FASE 3: ellittica/UBE/Aerodyne; PROM in range limitati; figure 4 supina/seduta; stretching flessore anca e adduttore in piedi; squat bipodale → wall sit; step-up (anteriore, laterale, curtsy); hip hinge → RDL → stacco da box; band resisted bridge/march/clamshell/side-stepping; SLR (flessione/abduzione/adduzione/estensione); leg press; hamstring curl; plank frontale",
          "CRITERI PROGRESSIONE: forza anca ≥4-/5; PROM entro 10-20° del lato sano; no deviazioni deambulazione; difficoltà/dolore minimo con ADL e scale; TUG e 30s STS ~80% delle norme per età",
          "─── FASE 4 — FASE TARDIVA (Settimane 6-12) ───",
          "OBIETTIVI: ripristino completo ROM; massimizzare performance muscolare e funzionale; ritorno al lavoro se applicabile; ritorno attività ricreative (preparazione attività ad impatto ~12 settimane); ridurre frequenza FKT verso autogestione",
          "PRECAUZIONI FASE 4: terminare le precauzioni residue; considerare dimissione all'autogestione se progressi e fiducia del paziente adeguati",
          "ESERCIZI FASE 4: ellittica/tapis roulant/programma acquatico; squat monopodal su box → shrimp squat; ball bridge (bipodale straight-leg, curl, monopodale eccentrico, monopodale completo); stacco da terra → sollevamento e trasporto; plank frontale, laterale, adduttore laterale; sliders in varie direzioni; non-impact plyometrics (shuttle kick-back lento→veloce, med ball slam in squat BL/UL); stabilità dinamica su Bosu (affondi, SL RDL, med ball); dry needling se persistono restrizioni miofasciali",
          "CRITERI PROGRESSIONE: ROM anca nei limiti normali; forza anca ≥4+/5 (~80% LSI); TUG e 30s STS ~90% norme per età; no difficoltà con ADL/lavoro; dimettere la maggioranza all'autogestione",
          "─── FASE 5 — RIABILITAZIONE AVANZATA (Settimane 12+) ───",
          "OBIETTIVI: ritorno agli sport/attività ricreative; potenziamento forza, endurance e propriocezione per ADL, lavoro e sport",
          "CRITERI PER ATTIVITÀ AD IMPATTO (plyometrics/corsa): ROM completo e funzionale indolore; LSI forza anca ≥90% via dinamometria; 10 pistol squat/shrimp squat/forward heel tap da box 20cm senza pattern compensatorio (~60° flessione ginocchio durante il test)",
          "PROGRESSIONE IMPATTO: PWB → salti bipodalici assistiti → in piano → AP/ML → scissor hops → SL jumps; FWB → box jump up/down → laterali → step-down → SL box jumps; in place jumps → jog → skipping → broad jump → lateral bound → single leg bound → protocollo ritorno alla corsa",
          "CRITERI RITORNO ALLO SPORT: LSI forza anca 90-100%; hop test LSI 90-100% arto controlaterale; 200-250 foot contacts senza versamento reattivo prima di iniziare protocollo corsa",
        ],
      },
    ],
  },
  {
    id: 14,
    category: "Anca",
    color: "#1B4F8A",
    icon: "🦴",
    title: "Dolore e Deficit di Mobilità dell'Anca — Osteoartrite (Hip OA)",
    source: "Cibulka et al. JOSPT 2017;47(6):A1-A37 | Koc et al. JOSPT 2025;55(11):CPG1-CPG31 | APTA Orthopedics | South Shore Orthopedics Rehab Protocol",
    pdfUrl: "https://www.orthopt.org/uploads/content_files/files/Hip_pain_and_mobility_deficits_hip_osteoarthritis_2025.pdf",
    pdfUrl2: "https://www.southshoreorthopedics.com/hip_arthritis/",
    tags: ["anca", "osteoartrite", "coxartrosi", "esercizio", "terapia manuale", "OA", "CPG"],
    summary: "Linee guida CPG per la gestione fisioterapica del dolore e dei deficit di mobilità associati all'osteoartrite dell'anca (Hip OA). Include esercizio terapeutico (prima linea), terapia manuale, educazione, controllo del peso e criteri per il rinvio chirurgico.",
    sections: [
      {
        title: "Classificazione e Diagnosi",
        content: [
          "DIAGNOSI CLINICA: dolore anteriore all'inguine (possibile irradiazione laterale/posteriore e distalmente al ginocchio), aggravato da attività in carico; riduzione ROM dell'anca (specie rotazione interna e flessione)",
          "CRITERI DIAGNOSTICI: dolore all'anca + almeno 2 su 3 — ROM rotazione interna <15°, dolore alla rotazione interna, rigidità mattutina <60 min (specificità 86%)",
          "IMAGING: radiografia standard (AP pelvi + laterale anca) — restringimento spazio articolare, osteofiti, sclerosi subcondrale; classificazione Kellgren-Lawrence (K-L) gradi 0-4",
          "OUTCOME MEASURES: HOOS (Hip disability and Osteoarthritis Outcome Score); LEFS (Lower Extremity Functional Scale); Harris Hip Score (HHS); NRS per dolore",
          "DIAGNOSI DIFFERENZIALE: impingement femoro-acetabolare (FAIS), lesione del labbro acetabolare, borsiti, lombalgia con irradiazione, meralgia parestesica, patologia vascolare",
          "FATTORI PROGNOSTICI NEGATIVI: obesità (BMI >30), dolore grave, bassa autoefficacia, elevata catastrofizzazione, lunga durata dei sintomi",
        ],
      },
      {
        title: "Esercizio Terapeutico — Prima Linea (Grado A)",
        content: [
          "DEVE (Grado A — 2025): prescrivere programma di esercizio individualizzato per migliorare ROM, forza, funzione e dolore — 1-5 sessioni/settimana, 30-120 min, per almeno 8-12 settimane",
          "ESERCIZI DI RINFORZO: focalizzati su abduttori, estensori e rotatori esterni dell'anca; quadricipite e muscoli del tronco — preferibilmente supervisionati, poi home program",
          "ESERCIZI AEROBICI: camminata, cyclette, nuoto — migliorano funzione globale e qualità di vita; obiettivo 150 min/settimana di attività moderata",
          "TERAPIA ACQUATICA: indicata come alternativa quando il carico a terra è limitato da dolore severo o comorbidità",
          "STRETCHING E FLESSIBILITÀ: esercizi di ROM passivo e attivo-assistito per recuperare rotazione interna e flessione",
          "EVIDENZA: 14 RCT (n=1242); miglioramenti significativi su dolore e funzione a breve termine; effetti mantenuti a 6-8 mesi nel 50-63% dei pazienti",
        ],
      },
      {
        title: "Terapia Manuale",
        content: [
          "DEVE (Grado A — 2025): terapia manuale con mobilizzazione dei tessuti molli e/o articolare, incluse distrazione longitudinale dell'anca ad alta e bassa forza e mobilizzazione con movimento, per aumentare ROM, ridurre dolore e migliorare funzione in OA lieve-moderata con deficit di mobilità",
          "TECNICHE: mobilizzazione in distrazione longitudinale (long-axis distraction); mobilizzazione antero-posteriore e postero-anteriore dell'anca; mobilizzazione con movimento (Mulligan); manipolazione dell'anca in casi selezionati",
          "COMBINAZIONE CON ESERCIZIO: la terapia manuale aggiunta all'esercizio mostra benefici a breve termine su dolore e scala WOMAC globale (evidenza moderata); nessun beneficio aggiuntivo a lungo termine rispetto al solo esercizio (evidenza alta)",
          "INDICAZIONE PRATICA: usare la terapia manuale nella fase iniziale per ridurre dolore e migliorare compliance all'esercizio, poi mantenere con programma di esercizio autonomo",
          "TECNICHE SPINALI: mobilizzazione/manipolazione lombo-pelvica indicata in pazienti con concomitante lombalgia o deficit di mobilità lombare",
        ],
      },
      {
        title: "Educazione, Peso e Gestione a Lungo Termine",
        content: [
          "DEVE: educazione del paziente su natura dell'OA (non 'usura' irreversibile), importanza dell'esercizio, autogestione dei sintomi e protezione articolare",
          "CONTROLLO DEL PESO (Grado A): riduzione ponderale del 5-7.5% in pazienti con BMI >25 kg/m² — riduce carico sull'anca e migliora dolore e funzione",
          "AUSILI: bastone/deambulatore nella mano controlaterale quando necessario; calzature con suola ammortizzante; ortesi plantari in casi selezionati con deficit biomeccanici associati",
          "ATTIVITÀ FISICA: incoraggiare il mantenimento dell'attività quotidiana e dello sport a basso impatto; non controindicati nuoto, ciclismo, walking",
          "BRACING: non indicato come prima linea; considerare solo dopo fallimento di esercizio e terapia manuale per attività specifiche",
          "FOLLOW-UP: rivalutare a 6-8 settimane; se risposta insufficiente dopo 3 mesi → rivalutazione medica e imaging; se K-L ≥3 con fallimento conservativo → consulto ortopedico per THA",
        ],
      },
      {
        title: "Criteri per Rinvio Chirurgico",
        content: [
          "INDICAZIONE A CONSULTO CHIRURGICO: fallimento del trattamento conservativo supervisionato per ≥3 mesi con dolore persistente e significativa limitazione funzionale",
          "FATTORI CHE ANTICIPANO IL RINVIO: OA grave (K-L grado 3-4), deformità significative, atleti ad alto livello che vogliono mantenere performance elevata, età <65 anni con OA avanzata",
          "STANDARD DI RIFERIMENTO: artroprotesi totale d'anca (THA) — indicata per OA sintomatica grave con fallimento conservativo; alta soddisfazione del paziente (>90%) e sopravvivenza dell'impianto >15 anni",
          "TIMING: non ritardare eccessivamente il consulto chirurgico in pazienti con OA avanzata — il ritardo non migliora gli outcome post-chirurgici",
          "PREABILITAZIONE: programma di rinforzo e aerobico pre-operatorio migliora il recupero post-THA — indicato anche dopo decisione chirurgica",
        ],
      },
      {
        title: "Protocollo Riabilitativo Hip OA — 4 Fasi (South Shore Orthopedics)",
        content: [
          "FONTE: South Shore Hospital Orthopedic, Spine and Sports Therapy — Hip OA Rehabilitation Protocol (southshoreorthopedics.com). La progressione tra fasi è individuale e basata sulla valutazione clinica del fisioterapista.",
          "FILOSOFIA: il fisioterapista valuta mobilità, flessibilità e forza per identificare i deficit che aumentano lo stress sull'articolazione dolorosa; include esercizi di rinforzo/stretching anca-ginocchio-core, terapia manuale per migliorare mobilità articolare e ridurre il dolore.",
          "─── FASE 1 — FASE ACUTA/INFIAMMATORIA ───",
          "OBIETTIVI: controllo dolore e infiammazione; ripristino ROM articolare indolore; avvio programma flessibilità",
          "ESERCIZI: heel slides (in arco indolore); rotazione interna/esterna anca supina; bridging gentile; stretching arto inferiore (retto femorale/iliopsoas, IT band/TFL, hamstring, rotatori dell'anca, piriforme, gluteo massimo); cyclette se ROM indolore",
          "DOSAGGIO FASE 1: ROM quotidianamente — 2-3 serie x 15-20 rip; stretching quotidiano — 2-3 ripetizioni da 30 secondi per ogni posizione; terapia manuale",
          "─── FASE 2 — FASE SUBACUTA A ───",
          "OBIETTIVI: protezione articolazione; progressione flessibilità; inizio rinforzo in catena aperta nelle aree di debolezza/instabilità",
          "ESERCIZI: continuare ROM e flessibilità fase 1; cyclette (progressione lenta della resistenza); rinforzo in catena aperta (OKC): bridging, quadrupedie, SLR (sollevamento gamba tesa), abduzione anca, estensione anca, rotazione esterna anca; SLS (stance monopodal)",
          "DOSAGGIO FASE 2: stretching quotidiano 2-3 x 30 sec; cardio 3-5 volte/sett x 20-35 min; rinforzo quotidiano 2-3 serie x 15-20 rip",
          "─── FASE 3 — FASE SUBACUTA B ───",
          "OBIETTIVI: evitare riacutizzazioni; massimizzare il recupero di forza e flessibilità; stabilire forza e stabilità in catena chiusa (CKC)",
          "ESERCIZI: continuare stretching fasi 1-2; cyclette + progressione alla camminata; progressione OKC con pesi alla caviglia; attrezzatura palestra (leg press, multi-hip, cavo bassa puleggia); rinforzo CKC indolore (step-up anteriori e laterali); progressione SLS; progressione bridging (physioball, foam roll)",
          "DOSAGGIO FASE 3: stretching quotidiano; cardio 3-5 volte/sett x 20-45 min; rinforzo 3 volte/sett 2-3 serie x 15-20 rip; enfasi sul corretto pattern deambulatorio",
          "─── FASE 4 — FASE SPORT-SPECIFICA / RITORNO ATTIVITÀ ───",
          "OBIETTIVI: evitare sovraccarico dell'anca; progressione rinforzo monopodal; raggiungere forza e flessibilità adeguate per il ritorno all'attività",
          "ESERCIZI: continuare stretching quotidiano; cyclette/camminata/ellittica; inizio progressione corsa per MD/PT; programma OKC e attrezzatura palestra; step-up (laterali, crossover); affondo statico → dinamico; affondo laterale; rinforzo monopodal progressivo (squat monopodal, SL deadlift, SL rotazione esterna)",
          "DOSAGGIO FASE 4: stretching quotidiano; cardio progressivo per ritorno allo sport; rinforzo 3 volte/sett 2-3 serie x 15-20 rip; ritorno allo sport delineato da MD/PT",
        ],
      },
    ],
  },
  {
    id: 19,
    category: "Anca",
    color: "#1B4F8A",
    icon: "\u{1F9B5}",
    title: "Lesione da Stiramento degli Ischiocrurali negli Atleti \u2014 CPG 2022",
    source: "Martin et al. | JOSPT 2022;52(3):CPG1-CPG44 | APTA Orthopedics + AASPT | Aspetar Hamstring Protocol",
    pdfUrl: "https://www.orthopt.org/uploads/content_files/files/Hamstring_Strain_Injury_in_Athletes.pdf",
    pdfUrl2: "https://www.aspetar.com/aspetarfileupload/UploadCenter/636209313253275549_aspetar%20Hamstring%20Protocol.pdf",
    tags: ["ischiocrurali", "hamstring", "HSI", "stiramento", "atleti", "nordic", "ritorno allo sport", "CPG"],
    summary: "Linea guida CPG di APTA Orthopedics e American Academy of Sports Physical Therapy sulla lesione da stiramento degli ischiocrurali (Hamstring Strain Injury) nell'atleta. Copre epidemiologia, fattori di rischio, decorso, diagnosi e classificazione in gradi, esame fisico, prevenzione con Nordic hamstring exercise, interventi riabilitativi e criteri di ritorno allo sport. Esclude le lesioni tendinee isolate (intratendinee prossimali o distali).",
    sections: [
      {
        title: "Epidemiologia e Incidenza",
        content: [
          "Le HSI sono frequenti negli sport con corsa ad alta velocit\u00E0, salti, calci, movimenti esplosivi degli arti inferiori con rapidi cambi di direzione e sollevamento di carichi da terra.",
          "Sport a maggiore frequenza: atletica leggera, calcio, football australiano, football americano, rugby.",
          "Incidenza stimata per 1000 ore di esposizione: 0.87 negli sport senza contatto; 0.92-0.96 negli sport da contatto.",
          "Calcio professionistico maschile europeo: 3-4.1 lesioni per 1000 ore di gara e 0.4-0.5 per 1000 ore di allenamento.",
          "Tra il 2001 e il 2014 l'incidenza \u00E8 aumentata del 2.3%/anno in gara (IC 95%: 0.6-4.1) e del 4.0%/anno in allenamento (IC 95%: 1.1-7.0).",
          "Una squadra di calcio professionistica di 25 giocatori pu\u00F2 attendersi circa 7 HSI a stagione.",
          "Il 68.2% delle HSI si verifica in allenamento (dati NCAA su football maschile, calcio maschile e femminile).",
          "Tempo perso dalla competizione: generalmente 3-28 giorni o pi\u00F9, in base alla gravit\u00E0.",
          "Tasso di recidiva compreso tra 13.9% e 63.3%; chi ha avuto una HSI ha un rischio 3.6 volte maggiore di subirne un'altra.",
          "L'elevata ricorrenza \u00E8 attribuita a riabilitazione inadeguata o a ritorno allo sport prematuro."
        ]
      },
      {
        title: "Caratteristiche Patoanatomiche",
        content: [
          "Il capo lungo del bicipite femorale \u00E8 il muscolo pi\u00F9 frequentemente coinvolto, sia al primo episodio sia nelle recidive: 79-84% dei casi.",
          "Il gruppo degli ischiocrurali presenterebbe una percentuale maggiore di fibre di tipo II rispetto agli altri muscoli della coscia, rendendolo pi\u00F9 vulnerabile; la percentuale reale varia con l'et\u00E0 e le caratteristiche individuali.",
          "Un aumentato tilt pelvico anteriore pone gli ischiocrurali in posizione pi\u00F9 allungata e pu\u00F2 aumentare la probabilit\u00E0 di lesione.",
          "L'architettura muscolare conta: nel lato infortunato si osservano fascicoli pi\u00F9 corti e angolo di pennazione maggiore rispetto al lato sano, a tutte le intensit\u00E0 di contrazione.",
          "MECCANISMO DA SOVRACCARICO: avviene in posizione allungata, come nella corsa ad alta velocit\u00E0, quando gli ischiocrurali si contraggono eccentricamente su anca e ginocchio nella fase tardiva di volo e all'appoggio del tallone. Coinvolge tipicamente il bicipite femorale.",
          "MECCANISMO DA SOVRA-STIRAMENTO: avviene con flessione d'anca ed estensione di ginocchio combinate, come nel calciare o nel raccogliere un oggetto da terra a ginocchio esteso. Coinvolge tipicamente il semimembranoso prossimale."
        ]
      },
      {
        title: "Fattori di Rischio",
        content: [
          "\u2500\u2500\u2500 NON MODIFICABILI \u2500\u2500\u2500",
          "INFORTUNIO PRECEDENTE: fattore di rischio pi\u00F9 consistente. Tasso di recidiva da 2 a 6 volte superiore; meta-analisi su 71.324 atleti: RR 2.7 (IC 95%: 2.4-3.1).",
          "RECENZA DELL'INFORTUNIO: una HSI entro le 8 settimane precedenti espone a rischio molto maggiore (OR 13.1; IC 95%: 11.5-14.9) rispetto a una lesione meno recente (OR 3.5; IC 95%: 3.2-3.9).",
          "STESSA STAGIONE: il rischio di recidiva \u00E8 massimo nella medesima stagione (RR 4.8; IC 95%: 3.5-6.6).",
          "ET\u00C0: atleti oltre i 23 anni sono a rischio maggiore (RR 1.34; IC 95%: 1.14-1.57); nel football australiano oltre i 25 anni RR 4.43 (IC 95%: 1.57-12.52).",
          "ALTRI INFORTUNI PREGRESSI: lesione del LCA (RR 1.7), stiramento del polpaccio (RR 1.5), altri infortuni di ginocchio e distorsioni legamentose di caviglia. NON risultano fattori di rischio lo stiramento del quadricipite e la patologia cronica inguinale.",
          "NON SONO FATTORI DI RISCHIO: altezza e gamba calciante preferita.",
          "\u2500\u2500\u2500 MODIFICABILI \u2500\u2500\u2500",
          "PESO E BMI: le revisioni sistematiche non li supportano come fattori di rischio.",
          "FLESSIBILIT\u00C0: nessuna relazione tra flessibilit\u00E0 degli ischiocrurali e HSI (nessuna associazione con ROM passivo di estensione del ginocchio, AKE, SLR passivo e slump test).",
          "ARCHITETTURA MUSCOLARE: lunghezza fascicolare del bicipite femorale e stiffness dell'unit\u00E0 muscolo-tendinea sono invece fattori modificabili associati alla lesione.",
          "FORZA: evidenza limitata per la debolezza degli ischiocrurali come fattore di rischio; nessuna associazione con la forza dei flessori misurata durante Nordic o test isocinetico. Un maggiore picco di coppia concentrica del quadricipite a 300\u00B0/s risulta invece fattore di rischio (HR 2.06; IC 95%: 1.21-3.51).",
          "CARICO DI CORSA AD ALTA VELOCIT\u00C0: maggiori richieste posizionali di high-speed running sono fattore di rischio, con evidenza da moderata a forte in calcio, football americano e rugby. Particolarmente a rischio gli atleti con incrementi rapidi dell'esposizione.",
          "CONTROLLO MOTORIO: attivit\u00E0 alterata di tronco e glutei e controllo motorio anomalo sono potenziali fattori di rischio; aumentato tilt pelvico anteriore e inclinazione laterale del rachide toracico durante lo sprint risultano associati alla lesione."
        ]
      },
      {
        title: "Decorso Clinico e Guarigione",
        content: [
          "La lesione pu\u00F2 verificarsi lungo tutta la lunghezza del muscolo, ma pi\u00F9 frequentemente alla giunzione miotendinea del bicipite femorale prossimale.",
          "Al momento del trauma: dolore improvviso e acuto alla faccia posteriore della coscia, spesso con sensazione udibile o palpabile di schiocco; l'atleta interrompe abitualmente l'attivit\u00E0.",
          "Le lesioni con danno miofasciale pi\u00F9 esteso che si prolunga nel tendine sono pi\u00F9 soggette a recidiva e a ritorno allo sport ritardato.",
          "FASE INFIAMMATORIA: immediata, dura circa 3-5 giorni. Vasodilatazione e aumentata permeabilit\u00E0 capillare causano stasi di fluidi e ambiente ischemico locale, con ulteriore danno muscolare ed edema. Clinicamente: dolore, gonfiore, sanguinamento e perdita di ROM.",
          "FASE PROLIFERATIVA: si sovrappone parzialmente alla precedente e pu\u00F2 durare diverse settimane. Le cellule satelliti riparano le miofibre danneggiate mentre collagene e infrastruttura vascolare vengono ricostruiti. Clinicamente: debolezza, rigidit\u00E0, gonfiore e limitazione funzionale.",
          "FASE DI RIMODELLAMENTO: pu\u00F2 proseguire fino a 2 anni. Formazione finale del collagene; una matrice extracellulare correttamente allineata \u00E8 necessaria per mantenere l'orientamento ottimale delle miofibrille.",
          "IMPLICAZIONE PRATICA: ROM precoce di anca e ginocchio e mobilizzazione dei tessuti molli favoriscono una cicatrice pi\u00F9 organizzata, con minori aderenze ai tessuti circostanti e minore tasso di recidiva."
        ]
      },
      {
        title: "Diagnosi e Classificazione in Gradi",
        content: [
          "RACCOMANDAZIONE (Grado B): porre diagnosi di HSI in presenza di esordio improvviso di dolore posteriore alla coscia durante l'attivit\u00E0, dolore riprodotto dallo stiramento e/o dall'attivazione degli ischiocrurali, dolorabilit\u00E0 muscolare alla palpazione e perdita di funzione.",
          "Il reperto pi\u00F9 utile risulta il riferito esordio improvviso di dolore (presente nel 91% dei casi).",
          "\u2500\u2500\u2500 GRADO I \u2014 STIRAMENTO LIEVE (Grado F) \u2500\u2500\u2500",
          "Microlacerazione di poche fibre muscolari; dolore locale di dimensioni ridotte; tensione ed eventuali crampi posteriori; lieve dolore allo stiramento e/o all'attivazione; rigidit\u00E0 che pu\u00F2 ridursi durante l'attivit\u00E0 e ricomparire dopo; minima perdita di forza; deficit <15\u00B0 al test AKE. Durata media riabilitazione: 25.9 giorni.",
          "\u2500\u2500\u2500 GRADO II \u2014 STIRAMENTO MODERATO (Grado F) \u2500\u2500\u2500",
          "Lacerazione moderata delle fibre con muscolo ancora integro; dolore locale su area pi\u00F9 estesa; dolore maggiore allo stiramento e/o all'attivazione; rigidit\u00E0, debolezza, possibile emorragia ed ecchimosi; capacit\u00E0 di cammino limitata soprattutto nelle prime 24-48 ore; deficit 16\u00B0-25\u00B0 al test AKE. Durata media riabilitazione: 30.7 giorni.",
          "\u2500\u2500\u2500 GRADO III \u2014 STIRAMENTO GRAVE (Grado F) \u2500\u2500\u2500",
          "Lacerazione completa del muscolo; gonfiore e sanguinamento diffusi; possibile massa palpabile di tessuto muscolare in sede di rottura; estrema difficolt\u00E0 o incapacit\u00E0 di camminare; deficit 26\u00B0-35\u00B0 al test AKE. Durata media riabilitazione: 75.0 giorni.",
          "\u26A0\uFE0F Nei modelli ad accesso diretto, i sospetti di lesione di grado III vanno inviati al medico (Grado F).",
          "NOTA: i criteri di grading sono di uso comune ma necessitano ancora di studi su affidabilit\u00E0 e validit\u00E0, e non considerano la sede esatta della lesione."
        ]
      },
      {
        title: "Diagnosi Differenziale e Imaging",
        content: [
          "DIAGNOSI DIFFERENZIALE per sintomi posteriori di coscia: radicolopatia lombare, disfunzione sacroiliaca, deep gluteal syndrome con intrappolamento nervoso, sindrome del tunnel ischiatico, stiramento degli adduttori, contusione, sindrome compartimentale, trombosi.",
          "Quando l'area di massima dolorabilit\u00E0 \u00E8 all'origine o all'inserzione del gruppo, va considerata la patologia tendinea nella diagnosi differenziale.",
          "Se il meccanismo \u00E8 un trauma diretto alla faccia posteriore della coscia, considerare una diagnosi differente, ad esempio una contusione.",
          "Un esordio insidioso con sintomi posteriori vaghi deve far sospettare un dolore riferito dal rachide lombare.",
          "IMAGING: in genere non necessaria nelle lesioni di grado I e II diagnosticate clinicamente, che possono peraltro non essere identificabili in RM.",
          "RM raccomandata nel sospetto di lesione di grado III.",
          "L'aggiunta della RM all'esame clinico spiega solo un ulteriore 2.8% della varianza nella previsione del tempo di ritorno allo sport: non migliora sostanzialmente la prognosi rispetto alla sola valutazione clinica.",
          "RM o ecografia possono essere utili nelle presentazioni atipiche o quando il trattamento conservativo non d\u00E0 risultati soddisfacenti; radiografia in genere non necessaria, salvo sintomi prossimali per escludere fratture da avulsione."
        ]
      },
      {
        title: "Esame Fisico \u2014 Misure di Impairment",
        content: [
          "RACCOMANDAZIONE (Grado A): quantificare la forza dei flessori del ginocchio con dinamometro portatile (HHD) o isocinetico.",
          "RACCOMANDAZIONE (Grado A): valutare la lunghezza degli ischiocrurali misurando il deficit di estensione del ginocchio con anca flessa a 90\u00B0, usando un inclinometro.",
          "RACCOMANDAZIONE (Grado C): la lunghezza dell'area di dolorabilit\u00E0 e la sua prossimit\u00E0 alla tuberosit\u00E0 ischiatica possono aiutare a prevedere i tempi di ritorno allo sport.",
          "RACCOMANDAZIONE (Grado F): valutare postura e controllo di tronco e bacino durante i movimenti funzionali.",
          "FORZA ISOMETRICA CON HHD \u2014 posizioni di test: inner range (prono, ginocchio a 90\u00B0, make force); midrange (prono, ginocchio esteso, arto sollevato, break force dopo 3 secondi); outer range (supino, anca e ginocchio a 90\u00B0, break force); 15\u00B0 di flessione (prono, make force). Affidabilit\u00E0 intrarater ICC 0.87-0.90.",
          "TEST NORDIC ECCENTRICO: posizione in ginocchio con caviglie bloccate, discesa lenta del tronco mantenendo rachide e anche neutri; ICC 0.87-0.92, MDC95 55.6 N.",
          "SINGLE-LEG BRIDGE TEST: tallone su rialzo di 60 cm, ginocchio a 20\u00B0, ripetizioni fino a esaurimento; punteggi inferiori risultano associati a successiva HSI.",
          "TEST AKE (anca/ginocchio 90\u00B0/90\u00B0): estensione massima del ginocchio con misurazione del deficit; affidabilit\u00E0 con ROM attivo ICC 0.89 (SEM 5.3\u00B0). Nei casi confermati ecograficamente il deficit medio rispetto al lato sano \u00E8 di 12.8\u00B0 \u00B1 6.8\u00B0.",
          "SLR e ASKLING H-TEST: l'H-test prevede tre SLR eseguiti il pi\u00F9 rapidamente e in alto possibile senza timore di recidiva, registrando il valore maggiore (ICC 0.96); utile nella decisione di ritorno allo sport.",
          "MAPPATURA DELLA DOLORABILIT\u00C0: in prono a ginocchio esteso, si individua il punto di massima dolorabilit\u00E0 misurandone la distanza dalla tuberosit\u00E0 ischiatica, poi si delimitano lunghezza e larghezza dell'area. Percentuale di lunghezza della dolorabilit\u00E0 ed et\u00E0 sono i migliori predittori dei giorni al ritorno allo sport (R\u00B2 = 0.73). Un dolore pi\u00F9 prossimale comporta tempi pi\u00F9 lunghi.",
          "SQUILIBRIO ECCENTRICO: un'asimmetria di forza eccentrica dei flessori tra gli arti superiore al 15-20% aumenta il rischio di HSI rispettivamente di 2.4 e 3.4 volte."
        ]
      },
      {
        title: "Attivit\u00E0, Partecipazione e Outcome Measures",
        content: [
          "RACCOMANDAZIONE (Grado B): includere misure oggettive della capacit\u00E0 di camminare, correre e sprintare per documentare i cambiamenti di attivit\u00E0 e partecipazione nel corso del trattamento.",
          "PROGRESSIONE FUNZIONALE DI RIFERIMENTO: cammino indolore \u2192 corsa lenta indolore \u2192 corsa al 70% della velocit\u00E0 massima percepita \u2192 cambi di direzione indolori \u2192 corsa al 100%.",
          "RACCOMANDAZIONE (Grado B): usare la FASH (Functional Assessment Scale for Acute Hamstring Injuries) prima e dopo gli interventi nei soggetti con HSI acuta.",
          "FASH: questionario a 10 item, affidabilit\u00E0 test-retest eccellente (ICC 0.9), consistenza interna elevata (alfa di Cronbach 0.98), validit\u00E0 di facciata, di contenuto e di costrutto stabilite.",
          "HaOS (Hamstring Outcome Score): 5 domini \u2014 indolenzimento, sintomi, dolore, attivit\u00E0 sportive e qualit\u00E0 di vita. Punteggio \u226580% indica basso rischio di HSI, sotto l'80% rischio elevato. Usato principalmente in fase pre-partecipazione per identificare atleti suscettibili.",
          "TEST DI SPRINT RIPETUTI: affidabilit\u00E0 eccellente (ICC 0.978); atleti con precedente HSI mostrano un decremento di velocit\u00E0 significativo nelle ripetizioni."
        ]
      },
      {
        title: "Prevenzione dell'Infortunio",
        content: [
          "RACCOMANDAZIONE (Grado A): includere il Nordic hamstring exercise (NHE) in un programma di prevenzione, insieme ad altre componenti di riscaldamento, stretching, training di stabilit\u00E0, rinforzo e movimenti funzionali (sport-specifici, agilit\u00E0 e corsa ad alta velocit\u00E0).",
          "EFFICACIA: il NHE riduce l'incidenza di HSI del 51% (RR 0.49; IC 95%: 0.32-0.74) su 15 studi e 8459 atleti.",
          "L'efficacia dipende dall'aderenza al programma: la compliance \u00E8 determinante.",
          "CALCIO FEMMINILE: le strategie basate sull'esercizio riducono l'incidenza del 40-60%, in linea con quanto osservato negli uomini (incidence rate ratio 0.40; IC 95%: 0.17-0.95).",
          "RCT su 259 calciatori maschi di scuola superiore: tempo perso per infortunio nettamente inferiore nel gruppo NHE rispetto al controllo.",
          "PROGRAMMI STRUTTURATI: FIFA 11+, HarmoKnee e New Warm-up Program includono il NHE insieme alle altre componenti citate.",
          "DOSAGGIO: le raccomandazioni variano, da 2 serie di 3 ripetizioni una volta a settimana fino a 3 serie da 10 due volte a settimana, con progressione graduale fino a 4 sessioni settimanali. Gli esercizi si eseguono generalmente dopo l'allenamento e nei giorni che precedono un giorno di riposo, per consentire un recupero adeguato.",
          "STRETCHING: evidenza inconcludente a supporto del solo stretching degli ischiocrurali in prevenzione.",
          "ESERCIZI ECCENTRICI DIVERSI DAL NHE: evidenza debole; il NHE resta l'esercizio meglio supportato."
        ]
      },
      {
        title: "Interventi dopo l'Infortunio",
        content: [
          "RACCOMANDAZIONE (Grado B): usare il training eccentrico secondo la tolleranza del paziente, aggiunto a stretching, rinforzo, stabilizzazione e programmi di corsa progressiva, per migliorare i tempi di ritorno allo sport.",
          "RACCOMANDAZIONE (Grado B): usare agilit\u00E0 progressiva e stabilizzazione del tronco, aggiunte a un programma impairment-based con stretching, rinforzo ed esercizi funzionali, per ridurre il tasso di recidiva.",
          "RACCOMANDAZIONE (Grado F): la mobilizzazione neurale pu\u00F2 essere usata per ridurre le aderenze ai tessuti circostanti, insieme a terapie fisiche per controllare dolore e gonfiore nelle fasi precoci della guarigione.",
          "DOSAGGIO DELL'ESERCIZIO: iniziare il rinforzo, eccentrico compreso, precocemente e guidati dalla tolleranza al dolore. Gli studi efficaci prevedono 6-12 ripetizioni in base all'intensit\u00E0, con carico e ROM aumentati secondo tolleranza, 2-3 volte a settimana.",
          "CORSA: programma con fasi di accelerazione e decelerazione, incremento progressivo di velocit\u00E0 e distanza lungo tutto il percorso riabilitativo, secondo tolleranza.",
          "SOGLIA DEL DOLORE: un RCT di alta qualit\u00E0 non ha trovato differenze tra riabilitazione condotta entro limiti di assenza di dolore (mediana 15 giorni al ritorno) e riabilitazione condotta fino alla soglia del dolore (17 giorni), con 2 recidive per gruppo.",
          "AGILIT\u00C0 E STABILIZZAZIONE vs STRETCHING E RINFORZO ISOLATI: rischio di recidiva nettamente inferiore con agilit\u00E0 e stabilizzazione (7.7% contro 70%).",
          "PROGRAMMA INDIVIDUALIZZATO vs SOLO NHE: un programma impairment-based individualizzato riduce il rischio di recidiva rispetto al solo NHE standard (RR 6; IC 90%: 1-35), senza differenze nei tempi di ritorno.",
          "STRETCHING ISOLATO: evidenza insufficiente a supportarlo come trattamento unico nella gestione della HSI.",
          "MOBILIZZAZIONE PRECOCE: una serie di casi su 48 lesioni in atleti universitari riporta ritorno allo sport in media a 11.9 giorni (range 5-23) con mobilizzazione precoce, stretching progressivo ed esercizi funzionali sport-correlati.",
          "\u26A0\uFE0F CAUTELA SUL CARICO: progredire esercizio e corsa oltre la tolleranza individuale pu\u00F2 riacutizzare i sintomi. Riconoscere la fase di guarigione in corso (infiammatoria, proliferativa, di rimodellamento) e usare un metodo sistematico per iniziare, monitorare e progredire il carico sul tessuto."
        ]
      },
      {
        title: "Ritorno allo Sport e Rischio di Recidiva",
        content: [
          "RACCOMANDAZIONE (Grado B): considerare la storia di HSI nella progressione verso il ritorno allo sport, poich\u00E9 una lesione precedente \u00E8 fattore di rischio per la recidiva.",
          "RACCOMANDAZIONE (Grado B): usare cautela nelle decisioni di ritorno allo sport per chi non ha completato un programma di esercizio funzionale impairment-based adeguatamente progredito e comprensivo di training eccentrico.",
          "RACCOMANDAZIONE (Grado B): stimare i tempi di ritorno usando forza degli ischiocrurali, livello di dolore al momento dell'infortunio, numero di giorni dall'infortunio al cammino indolore e area di dolorabilit\u00E0 misurata alla valutazione iniziale.",
          "VALUTAZIONE A 7 GIORNI: la combinazione di variabili cliniche e demografiche raccolte alla valutazione iniziale spiega il 50% della varianza (\u00B119 giorni) nella previsione del ritorno; le stesse variabili raccolte 7 giorni dopo spiegano il 97% della varianza (\u00B15 giorni).",
          "VARIABILI PI\u00D9 PREDITTIVE, in ordine: variazione di forza nella prima settimana al test midrange; picco di coppia isocinetica in flessione del ginocchio dell'arto sano al giorno 1; livello di dolore al momento dell'infortunio; giorni al cammino indolore; praticare calcio; forza inner-range al giorno 1; presenza o assenza di dolore al single-leg bridge al giorno 7; ritardo nell'inizio della fisioterapia; percentuale di forza outer-range rispetto all'arto sano.",
          "BATTERIA DI TEST RACCOMANDATA: combinazione di valutazione clinica (test muscolare manuale, ROM, palpazione), test di performance (sprint, agilit\u00E0, salti monopodalici, gesti sport-specifici) e dinamometria isocinetica.",
          "ESITI DELLE DIVERSE STRATEGIE: con clinica e test di performance, ritorno medio 23-45 giorni e recidive 9.1-63.3%; aggiungendo la dinamometria isocinetica, ritorno 12-25 giorni e recidive 6.25-13.9%; con l'Askling H-test nei criteri decisionali, ritorno 36 e 63 giorni con recidive 1.3% e 3.6%.",
          "DIFFERENZE DI GENERE: nessuna differenza nei tempi di ritorno tra uomini e donne, ma tasso di recidiva superiore nei calciatori maschi (22%) rispetto alle calciatrici (12%).",
          "PRINCIPIO GUIDA: consentire il ritorno prima che l'atleta sia pronto aumenta il rischio di recidiva. Una progressione funzionale basata su criteri oggettivi permette un rientro efficace e tempestivo minimizzando quel rischio."
        ]
      },
      {
        title: "Protocollo Riabilitativo Aspetar \u2014 6 Stadi Criteria-Based",
        content: [
          "FONTE: Aspetar Orthopaedic and Sports Medicine Hospital, Doha \u2014 Aspetar Hamstring Protocol (link 'Protocollo Riabilitativo' qui sopra). \u26A0\uFE0F Le tabelle complete di esercizi, serie e ripetizioni si trovano nel documento originale: qui \u00E8 riportata la struttura del protocollo e i criteri di progressione.",
          "PRINCIPIO CARDINE: la progressione allo stadio successivo richiede che criteri fisici prestabiliti siano dimostrati con test specifici. Non si progredisce per tempo trascorso, ma per criteri raggiunti.",
          "MISURAZIONI GIORNALIERE: dolore soggettivo, dolore alla palpazione, ROM/flessibilit\u00E0 e forza. Questi dati permettono di adattare il protocollo giorno per giorno e di leggere la risposta al trattamento del giorno precedente.",
          "NESSUNA PROVOCAZIONE DEL DOLORE \u00E8 ammessa durante l'esecuzione degli esercizi.",
          "STRUTTURA: 6 stadi complessivi \u2014 3 stadi 'fisioterapici' e 3 stadi sport-specifici. Nonostante gli esercizi suggeriti per ciascuno stadio, il ragionamento clinico resta continuamente necessario per adattare ogni singola seduta.",
          "SUPERVISIONE: nel protocollo validato, riabilitazione supervisionata da fisioterapisti esperti 3-5 giorni a settimana, avviata il prima possibile dopo l'infortunio.",
          "\u2500\u2500\u2500 STADIO 1 \u2014 GUARIGIONE E CARICO PRECOCE OTTIMALE \u2500\u2500\u2500",
          "OBIETTIVI: promuovere la guarigione e il carico precoce ottimale del tessuto lesionato; proteggere lo sviluppo del tessuto cicatriziale; minimizzare atrofia muscolare e dolore.",
          "CARICO ISOMETRICO PRECOCE: isometrie a leva corta come punto di partenza, dove non ci si attende produzione di forza elevata e il dolore pu\u00F2 addirittura impedire la contrazione. Principio operativo: carichi piccoli, molto frequenti.",
          "Le lesioni con coinvolgimento tendineo o pi\u00F9 prossimali rispondono bene alle isometrie precoci, che permettono di caricare in modo pi\u00F9 selettivo le zone interessate dell'unit\u00E0 muscolo-tendinea.",
          "\u2500\u2500\u2500 STADI 2-3 \u2014 RECUPERO COMPLETO DELLA FUNZIONE MUSCOLARE \u2500\u2500\u2500",
          "OBIETTIVI: recuperare il pieno controllo volontario del muscolo lesionato; recuperare forza indolore dai range interni fino alle lunghezze maggiori; sviluppare adeguato controllo di tronco e bacino con velocit\u00E0 e carico crescenti sugli ischiocrurali; raggiungere corsa indolore fino alla velocit\u00E0 massima, con cambi di direzione e sotto affaticamento.",
          "CRITERIO DECISIONALE SULLE ISOMETRIE: se la forza aumenta e il dolore diminuisce, si progredisce o si aumenta l'intensit\u00E0. Se compare dolore con calo di forza, in quella seduta non si progredisce.",
          "RIFERIMENTO DI FORZA: la forza dell'arto lesionato viene espressa come percentuale dell'arto sano, usato come stima della forza attesa a fine riabilitazione.",
          "In fase intermedia si abbandona di norma il test isometrico in inner range, poich\u00E9 il dolore si \u00E8 risolto e la forza \u00E8 tornata a livelli comparabili al lato sano; resta invece utile nelle lesioni con coinvolgimento tendineo.",
          "PROGRESSIONE PONTE: dal bridge bipodalico al single-leg bridge test.",
          "CARICO ADEGUATO: una volta raggiunta un'intensit\u00E0 sufficiente, \u00E8 atteso un lieve calo di forza o di ROM se si testa entro un ciclo di 24-36 ore. \u00C8 la normale risposta al carico di allenamento e indica che il dosaggio \u00E8 adeguato.",
          "PREPARAZIONE ALL'ECCENTRICO: l'esercizio isometrico bilaterale in ginocchio aiuta l'atleta a superare il timore di caricare il muscolo lesionato e prepara il passaggio agli esercizi eccentrici.",
          "\u2500\u2500\u2500 STADI 4-6 \u2014 REINTEGRO SPORT-SPECIFICO COMPLETO \u2500\u2500\u2500",
          "OBIETTIVI: rimanere asintomatici durante tutte le attivit\u00E0; completare tre sedute sport-specifiche progressive a pieno impegno senza dolore n\u00E9 durante n\u00E9 dopo la seduta.",
          "TEST DI FINE PERCORSO: si prosegue con i test isometrici in mid e outer range. Gli hold isometrici possono rivelare un problema di endurance o di affaticamento muscolare, visibile nell'impulso della curva di forza.",
          "ATTENZIONE METODOLOGICA: possono emergere discrepanze tra dinamometro portatile monopodalico, dinamometro a telaio fisso bilaterale e dinamometro a punto fisso \u2014 un atleta pu\u00F2 mostrare differenze significative nel test unilaterale e nessuna in quello bilaterale.",
          "\u2500\u2500\u2500 PROGRESSIONE DELLA CORSA \u2500\u2500\u2500",
          "ESERCIZI PREPARATORI: triple extension walk, high knee, 'A' drill, high knee con kicks (indicativamente 100 m per giro, 2 giri).",
          "WALK-JOG: iniziare a correre al 10-25% della velocit\u00E0 massima autovalutata dal paziente, con progressione a step del 10% fino a un massimo del 70%.",
          "JOG-RUN E MODIFIED T-DRILLS: iniziare al 70% autovalutato, progredire del 10% finch\u00E9 possibile; raggiunto il 90%, procedere per incrementi del 5%.",
          "\u2500\u2500\u2500 VARIANTE ASPETAR+ \u2500\u2500\u2500",
          "Il protocollo ASPETAR+ ha struttura identica ma aggiunge esercizi di allungamento (lengthening) avviati precocemente nella fase riabilitativa, con l'obiettivo di caricare l'unit\u00E0 muscolo-tendinea a lunghezze maggiori verso il fine range."
        ]
      },
      {
        title: "Albero Decisionale \u2014 Sintesi Operativa",
        content: [
          "\u2500\u2500\u2500 SCREENING E CLASSIFICAZIONE \u2500\u2500\u2500",
          "Esordio improvviso di dolore posteriore alla coscia (B); dolore riprodotto da stiramento e attivazione (B); dolorabilit\u00E0 alla palpazione (B); perdita di funzione (B); precedente HSI (B); grading I-II-III con test AKE (F); invio al medico per sospetto grado III (F).",
          "\u2500\u2500\u2500 MISURE PER DOCUMENTARE I PROGRESSI \u2500\u2500\u2500",
          "Forza dei flessori con HHD o dinamometro isocinetico (A); lunghezza degli ischiocrurali con inclinometro e deficit di estensione ad anca flessa a 90\u00B0 (A); lunghezza dell'area di dolorabilit\u00E0 e posizione rispetto alla tuberosit\u00E0 ischiatica; postura e controllo di tronco e bacino nei movimenti funzionali (F); misure oggettive di cammino, corsa e sprint (B); FASH (B).",
          "\u2500\u2500\u2500 MISURE PER STIMARE I TEMPI DI RITORNO \u2500\u2500\u2500",
          "Forza dei flessori con HHD o isocinetico (B); livello di dolore al momento dell'infortunio (B); giorni al cammino indolore (B); area di dolorabilit\u00E0 alla valutazione iniziale (B).",
          "\u2500\u2500\u2500 STRATEGIE DI INTERVENTO \u2500\u2500\u2500",
          "Training eccentrico secondo tolleranza, inserito in un programma impairment-based con stretching, rinforzo, stabilizzazione, agilit\u00E0 e corsa progressiva (B); mobilizzazione neurale (F); terapie fisiche per la gestione dei sintomi (F).",
          "\u2500\u2500\u2500 PREVENZIONE \u2500\u2500\u2500",
          "Nordic hamstring exercise con riscaldamento, stretching, training di stabilit\u00E0, rinforzo e movimenti funzionali sport-specifici, agilit\u00E0 e corsa ad alta velocit\u00E0 (A).",
          "\u2500\u2500\u2500 LEGENDA GRADI \u2500\u2500\u2500",
          "A = evidenza forte (prevalenza di studi di livello I e/o II, con almeno uno di livello I) \u2014 B = evidenza moderata \u2014 C = evidenza debole \u2014 D = evidenza conflittuale \u2014 E = evidenza teorica/fondazionale \u2014 F = opinione degli esperti."
        ]
      }
    ]
  },
  {
    id: 20,
    category: "Prescrizione Esercizio",
    color: "#2E6B8A",
    icon: "\u{1F3CB}\uFE0F",
    title: "Prescrizione dell'Allenamento contro Resistenza \u2014 ACSM Position Stand 2026",
    source: "Currier et al. | Med Sci Sports Exerc 2026;58(4):851-872 | American College of Sports Medicine",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/",
    pdfUrl2: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/pdf/msse-58-851.pdf",
    tags: ["esercizio", "forza", "ipertrofia", "potenza", "ACSM", "resistance training", "prescrizione", "carico", "volume", "1RM"],
    summary: "Position Stand ACSM 2026 sulla prescrizione dell'allenamento contro resistenza per funzione muscolare, ipertrofia e performance fisica in adulti sani. Overview di 137 revisioni sistematiche e oltre 30.000 partecipanti. Aggiorna il Position Stand 2009 'Progression models in resistance training for healthy adults'. Indica quali variabili di prescrizione influenzano realmente gli adattamenti e quali no.",
    sections: [
      {
        title: "Inquadramento e Metodo",
        content: [
          "OBIETTIVO: determinare l'impatto delle variabili di prescrizione dell'allenamento contro resistenza (RTx) su funzione muscolare e ipertrofia, con metodi di sintesi delle evidenze. Aggiorna il Position Stand ACSM 2009.",
          "DISEGNO: overview of reviews (umbrella review), registrata prospetticamente (INPLASY202360071) e condotta secondo PRIOR. Ricerca su Ovid MEDLINE, Emcare, Embase, Cochrane, SPORTDiscus e Web of Science aggiornata a ottobre 2024.",
          "SELEZIONE: 5751 record dopo rimozione dei duplicati, 137 revisioni sistematiche incluse, oltre 30.000 partecipanti complessivi.",
          "CRITERI: revisioni sistematiche di trial randomizzati su adulti sani (\u226518 anni) con programma di almeno 6 settimane (range 6-52) e almeno 12 esposizioni, confrontati con gruppo senza esercizio o con prescrizione diversa secondo il principio FITT-VP (Frequenza, Intensit\u00E0, Tempo, Tipo, Volume, Pattern, Progressione).",
          "QUALIT\u00C0: valutata con AMSTAR (punteggi da 1 a 9 su 11 possibili); qualit\u00E0 delle evidenze (QoE) calcolata con metodo derivato da GRADE ed espressa come percentuale da 0 a 100%.",
          "POPOLAZIONE: adulti sani senza patologie definite, inclusa l'assenza di obesit\u00E0, sarcopenia e fragilit\u00E0 fisica. Prevalentemente soggetti con esperienza minima o nulla di allenamento contro resistenza.",
          "\u26A0\uFE0F NOTA DI TRASFERIBILIT\u00C0: le raccomandazioni riguardano adulti sani. L'applicazione a pazienti in riabilitazione o con patologia muscoloscheletrica richiede adattamento clinico e non \u00E8 oggetto di questo documento."
        ]
      },
      {
        title: "Effetti Rispetto al Non Allenarsi",
        content: [
          "Rispetto al controllo senza esercizio, l'allenamento contro resistenza migliora in modo significativo: forza muscolare, ipertrofia, potenza, resistenza muscolare, velocit\u00E0 di contrazione, velocit\u00E0 del cammino, equilibrio e diversi indicatori di funzione fisica.",
          "FORZA: migliorata da resistance training standard (26 revisioni, n=23.204, QoE 73%), circuit training (3 revisioni, n=843, QoE 92%), elastici (2 revisioni, n=1921), allenamento domiciliare (2 revisioni, n=892) e velocity-based training (2 revisioni, n=870).",
          "IPERTROFIA: migliorata da resistance training standard (12 revisioni, n=14.924, QoE 79%), circuit training e allenamento con elastici.",
          "POTENZA: migliorata dal resistance training standard (4 revisioni, n=1001, QoE 63%).",
          "CROSS-EDUCATION: l'allenamento unilaterale migliora la forza anche nell'arto controlaterale non allenato (2 revisioni, n=1194, QoE 88%) \u2014 rilevante quando un arto \u00E8 immobilizzato o non caricabile.",
          "FUNZIONE FISICA: migliorati velocit\u00E0 del cammino (8 revisioni, n=3407, QoE 81%), Timed Up-and-Go (5 revisioni, n=1568, QoE 90%), chair stand test (2 revisioni, n=954, QoE 88%) ed equilibrio.",
          "SALTO: migliorato da flywheel eccentrico e velocity-based training. \u26A0\uFE0F Gli autori precisano che la performance di salto non va considerata un indicatore indiretto della potenza muscolare.",
          "SPPB: la Short Physical Performance Battery non risulta migliorata dal resistance training standard, ma gli autori attribuiscono il dato alla scarsit\u00E0 di revisioni disponibili (solo 2) pi\u00F9 che a un vero effetto nullo \u2014 le sue singole componenti (cammino, equilibrio, chair stand) risultano tutte migliorate."
        ]
      },
      {
        title: "Prescrizione per Obiettivo \u2014 Tabella 6",
        content: [
          "Le variabili elencate migliorano l'adattamento RISPETTO al resistance training standard, sulla base delle meta-analisi incluse che mostrano un effetto significativo.",
          "\u2500\u2500\u2500 FORZA \u2500\u2500\u2500",
          "Frequenza: almeno 2 sessioni a settimana (il limite superiore non \u00E8 determinabile dai dati)",
          "Intensit\u00E0: carichi \u226580% 1RM, con relazione dose-risposta",
          "Tipo: flywheel eccentrico",
          "Tecnica: range di movimento completo",
          "Volume: 2-3 serie per sessione",
          "Ordine: esercizio all'inizio della sessione (non alla fine)",
          "\u2500\u2500\u2500 IPERTROFIA \u2500\u2500\u2500",
          "Tipo: contrazioni eccentriche / sovraccarico eccentrico",
          "Volume: almeno 10 serie a settimana per gruppo muscolare, con relazione dose-risposta",
          "\u2500\u2500\u2500 POTENZA \u2500\u2500\u2500",
          "Intensit\u00E0: carichi moderati, 30-70% 1RM",
          "Tipo: flywheel eccentrico",
          "Tecnica: sollevamento olimpico; power training (fase concentrica alla massima velocit\u00E0 volontaria)",
          "Volume: basso-moderato (ripetizioni \u00D7 serie \u226424)",
          "\u2500\u2500\u2500 FUNZIONE FISICA \u2500\u2500\u2500",
          "Funzione multicomponente, SPPB e performance nel cammino: migliorate dal power training",
          "Performance di corsa e di salto: migliorate dal velocity-based training",
          "Resistenza muscolare, velocit\u00E0 del cammino, TUG, chair stand ed equilibrio: dati insufficienti per indicare una prescrizione ottimale, pur essendo tutti migliorati dall'allenamento in s\u00E9"
        ]
      },
      {
        title: "Variabili che NON Modificano gli Adattamenti",
        content: [
          "Questo \u00E8 forse il contributo pi\u00F9 rilevante del documento: molte variabili tradizionalmente considerate decisive non risultano determinanti.",
          "CEDIMENTO MUSCOLARE: allenare fino al cedimento non migliora forza, ipertrofia n\u00E9 potenza, quindi non \u00E8 necessario. Pu\u00F2 anzi essere sconsigliabile in alcune popolazioni (per esempio anziani) per rischi vascolari e per il maggior rischio di infortunio legato al decadimento della tecnica. Un'intensit\u00E0 di sforzo adeguata si ottiene lavorando 'near-failure', con circa 2-3 ripetizioni di riserva (RIR).",
          "MACCHINE O PESI LIBERI: nessuna differenza sulla forza.",
          "SUPERFICI INSTABILI: nessun vantaggio sulla forza rispetto a superfici stabili.",
          "TEMPO SOTTO TENSIONE: contrazioni rapide (<2 s) ed esecuzioni lente (>2 s) producono risultati equivalenti su forza e ipertrofia; anche il confronto tra ripetizioni da 0.5 s e da 8 s non mostra differenze sull'ipertrofia.",
          "ORARIO DELLA GIORNATA: allenarsi al mattino o alla sera non cambia i risultati.",
          "RECUPERO TRA LE SERIE: recuperi brevi (<1 min) e lunghi (>1 min) non modificano la forza.",
          "TIPO DI CONTRAZIONE PER LA FORZA: eccentrico e concentrico equivalenti (mentre per l'ipertrofia l'eccentrico risulta superiore).",
          "STRUTTURA DELLE SERIE: cluster set, drop set, complex e contrast non producono vantaggi consistenti su forza o potenza.",
          "PERIODIZZAZIONE: non risulta superiore ai programmi non periodizzati per forza e ipertrofia. Gli autori concludono che \u00E8 meno importante di quanto ipotizzato nei Position Stand precedenti, a condizione che ci sia un adeguato sovraccarico progressivo.",
          "FREQUENZA PER L'IPERTROFIA: da 1 a oltre 5 giorni a settimana non fa differenza, se il volume totale \u00E8 equiparato.",
          "CARICO PER L'IPERTROFIA: dal 30% al 100% 1RM non fa differenza \u2014 l'ipertrofia dipende dal volume, non dal carico.",
          "RESTRIZIONE DEL FLUSSO EMATICO (BFR): non migliora l'ipertrofia rispetto al training standard. \u26A0\uFE0F Gli autori segnalano un limite metodologico: i protocolli BFR confrontano spesso carichi diversi, quindi l'effetto della restrizione non \u00E8 separabile da quello del carico.",
          "ORDINE DEGLI ESERCIZI PER L'IPERTROFIA: non influente (mentre per la forza conta \u2014 l'esercizio prioritario va messo all'inizio)."
        ]
      },
      {
        title: "Principi di Programmazione",
        content: [
          "RACCOMANDAZIONE PRIMARIA DEGLI AUTORI: gli adulti sani dovrebbero eseguire resistance training con sforzo elevato almeno due volte a settimana, coinvolgendo tutti i principali gruppi muscolari.",
          "SOVRACCARICO PROGRESSIVO: necessario per il progresso a lungo termine, ma non indispensabile per ottenere benefici. Pu\u00F2 essere realizzato aumentando carico, volume, frequenza, selezione degli esercizi o durata; oppure mantenendo lo stesso carico relativo tramite test di forza periodici o scale di sforzo percepito.",
          "VOLUME \u2014 DOSE-RISPOSTA E PLATEAU: una serie \u00E8 meglio di zero, due sono meglio di una. Una meta-regressione mostra per\u00F2 rendimenti decrescenti oltre circa 2-3 serie per esercizio per la forza e oltre circa 18-20 serie settimanali per l'ipertrofia. Indicazione minima: almeno 2 serie per esercizio.",
          "INDIVIDUALIZZAZIONE: gli autori la pongono davanti alla conformit\u00E0 a criteri prescrittivi rigidi. Programmi individualizzati aumentano adozione e aderenza, ed \u00E8 questo, non l'ottimizzazione dei parametri, il vero fattore limitante nella popolazione.",
          "SPECIFICIT\u00C0: gli adattamenti sono specifici allo stimolo applicato, ma nei soggetti non avanzati si osserva un considerevole trasferimento tra domini di performance.",
          "SUDDIVISIONE DEL CORPO: secondo gli autori \u00E8 sufficiente ragionare per quattro regioni \u2014 superiore e inferiore, spinta e trazione \u2014 eventualmente sei, distinguendo orizzontale e verticale per l'arto superiore.",
          "DIFFERENZA TRA MIGLIORAMENTO SIGNIFICATIVO E OTTIMALE: sono due obiettivi distinti. Miglioramenti significativi si ottengono con moltissimi programmi diversi; l'ottimizzazione riguarda solo poche variabili."
        ]
      },
      {
        title: "Sicurezza e Contesto",
        content: [
          "SICUREZZA: il resistance training \u00E8 sicuro per adulti sani di tutte le et\u00E0. In un'analisi su oltre 38.000 partecipanti (di cui oltre 6700 impegnati in resistance training e oltre 11.000 anziani), l'esercizio non ha aumentato il rischio di eventi avversi gravi.",
          "EVENTI AVVERSI NON GRAVI (dolore, affaticamento, borsite, edema): incidenza e rischio non diversi rispetto all'esercizio aerobico.",
          "COMPLICANZE CARDIOVASCOLARI: pi\u00F9 rare nel resistance training che nell'allenamento aerobico. In 23 studi su adulti con cardiopatia coronarica (n=1174), tutte le 63 complicanze cardiovascolari non fatali si sono verificate durante l'allenamento aerobico; le 20 complicanze muscoloscheletriche durante il resistance training erano dovute a condizioni preesistenti (artrosi di ginocchio) e si sono risolte modificando intensit\u00E0 o posizione.",
          "BENEFICI OLTRE IL MUSCOLO: riduzione della mortalit\u00E0, del rischio e nella gestione di malattie cardiovascolari, cancro e diabete; riduzione della depressione; miglioramento della qualit\u00E0 del sonno.",
          "PARTECIPAZIONE: solo circa il 30% degli adulti americani svolge attivit\u00E0 di rinforzo muscolare almeno 2 giorni a settimana e quasi il 60% non ne svolge alcuna. Tra gli anziani le stime variano dall'1% al 40%.",
          "PERCH\u00C9 IL DOCUMENTO CAMBIA IMPOSTAZIONE: le linee guida precedenti, secondo alcune stime, avrebbero richiesto fino a 20 ore settimanali di allenamento per sviluppare fitness muscolare completa. Gli autori considerano quelle indicazioni poco rilevanti per la maggior parte degli adulti e propongono una gamma molto pi\u00F9 ampia di programmi efficaci.",
          "FORME NON TRADIZIONALI: elastici e allenamento domiciliare producono benefici apprezzabili (forza, ipertrofia, resistenza muscolare, equilibrio) e rappresentano alternative pi\u00F9 accessibili."
        ]
      },
      {
        title: "Limiti dello Studio",
        content: [
          "Le overview of reviews forniscono evidenze aggregate a livello di gruppo: deviazioni motivate dalle raccomandazioni saranno necessarie in molti casi, secondo il principio di individualizzazione.",
          "Il metodo non consente inferenze sull'efficacia comparativa tra interventi diversi: per confrontare e ordinare programmi distinti servono network meta-analisi.",
          "SOVRAPPOSIZIONE DEGLI STUDI: il rischio di conteggiare pi\u00F9 volte gli stessi studi primari \u00E8 stato quantificato con l'indice CCA solo per la forza, dove risulta moderato (6-10%). Per gli altri esiti serve cautela.",
          "La sintesi \u00E8 limitata a ci\u00F2 che le revisioni sistematiche disponibili hanno esaminato: dove le revisioni sono poche, l'assenza di effetto pu\u00F2 riflettere scarsit\u00E0 di dati e non un vero effetto nullo (\u00E8 il caso della SPPB).",
          "Evidenza insufficiente per quantificare target precisi di RIR o di sforzo percepito, pur essendo questi approcci promettenti perch\u00E9 trasferibili a elastici e carico naturale.",
          "Le evidenze non hanno confrontato distinte regioni corporee o gruppi muscolari specifici.",
          "Gli autori segnalano infine che i trial randomizzati in medicina dello sport sono spesso di qualit\u00E0 modesta: campioni piccoli, randomizzazione carente, assenza di preregistrazione e reporting inadeguato degli eventi avversi."
        ]
      }
    ]
  },
  {
    id: 21,
    category: "Spalla",
    color: "#5C3A8C",
    icon: "\u{1F4AA}",
    title: "Artrosi Gleno-Omerale e Protesi Totale di Spalla \u2014 CPG APTA 2023",
    source: "Michener et al. | Phys Ther 2023;103(6):pzad041 | American Physical Therapy Association",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10256270/",
    pdfUrl2: "https://academic.oup.com/ptj/article/103/6/pzad041/7146561",
    tags: ["spalla", "artrosi", "GHOA", "protesi", "TSA", "artroplastica", "tutore", "sottoscapolare", "CPG"],
    summary: "Linea guida APTA per la gestione fisioterapica dell'artrosi gleno-omerale (GHOA) e dei pazienti sottoposti a protesi totale di spalla (TSA). Copre gestione conservativa, pre-operatoria e post-operatoria. Non riguarda protesi inversa, revisioni, emiartroplastica, et\u00E0 pediatrica o artrite reumatoide primaria.",
    sections: [
      {
        title: "Epidemiologia e Fattori di Rischio",
        content: [
          "Alterazioni degenerative gleno-omerali sono visibili radiograficamente nel 17-20% degli adulti sopra i 65 anni.",
          "Alterazioni degenerative della gleno-omerale si riscontrano fino al 17% dei pazienti con dolore di spalla.",
          "La condizione \u00E8 pi\u00F9 frequente nelle donne, ma il sesso femminile non risulta un fattore di rischio indipendente.",
          "FATTORI DI RISCHIO: et\u00E0, genetica, carico articolare, occupazione, stabilit\u00E0 e integrit\u00E0 gleno-omerale, artropatia della cuffia, morfologia scapolare.",
          "FATTORI AMBIENTALI: lavori pesanti con carico sulla spalla e sport overhead possono contribuire allo sviluppo.",
          "L'obesit\u00E0 non risulta un fattore di rischio indipendente per la GHOA, a differenza di quanto avviene per l'artrosi degli arti inferiori.",
          "PATOANATOMIA: perdita della cartilagine della testa omerale con successive modificazioni adattative dell'osso subcondrale e sviluppo di osteofiti. Nell'artrosi aumenta l'attivit\u00E0 di collagenasi e metalloproteasi, con incremento del contenuto d'acqua, disorganizzazione della trama collagenica e degradazione dei proteoglicani.",
          "IMPATTO: qualit\u00E0 di vita e funzione del braccio, in particolare attivit\u00E0 sopra la testa e movimenti che richiedono rotazione esterna. Frequenti disturbi del sonno per difficolt\u00E0 di addormentamento e dolore notturno.",
          "FATTORI PSICOLOGICI: ansia e depressione influenzano la percezione del dolore e gli esiti. Punteggi pre-operatori pi\u00F9 elevati di depressione e ansia si associano a minori miglioramenti post-operatori di funzione e dolore. Considerare uno strumento di screening come l'OSPRO-YF.",
          "PROTESI: annualmente circa 53.000 adulti negli Stati Uniti ricevono una protesi gleno-omerale, il 4% di tutte le artroprotesi; \u00E8 il terzo intervento di sostituzione articolare pi\u00F9 eseguito dopo anca e ginocchio."
        ]
      },
      {
        title: "Diagnosi \u2014 Raccomandazioni Graduate",
        content: [
          "\u2500\u2500\u2500 ANAMNESI, ESAME FISICO E RADIOGRAFIA (qualit\u00E0 moderata, forza \u2666\u2666\u2666\u25CA) \u2500\u2500\u2500",
          "Anamnesi, esame fisico e radiografie sono utili per la diagnosi differenziale di GHOA; in particolare l'angolo critico di spalla (critical shoulder angle) alla radiografia e l'et\u00E0 risultano predittivi.",
          "ANGOLO CRITICO DI SPALLA: angolo tra la linea che congiunge i margini ossei superiore e inferiore della cavit\u00E0 glenoidea (parallela alla superficie glenoidea) e una seconda linea dal bordo infero-laterale dell'acromion al margine glenoideo inferiore. Una sua riduzione nelle radiografie antero-posteriori vere risulta utile alla diagnosi.",
          "ET\u00C0: utile per differenziare la GHOA da condizioni simili \u2014 et\u00E0 maggiore nell'artropatia della cuffia, minore nelle lesioni della cuffia dei rotatori.",
          "CRITERI CLINICI (percorsi NHS Evidence-Based Interventions): dolore di spalla da oltre 3 mesi; assenza di instabilit\u00E0 e di dolore localizzato all'acromion-claveare all'esame manuale; riduzione globale del ROM con perdita maggiore nella rotazione esterna passiva a braccio al fianco; radiografie di conferma.",
          "DIAGNOSI DIFFERENZIALE: patologia tendinea della cuffia, capsulite adesiva, lesioni del labbro.",
          "\u2500\u2500\u2500 RISONANZA MAGNETICA (qualit\u00E0 alta, forza \u2666\u2666\u2666\u2666) \u2500\u2500\u2500",
          "La RM senza contrasto \u00E8 utile per CONFERMARE la diagnosi di GHOA, ma meno utile per ESCLUDERLA.",
          "Un sistema di grading RM per la severit\u00E0 dell'artrosi di spalla \u00E8 affidabile e utile per individuare l'artrosi precoce, classificarne la severit\u00E0 e monitorarne la progressione.",
          "SEQUENZA DIAGNOSTICA: primo passo esame clinico e radiografie; la RM \u00E8 indicata se la diagnosi resta incerta. \u26A0\uFE0F L'imaging avanzato aumenta i costi dell'assistenza.",
          "ECOGRAFIA: non inclusa nelle raccomandazioni per assenza di letteratura disponibile."
        ]
      },
      {
        title: "Gestione Post-Operatoria \u2014 Raccomandazioni Graduate",
        content: [
          "\u2500\u2500\u2500 TUTORE ED ESERCIZIO (qualit\u00E0 alta, forza \u2666\u2666\u2666\u2666) \u2500\u2500\u2500",
          "I fisioterapisti DOVREBBERO utilizzare tutore ed esercizi progressivi di ROM e rinforzo per migliorare gli esiti riferiti dal paziente e il ROM nei pazienti con GHOA sottoposti a TSA.",
          "PROTOCOLLO DELLO STUDIO DI RIFERIMENTO: tutore per 4 settimane, seguito da 4 settimane di ROM progressivo assistito e attivo, quindi esercizi di rinforzo.",
          "RCT su 60 pazienti: il movimento immediato (flessione e rotazione esterna fino a 30\u00B0) ha prodotto miglioramenti pi\u00F9 precoci di ROM e funzione (ASES) a 4 e 8 settimane rispetto al movimento ritardato, ma nessuna differenza di ROM, dolore o funzione a 1 anno.",
          "\u2500\u2500\u2500 POSIZIONE DEL TUTORE (qualit\u00E0 moderata, forza \u2666\u2666\u2666\u25CA) \u2500\u2500\u2500",
          "I fisioterapisti DOVREBBERO utilizzare un tutore con spalla in rotazione neutra per la gestione del dolore dopo TSA.",
          "RCT su 36 pazienti, 6 settimane di immobilizzazione: il gruppo in rotazione neutra ha mostrato meno dolore notturno a 2 settimane e maggiore ROM in rotazione esterna a 1 anno rispetto al tutore tradizionale in rotazione interna (avambraccio contro l'addome).",
          "Entrambe le posizioni hanno prodotto miglioramenti significativi di dolore, funzione (DASH, WOOS, SANE) e ROM.",
          "\u2500\u2500\u2500 TIMING DEL ROM (qualit\u00E0 moderata, forza \u2666\u2666\u2666\u25CA) \u2500\u2500\u2500",
          "L'introduzione degli esercizi di ROM PU\u00D2 essere ritardata fino a 4 settimane senza impatto negativo sugli esiti riferiti dal paziente.",
          "\u26A0\uFE0F DATO CRITICO: la mancata guarigione dell'osteotomia della piccola tuberosit\u00E0 \u00E8 risultata pi\u00F9 frequente nel gruppo con ROM immediato (5/27 = 19%) rispetto al gruppo ritardato (1/28 = 4%).",
          "La compromissione della guarigione del sottoscapolare o dell'osteotomia comporta pi\u00F9 dolore, instabilit\u00E0 e riduzione della rotazione interna attiva.",
          "INDICAZIONI OPERATIVE: limitare inizialmente la rotazione esterna a 30\u00B0 per non stressare il sito di osteotomia; la protezione del sottoscapolare in fase di guarigione deve essere l'obiettivo primario; il ROM precoce va individualizzato secondo paziente e tipo di intervento.",
          "Il lavoro sugli altri distretti del quadrante superiore \u2014 collo, gomito, mano \u2014 non \u00E8 precluso e va comunque mantenuto."
        ]
      },
      {
        title: "Best Practice Statements (evidenza insufficiente, \u2666\u25CA\u25CA\u25CA)",
        content: [
          "Queste raccomandazioni derivano dall'opinione del gruppo di sviluppo in assenza di studi di qualit\u00E0 alta o moderata.",
          "PRE-OPERATORIO: la fisioterapia pre-operatoria PU\u00D2 migliorare gli esiti post-operatori nei pazienti candidati a TSA. Nessuno studio diretto \u00E8 disponibile: la raccomandazione si basa sui benefici documentati per anca e ginocchio (miglior conoscenza e aspettative del paziente, migliore funzione, ridotta degenza, minor dolore, maggiore forza del quadricipite). Il trattamento dovrebbe comprendere esercizio, gestione del dolore ed educazione sulle aspettative funzionali, e andrebbe offerto almeno 6 settimane prima dell'intervento.",
          "CONSERVATIVO: la fisioterapia PU\u00D2 beneficiare i pazienti con GHOA che non hanno subito TSA. Una coorte prospettica su 129 anziani (65+) trattati con FANS, infiltrazioni di corticosteroide e acido ialuronico, educazione e fisioterapia con ROM e rinforzo ha mostrato miglioramenti di funzione percepita, dolore, salute mentale e qualit\u00E0 di vita a 3 anni di follow-up.",
          "SCELTA DELL'INTERVENTO: nessun singolo intervento fisioterapico risulta superiore a un altro nella GHOA. La selezione va guidata da migliore evidenza disponibile, esperienza clinica e valori del paziente, oltre che dalla valutazione individuale e dal livello di irritabilit\u00E0 dei tessuti.",
          "TEMPI DEL CONSERVATIVO: lo studio citato suggerisce 12 mesi di trattamento conservativo prima di valutare l'indicazione all'artroprotesi.",
          "POST-OPERATORIO: la fisioterapia post-operatoria PU\u00D2 migliorare gli esiti funzionali riferiti dal paziente. L'unico studio disponibile \u00E8 di bassa qualit\u00E0 e non ha trovato differenze tra fisioterapia formale e programma domiciliare guidato dal medico, ma non controllava volume di esercizio n\u00E9 aderenza.",
          "EDEMA: la gestione dell'edema dopo TSA deve basarsi su migliore evidenza, esperienza clinica e valori del paziente. Ghiaccio, compressione ed elevazione sono comunemente usati; l'edema prolungato pu\u00F2 interferire con la guarigione e il drenaggio linfatico manuale pu\u00F2 essere considerato nei casi di edema esteso o persistente.",
          "\u26A0\uFE0F RISCHIO DI CADUTA POST-TSA: in uno studio su 198 pazienti operati di protesi di spalla, il 10.6% ha riportato una caduta dopo il rientro a domicilio con accesso al pronto soccorso e riospedalizzazione, per lesioni in sedi diverse dalla spalla o per frattura periprotesica dell'omero."
        ]
      },
      {
        title: "Outcome Measures e Sistema di Grading",
        content: [
          "VALUTAZIONE: ROM passivo e attivo, forza, dolore, antropometria e meccanica del complesso della spalla, insieme a misure di esito riferite dal paziente.",
          "CONDIZIONE-SPECIFICA: WOOS (Western Ontario Osteoarthritis of the Shoulder Index), progettata specificamente per valutare sintomi, funzione, disabilit\u00E0 ed emozioni nell'artrosi di spalla.",
          "ARTO SUPERIORE: DASH o la versione breve QuickDASH.",
          "SPALLA-SPECIFICHE: SPADI, Penn Shoulder Score, Simple Shoulder Test, ASES.",
          "PI\u00D9 RESPONSIVE DOPO TSA: ASES e WOOS risultano le pi\u00F9 responsive tra le misure specifiche per arto e per condizione nei pazienti sottoposti a TSA.",
          "PAZIENTE-SPECIFICHE: PSFS (Patient-Specific Functional Scale) per guidare la cura individuale; utile un ancoraggio interpretativo come il Patient Acceptable Symptom State, o semplicemente chiedere al paziente se \u00E8 soddisfatto della propria condizione attuale.",
          "\u2500\u2500\u2500 LEGENDA FORZA DELLE RACCOMANDAZIONI \u2500\u2500\u2500",
          "\u2666\u2666\u2666\u2666 FORTE: alto grado di certezza di beneficio da moderato a sostanziale (prevalenza di evidenza di livello I o II con almeno uno studio di livello I) \u2014 obbligo: 'deve' o 'dovrebbe'",
          "\u2666\u2666\u2666\u25CA MODERATA: alto grado di certezza di beneficio da lieve a moderato (prevalenza di livello II o singolo RCT di alta qualit\u00E0) \u2014 obbligo: 'dovrebbe'",
          "\u2666\u2666\u25CA\u25CA DEBOLE: moderato grado di certezza di beneficio lieve (livelli II-V) \u2014 obbligo: 'pu\u00F2'",
          "\u2666\u25CA\u25CA\u25CA TEORICA/BEST PRACTICE: evidenza da studi su cadavere o animale, modelli concettuali, opinione esperta pubblicata, o norme di pratica clinica corrente"
        ]
      }
    ]
  },
  {
    id: 22,
    category: "Geriatria",
    color: "#2E6B4F",
    icon: "\u{1F9D3}",
    title: "Gestione del Rischio di Caduta nell'Anziano \u2014 CPG APTA-Geriatrics 2025",
    source: "Kirk-Sanchez et al. | J Geriatr Phys Ther 2025;48(2):62-87 | APTA-Geriatrics",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12533762/",
    pdfUrl2: "https://www.ovid.com/jnls/jgpt/fulltext/10.1519/jpt.0000000000000454~physical-therapy-management-of-fall-risk-in",
    tags: ["cadute", "anziano", "equilibrio", "esercizio multicomponente", "Tai Chi", "screening", "geriatria", "CPG"],
    summary: "Linea guida APTA-Geriatrics per la gestione fisioterapica del rischio di caduta negli anziani (65+) che vivono in comunit\u00E0. L'esercizio multicomponente con training dell'equilibrio progressivo e impegnativo \u00E8 l'intervento centrale. Non riguarda anziani istituzionalizzati n\u00E9 popolazioni con patologie specifiche come il Parkinson, per le quali esistono documenti dedicati.",
    sections: [
      {
        title: "Implicazioni Cliniche e Sintesi",
        content: [
          "L'esercizio multicomponente \u00E8 l'intervento pi\u00F9 importante per affrontare cadute e rischio di caduta nell'anziano.",
          "L'esercizio multicomponente DEVE includere esercizi di equilibrio progressivi e sufficientemente impegnativi, e pu\u00F2 comprendere altre modalit\u00E0 di esercizio.",
          "I fisioterapisti possono usare l'algoritmo evidence-based per guidare il ragionamento clinico nella gestione del rischio di caduta.",
          "\u2500\u2500\u2500 EPIDEMIOLOGIA \u2500\u2500\u2500",
          "Definizione di caduta (ProFaNE e CMS): evento inatteso o non intenzionale in cui la persona si ritrova a terra, sul pavimento o a un livello inferiore.",
          "Dati 2020 negli Stati Uniti: il 27.6% degli anziani riferisce almeno una caduta nell'anno precedente, per oltre 14 milioni di cadute complessive e quasi 39.000 decessi correlati.",
          "Tasso di mortalit\u00E0 aggiustato per et\u00E0: 78 per 100.000, in aumento nell'ultimo decennio.",
          "Costi: oltre 50 miliardi di dollari l'anno negli Stati Uniti, con proiezione a 100 miliardi entro il 2030.",
          "Nel mondo le cadute sono la seconda causa di morte per lesione non intenzionale, con circa 684.000 decessi l'anno.",
          "Quasi met\u00E0 delle cadute negli anziani \u00E8 attribuibile a fattori modificabili, come fattori ambientali o deficit di equilibrio e cammino.",
          "FATTORI PREDISPONENTI: et\u00E0 avanzata, caduta precedente, depressione, demenza, comorbidit\u00E0, farmaci psicotropi, calzature."
        ]
      },
      {
        title: "Screening e Classificazione del Rischio",
        content: [
          "Il processo di screening comprende domande di anamnesi medica, misure self-report e misure di performance, in linea con il programma STEADI dei CDC.",
          "\u2500\u2500\u2500 MISURE SELF-REPORT \u2500\u2500\u2500",
          "Falls Efficacy Scale-International: punteggio superiore a 24 indica rischio aumentato di caduta.",
          "Geriatric Depression Scale-15: cut-off superiore a 6 \u2014 la depressione si associa a mobilit\u00E0 compromessa e a maggiore incidenza di cadute.",
          "\u2500\u2500\u2500 MISURE DI PERFORMANCE E CUT-OFF \u2500\u2500\u2500",
          "Timed Up and Go (TUG): oltre 11 secondi indica rischio di caduta",
          "Five Times Sit-to-Stand: oltre 12 secondi indica rischio di caduta",
          "Appoggio monopodalico a occhi aperti: incapacit\u00E0 di mantenerlo oltre 6.5 secondi indica rischio aumentato",
          "Berg Balance Scale: punteggio inferiore a 50 indica rischio di caduta",
          "Velocit\u00E0 del cammino autoselezionata: inferiore a 1.0 m/s indica rischio di caduta",
          "\u2500\u2500\u2500 CLASSIFICAZIONE AD ALTO RISCHIO \u2500\u2500\u2500",
          "Secondo il gruppo di sviluppo vanno classificati ad alto rischio i soggetti con storia di cadute multiple o lesive, fragilit\u00E0 e/o deficit di equilibrio identificato da test validati.",
          "\u26A0\uFE0F La perdita di coscienza pre-caduta e la sincope sono considerate questioni distinte e fuori dall'ambito di questa linea guida.",
          "\u2500\u2500\u2500 ESAME APPROFONDITO \u2500\u2500\u2500",
          "I test con miglior valore predittivo identificano CHI \u00E8 ad alto rischio, ma non i deficit specifici nei sottodomini dell'equilibrio che guidano la scelta dell'intervento.",
          "BESTest e Mini-BESTest possono essere particolarmente rilevanti perch\u00E9 caratterizzano l'equilibrio in stazione eretta e durante il cammino attraverso pi\u00F9 sottodomini, informando meglio la pianificazione del trattamento. Sono disponibili cut-off standardizzati per et\u00E0."
        ]
      },
      {
        title: "Programmi Multifattoriali \u2014 Raccomandazione Forte",
        content: [
          "RACCOMANDAZIONE (Qualit\u00E0 evidenza I, Forza: FORTE): i fisioterapisti dovrebbero partecipare a programmi di gestione multifattoriale del rischio di caduta.",
          "Definizione ProFaNE: interventi in cui due o pi\u00F9 sottodomini possono essere erogati ai partecipanti, collegati al profilo di rischio individuale, cos\u00EC che non tutti ricevano la stessa combinazione.",
          "COMPONENTI: screening, valutazione, invio ai professionisti appropriati e interventi entro l'ambito di competenza del fisioterapista.",
          "EVIDENZA: 8 revisioni sistematiche di alta qualit\u00E0 e 9 di qualit\u00E0 accettabile.",
          "EFFETTO: riduzione del tasso di cadute di circa il 25%; effetti maggiori (35-36%) quando gli interventi includono esercizio o modifiche ambientali, e con componenti pi\u00F9 attive (26-36%) rispetto a sola educazione, invii o informazione.",
          "ALTO RISCHIO: riduzione del tasso di cadute del 23% nei soggetti ad alto rischio, mentre non si osserva effetto negli studi che non selezionavano per alto rischio.",
          "DURATA: gli interventi multifattoriali di durata inferiore a 12 mesi risultano efficaci, quelli superiori a 12 mesi no.",
          "Le riduzioni del TASSO di caduta risultano maggiori di quelle del RISCHIO di caduta.",
          "\u26A0\uFE0F Un'analisi che riportava un'efficacia del 36% comprendeva per\u00F2 anche interventi di esercizio multicomponente nella definizione di multifattoriale, con probabile sovrastima dell'effetto."
        ]
      },
      {
        title: "Esercizio Multicomponente \u2014 Raccomandazione Forte",
        content: [
          "RACCOMANDAZIONE (Qualit\u00E0 evidenza I, Forza: FORTE): un programma di esercizio multicomponente che incorpora training dell'equilibrio e altre modalit\u00E0, come rinforzo o Tai Chi, \u00E8 fortemente raccomandato per ridurre rischio e tasso di cadute.",
          "EVIDENZA: 14 revisioni sistematiche di qualit\u00E0 alta o moderata su programmi multicomponente, 10 su programmi misti, 4 di qualit\u00E0 inferiore senza meta-analisi.",
          "EFFETTO: riduzione del tasso di cadute del 21-28% e del rischio del 22-27%. Negli anziani non fragili la riduzione del tasso sale al 31%.",
          "Quando l'esercizio multicomponente fa parte di un programma multifattoriale: riduzione del 34% del tasso e del 21% del rischio.",
          "\u2500\u2500\u2500 DOSAGGIO E INTENSIT\u00C0 (Qualit\u00E0 I, Forza FORTE) \u2500\u2500\u2500",
          "Programmi con oltre 150 minuti settimanali riducono le cadute del 47%, contro il 12% dei programmi sotto i 150 minuti.",
          "Durata ottimale 6-12 mesi: riduzione del rischio del 36% e del tasso del 33%, superiore a programmi pi\u00F9 brevi o pi\u00F9 lunghi di 12 mesi.",
          "Le maggiori riduzioni si osservano con training dell'equilibrio ad alta intensit\u00E0 e alta sfida, dosi superiori a 50 ore complessive e frequenza superiore a 3 ore a settimana. Programmi con oltre 3 ore settimanali e training di equilibrio e funzionale mostrano fino al 50% di riduzione delle cadute.",
          "\u26A0\uFE0F I programmi che includevano programmi di cammino mostravano riduzioni inferiori.",
          "La combinazione pi\u00F9 efficace (riduzione del rischio del 35%) includeva tutte le categorie di esercizio: cammino, equilibrio e training funzionale, rinforzo, flessibilit\u00E0 e 3D training come Tai Chi o danza.",
          "\u2500\u2500\u2500 EFFETTI A LUNGO TERMINE \u2500\u2500\u2500",
          "Negli studi con follow-up oltre 12 mesi: riduzione del 21% del tasso e del 17% del rischio; oltre 24 mesi, 20% e 21%. Il beneficio dei programmi di esercizio pu\u00F2 dunque estendersi per molti mesi dopo il termine dell'intervento.",
          "\u2500\u2500\u2500 GRUPPO O INDIVIDUALE \u2500\u2500\u2500",
          "Nessuna differenza dimostrata tra erogazione in gruppo e individuale (26% vs 19% di riduzione del tasso, intervalli di confidenza sovrapposti). Preferenza del paziente, disponibilit\u00E0 e costo possono guidare la scelta.",
          "SICUREZZA: i programmi multicomponente risultano sicuri, con la grande maggioranza degli studi che non riporta eventi avversi. Gli eventi segnalati includono cadute durante l'esercizio, dolore, indolenzimento muscolare, stiramenti, lombalgia e aritmie."
        ]
      },
      {
        title: "Training dell'Equilibrio",
        content: [
          "RACCOMANDAZIONE (Qualit\u00E0 I, Forza FORTE): gli interventi di training dell'equilibrio devono essere progressivi e sufficientemente impegnativi, coinvolgere movimenti degli arti e di tutto il corpo, comportare modifiche della base di appoggio e ridurre il supporto degli arti superiori.",
          "EFFETTO: riduzione del tasso di cadute del 28% e del rischio del 19%; in altre analisi 24% e 13%.",
          "\u2500\u2500\u2500 FRAMEWORK DEL CONTROLLO POSTURALE \u2500\u2500\u2500",
          "STEADY STATE: controllo della posizione del centro di massa entro la base di appoggio in condizioni prevedibili e quasi statiche.",
          "ANTICIPATORIO: generazione di aggiustamenti posturali prima o durante un movimento volontario, per contrastare una perturbazione attesa o riallineare il centro di massa.",
          "REATTIVO: risposta a input sensoriali che segnalano la necessit\u00E0 di un aggiustamento per mantenere il controllo posturale.",
          "\u2500\u2500\u2500 STEP TRAINING VOLONTARIO \u2500\u2500\u2500",
          "Passi autodiretti o guidati verbalmente o visivamente, eseguiti in pi\u00F9 direzioni (avanti, indietro, laterale). Gli studi impiegano bersagli di appoggio in condizioni cognitive variate, square-stepping ed exergaming.",
          "EFFETTO: riduzione del rischio di caduta del 58% e del tasso del 57%. Complessivamente lo step training riduce il tasso del 52% e il rischio del 49%.",
          "\u2500\u2500\u2500 STEP TRAINING REATTIVO (Qualit\u00E0 II, Forza DEBOLE) \u2500\u2500\u2500",
          "Interventi individualizzati con perturbazioni esterne in stazione eretta o durante il cammino, a terra, su treadmill o in ambiente virtuale.",
          "EFFETTO: riduzione del rischio del 40% e del tasso del 48%.",
          "\u26A0\uFE0F L'evidenza \u00E8 mista e complessivamente di qualit\u00E0 inferiore rispetto allo step training volontario, e resta incerto se le perturbazioni indotte in laboratorio si traducano in riduzione delle cadute in comunit\u00E0. Alcuni protocolli richiedono tecnologia complessa, con costi e formazione del personale.",
          "\u2500\u2500\u2500 GAIT ADAPTABILITY TRAINING \u2500\u2500\u2500",
          "Modificare rapidamente e in modo appropriato il cammino in risposta a sfide ambientali: evitare o accomodare ostacoli, appoggiare su bersagli specifici.",
          "EFFETTO: riduzione del tasso di cadute del 42% con certezza moderata; riduzione delle fratture correlate a caduta dell'81% e del rischio del 43%, ma con certezza bassa o molto bassa perch\u00E9 basate su soli due studi.",
          "\u2500\u2500\u2500 PRINCIPI DI PROGRESSIONE \u2500\u2500\u2500",
          "Il supporto degli arti superiori va ridotto nel tempo; la base di appoggio va ridotta per sfidare l'equilibrio in stazione e nel cammino; i movimenti di arti e corpo devono avvenire in condizioni sia volontarie sia reattive.",
          "INDIVIDUALIZZAZIONE: se la paura \u00E8 un fattore, la progressione deve essere incrementale usando la fiducia nell'equilibrio come guida; se lo \u00E8 l'uso dell'informazione sensoriale, lo step training va condotto in condizioni sensoriali variate e alterate.",
          "VARIABILI MANIPOLABILI: condizioni sensoriali (riduzione o eliminazione della vista, superfici cedevoli), compiti cognitivi o motori concomitanti, direzione della perturbazione (antero-posteriore, laterale), contesto del compito (stazione eretta, cammino).",
          "SICUREZZA: il rischio di entrambe le forme di step training \u00E8 la caduta durante la seduta, evitabile con imbragatura completa e/o assistenza e supervisione individualizzata."
        ]
      },
      {
        title: "Rinforzo, Tai Chi, Educazione e Ambiente",
        content: [
          "\u2500\u2500\u2500 RINFORZO DA SOLO \u2014 NON RACCOMANDATO (Qualit\u00E0 II, Forza MODERATA) \u2500\u2500\u2500",
          "Prescrivere il rinforzo COME UNICA MODALIT\u00C0 per ridurre rischio e tasso di cadute NON \u00E8 raccomandato: offre benefici limitati.",
          "I rate ratio hanno valore clinicamente poco rilevante con intervalli di confidenza non significativi: due meta-analisi riportano rate ratio superiore a 1.0, una nessun cambiamento, una sola una riduzione. Sul rischio, tre studi su tre riportano ratio tra 0.81 e 1.00 con intervalli non significativi.",
          "PROTOCOLLI TIPICI DEGLI STUDI: sedute di gruppo da 50 minuti, 2-3 volte a settimana, per 25-52 settimane. Nessuno ha dimostrato riduzione del tasso o del rischio di caduta.",
          "\u26A0\uFE0F PRECISAZIONE IMPORTANTE: nei pazienti con deficit identificati resta standard di pratica fornire esercizi di rinforzo progressivi e personalizzati, ma all'interno di un piano multicomponente, non isolatamente.",
          "\u2500\u2500\u2500 TAI CHI (Qualit\u00E0 I, Forza FORTE) \u2500\u2500\u2500",
          "Fortemente raccomandato, in particolare per anziani a rischio di caduta pi\u00F9 basso.",
          "EFFETTO: riduzione del tasso di cadute dal 29% al 48% e del rischio dal 20% al 43%.",
          "DOSAGGIO: 30-60 ore complessive producono il beneficio maggiore (riduzione del tasso del 42% e del rischio del 19%), superiore a meno di 30 ore (16% e 15%) e comparabile a oltre 60 ore (36% e 20%). Tre o pi\u00F9 sedute a settimana producono riduzioni maggiori di una o due. Gli interventi tipici durano 60 minuti, da 5 a 12 mesi.",
          "\u26A0\uFE0F ALTO RISCHIO: negli anziani ad alto rischio la riduzione \u00E8 minore (10% del rischio, 17% del tasso) rispetto al basso rischio (38% e 22%). Per questo, nei soggetti ad alto rischio, l'esercizio multicomponente va preferito al Tai Chi da solo.",
          "Nessun evento avverso grave riportato negli RCT inclusi.",
          "\u2500\u2500\u2500 EDUCAZIONE \u2500\u2500\u2500",
          "L'educazione DA SOLA non riduce n\u00E9 il tasso n\u00E9 il rischio di cadute.",
          "RACCOMANDAZIONE (Qualit\u00E0 V, Opinione esperta): fornire educazione personalizzata COMBINATA con intervento di esercizio individualizzato, comprendendo azioni specifiche sui fattori di rischio identificati, pericoli domestici, deficit di forza ed equilibrio, e invio ad altri professionisti per i fattori fuori dall'ambito fisioterapico.",
          "I materiali educativi devono considerare stile di apprendimento e livello di alfabetizzazione del paziente.",
          "\u2500\u2500\u2500 VALUTAZIONE E MODIFICA AMBIENTALE (Qualit\u00E0 I, Forza FORTE) \u2500\u2500\u2500",
          "Fortemente raccomandate per gli anziani a rischio pi\u00F9 elevato.",
          "EFFETTO: riduzione del rischio dal 12% al 24% e del tasso del 19%.",
          "\u26A0\uFE0F SELEZIONE DEL PAZIENTE: negli studi che non selezionavano per alto rischio non si osserva alcuna riduzione; in quelli che selezionavano per alto rischio si arriva al 48% di riduzione delle cadute e al 15% del rischio. In un'analisi la riduzione del rischio passa dal 21% al 39% considerando solo gli studi ad alto rischio.",
          "DATO DECISIVO: i programmi multifattoriali che NON incorporavano valutazione e modifica ambientale non hanno mostrato alcun effetto su rischio o tasso di cadute; quelli che la includevano hanno ridotto il tasso del 35% e il rischio del 20%."
        ]
      }
    ]
  },
  {
    id: 23,
    category: "Mano e Polso",
    color: "#8A5A2B",
    icon: "\u{1F590}\uFE0F",
    title: "Sindrome del Tunnel Carpale \u2014 CPG Revisione 2026",
    source: "Erickson et al. | JOSPT 2026;56(4):CPG1-CPG79 | APTA Orthopedics + APTA Hand and Upper Extremity",
    pdfUrl: "https://www.jospt.org/doi/10.2519/jospt.2026.0301",
    tags: ["mano", "polso", "tunnel carpale", "CTS", "nervo mediano", "ortesi", "CPG", "Phalen", "Tinel"],
    summary: "Revisione 2026 della linea guida CPG sulla sindrome del tunnel carpale classica (compressione del nervo mediano al polso). Le raccomandazioni sugli interventi riguardano la gestione NON chirurgica e non sono generalizzabili al post-operatorio di release del tunnel carpale. Copre esame, misure di esito e interventi entro l'ambito della fisioterapia.",
    sections: [
      {
        title: "Epidemiologia, Patogenesi e Decorso",
        content: [
          "PREVALENZA GLOBALE: circa il 14.4% della popolazione mondiale; 11.4% nei paesi a reddito basso-medio e 16.9% in quelli ad alto reddito, con valore pi\u00F9 alto in Europa. Nei diabetici varia dal 17.7% al 39.3%.",
          "SESSO ED ET\u00C0: pi\u00F9 comune nelle donne, ma il divario dipende dall'et\u00E0. In Corea la prevalenza massima si osserva negli uomini nella quarta decade (29.2%) e nelle donne nella quinta (39.5%).",
          "LAVORO: negli Stati Uniti l'incidenza confermata nei lavoratori \u00E8 diminuita del 77.2% dal 2003 al 2018, ma resta 5 volte superiore negli operai rispetto agli impiegati.",
          "PATOGENESI: aumento della pressione nel tunnel carpale con ischemia del nervo ed edema intraneurale; la perfusione compromessa esita in fibrosi del nervo o delle strutture del tunnel. Quadro compatibile con una risposta infiammatoria cronica di basso grado.",
          "L'ecografia B-mode mostra in modo inequivocabile un nervo mediano ingrossato all'ingresso del tunnel nei soggetti con CTS; non \u00E8 chiaro se l'ingrossamento sia dovuto a edema o a fibrosi.",
          "MOBILIT\u00C0 DEL NERVO: due meta-analisi con ecografia dinamica concordano su una riduzione della mobilit\u00E0 longitudinale e trasversale del mediano rispetto alle strutture adiacenti.",
          "DECORSO: intorpidimento, parestesie e/o dolore nel territorio del mediano. Sintomi iniziali tipici: parestesia notturna e caduta di oggetti. La compressione prolungata porta ad atrofia tenare e debolezza di presa e pinza.",
          "\u26A0\uFE0F STADIO AVANZATO: con perdita del movimento attivo del pollice, questo assume una postura supinata nel piano dei metacarpi 2-5 e il paziente non riesce ad abdurre o opporre attivamente. A quel punto \u00E8 improbabile che il release chirurgico restituisca la funzione, e pu\u00F2 servire un trasferimento tendineo.",
          "DOLORE: il 39.2% dei pazienti riferisce dolore superiore a 4/10. Su 108 soggetti, l'80% presentava dolore neuropatico. Predittori pi\u00F9 significativi dell'intensit\u00E0: latenza aumentata del potenziale d'azione motorio composto, dolore notturno e debolezza tenare.",
          "FATTORI PSICOSOCIALI: circa il 30% delle persone con CTS presenta ansia e depressione. Non \u00E8 chiaro se precedano o seguano la CTS. L'attivit\u00E0 fisica elevata si associa a minore intensit\u00E0 di dolore (12.41 mm) e minori sintomi depressivi (3.29 punti).",
          "FATTORI DI RISCHIO PRINCIPALI: obesit\u00E0 (pi\u00F9 rilevante nelle donne), et\u00E0, sesso femminile, sforzi manuali intensi (misurati con Borg CR-10, il fattore occupazionale pi\u00F9 forte), Strain Index elevato. NON risultano fattori di rischio l'uso del computer (evidenza moderata di nessun aumento) e la presa di pinza."
        ]
      },
      {
        title: "Esame \u2014 Raccomandazioni 2026",
        content: [
          "\u2500\u2500\u2500 DIAGRAMMI E QUESTIONARI \u2500\u2500\u2500",
          "(B) I clinici DOVREBBERO usare il diagramma dei sintomi della mano di Katz e Stirrat per determinare sede e natura dei sintomi.",
          "(C) I clinici POSSONO usare il diagramma di Katz e Stirrat o il questionario di Kamath e Stothard come strumento di screening iniziale per la CTS lavoro-correlata.",
          "CLASSIFICAZIONE KATZ-STIRRAT: CTS classica = formicolio, intorpidimento o ridotta sensibilit\u00E0 con o senza dolore in almeno 2 delle dita 1, 2 o 3, esclusi sintomi in palmo e dorso; CTS probabile = come la classica ma con sintomi palmari ammessi salvo se confinati al lato ulnare; CTS possibile = sintomi in almeno 1 dito tra 1, 2 e 3; CTS improbabile = nessun sintomo nelle dita 1, 2 o 3.",
          "\u2500\u2500\u2500 TEST PROVOCATIVI \u2500\u2500\u2500",
          "(B) I clinici DOVREBBERO usare test di Phalen, segno di Tinel e test di compressione carpale (Durkan) per aiutare la diagnosi.",
          "RAPPORTI DI VEROSIMIGLIANZA (revisione sistematica 2022, EDX come standard): Phalen +LR 4.39 / \u2212LR 0.32; Tinel +LR 3.61 / \u2212LR 0.48; Durkan +LR 6.86 / \u2212LR 0.25; ULNT1 +LR 1.46 / \u2212LR 0.68; hand elevation test +LR 15.93 / \u2212LR 0.10.",
          "PHALEN CRONOMETRATO: positivit\u00E0 entro 10 secondi \u2014 specificit\u00E0 96.8% ma sensibilit\u00E0 bassa (13.9%).",
          "\u26A0\uFE0F SCRATCH COLLAPSE TEST: le evidenze recenti indicano che NON \u00E8 un test diagnostico valido per la CTS. Sensibilit\u00E0 riportata del 7.7%, accordo tra osservatori da nullo a scarso.",
          "\u26A0\uFE0F TEST NEURODINAMICI: specificit\u00E0, +LR e odds ratio diagnostici inferiori agli altri test provocativi. Non sono probabilmente diagnostici di una condizione specifica, ma di una accresciuta meccanosensibilit\u00E0 nervosa. Nessuna raccomandazione formulabile.",
          "\u2500\u2500\u2500 TEST SENSITIVI E MOTORI \u2500\u2500\u2500",
          "(A) I clinici DOVREBBERO usare i monofilamenti di Semmes-Weinstein per valutare la soglia sensitiva.",
          "(B) I clinici DOVREBBERO usare la discriminazione statica a 2 punti per valutare la densit\u00E0 di innervazione sensitiva. Affidabilit\u00E0 intrarater ICC 0.83-0.99, interrater 0.79-0.99.",
          "(C) I clinici POSSONO valutare forza di presa e pinza (tripode o polpastrello) e funzione della mano con Purdue Pegboard o Dellon-modified Moberg pick-up test, confrontando con le norme.",
          "(F) I clinici POSSONO esaminare il gruppo muscolare tenare per l'atrofia. Sensibilit\u00E0 bassa (22%) ma specificit\u00E0 100% con EDX come riferimento: utile a confermare una CTS severa, ma non esistono dati su come quantificarla.",
          "\u2500\u2500\u2500 TEST COMBINATI \u2500\u2500\u2500",
          "(B) I clinici DOVREBBERO usare il CTS-6 per aiutare la diagnosi.",
          "CTS-6: batteria che combina sede dei sintomi, presenza di sintomi notturni, debolezza del pollice o atrofia tenare, test di Phalen, segno di Tinel e discriminazione a 2 punti. Un punteggio totale di 12 si associa a una probabilit\u00E0 di CTS dell'80%. Affidabilit\u00E0 interrater sostanziale (Fleiss \u03BA 0.73).",
          "Sensibilit\u00E0 89% e specificit\u00E0 92% con cut-off 12; salgono a 95% e 100% combinando il CTS-6 con l'ecografia point-of-care. Se l'ecografia non \u00E8 disponibile, il CTS-6 ha propriet\u00E0 sufficienti per essere usato da solo.",
          "L'aggiunta di ulteriori test provocativi al CTS-6 NON aumenta l'accuratezza diagnostica."
        ]
      },
      {
        title: "Misure di Esito e Soglie di Cambiamento",
        content: [
          "(A) I clinici NON DEVONO usare la forza di pinza laterale come misura di esito per valutare il cambiamento, n\u00E9 in gestione conservativa n\u00E9 chirurgica.",
          "(B) I clinici NON DEVONO usare la forza di presa per valutare il cambiamento a breve termine (meno di 3 mesi) nei pazienti operati.",
          "(B) I clinici DOVREBBERO usare la BCTQ-SSS al basale e ad almeno un altro momento, inclusa la dimissione, per valutare il cambiamento dei sintomi, e DASH o QuickDASH per la funzione.",
          "(C) I clinici POSSONO usare la BCTQ-FSS se DASH o QuickDASH non sono disponibili.",
          "(C) Nei pazienti operati i clinici POSSONO usare PROMIS-PI, PROMIS-UE e Dellon-modified Moberg pick-up test.",
          "\u26A0\uFE0F Un'analisi Rasch su 600 casi ha concluso che le due sottoscale della BCTQ NON vanno combinate in un punteggio totale, ma trattate separatamente.",
          "\u26A0\uFE0F PROMIS-PF: n\u00E9 valida n\u00E9 responsiva per misurare il cambiamento dopo release del tunnel carpale.",
          "\u2500\u2500\u2500 SOGLIE DI CAMBIAMENTO CLINICAMENTE RILEVANTE \u2014 GESTIONE CONSERVATIVA \u2500\u2500\u2500",
          "BCTQ Symptom Severity Scale (1-5): MIC 0.44",
          "BCTQ Functional Status Scale (1-5): MIC 0.36",
          "Scala analogica visiva (0-100): MIC 14.31",
          "Scala numerica del dolore (0-10): MCID 1.5 (gestione sia chirurgica sia conservativa)",
          "QuickDASH (0-100): MCID 10.4 in gestione chirurgica (follow-up medio 14 giorni post-op)",
          "DASH (0-100): MCID 18.2 in gestione chirurgica (follow-up medio 3 mesi); miglioramento clinicamente significativo 20.9 a 6 settimane",
          "NOTA: i valori di cambiamento clinicamente rilevante risultano leggermente pi\u00F9 alti nei pazienti operati rispetto a quelli in gestione conservativa."
        ]
      },
      {
        title: "Interventi \u2014 Ortesi ed Educazione",
        content: [
          "\u2500\u2500\u2500 ORTESI (raccomandazione principale) \u2500\u2500\u2500",
          "(B) I clinici DOVREBBERO raccomandare un'ortesi di immobilizzazione del polso a base avambraccio, verificando che mantenga il polso vicino alla posizione neutra sul piano sagittale, indossata di notte, per miglioramento a breve e/o medio termine di sintomi e funzione nella CTS lieve-moderata in gestione conservativa o in attesa di intervento.",
          "(C) I clinici POSSONO adattare il tempo di utilizzo includendo uso diurno, sintomatico o continuativo quando il solo uso notturno non controlla i sintomi. POSSONO inoltre aggiungere l'immobilizzazione delle metacarpo-falangee o modificare la posizione del polso nei pazienti che non ottengono sollievo.",
          "(C) I clinici POSSONO raccomandare un'ortesi per le donne con CTS in gravidanza e fornire una rivalutazione post-partum per verificare la risoluzione dei sintomi.",
          "(C) I clinici POSSONO raccomandare l'uso dell'ortesi nei pazienti sottoposti a infiltrazione steroidea.",
          "RAZIONALE: l'ortesi mantiene teoricamente il polso nella posizione di massimo volume del tunnel e minima pressione interna. L'immobilizzazione limita lo scorrimento di tendini e nervo, riducendo l'attrito e quindi edema e mediatori infiammatori.",
          "DURATA: sintomi e funzione migliorano di pi\u00F9 quando l'ortesi \u00E8 indossata per un periodo pi\u00F9 lungo (6 mesi contro 6 settimane). Nessun danno riportato con l'uso dell'ortesi.",
          "\u26A0\uFE0F VERIFICA: posizione e vestibilit\u00E0 dell'ortesi vanno controllate per assicurare l'immobilizzazione completa, confermare il posizionamento a 0\u00B0 e prevenire pressione eccessiva da cinghie troppo strette.",
          "\u2500\u2500\u2500 EDUCAZIONE ERGONOMICA \u2500\u2500\u2500",
          "(C) I clinici POSSONO educare i pazienti sugli effetti dell'uso del mouse sulla pressione nel tunnel carpale e aiutarli a sviluppare strategie alternative: uso dei tasti freccia, touch screen, alternanza della mano sul mouse. POSSONO raccomandare tastiere a bassa forza di battuta a chi riferisce dolore digitando.",
          "(F) I clinici POSSONO fornire informazioni su patologia e fattori di rischio, identificare attivit\u00E0 e posizioni di polso e mano potenzialmente contribuenti, e collaborare con il paziente per ridurre le esposizioni."
        ]
      },
      {
        title: "Interventi \u2014 Terapia Manuale, Esercizio, Taping",
        content: [
          "\u2500\u2500\u2500 TERAPIA MANUALE \u2500\u2500\u2500",
          "(C) I clinici POSSONO eseguire terapia manuale diretta al rachide cervicale e all'arto superiore nelle aree di intrappolamento del nervo mediano, per miglioramento a breve termine di dolore e funzione nella CTS lieve-moderata in gestione conservativa.",
          "(C) I clinici POSSONO eseguire massaggio strumentale dei tessuti molli con fibrolisi diacutanea per miglioramento a breve termine di sintomi e funzione.",
          "FIBROLISI DIACUTANEA: tecnica derivata dai principi del massaggio trasverso profondo di Cyriax, che impiega un uncino metallico per un rilascio pi\u00F9 profondo e preciso delle aderenze. Risultati positivi su VAS notturna e DASH, ma da confermare al di fuori del gruppo di autori originale.",
          "\u26A0\uFE0F STRETCHING MIOFASCIALE DEL LEGAMENTO CARPALE: non superiore al placebo.",
          "\u26A0\uFE0F MOBILIZZAZIONE NEURALE: evidenze conflittuali, nessuna raccomandazione formulabile. Una revisione sistematica conclude che non pu\u00F2 essere raccomandata nella CTS lieve-moderata; in uno studio primario l'aggiunta di tendon e nerve gliding all'ortesi \u00E8 risultata equivalente alla sola ortesi a 6 settimane.",
          "\u26A0\uFE0F ATTENZIONE AI GLIDING: studi precedenti hanno mostrato che i movimenti delle dita nei tendon e nerve gliding modificano l'area di sezione e il rapporto di appiattimento del mediano, in modo pi\u00F9 marcato nei soggetti con CTS, specie nelle posizioni hook e fist \u2014 questi esercizi potrebbero quindi incidere negativamente sul nervo per compressione o strain.",
          "\u26A0\uFE0F DRENAGGIO LINFATICO MANUALE: evidenze conflittuali, nessuna raccomandazione formulabile. Non superiore ai nerve glides o all'ortesi.",
          "\u2500\u2500\u2500 ESERCIZIO TERAPEUTICO \u2500\u2500\u2500",
          "(C) I clinici POSSONO usare un programma combinato di ortesi e stretching nei pazienti con CTS lieve-moderata in gestione conservativa che NON presentano atrofia tenare e hanno discriminazione a 2 punti normale.",
          "Nessuna nuova evidenza sull'esercizio terapeutico \u00E8 emersa in questa revisione.",
          "\u2500\u2500\u2500 TAPING \u2500\u2500\u2500",
          "(C) I clinici POSSONO usare il kinesiology taping per miglioramento a breve e medio termine dei sintomi nella CTS lieve in gestione conservativa.",
          "Il taping rigido NON \u00E8 incluso nelle raccomandazioni per bassa certezza dell'evidenza e rischio di bias. Il meccanismo di efficacia resta poco chiaro: potrebbe consistere nella riduzione dell'uso funzionale della mano tramite input propriocettivo o restrizione del movimento.",
          "Il taping pu\u00F2 rappresentare un'alternativa per chi non tollera o non aderisce all'uso costante dell'ortesi."
        ]
      },
      {
        title: "Interventi \u2014 Agenti Fisici",
        content: [
          "\u2500\u2500\u2500 DA NON USARE \u2500\u2500\u2500",
          "(A) I clinici NON DEVONO usare ionoforesi o fonoforesi con corticosteroidi per la gestione conservativa della CTS.",
          "(B) I clinici NON DEVONO usare n\u00E9 raccomandare l'uso di magneti.",
          "\u2500\u2500\u2500 OPZIONI POSSIBILI (grado C) \u2500\u2500\u2500",
          "LASER: i clinici POSSONO usare laser a bassa intensit\u00E0 (LLLT, classe III \u2264500 mW) o ad alta intensit\u00E0 (HILT, classe IV >500 mW) per miglioramento a breve termine di dolore e funzione nella CTS lieve-moderata. \u26A0\uFE0F I dosaggi ottimali non sono stati stabiliti.",
          "ONDE D'URTO (ESWT): i clinici POSSONO usarle per miglioramento a breve e medio termine (<6 mesi) di sintomi e funzione nella CTS lieve o moderata, e considerare la ESWT radiale rispetto a quella focalizzata. La rESWT pu\u00F2 essere usata da fisioterapisti; la focalizzata negli Stati Uniti \u00E8 riservata ai medici.",
          "CORRENTE INTERFERENZIALE: i clinici POSSONO usarla per miglioramento a breve termine del dolore nella CTS lieve-moderata.",
          "CALORE SUPERFICIALE: i clinici POSSONO raccomandarlo per miglioramento a breve termine dei sintomi.",
          "DIATERMIA A MICROONDE O ONDE CORTE: i clinici POSSONO raccomandarla per miglioramento a breve termine dei sintomi nella CTS lieve-moderata.",
          "\u26A0\uFE0F I pazienti con CTS vanno istruiti sui rischi di applicare agenti termici su tessuto con deficit sensitivo e invitati a controllare frequentemente la cute. Il calore non va usato in presenza di infiammazione.",
          "\u2500\u2500\u2500 NESSUNA RACCOMANDAZIONE FORMULABILE \u2500\u2500\u2500",
          "ULTRASUONI: evidenze conflittuali sia per la forma termica sia per quella non termica. Nessuna raccomandazione.",
          "DRY NEEDLING: un solo studio di livello II mostra miglioramento a 1 settimana aggiungendo una singola seduta sui trigger point dell'avambraccio all'ortesi notturna, ma nessun beneficio aggiuntivo a 6 settimane. Evidenza insufficiente, nessuna raccomandazione.",
          "TECAR: evidenza limitata a 2 piccoli studi multi-intervento, nessuna conclusione possibile. In un confronto diretto la TECAR \u00E8 risultata meno efficace degli ultrasuoni non termici sul dolore a breve termine."
        ]
      },
      {
        title: "Albero Decisionale e Conclusione sugli Interventi",
        content: [
          "\u2500\u2500\u2500 CTS LIEVE-MODERATA \u2014 criteri \u2500\u2500\u2500",
          "Monofilamento <3.22 (A) | BCTQ-SSS <2.5 (B) | assenza di atrofia tenare (F) | durata dei sintomi <1 anno (F) | sintomi intermittenti (F)",
          "\u2500\u2500\u2500 CTS SEVERA \u2014 criteri \u2500\u2500\u2500",
          "BCTQ-SSS \u22652.5 (B) | atrofia tenare (F) | durata dei sintomi >1 anno (F) | sintomi costanti (F) | monofilamento \u22653.61 (F)",
          "\u2192 la CTS severa va inviata direttamente a consulto chirurgico.",
          "\u2500\u2500\u2500 PRIMO LIVELLO PER LIEVE-MODERATA \u2500\u2500\u2500",
          "ORTESI (B): avviare un'ortesi di immobilizzazione del polso a base avambraccio, indossata di notte. Valutare vestibilit\u00E0, angolo di immobilizzazione e corretta applicazione.",
          "EDUCAZIONE (F): fornire informazioni su patologia, fattori di rischio, posture e attivit\u00E0 aggravanti; collaborare con il paziente per ridurre le esposizioni.",
          "\u2500\u2500\u2500 SECONDO LIVELLO \u2500\u2500\u2500",
          "ORTESI (B): follow-up per verificare vestibilit\u00E0, aderenza ed efficacia; considerare modifica della posizione o del tempo di utilizzo.",
          "TAPING (C): alternativa per chi non tollera o non aderisce all'uso costante dell'ortesi.",
          "Se sono presenti altre condizioni muscoloscheletriche o alterazioni di movimento e postura: fibrosi o restrizioni dei tessuti molli lungo il decorso del mediano \u2192 mobilizzazione dei tessuti molli (C); alterazioni originanti dal rachide cervicale o dolore miofasciale con trigger point \u2192 interventi mirati agli specifici deficit (C); dolore limitante \u2192 agenti fisici (C).",
          "\u2500\u2500\u2500 RIVALUTAZIONE \u2500\u2500\u2500",
          "MIGLIORAMENTO (dimissione all'autogestione): riduzione BCTQ-SSS \u22650.44 | QuickDASH \u226510.4 | DASH \u226520.9 | VAS \u226514.31 | NPRS \u22651.5",
          "NESSUN CAMBIAMENTO o peggioramento rispetto al basale su BCTQ-SSS, Q/DASH, VAS, NPRS \u2192 invio a consulto chirurgico.",
          "\u2500\u2500\u2500 CONCLUSIONE DEGLI AUTORI \u2500\u2500\u2500",
          "La fisioterapia \u00E8 indicata come gestione iniziale per CTS confermata o sospetta di severit\u00E0 lieve-moderata. Il gruppo raccomanda educazione del paziente con modifica delle attivit\u00E0 aggravanti e dei fattori di rischio modificabili, in aggiunta a un'ortesi ben adattata e correttamente applicata che mantenga il polso a 0\u00B0 sul piano sagittale, indossata di notte, come intervento fisioterapico iniziale.",
          "In assenza di sollievo pu\u00F2 servire estendere l'uso dell'ortesi al giorno o modificarne la posizione di immobilizzazione. L'intervento va esteso anche a situazioni particolari come la gravidanza o i pazienti con segni di CTS severa in cui la chirurgia sia stata rifiutata o sia controindicata.",
          "\u26A0\uFE0F Nessun intervento aggiuntivo \u2014 agenti fisici, terapia manuale, stretching o taping \u2014 emerge come superiore agli altri per il sollievo a breve termine. La scelta va guidata da decisione condivisa con il paziente e disponibilit\u00E0 di risorse.",
          "Chi non raggiunge una differenza clinicamente importante su misure valide come la BCTQ-SSS deve essere inviato a valutazione chirurgica.",
          "\u2500\u2500\u2500 LEGENDA GRADI \u2500\u2500\u2500",
          "A = evidenza forte (prevalenza di studi di livello I e/o II con almeno uno di livello I) \u2014 obbligo: deve o dovrebbe",
          "B = evidenza moderata (un singolo RCT di alta qualit\u00E0 o prevalenza di studi di livello II) \u2014 obbligo: dovrebbe",
          "C = evidenza debole (un singolo studio di livello II o prevalenza di livelli III e IV, incluso consenso di esperti) \u2014 obbligo: pu\u00F2",
          "D = evidenza conflittuale \u2014 E = evidenza teorica/fondazionale \u2014 F = opinione degli esperti"
        ]
      }
    ]
  },
  {
    id: 24,
    category: "Traumatologia",
    color: "#7A6010",
    icon: "\u{1F525}",
    title: "Sindrome Dolorosa Regionale Complessa (CRPS) \u2014 Linee Guida 5\u00AA Edizione",
    source: "Harden et al. | Pain Med 2022;23(Suppl 1):S1-S53 | Reflex Sympathetic Dystrophy Syndrome Association",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9186375/",
    tags: ["CRPS", "dolore", "distrofia simpatico riflessa", "Budapest", "riabilitazione", "mirror therapy", "graded motor imagery"],
    summary: "Quinta edizione delle linee guida diagnostiche e terapeutiche per la Sindrome Dolorosa Regionale Complessa (CRPS), gi\u00E0 nota come distrofia simpatico riflessa e causalgia. Include i criteri di Budapest adottati dalla IASP nel 2012, il modello di functional restoration interdisciplinare e il ruolo di fisioterapia e terapia occupazionale.",
    sections: [
      {
        title: "Criteri Diagnostici di Budapest (IASP 2012)",
        content: [
          "DEFINIZIONE: la CRPS \u00E8 una sindrome caratterizzata da dolore regionale continuo (spontaneo e/o evocato) apparentemente sproporzionato nel tempo o nel grado rispetto al decorso abituale di qualsiasi trauma o lesione nota. Il dolore \u00E8 regionale, non limitato a un territorio nervoso o a un dermatomero, e ha di solito predominanza distale di alterazioni sensitive, motorie, sudomotorie, vasomotorie e/o trofiche. La sindrome mostra progressione variabile nel tempo.",
          "\u2500\u2500\u2500 CRITERIO 1 \u2500\u2500\u2500",
          "Dolore continuo, sproporzionato rispetto a qualsiasi evento scatenante.",
          "\u2500\u2500\u2500 CRITERIO 2 \u2014 SINTOMI RIFERITI \u2500\u2500\u2500",
          "Deve riferire almeno un sintomo in 3 delle 4 categorie seguenti:",
          "\u2022 Iperalgesia e/o allodinia",
          "\u2022 Asimmetria termica e/o alterazioni del colore cutaneo e/o asimmetria del colore",
          "\u2022 Edema e/o alterazioni della sudorazione e/o asimmetria della sudorazione",
          "\u2022 Riduzione del ROM e/o disfunzione motoria (debolezza, tremore, distonia) e/o alterazioni trofiche (peli, unghie, cute)",
          "\u2500\u2500\u2500 CRITERIO 3 \u2014 SEGNI OSSERVATI \u2500\u2500\u2500",
          "Deve presentare almeno un segno al momento della valutazione in 2 o pi\u00F9 delle categorie seguenti:",
          "\u2022 Evidenza di iperalgesia (alla puntura) e/o allodinia (al tocco leggero e/o pressione somatica profonda e/o movimento articolare)",
          "\u2022 Evidenza di asimmetria termica e/o alterazioni o asimmetria del colore cutaneo",
          "\u2022 Evidenza di edema e/o alterazioni o asimmetria della sudorazione",
          "\u2022 Evidenza di riduzione del ROM e/o disfunzione motoria e/o alterazioni trofiche",
          "\u2500\u2500\u2500 CRITERIO 4 \u2500\u2500\u2500",
          "Non esiste altra diagnosi che spieghi meglio segni e sintomi.",
          "\u26A0\uFE0F Un segno viene conteggiato solo se \u00E8 osservato al momento della diagnosi.",
          "STORIA: il termine CRPS nasce dalla conferenza internazionale di Orlando del 1994; i criteri IASP del 1994 sono stati poi validati empiricamente dando origine ai criteri di Budapest, adottati formalmente dalla IASP nel 2012."
        ]
      },
      {
        title: "Functional Restoration \u2014 Impianto del Trattamento",
        content: [
          "RAZIONALE: la CRPS \u00E8 biomedicamente multiforme, con fisiopatologia centrale e periferica, e contiene frequentemente componenti psicosociali che sono a loro volta caratteristiche diagnostiche e bersagli terapeutici.",
          "APPROCCIO INTERDISCIPLINARE: gruppo dedicato, coerente, coordinato e specificamente formato di professionisti che si riuniscono regolarmente per pianificare, coordinare la cura e adattarsi agli sviluppi. Meno desiderabile ma pi\u00F9 accessibile \u00E8 l'approccio multidisciplinare, in cui un singolo professionista coordina le varie specialit\u00E0.",
          "\u2500\u2500\u2500 EVOLUZIONE DELLE LINEE GUIDA \u2500\u2500\u2500",
          "MALIBU 1987: principi centrali di motivazione del paziente, desensibilizzazione e riattivazione facilitata dal sollievo dal dolore, uso di procedure farmacologiche e interventistiche, tecniche cognitivo-comportamentali.",
          "\u26A0\uFE0F PROBLEMI DELLE LINEE MALIBU: nessuna raccomandazione su sequenza o durata degli interventi; concetto di time-contingency troppo rigido (progressione di ogni livello in 2 settimane o meno); farmaci, blocchi e psicoterapia riservati solo ai casi in cui l'algoritmo funzionale non abbia dato risultati.",
          "MINNEAPOLIS 2001: raccomanda percorsi CONCORRENTI anzich\u00E9 lineari, costruiti sui domini di riabilitazione, gestione del dolore e trattamento psicologico. Liberalizza l'uso delle modalit\u00E0 analgesiche, riduce l'enfasi sulla time-contingency e mantiene il focus sulla funzione.",
          "PRINCIPIO OPERATIVO: nell'esperienza degli autori, pi\u00F9 spesso che no sono necessari interventi multipli per avviare adeguatamente il paziente in un processo di functional restoration \u2014 non ha senso 'riservarli' finch\u00E9 il paziente non ha fallito."
        ]
      },
      {
        title: "Fisioterapia",
        content: [
          "La fisioterapia \u00E8 stata definita dal gruppo di gestione del dolore della Mayo Clinic 'la pietra angolare e il trattamento di prima linea per la CRPS'.",
          "OBIETTIVI: aumentare ROM, flessibilit\u00E0 e successivamente forza attraverso esercizio progressivo gentile; migliorare tutti i compiti funzionali, incluso il gait training nella CRPS dell'arto inferiore; coordinare gli obiettivi con terapia occupazionale, ricreativa e riabilitazione professionale.",
          "\u26A0\uFE0F LIMITE FONDAMENTALE: la fisioterapia deve essere eseguita entro i limiti della tolleranza del paziente e MAI quando l'arto affetto \u00E8 insensibile (ad esempio subito dopo un blocco) o nei pazienti con CRPS di tipo II che presentano ipoestesia pronunciata.",
          "\u26A0\uFE0F Una fisioterapia inappropriatamente aggressiva pu\u00F2 scatenare dolore estremo, edema, distress e affaticamento, e pu\u00F2 a sua volta esacerbare i sintomi infiammatori e simpatici della CRPS: va quindi evitata.",
          "\u26A0\uFE0F Anche l'uso di ausili o dispositivi per il ROM, l'applicazione prolungata di ghiaccio e l'inattivit\u00E0 possono aggravare la CRPS.",
          "PRINCIPIO CHIAVE DA INSEGNARE AL PAZIENTE: si prova dolore sia esercitandosi troppo sia esercitandosi troppo poco. Il paziente va educato a cercare la 'via di mezzo', ed \u00E8 responsabilit\u00E0 del fisioterapista aiutarlo a trovare quel terreno terapeutico e ad avanzare stabilmente verso uno stile di vita pi\u00F9 funzionale e attivo.",
          "EVIDENZA: in una serie di RCT il gruppo di Oerlemans ha mostrato che la fisioterapia (e in misura minore la terapia occupazionale) migliora i punteggi di dolore e la 'mobilit\u00E0 attiva' rispetto ai pazienti che ricevevano solo counseling, in coorti con CRPS dell'arto superiore (livello 2).",
          "PROTOCOLLO DI OERLEMANS: obiettivo principale \u00E8 consentire al paziente il maggior grado possibile di controllo sui propri sintomi, perseguendo senza sosta la rianimazione della parte affetta. Comprende supporto, terapia con esercizio, miglioramento delle abilit\u00E0 e terapia di rilassamento. Componenti chiave: aumentare il grado di controllo sul dolore, migliorare il coping, trattare la disregolazione e migliorare le abilit\u00E0, anche attraverso l'addestramento a competenze compensatorie."
        ]
      },
      {
        title: "Terapia Occupazionale, Mirror Therapy e Graded Motor Imagery",
        content: [
          "I terapisti occupazionali sono i leader terapeutici ideali nel processo di functional restoration, essendo formati sui principi bio-psico-sociali della malattia e centrali nella valutazione e nel trattamento funzionale.",
          "VALUTAZIONE: uso funzionale attuale dell'arto affetto; ROM attivo con goniometro; edema con misurazione circonferenziale o volumetro; coordinazione e destrezza; temperatura cutanea e alterazioni vasomotorie; dolore e sensibilit\u00E0; uso dell'arto nelle attivit\u00E0 quotidiane.",
          "\u2500\u2500\u2500 MIRROR VISUAL FEEDBACK (MVF) \u2500\u2500\u2500",
          "Ramachandran ha per primo descritto l'uso degli specchi per ridurre dolore o disagio posizionale nel dolore da arto fantasma (livello 3). McCabe ha poi esteso lo studio della MVF alla CRPS (livello 3), illustrandone i benefici nelle forme precoci e intermedie.",
          "\u26A0\uFE0F La MVF NON ha dimostrato effetto significativo nella CRPS cronica.",
          "PROTOCOLLO McCABE: si chiede al paziente di chiudere gli occhi e descrivere entrambi gli arti (dimensione, posizione, differenze percepite), seguito da movimenti immaginati di entrambi. I movimenti si concentrano sulle articolazioni dolorose e su quelle immediatamente prossimali e distali. Il partecipante osserva poi l'arto riflesso senza movimento, per cercare di raggiungere il senso di appartenenza.",
          "\u2500\u2500\u2500 GRADED MOTOR IMAGERY (GMI) \u2500\u2500\u2500",
          "Moseley ha progettato il programma GMI per attivare in sequenza la corteccia premotoria e la corteccia motoria primaria attraverso tre fasi: riconoscimento della lateralit\u00E0 dell'arto, immaginazione motoria e infine terapia allo specchio.",
          "Il programma \u00E8 apparso particolarmente utile perch\u00E9 la corteccia premotoria pu\u00F2 essere attivata senza innescare altre reti corticali coinvolte nel movimento. \u00C8 stato sviluppato specificamente per chi ha CRPS di lunga durata.",
          "MECCANISMI IPOTIZZATI: attenzione forzata verso l'arto affetto, riduzione della chinesiofobia, aumento dell'inibizione a fibre larghe e riconciliazione dell'incongruenza sensomotoria.",
          "\u26A0\uFE0F I protocolli di McCabe per la MVF e di Moseley per la GMI vanno considerati parametri di trattamento indicativi: entrambi enfatizzano l'importanza di un approccio centrato sul paziente, guidato dall'osservazione clinica dei sintomi presenti e dalla risposta al trattamento."
        ]
      }
    ]
  },
  {
    id: 25,
    category: "Ginocchio",
    color: "#0E6B5E",
    icon: "\u{1F9B5}",
    title: "Artrosi di Ginocchio (Non Protesica) \u2014 CPG AAOS 2021",
    source: "AAOS | Management of Osteoarthritis of the Knee (Non-Arthroplasty), 3\u00AA edizione | Adottata 31 agosto 2021",
    pdfUrl: "https://www.aaos.org/globalassets/quality-and-practice-resources/osteoarthritis-of-the-knee/oak3cpg.pdf",
    pdfUrl2: "https://www.aaos.org/oak3cpg",
    tags: ["ginocchio", "artrosi", "gonartrosi", "OA", "esercizio", "AAOS", "conservativo", "infiltrazioni", "CPG"],
    summary: "Linea guida AAOS 2021 sul trattamento non protesico dell'artrosi di ginocchio negli adulti dai 17 anni. Sostituisce la seconda edizione del 2013 e adotta il framework GRADE Evidence-to-Decision. Copre interventi non farmacologici, farmacologici e procedure chirurgiche meno invasive della protesi. Non riguarda artrite reumatoide, artrosi di altre articolazioni o artropatie infiammatorie.",
    sections: [
      {
        title: "Epidemiologia e Impianto",
        content: [
          "INCIDENZA: negli Stati Uniti stimata in 240 persone per 100.000 all'anno.",
          "PREVALENZA MONDIALE dell'artrosi di ginocchio sintomatica confermata radiograficamente: circa 3.8% complessivo, in aumento con l'et\u00E0 fino a oltre il 10% sopra i 60 anni.",
          "Circa 32.5 milioni di adulti americani, il 14% della popolazione, hanno sofferto di artrosi di ginocchio sintomatica tra il 2008 e il 2014.",
          "SESSO: le donne rappresentano il 51% della popolazione generale statunitense ma il 78% dei pazienti con diagnosi di artrosi tra il 2008 e il 2014.",
          "EZIOLOGIA: l'artrosi deriva da uno squilibrio tra degradazione e riparazione dei tessuti dell'articolazione sinoviale e si manifesta per pi\u00F9 fattori di rischio, tra cui trauma, sovraccarico e predisposizione genetica.",
          "METODO: ricerca sistematica condotta tra marzo 2018 e aprile 2020; 15.103 abstract esaminati nella ricerca primaria pi\u00F9 1.768 nella secondaria; 617 articoli inclusi dopo revisione full-text e analisi di qualit\u00E0.",
          "VOTAZIONE: le raccomandazioni venivano approvate con maggioranza semplice del 60%, ma il gruppo ha raggiunto il consenso del 100% su ogni raccomandazione di questa linea guida.",
          "\u2500\u2500\u2500 LEGENDA FORZA DELLE RACCOMANDAZIONI \u2500\u2500\u2500",
          "FORTE: evidenza da due o pi\u00F9 studi di qualit\u00E0 alta con risultati coerenti, senza motivi di declassamento \u2014 improbabile che ricerche future la ribaltino",
          "MODERATA: evidenza da due o pi\u00F9 studi di qualit\u00E0 moderata con risultati coerenti, oppure da un singolo studio di alta qualit\u00E0",
          "LIMITATA: evidenza da uno o pi\u00F9 studi di bassa qualit\u00E0 con risultati coerenti, o da un singolo studio moderato; oppure evidenza superiore declassata per criticit\u00E0 nel framework EtD",
          "CONSENSO: nessuna evidenza a supporto; raccomandazione basata sull'opinione clinica del gruppo"
        ]
      },
      {
        title: "Raccomandazioni FORTI",
        content: [
          "\u2500\u2500\u2500 A FAVORE \u2500\u2500\u2500",
          "ESERCIZIO (FORTE): esercizio supervisionato, non supervisionato e/o in acqua sono raccomandati rispetto a nessun esercizio, per migliorare dolore e funzione.",
          "\u2192 In 7 studi di alta qualit\u00E0 su 10 si sono osservati maggiori miglioramenti di dolore, funzione o entrambi rispetto al controllo senza esercizio. Il confronto tra esercizio supervisionato e non supervisionato ha dato risultati misti: entrambi migliorano dolore e funzione.",
          "\u2192 MODALIT\u00C0: gli studi che hanno confrontato yoga, carico contro non carico, resistenza alta contro bassa, isocinetico/isometrico/isotonico e lavoro su gamba contro anca non hanno trovato differenze sostanziali. L'esercizio \u00E8 benefico, ma la modalit\u00E0 conta meno del fatto di praticarne uno.",
          "\u2192 L'esercizio in acqua mostra benefici, ma i risultati incoerenti non permettono di raccomandarlo rispetto a quello a terra.",
          "AUTOGESTIONE (FORTE): i programmi di self-management sono raccomandati per migliorare dolore e funzione. Comprendono aderenza terapeutica, gestione del dolore e strategie di coping, protezione articolare durante l'attivit\u00E0, consigli sull'esercizio, problem solving e gestione dello stress.",
          "EDUCAZIONE DEL PAZIENTE (FORTE): i programmi educativi sono raccomandati per migliorare il dolore.",
          "FANS TOPICI (FORTE): dovrebbero essere usati per migliorare funzione e qualit\u00E0 di vita, quando non controindicati. \u26A0\uFE0F Cautela in insufficienza renale cronica stadio 4-5, coronaropatia e scompenso cardiaco.",
          "FANS ORALI (FORTE): raccomandati per migliorare dolore e funzione, quando non controindicati.",
          "PARACETAMOLO ORALE (FORTE): raccomandato per migliorare dolore e funzione, quando non controindicato.",
          "\u2500\u2500\u2500 CONTRO \u2500\u2500\u2500",
          "\u26A0\uFE0F PLANTARI CON CUNEO LATERALE (FORTE): NON raccomandati. Gli studi contemporanei non mostrano un miglioramento affidabile del dolore n\u00E9 un miglioramento funzionale sufficiente. In uno studio il 25% dei soggetti non correggeva il momento adduttorio del ginocchio con il cuneo.",
          "\u26A0\uFE0F OPPIOIDI ORALI, TRAMADOLO INCLUSO (FORTE): determinano un aumento significativo di eventi avversi e NON sono efficaci nel migliorare dolore o funzione."
        ]
      },
      {
        title: "Raccomandazioni MODERATE",
        content: [
          "BASTONE (MODERATA): pu\u00F2 essere usato per migliorare dolore e funzione. In uno studio su 64 pazienti, a 30 e 60 giorni il gruppo con bastone aveva meno dolore (VAS 3.84 contro 5.95 cm a 60 giorni) e consumava meno FANS.",
          "\u2192 Inizialmente tutti i pazienti mostrano distanza di deambulazione ridotta, frequenza cardiaca e consumo di ossigeno aumentati; dopo 60 giorni riescono a percorrere la stessa distanza con o senza bastone, con consumo di ossigeno pi\u00F9 normale \u2014 segno di adattamento fisiologico.",
          "TUTORE (MODERATA, declassata per eterogeneit\u00E0): il trattamento con tutore pu\u00F2 essere usato per migliorare funzione, dolore e qualit\u00E0 di vita. L'analisi per sottogruppi mostra effetto maggiore nei pazienti con allineamento in varo e sintomi pi\u00F9 severi. Praticamente nessun danno nel provarlo, salvo irritazione cutanea o scomodit\u00E0.",
          "TRAINING NEUROMUSCOLARE (MODERATA, declassata per incoerenza): i programmi neuromuscolari (equilibrio, agilit\u00E0, coordinazione) in combinazione con l'esercizio tradizionale possono essere usati per migliorare la funzione performance-based e la velocit\u00E0 del cammino.",
          "\u26A0\uFE0F In nessuno degli studi si sono osservate differenze di dolore tra i gruppi.",
          "CALO PONDERALE (MODERATA, declassata per incoerenza): la perdita di peso sostenuta \u00E8 raccomandata per migliorare dolore e funzione nei pazienti sovrappeso e obesi. Dolore e funzione migliorano complessivamente con il calo ottenuto combinando dieta ed esercizio; la sola dieta contro controllo non ha mostrato cambiamenti clinicamente significativi chiari. La combinazione dieta ed esercizio appare l'alternativa preferibile.",
          "CORTICOSTEROIDI INTRARTICOLARI (MODERATA): possono fornire sollievo a BREVE termine.",
          "\u26A0\uFE0F ACIDO IALURONICO (MODERATA): NON raccomandato per l'uso di routine nel trattamento dell'artrosi sintomatica di ginocchio.",
          "\u26A0\uFE0F LAVAGGIO E DEBRIDEMENT ARTROSCOPICI (MODERATA): NON raccomandati nei pazienti con diagnosi primaria di artrosi di ginocchio.",
          "MENISCECTOMIA PARZIALE ARTROSCOPICA (MODERATA): pu\u00F2 essere usata per il trattamento delle lesioni meniscali in pazienti con artrosi concomitante lieve-moderata che hanno fallito la fisioterapia o altri trattamenti non chirurgici."
        ]
      },
      {
        title: "Raccomandazioni LIMITATE e di Consenso",
        content: [
          "TERAPIA MANUALE (LIMITATA, declassata): la terapia manuale in aggiunta a un programma di esercizio pu\u00F2 essere usata per migliorare dolore e funzione.",
          "\u2192 In due studi il gruppo con terapia manuale ha ottenuto miglioramenti maggiori a 8-9 settimane (punteggio WOMAC totale, criteri OMERACT-OARSI Responder), ma a 1 anno NON si osservavano differenze tra i gruppi su nessuna misura. Entrambi i gruppi mantenevano comunque i miglioramenti a un anno.",
          "\u2192 COSTI: la terapia manuale con esercizio erogata con sedute booster periodiche \u00E8 risultata pi\u00F9 costo-efficace della stessa combinazione senza booster, su follow-up a 2 anni.",
          "MASSAGGIO (LIMITATA, declassata): pu\u00F2 essere usato in aggiunta alla cura abituale per migliorare dolore e funzione. \u26A0\uFE0F Gli effetti non si sono mantenuti nei follow-up a pi\u00F9 lungo termine.",
          "LASER APPROVATO FDA (LIMITATA, declassata per fattibilit\u00E0 e uso nella pratica): pu\u00F2 essere usato per migliorare dolore e funzione. Nessuna differenza tra alta e bassa dose.",
          "AGOPUNTURA (LIMITATA, declassata): pu\u00F2 migliorare dolore e funzione. \u26A0\uFE0F Nei due studi con cecit\u00E0 efficace non si osservava alcun effetto; gli effetti maggiori si registravano negli studi senza cecit\u00E0 o con cecit\u00E0 poco chiara \u2014 ed \u00E8 questa la ragione del grado limitato.",
          "TENS (LIMITATA, declassata): pu\u00F2 essere usata per migliorare il DOLORE. \u26A0\uFE0F I risultati NON supportano l'uso della TENS per migliorare la funzione.",
          "PENS E CAMPI ELETTROMAGNETICI PULSATI (LIMITATA, declassata per fattibilit\u00E0): la PENS pu\u00F2 migliorare dolore e funzione; la PEMF il dolore.",
          "ONDE D'URTO (LIMITATA, declassata): possono essere usate per migliorare dolore e funzione. Miglioramenti funzionali a 4-12 settimane ma non a 1 anno.",
          "PRP (LIMITATA, declassata): il plasma ricco di piastrine pu\u00F2 ridurre il dolore e migliorare la funzione.",
          "DENERVAZIONE (LIMITATA, declassata): pu\u00F2 ridurre il dolore e migliorare la funzione.",
          "OSTEOTOMIA TIBIALE ALTA (LIMITATA, declassata): pu\u00F2 essere considerata per migliorare dolore e funzione in pazienti correttamente selezionati con artrosi monocompartimentale.",
          "INTEGRATORI (LIMITATA, declassata due livelli per incoerenza): curcuma, estratto di zenzero, glucosamina, condroitina e vitamina D possono essere utili nel ridurre il dolore e migliorare la funzione nell'artrosi lieve-moderata, ma l'evidenza \u00E8 incoerente e limitata. \u26A0\uFE0F Negli Stati Uniti gli integratori non sono soggetti agli stessi standard dei farmaci su prescrizione; valutare le possibili interazioni farmacologiche prima di iniziarne l'assunzione.",
          "\u2500\u2500\u2500 DICHIARAZIONI DI CONSENSO (nessuna evidenza affidabile) \u2500\u2500\u2500",
          "DRY NEEDLING: in assenza di evidenza affidabile, secondo il gruppo di lavoro l'utilit\u00E0 e l'efficacia del dry needling non sono chiare e richiedono ulteriori evidenze.",
          "DISPOSITIVI INTERPOSIZIONALI LIBERI: in assenza di evidenza affidabile o nuova, il gruppo di lavoro \u00E8 dell'opinione di NON usare dispositivi interposizionali non fissati nei pazienti con artrosi sintomatica del compartimento mediale."
        ]
      }
    ]
  },
  {
    id: 26,
    category: "Reumatologia",
    color: "#6B2D5C",
    icon: "\u{1F9EC}",
    title: "Spondilite Anchilosante e Spondiloartrite Assiale Non Radiografica \u2014 ACR 2019",
    source: "Ward et al. | Arthritis Rheumatol 2019;71(10):1599-1613 | ACR / Spondylitis Association of America / SPARTAN",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6764882/",
    tags: ["spondilite anchilosante", "spondiloartrite assiale", "axSpA", "reumatologia", "lombalgia infiammatoria", "HLA-B27", "biologici"],
    summary: "Aggiornamento 2019 delle raccomandazioni ACR per il trattamento della spondilite anchilosante (AS) e della spondiloartrite assiale non radiografica. \u26A0\uFE0F Documento prevalentemente FARMACOLOGICO, rivolto anche a fisioterapisti e fisiatri tra gli utilizzatori previsti: qui \u00E8 riportato ci\u00F2 che serve al fisioterapista per riconoscere la condizione, capire il percorso terapeutico del paziente e orientare le decisioni sull'imaging. Le raccomandazioni del 2015 su riabilitazione, chirurgia, educazione e prevenzione non sono state riesaminate e restano in vigore.",
    sections: [
      {
        title: "Inquadramento per il Fisioterapista",
        content: [
          "DEFINIZIONE: la spondiloartrite assiale, che comprende spondilite anchilosante e forma non radiografica, \u00E8 la principale forma di artrite infiammatoria cronica che colpisce lo scheletro assiale.",
          "PREVALENZA: la spondilite anchilosante interessa lo 0.1-0.5% della popolazione.",
          "CARATTERISTICHE: lombalgia infiammatoria, sacroileite radiografica, eccessiva formazione ossea spinale ed elevata prevalenza di HLA-B27.",
          "FORMA NON RADIOGRAFICA: condivide diverse caratteristiche con la spondilite anchilosante, ma sono assenti il danno avanzato dell'articolazione sacroiliaca e l'anchilosi del rachide.",
          "\u26A0\uFE0F VARIABILIT\u00C0 CLINICA: la severit\u00E0 di artralgia, rigidit\u00E0 e limitazione della flessibilit\u00E0 varia ampiamente tra i pazienti e nel corso della malattia \u2014 elemento centrale per calibrare il carico riabilitativo.",
          "MANIFESTAZIONI EXTRA-SCHELETRICHE: la malattia scheletrica pu\u00F2 accompagnarsi a uveite, psoriasi e malattia infiammatoria intestinale (IBD). Il loro riconoscimento \u00E8 rilevante perch\u00E9 condiziona la scelta del farmaco.",
          "IMPATTO: la spondiloartrite assiale pu\u00F2 imporre un carico fisico e sociale sostanziale e interferire con lavoro e studio.",
          "OBIETTIVI DEL TRATTAMENTO: alleviare i sintomi, migliorare la funzione, mantenere la capacit\u00E0 lavorativa, ridurre le complicanze e prevenire per quanto possibile il danno scheletrico.",
          "UTILIZZATORI PREVISTI: reumatologi, medici di medicina generale, fisiatri, FISIOTERAPISTI e altri professionisti che assistono pazienti con spondiloartrite assiale.",
          "\u26A0\uFE0F NOTA IMPORTANTE: questo aggiornamento non ha riesaminato tutte le raccomandazioni del 2015, concentrandosi sui quesiti per cui erano emerse nuove evidenze rilevanti. Le raccomandazioni 2015 su riabilitazione, uso della chirurgia, gestione delle comorbidit\u00E0, monitoraggio della malattia, educazione del paziente e cure preventive RESTANO IN VIGORE."
        ]
      },
      {
        title: "Percorso Farmacologico \u2014 Sintesi Operativa",
        content: [
          "Questa sezione serve a comprendere quale terapia sta seguendo il paziente e perch\u00E9, non a guidare la prescrizione, che resta di competenza reumatologica.",
          "\u2500\u2500\u2500 MALATTIA ATTIVA \u2500\u2500\u2500",
          "FANS: raccomandazione condizionale per il trattamento CONTINUATIVO rispetto a quello al bisogno, principalmente per il controllo dell'attivit\u00E0 di malattia. La decisione varia in base a severit\u00E0 dei sintomi, preferenze del paziente e comorbidit\u00E0, in particolare gastrointestinali, renali e cardiovascolari.",
          "INIBITORI DEL TNF (TNFi): raccomandazione FORTE dopo fallimento dei FANS. Il panel considera adeguato un trial di almeno 2 FANS diversi a dose massimale per 1 mese, o risposte incomplete ad almeno 2 FANS diversi per 2 mesi, prima di passare ai TNFi.",
          "Nessun TNFi specifico \u00E8 raccomandato come scelta preferenziale per il paziente tipico.",
          "SECUKINUMAB O IXEKIZUMAB (anti IL-17): raccomandazione FORTE rispetto al non trattamento, ma i TNFi sono condizionalmente preferiti per la maggiore esperienza e conoscenza della sicurezza a lungo termine.",
          "TOFACITINIB: i TNFi, il secukinumab e l'ixekizumab sono condizionalmente preferiti al tofacitinib.",
          "\u2500\u2500\u2500 FALLIMENTO DEL PRIMO TNFi \u2500\u2500\u2500",
          "NON RISPOSTA PRIMARIA: si raccomanda condizionalmente il passaggio a secukinumab o ixekizumab piuttosto che a un altro TNFi, nell'ipotesi che il TNF non sia il mediatore infiammatorio chiave in quei pazienti.",
          "NON RISPOSTA SECONDARIA (ricaduta dopo risposta iniziale): si raccomanda condizionalmente il passaggio a un TNFi diverso piuttosto che a un biologico di altra classe.",
          "\u26A0\uFE0F Raccomandazione FORTE CONTRO il passaggio al biosimilare del primo TNFi in caso di non risposta: la risposta clinica non sarebbe diversa.",
          "\u2500\u2500\u2500 MALATTIA STABILE \u2500\u2500\u2500",
          "FANS al bisogno, condizionalmente preferiti al trattamento continuativo.",
          "\u26A0\uFE0F Raccomandazione condizionale CONTRO la sospensione del biologico: la sospensione dopo remissione o bassa attivit\u00E0 comporta ricadute nel 60-74% dei pazienti, talvolta entro poche settimane o mesi.",
          "\u26A0\uFE0F Raccomandazione condizionale CONTRO la riduzione graduale della dose come approccio standard.",
          "Raccomandazione FORTE per la prosecuzione del TNFi originatore piuttosto che il passaggio obbligato al biosimilare durante il trattamento.",
          "\u2500\u2500\u2500 COMORBIDIT\u00C0 \u2500\u2500\u2500",
          "UVEITE RICORRENTE: anticorpi monoclonali anti-TNF condizionalmente preferiti agli altri biologici. Adalimumab e infliximab preferiti a etanercept.",
          "MALATTIA INFIAMMATORIA INTESTINALE: anticorpi monoclonali anti-TNF condizionalmente preferiti. \u26A0\uFE0F Il secukinumab \u00E8 stato associato a nuova insorgenza o riacutizzazione di malattia di Crohn; rischi analoghi sembrano riguardare l'ixekizumab."
        ]
      },
      {
        title: "Valutazione dell'Attivit\u00E0 e Imaging",
        content: [
          "\u26A0\uFE0F TREAT-TO-TARGET: raccomandazione condizionale CONTRO l'uso di una strategia treat-to-target con obiettivo ASDAS <1.3 (o 2.1) rispetto a una strategia basata sulla valutazione clinica del medico.",
          "MOTIVAZIONE: l'approccio treat-to-target in AS \u00E8 sostenuto solo indirettamente dalle associazioni tra livelli di attivit\u00E0 e progressione radiografica futura, ma manca di evidenza diretta robusta. Il panel ha inoltre espresso preoccupazione che la focalizzazione su un target specifico possa portare a un rapido esaurimento di tutti i trattamenti disponibili in alcuni pazienti.",
          "Resta comunque importante quantificare l'attivit\u00E0 di malattia per guidare le decisioni terapeutiche.",
          "\u2500\u2500\u2500 RISONANZA MAGNETICA \u2500\u2500\u2500",
          "ATTIVIT\u00C0 NON CHIARA in paziente in trattamento con biologico: raccomandazione condizionale A FAVORE di RM del rachide o del bacino per valutare l'attivit\u00E0. Nella forma non radiografica l'imaging va focalizzato sulle sacroiliache.",
          "RAZIONALE: misure fisiche e di laboratorio sono spesso normali nonostante la malattia sia attiva, e i sintomi possono essere aspecifici.",
          "\u26A0\uFE0F MALATTIA STABILE: raccomandazione condizionale CONTRO l'esecuzione della RM per confermare l'inattivit\u00E0. Motivi: assenza di evidenza che migliori gli esiti, sensibilit\u00E0 e specificit\u00E0 solo moderate delle alterazioni RM, carico dell'esame e rischio di sovratrattamento.",
          "\u26A0\uFE0F INTERPRETAZIONE: nella lettura della RM va tenuto presente il range e la frequenza di alterazioni, incluse le lesioni da edema midollare, che possono comparire in soggetti SENZA spondiloartrite assiale e non rappresentare infiammazione da axSpA.",
          "Il grado di alterazione infiammatoria alla RM pu\u00F2 non correlare con la risposta al trattamento, e la sede dell'infiammazione pu\u00F2 non correlare con la sede del dolore.",
          "\u2500\u2500\u2500 RADIOGRAFIE \u2500\u2500\u2500",
          "\u26A0\uFE0F Raccomandazione condizionale CONTRO l'esecuzione di radiografie del rachide a intervalli programmati (per esempio ogni 2 anni) come approccio standard, sia in malattia attiva sia stabile.",
          "MOTIVAZIONE: nessuna evidenza che il monitoraggio seriato migliori gli esiti; assenza di dati che bilancino il beneficio clinico con il rischio da esposizione radiante. Negli studi di ricerca si rilevano piccoli cambiamenti nel 20-35% dei pazienti su un intervallo di 2 anni.",
          "Le radiografie del rachide restano utili per la diagnosi, per valutare l'estensione dell'anchilosi e per indagare un nuovo dolore spinale in un paziente con AS accertata."
        ]
      }
    ]
  },
  {
    id: 27,
    category: "Reumatologia",
    color: "#6B2D5C",
    icon: "\u{1FAB4}",
    title: "Artrite Psoriasica \u2014 Linea Guida ACR/NPF 2018",
    source: "Singh et al. | Arthritis Care Res 2019;71(1):2-29 | American College of Rheumatology / National Psoriasis Foundation",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8265826/",
    pdfUrl2: "https://acrjournals.onlinelibrary.wiley.com/doi/full/10.1002/acr.23789",
    tags: ["artrite psoriasica", "PsA", "entesite", "dattilite", "reumatologia", "esercizio", "psoriasi"],
    summary: "Prima linea guida congiunta ACR e National Psoriasis Foundation per il trattamento dell'artrite psoriasica attiva nell'adulto. \u26A0\uFE0F Documento prevalentemente FARMACOLOGICO: il 94% delle raccomandazioni \u00E8 condizionale e basato su evidenza di qualit\u00E0 bassa o molto bassa. Qui sono riportati inquadramento clinico, raccomandazioni non farmacologiche (l'unica sezione direttamente fisioterapica) e sintesi del percorso farmacologico.",
    sections: [
      {
        title: "Inquadramento Clinico",
        content: [
          "DEFINIZIONE: malattia muscoloscheletrica infiammatoria cronica associata a psoriasi, che si manifesta pi\u00F9 comunemente con artrite periferica, dattilite, entesite e spondilite.",
          "UNGHIE: lesioni ungueali, incluse pitting e onicolisi, si osservano nel 80-90% circa dei pazienti con artrite psoriasica \u2014 elemento di sospetto rilevante all'esame obiettivo.",
          "EPIDEMIOLOGIA: incidenza circa 6 per 100.000 all'anno; prevalenza circa 1-2 per 1.000 nella popolazione generale. Nei pazienti con psoriasi l'incidenza annuale \u00E8 del 2.7% e la prevalenza riportata varia dal 6% al 41%.",
          "SEQUENZA: nella maggioranza dei pazienti i sintomi cutanei compaiono per primi, seguiti dall'artrite; in alcuni compaiono insieme e nel 10-15% l'artrite precede la psoriasi.",
          "SESSO: colpisce uomini e donne in egual misura.",
          "DISTRIBUZIONE ARTICOLARE: varia dall'oligoartrite asimmetrica (\u22644 articolazioni) alla poliartrite simmetrica (\u22655 articolazioni). Le interfalangee distali sono comunemente colpite e in alcuni pazienti sono le uniche articolazioni interessate.",
          "MALATTIA ASSIALE: quando presente, si manifesta di solito insieme all'artrite periferica.",
          "\u26A0\uFE0F ARTRITE MUTILANS: alcuni pazienti presentano una forma rapidamente progressiva e distruttiva.",
          "PROGNOSI: una maggiore attivit\u00E0 di malattia si associa a danno articolare progressivo e mortalit\u00E0 pi\u00F9 elevata. L'identificazione precoce e l'avvio tempestivo della terapia sono importanti per migliorare gli esiti a lungo termine.",
          "DEFINIZIONE DI MALATTIA ATTIVA: sintomi a livello inaccettabilmente fastidioso riferito dal paziente e giudicati dal clinico come dovuti alla PsA per la presenza di almeno uno tra: articolazioni attivamente infiammate, dattilite, entesite, malattia assiale, coinvolgimento cutaneo e/o ungueale attivo, manifestazioni extra-articolari come uveite o IBD.",
          "FATTORI DI PROGNOSI SFAVOREVOLE: malattia erosiva, dattilite, indici di infiammazione elevati (VES e PCR) attribuibili alla PsA.",
          "ESAME OBIETTIVO NECESSARIO alla scelta terapeutica: valutazione delle articolazioni periferiche (dattilite compresa), delle entesi, del rachide, della cute e delle unghie."
        ]
      },
      {
        title: "Raccomandazioni NON Farmacologiche",
        content: [
          "\u2500\u2500\u2500 L'UNICA SEZIONE DIRETTAMENTE FISIOTERAPICA \u2500\u2500\u2500",
          "Tutte le raccomandazioni non farmacologiche sono CONDIZIONALI e basate su evidenza di qualit\u00E0 bassa o molto bassa, tranne la cessazione del fumo che \u00E8 una raccomandazione FORTE. Si applicano ai pazienti con PsA attiva indipendentemente dallo stato del trattamento farmacologico.",
          "ESERCIZIO E TERAPIE FISICHE (condizionale): si raccomanda che i pazienti con PsA attiva usino qualche forma o combinazione di esercizio, fisioterapia, terapia occupazionale, massoterapia e agopuntura, rispetto al non usarle, secondo tolleranza.",
          "TIPO DI ESERCIZIO (condizionale): l'esercizio a BASSO impatto \u2014 per esempio tai chi, yoga, nuoto \u2014 \u00E8 raccomandato rispetto all'esercizio ad ALTO impatto come la corsa.",
          "\u2192 L'esercizio ad alto impatto pu\u00F2 comunque essere svolto dai pazienti che lo preferiscono e non hanno controindicazioni.",
          "CESSAZIONE DEL FUMO (FORTE): i clinici DOVREBBERO incoraggiare i pazienti a smettere di fumare, offrendo supporti alla cessazione. La raccomandazione si basa sull'efficacia dimostrata negli RCT in altre condizioni e nella popolazione generale.",
          "CALO PONDERALE (condizionale): nei pazienti con PsA in sovrappeso o obesi \u00E8 raccomandata la perdita di peso, per aumentare potenzialmente la risposta farmacologica.",
          "\u2500\u2500\u2500 IMPLICAZIONE PRATICA \u2500\u2500\u2500",
          "La combinazione modalit\u00E0 a basso impatto, cessazione del fumo e gestione del peso rappresenta il contributo fisioterapico riconosciuto da questa linea guida. La formulazione 'secondo tolleranza' \u00E8 esplicita e va rispettata: l'entesite e la dattilite attive limitano il carico tollerabile.",
          "\u26A0\uFE0F Il documento non specifica dosaggi, frequenze o progressioni per l'esercizio: quelle vanno costruite sulla presentazione individuale e sui domini attivi di malattia."
        ]
      },
      {
        title: "Percorso Farmacologico \u2014 Sintesi",
        content: [
          "Sezione di orientamento per comprendere la terapia del paziente, non per guidarne la prescrizione. Il 94% delle raccomandazioni \u00E8 condizionale; solo il 6% \u00E8 forte.",
          "\u2500\u2500\u2500 PAZIENTE NAIVE AL TRATTAMENTO \u2500\u2500\u2500",
          "Un biologico anti-TNF \u00E8 condizionalmente raccomandato rispetto alle piccole molecole orali (OSM) come opzione di prima linea.",
          "Le OSM possono essere usate al posto dell'anti-TNF nei pazienti senza PsA severa e senza psoriasi severa, in chi preferisce una terapia orale, o in presenza di controindicazioni agli anti-TNF: infezioni ricorrenti, scompenso cardiaco congestizio, malattia demielinizzante.",
          "Il metotrexato \u00E8 raccomandato rispetto ai FANS nei pazienti naive con PsA attiva.",
          "\u2500\u2500\u2500 MALATTIA ASSIALE (spondilite psoriasica) \u2500\u2500\u2500",
          "Per la PsA assiale vanno seguite le raccomandazioni ACR per la spondiloartrite assiale (guida dedicata in questa app).",
          "\u26A0\uFE0F Le piccole molecole orali NON sono efficaci sulla malattia assiale.",
          "Dopo fallimento dei FANS: anti-TNF condizionalmente preferito ad anti IL-17 e anti IL-12/23; anti IL-17 preferito ad anti IL-12/23.",
          "\u2500\u2500\u2500 ENTESITE PREDOMINANTE \u2500\u2500\u2500",
          "Nei pazienti naive con entesite predominante, un anti-TNF \u00E8 condizionalmente raccomandato rispetto alle OSM come prima linea.",
          "Tra le piccole molecole orali, solo l'apremilast ha mostrato efficacia sull'entesite.",
          "I FANS orali sono raccomandati rispetto all'avvio di una OSM, salvo malattia cardiovascolare, ulcera peptica, malattia o insufficienza renale, o psoriasi/PsA severa.",
          "\u2500\u2500\u2500 TREAT-TO-TARGET \u2500\u2500\u2500",
          "Nei pazienti con PsA attiva, una strategia treat-to-target \u00E8 condizionalmente raccomandata rispetto al non usarla. Si pu\u00F2 considerare di non adottarla in presenza di preoccupazioni su eventi avversi, costi della terapia e carico farmacologico per il paziente.",
          "\u26A0\uFE0F Il concetto di treat-to-target \u00E8 risultato problematico per i pazienti del panel: pur vedendone il valore, temevano aumento dei costi (ticket, spostamenti per visite pi\u00F9 frequenti) e maggiori eventi avversi.",
          "\u2500\u2500\u2500 COMORBIDIT\u00C0 \u2500\u2500\u2500",
          "IBD ATTIVA (raccomandazioni FORTI): anticorpo monoclonale anti-TNF o anti IL-12/23 raccomandati rispetto ad anti IL-17; anticorpo monoclonale anti-TNF raccomandato rispetto a etanercept.",
          "DIABETE: nei pazienti naive con diabete attivo, una OSM diversa dal metotrexato \u00E8 condizionalmente preferita all'anti-TNF, per il rischio di steatosi epatica e tossicit\u00E0 epatica con metotrexato in questa popolazione.",
          "INFEZIONI GRAVI FREQUENTI: una OSM \u00E8 FORTEMENTE raccomandata rispetto all'anti-TNF come prima linea, per la black box warning contro l'uso di anti-TNF in questi pazienti."
        ]
      }
    ]
  },
  {
    id: 2,
    category: "Ginocchio",
    color: "#0E6B5E",
    icon: "🦵",
    title: "Artroplastica Totale di Ginocchio (TKA)",
    source: "AAOS / SIOT 2023 | South Shore Orthopedics TKA Protocol 2019",
    pdfUrl: "https://southshoreorthopedics.com/wp-content/uploads/2019/10/TKA-Protocol-2019.pdf",
    tags: ["protesi", "gonartrosi", "chirurgia"],
    summary: "Gestione della gonartrosi avanzata con indicazioni per la sostituzione totale del ginocchio.",
    sections: [
      {
        title: "Indicazioni",
        content: [
          "Gonartrosi tricompartimentale sintomatica (K-L grade ≥ 3) refrattaria al trattamento conservativo",
          "Dolore severo con significativa limitazione del ROM (< 90° flessione)",
          "Deformità in varo/valgo > 15° con fallimento della osteotomia",
          "Artrite reumatoide/infiammatoria con coinvolgimento articolare severo",
          "Neoplasie ossee che richiedono resezione articolare",
        ],
      },
      {
        title: "Valutazione Pre-operatoria",
        content: [
          "RX in carico (ortostasi) in AP, LL e assiale della rotula",
          "Telemetria dell'arto inferiore per valutazione dell'asse meccanico",
          "Esclusione infezione: emocromo, VES, PCR, eventuale aspirato articolare",
          "BMI: ottimizzare se > 35 (maggior rischio complicanze)",
          "Cessazione fumo almeno 4 settimane prima dell'intervento",
        ],
      },
      {
        title: "Profilassi Infettiva",
        content: [
          "Cefazolina 2g ev entro 60 min prima dell'incisione cutanea",
          "Dose aggiuntiva se intervento > 4h o perdita ematica > 1500ml",
          "In caso di allergia alle penicilline: vancomicina 15mg/kg ev",
          "Decolonizzazione da MRSA (mupirocina nasale + clorexidina) se screening positivo",
        ],
      },
      {
        title: "Gestione del Dolore (ERAS)",
        content: [
          "Analgesia multimodale: paracetamolo + FANS + oppioidi al bisogno",
          "Blocco nervoso periferico: blocco del canale degli adduttori (ACB) + IPACK",
          "Infiltrazione periartcolare intraoperatoria (ropivacaina + ketorolac + adrenalina)",
          "Evitare oppioidi sistemici come prima linea",
          "Criotherapy locale per 48h",
        ],
      },
      {
        title: "Protocollo Riabilitativo Post-TKA — 4 Fasi (South Shore Orthopedics)",
        content: [
          "FONTE: SouthShoreHealth.org — TKA Rehabilitation Protocol 2019 (southshoreorthopedics.com). La progressione è individuale e basata sulla valutazione clinica. Continuum: Ricovero Day 0-2 → Home Care 3 giorni-3 settimane → Fisioterapia ambulatoriale 3-12 settimane → Programma autonomo 12+ settimane.",
          "CRITERI DIMISSIONE FISIOTERAPIA: raggiungimento 70-80% del livello funzionale pre-operatorio — deambulazione senza ausili, scale in modo alternato, entrata/uscita auto senza difficoltà, calze e scarpe senza difficoltà.",
          "TEMPI RECUPERO: 4-6 mesi per ritorno al livello pre-intervento; fino a 9-12 mesi nei casi complessi. Lavori sedentari: 4+ settimane; lavori fisici: 3-6 mesi.",
          "GUIDA: no guida per 6 settimane se ginocchio destro, 4 settimane se sinistro; no guida con narcotici.",
          "─── FASE 1 — RICOVERO OSPEDALIERO (Day 0 – Dimissione) ───",
          "OBIETTIVI: controllo dolore e gonfiore; protezione tessuti in guarigione; ROM (flessione ≥90°, estensione ≤0°); attivazione muscolare arto inferiore; mobilità funzionale indipendente",
          "PRECAUZIONI: WBAT con deambulatore/stampelle; screening DVT, deficit sensitivo-motori, ipotensione ortostatica, bassa ematocrit",
          "POSIZIONAMENTO A LETTO: asciugamano arrotolato sotto la caviglia per favorire l'estensione; rotolo trocanterio per neutro di rotazione dell'anca; MAI nulla sotto il ginocchio operato",
          "ESERCIZI FASE 1 — ROM: flessione/estensione passiva, heel slides, flessione/estensione assistita seduto, pompe tibiotarsiche; RINFORZO: quad set, glut set, hamstring set, SLR senza lag, abduzione/adduzione anca, long arc quads (LAQ), flessione anca seduto; MOBILITÀ: trasferimenti, deambulazione su piano, scale, ADL con ausili",
          "DOSAGGIO FASE 1: 10 rip x 3-5 volte/die; ghiaccio 10-20 min dopo ogni sessione",
          "─── FASE 2 — DIMISSIONE – 6 SETTIMANE ───",
          "OBIETTIVI: ROM 0°-110°; normalizzare mobilità funzionale; svezzamento ausili con pattern deambulatorio normale; inizio rinforzo quadricipite; avvio propriocezione ed endurance",
          "PRECAUZIONI: WBAT con progressione deambulatore → stampelle → bastone → niente; monitorare cicatrice, segni di infezione, gonfiore",
          "ESERCIZI FASE 2 — ROM: heel slide con asciugamano, flessione prona ginocchio, heel prop/prone knee hang per full extension, cyclette (inizialmente oscillazioni → rivoluzioni complete); MOBILIZZAZIONI: rotuleo-femorale e tibio-femorale secondo necessità; STRETCHING: hamstring, gastroc/soleo, quadricipite; RINFORZO: quad/glut/ham set, NMES al quadricipite se reclutamento scarso, SLR senza lag, abduzione/adduzione/estensione anca con carico progressivo, CKC di fine fase (TKE, mini-squat, step-up, mini-lunge); PROPRIOCEZIONE: SLS (stance monopodal)",
          "DOSAGGIO FASE 2: 10-20 rip x 3 volte/die; stretching 2-3 x 30 sec; cyclette 5-10 min/die",
          "─── FASE 3 — 6-12 SETTIMANE ───",
          "OBIETTIVI: massimizzare ROM; ripristinare forza arto inferiore (specie quadricipite); ritorno alle attività funzionali di base",
          "PRECAUZIONI: no attività ad alto impatto; no pivot/torsioni ripetute",
          "ESERCIZI FASE 3 — ROM: continuare fasi 1-2; cyclette con resistenza lieve-moderata progressiva; RINFORZO: progressione fase 2 con aumento resistenza; aggiunta attrezzatura palestra (leg press, hamstring curl, 4-way hip); enfasi controllo eccentrico del quadricipite in CKC; PROPRIOCEZIONE: SLS, balance statico su Bosu/wobble board/foam; agility gentile (tandem walk, side stepping, karaoke, camminata all'indietro); ENDURANCE: programma cyclette, inizio programma camminata",
          "DOSAGGIO FASE 3: stretching 1 volta/die; rinforzo 3-5 volte/sett 2-3 serie x 15-20 rip; cyclette almeno 10 min/die, progressione 20-30 min x 3 volte/sett",
          "─── FASE 4 — 12 SETTIMANE E OLTRE ───",
          "OBIETTIVI: migliorare la forza per massimizzare gli outcome funzionali; ritorno ad attività ricreative appropriate (golf, tennis doppio, ciclismo, hiking)",
          "PRECAUZIONI: no sport ad alto impatto e da contatto; no sollevamento pesante ripetuto",
          "ESERCIZI FASE 4 — ROM: continuare ROM e stretching quotidiano; RINFORZO: continuare tutto con aumento resistenza e riduzione ripetizioni; PROPRIOCEZIONE: continuare fase 3 aumentando difficoltà; ENDURANCE: camminata/cyclette/ellittica 30-45 min x 3 volte/sett; PROGRESSIONI FUNZIONALI: training sport/attività specifici",
          "DOSAGGIO FASE 4: ROM e flessibilità quotidianamente; rinforzo e propriocezione 3-5x/sett 2-3 serie x 10-15 rip; endurance 30-45 min x 3 volte/sett",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Spalla",
    color: "#5C3A8C",
    icon: "💪",
    title: "Lesioni della Cuffia dei Rotatori",
    source: "AAOS 2024 / SECEC",
    tags: ["cuffia rotatori", "spalla", "tendine"],
    summary: "Diagnosi e trattamento delle lesioni della cuffia dei rotatori, dal trattamento conservativo alla chirurgia artroscopica.",
    sections: [
      {
        title: "Classificazione delle Lesioni",
        content: [
          "Lesioni parziali: artro-surface (<50% spessore), burso-surface (>50% spessore richiedono riparazione)",
          "Lesioni complete piccole: < 1cm (alta possibilità di guarigione spontanea)",
          "Lesioni complete medie: 1-3cm",
          "Lesioni complete grandi: 3-5cm",
          "Lesioni massive: > 5cm o coinvolgimento ≥2 tendini",
        ],
      },
      {
        title: "Trattamento Conservativo (1° linea)",
        content: [
          "FANS per 4-6 settimane + protezione dal carico",
          "Fisioterapia: rinforzo muscoli periscapolari e rotatori",
          "Infiltrazione corticosteroidea subacromiale (max 3/anno, non ripetere se inefficace)",
          "PRP: dati insufficienti per raccomandazione routinaria",
          "Rivalutare con RMN se peggioramento clinico dopo 3 mesi di terapia conservativa",
        ],
      },
      {
        title: "Indicazioni alla Chirurgia",
        content: [
          "Fallimento trattamento conservativo dopo 3-6 mesi",
          "Lesione acuta post-traumatica in paziente giovane/attivo",
          "Lesione degenerativa sintomatica in paziente < 65 anni con buona qualità tendinea",
          "Progressione documentata della lesione alla RMN",
          "Lesioni parziali > 50% con dolore persistente",
        ],
      },
      {
        title: "Follow-up Post-chirurgico",
        content: [
          "Tutore in abduzione per 4-6 settimane (lesioni medie-grandi)",
          "Pendolazioni passive passive da settimana 1-2",
          "Rinforzo attivo-assistito da settimana 6",
          "Ritorno completo alle attività: 6-9 mesi (lesioni grandi)",
          "RMN di controllo a 6 mesi per verifica della guarigione",
        ],
      },
    ],
  },
  {
    id: 15,
    category: "Spalla",
    color: "#5C3A8C",
    icon: "💪",
    title: "Tendinopatia della Cuffia dei Rotatori — CPG 2025",
    source: "Desmeules et al. | JOSPT 2025;55(4):235-274 | doi:10.2519/jospt.2025.13182 | AOPT/APTA | MGH Large-to-Massive RC Tear Protocol",
    pdfUrl: "https://www.orthopt.org/uploads/content_files/files/Rotator_Cuff_CPG.pdf",
    pdfUrl2: "https://www.massgeneral.org/assets/mgh/pdf/orthopaedics/sports-medicine/physical-therapy/rehabilitation-protocol-for-rotator-cuff-tear-large-to-massive-tear.pdf",
    tags: ["spalla", "cuffia rotatori", "tendinopatia", "SAPS", "impingement", "CPG", "esercizio", "RCT"],
    summary: "Linea guida CPG 2025 evidence-based per diagnosi, cura medica non chirurgica e riabilitazione della tendinopatia della cuffia dei rotatori (RCT) negli adulti. Include gestione di RCT con o senza calcificazioni e lesioni parziali. 25 raccomandazioni basate su evidenza + 15 da consenso.",
    sections: [
      {
        title: "Valutazione e Diagnosi",
        content: [
          "ANAMNESI COMPLETA (Grado F): età, genere, dominanza, carichi lavorativi, sport, farmaci, comorbidità, fattori psicosociali, meccanismo lesione, trattamenti precedenti, sintomi attuali e obiettivi del paziente",
          "ESAME FISICO (Grado F): ispezione (deformità, atrofia, edema), ROM attivo/passivo, forza muscolare; screening rachide cervicale obbligatorio per escludere dolore riferito",
          "RED FLAGS (Grado F): screening obbligatorio per infezione, neoplasia, patologie cardiovascolari o sistemiche",
          "TEST SPECIALI (Grado B): Painful Arc Test — utile per confermare la diagnosi; Hawkins-Kennedy Test — utile per escluderla. Nessun singolo test sufficientemente accurato da solo",
          "MISURE OBIETTIVE (Grado A): ROM con goniometro, inclinometro o app smartphone validata; NO ROM scapolare (inaffidabile); forza con dinamometro manuale (handheld dynamometer)",
          "OUTCOME MEASURES (Grado A): SPADI (Shoulder Pain and Disability Index) o DASH — validati, affidabili, responsivi",
          "IMAGING (Grado F): NON indicata di routine in fase iniziale; ecografia preferita se indicata dopo 12 settimane di mancato miglioramento; RMN non raccomandata di routine; discutere pro/contro con il paziente",
          "RINVIO SPECIALISTICO (Grado F): pazienti con sintomi persistenti e gravi dopo 12 settimane → medico dello sport, fisiatra o ortopedico",
        ],
      },
      {
        title: "Terapia Farmacologica",
        content: [
          "PARACETAMOLO (Grado C): indicato per sollievo dolore a breve termine",
          "FANS (Grado B): efficaci per gestione dolore a breve termine — non come prima linea, ma supportati da evidenza moderata",
          "OPPIOIDI (Gradi F/C): NON come prima linea; possono essere considerati a breve termine in casi gravi dove altri trattamenti sono inefficaci o controindicati — richiede rivalutazione regolare del rischio",
          "INFILTRAZIONI CORTICOSTEROIDI (Gradi B/C): possono ridurre il dolore a breve termine, ma NON come prima linea; guidate da ecografia se eseguite",
          "LAVAGGIO CALCIFICAZIONI (barbotage) (Grado B): raccomandato per tendinopatia calcifica non responsiva ai trattamenti iniziali",
          "PRP e ACIDO IALURONICO (Gradi D/F): evidenza conflittuale per PRP; possono essere considerati in casi selezionati — non di routine",
        ],
      },
      {
        title: "Riabilitazione — Interventi Attivi (Prima Linea)",
        content: [
          "ESERCIZIO TERAPEUTICO (Grado A — cardine): rinforzo progressivo + esercizi di controllo motorio; individualizzare in base alla tolleranza al dolore e agli obiettivi del paziente",
          "EDUCAZIONE (Grado C): educare il paziente su natura della condizione, modificazione delle attività, pain neuroscience, prognosi e autogestione — adattare al livello di alfabetizzazione e al contesto psicosociale",
          "TERAPIA MANUALE (Grado B): può ridurre il dolore a breve termine se associata all'esercizio; tecniche di soft tissue e mobilizzazioni/manipolazioni articolari",
          "TAPING (Grado D): può essere usato come aggiunta per riduzione dolore a breve termine — evidenza conflittuale",
          "AGOPUNTURA (Grado C): può offrire benefici aggiuntivi a breve termine se associata alla riabilitazione attiva",
          "MODIFICHE ERGONOMICHE (Grado C): possono aiutare a ridurre il carico lavorativo sulla spalla",
        ],
      },
      {
        title: "Interventi Fisici e Strumentali",
        content: [
          "SHOCKWAVE (ESWT) (Grado C): utile nella tendinopatia calcifica; NON raccomandato nella RCT non calcifica",
          "LASER TERAPIA (Grado C): può ridurre il dolore nella tendinopatia calcifica",
          "ULTRASUONI TERAPEUTICI (Gradi C/B): NON raccomandati per RCT calcifica né non calcifica — assenza di beneficio dimostrato",
          "IMMOBILIZZAZIONE STRETTA: NON raccomandata",
          "MOBILIZZAZIONE PASSIVA come unico trattamento: NON raccomandata",
          "NOVITÀ 2025 rispetto al 2022: integrazione SR fino a ottobre 2023; nuove raccomandazioni per ritorno allo sport; grading GRADE più chiaro; linguaggio patient-centered e shared decision-making",
        ],
      },
      {
        title: "Ritorno alla Funzione e allo Sport",
        content: [
          "CRITERI DI RITORNO (Grado F): basati sulla capacità dell'atleta di tollerare il carico sulla spalla e sulla cuffia — non su criteri temporali fissi",
          "OUTCOME MEASURES (Grado F): usare strumenti validati per valutare dolore, disabilità, prontezza al ritorno e performance funzionale — test sport-specifici e checklist di ritorno allo sport",
          "PROGRESSIONE DEL CARICO: dal lavoro isometrico indolore → concentrico/eccentrico → attività funzionale → sport-specifico",
          "FATTORI PROGNOSTICI (Grado B): identificare fattori personali, clinici e lavorativi che influenzano la prognosi per guidare piani di cura individualizzati",
          "Pazienti che non progrediscono adeguatamente devono essere indirizzati a uno specialista muscoloscheletrico",
        ],
      },
      {
        title: "Protocollo Post-Op Riparazione Cuffia Rotatori — Lesioni Grandi/Massive (MGH 2025)",
        content: [
          "FONTE: MGH Sports Medicine Physical Therapy — Rehabilitation Protocol for Rotator Cuff Repair: Large to Massive Tears (massgeneral.org). Protocollo a 6 fasi. ⚠️ Per lesioni piccole-medie, usare il protocollo Small-to-Medium Tear. Fattori che influenzano il decorso: dimensione della lesione, qualità del tessuto, numero di tendini coinvolti, età, BMI, diabete.",
          "─── FASE I — IMMOBILIZZAZIONE (0-6 Settimane) ───",
          "OBIETTIVI: proteggere la riparazione e promuovere la guarigione tendine-osso; controllo dolore e infiammazione; 6 settimane di immobilizzazione con tutore in abduzione 30-45° raccomandate per lesioni grandi",
          "TUTORE: cuscino di abduzione 30-45°; indossare di notte durante il sonno",
          "PRECAUZIONI FASE I: NO movimento attivo della spalla; NO carico sull'arto operato; NO ROM passivo o attivo della spalla; NO movimenti sopra la testa o dietro la schiena; NO spingere o tirare",
          "INTERVENTI FASE I: AROM mano-polso-gomito (no ROM attivo gomito per 4 settimane se tenodesi del bicipite); esercizi di mobilità scapolare con tutore",
          "CRITERI PROGRESSIONE: guarigione appropriata; aderenza alle precauzioni; dolore e infiammazione controllati",
          "─── FASE II — PROM PASSIVO (6-10 Settimane) ───",
          "OBIETTIVI: minimizzare la rigidità proteggendo la riparazione; iniziare PROM con il fisioterapista a 6 settimane; crioterapia e TENS per controllo del dolore",
          "PRECAUZIONI FASE II: no AROM nonostante dolore minimo; evitare PROM aggressivo e doloroso; no rotazione interna (no mano dietro la schiena); no carico sull'arto",
          "ESERCIZI FASE II — PROM (con FT): elevazione passiva supina 0-100°; rotazione esterna passiva seduto 0-30°; table slide (no shrug scapolare); pendolari (NO attivare i muscoli della spalla); RINFORZO: retrazione scapolare, elevazione, depressione scapolare (senza tutore)",
          "CRITERI PROGRESSIONE: elevazione passiva ≥100-120°; rotazione esterna passiva ≥25-45° (braccio neutro); abduzione passiva ≥90°; dolore controllato; aderenza all'HEP",
          "─── FASE III — AAROM e AROM (10-18 Settimane) ───",
          "OBIETTIVI: avviare AAROM (10-14 sett) poi AROM (14-18 sett); isometria submassimale da 14-18 sett; normalizzare ROM e ADL",
          "PRECAUZIONI FASE III: no sollevamento o attività dolorose; no appoggio del peso su mani/braccia; no movimenti bruschi o a scatto; no carico eccessivo sul tendine in guarigione",
          "ESERCIZI FASE III — AAROM: elevazione supina con leva corta → cane AAROM flessione/abduzione/ER supina (10 sett) → beach chair 45° (11 sett) → posizione eretta (12 sett); assisted ER con braccio su cuscino; wall slide e wall walk (da 12 sett); AROM: ER in piedi (12 sett), sidelying ER (14 sett), forward reach attivo e elevazione (14 sett); ISOMETRIA SUBMASSIMALE: flessione, estensione, ER/IR con braccio al fianco (solo sforzo submassimale); rows in piedi → bent over rows",
          "TERAPIA MANUALE (da sett. 10): mobilizzazioni grado 1-2, mobilizzazioni toraciche, massaggio dei tessuti molli per dolore e guarding muscolare",
          "CRITERI PROGRESSIONE: elevazione passiva >140°; elevazione attiva >120° senza compensazioni; ER normale a 0° abduzione; posizionamento scapolare appropriato; ADL leggere sotto il livello della spalla senza dolore",
          "─── FASE IV — RINFORZO INIZIALE (18-22 Settimane) ───",
          "OBIETTIVI: progressione graduale resistenza; ROM completo; ripristino forza, potenza ed endurance; ritorno alle ADL e attività lavorative modificate",
          "PRECAUZIONI FASE IV: no sollevamento >2.5 kg; no movimenti bruschi o a scatto; no abduzione a braccio teso (long lever) — troppo carico sul tendine; no posizione 'empty can' a nessuna fase (rischio impingement e stress sulla riparazione)",
          "STRETCHING FASE IV: pec stretch (60°/90° nella porta); stretching rotazione interna con asciugamano; doorway ER stretch; crossbody stretch; sleeper stretch (non raccomandato per lanciatori)",
          "RINFORZO FASE IV: prone W/Y/T/I; estensione spalla a braccio teso; protrazione scapolare supina; rows; ER/IR resistita, sidelying ER; forward punch con elastico; bicep curl, tricep extension; stabilizzazione ritmica in quadrupedia (perturbazione, ball on wall)",
          "TERAPIA MANUALE FASE IV: mobilizzazioni grado 3-4 se indicato; tecniche devono essere indolori",
          "CRITERI PROGRESSIONE: ROM completo con meccanica normale; nessun dolore con ADL e rinforzo",
          "─── FASE V — RINFORZO AVANZATO (22-26 Settimane) ───",
          "OBIETTIVI: ripristinare forza massimale, potenza ed endurance per attività ad alto livello; mantenere ROM indolore",
          "PRECAUZIONI FASE V: no sollevamento >5 kg; no sollevamento overhead; no spinte o sollevamenti bruschi; no progressione in attività dolorose",
          "INTERVENTI: stretching quotidiano; rinforzo 3 volte/sett con 5-10 min cardio warmup; progressione verso upper extremity strengthening generale",
          "─── FASE VI — RITORNO ALLO SPORT (26-30 Settimane) ───",
          "OBIETTIVI: mantenere ROM e stretching; forza spalla 85-90% del lato controlaterale (dinamometro handheld); forza massimale testabile da 10-12 mesi post-op; ritorno sicuro al lavoro, attività ricreative e sportive",
          "PRECAUZIONI FASE VI: no sollevamenti forzati o pesanti; no movimenti bruschi; no progressione in attività dolorose",
          "RINFORZO FASE VI — Cuffia: ER/IR isometrici, sidelying ER, standing ER/IR con elastico, abduzione progressiva; PERISCAPOLARE: prone T/Y/W, push-up plus, wall push-up, resistance band Ws, dynamic hug; PNF D1/D2 diagonal lifts; field goals; quadruped alternating isometrics",
          "CRITERI DIMISSIONE: ROM completo e indolore senza meccanismi compensatori; forza spalla 4+/5; cinematica scapolotoracica normalizzata; ADL e rinforzo senza dolore; decisione ritorno allo sport individualizzata e discussa col chirurgo",
        ],
      },
      {
        title: "Continuum Riabilitativo Post-Op in 4 Fasi \u2014 Edwards et al. 2017 (Tabella 4)",
        content: [
          "FONTE: Edwards PK, Ebert JR, Littlewood C, Ackland T, Wang A. A systematic review of electromyography studies in normal shoulders to inform postoperative rehabilitation following rotator cuff repair. J Orthop Sports Phys Ther. 2017;47(12):931-944. doi:10.2519/jospt.2017.7271",
          "IMPIANTO: gli esercizi sono raggruppati per livello di attivit\u00E0 EMG di sovraspinato e infraspinato, in fasi allineate alla guarigione tissutale e alla resistenza del sito di riparazione. Sono previsti DUE PERCORSI \u2014 precoce e ritardato \u2014 secondo l'impostazione di Thigpen et al., che adattano la velocit\u00E0 di progressione a et\u00E0 del paziente, dimensione della lesione, qualit\u00E0 del tessuto e integrit\u00E0 della riparazione.",
          "\u26A0\uFE0F BIOLOGIA DELLA GUARIGIONE: le fibre che legano il tendine all'osso non sono presenti in numero apprezzabile tra la 6\u00AA e la 12\u00AA settimana. La resistenza della riparazione \u00E8 stimata al 19-30% del normale a 6 settimane e al 29-50% a 12 settimane; la quasi completa maturazione si raggiunge intorno alla 15\u00AA settimana, quando il sito pu\u00F2 tollerare carichi maggiori.",
          "\u2500\u2500\u2500 FASE 1 \u2014 PROTEZIONE E MOVIMENTO PRECOCE (attivit\u00E0 EMG \u226415% MVIC) \u2500\u2500\u2500",
          "TEMPISTICA: percorso precoce settimane 2-6 | percorso ritardato settimane 5-8.",
          "ROM PASSIVO IN FLESSIONE: forward bow, flessione supina assistita dal terapista, flessione supina auto-assistita, flessione in decubito laterale, towel slide, washcloth press-up.",
          "ROM PASSIVO IN ROTAZIONE (nessuna rotazione interna; rotazione esterna fino a 30\u00B0): rotazione esterna assistita al muro, rotazione esterna supina con bastone, rotazione esterna con bastone in posizione eretta.",
          "\u2500\u2500\u2500 FASE 2 \u2014 DA ATTIVO-ASSISTITO AD ATTIVO (attivit\u00E0 EMG \u226420% MVIC) \u2500\u2500\u2500",
          "TEMPISTICA: percorso precoce settimane 7-9 | percorso ritardato settimane 9-12.",
          "ROM ATTIVO-ASSISTITO IN FLESSIONE: ball roll, flessione con bastone in posizione eretta, wall walk/slide supportato con progressione alla versione non supportata, flessione assistita con carrucola.",
          "ROM ATTIVO IN FLESSIONE: press-up attivo supino, press-up attivo reclinato.",
          "ROM ATTIVO-ASSISTITO IN ROTAZIONE: proseguire gli esercizi di rotazione esterna della fase precedente; iniziare rotazione interna auto-assistita e con bastone.",
          "\u2500\u2500\u2500 FASE 3 \u2014 RINFORZO (attivit\u00E0 EMG 21-50% MVIC) \u2500\u2500\u2500",
          "TEMPISTICA: percorso precoce settimana 10 | percorso ritardato settimana 13.",
          "ROM ATTIVO IN FLESSIONE: progredire a press-up in piedi e flessione attiva (da leva corta a leva lunga), quindi flessione attiva resistita.",
          "RINFORZO IN ROTAZIONE: progredire da seduto a in piedi (in leggera abduzione fino a 45\u00B0) e infine in decubito laterale, con o senza cuscino.",
          "CATENA POSTERIORE: seated row, con progressione a standing row/pull e a forward e scapular punches.",
          "\u2500\u2500\u2500 FASE 4 \u2014 RINFORZO TARDIVO (attivit\u00E0 EMG \u226550% MVIC) \u2500\u2500\u2500",
          "TEMPISTICA: settimana 20 per entrambi i percorsi.",
          "ESERCIZI: flessione e abduzione attive; abduzione orizzontale prona a 90\u00B0 e 100\u00B0; rinforzo in rotazione dalla rotazione esterna in piedi a 90\u00B0 di abduzione alla rotazione esterna prona a 90\u00B0 di abduzione; push-up e push-up plus, dynamic hug.",
          "\u2500\u2500\u2500 PRINCIPI DI PROGRESSIONE \u2500\u2500\u2500",
          "LEVA: procedere da attivit\u00E0 a braccio corto verso attivit\u00E0 a braccio lungo.",
          "POSTURA E GRAVIT\u00C0: iniziare da supino, passare all'inclinato e infine alla posizione eretta, modulando cos\u00EC l'effetto della gravit\u00E0 e il carico sulla gleno-omerale.",
          "ROTAZIONE ESTERNA ATTIVA: progredire da seduto a in piedi, poi decubito laterale, poi prono a 90\u00B0 di abduzione, infine in piedi a 90\u00B0 di abduzione.",
          "\u26A0\uFE0F ROTAZIONE ESTERNA PASSIVA: in fase acuta conviene restare sotto i 30\u00B0. Uno studio su cadavere ha rilevato che la rotazione esterna aumenta la tensione nella regione anteriore del tendine sovraspinato e rilassa quella posteriore, favorendo la formazione di gap anteriore, con picco di strain proprio a 30\u00B0. Un altro studio suggerisce che fino a 60\u00B0, con braccio elevato a 30\u00B0 nel piano scapolare o coronale, possa essere eseguita senza tensione eccessiva.",
          "\u26A0\uFE0F ROTAZIONE INTERNA: quella passiva genera attivazione bassa, ma insieme a quella attiva \u00E8 stata indicata come fonte di tensione eccessiva sulla riparazione, e va evitata nelle fasi precoci.",
          "\u26A0\uFE0F LESIONI GRANDI E MASSIVE: negli studi che avviano il movimento precocemente il rischio di fallimento strutturale risulta quasi doppio. In questi casi la progressione e l'introduzione del carico devono essere conservative."
        ]
      },
      {
        title: "Attivit\u00E0 EMG per Esercizio \u2014 %MVIC per Muscolo (Edwards et al. 2017)",
        content: [
          "METODO: 2159 studi individuati, 20 di buona qualit\u00E0 inclusi, 43 esercizi valutati tra ROM passivo, attivo-assistito e rinforzo. Valori riportati come medie aggregate, con il range tra studi dove disponibile. Esclusi gli studi con et\u00E0 media o limite superiore oltre i 50 anni, perch\u00E9 le lesioni asintomatiche di cuffia aumentano con l'et\u00E0.",
          "SOGLIE: bassa 0-15% MVIC | bassa-moderata 16-20% | moderata 21-40% | alta 41-60% | molto alta oltre 60%. La soglia del 15% deriva dallo studio biomeccanico di Long et al., che ha indicato attivazioni superiori come potenzialmente eccessive per una cuffia appena riparata.",
          "\u2500\u2500\u2500 SOVRASPINATO \u2014 ATTIVIT\u00C0 BASSA (\u226415% MVIC): 20 esercizi \u2500\u2500\u2500",
          "ER supina con bastone 3 | ER eretta con bastone 3 | Washcloth press-up mani vicine 3 | Washcloth press-up mani distanti 4 | Press-up supino 4 | ER assistita al muro 4 | Protrazione scapolare su palla 5 | Forward bow 5 | Elevazione supina assistita dal terapista 5 | Estensione prona a 0\u00B0 abd 6 | Elevazione in decubito laterale 7 | IR in piedi a 0\u00B0 abd 7 (7-10) | Incline press-up 8 | Towel slide sagittale 8 (4-12) | IR eretta assistita 9 | Elevazione supina auto-assistita 11 (1-17) | Pendolo 11 | Towel slide mediale 12 | Towel slide scapolare 13 (7-13) | Wall slide verticale supportato 13",
          "\u2500\u2500\u2500 SOVRASPINATO \u2014 ATTIVIT\u00C0 BASSA-MODERATA E MODERATA (16-40%) \u2500\u2500\u2500",
          "Ball roll 16 | Elevazione eretta con bastone 16 (11-19) | Wall slide verticale non supportato 17 | Elevazione con carrucola 17 (3-19) | Wall slide diagonale supportato 18 | Flessione attiva a gomito flesso 20 | Wall walk/slide 22 (21-22) | Wall slide diagonale non supportato 22 | Estensione resistita in piedi 24 | ER supina assistita 27 | Press-up in piedi 29 | Flessione/elevazione attiva a gomito esteso 29 | ER in piedi nel piano scapolare 32 | IR nel piano scapolare 33 | Seated row/pull 33 | ER in piedi 0\u00B0 abd senza asciugamano 35 (20-41) | Flessione/elevazione resistita in piedi 35 | Flessione prona a 180\u00B0 abd 38",
          "\u2500\u2500\u2500 SOVRASPINATO \u2014 ATTIVIT\u00C0 ALTA E MOLTO ALTA (oltre 40%) \u2500\u2500\u2500",
          "IR in piedi a 90\u00B0 abd 41 | ER in piedi 0\u00B0 abd con asciugamano 41 | High row 42 | Low row 46 | Standing row/pull 46 | Forward punch 46 | ER in decubito laterale 51 | ER in piedi a 90\u00B0 abd 54 (39-57) | Diagonale 54 | Dynamic hug 62 | Full-can abduzione 73 (62-90) | ER prona a 90\u00B0 74 (68-91) | Empty-can abduzione 75 (63-92) | Abduzione orizzontale prona 90\u00B0 77 (67-88) | Abduzione orizzontale prona 100\u00B0 82 | Push-up plus 99",
          "\u2500\u2500\u2500 INFRASPINATO \u2014 ATTIVIT\u00C0 BASSA (\u226415% MVIC): 25 esercizi \u2500\u2500\u2500",
          "Forward bow 2 | Towel slide sagittale 4 (1-8) | Protrazione scapolare su palla 4 | Elevazione supina assistita dal terapista 5 | Elevazione supina auto-assistita 6 (4-8) | Estensione prona a 0\u00B0 abd 6 | Washcloth press-up mani vicine 7 | Towel slide mediale 7 | Towel slide scapolare 7 (4-9) | ER eretta con bastone 9 | Pendolo 9 | ER supina assistita 9 | Press-up supino 9 | Incline press-up 9 | Wall slide verticale supportato 9 | Wall slide verticale non supportato 10 | Wall slide diagonale supportato 10 | Elevazione in decubito laterale 10 | Elevazione con carrucola 11 (3-20) | Washcloth press-up mani distanti 11 | ER supina con bastone 12 | ER seduta a 0\u00B0 abd 13 | Press-up in piedi 14 | Wall slide diagonale non supportato 15 | Wall walk/slide 15 (9-19)",
          "\u2500\u2500\u2500 INFRASPINATO \u2014 ATTIVIT\u00C0 BASSA-MODERATA E MODERATA (16-40%) \u2500\u2500\u2500",
          "Elevazione eretta con bastone 16 (11-27) | ER seduta a 90\u00B0 abd 17 | Ball roll 18 | ER assistita al muro 18 | IR in piedi 0\u00B0 abd 20 (3-32) | IR auto-assistita 22 | IR in piedi 90\u00B0 abd 24 | Flessione/elevazione attiva 26 (21-29) | Low row 29 | High row 31 | Flessione attiva a gomito flesso 35 | ER in piedi 0\u00B0 abd con asciugamano 39 (39-50) | ER in piedi a 45\u00B0 abd 39",
          "\u2500\u2500\u2500 INFRASPINATO \u2014 ATTIVIT\u00C0 ALTA E MOLTO ALTA (oltre 40%) \u2500\u2500\u2500",
          "Estensione resistita in piedi 41 | ER decubito laterale con asciugamano 42 | Forward punch 42 (28-50) | ER decubito laterale senza asciugamano 45 (18-62) | Flessione prona a 180\u00B0 abd 45 | Push-up 49 | ER in piedi 0\u00B0 abd senza asciugamano 50 (40-77) | ER in piedi a 90\u00B0 abd 50 (50-51) | Standing row/pull 51 (28-60) | ER prona a 90\u00B0 54 (30-135) | Flessione resistita in piedi 55 | Abduzione orizzontale prona 90\u00B0 64 (39-122) | Empty-can abduzione 75 | Full-can abduzione 82 | Push-up plus 104 | Pendant ER 125",
          "\u2500\u2500\u2500 SOTTOSCAPOLARE (valutato in soli 6 studi) \u2500\u2500\u2500",
          "Entro la soglia del 15%: Elevazione con carrucola 8 | Table slide 10 | Flessione prona 12 | Seated row 14 | ER assistita al muro 15",
          "Oltre la soglia: Elevazione eretta con bastone 24 | ER eretta con bastone 27 | Forward punch 35 (8-69) | IR a 0\u00B0 abd 40 (13-74) | IR a 45\u00B0 abd 53 | ER a 0\u00B0 abd 57 | ER a 90\u00B0 abd 57 | Dynamic hug 58 | Diagonale 60 | IR a 90\u00B0 abd 65 | Low row 69 | High row 74 | Standing row 81 | Estensione resistita 97 | Elevazione/flessione attiva resistita 99",
          "\u26A0\uFE0F PUSH-UP PLUS: attivazione molto alta nella porzione superiore del sottoscapolare (121% MVIC) e alta in quella inferiore (46%). Porzione superiore e inferiore hanno funzioni distinte e possono richiedere esercizi differenti, soprattutto se riparate.",
          "\u2500\u2500\u2500 PICCOLO ROTONDO (15 esercizi, tutti di rinforzo) \u2500\u2500\u2500",
          "ER in piedi 0\u00B0 con asciugamano 29 (17-46) | ER in piedi piano scapolare 39 (31-55) | Abduzione orizzontale prona 100\u00B0 41 (39-44) | ER prona a 90\u00B0 45 (43-48) | ER in piedi 0\u00B0 senza asciugamano 46 (17-84) | Abduzione orizzontale prona 90\u00B0 47 | ER decubito laterale 56 (33-80) | IR a 90\u00B0 abd 63 | ER in piedi a 90\u00B0 69 (39-89) | Forward punch 69 | IR a 0\u00B0 abd 93 | Middle row 98 | Low row 101 | High row 109 | Flessione resistita 112",
          "\u2500\u2500\u2500 OSSERVAZIONI CLINICHE \u2500\u2500\u2500",
          "ROTAZIONE ESTERNA PASSIVA AL MURO: attiva il sovraspinato meno della rotazione esterna supina eseguita con bastone o dal terapista. Attenzione per\u00F2: nei tre esercizi di ER passiva supina l'attivit\u00E0 risulta bassa sul sovraspinato ma pi\u00F9 elevata sull'infraspinato e ancor pi\u00F9 sul sottoscapolare, quindi vanno usati con cautela nelle lesioni che coinvolgono questi due muscoli.",
          "PENDOLO: attivit\u00E0 bassa su sovraspinato e infraspinato, quindi appropriato in fase precoce. Ma i pendoli eseguiti male, specie quelli ampi, generano pi\u00F9 attivit\u00E0 di quelli piccoli e corretti, e nelle spalle patologiche l'attivazione risulta ancora maggiore. Trattandosi tipicamente di esercizio domiciliare non supervisionato, altri esercizi possono risultare pi\u00F9 adatti in assenza di controllo diretto.",
          "PRESS-UP SUPINO E INCLINATO: restano sotto il 15% MVIC per il sovraspinato e permettono una progressione graduale prima del press-up in piedi, che genera invece attivit\u00E0 moderata.",
          "ESERCIZI CHE SCARICANO LA SPALLA: table slide, ball roll e wall slide verticale supportato producono attivit\u00E0 bassa o bassa-moderata sia sul sovraspinato sia sull'infraspinato, e servono come ponte verso press-up, flessione ed elevazione attivi.",
          "BASTONE E CARRUCOLA: gli esercizi attivo-assistiti che usano bastone o carrucola per elevare l'arto operato tendono a superare il 15% MVIC, il che rende discutibile il loro impiego molto precoce.",
          "ROTAZIONE ESTERNA ATTIVA: l'attivit\u00E0 va da moderata ad alta nel sovraspinato (31-69% MVIC), nell'infraspinato (13-50%) e nel piccolo rotondo (29-69%). Va progredita dalla posizione seduta a quella eretta, poi decubito laterale, prono a 90\u00B0 di abduzione e infine in piedi a 90\u00B0 di abduzione omerale.",
          "\u2500\u2500\u2500 LIMITI \u2500\u2500\u2500",
          "I dati derivano da soggetti sani sotto i 40 anni: chi ha una spalla dolorosa o operata attiva la muscolatura diversamente e fatica a restare passivo. In uno studio di confronto, i pazienti con patologia di spalla rilassavano sovraspinato e trapezio superiore con maggiore difficolt\u00E0 rispetto ai controlli sani.",
          "Pochi studi hanno valutato sottoscapolare e piccolo rotondo: serve cautela particolare nell'applicare queste indicazioni alle riparazioni che li coinvolgono.",
          "Non esiste una relazione diretta dimostrata tra attivit\u00E0 EMG dinamica e tensione nelle strutture muscolo-tendinee: le correlazioni sono solo moderate. Piano di movimento, carico ciclico, peso e lunghezza dell'arto influenzano anch'essi la tensione sulla riparazione.",
          "CONCLUSIONE DEGLI AUTORI: questi risultati vanno usati come guida pragmatica alla selezione degli esercizi lungo il percorso post-operatorio, non come confine assoluto tra sicuro e non sicuro. \u00C8 essenziale considerare le caratteristiche individuali e i fattori di rischio che possono compromettere la guarigione tendinea e aumentare il rischio di ri-rottura."
        ]
      },
    ],
  },
  {
    id: 16,
    category: "Spalla",
    color: "#5C3A8C",
    icon: "🦴",
    title: "Sindrome da Dolore Subacromiale (SAPS) — Linea Guida Olandese",
    source: "Diercks et al. | Acta Orthop 2014;85(3):314-322 | PMC4062801 | Dutch Orthopaedic Association | AAOS/ASES Conditioning Program",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4062801/pdf/ORT-85-314.pdf",
    pdfUrl2: "https://www.orthoinfo.org/recovery/rotator-cuff-and-shoulder-conditioning-program/",
    tags: ["spalla", "SAPS", "impingement subacromiale", "tendinopatia", "calcificazioni", "esercizio eccentrico", "chirurgia"],
    summary: "Linea guida multidisciplinare olandese per la diagnosi e il trattamento della Sindrome da Dolore Subacromiale (SAPS — Subacromial Pain Syndrome). Supera il concetto di 'impingement' con un modello multifattoriale basato sulla degenerazione tendinea. Include algoritmi diagnostici, test clinici, imaging, trattamento conservativo e indicazioni chirurgiche.",
    sections: [
      {
        title: "Definizione e Diagnosi Clinica",
        content: [
          "SAPS: dolore non traumatico, solitamente monolaterale, localizzato intorno all'acromion, spesso aggravato durante o dopo elevazione del braccio; include borsiti, tendinosi calcarea, tendinopatia sovraspinato, lesioni parziali cuffia, tendinite bicipite e degenerazione tendinea",
          "Il termine 'SAPS' è preferibile a 'impingement syndrome' — il meccanismo puramente anatomico da acromion è insufficiente a spiegare la patologia; centrale è la degenerazione tendinea",
          "DIAGNOSI: combinazione di test clinici obbligatoria — nessun singolo test sufficientemente accurato",
          "BATTERIA DIAGNOSTICA RACCOMANDATA: Hawkins-Kennedy test + Painful Arc test + test di forza dell'infraspinato — combinazione aumenta la probabilità post-test di SAPS",
          "PER ROTTURA CUFFIA: drop-arm test + test di forza infraspinato e sovraspinato",
          "FATTORI PROGNOSTICI NEGATIVI (Livello 1): durata sintomi >3 mesi, età 45-54 anni, fattori psicosociali (per cronico >3 mesi)",
          "OUTCOME MEASURES: Shoulder Disability Questionnaire (SDQ-NL), DASH, Simple Shoulder Test, Shoulder Rating Questionnaire",
        ],
      },
      {
        title: "Imaging",
        content: [
          "IMAGING: non indicata di routine nelle prime 6 settimane; indicata dopo 6 settimane di sintomi persistenti",
          "ECOGRAFIA (prima scelta): sensibilità e specificità paragonabili a RMN per lesioni full-thickness; indicata per tendinosi, borsite, rottura tendine bicipite, calcificazioni — richiede tecnica standardizzata e trasduttori 7.5-20 MHz",
          "RMN: indicata quando ecografia non disponibile o inconclusiva; obbligatoria se si valuta riparazione chirurgica (dimensioni, retrazione, infiltrazione adiposa muscoli)",
          "RMN ARTROGRA: considerare per sospette lesioni parziali (PASTA) o intra-articolari — alta sensibilità/specificità; protocollo ABER (abduzione-rotazione esterna) raccomandato",
          "RADIOGRAFIA convenzionale: complementare all'ecografia per escludere osteoartrite, anomalie ossee, calcificazioni",
          "La morfologia acromiale (tipo III) non è significativamente associata a lesioni della cuffia nei pazienti >50 anni",
        ],
      },
      {
        title: "Trattamento Conservativo",
        content: [
          "ALGORITMO: riposo relativo in fase acuta → FANS per max 2 settimane → espansione graduale delle attività → esercizio terapeutico",
          "ESERCIZIO (Livelli 1-2): più efficace del non trattamento; esercizi specifici su cuffia e stabilizzatori scapolari superiori all'esercizio generico; esercizio domiciliare equivalente alla fisioterapia supervisionata",
          "ESERCIZIO: bassa intensità, alta frequenza, entro soglia del dolore; combinare training eccentrico, stabilizzazione scapolare, rilassamento e postura corretta",
          "TRATTAMENTO TRIGGER POINT MIOFASCIALI (incluso stretching): può supportare l'esercizio terapeutico (Livello 2)",
          "MASSAGGIO (soft tissue): più efficace del placebo per riduzione dolore e funzione (Livello 2)",
          "INFILTRAZIONI CORTICOSTEROIDI: efficaci nelle prime 8 settimane vs placebo, fisioterapia o non trattamento; non raccomandati come unica terapia a lungo termine; guidate da ecografia se possibile",
          "FANS orali: più efficaci del placebo nelle prime 1-2 settimane (Livello 3)",
          "LASER (Livello 3): più efficace del placebo e degli ultrasuoni per riduzione dolore a 2-4 settimane",
          "NON RACCOMANDATI: ultrasuoni terapeutici (non superiori al placebo); elettrostimolazione (non superiore al placebo); acupuntura (non superiore a placebo ed esercizio)",
          "ESWT ad alta energia (Livello 1): più efficace di ESWT a bassa energia o placebo SOLO per tendinosi calcarea; NON indicato in SAPS senza calcificazioni o in fase acuta",
          "NON RACCOMANDATI: immobilizzazione stretta; mobilizzazione passiva senza movimento attivo",
        ],
      },
      {
        title: "Trattamento Chirurgico e Calcificazioni",
        content: [
          "CHIRURGIA (Livello 2): nessuna evidenza convincente che la chirurgia sia superiore al trattamento conservativo per SAPS con cuffia integra",
          "INDICAZIONE: solo dopo esaurimento del trattamento conservativo; bursectomia ± acromioplastica (nessuna differenza clinica tra le due); approccio artroscopico vs aperto — stesso outcome finale, ma artroscopico riduce degenza e accelera il ritorno al lavoro",
          "RIPARAZIONE CUFFIA: indicazioni dipendono da dimensione della lesione, qualità muscolare, età e livello di attività del paziente; no differenza clinica tra singola e doppia fila per outcome finale; doppia fila riduce re-rotture nelle lesioni >1 cm",
          "BICIPITE: tenotomia vs tenodesi — stesso outcome clinico; tenotomia lascia più difetto estetico, tenodesi causa più dolore residuo",
          "TENDINOSI CALCAREA: ESWT, barbotage (needling ecoguidato) o rimozione chirurgica — nessuna preferenza chiara; chirurgia non raccomandata di prima linea",
          "CUFFIA ASINTOMATICA: nessuna indicazione chirurgica per lesioni asintomatiche della cuffia",
          "RIABILITAZIONE in centro specializzato: considerare per SAPS cronico e resistente al trattamento, con componente di comportamento pain-perpetuating",
        ],
      },
      {
        title: "Prevenzione e Fattori di Rischio Occupazionali",
        content: [
          "FATTORI DI RISCHIO LAVORATIVI (Livello 1): movimenti ripetitivi spalla/mano-polso, lavoro con forza prolungata arti superiori, vibrazioni mano-braccio, postura non ergonomica, alto carico psicosociale",
          "PREVENZIONE (Grado B): attività sportiva regolare (>3h/sett per almeno 10 mesi/anno) ha effetto protettivo su dolore cervico-scapolare e assenteismo",
          "APPROCCIO BIOPSICOSOCIALE: intervento precoce con focus sul ritorno al lavoro ha le migliori probabilità di successo",
          "INTERVENTO OCCUPAZIONALE: indicato se sintomi persistono >6 settimane — modificare compiti ripetitivi, ridurre forza sostenuta, correggere postura lavorativa",
          "PROGNOSI: durata sintomi >3 mesi = fattore prognostico negativo indipendente dalla terapia scelta; dopo 1 anno, 1/3 dei pazienti ancora con dolore e/o limitazione",
        ],
      },
      {
        title: "Programma di Condizionamento Spalla/Cuffia (AAOS / OrthoInfo — ASES)",
        content: [
          "FONTE: OrthoInfo AAOS — Rotator Cuff and Shoulder Conditioning Program (orthoinfo.org), revisionato da American Shoulder and Elbow Surgeons (ASES). Durata: 4-6 settimane; mantenimento: 2-3 volte/sett a lungo termine.",
          "MUSCOLI TARGET: deltoid (anteriore/posteriore/laterale), trapezio (superiore/medio), romboidi, teres minor, sovraspinato, infraspinato, sottoscapolare, bicipite, tricipite.",
          "WARM-UP: 5-10 min attività a basso impatto (camminata o cyclette) prima di ogni sessione; stretching prima e dopo il rinforzo; no dolore durante gli esercizi.",
          "─── STRETCHING (5-6 giorni/sett) ───",
          "1. PENDOLO: appoggio su tavolo, braccio libero che oscilla avanti/indietro, lateralmente e in cerchio — 2 serie x 10 rip — target: deltoid, sovraspinato, infraspinato, sottoscapolare",
          "2. CROSSOVER ARM STRETCH: tirare il braccio attraverso il petto tenendo il braccio superiore, hold 30 sec — 4 rip per lato — target: deltoid posteriore",
          "3. ROTAZIONE INTERNA PASSIVA (con stick): stick dietro la schiena, tirare orizzontalmente fino a sentire la tensione senza dolore, hold 30 sec — 4 rip per lato — target: sovraspinato (anteriore spalla)",
          "4. ROTAZIONE ESTERNA PASSIVA (con stick): stick tenuto davanti, spingere orizzontalmente, gomito contro il fianco, hold 30 sec — 4 rip per lato — target: infraspinato, teres minor (posteriore spalla)",
          "5. SLEEPER STRETCH: decubito sul fianco, braccio affetto sotto, gomito flesso; usare il braccio sano per spingere il polso verso il basso fino a sentire tensione posteriore, hold 30 sec — 4 rip x 3 volte/die, quotidianamente — target: infraspinato, teres minor",
          "─── RINFORZO CON ELASTICO (3 giorni/sett) ───",
          "6. STANDING ROW: elastico a maniglia fissa, gomito piegato al fianco, tirare il gomito indietro stringendo le scapole — 3 serie x 8 rip (progressione a 3x12) — target: trapezio medio/inferiore",
          "7. ROTAZIONE ESTERNA CON BRACCIO ABDOTTO 90°: elastico, gomito a 90° e all'altezza spalla, alzare la mano fino all'allineamento con la testa — 3 serie x 8 rip — target: infraspinato, teres minor",
          "8. ROTAZIONE INTERNA (IN PIEDI): elastico, gomito al fianco, portare il braccio attraverso il corpo — 3 serie x 8 rip — target: pettorale, sottoscapolare",
          "9. ROTAZIONE ESTERNA (IN PIEDI): elastico, gomito al fianco, ruotare esternamente — 3 serie x 8 rip — target: infraspinato, teres minor, deltoid posteriore",
          "─── RINFORZO CON PESI (3 giorni/sett, salvo dove indicato) ───",
          "10. ELBOW FLEXION (curl bicipite): braccio al fianco, sollevare il peso verso la spalla, hold 2 sec — 3 serie x 8 rip (max 5-7 kg) — target: bicipite",
          "11. ELBOW EXTENSION (tricipite overhead): gomito flesso con peso dietro la testa, supportare il braccio col lato opposto, distendere il gomito — 3 serie x 8 rip (max 5 kg) — target: tricipite",
          "12. TRAPEZIUS STRENGTHENING (prone thumb-up raise): in appoggio su panca, alzare il braccio con pollice verso l'alto fino all'altezza della spalla — 3-4 serie x 20 rip (max 3 kg) — 3-5 gg/sett — target: deltoid medio/posteriore, sovraspinato, trapezio medio",
          "─── RINFORZO SCAPOLARE (3 giorni/sett) ───",
          "13. SCAPULA SETTING: prono, braccia ai fianchi, avvicinare le scapole verso il basso, hold 10 sec — 10 rip — target: trapezio medio, serrato anteriore",
          "14. SCAPULAR RETRACTION/PROTRACTION (prono con peso): braccio penzolante dal lato del lettino, sollevare stringendo la scapola verso il lato opposto — 2 serie x 10 rip (max 2.5 kg) — target: trapezio medio, serrato",
          "15. BENT-OVER HORIZONTAL ABDUCTION: prono, braccio penzolante, alzare dritto fino all'altezza degli occhi — 3 serie x 8 rip (max 2.5 kg) — target: trapezio medio/inferiore, infraspinato, teres minor, deltoid posteriore",
          "─── RINFORZO IN DECUBITO (3-5 giorni/sett) ───",
          "16. IR/ER SUPINO: supino, braccio esteso dal fianco, gomito a 90° con dita verso l'alto; oscillare il braccio in arco completo IR→ER — 3-4 serie x 20 rip (max 5 kg) — target: muscoli anteriori e posteriori spalla",
          "17. ROTAZIONE ESTERNA LATERALE: decubito sul lato sano, gomito a 90° contro il fianco, alzare il peso verticalmente — 2 serie x 10 rip (max 5 kg) — target: infraspinato, teres minor, deltoid posteriore",
          "18. ROTAZIONE INTERNA LATERALE: decubito sul lato affetto, gomito a 90° contro il fianco, alzare il peso verticalmente — 2 serie x 10 rip (max 5 kg) — target: sottoscapolare, teres major",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Rachide",
    color: "#8B3A3A",
    icon: "🔗",
    title: "Lombalgia Acuta e Cronica",
    source: "NICE 2016 agg. 2023 / LG ISS",
    tags: ["rachide", "lombalgia", "dolore"],
    summary: "Approccio evidence-based alla lombalgia aspecifica, dalla fase acuta alla cronicizzazione.",
    sections: [
      {
        title: "Red Flags (Escludere Patologia Grave)",
        content: [
          "Traumi ad alta energia, specialmente in anziani o osteoporotici",
          "Febbre, perdita di peso inspiegabile, storia di neoplasia",
          "Sindrome della cauda equina: ritenzione urinaria, incontinenza sfinterica, anestesia perineale",
          "Deficit neurologici progressivi agli arti inferiori",
          "Dolore notturno severo a riposo non responsivo ad analgesici",
          "Uso di immunosoppressori o steroidi a lungo termine",
        ],
      },
      {
        title: "Lombalgia Acuta (< 6 settimane)",
        content: [
          "Continuare le attività quotidiane nei limiti del dolore (evitare riposo a letto)",
          "FANS per 7-14 giorni (prima linea): ibuprofene 400-600mg x3/die o diclofenac 75mg x2/die",
          "Miorilassanti (ciclobenzaprina, tizanidina) per spasmo muscolare acuto (max 2 settimane)",
          "NON prescrivere imaging routinario nei primi 6 settimane in assenza di red flags",
          "Rivalutazione a 4-6 settimane se non miglioramento",
        ],
      },
      {
        title: "Lombalgia Cronica (> 12 settimane)",
        content: [
          "Terapia cognitivo-comportamentale: efficace quanto FANS nella lombalgia cronica",
          "Programma di esercizio fisico supervisionato (aerobico + rinforzo core)",
          "FANS a basso dosaggio come supporto al programma riabilitativo",
          "Duloxetina 60mg/die: indicata in caso di componente neuropatica o depressione associata",
          "NON raccomandati: oppioidi come terapia cronica di prima linea, TENS, agopuntura",
          "Consulenza multidisciplinare del dolore se risposta assente a 6 mesi",
        ],
      },
      {
        title: "Indicazioni all'Imaging",
        content: [
          "RX lombare: in presenza di red flags o trauma",
          "RMN rachide: sospetta compressione midollare/radicolare, red flags neurologiche",
          "TC rachide: planning pre-chirurgico, valutazione stabilità ossea post-frattura",
          "NON indicata RMN routinaria per lombalgia aspecifica senza red flags",
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Traumatologia",
    color: "#7A6010",
    icon: "🩹",
    title: "Fratture del Radio Distale",
    source: "AAOS 2020 / FESSH | University Hospitals Sussex NHS — Virtual Hand Fracture Clinic 2021",
    pdfUrl: "https://www.uhsussex.nhs.uk/wp-content/uploads/2022/09/Distal-radius-fractures-virtual-hand-fracture-clinic.pdf",
    tags: ["frattura", "polso", "traumatologia"],
    summary: "Gestione delle fratture del radio distale nelle diverse categorie di pazienti.",
    sections: [
      {
        title: "Classificazione AO/OTA",
        content: [
          "Tipo A (extra-articolari): A1 ulna, A2 radio semplice, A3 radio comminuta",
          "Tipo B (articolari parziali): B1 sagittale, B2 dorsale (Barton), B3 volare (Barton inverso)",
          "Tipo C (articolari complete): C1 semplice, C2 metafisi comminuta, C3 comminuta",
          "Colles' fracture: extra-articolare con angolazione dorsale (più comune nell'anziano)",
          "Smith's fracture: extra-articolare con angolazione volare",
        ],
      },
      {
        title: "Criteri per Trattamento Chirurgico",
        content: [
          "Angolazione dorsale > 20° post-riduzione",
          "Accorciamento radiale > 3mm",
          "Incongruenza articolare > 2mm (step-off)",
          "Fratture instabili che non mantengono la riduzione nel gesso",
          "Paziente giovane/attivo con qualsiasi frattura spostata",
        ],
      },
      {
        title: "Trattamento Conservativo",
        content: [
          "Riduzione chiusa in anestesia locale (ematoma block) o sedazione",
          "Immobilizzazione in apparecchio gessato brachiopalmare per 5-6 settimane",
          "Controllo RX a 1 settimana per verifica mantenimento della riduzione",
          "Mobilizzazione delle dita e della spalla immediata",
          "Rimozione gesso e FKT intensiva dopo 6 settimane",
        ],
      },
      {
        title: "ORIF con Placca Volare",
        content: [
          "Gold standard chirurgico per fratture instabili e articolari",
          "Via di accesso volare (Henry) con placca ad angolo fisso",
          "Mobilizzazione precoce del polso da 2-4 settimane post-op",
          "Rimozione placca: non routinaria, solo se sintomatica",
          "Complicanze: irritazione tendini flessori, sindrome del tunnel carpale, CRPS",
        ],
      },
      {
        title: "Protocollo Riabilitativo Frattura Radio Distale (NHS Sussex / Virtual Hand Fracture Clinic)",
        content: [
          "FONTE: University Hospitals Sussex NHS Foundation Trust — Distal Radius Fractures: Virtual Hand Fracture Clinic Patient Information (2021). Link PDF disponibile.",
          "─── TEMPISTICHE DI RECUPERO ───",
          "0-6 SETTIMANE: focus su ripristino del movimento e funzione leggera; svezzamento graduale dal tutore Futura; obiettivo: abbandonare il tutore entro 6 settimane dall'infortunio; iniziare ESERCIZI PASSIVI se trattati chirurgicamente",
          "6 SETTIMANE: iniziare esercizi passivi se trattati con gesso; avviare weight-bearing; aumentare la destrezza del polso",
          "8 SETTIMANE: aumentare gradualmente i carichi; iniziare gli esercizi di rinforzo",
          "12 SETTIMANE: nessuna restrizione di attività; l'osso è sufficientemente solido per sport da contatto e pesi — i tessuti molli sono ancora in guarigione",
          "12 SETTIMANE+: normale avere gonfiore lieve residuo, rigidità mattutina e dolori occasionali con attività nuove/pesanti",
          "1 ANNO: recupero completo del polso; il dolore residuo lieve può persistere",
          "GUIDA: consentita quando si ha pieno controllo del veicolo e si possono eseguire tutte le manovre di emergenza",
          "─── GESTIONE DEL GONFIORE E CURA DELLA CICATRICE ───",
          "GONFIORE: elevazione regolare della mano durante la giornata; mentre la mano è sollevata, fare un pugno 5-10 volte rapidamente; massaggio con strofinature lunghe e ferme dalle punte delle dita verso il gomito; crioterapia locale",
          "CICATRICE (post-chirurgica): massaggio circolare profondo con pressione ferma 3 volte al die x 3 minuti; idratante delicato non profumato; desensibilizzazione con diverse texture (manica di abito, asciugamano) per normalizzare la risposta al tatto",
          "FUNZIONE LEGGERA: appena rimosso il gesso/bendaggio, usare la mano affetta nelle ADL (lavare i piatti, vestirsi, tastiera); più si usa, più rapido il recupero",
          "CALORE: applicare calore prima degli esercizi (doccia calda, borsa dell'acqua calda 5-10 min) per facilitare il ROM",
          "DOLORE: normale una discreta discomfort (VAS ≤5/10); lo stretching deve essere 'sgradevole ma tollerabile' e deve scomparire entro 30 min dal termine dell'esercizio",
          "─── ESERCIZI DI MOBILITÀ (ROM) ───",
          "DITA — TENDON GLIDING: sequenza completa di esercizi per le dita per ottenere pugno completo e estensione; usare la mano controlaterale per assistere se rigide; durante le ADL chiudere completamente le dita attorno agli oggetti",
          "POLLICE — OPPOSIZIONE: toccare la punta di ogni dito con la punta del pollice in sequenza, poi scorrere la punta del pollice lungo il mignolo fino alla base",
          "FLESSIONE/ESTENSIONE ATTIVA: piegare il polso all'indietro (estensione) fino a sentire tensione, hold 10-15 sec; poi piegare in avanti (flessione), hold 10-15 sec — ripetere 5-10 volte",
          "SUPINAZIONE/PRONAZIONE ATTIVA: gomito al fianco, ruotare l'avambraccio palmo su (supinazione) poi palmo giù (pronazione), hold 10-15 sec per direzione",
          "DART THROWER'S MOTION: gomito sul tavolo, tenere una penna con presa leggera, movimento diagonale dal radio verso l'ulnare (come lanciare una freccetta) — ripetere 5 volte",
          "FLESSIONE/ESTENSIONE PASSIVA: come l'attiva, ma usare la mano sana per spingere ulteriormente nella posizione, hold 30 sec; utile con il polso oltre il bordo del tavolo — ripetere 2 volte",
          "PRONAZIONE/SUPINAZIONE PASSIVA: gomito al fianco, usare la mano sana per spingere gentilmente al limite della rotazione, hold 30 sec per direzione",
          "PRAYER STRETCH: palme unite, gomiti flessi; abbassare lentamente le mani mantenendo le palme a contatto, portare i gomiti fuori — hold 30 sec",
          "ROLLING: appoggiare la mano su superficie irregolare (palla, magazine arrotolato, cuscino); ruolare avanti/indietro lentamente e uniformemente; con palla o cuscino: movimenti circolari o tracciare il proprio nome",
          "CONTROLLO ROTAZIONE FOREARM: gomito al fianco, palmo su con peso in mano (magazine arrotolato); ruotare lentamente palmo giù poi ritornare — 5 ripetizioni",
          "─── WEIGHT-BEARING PROGRESSIVO ───",
          "SU TAVOLO (in piedi): mano piatta sul tavolo, caricare il 25% → 50% → 75% → 100% del peso corporeo, hold 5-10 sec",
          "SU MURO: in piedi a distanza di un braccio, palme piatte sul muro all'altezza delle spalle, inclinare il corpo verso il muro progressivamente — hold 3-5 sec",
          "SUL PAVIMENTO: in ginocchio, palme piatte sul pavimento davanti a sé, caricare progressivamente il peso tollerato",
          "─── RINFORZO ISOMETRICO ───",
          "FLESSIONE ISOMETRICA: avambraccio sul tavolo palmo su, flettere il polso, con la mano sana spingere contro il palmo resistendo al movimento — hold 3-5 sec, poi rilassare",
          "ESTENSIONE ISOMETRICA: avambraccio sul tavolo palmo giù, estendere il polso, con la mano sana spingere contro il dorso resistendo — hold 3-5 sec",
          "PRONAZIONE ISOMETRICA: gomito a 90°, ruotare palmo giù, mano sana sul dorso del polso, resistere alla pronazione — hold 3-5 sec",
          "SUPINAZIONE ISOMETRICA: gomito a 90°, ruotare palmo su, mano sana sul dorso del polso, resistere alla supinazione — hold 3-5 sec",
          "─── RINFORZO CON PESI (ogni 2 giorni) ───",
          "SCEGLIERE IL PESO: deve permettere 10 ripetizioni con il polso leggermente affaticato; progressione fino a 3 serie x 10 rip aumentando il peso",
          "FLESSIONE CON PESO: avambraccio sul tavolo palmo su, polso oltre il bordo; flettere il polso verso l'alto, hold 5 sec, abbassare lentamente — 10 rip",
          "ESTENSIONE CON PESO: avambraccio sul tavolo palmo giù, polso oltre il bordo; estendere il polso verso di sé, hold 5 sec, abbassare lentamente — 10 rip",
          "DEVIATORI DI POLSO: peso in mano con pollice verso il soffitto; piegare il polso verso di sé e hold 5 sec, abbassare lentamente — 10 rip",
          "SUPINAZIONE/PRONAZIONE CON PESO: gomito al fianco, peso in mano, ruotare palmo su → palmo giù lentamente — 5 ripetizioni",
          "POWERBALL (giroscopio): rinforzo multidirezionale con resistenza; utile nelle fasi avanzate su indicazione del terapista",
        ],
      },
    ],
  },
  {
    id: 13,
    category: "Piede e Caviglia",
    color: "#1A6B5E",
    icon: "🦿",
    title: "Distorsione Laterale di Caviglia e Instabilità Cronica (LAS/CAI)",
    source: "Martin et al. | JOSPT 2013;43(9):A1-A40 | PMC3940495 | APTA Orthopaedic Section",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3940495/",
    tags: ["caviglia", "distorsione", "legamento", "LAS", "CAI", "instabilità", "Ottawa"],
    summary: "Linee guida CPG per la gestione fisioterapica della distorsione laterale acuta di caviglia (LAS) e dell'instabilità cronica di caviglia (CAI). Include classificazione ICF, Ottawa Rules, terapia manuale, esercizio e prevenzione delle recidive.",
    sections: [
      {
        title: "Classificazione e Diagnosi",
        content: [
          "CLASSIFICAZIONE ICF: LAS acuta (primi 1-2 settimane dall'infortunio); CAI = sintomi persistenti >12 mesi con instabilità funzionale e/o meccanica",
          "OTTAWA ANKLE RULES (evidenza forte): radiografia indicata se dolore alla palpazione sulla punta del malleolo mediale o laterale OPPURE sull'osso navicolare o base del 5° metatarso, con incapacità a caricare peso",
          "GRADI DI DISTORSIONE: Grado I (stiramento legamentoso, integrità mantenuta); Grado II (rottura parziale, instabilità lieve-moderata); Grado III (rottura completa ATFL ± CFL, instabilità grave)",
          "LEGAMENTI COINVOLTI: ATFL (Anterior Talo-Fibular Ligament) più frequentemente lesionato; CFL (Calcaneo-Fibular); PTFL (Posterior Talo-Fibular) raramente",
          "TEST CLINICI: Anterior Drawer Test (sens. 0.96 per ATFL rotto); Talar Tilt Test (CFL); Thompson Test per escludere rottura tendine d'Achille",
          "OUTCOME MEASURES: FAAM (Foot and Ankle Ability Measure) — MCID = 8 punti per attività quotidiane; FAAM Sport — MCID = 9 punti",
          "DIAGNOSI DIFFERENZIALE: frattura osteocondrale astragalo, frattura 5° metatarso (Jones), sindrome del seno del tarso, lesione tendine peroneo",
        ],
      },
      {
        title: "Fattori di Rischio e Prevenzione",
        content: [
          "RISCHIO AUMENTATO (evidenza moderata): storia di precedente distorsione, assenza di supporto esterno (tutore/taping), mancato warm-up con stretching statico e dinamico, ridotto ROM in dorsiflessione, assenza di programma propriocettivo",
          "PREVENZIONE PRIMARIA (evidenza moderata): uso di tutori lace-up o taping in sport ad alto rischio (basket, calcio, pallavolo) riduce incidenza di LAS",
          "PREVENZIONE RECIDIVE (evidenza forte): programma di esercizio neuro-muscolare/propriocettivo post-LAS riduce rischio di re-infortunio fino al 50%",
          "Atleti con storia di LAS che non usano supporto esterno hanno incidenza significativamente maggiore di recidive in football e basket (evidenza forte)",
        ],
      },
      {
        title: "Gestione Acuta (Fase 0-2 Settimane)",
        content: [
          "DEVE (evidenza forte): applicare Ottawa Rules prima di inviare a imaging; non richiedere radiografia di routine senza criteri Ottawa",
          "DEVE (evidenza moderata): avviare carico precoce protetto e mobilizzazione precoce — superiore all'immobilizzazione prolungata per recupero funzionale",
          "DEVE (evidenza moderata): terapia manuale (mobilizzazioni antero-posteriori dell'astragalo, manipolazioni tibio-peroneali) per recupero ROM dorsiflessione e riduzione dolore",
          "CONSIDERATE: crioterapia per controllo del dolore e dell'edema nelle prime 72h; FANS a breve termine per dolore acuto",
          "DEVE: bracing funzionale (tutore semirigido) o taping adesivo come supporto — superiore al gesso per LAS gradi I-II",
          "NON INDICATO: immobilizzazione con gesso/benda rigida per LAS gradi I-II senza frattura associata",
          "CRIOTERAPIA: evidenza limitata sull'efficacia oltre la riduzione del dolore immediato; non raccomandato come trattamento isolato nella fase di recupero",
        ],
      },
      {
        title: "Riabilitazione e Esercizio",
        content: [
          "DEVE (evidenza forte): programma di esercizio supervisionato con componenti di — rinforzo peroneali e tibiale anteriore, propriocezione/equilibrio, ROM dorsiflessione, rinforzo catena cinetica arto inferiore",
          "DEVE: esercizi di equilibrio su superficie instabile (wobble board, BOSU) progressivi: bipodal → monopodal → superfici instabili → compiti cognitivi dual-task",
          "ESERCIZIO NEURO-MUSCOLARE (evidenza forte per LAS e CAI): specificamente il training propriocettivo riduce recidive — iniziare entro la 1a-2a settimana",
          "RINFORZO PERONEALI: esercizi isometrici → concentrico/eccentrico con elastico → funzionale — fondamentali per stabilità dinamica",
          "PROGRESSIONE FUNZIONALE: camminata → corsa in linea retta → corsa curva → cambi di direzione → sport-specifico",
          "CAI CRONICA: programma neuro-muscolare di almeno 6 settimane; aggiungere terapia manuale per deficit di dorsiflessione residua",
          "NON INDICATO: ultrasuoni terapeutici, diatermia, elettroterapia — evidenza insufficiente per raccomandazione",
        ],
      },
      {
        title: "Supporti Esterni e Ritorno allo Sport",
        content: [
          "DEVE (evidenza forte): bracing con tutore semirigido o taping per prevenzione recidive durante attività sportiva per almeno 6-12 mesi post-LAS",
          "TAPING FUNZIONALE: efficace per ridurre rischio recidiva e migliorare propriocezione; scegliere in base a tollerabilità cutanea e contesto sportivo",
          "KINESIO TAPING: evidenza insufficiente per raccomandazione come alternativa al taping rigido — può essere usato come complemento",
          "RITORNO ALLO SPORT: criteri funzionali > criteri temporali — valutare: ROM completo, forza peroneale ≥90% controlaterale, hop test monopodalico, assenza di dolore",
          "LAS GRADO III con instabilità meccanica residua: considerare consulto chirurgico se fallimento trattamento conservativo dopo 3-6 mesi",
          "FAAM al ritorno sport: punteggio ≥90% rispetto all'arto controlaterale prima del via libera sportivo",
        ],
      },
      {
        title: "Sintesi CPG — Raccomandazioni Forti (Ruiz-Sánchez et al. 2022)",
        content: [
          "FONTE: Ruiz-Sánchez et al. Medicine 2022;101(42):e31087 | PMC9592509 — Revisione sistematica PRISMA di 7 CPG sulla distorsione di caviglia (AGREE II)",
          "FORTEMENTE RACCOMANDATE (evidenza A): Ottawa Rules per escludere frattura; supporto funzionale (tutore/brace) per 4-6 settimane superiore a immobilizzazione o bendaggio elastico; deambulazione precoce; crioterapia in fase acuta per riduzione dolore ed edema",
          "FORTEMENTE RACCOMANDATE (evidenza A-B): terapia manuale (mobilizzazioni) — migliora recupero a breve e lungo termine; esercizio terapeutico (propriocezione, rinforzo, equilibrio) — riduce instabilità funzionale e ottimizza recupero articolare",
          "FANS a breve termine in fase acuta: consigliati (4 CPG su 7, AGREE II score 7); non raccomandati a lungo termine",
          "IMMOBILIZZAZIONE: max 10 giorni per LAS grado III; non raccomandata >4 settimane; supporto funzionale sempre preferibile al gesso per gradi I-II",
          "CHIRURGIA: basso grado di raccomandazione per LAS acuta; indicata in instabilità cronica o rottura legamentosa dopo fallimento conservativo — in atleti professionisti può essere scelta precocemente",
          "NON RACCOMANDATI (evidenza D): ultrasuoni, diatermia, elettroterapia, laser a bassa intensità — nessuna evidenza solida sull'efficacia",
          "ACUPUNTURA: evidenza controversa; elettroagopuntura e farmacoacupuntura basso grado di raccomandazione; possibile opzione a basso costo/rischio in casi selezionati",
          "GUIDA DI RIFERIMENTO: Vuurberg et al. 2018 (AGREE II score 9) — documento più completo; integrare con Ottawa Rules e riabilitazione da Kaminski et al. 2019",
        ],
      },
    ],
  },
  {
    id: 6,
    category: "Piede e Caviglia",
    color: "#1A6B5E",
    icon: "🦶",
    title: "Alluce Valgo (Hallux Valgus)",
    source: "AOFAS / EFAS 2022 | MGH Physical Therapy Guidelines for Hallux Valgus Correction",
    pdfUrl: "https://www.massgeneral.org/assets/MGH/pdf/orthopaedics/foot-ankle/PT-guidelines-hallux-valgus-correction-final.pdf",
    tags: ["piede", "alluce valgo", "chirurgia"],
    summary: "Diagnosi e trattamento dell'alluce valgo sintomatico, con indicazioni per le diverse procedure chirurgiche.",
    sections: [
      {
        title: "Classificazione della Severità",
        content: [
          "Lieve: angolo HV 15-25°, angolo IM 9-11°",
          "Moderata: angolo HV 25-40°, angolo IM 11-16°",
          "Severa: angolo HV > 40°, angolo IM > 16°",
          "Congruenza articolare: determina la scelta della tecnica chirurgica",
          "Valutazione DMAA (Distal Metatarsal Articular Angle) per pianificazione",
        ],
      },
      {
        title: "Trattamento Conservativo",
        content: [
          "Calzature larghe con allargamento nell'area dell'alluce",
          "Inserti ortopedici personalizzati per ridistribuzione dei carichi",
          "Distanziatori inter-digitali in silicone",
          "Fisioterapia: rinforzo muscoli intrinseci del piede",
          "NON modificano la progressione della deformità ma possono controllare i sintomi",
        ],
      },
      {
        title: "Indicazioni Chirurgiche",
        content: [
          "Dolore persistente nonostante 6 mesi di terapia conservativa",
          "Deformità severa con interferenza con calzatura",
          "Sublussazione articolare MTF con rischio di artrosi",
          "Presenza di metatarsalgia secondaria da trasferimento del carico",
        ],
      },
      {
        title: "Procedure Chirurgiche Principali",
        content: [
          "Osteotomia distale (Chevron/Austin): deformità lieve-moderata, IM < 13°",
          "Osteotomia diafisaria (Scarf): deformità moderata, IM 12-16°",
          "Osteotomia prossimale: deformità severa, IM > 16°",
          "Artrodesi MTF (Lapidus): instabilità cuneometatarsale, deformità severa ricorrente",
          "Artrodesi MTF: alluce valgo con artrosi severa, artrite reumatoide",
        ],
      },
      {
        title: "Protocollo Riabilitativo Post-Op Alluce Valgo — 6 Fasi (MGH)",
        content: [
          "FONTE: MGH Physical Therapy Services — PT Guidelines for Hallux Valgus Correction (Bunion Reconstruction). Link PDF disponibile. ⚠️ La competenza delle dita (toe competency) deve essere mantenuta per tutta la riabilitazione: NESSUNA benda o compressione che alteri l'allineamento post-operatorio. Scarpe con punta larga e lunga; NO scarpe che stringano le dita.",
          "PREOPERATORIO: istruzione all'uso dell'ausilio deambulatorio (NWB sul lato affetto); dimostrazione deambulazione sicura NWB con scale e trasferimenti.",
          "─── FASE 1 — POST-OP 0-2 SETTIMANE ───",
          "RESTRIZIONI: non-weight-bearing (NWB); tutore post-operatorio sempre indossato; elevazione stretta ('dita sopra il naso')",
          "OBIETTIVI: gestione edema e dolore; deambulazione sicura NWB con ausilio; ADL in modalità modificata o con assistenza minima; prevenzione infezioni",
          "TRATTAMENTO: AROM anca e ginocchio; elevazione dell'arto inferiore coinvolto sopra il livello del cuore per tutta la giornata",
          "─── FASE 2 — 2-6 SETTIMANE ───",
          "RESTRIZIONI: NO mobilizzazione articolare delle articolazioni fuse; OSTEOTOMIA: boot sempre indossato (rimuovere 2-3 volte/die per HEP, dormire con boot), inizio graduale weight-bearing parziale; ARTRODESI/FUSIONE: gesso corto sempre indossato, solo touch-down weight-bearing",
          "OBIETTIVI: proteggere il sito di osteotomia/fusione; aumentare ROM della 1ª MTF e della caviglia; minimizzare la perdita di forza di core, anca e ginocchio; gestire il gonfiore; mobilizzazione cicatrice",
          "TRATTAMENTO: ispezione incisione/cicatrice; AROM e PROM caviglia (attenzione al posizionamento delle mani per evitare pressione sui siti chirurgici); esercizi AROM/PROM 1ª MTF; rinforzo core, anca e ginocchio; gait training per heel touch weight-bearing; mobilizzazione cicatrice quando l'incisione è completamente guarita",
          "─── FASE 3 — 6-10 SETTIMANE ───",
          "RESTRIZIONI: NO mobilizzazione articolazioni fuse; OSTEOTOMIA: progressione a full weight-bearing in boot per indicazione del chirurgo; ARTRODESI: come Fase 2, progressione graduale del carico",
          "OBIETTIVI: ROM completo piede e caviglia; forza piede e caviglia aumentata; gait normalizzato in boot; ripristino endurance cardiovascolare",
          "TRATTAMENTO: AROM/PROM caviglia e MTF, stretching; rinforzo piede e caviglia; mobilizzazioni articolari del piede e caviglia con stabilizzazione (evitare il sito di osteotomia/fusione); continuare rinforzo core, anca, ginocchio; gait training per svezzamento ausili in boot; cyclette senza pressione sull'avampiede (Lapidus: non prima di 10 settimane)",
          "─── FASE 4 — 10-14 SETTIMANE ───",
          "RESTRIZIONI: NO mobilizzazione articolazioni fuse (se applicabile); svezzamento dal boot verso scarpa da ginnastica con punta ampia e lunga; camminata in piscina",
          "OBIETTIVI: pieno carico in scarpa con buona tolleranza; gait pattern normale; controllo motorio normalizzato dell'arto inferiore; forza completa di core e arti inferiori",
          "TRATTAMENTO: continuare rinforzo, ROM e condizionamento; inizio esercizi propriocettivi, equilibrio e controllo motorio in catena chiusa (CKC); cyclette, nuoto",
          "─── FASE 5 — 14-20 SETTIMANE ───",
          "RESTRIZIONI: NO mobilizzazione articolazioni fuse; progressione attività per indicazione del FT",
          "OBIETTIVI: buon equilibrio e controllo monopodal in tutti i piani; ritorno a tutte le attività (non sport) se obiettivi di forza, gait e ROM raggiunti",
          "TRATTAMENTO: continuare trattamento come sopra; attività monopodali su superfici variabili; progressione functional training verso movimenti sport-specifici; assistenza nella scelta di calzatura casual/elegante",
          "─── FASE 6 — 20+ SETTIMANE ───",
          "OBIETTIVI: ritorno graduale a sport a basso impatto → alto impatto",
          "TRATTAMENTO: training e condizionamento sport-specifico partendo da basso impatto (ciclismo, canottaggio, nuoto, Stairmaster, ellittica) con progressione verso alto impatto (corsa, salti) quando i precedenti sono tollerati senza dolore",
        ],
      },
    ],
  },
  {
    id: 7,
    category: "Rachide",
    color: "#8B3A3A",
    icon: "🔩",
    title: "Dolore Cervicale — Linee Guida JOSPT 2017",
    source: "Blanpied et al. | JOSPT 2017;47(7):A1-A83 | APTA Orthopaedic Section",
    tags: ["cervicale", "neck pain", "whiplash", "WAD", "cefalea cervicogenica", "radiculopatia"],
    summary: "Linee guida evidence-based per la diagnosi e il trattamento fisioterapico del dolore cervicale, classificato in 4 categorie ICF: deficit di mobilità, deficit di coordinazione motoria (WAD), cefalea associata e dolore radicolare.",
    sections: [
      {
        title: "Classificazione Diagnostica ICF (Grado C)",
        content: [
          "Dolore cervicale con DEFICIT DI MOBILITÀ: limitazione ROM cervicale/toracico, dolore riproducibile a fine range, restrizione segmentale",
          "Dolore cervicale con DEFICIT DI COORDINAZIONE MOTORIA (WAD): esordio traumatico/whiplash, test cranio-cervicale flessione positivo, deficit forza/endurance collo, ipersensibilità pressoria",
          "Dolore cervicale con CEFALEA (cervicogenica): cefalea unilaterale non continua aggravata da movimenti cervicali, Cervical Flexion-Rotation Test positivo, restrizione segmentaria C1-2",
          "Dolore cervicale con DOLORE RADICOLARE: dolore a banda stretta nell'arto superiore, parestesie dermatomiche, deficit sensitivo/motorio/riflessi — test cluster: Spurling, distrazione, ULTT mediano",
          "NOTA: le categorie non sono esclusive; rivalutare continuamente la classificazione nel corso del trattamento",
        ],
      },
      {
        title: "Valutazione e Misure di Outcome (Grado A–B)",
        content: [
          "QUESTIONARI VALIDATI (Grado A): Neck Disability Index (NDI) — cut-off prognostico > 30%; PSFS; SF-36/SF-12; VAS",
          "ROM CERVICALE (Grado I): dispositivo CROM, goniometro o inclinometro — buona affidabilità e validità",
          "CERVICAL FLEXION-ROTATION TEST (CFRT): ROM medio 39-45° in sani vs 20-28° in cefalea cervicogenica; cut-off < 32° o differenza ≥10°; Sens 0.90-0.95 / Spec 0.90-0.97; LR+ 9.0-9.4",
          "SOGLIA DOLORE DA PRESSIONE (algometria trapezio): ICC 0.96 intrarater; valori ridotti localmente = ipersensibilità meccanica; riduzione diffusa = sensibilizzazione centrale",
          "PROGNOSI WAD (Grado moderato-alto): raccogliere VAS (≥6 rischio cronicità), NDI (>30%), Pain Catastrophizing Scale (≥20), Impact of Events Scale-R (≥33), iperalgesie da freddo",
        ],
      },
      {
        title: "Interventi — Deficit di Mobilità (Grado B–C)",
        content: [
          "ACUTO (Grado B): manipolazione toracica + esercizi ROM cervicale + stretching e rinforzo scapolo-toracico e arto superiore",
          "ACUTO (Grado C): manipolazione e/o mobilizzazione cervicale",
          "SUBACUTO (Grado B): esercizi di endurance cervicale e cingolo scapolare",
          "SUBACUTO (Grado C): manipolazione toracica ± manipolazione/mobilizzazione cervicale",
          "CRONICO (Grado B — approccio multimodale): manipolazione toracica + mobilizzazione/manipolazione cervicale + esercizio misto cervico-scapolo-toracico (neuromuscolare, propriocettivo, posturale, stretching, rinforzo, aerobico, componente cognitivo-affettiva) + dry needling, laser o trazione intermittente meccanica",
          "CRONICO (Grado C): endurance cervicale/tronco + educazione e counseling stile di vita attivo",
        ],
      },
      {
        title: "Interventi — WAD / Deficit Coordinazione (Grado B–C)",
        content: [
          "ACUTO — recupero atteso rapido (Grado B): educazione (riprendere attività pre-trauma appena possibile, minimizzare uso collare, esercizi posturali/mobilità); rassicurazione sul recupero entro 2-3 mesi",
          "ACUTO — recupero moderato-lento (Grado B): approccio multimodale: tecniche di mobilizzazione manuale + esercizio (rinforzo, endurance, flessibilità, posturale, coordinazione, aerobico)",
          "ACUTO — basso rischio cronicità (Grado C): singola sessione educazione + istruzione esercizi; programma esercizi completo; TENS",
          "MONITORAGGIO (Grado F): identificare precocemente pazienti con recupero ritardato per intensificare la riabilitazione e avviare pain education",
          "CRONICO (Grado C): educazione (prognosi, incoraggiamento, pain management) + mobilizzazione + programma esercizi progressivo submassimale cervico-toracico con principi TCC + TENS",
        ],
      },
      {
        title: "Interventi — Cefalea Cervicogenica (Grado B–C)",
        content: [
          "ACUTO (Grado B): esercizi di mobilità attiva supervisionati",
          "ACUTO (Grado C): self-SNAG C1-2 (auto-mobilizzazione apofisaria sostenuta)",
          "SUBACUTO (Grado B): manipolazione e mobilizzazione cervicale",
          "SUBACUTO (Grado C): self-SNAG C1-2",
          "CRONICO (Grado B): manipolazione/mobilizzazione cervicale o cervico-toracica + stretching, rinforzo ed endurance cervicale e cingolo scapolare",
          "CRONICO (Grado B — multimodale): manipolazione/mobilizzazione + esercizi (stretching, rinforzo, endurance, training neuromuscolare con biofeedback e motor control)",
        ],
      },
      {
        title: "Interventi — Dolore Radicolare Cervicale (Grado B–C)",
        content: [
          "ACUTO (Grado C): esercizi di mobilizzazione e stabilizzazione cervicale + laser + eventuale collare a breve termine",
          "CRONICO (Grado B): trazione cervicale meccanica intermittente + stretching/rinforzo + mobilizzazione/manipolazione cervicale e toracica",
          "CRONICO (Grado B): educazione e counseling per promuovere partecipazione ad attività lavorative e fisiche",
          "NON indicata trazione continua (nessun beneficio vs controllo)",
          "MIELOPATIA cervicale moderata-severa: la trazione è controindicata",
        ],
      },
      {
        title: "Imaging e Red Flags (Grado A)",
        content: [
          "SCREENING OBBLIGATORIO per patologie serie: infezione, neoplasia, insufficienza arteriosa, instabilità legamentosa C1-2, disfunzione nervi cranici, frattura",
          "CANADIAN CERVICAL SPINE RULE (CCR): alto rischio se età ≥65, meccanismo pericoloso, parestesie arto sup → TC/Rx. Basso rischio se: seduto in PS, collisione posteriore semplice, deambulante, dolore ad esordio ritardato, no dolorabilità sulla linea mediana + rotazione attiva ≥45° → nessun imaging",
          "CRITERI NEXUS: Rx indicata in traumi a meno che: no dolorabilità linea mediana, no intossicazione, coscienza normale, no deficit neurologico focale, no lesioni dolorose distrattrici",
          "DEFICIT DI MOBILITÀ (acuto/cronico senza red flags): nessun imaging indicato",
          "DOLORE RADICOLARE con segni neurologici: RMN colonna cervicale da C0 al tratto toracico superiore. Se controindicazione RMN: TC-mielografia",
          "RMN è imaging di scelta per mielopatia. NON indicata RMN routinaria dei legamenti alari/trasverso in pazienti con whiplash",
        ],
      },
    ],
  },
  // ---- LET Tennis Elbow ----
  {
    id: 8,
    category: "Gomito",
    color: "#6B3A2E",
    icon: "💪",
    title: "Tendinopatia Epicondilare Laterale (Tennis Elbow) — Toolkit",
    source: "Lucado et al. | JOSPT 2022;52(12):CPG1-CPG111 | APTA Orthopedics | BC Physical Therapy Tendinopathy Task Force \u2014 Physiopedia LET Toolkit",
    pdfUrl: "https://www.jospt.org/doi/10.2519/jospt.2022.0302",
    tags: ["gomito", "epicondilite", "tennis elbow", "tendinopatia", "LET", "ECRB"],
    summary: "Toolkit evidence-based per la gestione della tendinopatia epicondilare laterale (LET). Include algoritmo clinico, valutazione, outcome measures, esercizio (isometrico/concentrico/eccentrico), terapia manuale, LLLT, ESWT, ortesi e taping.",
    sections: [
      {
        title: "Valutazione Clinica e Diagnosi",
        content: [
          "Dolore laterale al gomito correlato a sovraccarico, localizzato all'inserzione ECRB/origine comune estensori sull'epicondilo laterale",
          "TEST CLINICI: palpazione epicondilo laterale; Mills Test (stiramento passivo estensori); Cozen/Maudsley/Thomsen (resistenza isometrica estensori/dito medio)",
          "OUTCOME MEASURES: PRTEE (Patient Rated Tennis Elbow Evaluation) — 15 item, MCID=11, MDC=9; NPRS per intensità dolore; PFGT (Pain Free Grip Test) con dinamometro",
          "IMAGING: non necessaria di routine; utile se quadro atipico o mancata risposta al trattamento conservativo per escludere patologie intra/extra-articolari",
          "DIAGNOSI DIFFERENZIALE: intrappolamento nervo interosseo posteriore (tunnel radiale), radiculopatia cervicale, instabilità legamentosa posterolaterale, artrite radio-capitellare, sinovite plica",
          "FATTORI BIOPSICOSOCIALI: catastrofizzazione e distress psicologico aggravano LET cronica — includere pain neuroscience education se presenti",
        ],
      },
      {
        title: "Terapia Manuale",
        content: [
          "MOBILIZZAZIONI GOMITO — ACUTA (Può considerare): MWM (Mobilization with Movement) o manipolazione di Mill's — evidenza minima ma supporto da expert opinion",
          "MOBILIZZAZIONI GOMITO — CRONICA (Fortemente considerare): MWM particolarmente indicata; effetti evidenti entro i primi trattamenti, potenziati dall'aggiunta di esercizio. Moderata effect size su dolore, forza grip e funzione a tutti i timeframe",
          "TECNICHE SPINALI — ACUTA (Può considerare): mobilizzazione cervicale e/o toracica",
          "TECNICHE SPINALI — CRONICA (Considerare): mobilizzazione/manipolazione cervico-toracica + neuromobilizzazione nervo radiale in pazienti con segni spinali anche senza dolore spinale riferito",
          "TECNICHE TESSUTI MOLLI — ACUTA (Può considerare): massaggio profondo/superficiale per effetto analgesico immediato",
          "TECNICHE TESSUTI MOLLI — CRONICA (Può considerare): frizioni trasversali profonde (Cyriax) in approccio multimodale",
        ],
      },
      {
        title: "Esercizio Terapeutico — Cardine del Trattamento",
        content: [
          "ACUTA (Può considerare): esercizio (rinforzo, stretching, fitness generale) — evidenza limitata ma supporto clinico",
          "CRONICA (Fortemente considerare): esercizio locale E catena cinetica dell'arto superiore — quasi tutti gli studi mostrano miglioramenti indipendentemente dal tipo",
          "NESSUN tipo di esercizio superiore agli altri: isometrico, concentrico ed eccentrico mostrano risultati comparabili — scegliere in base alla tolleranza del paziente",
          "ISOMETRICO: ottimo punto di partenza, riduzione dolore immediata, utile nelle fasi acute/irritabili",
          "ECCENTRICO: storicamente gold standard, ma non superiore ad altri in LET — includere come opzione, non unica scelta",
          "CONCENTRICO-ECCENTRICO (HSR): indicato nelle fasi subacute/croniche per ottimizzare il carico tendineo",
          "Includere stretching degli estensori del polso come complemento al rinforzo",
          "Progressione: isometrico → concentrico/eccentrico → pliometrico → sport/lavoro specifico",
        ],
      },
      {
        title: "Trattamenti Fisici Aggiuntivi",
        content: [
          "LLLT (Laser bassa intensità) — ACUTA (Considerare): evidenza per riduzione dolore a breve termine; seguire dosaggi WALT",
          "LLLT — CRONICA (Considerare): efficace su dolore a breve/medio termine; class IV laser (alta intensità) opzione aggiuntiva per cronico",
          "ESWT (Shockwave) — CRONICA (Considerare): evidenza per dolore e funzione a breve/medio termine come aggiunta all'esercizio eccentrico",
          "DRY NEEDLING — CRONICA (Può considerare): evidenza limitata ma promettente per trigger points ECRB/estensori",
          "AGOPUNTURA — CRONICA (Può considerare): possibile riduzione dolore a breve termine",
          "ULTRASUONI (terapeutici) — CRONICA (Può considerare): evidenza debole; inferiore ad altre modalità — non raccomandato come prima scelta",
          "IONOFORESI — ACUTA (Considerare): indicata per sintomi acuti (<6 settimane) come aggiunta al trattamento di base",
        ],
      },
      {
        title: "Ortesi, Taping e Gestione del Carico",
        content: [
          "COUNTERFORCE BRACE (fascia epicondilare) — CRONICA (Può considerare): riduzione dolore a breve termine durante attività, non modifica la prognosi a lungo termine",
          "WRIST EXTENSION SPLINT (tutore polso in estensione) — CRONICA (Può considerare): riduzione dolore durante attività funzionali",
          "TAPING (rigido o kinesio) — CRONICA (Può considerare): miglioramento immediato dolore e grip strength; kinesio tape opzione per tollerabilità",
          "GESTIONE DEL CARICO: educazione alla modificazione delle attività provocanti; approccio empatico alle limitazioni lavorative",
          "FOLLOW-UP: rivalutare sintomi a 12 settimane; se nessun miglioramento dopo 6 mesi → indagini diagnostiche e consulto medico",
          "CORTICOSTEROIDI: effetto positivo a breve termine ma negativo a lungo termine; il toolkit NON li raccomanda come prima scelta — discutere con il paziente",
        ],
      },
    ],
  },
  // ---- LBP 2021 ----
  {
    id: 9,
    category: "Rachide",
    color: "#8B3A3A",
    icon: "🔗",
    title: "Lombalgia Acuta e Cronica — Interventi 2021",
    source: "George et al. | JOSPT 2021;51(11):CPG1-CPG60 | APTA Orthopedics",
    tags: ["lombalgia", "low back pain", "LBP", "rachide lombare", "manipolazione", "esercizio"],
    summary: "Aggiornamento 2021 delle CPG APTA sugli interventi fisioterapici per la lombalgia acuta e cronica. Prima guida a includere dry needling, terapia cognitivo-funzionale e pain neuroscience education.",
    sections: [
      {
        title: "Esercizio per LBP Acuta",
        content: [
          "PUÒ (C): esercizio per attivazione muscoli del tronco in LBP acuta senza irradiazione",
          "PUÒ (C): rinforzo/endurance tronco + attivazione specifica tronco in LBP acuta CON dolore all'arto inferiore",
          "PUÒ (C): Mechanical Diagnosis & Therapy (MDT) per ridurre dolore e disabilità in LBP acuta",
          "PUÒ (C): Treatment-Based Classification (TBC) come sistema classificativo in LBP acuta",
          "NON raccomandato: trazione meccanica per LBP acuta con dolore all'arto inferiore",
        ],
      },
      {
        title: "Esercizio per LBP Cronica",
        content: [
          "DEVE (A): programmi di esercizio — rinforzo/endurance tronco, esercizio multimodale, attivazione specifica tronco, aerobico, acquatico, esercizio generale",
          "PUÒ (B): esercizio di controllo del movimento o di mobilità del tronco in LBP cronica",
          "DEVE (A): attivazione specifica + controllo motorio per LBP cronica CON deficit di controllo del movimento",
          "DEVE (A): esercizio generale per ridurre dolore e disabilità negli anziani con LBP cronica",
          "PUÒ (B): esercizio specifico (attivazione tronco, controllo motorio) in LBP cronica CON dolore all'arto",
          "PUÒ (C): esercizio generale post-chirurgia lombare",
        ],
      },
      {
        title: "Terapia Manuale e Terapie Dirette",
        content: [
          "DEVE (A): mobilizzazione/manipolazione thrust o non-thrust per ridurre dolore e disabilità in LBP ACUTA",
          "PUÒ (B): massaggio o mobilizzazione tessuti molli per sollievo dolore a breve termine in LBP acuta",
          "DEVE (A): mobilizzazione/manipolazione thrust o non-thrust per LBP CRONICA",
          "PUÒ (B): mobilizzazione thrust o non-thrust per LBP cronica CON dolore all'arto",
          "PUÒ (B): mobilizzazione tessuti molli/massaggio in combinazione con altri trattamenti per LBP cronica a breve termine",
          "PUÒ (C): dry needling in combinazione con altri trattamenti per ridurre dolore/disabilità a breve termine in LBP cronica — NUOVO rispetto al 2012",
          "PUÒ (B): mobilizzazione neurale in associazione con altri trattamenti per LBP cronica con dolore all'arto",
          "NON DEVE: trazione meccanica per LBP cronica con dolore all'arto inferiore (nessun beneficio aggiuntivo)",
        ],
      },
      {
        title: "Educazione e Classificazione (LBP Cronica)",
        content: [
          "PUÒ (B): pain neuroscience education (PNE) in combinazione con terapia attiva — NON come trattamento stand-alone",
          "PUÒ (B): yoga, stretching, Pilates, allenamento della forza come terapie attive complementari",
          "PUÒ (B): MDT, stratificazione prognostica del rischio o classificazione patoanatomica in LBP cronica",
          "PUÒ (C): terapia cognitivo-funzionale (CFT) per LBP cronica — NUOVO rispetto al 2012",
          "NON raccomandato: PNE come trattamento isolato",
        ],
      },
    ],
  },
  // ---- PFP 2019 ----
  {
    id: 10,
    category: "Ginocchio",
    color: "#0E6B5E",
    icon: "🦵",
    title: "Dolore Femoro-Rotuleo (PFP) — CPG 2019 + Progressione Carico Tendine Rotuleo",
    source: "Willy et al. JOSPT 2019;49(9):CPG1-CPG95 | Scattone Silva et al. Med Sci Sports Exerc 2024;56(3):545-552 | Boyd MD – OrthoNY Protocol 2025",
    pdfUrl: "https://www.orthony.com/wp-content/uploads/2025/09/Rehab-Patellofemoral-Pain-Syndrome.pdf",
    tags: ["ginocchio", "patellofemoral", "PFP", "dolore anteriore ginocchio", "rotula", "tendinopatia rotulea", "carico tendineo", "progressione esercizi"],
    summary: "Linee guida CPG 2019 per il dolore femoro-rotuleo, integrate con i dati biomeccanici di Scattone Silva et al. 2024 sulla progressione del carico sul tendine rotuleo durante 35 esercizi riabilitativi (3 tier di carico) e il protocollo riabilitativo OrthoNY 2025 (adottato da MGH Sports Medicine).",
    sections: [
      {
        title: "Diagnosi e Classificazione",
        content: [
          "PFP: dolore insidioso, scarsamente localizzato, nella regione anteriore retro-rotulea/peri-rotulea",
          "Aggravato da: squat, salire/scendere scale, corsa, salti, seduta prolungata",
          "Fattori di rischio: debolezza muscolatura dell'anca, specializzazione precoce in uno sport, sesso femminile fisicamente attivo",
          "Altezza, peso corporeo e postura del piede NON predicono lo sviluppo di PFP",
          "Outcome measures: Kujala Anterior Knee Pain Scale, VAS, PSFS",
          "Il PFP tipicamente non si risolve senza trattamento adeguato — incoraggiare la presa in carico",
        ],
      },
      {
        title: "Esercizio — Prima Linea (Grado A-B)",
        content: [
          "DEVE: esercizio terapeutico con rinforzo anca E ginocchio come approccio principale",
          "Preferire esercizi per l'anca (rinforzo abduttori, rotatori esterni, estensori) nella FASE INIZIALE",
          "La combinazione anca + ginocchio è superiore al solo rinforzo del ginocchio per ottimizzare i risultati",
          "Esercizi in catena cinetica chiusa (squat) o aperta (estensione resistita) — entrambi validi per il quadricipite",
          "NON indicato: biofeedback EMG del vasto mediale obliquo (VMO) per aumentare l'attivazione quadricipitale",
          "NON indicato: biofeedback visivo sull'allineamento arto inferiore durante esercizio",
        ],
      },
      {
        title: "Ortesi, Taping e Calzature",
        content: [
          "PUÒ: taping rotuleo (patellar taping) nelle PRIME 4 settimane, in combinazione con esercizio, per riduzione immediata del dolore",
          "ATTENZIONE: il taping non mantiene benefici a lungo termine e non modifica la prognosi se aggiunto a fisioterapia intensiva",
          "NON raccomandato: taping per facilitare la funzione muscolare (muscle function taping)",
          "NON DEVE: ortesi rotulee (bracciali, tutori, fasce rotulee) come trattamento per PFP",
          "PUÒ: plantari (prefabbricati) in combinazione con esercizio per riduzione dolore a breve termine",
          "PUÒ: rieducazione del pattern di corsa (gait retraining) per pazienti runner, con sessioni multiple per consolidare i cambiamenti",
        ],
      },
      {
        title: "Terapie Non Raccomandate",
        content: [
          "NON DEVE: dry needling per PFP (nessuna evidenza di beneficio)",
          "NON raccomandata come prima linea: agopuntura (evidenza limitata, efficacia simile al placebo)",
          "NON raccomandate: ultrasuoni, elettrostimolazione, manipolazione spinale per PFP",
          "PUÒ: blood flow restriction (BFR) + esercizi ad alta ripetizione per pazienti con limitazione all'estensione resistita del ginocchio",
          "NOTA: il PFP può persistere per anni — fondamentale la gestione a lungo termine con esercizio progressivo",
        ],
      },
      {
        title: "Progressione Carico Tendine Rotuleo — 3 Tier (Scattone Silva et al. 2024)",
        content: [
          "⚠️ NOTA: i dati seguenti provengono da uno studio biomeccanico sul tendine rotuleo (Scattone Silva et al. Med Sci Sports Exerc 2024;56(3):545-552), rilevante per PFP e tendinopatia rotulea, e per la progressione post-ricostruzione LCA con innesto osso-tendine-osso.",
          "METODO: 35 esercizi riabilitativi valutati in 20 adulti sani con sistema motion capture + pedane di forza. Loading index calcolato su: picco di forza, loading rate e impulso cumulativo sul tendine rotuleo. Classificati in 3 tier (Tier 1 ≤0.33 | Tier 2 0.33–0.66 | Tier 3 ≥0.66).",
          "─── TIER 1 — CARICO BASSO (loading index ≤0.33) — indicato nelle fasi iniziali/irritabili:",
          "  • Step up 20 cm (0.187) — esercizio più sicuro e con carico minore",
          "  • Squat bilaterale 60° (0.224)",
          "  • Step down 20 cm (0.288)",
          "  • Step up 30 cm (0.321)",
          "─── TIER 2 — CARICO MODERATO (loading index 0.33–0.66) — progressione intermedia:",
          "  • Bulgarian squat (0.406)",
          "  • Squat monopodalico 60° (0.411)",
          "  • Squat bilaterale completo (0.428)",
          "  • Lunge (0.471)",
          "  • Spanish squat (0.563)",
          "  • Drop vertical jump bipodalico (0.563)",
          "  • Single-leg drop vertical jump (0.599)",
          "  • Squat monopodalico completo (0.580)",
          "  • Countermovement jump bipodalico (0.610)",
          "  • Corsa (0.612)",
          "─── TIER 3 — CARICO ALTO (loading index ≥0.66) — fasi avanzate/ritorno allo sport:",
          "  • Single-leg forward hop (0.666)",
          "  • Single-leg countermovement jump (0.711)",
          "  • Running cut (0.725)",
          "  • Single-leg decline squat (0.747) — CARICO MASSIMO tra tutti gli esercizi testati",
          "IMPLICAZIONE CLINICA: il single-leg decline squat (esercizio più prescritto per tendinopatia rotulea) rappresenta il carico maggiore → non adatto nelle fasi iniziali; progressione graduata da Tier 1 verso Tier 3 raccomandata.",
          "IMPLICAZIONE POST-ACL: pazienti con innesto osso-tendine-osso hanno una 'tendinopatia iatrogena' al sito di prelievo → applicare questa progressione a 3 tier per il recupero del carico tendineo.",
          "NESSUN tipo di contrazione è superiore (eccentrico = concentrico = isometrico) se il carico progressivo è garantito — la scelta dell'esercizio deve basarsi sul tier appropriato alla fase clinica.",
        ],
      },
      {
        title: "Protocollo Riabilitativo PFPS — 3 Fasi + Ritorno Corsa (Boyd MD / OrthoNY 2025)",
        content: [
          "FONTE: Evan D. Boyd MD, Knee/Shoulder/Sports Medicine — OrthoNY Rehabilitation Protocol 2025 (adottato da MGH Sports Medicine Physical Therapy). Link PDF disponibile nella guida.",
          "DIAGNOSI CLINICA: dolore anteriore/retro-rotuleo; aggravato da seduta prolungata, squat, scale, corsa, salti; valutare catena cinetica dal rachide lombare al piede; test speciali: VMO Coordination Test, Patellar Apprehension, Clarke's Test, Eccentric Step Test, McConnell's Test, Patellar Tilt Test",
          "FATTORI CONTRIBUENTI: malallineamento patellare, forze PF alterate, stress ripetitivo; valutare Q-angle, pronazione del piede, rotazione interna femorale, forza lumbopelvica",
          "─── FASE I — ACUTA (0-2 Settimane) ───",
          "OBIETTIVI: ridurre gonfiore e dolore; ripristinare mobilità rotulea e arto inferiore (anca e caviglia); ridurre inibizione muscolare; re-attivare quadricipite e controllo dell'anca; educazione del paziente (minimizzare fattori aggravanti: discese scale, seduta prolungata, corsa, salti)",
          "INTERVENTI MANUALI: STM/IASTM; patellar taping (McConnell o kinesio); compressione ischemica/BFR; dry needling; neuromobilizzazione; mobilizzazione/manipolazione articolare",
          "ROM/MOBILITÀ FASE I: cyclette a resistenza minima; stretching e foam rolling (flessori anca, hamstring, quadricipite, IT band, adduttori, rotatori anca, gastroc-soleo)",
          "RINFORZO FASE I: isometrici quadricipite a 0°-45°-90° di flessione; SLR; bridge/bridge monopodal; clamshell laterale; abduzione anca lateral lying; core/lumbopelvic (TA, multifidus, plank front/side)",
          "CRITERI PROGRESSIONE FASE I: ROM completo vs lato sano; contrazione quadricipite con glide superiore rotula e estensione attiva completa; SLR senza lag; tolleranza completa al carico in relativa estensione del ginocchio",
          "─── FASE II — INTERMEDIA/SUBACUTA (2-4 Settimane) ───",
          "OBIETTIVI: progressione a CKC/carico senza flessione del ginocchio sotto carico; mantenere ROM completo; tolleranza al rinforzo in CKC; autonomia in ADL e HEP avanzato",
          "RINFORZO FASE II (continua Fase I): sumo walks; monster walks; hip drills 4 direzioni; BALANCE/PROPRIOCEZIONE: SLS (stance monopodal); clock taps; ball toss; correzione pattern motori nei task funzionali",
          "CRITERI PROGRESSIONE FASE II: tolleranza alle attività in carico; ROM completo mantenuto; obiettivi di lunghezza muscolare raggiunti",
          "─── FASE III — TARDIVA/CRONICA (4-6+ Settimane) ───",
          "OBIETTIVI: mantenere ROM; promuovere pattern motori corretti; nessun dolore/gonfiore post-esercizio; forza completa; scale illimitate; tolleranza al carico in CKC con flessione, con controllo eccentrico; obiettivi funzionali raggiunti",
          "RINFORZO FASE III (continua Fasi I-II): squat parziale → squat su sedia → wall slide → squat funzionale progressivo; lunge/reverse lunge; step-up; step-down eccentrico; correzione movimenti in task sport-specifici",
          "CRITERI DIMISSIONE: autogestione indipendente dei sintomi; comprensione della condizione e delle strategie di prevenzione delle recidive; iniziare protocollo ritorno alla corsa",
          "─── RITORNO ALLA CORSA — FASE I (Interval Running) ───",
          "PREREQUISITO: >80% al Functional Assessment; nessun dolore o gonfiore durante le sessioni; warm-up 15 min cammino + cool-down 10 min cammino",
          "Sett. 1: Camm. 5 min / Jog 1 min x 5 rip (x2 sessioni) → Camm. 4 min / Jog 2 min x 5 rip (x2 sessioni)",
          "Sett. 2: Camm. 3 min / Jog 3 min x 5 rip (x2) → Camm. 2 min / Jog 4 min x 5 rip",
          "Sett. 3: Camm. 2 min / Jog 4 min x 5 rip → Camm. 1 min / Jog 5 min x 5 rip (x2) → Ritorno alla corsa",
          "─── RITORNO ALLA CORSA — FASE II (Continuous Running) ───",
          "Sett. 1-2: 20→25 min; Sett. 3: 30→35 min; Sett. 4: 35→40 min; Sett. 5: 40→45 min; Sett. 6-7: 50→60 min; Sett. 8: 60 min",
          "REGOLE: superfici morbide in Fase I; attività non ad impatto nei giorni di riposo; regola del 10% (max +10% km/settimana); aumentare distanza PRIMA di aumentare velocità",
          "─── PROGRAMMA AGILITÀ E PLIOMETRIA ───",
          "FASE I — PROGRESSIONE ANTERIORE: corsa avanti/indietro, lean-to-run, decelerazione 3 passi, figure 8, circolo, ladder; pliometria: shuttle press (bipodale → alternato → monopodal), salti su/da box, forward jumps, broad jump, tuck jumps, backward/forward hops",
          "FASE II — PROGRESSIONE LATERALE: side shuffle, carioca, crossover steps, shuttle run, zig-zag, ladder; lateral jumps over cone, lateral tuck jumps, SL lateral jumps",
          "FASE III — MULTIPLANARE: box drill, star drill, side shuffle con ostacoli, box jumps con cambio direzione, salti 90°-180°",
          "CRITERI RITORNO ALLO SPORT: forza quad/HS/glut ≥90% controlaterale (isokinetic); H:Q ratio ≥70%; hop test ≥90% controlaterale; KOOS-sports >90%; IKDC soggettivo >93; PRRS (Psychological Readiness to Return to Sport)",
        ],
      },
    ],
  },
  // ---- Plantar Fasciitis 2023 ----
  {
    id: 11,
    category: "Piede e Caviglia",
    color: "#1A6B5E",
    icon: "🦶",
    title: "Fascite Plantare / Heel Pain — Revisione 2023",
    source: "Koc et al. | JOSPT 2023;53(12):CPG1-CPG39 | APTA Orthopedics | ChoosePT — Programma domiciliare APTA",
    pdfUrl2: "https://www.choosept.com/health-tips/six-exercises-plantar-fasciitis-heel-pain",
    tags: ["piede", "fascite plantare", "tallone", "heel pain", "plantar fasciitis"],
    summary: "Revisione 2023 delle linee guida per il dolore al tallone e fascite plantare. Aggiornamento che integra oltre 100 nuovi studi con raccomandazioni su stretching, terapia manuale, ortesi, dry needling e splint notturni.",
    sections: [
      {
        title: "Diagnosi e Valutazione",
        content: [
          "Dolore al tallone mediale plantare, tipicamente peggiore ai primi passi al mattino o dopo periodi di riposo",
          "Diagnosi clinica: dolore alla palpazione dell'origine fasciale (inserzione calcaneare mediale)",
          "Fattori di rischio: BMI elevato, ridotta dorsiflessione caviglia, stazione eretta prolungata, calzature inadeguate",
          "Outcome measures: Foot Health Status Questionnaire (FHSQ), PSFS, VAS",
          "Ecografia: utile per conferma diagnostica (ispessimento fascia > 4 mm) ma non necessaria di routine",
          "Diagnosi differenziale: neuropatia del nervo calcaneare mediale, apofisiti (bambini/adolescenti), sindrome del tunnel tarsale, frattura da stress del calcagno",
        ],
      },
      {
        title: "Stretching ed Esercizio (Grado A-B)",
        content: [
          "DEVE (A): stretching specifico della fascia plantare + stretching gastrocnemio/soleo per riduzione dolore a breve e lungo termine",
          "DEVE (A): programmi di rinforzo progressivo, heavy-load training supervisionato e fisioterapia multimodale",
          "Evidenza supporta: riabilitazione supervisionata, esercizi combinati (educazione + terapia manuale + stretching + rinforzo + interventi neurodynamici)",
          "NON indicato: ultrasuoni terapeutici per potenziare l'effetto dello stretching",
        ],
      },
      {
        title: "Terapia Manuale (Grado A-B)",
        content: [
          "DEVE (A): terapia manuale diretta a articolazioni e strutture dei tessuti molli dell'arto inferiore per ridurre restrizioni, dolore e migliorare funzione",
          "La terapia manuale come tecnica singola ha evidenza insufficiente — preferire in combinazione con altre terapie",
          "Tecniche evidenziate: mobilizzazione astragalo-tibiale, mobilizzazione sottoastragalica, manipolazione del piede/caviglia",
        ],
      },
      {
        title: "Ortesi, Taping e Presidi (Grado A-B)",
        content: [
          "DEVE (A): plantari (prefabbricati o su misura) per supporto arco longitudinale mediale e cushioning del tallone — riduzione dolore da 2 settimane a medio termine",
          "DEVE (A): foot taping (rigido o elastico) in combinazione con altri trattamenti per miglioramenti a breve termine di dolore e funzione",
          "PUÒ (B): splint notturni per pazienti con dolore intenso ai primi passi mattutini — riduzione sintomi a breve termine",
          "Dry needling (Grado B): nei trigger points di gastrocnemio, soleo e muscoli plantari per riduzione dolore a breve/lungo termine e miglioramento funzionale",
          "PUÒ (B): shockwave terapia extracorporea (ESWT) come opzione aggiuntiva per casi refrattari",
          "PUÒ: laser terapia di basso livello, fonoforesi come adjunct — evidenza moderata",
        ],
      },
      {
        title: "Programma Domiciliare in 6 Esercizi (ChoosePT \u2014 APTA)",
        content: [
          "FONTE: ChoosePT, American Physical Therapy Association \u2014 Six Exercises for Plantar Fasciitis and Heel Pain (autore Kelly Coleman PT DPT, revisione esperta James E. Zachazewski PT DPT, marzo 2024). \u26A0\uFE0F Materiale divulgativo rivolto ai pazienti, non una linea guida con gradi di evidenza: utile come programma domiciliare da consegnare, da integrare nel piano di trattamento e non da sostituire ad esso.",
          "COSA COMPRENDE IL TRATTAMENTO FISIOTERAPICO secondo il documento: valutazione del cammino e gait training; istruzioni su quando applicare il ghiaccio per dolore e infiammazione; taping temporaneo del piede per sollievo a breve termine; indicazione di plantari, calzature di supporto o splint notturno; insegnamento di esercizi specifici di stretching e rinforzo.",
          "\u2500\u2500\u2500 1. MASSAGGIO DELLA FASCIA PLANTARE \u2500\u2500\u2500",
          "Seduto o in piedi con un piede appoggiato su una pallina o su una bottiglia d'acqua congelata; la bottiglia congelata aggiunge l'effetto del freddo sull'infiammazione.",
          "Rotolare lentamente avanti e indietro sotto il piede, partendo appena sotto la testa dei metatarsi e terminando appena prima del calcagno.",
          "DOSAGGIO: 10 rotolamenti lenti per piede, 2 serie per piede, una volta al giorno.",
          "\u26A0\uFE0F Non deve comparire dolore: la pressione va dosata fino a percepire un allungamento gentile, non oltre.",
          "\u2500\u2500\u2500 2. HEEL RAISE DAL GRADINO \u2500\u2500\u2500",
          "In piedi con l'avampiede sul bordo dell'ultimo gradino e i talloni sospesi nel vuoto.",
          "Abbassare lentamente i talloni sotto il livello del gradino fino a percepire l'allungamento del polpaccio, poi risalire lentamente sull'avampiede.",
          "DOSAGGIO: 10 ripetizioni, pausa, 2 serie complessive, una volta al giorno.",
          "\u26A0\uFE0F Movimento lento e controllato; mantenere l'equilibrio reggendosi al corrimano o a un altro supporto se necessario.",
          "\u2500\u2500\u2500 3. INVERSIONE DI CAVIGLIA CON ELASTICO (seduto a terra) \u2500\u2500\u2500",
          "Seduto a terra con la schiena eretta e le gambe distese in avanti. Accavallare una gamba sull'altra, con l'elastico fissato attorno al piede superiore e passante sotto il piede inferiore; l'estremit\u00E0 dell'elastico resta in mano.",
          "Allontanare lentamente il piede superiore da quello inferiore ruotando la caviglia verso l'interno, poi tornare lentamente alla posizione di partenza.",
          "DOSAGGIO: 10 ripetizioni, 2 serie per piede, una volta al giorno.",
          "\u26A0\uFE0F Evitare qualsiasi movimento dell'anca durante l'esercizio: il lavoro deve restare alla caviglia.",
          "\u2500\u2500\u2500 4. TOE TOWEL SCRUNCHES (raccolta dell'asciugamano con le dita) \u2500\u2500\u2500",
          "In piedi o seduto con la schiena eretta, un piede appoggiato su un asciugamano e le dita divaricate.",
          "Flettere le dita per raccogliere l'asciugamano e tirarlo verso di s\u00E9.",
          "DOSAGGIO: 10-15 raccolte, 2 serie per piede, da una a tre volte al giorno.",
          "PROGRESSIONE: quando l'esercizio diventa facile, appoggiare un piccolo peso (circa 1-2 kg) all'estremit\u00E0 opposta dell'asciugamano.",
          "\u26A0\uFE0F Tutto il piede deve restare a terra: solo le dita eseguono il movimento.",
          "\u2500\u2500\u2500 5. STRETCHING SPECIFICO DELLA FASCIA PLANTARE (seduto) \u2500\u2500\u2500",
          "Seduto su una sedia, accavallare una gamba sull'altra portando la caviglia sopra il ginocchio controlaterale.",
          "Con una mano che tiene la caviglia e l'altra le dita del piede, tirare gentilmente le dita all'indietro fino a percepire l'allungamento sotto la pianta.",
          "DOSAGGIO: mantenere 20 secondi, 3 ripetizioni per ciascun piede, una volta al giorno.",
          "\u26A0\uFE0F Movimento lento e controllato.",
          "\u2500\u2500\u2500 6. STRETCHING DEL POLPACCIO AL MURO \u2500\u2500\u2500",
          "In piedi di fronte al muro alla distanza di un braccio, mani appoggiate sulla parete.",
          "Mantenendo entrambi i piedi piatti a terra, estendere una gamba indietro e flettere quella anteriore fino a percepire l'allungamento nel polpaccio della gamba posteriore.",
          "DOSAGGIO: mantenere 20 secondi, 3 ripetizioni per ciascuna gamba, una volta al giorno.",
          "\u2500\u2500\u2500 QUANDO RIVOLGERSI AL FISIOTERAPISTA \u2500\u2500\u2500",
          "Se il dolore al tallone non migliora dopo una o due settimane, oppure se tende a ripresentarsi, serve un programma personalizzato: il fisioterapista identifica i fattori che sostengono la fascite, guida la progressione degli esercizi e imposta la prevenzione delle recidive.",
          "\u2500\u2500\u2500 RIFERIMENTI CITATI NEL DOCUMENTO \u2500\u2500\u2500",
          "Thong-On S, et al. Effects of strengthening and stretching exercises on the temporospatial gait parameters in patients with plantar fasciitis: a randomized controlled trial. Ann Rehabil Med. 2019;43(6):662-676.",
          "Caratun R, Rutkowski NA, Finestone HM. Stubborn heel pain: treatment of plantar fasciitis using high-load strength training. Can Fam Physician. 2018;64(1):44-46.",
          "Fraser JJ, Glaviano NR, Hertel J. Utilization of physical therapy intervention among patients with plantar fasciitis in the United States. J Orthop Sports Phys Ther. 2017;47(2):49-55.",
          "Digiovanni BF, Nawoczenski DA, Malay DP, et al. Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis: a prospective clinical trial with two-year follow-up. J Bone Joint Surg Am. 2006;88(8):1775-1781."
        ]
      },
    ],
  },
  // ---- Achilles 2024 ----
  {
    id: 12,
    category: "Piede e Caviglia",
    color: "#1A6B5E",
    icon: "🦶",
    title: "Tendinopatia Achillea (Porzione Mediana) — Revisione 2024",
    source: "Chimenti et al. | JOSPT 2024;54(12):CPG1-CPG32 | APTA Orthopedics | Baxter et al. Med Sci Sports Exerc 2021;53(1):124-130",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/32658037/",
    tags: ["achille", "tendinopatia", "tendine", "piede", "Achilles tendinopathy"],
    summary: "Terza revisione delle CPG APTA sulla tendinopatia della porzione mediana del tendine d'Achille. Il carico tendineo progressivo rimane il trattamento cardine, esteso ora a modalità isometrica, isotonica e pliometrica.",
    sections: [
      {
        title: "Diagnosi e Classificazione",
        content: [
          "Dolore alla porzione mediana del tendine d'Achille (2-7 cm dall'inserzione calcaneare), rigidità e deficit di forza",
          "Segni clinici: Arc Sign positivo (dolore si sposta con la dorsiflessione), Royal London Hospital Test positivo",
          "VISA-A score: strumento di outcome validato per tendinopatia achillea (0-100)",
          "Imaging: ecografia come prima scelta (ispessimento, neovascolarizzazione); RMN per casi complessi o sospetta rottura parziale",
          "Diagnosi differenziale: borsite retrocalcaneare, tendinopatia inserzionale, tendinosi parategumentosa, rottura parziale",
          "Fattori di rischio: improvviso aumento del volume di allenamento, scarso riposo, rigidità caviglia, BMI elevato, utilizzo di fluorochinoloni",
        ],
      },
      {
        title: "Carico Tendineo — Trattamento Cardine (Grado A)",
        content: [
          "DEVE (A — prima linea): programma di carico tendineo progressivo per ridurre dolore e migliorare funzione",
          "Il termine 'carico tendineo' include: esercizio eccentrico, concentrico, isometrico, isotnico, heavy slow resistance (HSR) e pliometrico dei flessori plantari",
          "Esercitarsi almeno 3 volte/settimana, alla massima intensità tollerata dal paziente",
          "NOVITÀ 2024: il programma NON è limitato al solo eccentrico — protocolli HSR (concentric/eccentric) e isometrico ugualmente supportati",
          "Miglioramenti clinicamente significativi al VISA-A già a 2 settimane; picco attorno a 12 settimane (~18-21 punti)",
          "Controindicazioni relative al carico pesante: fragilità tendinea presunta (uso steroidi sistemici, storia fluorochinoloni, disfunzione metabolica grave)",
        ],
      },
      {
        title: "Terapie Fisiche Adiuvanti (Grado B-C)",
        content: [
          "PUÒ (B): shockwave terapia extracorporea (ESWT) come aggiunta al programma di carico eccentrico in pazienti refrattari",
          "PUÒ (B): dry needling nei trigger points del gastrocnemio/soleo per riduzione dolore",
          "PUÒ (B): laser terapia di basso livello (LLLT) in associazione con esercizio",
          "PUÒ (C): taping (kinesio tape) per riduzione dolore a breve termine durante attività funzionali",
          "PUÒ (C): splint notturni per ridurre la rigidità mattutina",
          "NON DEVE (A): ultrasuoni terapeutici come trattamento isolato — nessun beneficio dimostrato",
        ],
      },
      {
        title: "Interventi da Evitare / Non Raccomandati",
        content: [
          "NON RACCOMANDATO: iniezioni di corticosteroidi — rischio di danno strutturale al tendine e aumento del rischio di rottura",
          "NON DEVE essere trattamento di prima linea: iniezioni PRP — evidenza non superiore al placebo (RCT Kearney 2021)",
          "NON indicata: trazione meccanica per tendinopatia achillea",
          "ATTENZIONE: terapia passiva isolata (massaggio, ultrasuoni, elettrostimolazione) senza programma di carico — insufficiente come trattamento primario",
          "Approach 'wait-and-see' inferiore all'esercizio di carico progressivo in 3 sistematic reviews",
        ],
      },
      {
        title: "Progressione del Carico sul Tendine d'Achille \u2014 4 Tier (Baxter et al. 2021)",
        content: [
          "FONTE: Baxter JR, Corrigan P, Hullfish TJ, O'Rourke P, Silbernagel KG. Exercise progression to incrementally load the Achilles tendon. Med Sci Sports Exerc. 2021;53(1):124-130. doi:10.1249/MSS.0000000000002459",
          "METODO: 8 adulti sani hanno eseguito 30 esercizi riabilitativi con motion capture 3D e pedane di forza. Per ciascun esercizio \u00E8 stato calcolato un loading index combinando picco di carico (peso 50%), impulso di carico (30%) e loading rate (20%), normalizzati sui rispettivi valori massimi. Tier 1 <0.25 | Tier 2 0.25-0.50 | Tier 3 0.50-0.75 | Tier 4 >0.75.",
          "RANGE COMPLESSIVO: il carico di picco varia di oltre 12 volte, da 0.5 pesi corporei nel calf raise seduto bipodalico a 7.3 pesi corporei nell'hop monopodalico in avanti.",
          "\u2500\u2500\u2500 TIER 1 \u2014 CARICO MINIMO (loading index <0.25) \u2500\u2500\u2500",
          "Calf raise seduto bipodalico \u2014 index 0.100 | picco 0.5 BW | impulso 0.6 BW\u00B7s | rate 2.7 BW/s",
          "Calf raise seduto monopodalico \u2014 index 0.128 | picco 0.7 BW | impulso 0.7 BW\u00B7s | rate 3.6 BW/s",
          "Squat \u2014 index 0.167 | picco 1.1 BW | impulso 0.8 BW\u00B7s | rate 4.0 BW/s",
          "Step up basso, arto guida \u2014 index 0.213 | picco 1.6 BW | impulso 0.7 BW\u00B7s | rate 10.1 BW/s",
          "Step up alto, arto guida \u2014 index 0.241 | picco 1.8 BW | impulso 0.8 BW\u00B7s | rate 11.4 BW/s",
          "Calf raise in piedi bipodalico \u2014 index 0.248 | picco 1.6 BW | impulso 1.2 BW\u00B7s | rate 8.7 BW/s",
          "\u2500\u2500\u2500 TIER 2 \u2014 CARICO MODERATO (0.25-0.50) \u2500\u2500\u2500",
          "Calf raise rimbalzante bipodalico \u2014 index 0.282 | picco 2.5 BW | impulso 0.5 BW\u00B7s | rate 19.9 BW/s",
          "Affondo, arto anteriore \u2014 index 0.285 | picco 2.1 BW | impulso 1.2 BW\u00B7s | rate 8.4 BW/s",
          "Step down basso, arto guida \u2014 index 0.310 | picco 2.2 BW | impulso 0.9 BW\u00B7s | rate 22.9 BW/s",
          "Step up basso, arto posteriore \u2014 index 0.341 | picco 2.9 BW | impulso 1.1 BW\u00B7s | rate 14.2 BW/s",
          "Step down alto, arto posteriore \u2014 index 0.342 | picco 2.6 BW | impulso 1.2 BW\u00B7s | rate 16.6 BW/s",
          "CAMMINO (fase di appoggio) \u2014 index 0.359 | picco 3.3 BW | impulso 0.8 BW\u00B7s | rate 18.7 BW/s",
          "Step down basso, arto posteriore \u2014 index 0.369 | picco 2.9 BW | impulso 1.3 BW\u00B7s | rate 15.1 BW/s",
          "Salto in avanti bipodalico \u2014 index 0.414 | picco 3.2 BW | impulso 1.2 BW\u00B7s | rate 25.4 BW/s",
          "Step down alto, arto guida \u2014 index 0.429 | picco 3.2 BW | impulso 1.1 BW\u00B7s | rate 34.2 BW/s",
          "Step up alto, arto posteriore \u2014 index 0.432 | picco 3.7 BW | impulso 1.1 BW\u00B7s | rate 22.1 BW/s",
          "Affondo, arto posteriore \u2014 index 0.435 | picco 2.4 BW | impulso 2.4 BW\u00B7s | rate 11.5 BW/s",
          "Countermovement jump bipodalico \u2014 index 0.474 | picco 3.4 BW | impulso 1.5 BW\u00B7s | rate 32.5 BW/s",
          "Calf raise rimbalzante monopodalico \u2014 index 0.476 | picco 4.2 BW | impulso 1.1 BW\u00B7s | rate 26.2 BW/s",
          "Calf raise in piedi monopodalico \u2014 index 0.493 | picco 3.0 BW | impulso 2.5 BW\u00B7s | rate 13.1 BW/s",
          "\u2500\u2500\u2500 TIER 3 \u2014 CARICO ELEVATO (0.50-0.75) \u2500\u2500\u2500",
          "Drop jump bipodalico \u2014 index 0.519 | picco 3.6 BW | impulso 1.7 BW\u00B7s | rate 34.4 BW/s",
          "Hopping sul posto bipodalico \u2014 index 0.555 | picco 4.8 BW | impulso 0.6 BW\u00B7s | rate 56.3 BW/s",
          "CORSA (fase di appoggio) \u2014 index 0.600 | picco 5.2 BW | impulso 0.7 BW\u00B7s | rate 58.1 BW/s",
          "Hopping in avanti bipodalico \u2014 index 0.656 | picco 5.2 BW | impulso 1.3 BW\u00B7s | rate 58.4 BW/s",
          "Countermovement jump monopodalico \u2014 index 0.705 | picco 4.9 BW | impulso 2.4 BW\u00B7s | rate 46.2 BW/s",
          "Salto in avanti monopodalico \u2014 index 0.740 | picco 5.4 BW | impulso 2.3 BW\u00B7s | rate 46.9 BW/s",
          "\u2500\u2500\u2500 TIER 4 \u2014 CARICO MASSIMO (>0.75) \u2500\u2500\u2500",
          "Hopping sul posto monopodalico \u2014 index 0.764 | picco 6.7 BW | impulso 1.3 BW\u00B7s | rate 62.1 BW/s",
          "Drop jump monopodalico \u2014 index 0.852 | picco 5.5 BW | impulso 3.0 BW\u00B7s | rate 59.2 BW/s",
          "Hopping laterale monopodalico \u2014 index 0.904 | picco 7.3 BW | impulso 2.1 BW\u00B7s | rate 67.7 BW/s",
          "Hopping in avanti monopodalico \u2014 index 0.924 | picco 7.3 BW | impulso 2.3 BW\u00B7s | rate 67.1 BW/s \u2014 CARICO MASSIMO tra tutti gli esercizi testati",
          "\u2500\u2500\u2500 DUE PROGRESSIONI PARALLELE \u2500\u2500\u2500",
          "MOVIMENTI ISOLATI DI CAVIGLIA: calf raise seduto (tier 1) \u2192 calf raise monopodalico (tier 2) \u2192 hopping bipodalico (tier 3) \u2192 hop monopodalico in avanti (tier 4).",
          "MOVIMENTI MULTIARTICOLARI: squat (tier 1) \u2192 step up o step down (tier 2) \u2192 countermovement jump monopodalico (tier 3) \u2192 drop jump monopodalico (tier 4).",
          "Le due progressioni sono equivalenti come carico: si sceglie in base alle preferenze e ai vincoli del paziente mantenendo gli stessi obiettivi di carico sul tendine.",
          "\u2500\u2500\u2500 IMPLICAZIONI CLINICHE \u2500\u2500\u2500",
          "CAMMINO E CORSA COME PIETRE MILIARI: cammino e corsa hanno un proprio loading index (0.359 e 0.600) e servono da riferimento clinico. Se il paziente cammina senza problemi, tollera gli esercizi di tier 1 e i tier 2 pi\u00F9 bassi; quando corre in sicurezza, pu\u00F2 eseguire anche calf raise monopodalici e drop jump bipodalici.",
          "\u26A0\uFE0F I SOLI CALF RAISE NON BASTANO: il calf raise seduto carica 0.5-0.7 BW mentre la corsa arriva a 5.2 BW e l'hop monopodalico a 7.3. Un programma fermo ai soli calf raise non prepara il tendine alle richieste del ritorno alla corsa.",
          "MOVIMENTI ASIMMETRICI: nell'affondo l'arto posteriore riceve un carico superiore del 52% rispetto all'anteriore (0.435 contro 0.285), soprattutto per il maggior tempo sotto carico. Nello step up l'arto posteriore \u00E8 sempre pi\u00F9 caricato dell'arto guida, a qualsiasi altezza del gradino. Negli step down non emergono differenze chiare. Questo permette di dosare il carico lato per lato.",
          "ECCENTRICO NON SUPERIORE AL CONCENTRICO: nelle fasi concentrica ed eccentrica dell'hopping monopodalico picchi e impulsi risultano molto simili. Gli autori ipotizzano che il meccanismo determinante per il recupero tendineo non sia l'eccentrico in s\u00E9 ma l'impulso di carico, concetto analogo al 'tempo sotto tensione'.",
          "PERSONALIZZAZIONE SECONDO LA PATOLOGIA: dopo rottura del tendine d'Achille il parametro da sorvegliare \u00E8 soprattutto il loading rate, per evitare la ri-rottura; nella tendinopatia, invece, massimizzare l'impulso di carico pu\u00F2 essere il fattore critico per stimolare il rimodellamento.",
          "LIMITI DELLO STUDIO: campione di 8 soggetti sani e giovani, senza storia di lesione achillea; il carico tendineo \u00E8 stato stimato dividendo il momento di flessione plantare per un braccio di leva costante di 5 cm, non misurato direttamente; i fattori di ponderazione del loading index derivano dall'esperienza clinica degli autori e sono modificabili."
        ]
      },
    ],
  },
  {
    id: 17,
    category: "Ginocchio",
    color: "#0E6B5E",
    icon: "🦵",
    title: "Riabilitazione Post-Ricostruzione LCA (ACLR) — CPG Aspetar 2023",
    source: "Kotsifaki et al. | Br J Sports Med 2023;57(9):500-520 | Aspetar Hospital, Doha | AGREE II + GRADE",
    pdfUrl: "https://bjsm.bmj.com/content/57/9/500",
    tags: ["ginocchio", "LCA", "ACL", "ricostruzione", "riabilitazione", "ritorno allo sport", "RTS", "esercizio"],
    summary: "Linea guida clinica Aspetar per la riabilitazione dopo ricostruzione del legamento crociato anteriore (ACLR). Basata su 140 RCT e 5231 pazienti. Copre fasi riabilitative, modalità fisiche, esercizio, criteri di ritorno alla corsa e allo sport. Approccio accelerato precoce raccomandato.",
    sections: [
      {
        title: "Timing e Struttura della Riabilitazione",
        content: [
          "RIABILITAZIONE PREOPERATORIA (consigliata): può migliorare ROM e forza del quadricipite a 3 mesi post-op (effect size moderato); può ridurre il tempo al ritorno all'attività prelesionale; almeno 1 visita raccomandata per verificare attivazione volontaria del quadricipite, assenza di contrattura in flessione e per educare il paziente",
          "RIABILITAZIONE NON SUPERVISIONATA: accettabile per pazienti motivati senza accesso alla fisioterapia — i programmi devono essere comunque individualizzati, prescritti e monitorati",
          "DURATA: individuale e basata su criteri — non su tempistiche fisse; protocollo accelerato (19 settimane) non inferiore a protocolli più lunghi per lassità, forza e funzione soggettiva",
          "PRINCIPIO CARDINE: progressione basata su criteri oggettivi + requisiti minimi di tempo per la guarigione del graft",
        ],
      },
      {
        title: "Modalità Fisiche — Fase Precoce",
        content: [
          "CRIOTERAPIA (raccomandata): riduce uso di farmaci, dolore soggettivo e migliora soddisfazione nelle prime 3 giorni post-op; crioterapia compressiva più efficace della sola crioterapia; applicare con cautela per evitare ustioni da freddo",
          "NMES — Neuromuscular Electrical Stimulation (raccomandata): aggiunta alla riabilitazione standard → miglioramento moderato della forza del quadricipite; riduzione significativa del gonfiore articolare nelle fasi precoce e intermedia; usare anche durante attività funzionali nella fase precoce per facilitare i guadagni di forza",
          "BFR — Blood Flow Restriction a basso carico (considerare): può migliorare forza quadricipite e femorali, prevenire atrofia disusale in fase precoce; attenzione alle controindicazioni (malattie cardiovascolari, edema esteso, irritazione cutanea)",
          "CPM — Continuous Passive Motion: NON raccomandata — non superiore al movimento attivo per ROM, dolore e gonfiore; aggiunge costi e tempi",
          "KINESIO TAPE: effetto terapeutico probabile minimo o nullo — basso costo e nessun evento avverso, ma non raccomandato routinariamente",
          "DRY NEEDLING al vastus medialis nella fase precoce: NON raccomandato — 14% di rischio di ematomi; dolore significativo nell'ora post-intervento",
          "WHOLE-BODY VIBRATION: può essere aggiunto per migliorare forza quadricipite e balance statico, ma NON può sostituire la riabilitazione convenzionale",
        ],
      },
      {
        title: "Esercizio — Iniziazione e Progressione",
        content: [
          "MOBILIZZAZIONE ARTICOLARE ATTIVA: iniziare immediatamente dopo l'intervento — l'immobilizzazione non riduce il dolore e causa atrofia che rallenta il recupero",
          "CARICO PRECOCE (prima settimana): progressivo e controllato secondo tolleranza del paziente e indicazioni chirurgiche",
          "ESERCIZI ISOMETRICI (prime 2 settimane): contrazioni statiche del quadricipite e SLR sicuri e possono accelerare il recupero del ROM senza compromettere il graft",
          "OKC — Open Kinetic Chain (dalla 4a settimana): ROM limitato 90°-45° di flessione; nessuna differenza in lassità rispetto a OKC tardiva (12 settimane); monitorare dolore anteriore al ginocchio; grafi HS più vulnerabili rispetto al BTB all'OKC precoce",
          "LEG PRESS (dalla 3a settimana, graft HS): 0°-45° — migliora funzione soggettiva e outcomes funzionali; monitorare dolore anteriore",
          "ECCENTRICO su cyclette/stepper (dalla 3a settimana): tra 20°-60° di flessione — maggiori guadagni di forza e ipertrofia del quadricipite rispetto all'inizio a 12 settimane; effetti persitenti a 1 anno",
          "COMBINAZIONE CKC + OKC: significativamente migliore per forza del quadricipite e ritorno allo sport rispetto a solo CKC",
        ],
      },
      {
        title: "Rinforzo, Controllo Motorio e Training Avanzato",
        content: [
          "FORZA + CONTROLLO MOTORIO: entrambi indispensabili e complementari — il controllo motorio non può sostituire il rinforzo e viceversa",
          "ECCENTRICO + CONCENTRICO: combinare per ottimizzare forza e outcomes funzionali; eccentric overload non superiore al training convenzionale per i guadagni di forza del quadricipite",
          "ISOTONIC vs ISOKINETIC: il programma combinato isotonic+isokinetic ottiene i migliori risultati di forza; l'isokinetic esclusivo non è raccomandato come unica modalità di rinforzo",
          "PLIOMETRICO + AGILITÀ (fase avanzata): migliora funzione soggettiva e outcomes funzionali rispetto alla cura standard; la combinazione eccentrico+pliometrico è più efficace delle singole componenti per balance, funzione e prontezza psicologica",
          "CORE STABILITY: aggiunta alla riabilitazione standard → migliora andatura, funzione soggettiva e ROM; includere nel protocollo",
          "TERAPIA ACQUATICA: avviare 3-4 settimane post-op (dopo cicatrizzazione completa); migliora funzione soggettiva nella fase precoce; nessuna differenza rispetto al programma a terra nelle fasi successive",
        ],
      },
      {
        title: "Ritorno alla Corsa e allo Sport — Criteri Aspetar",
        content: [
          "RITORNO ALLA GUIDA: non prima di poter attivare il freno in sicurezza in un'emergenza simulata — circa 4-6 settimane per ACLR destro, 2-3 settimane per sinistro",
          "CRITERI PER RITORNO ALLA CORSA: ROM flessione ≥95%, full extension ROM, no versamento (o traccia), LSI quadricipite >80%, LSI impulso eccentrico CMJ >80%, jogging in acqua e Alter-G senza dolore, single-leg hopping ('pogos') senza dolore",
          "CRITERI PER RITORNO ALLO SPORT (professionisti): assenza dolore e gonfiore, ROM completo, ginocchio stabile (pivot shift, Lachman, lassimetro), funzione soggettiva e prontezza psicologica normalizzate (IKDC, ACL-RSI, Tampa Scale)",
          "FORZA: picco di coppia isokinetic quadricipite e femorali a 60°/s con 100% di simmetria (per sport pivoting ad alto impatto); ripristinare almeno i valori assoluti pre-operatori",
          "SALTI: CMJ e drop jump >90% simmetria in altezza e impulso concentrico/eccentrico; RSI (altezza/tempo) >1.3 bilaterale, >0.5 monopodal per sport di campo",
          "BIOMECCANICA: normalizzare simmetria (>90%) per forze di reazione al suolo verticali e biomeccanica del ginocchio in salto verticale/orizzontale e durante corsa ad alta velocità + cambi di direzione",
          "IMPORTANTE: clearance dal centro clinico ≠ ritorno alla competizione — necessaria fase di transizione con progressiva esposizione allo sport prima del ritorno unrestricted",
        ],
      },
    ],
  },
  {
    id: 18,
    category: "Ginocchio",
    color: "#0E6B5E",
    icon: "🦵",
    title: "Gestione della Patologia Meniscale Acuta Isolata — CPG AAOS 2024",
    source: "AAOS Clinical Practice Guideline | Luglio 2024 | www.aaos.org/ampcpg",
    pdfUrl: "https://www.aaos.org/ampcpg",
    tags: ["ginocchio", "menisco", "lesione meniscale", "meniscectomia", "riparazione meniscale", "MRI", "McMurray", "Thessaly"],
    summary: "Linea guida AAOS 2024 per la diagnosi e il trattamento della lesione meniscale acuta isolata (escluse lesioni degenerative e associate a rottura LCA). Include indicazioni diagnostiche (MRI, esame clinico), trattamento conservativo e chirurgico, e timing della chirurgia.",
    sections: [
      {
        title: "Diagnosi — Imaging e Esame Clinico",
        content: [
          "MRI (Raccomandazione FORTE): è la modalità di imaging preferita per la diagnosi di lesione meniscale acuta — alta accuratezza diagnostica; la TC artrogra o l'ecografia possono essere utilizzate quando la RMN non è disponibile o controindicata",
          "ESAME FISICO (Raccomandazione MODERATA): la combinazione di più test clinici aumenta l'accuratezza diagnostica rispetto ai singoli test",
          "TEST RACCOMANDATI: dolore alla palpazione della rima articolare (joint line tenderness) + McMurray Test (rotazione con flessione) + Thessaly Test (rotazione in monopodalismo a 20°) — combinazione preferibile",
          "POPOLAZIONE TARGET: pazienti giovani e attivi (spesso atleti liceo/università) con lesione traumatica acuta da rotazione-flessione o impatto diretto; ESCLUSI: lesioni croniche/degenerative, lesioni associate a rottura del LCA",
          "IMPATTO: le lesioni meniscali acute possono avere significativo impatto fisico ed emotivo; ritorno allo sport post-chirurgico: 4-7 mesi",
        ],
      },
      {
        title: "Trattamento Chirurgico — Principi e Indicazioni",
        content: [
          "PRESERVAZIONE MENISCALE (Raccomandazione MODERATA): quando indicata la chirurgia, deve essere preservato quanto più possibile il tessuto meniscale funzionale per ridurre il rischio di osteoartrite",
          "LESIONI DISPLACCATE O DISPLACANTI (Consenso): lesioni che limitano il ROM → beneficio dalla chirurgia acuta; non attendere",
          "TIMING OTTIMALE (opzione — evidenza limitata): pazienti con fallimento del trattamento conservativo che intervengono entro 6 mesi dall'infortunio hanno outcomes migliori rispetto all'intervento tardivo",
          "RIPARAZIONE vs MENISCECTOMIA PARZIALE (opzione — evidenza limitata): la riparazione meniscale migliora gli outcomes rispetto alla meniscectomia parziale nelle lesioni acute con potenziale di guarigione — favorire sempre la riparazione quando possibile",
          "CANDIDATURA ALLA RIPARAZIONE (consenso): pazienti con lesione sintomatica suscettibile di riparazione → considerare intervento precoce per ottimizzare le probabilità di successo",
          "POTENZIAMENTO BIOLOGICO (opzione — evidenza limitata): venting del midollo osseo o PRP possono essere considerati per migliorare gli outcomes nella riparazione chirurgica di lesioni meniscali acute",
        ],
      },
      {
        title: "Trattamento Conservativo e Fisioterapia",
        content: [
          "FISIOTERAPIA (consenso): parte integrante dell'algoritmo terapeutico — sia come trattamento primario sia come recupero post-chirurgico",
          "TRATTAMENTO CONSERVATIVO (opzione): per lesioni non displacate senza indicazione chirurgica immediata → fisioterapia/riabilitazione come opzione di prima linea",
          "CONTENUTO DELLA FKT: rinforzo muscolare (quadricipite, femorali, stabilizzatori dell'anca), esercizi di controllo motorio, propriocezione, progressione funzionale verso l'attività sportiva",
          "CRITERI DI FALLIMENTO CONSERVATIVO (opzione): pazienti con lesione acuta che falliscono il trattamento conservativo → la chirurgia entro 6 mesi migliora gli outcomes",
          "RIABILITAZIONE POST-CHIRURGICA: fase di protezione (0-6 settimane, ROM limitato e carico progressivo) → rinforzo attivo → progressione funzionale → ritorno allo sport (4-7 mesi post-chirurgia)",
          "NOTA: questa CPG è la prima a stabilire linee guida specifiche per le lesioni meniscali acute — il corpo di evidenza è relativamente limitato rispetto ad altre patologie ortopediche e sono necessarie ulteriori ricerche ad alto livello",
        ],
      },
    ],
  },
];

const COLORS = {
  Anca:"#1B4F8A", Ginocchio:"#0E6B5E", Spalla:"#5C3A8C",
  Rachide:"#8B3A3A", Gomito:"#6B3A2E",
  Traumatologia:"#7A6010", "Piede e Caviglia":"#1A6B5E", "Prescrizione Esercizio":"#2E6B8A", Geriatria:"#2E6B4F", "Mano e Polso":"#8A5A2B", Reumatologia:"#6B2D5C",
};
const CATS = ["Tutte",...new Set(guidelines.map(g=>g.category))];

export default function OrthoGuide() {
  const [sel, setSel] = useState(null);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("Tutte");
  const [open, setOpen] = useState({});
  const [saved, setSaved] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const apply = (m) => { setIsMobile(m.matches); setSideOpen(!m.matches); };
    apply(mq);
    const onChange = (e) => apply(e);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const filtered = useMemo(() => guidelines.filter(g => {
    const q = search.toLowerCase();
    const matchQ = !q || g.title.toLowerCase().includes(q) ||
      g.tags.some(t=>t.includes(q)) || g.category.toLowerCase().includes(q);
    const matchC = cat === "Tutte" || g.category === cat;
    return matchQ && matchC;
  }), [search, cat]);

  const pick = (g) => {
    setSel(g);
    setOpen({});
    if (isMobile) setSideOpen(false);
  };
  const toggleSec = (i) => setOpen(o => ({...o, [i]: !o[i]}));
  const toggleSave = (id, e) => { e.stopPropagation(); setSaved(s => s.includes(id) ? s.filter(x=>x!==id) : [...s,id]); };
  const expandAll = () => { if(!sel) return; const o={}; sel.sections.forEach((_,i)=>o[i]=true); setOpen(o); };
  const collapseAll = () => setOpen({});

  const c = sel ? COLORS[sel.category] : "#1e40af";

  const S = {
    app:{display:"flex",height:"100vh",fontFamily:"system-ui,sans-serif",background:"#f8fafc",overflow:"hidden"},
    side:{width:isMobile?"100%":320,minWidth:isMobile?"100%":320,display:sideOpen?"flex":"none",flexDirection:"column",background:"#fff",borderRight:isMobile?"none":"1px solid #e2e8f0",overflow:"hidden"},
    sideHead:{padding:"14px 16px",borderBottom:"1px solid #e2e8f0",background:"#1e3a5f",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10},
    sideToggle:{flexShrink:0,border:"1px solid rgba(255,255,255,.3)",background:"rgba(255,255,255,.1)",color:"#fff",borderRadius:8,width:34,height:34,fontSize:16,lineHeight:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},
    openBar:{display:"flex",flexDirection:isMobile?"column":"row",alignItems:"center",gap:isMobile?6:10,padding:isMobile?"12px 16px":"10px 16px",borderBottom:"1px solid #e2e8f0",background:"#fff",position:"sticky",top:0,zIndex:5},
    openBtn:{border:isMobile?"none":"1px solid #e2e8f0",background:isMobile?"#1e3a5f":"#f8fafc",color:isMobile?"#fff":"#1e3a5f",borderRadius:isMobile?12:8,padding:isMobile?"16px 20px":"8px 14px",fontSize:isMobile?17:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:isMobile?10:7,width:isMobile?"100%":"auto",boxShadow:isMobile?"0 3px 10px rgba(30,58,95,.28)":"none"},
    logoRow:{display:"flex",alignItems:"center",gap:9},
    logoImg:{height:26,width:"auto",flexShrink:0},
    logo:{fontSize:19,fontWeight:700,color:"#fff",fontFamily:"Georgia,serif"},
    poweredBy:{marginTop:6,fontSize:12,color:"#94a3b8",letterSpacing:.3},
    poweredByStrong:{color:"#64748b",fontWeight:600},
    welcomeBtn:{marginTop:26,border:"none",background:"#1e3a5f",color:"#fff",borderRadius:12,
      padding:"16px 26px",fontSize:17,fontWeight:700,cursor:"pointer",display:"flex",
      alignItems:"center",justifyContent:"center",gap:10,width:"100%",maxWidth:340,
      boxShadow:"0 3px 10px rgba(30,58,95,.28)"},
    logoSub:{fontSize:11,color:"#93c5fd",marginTop:2},
    searchBox:{margin:"12px 0 8px",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:isMobile?16:13,outline:"none",width:"100%",boxSizing:"border-box"},
    catBar:{display:"flex",gap:isMobile?7:5,padding:isMobile?"2px 16px 12px":"0 16px 10px",flexWrap:"wrap"},
    catBtn:{padding:isMobile?"9px 15px":"6px 13px",borderRadius:20,border:"1px solid #e2e8f0",fontSize:isMobile?14:12.5,fontWeight:600,cursor:"pointer",background:"#f8fafc",color:"#64748b"},
    catBtnA:{background:"#1e3a5f",color:"#fff",border:"1px solid #1e3a5f"},
    list:{flex:1,overflowY:"auto",padding:"8px"},
    card:{width:"100%",textAlign:"left",padding:"12px 14px",border:"1px solid #e2e8f0",borderRadius:10,marginBottom:8,cursor:"pointer",background:"#fff",transition:"all .15s"},
    cardA:{borderColor:"#1e3a5f",background:"#f0f4ff"},
    cardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},
    pill:{padding:"2px 8px",borderRadius:12,fontSize:11,fontWeight:600},
    cardTitle:{fontSize:13,fontWeight:600,color:"#1e293b",lineHeight:1.4,marginBottom:4},
    cardSrc:{fontSize:11,color:"#94a3b8",marginBottom:6},
    tags:{display:"flex",gap:4,flexWrap:"wrap"},
    tag:{padding:"1px 6px",background:"#f1f5f9",color:"#64748b",borderRadius:6,fontSize:10},
    main:{flex:1,overflow:"auto",display:(isMobile&&sideOpen)?"none":"flex",flexDirection:"column"},
    welcome:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,color:"#94a3b8",gap:12,padding:40},
    detailHead:{padding:isMobile?"16px 16px 14px":"24px 28px 16px",borderBottom:"1px solid #e2e8f0"},
    metaRow:{display:"flex",gap:8,alignItems:"center",marginBottom:10,flexWrap:"wrap"},
    srcTag:{fontSize:11,color:"#64748b",background:"#f1f5f9",padding:"3px 8px",borderRadius:6},
    detailTitle:{fontSize:isMobile?19:22,fontWeight:700,color:"#1e293b",fontFamily:"Georgia,serif",margin:"0 0 8px"},
    summary:{fontSize:14,color:"#475569",lineHeight:1.6,margin:"0 0 10px"},
    toolbar:{display:"flex",gap:8,padding:isMobile?"10px 16px":"10px 28px",borderBottom:"1px solid #f1f5f9",background:"#fafafa"},
    tbBtn:{padding:"6px 14px",borderRadius:8,border:"1px solid #e2e8f0",fontSize:12,cursor:"pointer",background:"#fff",color:"#475569"},
    sections:{padding:isMobile?"12px 16px 40px":"16px 28px",display:"flex",flexDirection:"column",gap:8},
    secBtn:{width:"100%",textAlign:"left",padding:"12px 16px",borderRadius:10,border:"1px solid #e2e8f0",background:"#fff",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:14,fontWeight:600,color:"#1e293b"},
    secContent:{padding:"12px 16px 16px",borderTop:"1px solid #f1f5f9"},
    item:{display:"flex",gap:8,padding:"5px 0",alignItems:"flex-start"},
    bullet:{width:6,height:6,borderRadius:"50%",marginTop:6,flexShrink:0},
    itemText:{fontSize:13,color:"#374151",lineHeight:1.55},
    saveBtn:{padding:"4px 12px",borderRadius:8,border:"1px solid",fontSize:12,cursor:"pointer",background:"transparent"},
    bkm:{padding:"6px 8px",fontSize:13,cursor:"pointer",background:"none",border:"none",color:"#94a3b8"},
    disclaimer:{fontSize:11,color:"#92400e",background:"#fffbeb",padding:"6px 12px",borderRadius:8,border:"1px solid #fde68a",margin:isMobile?"0 16px 12px":"0 28px 12px"},
  };

  return (
    <div style={S.app}>
      {/* SIDEBAR */}
      <aside style={S.side}>
        <div style={S.sideHead}>
          <div>
            <div style={S.logoRow}>
              <img
                src="orthobro-mark.png"
                alt=""
                style={S.logoImg}
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <span style={S.logo}>OrthoBro</span>
            </div>
            <div style={S.logoSub}>Linee Guida Ortopediche Evidence-Based</div>
          </div>
          <button
            style={S.sideToggle}
            onClick={() => setSideOpen(false)}
            title={isMobile ? "Chiudi elenco" : "Nascondi barra laterale"}
            aria-label="Nascondi elenco guide"
          >
            {isMobile ? "\u2715" : "\u2039"}
          </button>
        </div>
        <div style={{padding:"12px 16px 0"}}>
          <input
            style={S.searchBox}
            placeholder="🔍 Cerca guida..."
            value={search}
            onChange={e=>setSearch(e.target.value)}
          />
        </div>
        <div style={S.catBar}>
          {CATS.map(ct=>(
            <button key={ct} style={{...S.catBtn,...(cat===ct?S.catBtnA:{})}} onClick={()=>setCat(ct)}>
              {ct}
            </button>
          ))}
        </div>
        <div style={{padding:"0 16px 6px",fontSize:11,color:"#94a3b8"}}>
          {filtered.length} {filtered.length===1?"risultato":"risultati"}
        </div>
        <div style={S.list}>
          {filtered.map(g=>(
            <button key={g.id} style={{...S.card,...(sel?.id===g.id?S.cardA:{})}} onClick={()=>pick(g)}>
              <div style={S.cardTop}>
                <span style={{...S.pill,background:COLORS[g.category]+"22",color:COLORS[g.category],border:`1px solid ${COLORS[g.category]}44`}}>
                  {g.icon} {g.category}
                </span>
                <button style={S.bkm} onClick={e=>toggleSave(g.id,e)}>
                  {saved.includes(g.id)?"🔖":"☆"}
                </button>
              </div>
              <div style={S.cardTitle}>{g.title}</div>
              <div style={S.cardSrc}>{g.source}</div>
              <div style={S.tags}>{g.tags.map(t=><span key={t} style={S.tag}>{t}</span>)}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <main style={S.main}>
        {!sideOpen && (!isMobile || sel) && (
          <div style={S.openBar}>
            <button style={S.openBtn} onClick={() => setSideOpen(true)}>
              <span style={{fontSize:isMobile?20:15}}>{"\u2630"}</span>
              {isMobile ? "Tutte le guide" : "Mostra elenco"}
            </button>
            {isMobile && sel && (
              <span style={{fontSize:12,color:"#94a3b8",maxWidth:"100%",
                            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                {sel.icon} {sel.category}
              </span>
            )}
          </div>
        )}
        {!sel ? (
          <div style={S.welcome}>
            <img
              src="orthobro-logo.png"
              alt="Orthobro"
              style={{width:isMobile?230:260,maxWidth:"78%",height:"auto",marginBottom:2}}
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div style={{fontSize:14,textAlign:"center",maxWidth:320}}>
              Seleziona una linea guida dalla lista per consultare le raccomandazioni cliniche evidence-based.
            </div>
            <div style={{fontSize:12,color:"#cbd5e1"}}>{guidelines.length} guide disponibili</div>
            <div style={S.poweredBy}>
              powered by <span style={S.poweredByStrong}>Powerphysio</span>
            </div>
            {!sideOpen && (
              <button style={S.welcomeBtn} onClick={() => setSideOpen(true)}>
                <span style={{fontSize:20}}>{"\u2630"}</span>
                Tutte le guide
              </button>
            )}
          </div>
        ) : (
          <>
            <div style={S.detailHead}>
              <div style={S.metaRow}>
                <span style={{...S.pill,background:c+"22",color:c,border:`1px solid ${c}44`,fontSize:13}}>
                  {sel.icon} {sel.category}
                </span>
                <span style={S.srcTag}>{sel.source}</span>
                <button
                  style={{...S.saveBtn,color:saved.includes(sel.id)?c:"#94a3b8",borderColor:saved.includes(sel.id)?c:"#e2e8f0"}}
                  onClick={e=>toggleSave(sel.id,e)}
                >
                  {saved.includes(sel.id)?"🔖 Salvato":"☆ Salva"}
                </button>
              </div>
              <h1 style={S.detailTitle}>{sel.title}</h1>
              <p style={S.summary}>{sel.summary}</p>
              {sel.pdfUrl && (
                <a
                  href={sel.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    padding:"5px 12px", borderRadius:8, fontSize:12, fontWeight:600,
                    background:c+"15", color:c, border:`1px solid ${c}40`,
                    textDecoration:"none", marginBottom:6, marginRight:6,
                  }}
                >
                  📄 Apri PDF / Fonte originale
                </a>
              )}
              {sel.pdfUrl2 && (
                <a
                  href={sel.pdfUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    padding:"5px 12px", borderRadius:8, fontSize:12, fontWeight:600,
                    background:c+"15", color:c, border:`1px solid ${c}40`,
                    textDecoration:"none", marginBottom:6,
                  }}
                >
                  📄 Protocollo Riabilitativo
                </a>
              )}
              <div style={S.tags}>{sel.tags.map(t=><span key={t} style={S.tag}>{t}</span>)}</div>
            </div>

            <div style={S.toolbar}>
              <button style={S.tbBtn} onClick={expandAll}>▼ Espandi tutto</button>
              <button style={S.tbBtn} onClick={collapseAll}>▲ Comprimi tutto</button>
            </div>

            <div style={S.disclaimer}>
              ⚕️ Uso clinico — Verificare sempre con le fonti originali. Non sostituisce il giudizio clinico.
            </div>

            <div style={S.sections}>
              {sel.sections.map((sec,i)=>(
                <div key={i} style={{borderRadius:10,border:`1px solid ${open[i]?c+"44":"#e2e8f0"}`,overflow:"hidden",background:"#fff"}}>
                  <button
                    style={{...S.secBtn,background:open[i]?c+"0a":"#fff",color:open[i]?c:"#1e293b"}}
                    onClick={()=>toggleSec(i)}
                  >
                    <span>{sec.title}</span>
                    <span style={{fontSize:12,transition:"transform .2s",transform:open[i]?"rotate(180deg)":"rotate(0)"}}>▼</span>
                  </button>
                  {open[i] && (
                    <div style={S.secContent}>
                      {sec.content.map((item,j)=>(
                        <div key={j} style={S.item}>
                          <span style={{...S.bullet,background:c}}/>
                          <span style={S.itemText}>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
