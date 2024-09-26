export function checkCourier(nomorResi: string) {
    const kurir = {
        jne: /^[0-9]{15}$/,  // Hanya angka 15 digit
        pos: /^[0-9]{11}$/,  // Hanya angka 11 digit
        jnt: /^JP[0-9]+$/,   // Diawali "JP" diikuti angka berapapun
        jnt_cargo: /^[0-9]{12}$/,  // Hanya angka 12 digit
        sicepat: /^[0-9]{12}$/,    // Hanya angka 12 digit
        tiki: /^[0-9]{12}$/,       // Hanya angka 12 digit
        anteraja: /^[0-9]{14}$/,   // Hanya angka 14 digit
        wahana: /^AGN[0-9]+$/,     // Diawali "AGN" diikuti angka berapapun
        ninja: /^NLIDAP[0-9]+$/,   // Diawali "NLIDAP" diikuti angka berapapun
        lion: /^[0-9]{11}$/,       // Hanya angka 11 digit
        pcp: /^[0-9]{9}[A-Z]$/,    // Angka 9 digit dan satu huruf
        jet: /^[0-9]{12}$/,        // Hanya angka 12 digit
        rex: /^[0-9]{14}$/,        // Hanya angka 14 digit
        first: /^[0-9]{8}$/,       // Hanya angka 8 digit
        ide: /^IDS[0-9]+$/,        // Diawali "IDS" diikuti angka berapapun
        spx: /^ID[0-9]+X$/,        // Diawali "ID", angka berapapun, diakhiri "X"
        kgx: /^KGX[0-9]+$/,        // Diawali "KGX" diikuti angka berapapun
        sap: /^SMI[0-9]+$/,        // Diawali "SMI" diikuti angka berapapun
        jxe: /^[0-9]{10}$/,        // Hanya angka 10 digit
        rpx: /^[0-9]{12}$/,        // Hanya angka 12 digit
        lex: /^LXAD-[0-9]+$/,      // Diawali "LXAD-" diikuti angka berapapun
        indah_cargo: /^PNG[0-9A-Z]+$/,  // Diawali "PNG", angka atau huruf kombinasi
        dakota: /^[0-9]{9}[A-Z][0-9]{8}$/  // Angka 9 digit, satu huruf, angka 8 digit
    };

    for (const [namaKurir, polaResi] of Object.entries(kurir)) {
        if (polaResi.test(nomorResi)) {
            return {data: namaKurir};
        }
    }

    return {error: "Kurir tidak ditemukan atau nomor resi tidak valid"};
}
