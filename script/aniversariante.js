document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // SEÇÃO 1: LÓGICA DE ANIVERSÁRIOS (CORRIGIDA)
    // ==================================================
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

    // Elementos do DOM
    const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");
    const proximoNiverDiv = document.getElementById("proximo_niver");

const nivernome = [
    // TWICE
    { nome: "NAYEON", url: "url('midia/twice_PERFIL_BG_Nayeon.jpg')" },
    { nome: "JEONGYEON", url: "url('midia/twice_PERFIL_BG_Jeongyeon.jpg')" },
    { nome: "MOMO", url: "url('midia/twice_PERFIL_BG_Momo.jpg')" },
    { nome: "SANA", url: "url('midia/twice_PERFIL_BG_Sana.jpg')" },
    { nome: "JIHYO", url: "url('midia/twice_PERFIL_BG_Jihyo.jpg')" },
    { nome: "MINA", url: "url('midia/twice_PERFIL_BG_Mina.jpg')" },
    { nome: "DAHYUN", url: "url('midia/twice_PERFIL_BG_Dahyun.jpg')" },
    { nome: "CHAEYOUNG", url: "url('midia/twice_PERFIL_BG_Chaeyoung.jpg')" },
    { nome: "TZUYU", url: "url('midia/twice_PERFIL_BG_Tzuyu.jpg')" },

    // AESPA
    { nome: "GISELLE", url: "url('midia/aespa_GISELLE30NIVER.png')" },
    { nome: "KARINA", url: "url('midia/aespa_KARINA11NIVER.png')" },
    { nome: "NINGNING", url: "url('midia/aespa_NINGNING23NIVER.png')" },
    { nome: "WINTER", url: "url('midia/aespa_WINTER1NIVER.png')" },

    // ARTMS
    { nome: "CHOERRY", url: "url('midia/ARTMS_CHOERRY04JUN.png')" },
    { nome: "HASEUL", url: "url('midia/ARTMS_HASEUL18AGO.png')" },
    { nome: "HEEJIN", url: "url('midia/ARTMS_HEEJIN19OUT.png')" },
    { nome: "JINSOUL", url: "url('midia/ARTMS_JINSOUL13JUN.png')" },
    { nome: "KIMLIP", url: "url('midia/ARTMS_KIMLIP10FEV.png')" },

    // ATEEZ
    { nome: "HONGJOONG", url: "url('midia/ATEEZ_niver_Hongjoong07novembro.png')" },
    { nome: "JONGHO", url: "url('midia/ATEEZ_niver_Jongho12outubro.png')" },
    { nome: "MINGI", url: "url('midia/ATEEZ_niver_Mingi09agosto.png')" },
    { nome: "SAN", url: "url('midia/ATEEZ_niver_San10julho.png')" },
    { nome: "SEONGHWA", url: "url('midia/ATEEZ_niver_Seonghwa03abril.png')" },
    { nome: "WOOYOUNG", url: "url('midia/ATEEZ_niver_Wooyoung26novembro.png')" },
    { nome: "YEOSANG", url: "url('midia/ATEEZ_niver_Yeosang15junho.png')" },
    { nome: "YUNHO", url: "url('midia/ATEEZ_niver_Yunho23marco.png')" },

    // BABYMONSTER
    { nome: "AHYEON", url: "url('midia/BABYMONSTER_AHYEON11ABRIL.png')" },
    { nome: "ASA", url: "url('midia/BABYMONSTER_ASA17ABRIL.png')" },
    { nome: "CHIQUITA", url: "url('midia/BABYMONSTER_CHIQUITA17FEVEREIRO.png')" },
    { nome: "LUKA", url: "url('midia/BABYMONSTER_LUKA20MARCO.png')" },
    { nome: "PHARITA", url: "url('midia/BABYMONSTER_PHARITA26AGOSTO.png')" },
    { nome: "RAMI", url: "url('midia/BABYMONSTER_RAMI17OUTUBRO.png')" },
    { nome: "RORA", url: "url('midia/BABYMONSTER_RORA14AGOSTO.png')" },

    // BIGBANG
    { nome: "DAESUNG", url: "url('midia/BIGBANG_Daesung_26APR.png')" },
    { nome: "SEUNGRI", url: "url('midia/BIGBANG_Seungri_12DEC.png')" },
    { nome: "T.O.P", url: "url('midia/BIGBANG_T.O.P_04NOV.png')" },
    { nome: "TAEYANG", url: "url('midia/BIGBANG_Taeyang_18MAY.png')" },

    // BLACKPINK
    { nome: "JENNIE", url: "url('midia/BLACKPINK_niver_Jennie16janjan.png')" },
    { nome: "JISOO", url: "url('midia/BLACKPINK_niver_Jisoo3jan.png')" },
    { nome: "LISA", url: "url('midia/BLACKPINK_niver_Lisa27Mar.png')" },
    { nome: "ROSE", url: "url('midia/BLACKPINK_niver_Rose11fev.png')" },

    // BTS
    { nome: "JHOPE", url: "url('midia/BTS_JHOPE18FEV.png')" },
    { nome: "JIMIN", url: "url('midia/BTS_JIMIN13OUT.png')" },
    { nome: "JIN", url: "url('midia/BTS_JIN04DEZ.png')" },
    { nome: "JUNGKOOK", url: "url('midia/BTS_JUNGKOOK01SET.png')" },
    { nome: "RM", url: "url('midia/BTS_RM12SET.png')" },
    { nome: "SUGA", url: "url('midia/BTS_SUGA09MAR.png')" },
    { nome: "V", url: "url('midia/BTS_V30DEZ.png')" },

    // ENHYPEN
    { nome: "HEESEUNG", url: "url('midia/ENHYPEN_Heeseung_15OCT.png')" },
    { nome: "JAKE", url: "url('midia/ENHYPEN_Jake_15NOV.png')" },
    { nome: "JAY", url: "url('midia/ENHYPEN_Jay_20APR.png')" },
    { nome: "JUNGWON", url: "url('midia/ENHYPEN_Jungwon_09FEB.png')" },
    { nome: "SUNGHOON", url: "url('midia/ENHYPEN_Sunghoon_08DEC.png')" },
    { nome: "SUNOO", url: "url('midia/ENHYPEN_Sunoo_24JUN.png')" },

    // FIFTY FIFTY
    { nome: "ATHENA", url: "url('midia/FIFTYFIFTY_ATHENA15MAR.png')" },
    { nome: "CHANELLE", url: "url('midia/FIFTYFIFTY_CHANELLE14JUN.png')" },
    { nome: "HANA", url: "url('midia/FIFTYFIFTY_HANA05SET.png')" },
    { nome: "KEENA", url: "url('midia/FIFTYFIFTY_KEENA09JUL.png')" },
    { nome: "YEWON", url: "url('midia/FIFTYFIFTY_YEWON18MAR.png')" },

    // FROMIS_9
    { nome: "CHAEYOUNG", url: "url('midia/fromis9_CHAEYOUNG14MAY.png')" },
    { nome: "HAYOUNG", url: "url('midia/fromis9_HAYOUNG29SEP.png')" },
    { nome: "JIHEON", url: "url('midia/fromis9_JIHEON17APR.png')" },
    { nome: "JISUN", url: "url('midia/fromis9_JISUN23NOV.png')" },
    { nome: "JIWON", url: "url('midia/fromis9_JIWON20MAR.png')" },
    { nome: "NAGYUNG", url: "url('midia/fromis9_NAGYUNG01JUN.png')" },
    { nome: "SAEROM", url: "url('midia/fromis9_SAEROM07JAN.png')" },
    { nome: "SEOYEON", url: "url('midia/fromis9_SEOYEON22JAN.png')" },

    // GIRLS GENERATION
    { nome: "HYOYEON", url: "url('midia/GIRLSGENERATION_HYOYEON22SEP.png')" },
    { nome: "JESSICA", url: "url('midia/GIRLSGENERATION_JESSICA18APR.png')" },
    { nome: "SEOHYUN", url: "url('midia/GIRLSGENERATION_SEOHYUN28JUN.png')" },
    { nome: "SOOYOUNG", url: "url('midia/GIRLSGENERATION_SOOYOUNG10FEB.png')" },
    { nome: "SUNNY", url: "url('midia/GIRLSGENERATION_SUNNY15MAY.png')" },
    { nome: "TAEYEON", url: "url('midia/GIRLSGENERATION_TAEYEON_09MAR.png')" },
    { nome: "TIFFANY", url: "url('midia/GIRLSGENERATION_TIFFANY01AUG.png')" },
    { nome: "YOONA", url: "url('midia/GIRLSGENERATION_YOONA30MAY.png')" },
    { nome: "YURI", url: "url('midia/GIRLSGENERATION_YURI05DEC.png')" },

    // HEARTS 2 HEARTS
    { nome: "ANA", url: "url('midia/hearts2hearts_ANA20DEZ.png')" },
    { nome: "IAN", url: "url('midia/hearts2hearts_IAN09SET.png')" },
    { nome: "JIWOO", url: "url('midia/hearts2hearts_JIWOO07SET.png')" },
    { nome: "JUUN", url: "url('midia/hearts2hearts_JUUN03DEZ.png')" },
    { nome: "STELLA", url: "url('midia/hearts2hearts_STELLA18JUN.png')" },
    { nome: "YEON", url: "url('midia/hearts2hearts_YEON19ABR.png')" },
    { nome: "YUHA", url: "url('midia/hearts2hearts_YUHA12ABR.png')" },
    { nome: "CARMEN", url: "url('midia/hearts2hearts__CARMEN28MAR.png')" },

    // IFEYE
    { nome: "HWAYEON", url: "url('midia/IFEYE_HWAYEON24JUN.png')" },
    { nome: "KASIA", url: "url('midia/IFEYE_KASIA15FEB.png')" },
    { nome: "MEU", url: "url('midia/IFEYE_MEU12AUG.png')" },
    { nome: "RAHEE", url: "url('midia/IFEYE_RAHEE09MAR.png')" },
    { nome: "SASHA", url: "url('midia/IFEYE_SASHA25MAY.png')" },
    { nome: "TAERIN", url: "url('midia/IFEYE_TAERIN08DEC.png')" },

    // ILLIT
    { nome: "IROHA", url: "url('midia/ILLIT_IROHA04FEB.png')" },
    { nome: "MINJU", url: "url('midia/ILLIT_MINJU11MAY.png')" },
    { nome: "MOKA", url: "url('midia/ILLIT_MOKA08OCT.png')" },
    { nome: "WONHEE", url: "url('midia/ILLIT_WONHEE26JUN.png')" },
    { nome: "YUNAH", url: "url('midia/ILLIT_YUNAH15JAN.png')" },

    // ITZY
    { nome: "CHAERYEONG", url: "url('midia/ITZY_CHAERYEONG05JUN.png')" },
    { nome: "LIA", url: "url('midia/ITZY_LIA21JUL.png')" },
    { nome: "RYUJIN", url: "url('midia/ITZY_RYUJIN17ABR.png')" },
    { nome: "YEJI", url: "url('midia/ITZY_YEJI26MAI.png')" },
    { nome: "YUNA", url: "url('midia/ITZY_YUNA09DEZ.png')" },

    // IVE
    { nome: "GAEUL", url: "url('midia/IVE_GAEUL24SEP.png')" },
    { nome: "LEESEO", url: "url('midia/IVE_LEESEO21FEB.png')" },
    { nome: "LIZ", url: "url('midia/IVE_LIZ21NOV.png')" },
    { nome: "REI", url: "url('midia/IVE_REI03FEB.png')" },
    { nome: "WONYOUNG", url: "url('midia/IVE_WONYOUNG31AUG.png')" },
    { nome: "YUJIN", url: "url('midia/IVE_YUJIN01SEP.png')" },

    // IZNA
    { nome: "JEEMIN", url: "url('midia/IZNA_JEEMIN08MAY.png')" },
    { nome: "JIYOON", url: "url('midia/IZNA_JIYOON14JUL.png')" },
    { nome: "JUNGEUN", url: "url('midia/IZNA_JUNGEUN04AUG.png')" },
    { nome: "KOKO", url: "url('midia/IZNA_KOKO14NOV.png')" },
    { nome: "MAI", url: "url('midia/IZNA_MAI28OCT.png')" },
    { nome: "SAEBI", url: "url('midia/IZNA_SAEBI22JAN.png')" },
    { nome: "SARANG", url: "url('midia/IZNA_SARANG18APR.png')" },

    // KATSEYE
    { nome: "DANIELA", url: "url('midia/KATSEYE_DANIELA01JUL.png')" },
    { nome: "LARA", url: "url('midia/KATSEYE_LARA03NOV.png')" },
    { nome: "MANON", url: "url('midia/KATSEYE_MANON26JUN.png')" },
    { nome: "MEGAN", url: "url('midia/KATSEYE_MEGAN10FEB.png')" },
    { nome: "SOPHIA", url: "url('midia/KATSEYE_SOPHIA31DEC.png')" },
    { nome: "YOONCHAE", url: "url('midia/KATSEYE_YOONCHAE06DEC.png')" },

    // KEP1ER
    { nome: "CHOIYUJIN", url: "url('midia/KEP1ER_CHOIYUJIN_12AGO.png')" },
    { nome: "EZAKIHIKARU", url: "url('midia/KEP1ER_EZAKIHIKARU_12MAR.png')" },
    { nome: "HUENINGBAHIYYIH", url: "url('midia/KEP1ER_HUENINGBAHIYYIH_27JUL.png')" },
    { nome: "KIMCHAEHYUN", url: "url('midia/KEP1ER_KIMCHAEHYUN_26ABR.png')" },
    { nome: "KIMDAYEON", url: "url('midia/KEP1ER_KIMDAYEON_02MAR.png')" },
    { nome: "SEOYOUNGEUN", url: "url('midia/KEP1ER_SEOYOUNGEUN_27DEZ.png')" },
    { nome: "SHENXIAOTING", url: "url('midia/KEP1ER_SHENXIAOTING_12NOV.png')" },

    // KIIIKIII
    { nome: "HAUM", url: "url('midia/KIIIKIII_HAUM14NOV.png')" },
    { nome: "JIYU", url: "url('midia/KIIIKIII_JIYU14MAY.png')" },
    { nome: "KYA", url: "url('midia/KIIIKIII_KYA18DEC.png')" },
    { nome: "LEESOL", url: "url('midia/KIIIKIII_LEESOL18SEP.png')" },
    { nome: "SUI", url: "url('midia/KIIIKIII_SUI10APR.png')" },

    // KISS OF LIFE
    { nome: "BELLE", url: "url('midia/KISSOFLIFE_BELLE20MAR.png')" },
    { nome: "HANEUL", url: "url('midia/KISSOFLIFE_HANEUL25MAY.png')" },
    { nome: "JULIE", url: "url('midia/KISSOFLIFE_JULIE29MAR.png')" },
    { nome: "NATTY", url: "url('midia/KISSOFLIFE_NATTY30MAY.png')" },

    // LE SSERAFIM
    { nome: "CHAEWON", url: "url('midia/LE_SSERAFIM_CHAEWON01AUG.png')" },
    { nome: "EUNCHAE", url: "url('midia/LE_SSERAFIM_EUNCHAE10NOV.png')" },
    { nome: "KAZUHA", url: "url('midia/LE_SSERAFIM_KAZUHA09AUG.png')" },
    { nome: "SAKURA", url: "url('midia/LE_SSERAFIM_SAKURA19MAR.png')" },
    { nome: "YUNJIN", url: "url('midia/LE_SSERAFIM_YUNJIN08OCT.png')" },

    // MEOVV
    { nome: "ANNA", url: "url('midia/MEOVV_ANNA17NOV.png')" },
    { nome: "ELLA", url: "url('midia/MEOVV_ELLA01DEC.png')" },
    { nome: "GAWON", url: "url('midia/MEOVV_GAWON27APR.png')" },
    { nome: "NARIN", url: "url('midia/MEOVV_NARIN15AUG.png')" },
    { nome: "SOOIN", url: "url('midia/MEOVV_SOOIN12APR.png')" },

    // NEWJEANS
    { nome: "DANIELLE", url: "url('midia/NEWJEANS_DANIELLE11APR.png')" },
    { nome: "HAERIN", url: "url('midia/NEWJEANS_HAERIN15MAY.png')" },
    { nome: "HANNI", url: "url('midia/NEWJEANS_HANNI06OCT.png')" },
    { nome: "HYEIN", url: "url('midia/NEWJEANS_HYEIN21APR.png')" },
    { nome: "MINJI", url: "url('midia/NEWJEANS_MINJI07MAY.png')" },

    // NMIXX
    { nome: "BAE", url: "url('midia/NMIXX_BAE28DEC.png')" },
    { nome: "HAEWON", url: "url('midia/NMIXX_HAEWON25FEB.png')" },
    { nome: "JIWOO", url: "url('midia/NMIXX_JIWOO13APR.png')" },
    { nome: "KYUJIN", url: "url('midia/NMIXX_KYUJIN26MAY.png')" },
    { nome: "LILY", url: "url('midia/NMIXX_LILY17OCT.png')" },
    { nome: "SULLYOON", url: "url('midia/NMIXX_SULLYOON26JAN.png')" },

    // NTX
    { nome: "CHANGHUN", url: "url('midia/NTX_CHANGHUN04MAI.png')" },
    { nome: "EUNHO", url: "url('midia/NTX_EUNHO05DEZ.png')" },
    { nome: "HOJUN", url: "url('midia/NTX_HOJUN22MAI.png')" },
    { nome: "HYEONGJIN", url: "url('midia/NTX_HYEONGJIN25FEV.png')" },
    { nome: "RAWHYUN", url: "url('midia/NTX_RAWHYUN06MAR.png')" },
    { nome: "SEONGWON", url: "url('midia/NTX_SEONGWON05NOV.png')" },
    { nome: "XIHA", url: "url('midia/NTX_XIHA07MAR.png')" },
    { nome: "YUNHYEOK", url: "url('midia/NTX_YUNHYEOK09AGO.png')" },

    // RED VELVET
    { nome: "IRENE", url: "url('midia/RedVelvet_IRENE29MAR.png')" },
    { nome: "JOY", url: "url('midia/RedVelvet_JOY03SEP.png')" },
    { nome: "SEULGI", url: "url('midia/RedVelvet_SEULGI10FEB.png')" },
    { nome: "WENDY", url: "url('midia/RedVelvet_WENDY21FEB.png')" },
    { nome: "YERI", url: "url('midia/RedVelvet_YERI05MAR.png')" },

    // RESCENE
    { nome: "LIV", url: "url('midia/RESCENE_LIV11OCT.png')" },
    { nome: "MAY", url: "url('midia/RESCENE_MAY19AUG.png')" },
    { nome: "MINAMI", url: "url('midia/RESCENE_MINAMI29NOV.png')" },
    { nome: "WONI", url: "url('midia/RESCENE_WONI25MAY.png')" },
    { nome: "ZENA", url: "url('midia/RESCENE_ZENA27NOV.png')" },

    // RIIZE
    { nome: "ANTON", url: "url('midia/RIIZE_Anton_21MAR.png')" },
    { nome: "EUNSEOK", url: "url('midia/RIIZE_Eunseok_19MAR.png')" },
    { nome: "SHOTARO", url: "url('midia/RIIZE_Shotaro_25NOV.png')" },
    { nome: "SOHEE", url: "url('midia/RIIZE_Sohee_21NOV.png')" },
    { nome: "SUNGCHAN", url: "url('midia/RIIZE_Sungchan_13SEP.png')" },
    { nome: "WONBIN", url: "url('midia/RIIZE_Wonbin_02MAR.png')" },

    // SEVENTEEN
    { nome: "DINO", url: "url('midia/SEVENTEEN_DINO11FEV.png')" },
    { nome: "DK", url: "url('midia/SEVENTEEN_DK18FEV.png')" },
    { nome: "HOSHI", url: "url('midia/SEVENTEEN_HOSHI15JUN.png')" },
    { nome: "JEONGHAN", url: "url('midia/SEVENTEEN_JEONGHAN04OUT.png')" },
    { nome: "JOSHUA", url: "url('midia/SEVENTEEN_JOSHUA30DEZ.png')" },
    { nome: "JUN", url: "url('midia/SEVENTEEN_JUN10JUN.png')" },
    { nome: "MINGYU", url: "url('midia/SEVENTEEN_MINGYU06ABR.png')" },
    { nome: "SCOUPS", url: "url('midia/SEVENTEEN_SCOUPS08AGO.png')" },
    { nome: "SEUNGKWAN", url: "url('midia/SEVENTEEN_SEUNGKWAN16JAN.png')" },
    { nome: "THE8", url: "url('midia/SEVENTEEN_THE807NOV.png')" },
    { nome: "VERNON", url: "url('midia/SEVENTEEN_VERNON18FEV.png')" },
    { nome: "WONWOO", url: "url('midia/SEVENTEEN_WONWOO17JUL.png')" },
    { nome: "WOOZI", url: "url('midia/SEVENTEEN_WOOZI22NOV.png')" },

    // STAYC
    { nome: "ISA", url: "url('midia/STAYC_ISA23JAN.png')" },
    { nome: "J", url: "url('midia/STAYC_J09DEC.png')" },
    { nome: "SEEUN", url: "url('midia/STAYC_SEEUN14JUN.png')" },
    { nome: "SIEUN", url: "url('midia/STAYC_SIEUN01AUG.png')" },
    { nome: "SUMIN", url: "url('midia/STAYC_SUMIN13MAR.png')" },
    { nome: "YOON", url: "url('midia/STAYC_YOON14APR.png')" },

    // STRAY KIDS
    { nome: "BANGCHAN", url: "url('midia/STRAYKIDS_BANGCHAN03OUT.png')" },
    { nome: "CHANGBIN", url: "url('midia/STRAYKIDS_CHANGBIN11AGO.png')" },
    { nome: "FELIX", url: "url('midia/STRAYKIDS_FELIX15SET.png')" },
    { nome: "HAN", url: "url('midia/STRAYKIDS_HAN14SET.png')" },
    { nome: "HYUNJIN", url: "url('midia/STRAYKIDS_HYUNJIN20MAR.png')" },
    { nome: "I.N", url: "url('midia/STRAYKIDS_IN08FEV.png')" },
    { nome: "LEEKNOW", url: "url('midia/STRAYKIDS_LEEKNOW25OUT.png')" },
    { nome: "SEUNGMIN", url: "url('midia/STRAYKIDS_SEUNGMIN22SET.png')" },

    // TREASURE
    { nome: "ASAHI", url: "url('midia/TREASURE_Asahi_20AUG.png')" },
    { nome: "BANGYEDAM", url: "url('midia/TREASURE_BangYedam_07MAY.png')" },
    { nome: "CHOHYUNSUK", url: "url('midia/TREASURE_ChoiHyunsuk_21APR.png')" },
    { nome: "DOYOUNG", url: "url('midia/TREASURE_Doyoung_04DEC.png')" },
    { nome: "HARUTO", url: "url('midia/TREASURE_Haruto_05APR.png')" },
    { nome: "JIHOON", url: "url('midia/TREASURE_Jihoon_14MAR.png')" },
    { nome: "JUNKYU", url: "url('midia/TREASURE_Junkyu_09SEP.png')" },
    { nome: "MASHIHO", url: "url('midia/TREASURE_Mashiho_25MAR.png')" },
    { nome: "PARKJEONGWOO", url: "url('midia/TREASURE_ParkJeongwoo_28SEP.png')" },
    { nome: "SOJUNGHWAN", url: "url('midia/TREASURE_SoJunghwan_18FEB.png')" },
    { nome: "YOSHI", url: "url('midia/TREASURE_Yoshi_15MAY.png')" },

    // TRIPLES
    { nome: "CHAEWON", url: "url('midia/tripleS_CHAEWON02MAY.png')" },
    { nome: "CHAEYEON", url: "url('midia/tripleS_CHAEYEON04DEC.png')" },
    { nome: "DAHYUN", url: "url('midia/tripleS_DAHYUN08JAN.png')" },
    { nome: "HAYEON", url: "url('midia/tripleS_HAYEON01AUG.png')" },
    { nome: "HYERIN", url: "url('midia/tripleS_HYERIN12APR.png')" },
    { nome: "JIWOO", url: "url('midia/tripleS_JIWOO24OCT.png')" },
    { nome: "JIYEON", url: "url('midia/tripleS_JIYEON13FEV.png')" },
    { nome: "JOOBIN", url: "url('midia/tripleS_JOOBIN16JAN.png')" },
    { nome: "KAEDE", url: "url('midia/tripleS_KAEDE20DEC.png')" },
    { nome: "KOTONE", url: "url('midia/tripleS_KOTONE10MAR.png')" },
    { nome: "LYNN", url: "url('midia/tripleS_LYNN12APR.png')" },
    { nome: "MAYU", url: "url('midia/tripleS_MAYU12MAY.png')" },
    { nome: "NAKYOUNG", url: "url('midia/tripleS_NAKYOUNG13OCT.png')" },
    { nome: "NIEN", url: "url('midia/tripleS_NIEN02JUN.png')" },
    { nome: "SEOAH", url: "url('midia/tripleS_SEOAH11JUN.png')" },
    { nome: "SEOYEON", url: "url('midia/tripleS_SEOYEON06AUG.png')" },
    { nome: "SHION", url: "url('midia/tripleS_SHION03APR.png')" },
    { nome: "SHION2", url: "url('midia/tripleS_SHION29DEC.png')" },
    { nome: "SOHYUN", url: "url('midia/tripleS_SOHYUN13OCT.png')" },
    { nome: "SOOMIN", url: "url('midia/tripleS_SOOMIN03OCT.png')" },
    { nome: "SULLIN", url: "url('midia/tripleS_SULLIN30NOV.png')" },
    { nome: "XINYU", url: "url('midia/tripleS_XINYU25MAY.png')" },
    { nome: "YEONJI", url: "url('midia/tripleS_YEONJI08JAN.png')" },
    { nome: "YOOYEON", url: "url('midia/tripleS_YOOYEON09FEB.png')" },
    { nome: "YUBIN", url: "url('midia/tripleS_YUBIN03FEV.png')" },

    // TWICE (arquivos individuais)
    { nome: "CHAEYOUNG", url: "url('midia/TWICE_Chaeyoung23ABR.png')" },
    { nome: "JEONGYEON", url: "url('midia/TWICE_JEONGYEON1NOV.png')" },
    { nome: "JIHYO", url: "url('midia/TWICE_JIHYO1FEV.png')" },
    { nome: "MINA", url: "url('midia/TWICE_MINA24MAR.png')" },
    { nome: "MOMO", url: "url('midia/TWICE_MOMO9NOV.png')" },
    { nome: "NAYEON", url: "url('midia/TWICE_NAYEON22SET.png')" },
    { nome: "SANA", url: "url('midia/TWICE_SANA29DEZ.png')" },
    { nome: "TZUYU", url: "url('midia/TWICE_TZUYU14JUN.png')" },

    // TXT
    { nome: "BEOMGYU", url: "url('midia/TXT_BEOMGYU13MAR.png')" },
    { nome: "HUENINGKAI", url: "url('midia/TXT_HUENINGKAI14AGO.png')" },
    { nome: "SOOBIN", url: "url('midia/TXT_SOOBIN05DEZ.png')" },
    { nome: "TAEHYUN", url: "url('midia/TXT_TAEHYUN05FEV.png')" },
    { nome: "YEONJUN", url: "url('midia/TXT_YEONJUN13SET.png')" },

     // UNIS
    { nome: "ELISIA", url: "url('midia/UNIS_ELISIA18APR.png')" },
    { nome: "GEHLEE", url: "url('midia/UNIS_GEHLEE19AUG.png')" },
    { nome: "HYEONJU", url: "url('midia/UNIS_HYEONJU03NOV.png')" },
    { nome: "KOTOKO", url: "url('midia/UNIS_KOTOKO28OCT.png')" },
    { nome: "NANA", url: "url('midia/UNIS_NANA06JUN.png')" },
    { nome: "SEOWON", url: "url('midia/UNIS_SEOWON27JAN.png')" },
    { nome: "YOONA", url: "url('midia/UNIS_YOONA07OCT.png')" },
    { nome: "YUNHA", url: "url('midia/UNIS_YUNHA28FEB.png')" },

    // VIVIZ
    { nome: "EUNHA", url: "url('midia/VIVIZ_EUNHA30MAY.png')" },
    { nome: "SINB", url: "url('midia/VIVIZ_SINB03JUN.png')" },
    { nome: "UMJI", url: "url('midia/VIVIZ_UMJI19AUG.png')" },

    // ZEROBASEONE
    { nome: "HAN YUJIN", url: "url('midia/ZEROBASEONE_HanYujin_20MAR.png')" },
    { nome: "KIM GYUVIN", url: "url('midia/ZEROBASEONE_KimGyuvin_30AUG.png')" },
    { nome: "KIM JIWOONG", url: "url('midia/ZEROBASEONE_KimJiwoong_14DEC.png')" },
    { nome: "KIM TAERAE", url: "url('midia/ZEROBASEONE_KimTaerae_14JUL.png')" },
    { nome: "PARK GUNWOOK", url: "url('midia/ZEROBASEONE_ParkGunwook_10JAN.png')" },
    { nome: "RICKY", url: "url('midia/ZEROBASEONE_Ricky_20MAY.png')" },
    { nome: "SEOK MATTHEW", url: "url('midia/ZEROBASEONE_SeokMatthew_28MAY.png')" },
    { nome: "SUNG HANBIN", url: "url('midia/ZEROBASEONE_SungHanbin_13JUN.png')" },
    { nome: "ZHANG HAO", url: "url('midia/ZEROBASEONE_ZhangHao_25JUL.png')" }
    

    ];

    /**
     * Extrai a data e o nome de uma imagem de aniversariante.
     */
    function extrairDadosAniversario(img) {
        const alt = img.alt.trim();
        const match = alt.match(/(\d{1,2}\/\d{1,2})$/);
        if (match) {
            const dataAniversario = match[0];
            const nomeAniversariante = alt.substring(0, alt.length - dataAniversario.length).trim();
            const [dia, mes] = dataAniversario.split("/").map(Number);
            return {
                data: dataAniversario,
                nome: nomeAniversariante,
                dia: dia,
                mes: mes,
                elemento: img
            };
        }
        return null;
    }

    // Coletar todos os aniversariantes com dados válidos
    const todosAniversariantes = Array.from(imagens)
        .map(extrairDadosAniversario)
        .filter(item => item !== null)
        .map(item => {
            const dataNiver = new Date(hoje.getFullYear(), item.mes - 1, item.dia);
            if (dataNiver < hoje && item.mes !== (hoje.getMonth() + 1) && item.dia !== hoje.getDate()) {
                 dataNiver.setFullYear(hoje.getFullYear() + 1);
            }
            item.dataNiverObjeto = dataNiver;
            return item;
        });

    // Lógica para aniversariante do dia - AGORA DETECTA MÚLTIPLOS
    const aniversariantesDoDia = todosAniversariantes.filter(niver => niver.data === diamesHoje);

    if (aniversariantesDoDia.length > 0) {
        encontrouAniversarianteDoDia = true;
        
        if (secNiver && divNiver) {
            // Configurar mensagem para múltiplos aniversariantes
            if (mensagemAniversarioDiv) {
                if (aniversariantesDoDia.length === 1) {
                    mensagemAniversarioDiv.querySelector('h4').textContent = `🎉 Feliz aniversário, ${aniversariantesDoDia[0].nome}! Hoje é o seu dia mais FELIZ!!! 🎉`;
                } else {
                    const nomes = aniversariantesDoDia.map(a => a.nome).join(', ');
                    mensagemAniversarioDiv.querySelector('h4').textContent = `🎉 Feliz aniversário, ${nomes}! Hoje é o dia de vocês!!! 🎉`;
                }
                mensagemAniversarioDiv.style.display = "block";
            }

            secNiver.style.display = "block";
            divNiver.style.maxHeight = '0px';
            divNiver.classList.add('expandido');

            // Mostrar apenas os aniversariantes do dia na DIVniver
imagens.forEach(img => {
    const niver = extrairDadosAniversario(img);
    if (niver && niver.mes === mesAtual) {  // ← AQUI: Mostra todos do mês, não só do dia
        img.style.display = "inline-block";
    } else {
        img.style.display = "none";
    }
});

            // COLOCAR TODOS OS ANIVERSARIANTES DO DIA NA proximoNiverDiv
            if (proximoNiverDiv) {
                proximoNiverDiv.innerHTML = '';
                
                if (aniversariantesDoDia.length === 1) {
                    proximoNiverDiv.innerHTML = `<p class="niver-do-dia">Hoje é dia de ${aniversariantesDoDia[0].nome}!</p>`;
                } else {
                    proximoNiverDiv.innerHTML = `<p class="niver-do-dia">Hoje é dia de ${aniversariantesDoDia.length} aniversariantes!</p>`;
                }

                // Adicionar todas as imagens dos aniversariantes do dia
                aniversariantesDoDia.forEach(niver => {
                    const linkElement = niver.elemento.closest('a');
                    if (linkElement) {
                        const cloneLink = linkElement.cloneNode(true);
                        cloneLink.querySelector('img').removeAttribute('id');
                        proximoNiverDiv.appendChild(cloneLink);
                    } else {
                        // Se não tiver link, adiciona apenas a imagem
                        const imgClone = niver.elemento.cloneNode(true);
                        imgClone.removeAttribute('id');
                        proximoNiverDiv.appendChild(imgClone);
                    }
                });
                
                proximoNiverDiv.style.display = 'flex';
            }
        }
    }

    // Lógica para Próximo Aniversariante (SÓ SE NÃO HOUVER ANIVERSARIANTES DO DIA)
    if (!encontrouAniversarianteDoDia) {
        let proximosAniversariantes = todosAniversariantes
             .filter(niver => niver.dataNiverObjeto >= hoje)
             .sort((a, b) => a.dataNiverObjeto - b.dataNiverObjeto);

        if (proximosAniversariantes.length === 0 && todosAniversariantes.length > 0) {
             proximosAniversariantes = todosAniversariantes.sort((a, b) => a.dataNiverObjeto - b.dataNiverObjeto);
        }

        const proximo = proximosAniversariantes[0];

        if (proximo && proximoNiverDiv) {
            const diaFormatado = proximo.dia.toString().padStart(2, '0');
            const mesFormatado = proximo.mes.toString().padStart(2, '0');
            const dataProximoNiver = `${diaFormatado}/${mesFormatado}`;

            const linkElement = proximo.elemento.closest('a');
            if (linkElement) {
                const cloneLink = linkElement.cloneNode(true);
                cloneLink.querySelector('img').alt = `Próximo: ${proximo.nome} (${dataProximoNiver})`;

                proximoNiverDiv.innerHTML = `
                    <p class="proximo-niver-texto">O Próximo Aniversário é de: ${proximo.nome}, no dia ${proximo.dia}</p>
                `;
                proximoNiverDiv.appendChild(cloneLink);
                proximoNiverDiv.style.display = 'flex';
                secNiver.style.display = "block";
            }
            encontrouAniversariante = true;
        }

        // Mostrar todos os aniversariantes do mês na DIVniver (se não for dia de aniversário)
        imagens.forEach(img => {
            const niver = extrairDadosAniversario(img);
            if (niver) {
                const mesAniversario = niver.mes;
                if (mesAniversario === mesAtual) {
                    img.style.display = "inline-block";
                    encontrouAniversariante = true;
                } else {
                    img.style.display = "none";
                }
            } else {
                img.style.display = "none";
            }
        });
    }

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    } else {
        secNiver.style.display = "none";
    }
    // ==================================================
    // SEÇÃO 2: LÓGICA DO BOTÃO EXPANDIR/RECOLHER
    // ==================================================
    const botaoExpandir = document.getElementById('botaoExpandirDIVniver');

if (botaoExpandir && divNiver) {
    botaoExpandir.addEventListener('click', function() {
        if (botaoExpandir.textContent === '▲ VER MENOS') {
            // Recolher - botão mostra "VER MAIS"
            divNiver.style.maxHeight = '0px';
            divNiver.style.margin = '0'; // Remove margens para diminuir espaço
            botaoExpandir.textContent = '▼ VER MAIS';
            
            // Mostrar o próximo aniversário ao recolher
            if (proximoNiverDiv && proximoNiverDiv.innerHTML.trim() !== "") {
                proximoNiverDiv.style.display = 'flex';
            }
            
            // Rolagem suave para o topo da seção
            setTimeout(() => {
                secNiver.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
            
        } else {
            // Expandir - botão mostra "VER MENOS"
            divNiver.style.maxHeight = '5000px';
            divNiver.style.margin = ''; // Restaura margens padrão
            botaoExpandir.textContent = '▲ VER MENOS';
            
            // Esconder o próximo aniversário ao expandir
            if (proximoNiverDiv) {
                proximoNiverDiv.style.display = 'none';
            }
        }


        });


    }
});