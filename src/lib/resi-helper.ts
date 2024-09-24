export function checkCourier(nomorResi: string) {
    const kurir = {
        jne: /^[0-9]{15}$/,
        pos: /^[0-9]{11}$/,
        jnt: /^JP[0-9]{10}$/,
        jnt_cargo: /^[0-9]{12}$/,
        sicepat: /^[0-9]{12}$/,
        tiki: /^[0-9]{12}$/,
        anteraja: /^[0-9]{14}$/,
        wahana: /^AGN[0-9]{5}$/,
        ninja: /^NLIDAP[0-9]{10}$/,
        lion: /^[0-9]{11}$/,
        pcp: /^[0-9]{9}[A-Z]$/,
        jet: /^[0-9]{12}$/,
        rex: /^[0-9]{14}$/,
        first: /^[0-9]{8}$/,
        ide: /^IDS[0-9]{12}$/,
        spx: /^ID[0-9]{11}X$/,
        kgx: /^KGX[0-9]{12}$/,
        sap: /^SMI[0-9]{17}$/,
        jxe: /^[0-9]{10}$/,
        rpx: /^[0-9]{12}$/,
        lex: /^LXAD-[0-9]{10}$/,
        indah_cargo: /^PNG[0-9A-Z]{13}$/,
        dakota: /^[0-9]{9}[A-Z][0-9]{8}$/
    };

    for (const [namaKurir, polaResi] of Object.entries(kurir)) {
        if (polaResi.test(nomorResi)) {
            return {data: namaKurir};
        }
    }

    return {error: "Kurir tidak ditemukan atau nomor resi tidak valid"};
}


