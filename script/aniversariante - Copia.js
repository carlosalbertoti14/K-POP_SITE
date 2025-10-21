document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

const nivernome = [
    // TWICE
    { nome: "NAYEON", url: "url('midia/twice_PERFIL_BG_Nayeon.jpg')" },
    { nome: "JEONGYEON", url: "url('midia/twice_PERFIL_BG_Jeongyeon.jpg')" },
    { nome: "MOMO", url: "url('midia/twice_PERFIL_BG_Momo.jpg')" },
    { nome: "SANA", url: "url('midia/twice_PERFIL_BG_Sana.jpg')" },
    { nome: "JIHYO", url: "url('midia/twice_PERFIL_BG_Jihyo.jpg')" },
    { nome: "MINA", url: "url('midia/twice_PERFIL_BG_Mina.jpg')" },
    { nome: "DAHYUN", url: "url('midia/twice_PERFIL_BG_Dahyun.jpg')" }, // Não presente no HTML, mas mantido se for útil.
    { nome: "CHAEYOUNG", url: "url('midia/twice_PERFIL_BG_Chaeyoung.jpg')" },
    { nome: "TZUYU", url: "url('midia/twice_PERFIL_BG_Tzuyu.jpg')" },

    // aespa
    { nome: "GISELLE", url: "url('midia/aespa_PERFIL_BG_Giselle.jpg')" },
    { nome: "KARINA", url: "url('midia/aespa_PERFIL_BG_Karina.jpg')" },
    { nome: "NINGNING", url: "url('midia/aespa_PERFIL_BG_Ningning.jpg')" },
    { nome: "WINTER", url: "url('midia/aespa_PERFIL_BG_Winter.jpg')" },

    // ATEEZ
    { nome: "HONGJOONG", url: "url('midia/ateez_PERFIL_BG_Hongjoong.jpg')" },
    { nome: "JONGHO", url: "url('midia/ateez_PERFIL_BG_Jongho.jpg')" },
    { nome: "MINGI", url: "url('midia/ateez_PERFIL_BG_Mingi.jpg')" },
    { nome: "SAN", url: "url('midia/ateez_PERFIL_BG_San.jpg')" },
    { nome: "SEONGHWA", url: "url('midia/ateez_PERFIL_BG_Seonghwa.jpg')" },
    { nome: "WOOYOUNG", url: "url('midia/ateez_PERFIL_BG_Wooyoung.jpg')" },
    { nome: "YEOSANG", url: "url('midia/ateez_PERFIL_BG_Yeosang.jpg')" },
    { nome: "YUNHO", url: "url('midia/ateez_PERFIL_BG_Yunho.jpg')" },

    // BABYMONSTER
    { nome: "AHYEON", url: "url('midia/babymonster_PERFIL_BG_Ahyeon.jpg')" },
    { nome: "ASA", url: "url('midia/babymonster_PERFIL_BG_Asa.jpg')" },
    { nome: "CHIQUITA", url: "url('midia/babymonster_PERFIL_BG_Chiquita.jpg')" },
    { nome: "LUKA", url: "url('midia/babymonster_PERFIL_BG_Luka.jpg')" },
    { nome: "PHARITA", url: "url('midia/babymonster_PERFIL_BG_Pharita.jpg')" },
    { nome: "RAMI", url: "url('midia/babymonster_PERFIL_BG_Rami.jpg')" },
    { nome: "RORA", url: "url('midia/babymonster_PERFIL_BG_Rora.jpg')" },

    // BLACKPINK
    { nome: "JENNIE", url: "url('midia/blackpink_PERFIL_BG_Jennie.jpg')" },
    { nome: "JISOO", url: "url('midia/blackpink_PERFIL_BG_Jisoo.jpg')" },
    { nome: "LISA", url: "url('midia/blackpink_PERFIL_BG_Lisa.jpg')" },
    { nome: "ROSE", url: "url('midia/blackpink_PERFIL_BG_Rose.jpg')" },

    // BTS
    { nome: "JHOPE", url: "url('midia/bts_PERFIL_BG_Jhope.jpg')" },
    { nome: "SUGA", url: "url('midia/bts_PERFIL_BG_Suga.jpg')" },
    { nome: "JUNGKOOK", url: "url('midia/bts_PERFIL_BG_Jungkook.jpg')" },
    { nome: "RM", url: "url('midia/bts_PERFIL_BG_Rm.jpg')" },
    { nome: "JIMIN", url: "url('midia/bts_PERFIL_BG_Jimin.jpg')" },
    { nome: "JIN", url: "url('midia/bts_PERFIL_BG_Jin.jpg')" },
    { nome: "V", url: "url('midia/bts_PERFIL_BG_V.jpg')" },

    // BIGBANG
    { nome: "DAESUNG", url: "url('midia/bigbang_PERFIL_BG_Daesung.jpg')" },
    { nome: "TAEYANG", url: "url('midia/bigbang_PERFIL_BG_Taeyang.jpg')" },
    { nome: "G-DRAGON", url: "url('midia/bigbang_PERFIL_BG_G-Dragon.jpg')" },
    { nome: "T.O.P", url: "url('midia/bigbang_PERFIL_BG_Top.jpg')" },
    { nome: "SEUNGRI", url: "url('midia/bigbang_PERFIL_BG_Seungri.jpg')" },

    // ENHYPEN
    { nome: "JUNGWON", url: "url('midia/enhypen_PERFIL_BG_Jungwon.jpg')" },
    { nome: "JAY", url: "url('midia/enhypen_PERFIL_BG_Jay.jpg')" },
    { nome: "SUNOO", url: "url('midia/enhypen_PERFIL_BG_Sunoo.jpg')" },
    { nome: "HEESEUNG", url: "url('midia/enhypen_PERFIL_BG_Heeseung.jpg')" },
    { nome: "JAKE", url: "url('midia/enhypen_PERFIL_BG_Jake.jpg')" },
    { nome: "SUNGHOON", url: "url('midia/enhypen_PERFIL_BG_Sunghoon.jpg')" },
    { nome: "NI-KI", url: "url('midia/enhypen_PERFIL_BG_Niki.jpg')" },

    // EXO-K
    { nome: "D.O.", url: "url('midia/exo-k_PERFIL_BG_Do.jpg')" },
    { nome: "KAI", url: "url('midia/exo-k_PERFIL_BG_Kai.jpg')" },
    { nome: "SEHUN", url: "url('midia/exo-k_PERFIL_BG_Sehun.jpg')" },
    { nome: "SUHO", url: "url('midia/exo-k_PERFIL_BG_Suho.jpg')" },
    { nome: "CHEN", url: "url('midia/exo-k_PERFIL_BG_Chen.jpg')" },
    { nome: "CHANYEOL", url: "url('midia/exo-k_PERFIL_BG_Chanyeol.jpg')" },

    // (G)I-DLE
    { nome: "MIYEON", url: "url('midia/gi-dle_PERFIL_BG_Miyeon.jpg')" },
    { nome: "SOYEON", url: "url('midia/gi-dle_PERFIL_BG_Soyeon.jpg')" },
    { nome: "YUQI", url: "url('midia/gi-dle_PERFIL_BG_Yuqi.jpg')" },
    { nome: "MINNIE", url: "url('midia/gi-dle_PERFIL_BG_Minnie.jpg')" },

    // GIRLS' GENERATION
    { nome: "SOOYOUNG", url: "url('midia/girlsgeneration_PERFIL_BG_Sooyoung.jpg')" },
    { nome: "TAEYEON", url: "url('midia/girlsgeneration_PERFIL_BG_Taeyeon.jpg')" },
    { nome: "JESSICA", url: "url('midia/girlsgeneration_PERFIL_BG_Jessica.jpg')" },
    { nome: "SUNNY", url: "url('midia/girlsgeneration_PERFIL_BG_Sunny.jpg')" },
    { nome: "YOONA", url: "url('midia/girlsgeneration_PERFIL_BG_Yoona.jpg')" },
    { nome: "SEOHYUN", url: "url('midia/girlsgeneration_PERFIL_BG_Seohyun.jpg')" },
    { nome: "TIFFANY", url: "url('midia/girlsgeneration_PERFIL_BG_Tiffany.jpg')" },
    { nome: "HYOYEON", url: "url('midia/girlsgeneration_PERFIL_BG_Hyoyeon.jpg')" },
    { nome: "YURI", url: "url('midia/girlsgeneration_PERFIL_BG_Yuri.jpg')" },

    // ILLIT
    { nome: "IROHA", url: "url('midia/illit_PERFIL_BG_Iroha.jpg')" },
    { nome: "MINJU", url: "url('midia/illit_PERFIL_BG_Minju.jpg')" },
    { nome: "WONHEE", url: "url('midia/illit_PERFIL_BG_Wonhee.jpg')" },
    { nome: "MOKA", url: "url('midia/illit_PERFIL_BG_Moka.jpg')" },

    // IVE
    { nome: "LEESEO", url: "url('midia/ive_PERFIL_BG_Leeseo.jpg')" },
    { nome: "WONYOUNG", url: "url('midia/ive_PERFIL_BG_Wonyoung.jpg')" },
    { nome: "YUJIN", url: "url('midia/ive_PERFIL_BG_Yujin.jpg')" },
    { nome: "GAEUL", url: "url('midia/ive_PERFIL_BG_Gaeul.jpg')" },
    { nome: "LIZ", url: "url('midia/ive_PERFIL_BG_Liz.jpg')" },

    // KATSEYE
    { nome: "MEGAN", url: "url('midia/katseye_PERFIL_BG_Megan.jpg')" },
    { nome: "MANON", url: "url('midia/katseye_PERFIL_BG_Manon.jpg')" },
    { nome: "DANIELA", url: "url('midia/katseye_PERFIL_BG_Daniela.jpg')" },
    { nome: "LARA", url: "url('midia/katseye_PERFIL_BG_Lara.jpg')" },
    { nome: "YOONCHAE", url: "url('midia/katseye_PERFIL_BG_Yoonchae.jpg')" },
    { nome: "SOPHIA", url: "url('midia/katseye_PERFIL_BG_Sophia.jpg')" },

    // KEP1ER
    { nome: "KIM DAYEON", url: "url('midia/kep1er_PERFIL_BG_KimDayeon.jpg')" },
    { nome: "EZAKI HIKARU", url: "url('midia/kep1er_PERFIL_BG_EzakiHikaru.jpg')" },
    { nome: "KIM CHAEHYUN", url: "url('midia/kep1er_PERFIL_BG_KimChaehyun.jpg')" },
    { nome: "HUENING BAHIYYIH", url: "url('midia/kep1er_PERFIL_BG_HueningBahiyyih.jpg')" },
    { nome: "CHOI YUJIN", url: "url('midia/kep1er_PERFIL_BG_ChoiYujin.jpg')" },
    { nome: "SHEN XIAOTING", url: "url('midia/kep1er_PERFIL_BG_ShenXiaoting.jpg')" },
    { nome: "SEO YOUNGEUN", url: "url('midia/kep1er_PERFIL_BG_SeoYoungeun.jpg')" },

    // KISS OF LIFE
    { nome: "BELLE", url: "url('midia/kissoflife_PERFIL_BG_Belle.jpg')" },
    { nome: "JULIE", url: "url('midia/kissoflife_PERFIL_BG_Julie.jpg')" },
    { nome: "HANEUL", url: "url('midia/kissoflife_PERFIL_BG_Haneul.jpg')" },
    { nome: "NATTY", url: "url('midia/kissoflife_PERFIL_BG_Natty.jpg')" },

    // LE SSERAFIM
    { nome: "CHAEWON", url: "url('midia/le_sserafim_PERFIL_BG_Chaewon.jpg')" },
    { nome: "KAZUHA", url: "url('midia/le_sserafim_PERFIL_BG_Kazuha.jpg')" },
    { nome: "YUNJIN", url: "url('midia/le_sserafim_PERFIL_BG_Yunjin.jpg')" },
    { nome: "EUNCHAE", url: "url('midia/le_sserafim_PERFIL_BG_Eunchae.jpg')" },

    // NEWJEANS
    { nome: "DANIELLE", url: "url('midia/newjeans_PERFIL_BG_Danielle.jpg')" },
    { nome: "HYEIN", url: "url('midia/newjeans_PERFIL_BG_Hyein.jpg')" },
    { nome: "MINJI", url: "url('midia/newjeans_PERFIL_BG_Minji.jpg')" },
    { nome: "HAERIN", url: "url('midia/newjeans_PERFIL_BG_Haerin.jpg')" },
    { nome: "HANNI", url: "url('midia/newjeans_PERFIL_BG_Hanni.jpg')" },

    // NMIXX
    { nome: "SULLYOON", url: "url('midia/nmixx_PERFIL_BG_Sullyoon.jpg')" },
    { nome: "HAEWON", url: "url('midia/nmixx_PERFIL_BG_Haewon.jpg')" },
    { nome: "JIWOO", url: "url('midia/nmixx_PERFIL_BG_Jiwoo.jpg')" },
    { nome: "KYUJIN", url: "url('midia/nmixx_PERFIL_BG_Kyujin.jpg')" },
    { nome: "LILY", url: "url('midia/nmixx_PERFIL_BG_Lily.jpg')" },

    // NTX
    { nome: "HYEONGJIN", url: "url('midia/ntx_PERFIL_BG_Hyeongjin.jpg')" },
    { nome: "RAWHYUN", url: "url('midia/ntx_PERFIL_BG_Rawhyun.jpg')" },
    { nome: "XIHA", url: "url('midia/ntx_PERFIL_BG_Xiha.jpg')" },
    { nome: "CHANGHUN", url: "url('midia/ntx_PERFIL_BG_Changhun.jpg')" },
    { nome: "HOJUN", url: "url('midia/ntx_PERFIL_BG_Hojun.jpg')" },
    { nome: "YUNHYEOK", url: "url('midia/ntx_PERFIL_BG_Yunhyeok.jpg')" },
    { nome: "SEONGWON", url: "url('midia/ntx_PERFIL_BG_Seongwon.jpg')" },
    { nome: "EUNHO", url: "url('midia/ntx_PERFIL_BG_Eunho.jpg')" },

    // RIIZE
    { nome: "WONBIN", url: "url('midia/riize_PERFIL_BG_Wonbin.jpg')" },
    { nome: "EUNSEOK", url: "url('midia/riize_PERFIL_BG_Eunseok.jpg')" },
    { nome: "ANTON", url: "url('midia/riize_PERFIL_BG_Anton.jpg')" },
    { nome: "SUNGCHAN", url: "url('midia/riize_PERFIL_BG_Sungchan.jpg')" },
    { nome: "SOHEE", url: "url('midia/riize_PERFIL_BG_Sohee.jpg')" },
    { nome: "SHOTARO", url: "url('midia/riize_PERFIL_BG_Shotaro.jpg')" },

    // SEVENTEEN
    { nome: "SEUNGKWAN", url: "url('midia/seventeen_PERFIL_BG_Seungkwan.jpg')" },
    { nome: "DINO", url: "url('midia/seventeen_PERFIL_BG_Dino.jpg')" },
    { nome: "DK", url: "url('midia/seventeen_PERFIL_BG_Dk.jpg')" },
    { nome: "VERNON", url: "url('midia/seventeen_PERFIL_BG_Vernon.jpg')" },
    { nome: "MINGYU", url: "url('midia/seventeen_PERFIL_BG_Mingyu.jpg')" },
    { nome: "WONWOO", url: "url('midia/seventeen_PERFIL_BG_Wonwoo.jpg')" },
    { nome: "S.COUPS", url: "url('midia/seventeen_PERFIL_BG_Scoups.jpg')" },
    { nome: "JUN", url: "url('midia/seventeen_PERFIL_BG_Jun.jpg')" },
    { nome: "HOSHI", url: "url('midia/seventeen_PERFIL_BG_Hoshi.jpg')" },
    { nome: "JEONGHAN", url: "url('midia/seventeen_PERFIL_BG_Jeonghan.jpg')" },
    { nome: "THE8", url: "url('midia/seventeen_PERFIL_BG_The8.jpg')" },
    { nome: "WOOZI", url: "url('midia/seventeen_PERFIL_BG_Woozi.jpg')" },
    { nome: "JOSHUA", url: "url('midia/seventeen_PERFIL_BG_Joshua.jpg')" },

    // STRAY KIDS
    { nome: "I.N", url: "url('midia/straykids_PERFIL_BG_In.jpg')" },
    { nome: "HYUNJIN", url: "url('midia/straykids_PERFIL_BG_Hyunjin.jpg')" },
    { nome: "CHANGBIN", url: "url('midia/straykids_PERFIL_BG_Changbin.jpg')" },
    { nome: "HAN", url: "url('midia/straykids_PERFIL_BG_Han.jpg')" },
    { nome: "FELIX", url: "url('midia/straykids_PERFIL_BG_Felix.jpg')" },
    { nome: "SEUNGMIN", url: "url('midia/straykids_PERFIL_BG_Seungmin.jpg')" },
    { nome: "BANG CHAN", url: "url('midia/straykids_PERFIL_BG_Bangchan.jpg')" },
    { nome: "LEE KNOW", url: "url('midia/straykids_PERFIL_BG_Leeknow.jpg')" },

    // TREASURE
    { nome: "SO JUNGHWAN", url: "url('midia/treasure_PERFIL_BG_SoJunghwan.jpg')" },
    { nome: "JIHOON", url: "url('midia/treasure_PERFIL_BG_Jihoon.jpg')" },
    { nome: "MASHIHO", url: "url('midia/treasure_PERFIL_BG_Mashiho.jpg')" },
    { nome: "HARUTO", url: "url('midia/treasure_PERFIL_BG_Haruto.jpg')" },
    { nome: "CHOI HYUNSUK", url: "url('midia/treasure_PERFIL_BG_ChoiHyunsuk.jpg')" },
    { nome: "BANG YEDAM", url: "url('midia/treasure_PERFIL_BG_BangYedam.jpg')" },
    { nome: "YOSHI", url: "url('midia/treasure_PERFIL_BG_Yoshi.jpg')" },
    { nome: "ASAHI", url: "url('midia/treasure_PERFIL_BG_Asahi.jpg')" },
    { nome: "JUNKYU", url: "url('midia/treasure_PERFIL_BG_Junkyu.jpg')" },
    { nome: "PARK JEONGWOO", url: "url('midia/treasure_PERFIL_BG_ParkJeongwoo.jpg')" },

    // TXT
    { nome: "TAEHYUN", url: "url('midia/txt_PERFIL_BG_Taehyun.jpg')" },
    { nome: "BEOMGYU", url: "url('midia/txt_PERFIL_BG_Beomgyu.jpg')" },
    { nome: "HUENINGKAI", url: "url('midia/txt_PERFIL_BG_Hueningkai.jpg')" },
    { nome: "YEONJUN", url: "url('midia/txt_PERFIL_BG_Yeonjun.jpg')" },
    { nome: "SOOBIN", url: "url('midia/txt_PERFIL_BG_Soobin.jpg')" },

    // ZEROBASEONE
    { nome: "PARK GUNWOOK", url: "url('midia/zerobaseone_PERFIL_BG_ParkGunwook.jpg')" },
    { nome: "HAN YUJIN", url: "url('midia/zerobaseone_PERFIL_BG_HanYujin.jpg')" },
    { nome: "RICKY", url: "url('midia/zerobaseone_PERFIL_BG_Ricky.jpg')" },
    { nome: "SEOK MATTHEW", url: "url('midia/zerobaseone_PERFIL_BG_SeokMatthew.jpg')" },
    { nome: "SUNG HANBIN", url: "url('midia/zerobaseone_PERFIL_BG_SungHanbin.jpg')" },
    { nome: "KIM TAERAE", url: "url('midia/zerobaseone_PERFIL_BG_KimTaerae.jpg')" },
    { nome: "ZHANG HAO", url: "url('midia/zerobaseone_PERFIL_BG_ZhangHao.jpg')" },
    { nome: "KIM GYUVIN", url: "url('midia/zerobaseone_PERFIL_BG_KimGyuvin.jpg')" },
    { nome: "KIM JIWOONG", url: "url('midia/zerobaseone_PERFIL_BG_KimJiwoong.jpg')" },

    // ARTMS
    { nome: "CHOERRY", url: "url('midia/artms_PERFIL_BG_Choerry.jpg')" },
    { nome: "HASEUL", url: "url('midia/artms_PERFIL_BG_Haseul.jpg')" },
    { nome: "HEEJIN", url: "url('midia/artms_PERFIL_BG_Heejin.jpg')" },
    { nome: "JINSOUL", url: "url('midia/artms_PERFIL_BG_Jinsoul.jpg')" },
    { nome: "KIMLIP", url: "url('midia/artms_PERFIL_BG_Kimlip.jpg')" },

    // FIFTYFIFTY
    { nome: "ATHENA", url: "url('midia/fiftyfifty_PERFIL_BG_Athena.jpg')" },
    { nome: "CHANELLE", url: "url('midia/fiftyfifty_PERFIL_BG_Chanelle.jpg')" },
    { nome: "HANA", url: "url('midia/fiftyfifty_PERFIL_BG_Hana.jpg')" },
    { nome: "KEENA", url: "url('midia/fiftyfifty_PERFIL_BG_Keena.jpg')" },
    { nome: "YEWON", url: "url('midia/fiftyfifty_PERFIL_BG_Yewon.jpg')" },

    // hearts2hearts
    { nome: "ANA", url: "url('midia/hearts2hearts_PERFIL_BG_Ana.jpg')" },
    { nome: "IAN", url: "url('midia/hearts2hearts_PERFIL_BG_Ian.jpg')" },
    { nome: "JIWOO", url: "url('midia/hearts2hearts_PERFIL_BG_Jiwoo.jpg')" },
    { nome: "JUUN", url: "url('midia/hearts2hearts_PERFIL_BG_Juun.jpg')" },
    { nome: "STELLA", url: "url('midia/hearts2hearts_PERFIL_BG_Stella.jpg')" },
    { nome: "YEON", url: "url('midia/hearts2hearts_PERFIL_BG_Yeon.jpg')" },
    { nome: "YUHA", url: "url('midia/hearts2hearts_PERFIL_BG_Yuha.jpg')" },
    { nome: "CARMEN", url: "url('midia/hearts2hearts_PERFIL_BG_Carmen.jpg')" },

    // ITZY
    { nome: "CHAERYEONG", url: "url('midia/itzy_PERFIL_BG_Chaeryeong.jpg')" },
    { nome: "LIA", url: "url('midia/itzy_PERFIL_BG_Lia.jpg')" },
    { nome: "RYUJIN", url: "url('midia/itzy_PERFIL_BG_Ryujin.jpg')" },
    { nome: "YEJI", url: "url('midia/itzy_PERFIL_BG_Yeji.jpg')" },
    { nome: "YUNA", url: "url('midia/itzy_PERFIL_BG_Yuna.jpg')" },

];

   const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");

    imagens.forEach(img => {
        const alt = img.alt.trim();
        // Regex para encontrar a data (dia/mes) no final da string
        const match = alt.match(/(\d{1,2}\/\d{1,2})$/);

        if (match) {
            const dataAniversario = match[0]; // Ex: "1/7" ou "14/7"
            // O nome é tudo que vem antes da data
            const nomeAniversariante = alt.substring(0, alt.length - dataAniversario.length).trim();

            if (dataAniversario === diamesHoje) {
                const aniversarianteDoDia = nivernome.find(item => item.nome.toLowerCase() === nomeAniversariante.toLowerCase());
                if (aniversarianteDoDia && secNiver && divNiver) {
                    // Se você quer mudar o background, descomente a linha abaixo
                    // secNiver.style.backgroundImage = aniversarianteDoDia.url;

                    if (mensagemAniversarioDiv) {
                        // Atualiza apenas o texto da h4 existente
                        mensagemAniversarioDiv.querySelector('h4').textContent = `Feliz aniversário, ${nomeAniversariante}! Hoje é o seu dia mais FELIZ!!!`;
                        mensagemAniversarioDiv.style.display = "block";
                    }
                    if (fogosVideo) {
                        fogosVideo.style.display = "block";
                    }
            /*         img.style.display = "block"; // Exibe apenas a imagem do aniversariante do dia
                    encontrouAniversarianteDoDia = true; */
                }
            } else {
                // Por padrão, esconde as imagens que não são do aniversariante do dia
                // Elas serão exibidas na próxima iteração se forem do mês atual
                /* img.style.display = "none"; */
            }
        } else {
            // Se o alt não tiver uma data no formato esperado, esconda a imagem também
           /*  img.style.display = "none"; */
        }
    });

    // Exibe os aniversariantes do mês se não houver um aniversariante do dia
    if (!encontrouAniversarianteDoDia) {
        imagens.forEach(img => {
            const alt = img.alt.trim();
            const match = alt.match(/(\d{1,2}\/\d{1,2})$/);

            if (match) {
                const dataAniversario = match[0];
                const mesAniversario = parseInt(dataAniversario.split("/")[1]);

                if (mesAniversario === mesAtual) {
                    img.style.display = "inline-block";
                    encontrouAniversariante = true;
                } else {
                    img.style.display = "none"; // Garante que as imagens de outros meses fiquem escondidas
                }
            } else {
                 img.style.display = "none";
            }
        });
    }

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    } else {
        // Se não houver aniversariantes no mês atual ou no dia, esconda a seção
        secNiver.style.display = "none";
    }
});
